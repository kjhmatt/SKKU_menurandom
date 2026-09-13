/**
 * 성균관대학교 자연과학캠퍼스 (율천동/율전동) 카카오맵 평점 3.5 이상 맛집 데이터
 */

// 성균관대학교 자연과학캠퍼스 후문(쪽문) 기준 좌표 (GPS 권한 없을 시 기본 출발지)
const SKKU_CAMPUS_COORDS = {
  lat: 37.29595,
  lng: 126.97415,
  name: "성균관대 자연과학캠퍼스 후문(쪽문)"
};

const YULCHEON_RESTAURANTS = [
  {
    id: "bongsooyuk",
    name: "봉수육",
    category: "한식 / 수육 & 나베",
    rating: 4.6,
    kakao_review_count: 320,
    price_range: "1인 13,000원 ~ 20,000원",
    summary: "야들야들하고 촉촉한 가브리살 수육과 얼큰한 수육나베가 일품인 율전동 대표 웨이팅 맛집입니다.",
    tags: ["가브리수육", "수육나베", "웨이팅맛집", "성대핫플"],
    coords: { lat: 37.29815, lng: 126.97235 },
    kakao_url: "https://map.kakao.com/?q=%EC%9C%A8%EC%A0%84%EB%8F%99%20%EB%B4%89%EC%88%98%EC%9C%A1",
    photos: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "podongine",
    name: "포동이네 성대점",
    category: "일식 / 초밥 & 참치",
    rating: 4.3,
    kakao_review_count: 215,
    price_range: "1인 12,000원 ~ 25,000원",
    summary: "입안에서 사르르 녹는 도로초밥과 두툼한 특선초밥 명가. 뚝배기 어묵우동이 서비스로 나옵니다.",
    tags: ["특선초밥", "도로초밥", "어묵우동서비스", "성대역맛집"],
    coords: { lat: 37.29962, lng: 126.97125 },
    kakao_url: "https://map.kakao.com/?q=%ED%8F%AC%EB%8F%99%EC%9D%B4%EB%84%A4%20%EC%84%B1%EB%8C%80%EC%A0%90",
    photos: [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "yulcheon_bangatgan",
    name: "율전방앗간",
    category: "한식주점 / 요리",
    rating: 4.5,
    kakao_review_count: 140,
    price_range: "1인 14,000원 ~ 22,000원",
    summary: "신선한 한우 육회와 바삭한 감자채전, 모던하고 깔끔한 감성 인테리어로 인기 있는 감성 주점입니다.",
    tags: ["한우육회", "감자채전", "감성술집", "분위기좋은"],
    coords: { lat: 37.29742, lng: 126.97312 },
    kakao_url: "https://map.kakao.com/?q=%EC%9C%A8%EC%A0%84%EB%B0%A9%EC%95%97%EA%B0%84",
    photos: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "borine",
    name: "보리네제육볶음",
    category: "한식 / 백반",
    rating: 4.4,
    kakao_review_count: 180,
    price_range: "1인 8,000원 ~ 10,000원",
    summary: "불향 가득한 직화 제육볶음과 푸짐한 쌈채소, 계란찜이 함께 나오는 가성비 백반 맛집입니다.",
    tags: ["직화제육", "불향가득", "가성비최고", "혼밥가능"],
    coords: { lat: 37.29688, lng: 126.97405 },
    kakao_url: "https://map.kakao.com/?q=%EB%B3%B4%EB%A6%AC%EB%84%A4%EC%A0%9C%EC%9C%A1%EB%B3%B6%EC%9D%8C",
    photos: []
  },
  {
    id: "ichiba",
    name: "이찌바",
    category: "일식 / 텐동 & 사케동",
    rating: 4.3,
    kakao_review_count: 160,
    price_range: "1인 11,000원 ~ 16,000원",
    summary: "바삭하고 고소하게 튀겨낸 수제 텐동과 두툼한 생연어 덮밥이 인기인 아늑한 일식당입니다.",
    tags: ["스페셜텐동", "연어사케동", "정갈한일식", "혼밥추천"],
    coords: { lat: 37.29880, lng: 126.97180 },
    kakao_url: "https://map.kakao.com/?q=%EC%9D%B4%EC% obstacles%EB%B0%94%20%EC%84%B1%EB%8C%80",
    photos: [
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "heymoira",
    name: "헤이모이라",
    category: "양식 / 수제버거",
    rating: 4.7,
    kakao_review_count: 110,
    price_range: "1인 9,500원 ~ 15,000원",
    summary: "육즙이 터지는 100% 소고기 패티와 바삭한 트러플 감자튀김이 일품인 수제버거 맛집입니다.",
    tags: ["수제버거", "트러플프라이", "미국감성", "육즙폭발"],
    coords: { lat: 37.29620, lng: 126.97340 },
    kakao_url: "https://map.kakao.com/?q=%ED%97%A4%EC%9D%B4%EB%AA%A8%EC%9D%B4%EB%9D%BC",
    photos: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "myeon_sikdang",
    name: "면식당 수원성대점",
    category: "일식 / 라멘 & 마제소바",
    rating: 4.4,
    kakao_review_count: 175,
    price_range: "1인 8,500원 ~ 13,000원",
    summary: "진한 돈코츠 라멘과 감칠맛 넘치는 마제소바, 겉바속촉 치즈카츠가 맛있는 면요리 전문점입니다.",
    tags: ["마제소바", "돈코츠라멘", "치즈카츠", "깔끔한인테리어"],
    coords: { lat: 37.29910, lng: 126.97210 },
    kakao_url: "https://map.kakao.com/?q=%EB%A9%B4%EC%8B%9D%EB%8B%B9%20%EC%84%B1%EB%8C%80%EC%A0%90",
    photos: [
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "mowman",
    name: "모우만",
    category: "일식 / 판모밀 & 만두",
    rating: 4.5,
    kakao_review_count: 195,
    price_range: "1인 8,000원 ~ 12,000원",
    summary: "시원하고 깊은 육수의 판모밀과 얇은 피에 육즙 가득한 찐만두가 유명한 자과캠 전통 맛집입니다.",
    tags: ["냉모밀", "수제통만두", "치즈돈까스", "여름필수코스"],
    coords: { lat: 37.29580, lng: 126.97480 },
    kakao_url: "https://map.kakao.com/?q=%EB%AA%A8%EC%9A%B0%EB%A7%8C%20%EC%84%B1%EB%8C%80",
    photos: []
  },
  {
    id: "jungsung_sikdang",
    name: "정성식당",
    category: "한식 / 김치찜 & 두루치기",
    rating: 4.2,
    kakao_review_count: 130,
    price_range: "1인 8,000원 ~ 10,000원",
    summary: "푹 익은 묵은지 김치찜과 매콤달콤한 두루치기가 밥도둑인 정겨운 집밥 스타일 식당입니다.",
    tags: ["묵은지김치찜", "매실두루치기", "밥무한리필", "집밥감성"],
    coords: { lat: 37.29850, lng: 126.97090 },
    kakao_url: "https://map.kakao.com/?q=%EC%A0%95%EC%84%B1%EC%8B%9D%EB%8B%B9%20%EC%84%B1%EB%8C%80",
    photos: []
  },
  {
    id: "ujeong_pork",
    name: "우정돼지",
    category: "고기구이 / 삼겹살 & 목살",
    rating: 4.5,
    kakao_review_count: 155,
    price_range: "1인 14,000원 ~ 20,000원",
    summary: "두툼한 숙성 생삼겹살과 향긋한 미나리, 김치를 솥뚜껑에 노릇하게 구워주는 고기 맛집입니다.",
    tags: ["솥뚜껑삼겹살", "미나리삼겹", "구워주는고기", "회식추천"],
    coords: { lat: 37.29710, lng: 126.97150 },
    kakao_url: "https://map.kakao.com/?q=%EC%9A%B0%EC%A0%95%EB%8F%BC%EC%A7%80%20%EC%84%B1%EB%8C%80",
    photos: []
  },
  {
    id: "capitol",
    name: "까삐딸",
    category: "양식 / 파스타 & 피자",
    rating: 4.2,
    kakao_review_count: 115,
    price_range: "1인 10,000원 ~ 16,000원",
    summary: "합리적인 가격으로 즐기는 꾸덕한 크림 파스타와 갓 구운 화덕 피자가 매력적인 이탈리안 식당입니다.",
    tags: ["투움바파스타", "고르곤졸라피자", "가성비양식", "데이트"],
    coords: { lat: 37.29650, lng: 126.97270 },
    kakao_url: "https://map.kakao.com/?q=%EA%B9%8C%EC%82%90%ED%83%88%20%EC%84%B1%EB%8C%80",
    photos: []
  },
  {
    id: "dongne_jjambbong",
    name: "동네짬뽕",
    category: "중식 / 짬뽕 & 탕수육",
    rating: 4.4,
    kakao_review_count: 145,
    price_range: "1인 8,000원 ~ 14,000원",
    summary: "진하고 칼칼한 고기 육수의 짬뽕과 쫀득한 찹쌀 탕수육이 일품인 율전동 중식 맛집입니다.",
    tags: ["진한국물짬뽕", "찹쌀탕수육", "해장맛집", "공기밥무료"],
    coords: { lat: 37.29790, lng: 126.97430 },
    kakao_url: "https://map.kakao.com/?q=%EB%8F%99%EB%84%A4%EC%A7%AC%EB%BD%95%20%EC%9C%A8%EC%A0%84",
    photos: []
  },
  {
    id: "dongtong_bossam",
    name: "돈통마늘보쌈 율전점",
    category: "한식 / 마늘보쌈",
    rating: 4.3,
    kakao_review_count: 98,
    price_range: "1인 12,000원 ~ 18,000원",
    summary: "알싸하고 달콤한 특제 마늘 소스를 듬뿍 얹은 부드러운 보쌈과 순두부찌개가 든든한 맛집입니다.",
    tags: ["마늘보쌈", "순두부찌개", "단체모임", "푸짐한한상"],
    coords: { lat: 37.29930, lng: 126.97360 },
    kakao_url: "https://map.kakao.com/?q=%EB%8F%88%ED%86%B5%EB%A7%88%EB%8A%98%EB%B3%B4%EC%8C%88%20%EC%9C%A8%EC%A0%84%EC%A0%90",
    photos: []
  },
  {
    id: "ilmi_dakgalbi",
    name: "일미닭갈비 성대점",
    category: "한식 / 닭갈비",
    rating: 4.1,
    kakao_review_count: 120,
    price_range: "1인 8,000원 ~ 11,000원",
    summary: "매콤달콤한 철판 닭갈비에 치즈 사리와 볶음밥까지 든든하게 먹을 수 있는 전통 닭갈비집입니다.",
    tags: ["철판닭갈비", "치즈사리", "볶음밥필수", "학생할인감성"],
    coords: { lat: 37.29760, lng: 126.97190 },
    kakao_url: "https://map.kakao.com/?q=%EC%9D%BC%EB%AF%B8%EB%8B%AD%EA%B0%88%EB%B9%84%20%EC%84%B1%EB%8C%80",
    photos: []
  },
  {
    id: "cheongnyeon_dabang",
    name: "청년다방 수원성대점",
    category: "분식 / 즉석떡볶이",
    rating: 4.1,
    kakao_review_count: 140,
    price_range: "1인 9,000원 ~ 14,000원",
    summary: "불향 가득 차돌박이와 길쭉한 떡, 버터갈릭 감자튀김의 조화가 환상적인 즉석 떡볶이집입니다.",
    tags: ["차돌떡볶이", "버터갈릭감튀", "롱떡볶이", "분식데이트"],
    coords: { lat: 37.29895, lng: 126.97160 },
    kakao_url: "https://map.kakao.com/?q=%EC%B2%AD%EB%85%84%EB%8B%A4%EB%B0%A9%20%EC%88%98%EC%9B%90%EC%84%B1%EB%8C%80%EC%A0%90",
    photos: []
  },
  {
    id: "jjigaemaul",
    name: "찌개마을",
    category: "한식 / 김치찌개 & 동태탕",
    rating: 4.3,
    kakao_review_count: 105,
    price_range: "1인 7,500원 ~ 11,000원",
    summary: "양푼에 통돼지고기가 듬뿍 들어간 얼큰 칼칼 양푼김치찌개로 학생들의 든든한 식사를 책임집니다.",
    tags: ["양푼김치찌개", "통돼지고기", "라면사리필수", "해장추천"],
    coords: { lat: 37.29780, lng: 126.97290 },
    kakao_url: "https://map.kakao.com/?q=%EC%B0%8C%EA%B0%9C%EB%A7%88%EC%9D%84%20%EC%9C%A8%EC%A0%84",
    photos: []
  }
];
