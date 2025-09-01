import { TextList, Text } from '@/shared/ui';
import styles from './PrivacyDialog.module.scss';

// 주문 관련 약관
export const ORDER_AGREEMENTS = {
  collection: [
    {
      id: 'collection',
      title: '개인정보 수집.이용 동의',
      children: [
        {
          subTitle: '1. 개인 정보 수집항목',
          content: (
            <>
              <Text color="gray2">성명, 휴대전화번호, 개인통관고유부호</Text>
            </>
          ),
        },
        {
          subTitle: '2. 개인정보 수집 및 이용 목적',
          content: (
            <>
              <TextList
                data={[
                  '해외직배송 상품 수입 신고',
                  '관세청을 통한 개인통관고유부호 조회 및 유효성 검증',
                  '개인통관고유부호 재사용 서비스 제공',
                ]}
              />
            </>
          ),
        },
        {
          subTitle: '3. 개인정보 보유 및 이용기간',
          content: (
            <>
              <Text weight="medium">
                회원의 삭제요청이 있거나, 회원탈퇴 등 개인정보 이용 목적 달성 시까지 보관
              </Text>
            </>
          ),
        },
        {
          subTitle:
            '4. 이용자는 회사의 개인정보 수집.이용 동의를 거부할 권리가 있습니다. 다만, 개인정보의 수집.이용 동의를 거부할 경우 전자결제 서비스의 이용이 제한될 수 있음을 알려드립니다.',
        },
      ],
    },
  ],
  thirdParty: [
    {
      id: 'thirdParty',
      title: '개인정보 제3자 제공 동의 (관세청)',
      children: [
        {
          subTitle: '1. 개인 정보를 제공 받는 자',
          content: (
            <>
              <Text color="alert">관세청</Text>
            </>
          ),
        },
        {
          subTitle: '2. 제공하는 개인 정보 항목',
          content: (
            <>
              <Text color="gray2">성명, 휴대전화번호, 개인통관고유부호</Text>
            </>
          ),
        },
        {
          subTitle: '3. 개인 정보를 제공받는 자의 이용 목적',
          content: (
            <>
              <Text color="gray2">개인통관고유부호 조회 및 유효성 검증</Text>
            </>
          ),
        },
        {
          subTitle: '4. 개인 정보를 제공받는 자의 개인 정보 보유 및 이용기간',
          content: (
            <>
              <Text weight="medium">
                회원의 삭제요청이 있거나, 회원탈퇴 등 개인정보 이용 목적 달성 시까지 보관
              </Text>
            </>
          ),
        },
      ],
    },
  ],
  finance: [
    {
      id: 'finance',
      title: '전자금융거래 이용약관 동의',
      children: [
        {
          title: '토스페이먼츠',
        },
        {
          subTitle: '제1조 목적',
          content: (
            <>
              <Text color="gray2">
                이 약관은 전자지급 결제대행서비스 및 결제대금 예치서비스를 제공하는 토스페이먼츠
                주식회사(이하 ‘회시’라 합니다)와 이용자 사이의 전자금융거래에 관한 기본적인 사항을
                정함으로써 전자금융거래의 안정성과 신뢰성을 확보함에 그 목적이 있습니다.
              </Text>
            </>
          ),
        },
        {
          subTitle: '제2조 용어의 정의',
          content: (
            <>
              <Text color="gray2">이 약관에서 정하는 용어의 정의는 다음 각 호와 같습니다.</Text>
            </>
          ),
        },
      ],
    },
  ],
  personal: [
    {
      id: 'personal',
      title: '개인정보 수집 및 이용 동의',
      children: [
        {
          title: '토스페이먼츠',
          content: (
            <>
              <Text color="gray2">
                토스페이머츠(이하 ‘회사’라 합니다)는 “신용정보의 이용 및 보호에 관한 법률”,
                “전자금융거래법”, “전자상거래 등에서의 소비자보호에 관한 법률”, “정보통신망 이용촉진
                및 정보보호 등에 관한 법률” 및 “개인정보 보호법” 등 관련 법령을 준수하여, 이용자
                권익 보호에 최선을 다하고 있습니다.
              </Text>
            </>
          ),
        },
        {
          subTitle: '1. 개인정보의 수집/이용 목적',
          content: (
            <>
              <Text color="gray2">
                이 약관에서 정하는 용어의 정의는 가. 전자금융거래 서비스 제공 : 전자결제지급대행,
                자체 간편결제 및 오픈뱅킹 등 - 결제수단(신용카드 등)을 이용한 전자 결게 서비스 제공
                -
              </Text>
            </>
          ),
        },
      ],
    },
  ],
  provision: [
    {
      id: 'provision',
      title: '개인정보 제3자 제공/위탁 동의',
      children: [
        {
          title: '토스페이먼츠',
          content: (
            <>
              <Text color="gray2">
                1. 회사는 이용자의 개인정보를 본 개인정보처리방침에서 고지한 범위내에서 사용하며,
                이용자의 사전 동의없이 동 범위를 초과하여 이용하거나 이용자의 개인정보를 제3자에게
                제공하지 않습니다. 다만, 관련 법령에 의하거나, 수서 목적으로 법령에 정해진 절차와
                방법에 따라 수사기관 등에 개인정보를 제공하여야 하는 경우를 예외로 합니다. 회사의
                서비스 이행을 위하여 개인정보를 제3자에게 제공하고 있는 경우는 다음과 같습니다.
              </Text>
            </>
          ),
        },
      ],
    },
  ],
  seller: [
    {
      id: 'seller',
      title: '개별판매자 개인정보 제공안내',
      children: [
        {
          subTitle: '1. 개인 정보를 제공 받는 자',
          content: (
            <>
              <Text color="gray2">주식회사 더푸드랩, 에이프릴 플라워, 브랜드직송 상품 업체명</Text>
            </>
          ),
        },
        {
          subTitle: '2. 제공하는 개인 정보 항목',
          content: (
            <>
              <Text color="gray2">
                성명(수취인 포함), 휴대전화번호(또는 안심번호), 배송지주소, 개인통관고유부호(해외
                배송 상품)
              </Text>
            </>
          ),
        },
        {
          subTitle: '3. 개인 정보를 제공받는 자의 이용 목적',
          content: (
            <>
              <Text color="gray2">
                구매자 확인 및 서비스 제공, 민원처리, 해피콜 등 고객상담, 고객관리
              </Text>
            </>
          ),
        },
        {
          subTitle: '4. 개인 정보를 제공받는 자의 개인 정보 보유 및 이용기간',
          content: (
            <>
              <Text weight="medium" className={styles.foreground}>
                회원의 삭제요청이 있거나, 회원탈퇴 등 개인정보 이용 목적 달성 시까지 보관
              </Text>
            </>
          ),
        },
      ],
    },
  ],
  partners: [
    {
      id: 'partners',
      title: '이용약관',
      children: [
        {
          subTitle: '제1조 목적',
          content: (
            <>
              <Text size="5" color="gray2" reading>
                본 약관은 H.Point 회원(아래에서 정의)이 주식회사 현대백화점(이하 “당사”)이 제공하는
                H.Point 서비스를 이용함에 있어 H.Point 회원과 당사의 제반 권리・의무 및 관련절차
                등을 규정하는데 그 목적이 있습니다.
              </Text>
            </>
          ),
        },
        {
          subTitle: '제 2조 (정의)',
          content: (
            <>
              <Text size="5" color="gray2" reading>
                본 약관에서 사용하는 주요 용어의 정의는 다음과 같습니다.
              </Text>
              <TextList
                variant="clear"
                data={[
                  {
                    text: '① “H.Point 회원”(이하 “회원")이란 당사 또는 제휴사의 영업점이나 홈페이지(PC/모바일웹), 모바일앱을 통해 본 약관 제 5조에 정해진 가입절차에 따라 회원가입, 카드발급, 카드등록 등의 절차를 진행하여 정상적으로 H.Point 서비스를 이용할 수 있는 권한을 부여 받은 자를 말합니다.',
                    textProps: { color: 'gray2', size: '4', reading: true },
                  },
                  {
                    text: '② “H.Point 서비스”(이하 “H.Point 서비스" 또는 “서비스”라 함)란 당사 와 제휴사가 회원에게 제공하는 포인트 적립, 사용, 할인, 이벤트 참여 등의 고객 서비스 프로그램으로서, 그 주요 내용은 본 약관 제 3조에서 명시된 바와 같습니다.',
                    textProps: { color: 'gray2', size: '4', reading: true },
                  },
                  {
                    text: '③ “H.Point 서비스”(이하 “H.Point 서비스" 또는 “서비스”라 함)란 당사 와 제휴사가 회원에게 제공하는 고객 서비스 프로그램으로서약관 제 3조에 명시된 바와 같습니다.',
                    textProps: { color: 'gray2', size: '4', reading: true },
                  },
                ]}
                className="ncp-mt-xs"
              />
              <TextList
                data={[
                  '개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며, 동의 거부시 회원가입이 제한됩니다',
                  '개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며, 동의 거부시 회원가입이 제한됩니다',
                  '개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며, 동의 거부시 회원가입이 제한됩니다',
                ]}
                variant="info"
              />
            </>
          ),
        },
      ],
    },
  ],
};
