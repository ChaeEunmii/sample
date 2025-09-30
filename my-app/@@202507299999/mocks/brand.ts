export const mockBrand = {
  id: 'diptyque',
  href: '#',
  image: {
    src: '/images/dummy/@sample_brand_logo_01.png',
    alt: 'diptyque',
  },
  name: 'DIPTYQUE',
  namekor: '딥티크',
  notice: {
    text: [
      '6월 한달간 비오템 전품목 무료 배송',
      '6월 한달간 비오템 전품목 무료 배송2',
      '6월 한달간 비오템 전품목 무료 배송3',
    ],
    image: {
      src: '/images/dummy/@sample_banner_flick.png',
      alt: '배너 이미지 설명',
    },
  },
};

export const mockBrandImageNoti = {
  ...mockBrand,
  notice: {
    image: {
      src: '/images/dummy/@sample_banner_flick.png',
      alt: '배너 이미지 설명',
    },
  },
};
