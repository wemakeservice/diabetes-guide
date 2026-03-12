export interface DietPlan {
  id: string;
  type: '아침' | '점심' | '저녁' | '간식';
  calories: number;
  title: string;
  items: string[];
  description: string;
}

export const dietPlans: DietPlan[] = [
  {
    id: 'b1',
    type: '아침',
    calories: 400,
    title: '현미밥과 두부채소구이',
    items: ['현미밥 1/2공기', '두부 반 모 구이', '시금치 나물', '맑은 콩나물국'],
    description: '혈당 스파이크를 막아주는 복합 탄수화물과 식물성 단백질 식단'
  },
  {
    id: 'b2',
    type: '아침',
    calories: 350,
    title: '오트밀과 무가당 요거트',
    items: ['오트밀 40g', '무가당 그릭 요거트', '블루베리 한 줌', '삶은 달걀 1개'],
    description: '간편하게 섭취할 수 있으면서도 포만감이 오래 유지되는 서양식 아침'
  },
  {
    id: 'l1',
    type: '점심',
    calories: 550,
    title: '잡곡밥과 닭가슴살 샐러드',
    items: ['귀리 섞인 잡곡밥 1/2공기', '닭가슴살 100g 샐러드', '발사믹 드레싱', '연근조림'],
    description: '단백질이 풍부하여 오후 내내 든든한 점심 식사'
  },
  {
    id: 'l2',
    type: '점심',
    calories: 500,
    title: '메밀국수와 채소 겉절이',
    items: ['순메밀국수 (양념 최소화)', '오이와 양파 겉절이', '두부 부침'],
    description: '밀가루를 피하고 메밀로 혈당 상승을 완만하게 하는 한 끼'
  },
  {
    id: 'd1',
    type: '저녁',
    calories: 450,
    title: '연어 구이와 찐 채소',
    items: ['구운 연어 1토막', '찐 브로콜리와 당근', '버섯 볶음', '잡곡밥 1/3공기'],
    description: '오메가-3가 풍부하며 탄수화물을 최소화한 저녁 식단'
  },
  {
    id: 'd2',
    type: '저녁',
    calories: 400,
    title: '소고기 샤브샤브',
    items: ['기름기 없는 소고기 100g', '배추, 청경채, 숙주 듬뿍', '간장 폰즈 소스 (소량)'],
    description: '채소를 많이 섭취할 수 있고 소화가 잘 되는 저녁 메뉴'
  },
  {
    id: 's1',
    type: '간식',
    calories: 150,
    title: '견과류와 방울토마토',
    items: ['호두, 아몬드 한 줌 (30g)', '방울토마토 10알'],
    description: '식간 허기를 달래면서도 혈당 수치에 영향을 적게 주는 건강 간식'
  }
];
