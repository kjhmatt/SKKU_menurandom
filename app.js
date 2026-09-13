/**
 * 율천동 메뉴랜덤 메인 애플리케이션 스크립트
 */

document.addEventListener("DOMContentLoaded", () => {
  const emojiRain = new EmojiRain("bg-canvas");
  const navMap = new NavigationMap("map-container");

  const containerWrap = document.getElementById("container-wrap");
  const mainCard = document.getElementById("main-card");
  const mapContainer = document.getElementById("map-container");

  let currentRestaurant = null;
  let isNavigating = false;
  let activeDepartureCoords = null;

  const startBtn = document.getElementById("start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => handleStartRecommend());
  }

  function getRestaurantsWithin15Minutes(originCoords) {
    return YULCHEON_RESTAURANTS.filter((rest) => {
      const directDist = NavigationMap.calculateDistance(originCoords, rest.coords);
      const estWalkingDist = Math.round(directDist * 1.25);
      const estMinutes = NavigationMap.estimateWalkTime(estWalkingDist);
      return estMinutes <= 15;
    });
  }

  function resolveDepartureCoords(userCoords) {
    if (!userCoords || userCoords.isDefault) {
      return { ...SKKU_CAMPUS_COORDS, isDefault: true };
    }
    const nearby = getRestaurantsWithin15Minutes(userCoords);
    if (nearby.length > 0) {
      return { lat: userCoords.lat, lng: userCoords.lng, isDefault: false, name: "현재 위치" };
    }
    return { ...SKKU_CAMPUS_COORDS, isDefault: true };
  }

  function pickRandomNearbyRestaurant(originCoords) {
    let eligible = getRestaurantsWithin15Minutes(originCoords);
    if (eligible.length === 0) eligible = YULCHEON_RESTAURANTS;
    if (eligible.length === 1) return eligible[0];

    let picked, attempts = 0;
    do {
      picked = eligible[Math.floor(Math.random() * eligible.length)];
      attempts++;
    } while (currentRestaurant && picked.id === currentRestaurant.id && attempts < 15);

    return picked;
  }

  async function handleStartRecommend() {
    if (isNavigating) return;

    startBtn.innerHTML = `
      <div class="loading-indicator">
        <div class="spinner"></div>
        <span>도보 15분 이내 맛집 찾는 중...</span>
      </div>
    `;
    startBtn.style.pointerEvents = "none";

    // GPS 위치 획득
    const rawGpsCoords = await navMap.getUserLocation();
    activeDepartureCoords = resolveDepartureCoords(rawGpsCoords);

    // 맛집 선별
    const picked = pickRandomNearbyRestaurant(activeDepartureCoords);
    currentRestaurant = picked;

    // 이모지 배경 fade-out 및 지도 활성화
    emojiRain.fadeOut(700);
    mapContainer.classList.add("active");

    // 지도 초기화 선행
    navMap.initMap(activeDepartureCoords);

    // ① 카드를 미리 팝업 컨텐츠로 교체 (아직 중앙에 있는 상태)
    renderPopupContent(picked, null);

    // ② 교체 직후 한 프레임 대기 후 슬라이드업 트랜지션 실행
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        containerWrap.classList.add("active-result");
        mainCard.classList.add("card-popup");
      });
    });

    // ③ 동시에 경로 탐색 (지도 load 완료까지 waitForLoad로 자동 대기)
    isNavigating = true;
    const routeInfo = await navMap.showRouteToRestaurant(picked, activeDepartureCoords);

    // ④ 경로 결과 반영 (도보 시간 업데이트)
    renderPopupContent(picked, routeInfo);
  }

  function renderPopupContent(restaurant, routeInfo) {
    // 사진: 등록된 경우에만 표시
    let galleryHtml = "";
    if (restaurant.photos && restaurant.photos.length > 0) {
      const photoItems = restaurant.photos.slice(0, 3).map((url, idx) =>
        `<div class="photo-item">
          <img src="${url}" alt="${restaurant.name} 사진 ${idx + 1}" loading="lazy"
               onerror="this.parentElement.style.display='none'" />
        </div>`
      ).join("");
      galleryHtml = `<div class="popup-gallery">${photoItems}</div>`;
    }

    const durationMin = routeInfo ? routeInfo.durationMinutes : "—";
    const distanceM = routeInfo ? routeInfo.distanceMeters : "—";
    const walkText = routeInfo
      ? `도보 약 ${durationMin}분 (${distanceM}m)`
      : "경로 탐색 중...";
    const originLabel = activeDepartureCoords && activeDepartureCoords.isDefault
      ? "성대 후문(쪽문) 출발"
      : "현 위치 출발";

    mainCard.innerHTML = `
      <div class="popup-content">
        <div class="popup-header">
          <div class="popup-title-group">
            <h2 class="popup-name">${restaurant.name}</h2>
            <span class="popup-category-badge">${restaurant.category}</span>
          </div>
          <div class="popup-rating-badge">
            <span>⭐</span>
            <span>${restaurant.rating.toFixed(1)}</span>
          </div>
        </div>

        <p class="popup-summary">${restaurant.summary}</p>

        <div class="popup-meta">
          <span class="popup-meta-item highlight-walk">🚶 ${walkText}</span>
          <span class="popup-meta-item badge-origin">📍 ${originLabel}</span>
          <span class="popup-meta-item">🏷️ ${restaurant.price_range}</span>
        </div>

        ${galleryHtml}

        <div class="popup-actions">
          <button id="reroll-btn" class="btn-sub-action btn-reroll">
            <span>🎲 다른 메뉴 추천</span>
          </button>
          <a href="${restaurant.kakao_url}" target="_blank" rel="noopener noreferrer" class="btn-sub-action btn-kakao-map">
            <span>🟡 카카오맵 바로보기</span>
          </a>
        </div>
      </div>
    `;

    const rerollBtn = document.getElementById("reroll-btn");
    if (rerollBtn) {
      rerollBtn.addEventListener("click", handleReroll);
    }
  }

  async function handleReroll() {
    const rerollBtn = document.getElementById("reroll-btn");
    if (rerollBtn) {
      rerollBtn.style.opacity = "0.6";
      rerollBtn.innerHTML = `<span>🔄 탐색 중...</span>`;
    }

    const nextRestaurant = pickRandomNearbyRestaurant(activeDepartureCoords);
    currentRestaurant = nextRestaurant;

    renderPopupContent(nextRestaurant, null);

    const routeInfo = await navMap.showRouteToRestaurant(nextRestaurant, activeDepartureCoords);
    renderPopupContent(nextRestaurant, routeInfo);
  }
});
