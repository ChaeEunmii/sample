/**
 * 기존 CardSwiper에 있던 BRAND_INFO를
 * PaymentMethodCard 와 공유를 위해서 별도파일로 분리
 */
interface BrandInfo {
  displayName: string;
  logoSrc: string;
  bgColor?: string;
  textColor?: string;
}

export const BRAND_INFO: Record<string, BrandInfo> = {
  hyundai: {
    displayName: '현대카드',
    logoSrc: '/images/card/logo_hyundai_card.svg',
    bgColor: '#000000',
    textColor: '#ffffff',
  },
  hyundaiDepartment: {
    displayName: '현대백화점카드',
    logoSrc: '/images/card/logo_thehyundai_card.svg',
    bgColor: '#064d43',
    textColor: '#ffffff',
  },
  woori: {
    displayName: '우리카드',
    logoSrc: '/images/card/logo_woori_card.svg',
    bgColor: '#4eb8ff',
    textColor: '#ffffff',
  },
  samsung: {
    displayName: '삼성카드',
    logoSrc: '/images/card/logo_hyundai_card.svg',
    bgColor: '#1666ff',
    textColor: '#ffffff',
  },
  shinhan: {
    displayName: '신한카드',
    logoSrc: '/images/card/logo_hyundai_card.svg',
    bgColor: '#121741',
    textColor: '#ffffff',
  },
  hana: {
    displayName: 'KEB 하나은행',
    logoSrc: '/images/card/logo_hyundai_card.svg',
    bgColor: '#f7f7f7',
    textColor: '#1a1a1a',
  },
};
