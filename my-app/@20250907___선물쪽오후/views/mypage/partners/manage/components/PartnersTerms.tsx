import { Text, TextList, Heading } from '@shared/ui';

// 파트너스 이용약관 - 내용 업데이트 필요
export const PARTNERS_USETERMS = {
  id: 'partners',
  title: '이용약관',
  content: (
    <>
      <Heading as="h3" size="5" weight="bold" className="ncp-mt-s">
        제 1조 목적
      </Heading>
      <Text size="5" color="gray2" reading>
        본 약관은 H.Point 회원(아래에서 정의)이 주식회사 현대백화점(이하 “당사”)이 제공하는 H.Point
        서비스를 이용함에 있어 H.Point 회원과 당사의 제반 권리・의무 및 관련절차 등을 규정하는데 그
        목적이 있습니다.
      </Text>
      <Heading as="h3" size="5" weight="bold" className="ncp-mt-xl">
        제 2조 (정의)
      </Heading>
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
};
