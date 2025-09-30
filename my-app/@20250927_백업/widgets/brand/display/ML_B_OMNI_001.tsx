import { Display } from '@widgets/display/Display';
import { BrandOmni } from '../BrandOmni';
// 더미 데이터
const tabs = [
  { id: 'visit', label: '방문예약' },
  { id: 'coupon', label: '방문쿠폰' },
  { id: 'store', label: '점기반 예약' },
  { id: 'waiting', label: '점기반 웨이팅' },
];

const sampleData = {
  visit: [
    {
      shop: '강남점 1F',
      title: '의류 방문 시착 예약권',
      date: { start: '2025-07-07', end: '2025-08-07' },
    },
    {
      shop: '강남점 1F',
      title: '의류 방문 시착 예약권',
      date: { start: '2025-07-07', end: '2025-08-07' },
    },
    {
      shop: '강남점 1F',
      title: '의류 방문 시착 예약권',
      date: { start: '2025-07-07', end: '2025-08-07' },
    },
  ],
  coupon: [
    {
      shop: '홍대점 2F',
      title: '뷰티 체험 무료 쿠폰',
      date: { start: '2025-08-01', end: '2025-08-31' },
    },
    {
      shop: '신촌점 3F',
      title: '카페 음료 할인 쿠폰',
      date: { start: '2025-07-15', end: '2025-09-15' },
    },
    {
      shop: '이태원점 1F',
      title: '액세서리 체험 쿠폰',
      date: { start: '2025-08-10', end: '2025-09-10' },
    },
    {
      shop: '잠실점 B2',
      title: '스포츠웨어 피팅 쿠폰',
      date: { start: '2025-07-20', end: '2025-08-20' },
    },
  ],
  store: [
    {
      shop: '명동점 B1',
      title: '프리미엄 체험 서비스',
      price: 50000,
    },
    {
      shop: '명동점 B1',
      title: '프리미엄 체험 서비스',
      price: 50000,
    },
    {
      shop: '명동점 B1',
      title: '프리미엄 체험 서비스',
      price: 50000,
    },
    {
      shop: '명동점 B1',
      title: '프리미엄 체험 서비스',
      price: 50000,
    },
  ],
  waiting: [
    {
      shop: '건대점 5F',
      title: '인기 레스토랑 웨이팅',
      waiting: 8,
    },
    {
      shop: '성수점 1F',
      title: '트렌디 카페 웨이팅',
      waiting: 3,
    },
    {
      shop: '여의도점 3F',
      title: '브런치 맛집 웨이팅',
      waiting: 12,
    },
  ],
};

export const ML_B_OMNI_001 = () => {
  return (
    <Display title="옴니서비스">
      <BrandOmni tabs={tabs} data={sampleData} />
    </Display>
  );
};
