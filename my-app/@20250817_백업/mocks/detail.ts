import { GiftType, PromoGiftType } from '@/widgets/detail/GiftPackageInfo';
import { mockProdCard, mockProdImage, mockProdImages } from './product';

// ✅------ 상품 데이터 -----
const { button, ...item } = mockProdCard;
// 상품 : 일반 상품
export const mockProdGeneralItem = {
  ...item,
  id: 'prod-1',
  code: 'A1137590',
  prodType: 'general',
  prodDetailType: undefined,
  prodState: 'onSale',
  prodCategory: 'book',
  isCart: true, // 장바구니 사용불가 YN
  isGiftable: true, // 선물 가능 YN
  branch: '더현대 서울점',
  shortDesc: '200ml, 500ml, 1,000ml, 2000ml, 5000ml 총 5종입니다.',
  thumbImages: [...mockProdImages, mockProdImage, mockProdImage],
  price: {
    current: 129000,
    original: 189000,
    prevSale: {
      value: 180000,
      startDate: '20250402',
    },
    discountRate: 32,
  },
  crossDiscount: {
    case: 'case2',
    badge: '수량할인',
    type: 'rate',
    value: [
      {
        condition: 1,
        benefit: 1,
      },
      {
        condition: 3,
        benefit: 3,
      },
    ],
    date: {
      start: '20250407',
      end: '20250417',
    },
  },
  stock: 9, // 재고 수량

  // 옵션 리스트
  optionList: [
    {
      label: '색상',
      type: '[선택 1] [나이키공식스토어]나이키 여성 우먼스 나이키에어맥스(1,000,000원) 두 줄 까지 노출 말줄임 [선택 1] [나이키공식스토어]나이키 여성 우먼스 나이키에어맥스(1,000,000원) 두 줄 까지 노출 말줄임',
      subs: [
        {
          label: '블랙',
          value: 'black',
          colorCode: '#F12E2D',
          stock: 999,
          details: [
            {
              type: 'Size',
              subs: [
                { subLabel: 'XS', subValue: 'xs', stock: 0, subPrice: -1000 },
                { subLabel: 'S', subValue: 's', stock: 999 },
                { subLabel: 'M', subValue: 'm', stock: 50, subPrice: 1000 },
                { subLabel: 'L', subValue: 'l', stock: 20 },
                { subLabel: 'XL', subValue: 'xl', stock: 5 },
              ],
            },
            {
              type: 'Sleeve',
              subs: [
                { subLabel: '긴팔', subValue: 'long', stock: 10 },
                { subLabel: '반팔', subValue: 'short', stock: 100 },
              ],
            },
          ],
        },
        {
          label: '레드',
          image: mockProdImage,
          value: 'red',
          stock: 999,
          details: [
            {
              type: 'Size',
              subs: [
                { subLabel: 'XS', subValue: 'xs', stock: 9, subPrice: -1000 },
                { subLabel: 'S', subValue: 's', stock: 0 },
                { subLabel: 'M', subValue: 'm', stock: 50, subPrice: 1000 },
                { subLabel: 'L', subValue: 'l', stock: 5 },
              ],
            },
            {
              type: 'Sleeve',
              subs: [
                { subLabel: '긴팔', subValue: 'long', stock: 1 },
                { subLabel: '반팔', subValue: 'short', stock: 2 },
              ],
            },
          ],
        },
        {
          label: '블루',
          value: 'blue',
          stock: 999,
          details: [
            {
              type: 'Size',
              subs: [
                { subLabel: 'XS', subValue: 'xs', stock: 0, subPrice: -1000 },
                { subLabel: 'S', subValue: 's', stock: 999 },
                { subLabel: 'M', subValue: 'm', stock: 50, subPrice: 1000 },
                { subLabel: 'L', subValue: 'l', stock: 20 },
                { subLabel: 'XL', subValue: 'xl', stock: 5 },
              ],
            },
            {
              type: 'Sleeve',
              subs: [
                { subLabel: '긴팔', subValue: 'long', stock: 10 },
                { subLabel: '반팔', subValue: 'short', stock: 100 },
              ],
            },
          ],
        },
        {
          label: '그린',
          value: 'green',
          stock: 999,
          details: [
            {
              type: 'Size',
              subs: [
                { subLabel: 'XS', subValue: 'xs', stock: 0, subPrice: -1000 },
                { subLabel: 'S', subValue: 's', stock: 0 },
                { subLabel: 'M', subValue: 'm', stock: 0, subPrice: 1000 },
                { subLabel: 'L', subValue: 'l', stock: 0 },
              ],
            },
            {
              type: 'Sleeve',
              subs: [
                { subLabel: '긴팔', subValue: 'long', stock: 1 },
                { subLabel: '반팔', subValue: 'short', stock: 2 },
              ],
            },
          ],
        },
      ],
    },
  ],
  // 추가 입력 옵션 정보
  additionalOptions: [
    { name: '이름', placeholder: '받으실 분의 이름을 입력해 주세요' },
    { name: '휴대폰 번호', placeholder: '휴대폰 번호를 “-”없이 입력해 주세요' },
    { name: '리본 문구', placeholder: '리본에 들어갈 문구를 입력해 주세요' },
    { name: '전달 메시지', placeholder: '전달 메시지를 입력해 주세요' },
  ],

  // ---- 옵셔널 데이터 ----
  // 단위정보 (상단 탑)
  unit: {
    label: '100ml', // 단위
    price: 15000, // 단위별 가격
  },
  releaseDate: '202509031000',
  restock: false, // 재입고 예정
  showRemainingQuantity: true, // 남은 수량 보여주기 여부
  minOrder: 1, // 최소주문 가능수량
  perPersonOrderLimit: 5, // 1인 최대 판매가능수량
  dailyOrderLimit: 6, // 1일 최대 판매가능수량
  soldoutText: '품절상품 노출 텍스트 샘플샘플샘플', // 품절 상품 상단에 노출되는 텍스트
  package: {
    use: true, // 포장여부 Y 데이터
    paid: 3000, // 유료 포장인 경우 가격 / 무료 포장은 가격 정보 없음
  },
  // 예약배송
  preOrder: {
    start: '20250410',
    end: '20250415',
  },
  preOrderDelivery: {
    start: '20250420',
    end: '20250425',
  },
  // 추가설치비
  installationFee: [
    { title: '서울/경기', fee: 100000 },
    { title: '그외', fee: 150000 },
  ],
  // 이용일자지정여부
  setUseDate: true,

  // salePeriod: {
  //   // 세일 기간
  //   start: '20250410',
  //   end: '20250731',
  //   isTimesale: true, // 타임세일 여부 (boolean)
  // },

  // 중개상품
  isBrockerage: false,
};

// 상품 : 옥션 상품
export const mockProdAuctionItem = {
  ...mockProdGeneralItem,
  prodType: 'auction',
  preOrder: undefined,
  // 구매 가능한 경로로 진입했는지 여부
  isPerchaseURL: false,
  // 낙찰된 유저인지 여부
  isContractUser: false,
  userName: '김현대',
  // 옥션 가격
  price: 1000000, // 시작가
  // 옥션 진행 기간
  schedule: {
    start: '202507311000',
    end: '202508081730',
  },
  // 구매 가능 기간
  purchasePeriod: {
    start: '202507281000',
    end: '202508081730',
  },
  bidders: [
    {
      id: 'abcdefchijklmnopqrstuvwxyz',
      value: 1001000,
      date: '20251225234251',
    },
    {
      id: 'sample1234564',
      value: 1600000,
      date: '20251225234252',
    },
    {
      id: 'tester777',
      value: 1003000,
      date: '20251225234253',
    },
    {
      id: 'abcdefchijklmnopqrstuvwxyz',
      value: 1700000,
      date: '20251225234251',
    },
    {
      id: 'sample',
      value: 1800000,
      date: '20251225234252',
    },
    {
      id: 'tester5',
      value: 1003000,
      date: '20251225234253',
    },
  ],
  minOrder: undefined,
  perPersonOrderLimit: undefined,
  dailyOrderLimit: undefined,
  package: undefined,
};

// 상품 : 쇼룸 상품
export const mockProdShowroomItem = {
  ...mockProdGeneralItem,
  prodType: 'showroom',
  useChat: false, // 1:1채팅 YN
  // isOnline: false, // 옴니결제+온라인 여부 (기본 false: 옴니결제만)
};

// 상품 : 라이브 상품
export const mockProdLiveItem = {
  ...mockProdGeneralItem,
  prodType: 'live',
  preOrder: undefined,
  preLive: false, // 미리구매YN
  // 라이브 일정
  schedule: {
    start: '202508081000',
    end: '202508081500',
  },
};

// 상품 : 스토어픽 상품
export const mockProdStorepickItem = {
  ...mockProdGeneralItem,
  prodType: 'storepick',
  storePickOnly: true,
  pickupBranch: '무역센터점 4F',
  // 당일 픽업 여부 : 당일 핍업 가능 여부에 따라 PickupDateSection 노출
  todayPick: true,
  // 일반,직접수취
  pickupLocationName: '예술의전당 한가람미술관',
  // 전시회 상품
  exhibition: {
    expirationPeriod: { start: '2025.10.10', end: '2025.12.31' },
    locationName: '예술의전당 한가람미술관',
  },
};

// 상품 : 래플 상품
export const mockProdRaffleItem = {
  ...mockProdGeneralItem,
  prodType: 'raffle',
  benefits: [],
  preOrder: undefined,
  // 판매 가격
  price: 1000000,
  // 응모 가능 개수
  stock: 250,
  // 참여자 수
  appliedCount: 4862,
  // 응모 진행 기간
  schedule: {
    start: '202507201000',
    end: '202507271630',
    result: '202507271700',
  },
  // 구매 가능 기간
  purchasePeriod: {
    start: '202507271000',
    end: '202508081730',
  },
  perPersonOrderLimit: undefined,
  dailyOrderLimit: undefined,
  package: undefined,
};

// 상품 : 햄퍼 상품
export const mockProdHamperItem = {
  ...mockProdGeneralItem,
  prodType: 'hamper',
};

// 상품 : 딜 상품
export const mockProdDealItem = {
  ...mockProdGeneralItem,
  prodType: 'deal',
  benefits: [],
  preOrder: undefined,
  price: [150000, 200000, 250000],
  RepresentativePrice: 150000,
  stock: 500,
  soldNumber: 50,
  schedule: {
    start: '202507201000',
    end: '202508031630',
  },
};

// 상품 : 사은품 상품
export const mockProdFreegiftItem = {
  ...mockProdGeneralItem,
  prodType: 'freegift',
  preOrder: undefined,
  freeGift: 'exclusive', //experience(체험단형), exclusive(단독형)
  // 신청 가능 기간
  period: {
    start: '202507251000',
    end: '202507251500',
  },
};

// 상품 : 렌탈 상품
export const mockProdRentalItem = {
  ...mockProdGeneralItem,
  prodType: 'rental',
  package: undefined,
  crossDiscount: undefined,
  freeOrder: undefined,
  minOrder: undefined,
  perPersonOrderLimit: undefined,
  dailyOrderLimit: undefined,
  optionList: undefined,
};

// 상품 : 문화센터 상품
export const mockProdCultureCenterItem = {
  ...mockProdGeneralItem,
  prodType: 'cultureCenter',
  isCanceled: false,
};

// 상품 : 서비스예약 상품
export const mockProdServiceReserveItem = {
  ...mockProdGeneralItem,
  prodType: 'serviceReserve',
  isConsultPay: true, // 상담후결제 YN
};

// 상품 : 방문쿠폰 상품
export const mockProdVisitCouponItem = {
  ...mockProdGeneralItem,
  prodType: 'visitCoupon',
};

// 상품 : 방문예약 상품
export const mockProdVisitReserveItem = {
  ...mockProdGeneralItem,
  prodType: 'visitReserve',
};

// ---------------------------------------------------------------------
// prodDetailType 에 따른 데이터

// RSVP
export const mockProdRsvpItem = {
  ...mockProdGeneralItem,
  prodDetailType: 'rsvp',
};

// 스페셜브랜드
export const mockSpecialBrand = {
  CHANEL: {
    brandLink: '#',
    brandImage: {
      src: '/images/detail/img_brand_chanel.svg',
      alt: 'CHANEL',
    },
    brandBottomImage: {
      src: '/images/detail/img_brand_chanel2.png',
      alt: '샤넬 공식 판매처',
    },
    specialClass: 'chanel',
  },
};

export const mockProdSpecialBrandItem = {
  ...mockProdGeneralItem,
  prodDetailType: 'specialBrand',
  ...mockSpecialBrand.CHANEL,
  colors: [
    { code: '#F12E2D', name: '레드 까말리아' },
    { code: '#2EDE7D', name: '네온 그린' },
    { code: '#2ECADE', name: '스카이블루' },
    { code: '#F1B92D', name: '옐로우' },
    { code: '#FFFFFF', name: '스노우 화이트' },
    { code: '#dd7319', name: '오렌지' },
    { code: '#F12E2D', name: '레드 까말리아' },
    { code: '#2EDE7D', name: '네온 그린' },
    { code: '#2ECADE', name: '스카이블루' },
    { code: '#F1B92D', name: '옐로우' },
  ],
};

// 방문픽업
export const mockProdVisitPickItem = {
  ...mockProdGeneralItem,
  prodDetailType: 'visitPick',
};

// e쿠폰&이용권
export const mockProdECouponItem = {
  ...mockProdGeneralItem,
  prodDetailType: 'eCoupon',
};

// 명절상품
export const mockProdHolidayOnlyItem = {
  ...mockProdGeneralItem,
  prodDetailType: 'holidayOnly',
  useChat: true,
  prdNo: '05-004',
  esgMark: ['esg1', 'esg2', 'esg3'],
};

// 정기구독
export const mockProdSubscriptionItem = {
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '네이비 캐시미어 니트 스웨터 착용 이미지 2',
  },
  brand: '예향',
  title: '[정기구독] 예향 채식주의자용 신선한 반찬 세트 구성 (2025)',
  price: {
    current: 1560000,
    discountRate: 10,
  },
  branch: '더현대 서울점',
  shortDesc: '250g, 300g, 500g 총 3종입니다.\n500g부터 무료배송입니다.',
  thumbImages: [...mockProdImages, ...mockProdImages, ...mockProdImages, mockProdImage],
  review: {
    rating: 4.6,
    count: 9,
  },
  benefits: [],
  prodDetailType: 'subscription',
  firstDeliveryDate: '20250808',
  nthTime: 1,
  unit: {
    label: '100g',
    price: 20780,
  },
  stock: 5,
  perPersonOrderLimit: 5, // 1인 최대 판매가능수량
  isBrockerage: true,
};

// 예약배송
export const mockProdPreOrderItem = {
  ...mockProdGeneralItem,
  // 예약배송
  prodDetailType: 'preOrder',
  preOrder: {
    start: '20250410',
    end: '20250415',
  },
  preOrderDelivery: {
    start: '20250420',
    end: '20250425',
  },
};

// ---------------------------------------------------------------------
// prodCategory에 따른 데이터

// food 카테고리 샘플
export const mockCateFood = {
  origin: '대한민국', // 원산지
  info: [
    // 상세 원산지 정보
    {
      label: '원산지/제조국',
      cont: '일본',
    },
    {
      label: '주원료원산지',
      cont: '대한민국 외',
    },
    {
      label: '주원료명',
      cont: '돼지고기, 고추가루',
    },
    {
      label: '이력번호',
      cont: '본 제품은 축산물 이력제 표시제품으로 이력번호는 배송될 상품에 표시되어 있습니다.',
    },
    {
      label: '보관유형',
      cont: '냉장\n냉장보관(2~3일), 추후 냉동보관해 주세요.',
    },
    {
      label: '소비기한',
      cont: '2025.12.31',
    },
    {
      label: '크기',
      cont: '25 × 30 × 60 (가로*세로*길이 cm)\n실측사이즈로 측정방법에 따라 차이가 있을 수 있습니다.',
    },
    {
      label: '중량',
      cont: '10 kg * 5 pack',
    },
    {
      label: '알레르기',
      cont: '이 제품은 메밀, 땅콩, 고등어, 게, 복숭아, 호두, 오징어를 사용한 제품과 같은 제조시설에서 제조하고 있습니다.\n달걀, 대두, 우유, 밀',
    },
    {
      label: '친환경제품',
      cont: '저탄소제품 인증\n제품의 탄소 배출량을 평가하여 저탄소 제품임을 인증하는 제도입니다.',
    },
  ],
};

// book 카테고리 샘플
export const mockCateBook = {
  id: 'cate-book',
  title: '도서 카테고리',
  list: [
    { id: 'book-1', name: '이것이 자바다', price: 32000 },
    { id: 'book-2', name: '파이썬 완전정복', price: 39000 },
  ],
};

// cloths 카테고리 샘플
export const mockCateCloths = {
  id: 'cate-cloths',
  title: '의류 카테고리',
  list: [
    { id: 'cloths-1', name: '티셔츠', price: 19000 },
    { id: 'cloths-2', name: '청바지', price: 45000 },
  ],
};

// rsvp 카테고리 샘플
export const mockCateRsvp = {
  id: 'cate-rsvp',
  title: 'RSVP 카테고리',
  list: [
    { id: 'rsvp-1', name: 'RSVP 첫번째', price: 10000 },
    { id: 'rsvp-2', name: 'RSVP 두번째', price: 30000 },
  ],
};

// specialBrand 카테고리 샘플
export const mockCateSpecialBrand = {
  id: 'cate-specialBrand',
  title: '스페셜브랜드 카테고리',
  list: [
    { id: 'special-1', name: '스페셜 브랜드 1', price: 70000 },
    { id: 'special-2', name: '스페셜 브랜드 2', price: 120000 },
  ],
};

// ✅------ 가격정보 CASE 데이터 -----
export const mockDetailPrice = [
  {
    price: {
      current: 129000,
      original: 189000,
      discountRate: 32,
    },
    unit: undefined,
  },
  {
    price: {
      current: 129000,
      discountRate: 32,
    },
    unit: undefined,
  },
  {
    salePeriod: {
      start: '202504100000',
      end: '202508080000',
    },
    price: {
      current: 129000,
      discountRate: 32,
    },
    unit: undefined,
  },
  {
    salePeriod: {
      start: '202504100000',
      end: '202508080000',
      isTimesale: true,
    },
    price: {
      current: 129000,
      discountRate: 32,
    },
    unit: undefined,
  },
  {
    price: {
      current: 129000,
      original: 189000,
      prevSale: {
        value: 180000,
        startDate: '20250402',
      },
      discountRate: 32,
    },
    unit: undefined,
  },
  {
    price: {
      current: 129000,
      original: 189000,
      discountRate: 32,
    },
  },
  {
    price: {
      current: 129000,
      original: 189000,
      discountRate: 32,
    },
    isStockView: true,
  },
];

// 라이브 상태 CASE
export const mockLiveState = [
  {
    prodType: 'live',
    preOrder: undefined,
    preLive: true, // 미리구매YN
    // 라이브 일정
    schedule: {
      start: '202507251000',
      end: '202507251500',
    },
  },
  // {
  //   prodType: 'live',
  //   preOrder: undefined,
  //   preLive: false, // 미리구매YN
  //   // 라이브 일정
  //   schedule: {
  //     start: '202507251000',
  //     end: '202507251500',
  //   },
  // },
  // {
  //   prodType: 'live',
  //   preOrder: undefined,
  //   preLive: true, // 미리구매YN
  //   // 라이브 일정
  //   schedule: {
  //     start: '202512251000',
  //     end: '202512251500',
  //   },
  // },
  {
    prodType: 'live',
    preOrder: undefined,
    preLive: false, // 미리구매YN
    // 라이브 일정
    schedule: {
      start: '202512251000',
      end: '202512251500',
    },
  },
  // {
  //   prodType: 'live',
  //   preOrder: undefined,
  //   preLive: true, // 미리구매YN
  //   // 라이브 일정
  //   schedule: {
  //     start: '202504201000',
  //     end: '202512251500',
  //   },
  // },
  // {
  //   prodType: 'live',
  //   preOrder: undefined,
  //   preLive: false, // 미리구매YN
  //   // 라이브 일정
  //   schedule: {
  //     start: '202504201000',
  //     end: '202512251500',
  //   },
  // },
];

// 옥션 TOP CASE
export const mockAuctionTopCase = [
  {
    ...mockProdAuctionItem,
    // 옥션 : O
    schedule: {
      start: '202507201000',
      end: '202508101730',
    },
    // 구매 기간 : X
    purchasePeriod: {
      start: '202508111000',
      end: '202508151730',
    },
    // 구매 가능한 경로로 진입 : X
    isPerchaseURL: false,
    // 낙찰된 유저 : X
    isContractUser: false,
    userName: '김현대',
  },
  {
    ...mockProdAuctionItem,
    // 옥션 : X
    schedule: {
      start: '202507201000',
      end: '202507211730',
    },
    // 구매 기간 : O
    purchasePeriod: {
      start: '202507221000',
      end: '202508081730',
    },
    // 구매 가능한 경로로 진입 : X
    isPerchaseURL: false,
    // 낙찰된 유저 : X
    isContractUser: false,
    userName: '김현대',
  },
  {
    ...mockProdAuctionItem,
    // 옥션 : 끝남
    schedule: {
      start: '202507201000',
      end: '202507211730',
    },
    // 구매 기간 : 가능
    purchasePeriod: {
      start: '202507221000',
      end: '202508081730',
    },
    // 구매 가능한 경로로 진입 : O
    isPerchaseURL: true,
    // 낙찰된 유저 : O
    isContractUser: true,
    userName: '김현대',
  },
];

// 래플 TOP CASE
export const mockRaffleTopCase = [
  {
    ...mockProdRaffleItem,
    // 응모 진행 기간 : 응모중
    schedule: {
      start: '202507201000',
      end: '202508081630',
      result: '202508101700',
    },
    // 구매 가능 기간
    purchasePeriod: {
      start: '202507271000',
      end: '202508081730',
    },
    // 구매 가능한 경로로 진입했는지 여부
    isPerchaseURL: false,
    // 낙찰된 유저인지 여부
    isContractUser: false,
    userName: '김현대',
  },
  {
    ...mockProdRaffleItem,
    // 응모 진행 기간 : 지남
    schedule: {
      start: '202507201000',
      end: '202507271630',
      result: '202507271700',
    },
    // 구매 가능 기간
    purchasePeriod: {
      start: '202507271000',
      end: '202508081730',
    },
    // 구매 가능한 경로로 진입했는지 여부
    isPerchaseURL: false,
    // 낙찰된 유저인지 여부
    isContractUser: false,
    userName: '김현대',
  },
  {
    ...mockProdRaffleItem,
    // 옥션 : 끝남
    schedule: {
      start: '202507201000',
      end: '202507211730',
    },
    // 구매 기간 : 가능
    purchasePeriod: {
      start: '202507221000',
      end: '202508081730',
    },
    // 구매 가능한 경로로 진입했는지 여부
    isPerchaseURL: true,
    // 낙찰된 유저인지 여부
    isContractUser: true,
    userName: '김현대',
  },
];

// 사은품 탑 데이터

export const mockFreeGiftData = [
  {
    ...mockProdFreegiftItem,
    prodType: 'freegift',
    preOrder: undefined,
    freeGift: 'exclusive', //experience(체험단형), exclusive(단독형)
    // 신청 가능 기간
    period: {
      start: '202507251000',
      end: '202507251500',
    },
  },
  {
    ...mockProdFreegiftItem,
    prodType: 'freegift',
    preOrder: undefined,
    freeGift: 'experience', //experience(체험단형), exclusive(단독형)
    // 신청 가능 기간
    period: {
      start: '202507251000',
      end: '202507251500',
    },
  },
];

// ✅------ 혜택 계산기 데이터 -----
// 혜택 계산기 : 보유중인 쿠폰 리스트
export const mockHasCouponList = ['product|product-1', 'hddCard|coupon-1'];
// 혜택 계산기 : 아이템 데이터
export const mockBenefitGroup = {
  items: [
    {
      id: 'coupon-1',
      title: '정액(공용-다운형)',
      memberOnly: false,
      isDownloadable: true,
      value: 5000,
    },
    {
      id: 'coupon-2',
      title: '정액(회원)',
      memberOnly: true,
      value: 5000,
      endDate: '20250430',
    },
    {
      id: 'coupon-3',
      title: '정률(회원-가입형)',
      memberOnly: false,
      isClubMembership: true,
      rate: 5,
    },
    {
      id: 'coupon-4',
      title: '정률(공용)',
      memberOnly: true,
      rate: 10,
      endDate: '20250430',
    },
  ],
};

// 혜택 계산기 : 그룹 데이터
export const mockBenefitGroups = [
  {
    ...mockBenefitGroup,
    id: 'product',
    title: '상품할인',
    items: [
      {
        id: 'product-1',
        title: '[뷰티클럽]선할인',
        memberOnly: true,
        isDownloadable: true,
        value: 5000,
      },
      {
        id: 'product-2',
        title: '[뷰티클럽]',
        memberOnly: true,
        value: 5000,
        endDate: '20250430',
      },
    ],
  },
  { ...mockBenefitGroup, id: 'coupon', title: '상품 쿠폰 할인' },
  { ...mockBenefitGroup, id: 'cart', title: '장바구니 쿠폰 할인' },
  {
    id: 'point',
    title: '보유 포인트 사용',
    items: [
      { id: 'point-1', title: '예치금', memberOnly: true, value: 1000 },
      { id: 'h-point', title: 'H.Point', memberOnly: true, value: 83 },
      { id: 'rsvp-point', title: 'RSVP Point', memberOnly: true, value: 3000 },
    ],
  },
  { ...mockBenefitGroup, id: 'hddCard', title: '현대백화점 카드할인' },
  {
    ...mockBenefitGroup,
    id: 'payment',
    title: '결제 수단 할인',
    items: [
      {
        id: 'payment-1',
        title: '[H.Point Pay] 프로모션명',
        memberOnly: false,
        href: '#',
        value: 5000,
      },
      {
        id: 'payment-2',
        title: '[현대카드] 프로모션명',
        memberOnly: false,
        href: '#',
        value: 5000,
      },
      {
        id: 'payment-3',
        title: '[토스페이] 프로모션명',
        memberOnly: false,
        href: '#',
        rate: 5,
      },
    ],
  },
];

// 혜택 계산기 : 데이터
export const mockBenefitCalc = mockBenefitGroups;

// ✅------ 교차 할인 데이터 -----
export const mockCrossDiscount = [
  {
    crossDiscount: {
      case: 'case1',
      badge: 'N+N',
      type: 'rate',
      value: [
        {
          condition: 1,
          benefit: 1,
        },
      ],
      date: {
        start: '20250407',
        end: '20250417',
      },
    },
  },
  {
    crossDiscount: {
      case: 'case2',
      badge: '수량할인',
      type: 'value',
      value: [
        {
          condition: 1,
          benefit: 1,
        },
        {
          condition: 3,
          benefit: 3,
        },
      ],
      date: {
        start: '20250407',
        end: '20250417',
      },
    },
  },
  {
    crossDiscount: {
      case: 'case2',
      badge: '수량할인',
      type: 'rate',
      value: [
        {
          condition: 1,
          benefit: 1,
        },
      ],
      date: {
        start: '20250407',
        end: '20250417',
      },
    },
  },
  {
    crossDiscount: {
      case: 'case3',
      badge: '묶음할인',
      type: 'value',
      value: [
        {
          condition: 1,
          benefit: 1,
        },
      ],
      date: {
        start: '20250407',
        end: '20250417',
      },
    },
  },
  {
    crossDiscount: {
      case: 'case3',
      badge: '묶음할인',
      type: 'rate',
      value: [
        {
          condition: 1,
          benefit: 1,
        },
      ],
      date: {
        start: '20250407',
        end: '20250417',
      },
    },
  },
];

// ✅------ 추가 혜택 데이터 -----
export const mockExtraBenefits = {
  flagLabel: '1+1',
  title: `장바구니에 2개를 담으면 <span class="ncp-color-point">1개 무료!!</span>`,
  date: {
    start: '20250407',
    end: '20250417',
  },
  linkText: `함께 구매 가능한 상품 보기`,
};

// ✅------ 배송 안내 데이터 -----
export const mockDelivery = [
  {
    title: '택배배송',
    data: [
      '롯데택배 / 배송비 3,000원',
      '30,000원 이상 무료배송',
      '제주/도서/산간 지역 3,000원 추가',
    ],
  },
  {
    title: '당일배송',
    data: ['오전 11시 전까지 주문시 오늘배송', '배송지역 : 서울/경기지역', '배송비 : 3.000원'],
  },
  {
    title: '익일배송',
    data: ['오후 2시전까지 주문시 내일배송됩니다.', '배송비 : 3.000원'],
  },
  {
    title: '스토어픽',
    data: ['스토어픽 구매 시 매장 방문일을 선택해 주세요.'],
  },
  {
    title: '방문픽업',
    data: ['방문픽업 구매 시 방문일시를 선택해주세요.'],
  },
];

// 정기 구독 배송 안내 데이터
export const mockSubscriptionDelivery = [
  {
    title: '택배배송',
    data: [
      '6.19(화) 도착 예정',
      '롯데택배 / 배송비 3,000원',
      '30,000원 이상 무료배송',
      '제주/도서/산간 지역 3,000원 추가',
    ],
  },
  {
    title: '당일배송',
    data: ['오전 11시 전까지 주문시 오늘 도착', '서울 및 수도권 한정 배송', '배송비 : 3.000원'],
  },
];

export const mockDeliverys = [...mockDelivery];

// ✅------ 다른 지점 동일 상품 -----
export const mockSameProdBranch = [
  {
    id: 'branch-1',
    branch: '더현대 서울점',
    href: '#',
    price: 79200,
    storePick: true,
    column: '색상/사이즈',
    data: [
      {
        item: '서울맨투맨/블랙/S',
        stock: 23,
      },
      {
        item: '서울맨투맨/블랙/M',
        stock: 23,
      },
      {
        item: '서울맨투맨/블랙/L',
        stock: 23,
      },
    ],
  },
  {
    id: 'branch-2',
    branch: '마곡점',
    href: '#',
    price: 79200,
    column: '색상/사이즈',
    data: [
      {
        item: '마곡맨투맨/블랙/S',
        stock: 23,
      },
      {
        item: '마곡맨투맨/블랙/M',
        stock: 23,
      },
      {
        item: '마곡맨투맨/블랙/L',
        stock: 23,
      },
    ],
  },
  {
    id: 'branch-3',
    branch: '삼성점',
    href: '#',
    price: 79200,
    storePick: true,
    column: '색상/사이즈',
    data: [
      {
        item: '삼성맨투맨/블랙/S',
        stock: 23,
      },
      {
        item: '삼성맨투맨/블랙/M',
        stock: 23,
      },
      {
        item: '삼성맨투맨/블랙/L',
        stock: 23,
      },
    ],
  },
  {
    id: 'branch-4',
    branch: '미아점',
    href: '#',
    price: 79200,
    column: '색상/사이즈',
    data: [
      {
        item: '미아맨투맨/블랙/S',
        stock: 23,
      },
      {
        item: '미아맨투맨/블랙/M',
        stock: 23,
      },
      {
        item: '미아맨투맨/블랙/L',
        stock: 23,
      },
    ],
  },
];

// ✅------ 사은품 안내 -----
export const mockCommonGift: GiftType = {
  date: { start: '20251001', end: '20251010' },
  items: [
    {
      type: 'common',
      imgUrl: '/images/dummy/@sample_product_01.png',
      giftName: '비오템 프랑크톤 엘렉시어 세럼',
      desc: '구매고객 전원께 ‘런칭기념’ 사은품을 증정해 드립니다.',
      stock: 100,
    },
  ],
};
export const mockPromoGift: PromoGiftType = {
  promoCondition: 'count',
  isOneToOneGift: true,
  isTargetCustomer: true,
  isTargetProduct: true,
  giveawayMethod: 'select',
  duplicate: 'order',
  date: { start: '20251001', end: '20251010' },
  items: [
    {
      type: 'promotion',
      giftName: '비오템 프랑크톤 엘렉시어 세럼 (기본 이미지)',
      promoValue: 100,
      stock: 100,
    },
    {
      type: 'promotion',
      giftName: '비오템 프랑크톤 엘렉시어 세럼',
      imgUrl: '/images/dummy/@sample_product_01.png',
      promoValue: 80,
      stock: 800,
    },
    {
      type: 'promotion',
      giftName: '비오템 프랑크톤 엘렉시어 세럼',
      imgUrl: '/images/dummy/@sample_product_01.png',
      promoValue: 10,
      stock: 0,
    },
    {
      type: 'promotion',
      giftName: '비오템 프랑크톤 엘렉시어 세럼',
      imgUrl: '/images/dummy/@sample_product_01.png',
      promoValue: 10,
      stock: 0,
      isStandard: true,
    },
  ],
};
export const mockPackageData = {
  // 포장 유료 - 포장 + 쇼핑백 (이미지 있음)
  package: {
    price: 3000,
    src: '/images/dummy/@sample_product_01.png',
  },
  isShoppingBag: true,
};

export const mockPackageSampleData = [
  {
    // 포장 무료 - 포장만
    package: {
      price: 0,
    },
  },
  {
    // 포장 무료 - 포장 + 쇼핑백
    package: {
      price: 0,
    },
    isShoppingBag: true,
  },
  {
    // 포장 유료 - 포장만 (이미지 없음)
    package: {
      price: 3000,
    },
  },
  {
    // 포장 유료 - 포장만 (이미지 있음)
    package: {
      price: 3000,
      src: '/images/dummy/@sample_product_01.png',
    },
  },
  {
    // 포장 유료 - 포장만 (이미지 있음)
    package: {
      price: 3000,
      src: '/images/dummy/@sample_product_01.png',
    },
  },
  {
    // 포장 유료 - 포장 + 쇼핑백 (이미지 없음)
    package: {
      price: 3000,
    },
    isShoppingBag: true,
  },
  {
    // 포장 유료 - 포장 + 쇼핑백 (이미지 있음)
    package: {
      price: 3000,
      src: '/images/dummy/@sample_product_01.png',
    },
    isShoppingBag: true,
  },
  {
    // 쇼핑백만 있는 경우
    isShoppingBag: true,
  },
];

// ✅------ 상품필수정보 -----
export const mockProdEssentialData = [
  {
    label: '브랜드',
    value: '비오템',
  },
  {
    label: '통신판매번호',
    value: '123-456789-10',
  },
  {
    label: '내용물의 용량 또는 중량',
    value: '200ML',
  },
  {
    label: '제품주요사항 피부타입, 색상',
    value: '모든 피부',
  },
  {
    label: '사용기한 또는 개봉 후 사용기한',
    value: '사용기한이 1년이상 남은 제품으로 발송 됩니다.',
  },
  {
    label: '사용방법',
    value: [
      '아쿠아파워 올인원 프레시 로션-인-젤 200ml : 세안 후 적당량을 바릅니다.',
      '로션 인 젤 : 스파클링 젤 텍스처가 끈적임 없이 빠르게 흡수되어 피부에 수분을 충전합니다.',
    ],
  },
  {
    label: '화장품제조업자, 화장품책임판매업자 및 맞춤형화장품판매업자, 책임판메업자',
    value: 'SICOS, 엘오케이(유)',
  },
  {
    label: '제조국',
    value: '프랑스',
  },
  {
    label: '화장품법에 따라 기재, 표시하여야 하는 모든성분',
    value:
      '정제수 페퍼민트 잎수 변성알코올 프로필렌글라이콜 글리세린 부틸렌글라이콜 피이지-20 피이지-8 피이지-6',
  },
];
export const mockProdEssentialDataList = [
  {
    title: '상품1',
    id: 'prod-1',
    data: [{ label: '상품1', value: '정보 나열' }, ...mockProdEssentialData],
  },
  {
    title: '상품2',
    id: 'prod-2',
    data: [{ label: '상품2', value: '정보 나열' }, ...mockProdEssentialData],
  },
  {
    title: '상품3',
    id: 'prod-3',
    data: [{ label: '상품3', value: '정보 나열' }, ...mockProdEssentialData],
  },
];

// ✅------ 배송/교환/반품 안내 -----
export const mockProdCsData = [
  {
    id: 'info-1',
    title: '알아두세요',
    cont: [
      '현대백화점과 동시에 판매되고 있으므로 고객님이 인터넷으로 주문하시는 동안 품절이 발생할 수 있습니다.',
      '이 경우 확인 즉시 고객님께 그 사실을 알려 드리고 환불처리 해드리겠습니다.',
    ],
  },
  {
    id: 'info-2',
    title: '현대백화점 상품의 후환불 제도',
    cont: [
      '현대백화점 상품은 반품하실 경우 백화점에 반품상품이 도착하면 상품상태 점검 후에 결제가 취소됩니다.',
      '반품 불가사유에 해당될 경우 반품은 불가능하며 고객님께 이 사실을 통보 후 반품하신 상품을 다시 배송해 드립니다.',
    ],
  },
  {
    id: 'info-3',
    title: '배송소요일',
    cont: [
      '결제 완료일 다음날로 부터 2~7일 (토요일/공휴일 제외, 도서 지역 4~8일)',
      '설치 및 주문제작 상품 :5~15일 (최장 30일, 토요일/공휴일 제외)',
      '협력사에서 직접 배송/설치하는 상품은 지역에 따라 제주/도서 지역 추가 배송비가 발생할 수 있습니다.',
    ],
  },
];

// ✅------ 판매자 정보 -----
export const mockProdCsSellerData = {
  seller: {
    label: '판매자',
    value: '예향예향',
  },
  owner: {
    label: '상호명/대표자',
    value: '예향/이은영',
  },
  type: {
    label: '사업자 구분',
    value: '법인/단체사업자',
  },
  taxId: {
    label: '사업자 번호',
    value: '211-10-033339',
  },
  csNumber: {
    label: '고객상품문의 대표번호',
    value: '02-3449-5981',
  },
  email: {
    label: '이메일',
    value: 'thehyundai@thehyundai.com',
  },
  address: {
    label: '사업장소재지',
    value: '서울특별시 강남구 압구정로 165(압구정동)지하1층 식품관',
  },
  returnAddr: {
    label: '반품/교환 주소',
    value: '서울특별시 강남구 압구정로 165(압구정동)지하1층 식품관',
  },
  mailOrderRegistNum: {
    label: '통신판매번호',
    value: '2021-서울강남-000000',
  },
  returnInfo: {
    label: '반품/교환 안내',
    value: '상세페이지 참고',
  },
  returnPolicy: {
    label: '반품/교환 기준',
    value: '-',
  },
};
export const mockProdCsSellerDataList = [
  {
    title: '판매자1',
    id: 'sellet-1',
    data: mockProdCsSellerData,
  },
  {
    title: '판매자2',
    id: 'sellet-2',
    data: mockProdCsSellerData,
  },
  {
    title: '판매자3',
    id: 'sellet-3',
    data: mockProdCsSellerData,
  },
];

// ✅------ 상세정보 샘플 -----
export const mockNoticeList = [
  'TIS [상품등록] > 상품설명서[T] > 고객강조사항(061) 등록 값 있는 경우, 노출 / 4,000 byte',
  '영역 노출 시, TITLE [ 공지사항 ] 고정 노출 / 영역 미노출 시, TITLE 도 미노출',
  '최대 4000 byte 노출됩니다.',
];
export const mockSubscriptionNoticeList = [
  '[이번 주에만 제공되는 특별한 혜택]',
  'TIS >상품등록 > 상품설명서 > 고객강조사항 에 등록된 내용이 노출됩니다.',
  'TIS >상품등록 > 상품설명서 > 고객강조사항 에 등록된 내용이 노출됩니다.',
];
export const mockBookData = {
  isbn: '9791141602314',
  publicationDate: '20250525',
};
export const mockWarningtList = [
  '텍스트 리스트 형태 샘플 데이터입니다.',
  '최대 4000 byte 노출됩니다.',
];
export const mockHtmlContent = `
  <h2>상품기술서 임시 HTML 데이터</h2>
  <img 
    src="https://placehold.co/1000x1300" 
    alt="샘플 이미지" 
    style="max-width:100%;border-radius:8px;margin:24px 0;"
  />
  <img 
    src="https://placehold.co/600x400" 
    alt="샘플 이미지" 
    style="max-width:100%;border-radius:8px;margin:24px 0;"
  />
  <p>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용</p>
  <h3 style="color:#d32f2f">임시데이터</h3>
`;
export const mockDescTextList = [
  {
    title: '구성',
    list: [
      'TIS > ... > 상품등록 > 상품설명서(T) > 상품설명 입력방식 > 텍스트 기술서 - 에 등록된 내용 노출됩니다.',
      'TITLE(구성) 명도 TIS에서 수정/등록/관리할 수 있습니다. 입력한 값이 노출됩니다.',
      '최대 4000 byte 노출됩니다.',
    ],
  },
  {
    title: '규격/소재',
    list: [
      'TIS > ... > 상품등록 > 상품설명서(T) > 상품설명 입력방식 > 텍스트 기술서 - 에 등록된 내용 노출됩니다.',
      'TITLE(구성) 명도 TIS에서 수정/등록/관리할 수 있습니다. 입력한 값이 노출됩니다.',
      '최대 4000 byte 노출됩니다.',
    ],
  },
];
export const mockActualSize = {
  image: 'https://placehold.co/700x250',
  table: {
    columns: ['S', 'M', 'L', 'XL'],
    rows: [
      ['총 길이', '60', '68', '76', '84'],
      ['소매 길이', '70', '74', '78', '82'],
      ['가슴 단면', '108', '120', '132', '144'],
      ['어깨', '90', '100', '110', '120'],
    ],
  },
};
// 인증정보
export const mockCertificationInfo = [
  {
    id: 'certifi-1',
    selectType: '안전확인유형 선택값 노출11',
    item: '인증항목 데이터',
    agency: '인증기관 데이터',
    date: '20250202',
    type: '인증구분 데이터',
    number: '111-222-33-44444',
  },
  {
    id: 'certifi-2',
    selectType: '안전확인유형 선택값 노출22',
  },
];
// 위약금
export const mockPenalty = {
  isFix: false,
  refund: [
    {
      percent: 50,
    },
    {
      startDate: 11,
      endDate: 20,
      percent: 0,
    },
    {
      startDate: 8,
      endDate: 10,
      percent: 20,
    },
    {
      startDate: 3,
      endDate: 7,
      percent: 50,
    },
    {
      startDate: 1,
      endDate: 2,
      percent: 80,
    },
    {
      startDate: 0,
      endDate: 0,
      percent: 100,
    },
  ],
};
