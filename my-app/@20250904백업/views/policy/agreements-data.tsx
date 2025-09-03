import { Box, Text, TextList, TitleBar } from '@/shared/ui';
import {
  HPOINT_CHILDREN,
  NCP_CHILDREN,
  NCP_CHILDREN2,
  NCP_CHILDREN3,
  HYUNDAI_CHILDREN,
  DEFINED_CHILDREN,
  MYCLUB_CHILDREN,
  HIHI_CHILDREN,
  TORDER_CHILDREN,
  EVENTS_CHILDREN,
  EVENTS_MARKETING_CHILDREN,
  USERINFO_CHILDREN,
  EVENTREWARD_CHILDREN,
  PERSONALSETTING_CHILDREN,
  RESERVATION_CHILDREN,
  WAITING_CHILDREN,
  WAITING_EN_CHILDREN,
  WAITING_CN_CHILDREN,
  SELLER_JOIN_AUTH_CHILDREN,
} from './agreementsDataItems';

// AGREEMENTS1
export const AGREEMENTS1 = {
  id: 'agreements1',
  label: '전체 동의합니다',
  children: [
    {
      id: 'terms-hpoint',
      header: <h3>H.Point 서비스 약관</h3>,
      children: HPOINT_CHILDREN,
    },
    {
      id: 'terms-ncp',
      header: <h3>NCP 회원약관</h3>,
      children: NCP_CHILDREN,
    },
    {
      id: 'terms-homepage',
      header: <h3>현대백화점 홈페이지/APP 약관</h3>,
      headerDesc: <>현대백화점 회원약관에 동의하시면 현대백화점 통합회원 가입이 가능합니다</>,
      label: '회원가입 약관에 동의해 주세요',
      children: HYUNDAI_CHILDREN,
    },
  ],
};

// AGREEMENTS2
export const AGREEMENTS2 = {
  id: 'agreements2',
  label: '전체 동의합니다',
  children: DEFINED_CHILDREN,
};

// 로그인 (NCP 약관 동의)
export const NCP_AGREEMENTS = {
  id: 'ncp-agreements',
  label: '전체 동의합니다',
  children: [
    {
      id: 'terms-ncp',
      header: <h3>NCP 회원약관</h3>,
      children: NCP_CHILDREN2,
    },
  ],
};

// 회원가입 약관동의 (현대백화점 통합회원일 경우)
export const JOIN_AGREEMENTS4 = {
  id: 'join-agreements-4',
  label: '전체 동의합니다',
  children: [
    {
      id: 'terms-join4',
      header: <h3>NCP 회원약관</h3>,
      children: NCP_CHILDREN3,
    },
  ],
};

// 회원가입 약관동의 (e현대 약관 미동의한 회원)
export const JOIN_AGREEMENTS5 = {
  id: 'join-agreements5',
  label: '전체 동의합니다',
  children: [
    {
      id: 'terms-join5',
      header: <h3>현대백화점 회원약관</h3>,
      headerDesc: <>현대백화점 회원약관에 동의하시면 현대백화점 통합회원 가입이 가능합니다</>,
      children: HYUNDAI_CHILDREN,
    },
  ],
};

// 로그인/전환가입약관동의
export const LOGIN_CONVERSION_AGREEMENTS = {
  id: 'login-conversion-agreement',
  label: '전체 동의합니다',
  children: [
    {
      id: 'terms-conversion',
      header: <h3>현대백화점 약관</h3>,
      headerDesc: (
        <>
          필수 항목에 동의하지 않으실 경우 서비스 가입이 불가합니다 선택항목에 동의하지 않으셔도
          서비스 가입이 가능하나, 관련 서비스는 제공받으실 수 없습니다
        </>
      ),
      children: HYUNDAI_CHILDREN,
    },
  ],
};

// HIHI 멤버십 가입하기 약관동의
export const HIHI_AGREEMENTS = {
  id: 'hihi-membership-agreement',
  label: '내용을 확인하였으며, 아래 내용에 모두 동의합니다.',
  children: [
    {
      id: 'terms-hihi',
      children: HIHI_CHILDREN,
    },
  ],
};

// 마이클럽 약관동의
export const MYCLUB_AGREEMENTS = {
  id: 'myclub-agreement',
  label: '내용을 확인하였으며, 아래 내용에 모두 동의합니다.',
  children: [
    {
      id: 'terms-myclub',
      children: MYCLUB_CHILDREN,
    },
  ],
};

// 차량번호 등록 동의
export const CAR_NUMBER_REGISTRATION_AGREEMENTS = {
  id: 'car-number-registration-agreement',
  label: '',
  children: [
    {
      id: 'carNumber-1',
      label: '개인정보(차량번호) 수집이용 동의',
      content: (
        <>
          <TitleBar title="1. 수집이용 목적" level="2" className="ncp-mt-m" />
          <Text color="gray2">셀프픽업, 테이블오더, QR결제 이용 시 무료주차 정산 간소화 처리</Text>
          <TitleBar title="2. 수집 항목" level="2" className="ncp-mt-m" />
          <Text color="gray2">차량 번호</Text>
          <TitleBar title="3. 보유 및 이용 기간" level="2" className="ncp-mt-m" />
          <Text color="gray2">회원탈퇴 또는 동의 철회 시 까지</Text>
          <Box className="ncp-mt-m">
            <Text size="4" color="gray2">
              차량 번호를 등록하시면 주차 정산을 간편하게 이용 할 수 있습니다.
            </Text>
            <TextList
              data={[
                '식당가 예약, 웨이팅 서비스는 해당되지 않습니다.',
                '차량 번호는 최대 3개까지 등록 가능합니다.',
              ]}
              variant="info"
            />
          </Box>
        </>
      ),
    },
    {
      id: 'carNumber-2',
      label: '대표 차량으로 등록',
    },
  ],
};

// 예약하기 약관동의
export const RESERVATION_AGREEMENTS = {
  id: 'reservation-agreement',
  label: '모두 동의합니다.',
  children: [
    {
      id: 'terms-reservation',
      children: RESERVATION_CHILDREN,
    },
  ],
};

// 웨이팅 약관동의
export const WAITING_AGREEMENTS = {
  id: 'waiting-agreement',
  label: '모두 동의합니다.',
  children: [
    {
      id: 'terms-waiting',
      children: WAITING_CHILDREN,
    },
  ],
};
export const WAITING_EN_AGREEMENTS = {
  id: 'waiting-en-agreement',
  label: 'Agree all',
  requiredText: 'All matters require consent.',
  children: [
    {
      id: 'terms-en-waiting',
      children: WAITING_EN_CHILDREN,
    },
  ],
};
export const WAITING_CN_AGREEMENTS = {
  id: 'waiting-cn-agreement',
  label: '全部同意',
  requiredText: '一切事項均需同意。',
  children: [
    {
      id: 'terms-cn-waiting',
      children: WAITING_CN_CHILDREN,
    },
  ],
};

// 테이블오더 주문하기 약관동의
export const TORDER_AGREEMENTS = {
  id: 'torder-agreement',
  label: '주문 내용을 확인하였으며, 아래 내용에 모두 동의합니다.',
  children: [
    {
      id: 'terms-torder',
      children: TORDER_CHILDREN,
    },
  ],
};

// 프로모션/이벤트 참여 동의
export const EVENTS_AGREEMENTS = {
  id: 'events-join-agreement',
  label: (
    <Text weight="semibold" color="gray1">
      모두 동의합니다.
    </Text>
  ),
  children: [
    {
      id: 'terms-events',
      children: EVENTS_CHILDREN,
    },
  ],
};

// 프로모션 마케팅 수신 동의
export const EVENTS_MARKETING_AGREEMENTS = {
  id: 'agreements1',
  children: EVENTS_MARKETING_CHILDREN,
};

// 마이페이지 - 회원정보 변경 약관동의
export const USERINFO_AGREEMENTS = {
  id: 'userinfo-agreement',
  label: '',
  children: [
    {
      id: 'terms-userinfo',
      children: USERINFO_CHILDREN,
    },
  ],
};

// 제세공과금 안내 약관동의
export const EVENTREWARD_AGREEMENTS = {
  id: 'event-reward-agreement',
  label: '',
  children: EVENTREWARD_CHILDREN,
};

// 나의 맞춤정보 관리 약관동의
export const PERSONALSETTING_AGREEMENTS = {
  id: 'personal-setting-agreement',
  label: '',
  children: PERSONALSETTING_CHILDREN,
};

// 판매자센터 가입 인증단계 동의
export const SELLER_JOIN_AUTH_AGREEMENTS = {
  id: 'seller-join-auth-agreement',
  label: '',
  children: SELLER_JOIN_AUTH_CHILDREN,
};
