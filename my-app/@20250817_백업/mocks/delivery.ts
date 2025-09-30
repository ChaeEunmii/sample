import { mockProdImage } from './product';
import { mockAddressItem } from './address';

//  주문 목록 샘플 데이터
export const mockMultiDeliveryItem = {
  href: '#',
  image: mockProdImage,
  brand: '프레데릭 말',
  title: '산마르자노 토마토 소스 용량 선택',
  info: {
    weight: '300g',
    size: '대형',
  },
  price: {
    current: 12200,
    original: 13200,
    discount: 1200,
  },
};

export const mockMultiDeliverySections = [
  {
    id: 'deliv-1',
    address: {
      ...mockAddressItem,
    },
    sections: [
      {
        title: '상품선택',
        type: 'product',
        selectable: false,
        items: [
          {
            id: 'prod-1-1',
            ...mockMultiDeliveryItem,
            quantity: 2,
            stock: 10,
            isGift: false,
          },
          {
            id: 'prod-1-2',
            ...mockMultiDeliveryItem,
            quantity: 2,
            stock: 10,
            isGift: false,
          },
        ],
      },
      {
        title: '사은품선택',
        type: 'gift',
        selectable: true,
        items: [
          {
            id: 'gift-1-1',
            ...mockMultiDeliveryItem,
            quantity: 1,
            stock: 5,
            isGift: true,
          },
        ],
      },
    ],
  },

  // 배송지가 없는 경우
  {
    id: 'deliv-2',
    sections: [
      {
        title: '상품선택',
        type: 'product',
        selectable: false,
        showSelect: true,
        items: [
          {
            id: 'prod-2-1',
            ...mockMultiDeliveryItem,
            quantity: 1,
            stock: 3,
            isGift: false,
          },
        ],
      },
      {
        title: '사은품선택',
        type: 'gift',
        selectable: true,
        showSelect: false,
        items: [
          {
            id: 'gift-2-1',
            ...mockMultiDeliveryItem,
            quantity: 1,
            stock: 2,
          },
          {
            id: 'gift-2-2',
            ...mockMultiDeliveryItem,
            quantity: 1,
            stock: 2,
            isBorder: true,
          },
          {
            id: 'gift-2-3',
            ...mockMultiDeliveryItem,
            quantity: 1,
            stock: 2,
          },
          {
            id: 'gift-2-4',
            ...mockMultiDeliveryItem,
            quantity: 1,
            stock: 2,
          },
          {
            id: 'gift-2-5',
            ...mockMultiDeliveryItem,
            quantity: 1,
            stock: 2,
            isBundle: true,
            bundleId: 'bundle-2',
          },
          {
            id: 'gift-2-6',
            ...mockMultiDeliveryItem,
            quantity: 1,
            stock: 2,
            isBundle: true,
            bundleId: 'bundle-2',
          },
        ],
      },
    ],
  },
];

//
export const mockMultiDeliveryInfoList = [
  {
    id: 'info-1',
    address: {
      ...mockAddressItem,
    },
    ...mockMultiDeliveryItem,
    quantity: 2,
  },
  {
    id: 'info-2',
    address: {
      name: '이현대',
      phone: '010-1234-5678',
      additionalPhone: '010-5678-1234',
      zipcode: '06018',
      defaultAddress: '서울시 강남구 테헤란로 32-1',
      detailedAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
    },
    ...mockMultiDeliveryItem,
    quantity: 1,
  },
  {
    id: 'info-3',
    address: {
      name: '박현대',
      phone: '010-1234-5678',
      additionalPhone: '010-5678-1234',
      zipcode: '06018',
      defaultAddress: '서울시 강남구 테헤란로 32-1',
      detailedAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
    },
    ...mockMultiDeliveryItem,
    quantity: 5,
  },
];

// 배송시간 선택 샘플 데이터
export const mockDeliveryTimeList = [
  {
    id: 'time-1',
    day: '오늘',
    date: '29',
    radioGroups: [
      {
        id: 'time1-1',
        label: '새벽배송',
        disabled: false,
      },
      {
        id: 'time1-2',
        label: '11:30',
        disabled: true,
      },
      {
        id: 'time1-3',
        label: '15:30',
        disabled: false,
      },
      {
        id: 'time1-4',
        label: '17:30',
        disabled: true,
      },
    ],
  },
  {
    id: 'time-2',
    day: '토요일',
    date: '30',
    radioGroups: [
      {
        id: 'time2-1',
        label: '새벽배송',
        disabled: true,
      },
      {
        id: 'time2-2',
        label: '11:30',
        disabled: false,
      },
      {
        id: 'time2-3',
        label: '15:30',
        disabled: false,
      },
      {
        id: 'time2-4',
        label: '17:30',
        disabled: true,
      },
    ],
  },
  {
    id: 'time-3',
    day: '일요일',
    date: '31',
    radioGroups: [
      {
        id: 'time3-1',
        label: '새벽배송',
        disabled: false,
      },
      {
        id: 'time3-2',
        label: '11:30',
        disabled: true,
      },
      {
        id: 'time3-3',
        label: '15:30',
        disabled: false,
      },
      {
        id: 'time3-4',
        label: '17:30',
        disabled: false,
      },
    ],
  },
  {
    id: 'time-4',
    day: '월요일',
    month: '4',
    date: '1',
    radioGroups: [
      {
        id: 'time4-1',
        label: '새벽배송',
        disabled: false,
      },
      {
        id: 'time4-2',
        label: '11:30',
        disabled: false,
      },
      {
        id: 'time4-3',
        label: '15:30',
        disabled: false,
      },
      {
        id: 'time4-4',
        label: '17:30',
        disabled: false,
      },
    ],
  },
];
