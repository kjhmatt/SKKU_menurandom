# 율천동 메뉴랜덤 (Yulcheon Food Picker) 🍱🍕🍜

성균관대학교 자연과학캠퍼스(수원 율천동/율전동) 인근 카카오맵 평점 3.5 이상 맛집을 3D 도보 내비게이션과 함께 추천해 주는 반응형 웹 애플리케이션입니다.

---

## 🌟 주요 기능 및 디자인

1. **배경 대형 음식 이모지 애니메이션 (Canvas)**
   - 초기 화면에서 다양한 음식 이모지들이 부드럽게 낙하하는 생동감 넘치는 비주얼 효과.
2. **Apple Liquid Glass 디자인 시스템**
   - Pretendard 글꼴 기반, 고해상도 글래스모피즘(초투명 블러, 광택 하이라이트, 곡면 섀도우) 적용.
   - 모바일 기기 및 데스크톱 모두에서 유려한 반응형 레이아웃 제공.
3. **인터랙티브 3D OpenStreetMap 내비게이션**
   - GPS 위치 권한 연동 (실패 시 성균관대 자과캠 기본 좌표 지원).
   - 진행 방향 틸트(Pitch 58°)와 네비게이션 시점.
   - 중앙 하단 네온 세모 내비게이션 마커 및 OSRM 실시간 도보 경로 폴리라인 표시.
   - 목적지 식당 위치에 3D 말풍선 메시지 박스 핀 렌더링.
4. **상단 슬라이드업 팝업창**
   - 중앙의 메인 카드가 위로 미끄러지듯 부드럽게 이동하여 상단에 고정.
   - 추천 식당명, 평점/카테고리 뱃지, 1~2문장 요약 설명, 100px 사각 사진 갤러리 및 재추천/카카오맵 연동 버튼 제공.
5. **성균관대 자과캠 카카오맵 3.5+ 맛집 데이터베이스**
   - 봉수육, 포동이네, 율전방앗간, 보리네제육볶음, 이찌바, 헤이모이라, 모우만 등 엄선된 율전동 맛집 탑재.

---

## 🚀 GitHub Pages 배포 방법

이 프로젝트는 순수 HTML5 / CSS3 / Vanilla JavaScript로 개발되어 별도의 빌드 단계 없이 GitHub Pages에 바로 배포할 수 있습니다.

1. **GitHub 저장소 생성 및 코드 Push**
   ```bash
   git init
   git add .
   git commit -m "feat: 율천동 메뉴랜덤 초기 버전"
   git branch -M main
   git remote add origin https://github.com/<사용자명>/<저장소명>.git
   git push -u origin main
   ```

2. **GitHub Pages 활성화**
   - GitHub 저장소 페이지의 **Settings** 탭으로 이동합니다.
   - 좌측 메뉴에서 **Pages**를 클릭합니다.
   - **Build and deployment > Source**에서 **Deploy from a branch**를 선택합니다.
   - **Branch**를 `main` (루트 `/ (root)`)으로 설정하고 **Save**를 누릅니다.
   - 약 1~2분 후 `https://<사용자명>.github.io/<저장소명>/` URL로 웹사이트가 즉시 호스팅됩니다!

---

## 📂 파일 구조

```
yulcheon-food-picker/
├── index.html          # 메인 HTML 문서
├── css/
│   └── style.css       # Apple Liquid Glass 스타일 및 반응형 CSS
├── js/
│   ├── restaurants.js  # 성대 자과캠 3.5+ 맛집 데이터베이스
│   ├── emoji-rain.js   # 대형 이모지 캔버스 파티클 애니메이션
│   ├── navigation.js   # MapLibre GL JS 3D 지도 & OSRM 도보 경로 모듈
│   └── app.js          # 추천 제어 및 팝업 슬라이드업 트랜지션 로직
└── README.md           # 프로젝트 문서 및 배포 안내
```
