import { Icon, Text, TextList, Heading, Box, InfoList, InfoItem } from '@shared/ui';

// H.Point 약관 항목들만 분리
export const HPOINT_CHILDREN = [
  {
    id: 'hpoint-1',
    label: '이용약관(필수)',
    content: <div>H.Point 이용약관(필수) 내용</div>,
  },
  {
    id: 'hpoint-2',
    label: '개인정보 수집・이용동의(필수)',
    content: <div>H.Point 개인정보 수집・이용동의(필수) 내용</div>,
  },
  {
    id: 'hpoint-3',
    label: 'H.Point 제휴사에 대한 개인정보 제공동의(필수)',
    content: <div>H.Point 제휴사에 대한 개인정보 제공동의(필수) 내용</div>,
  },
  {
    id: 'hpoint-4',
    label: '맞춤 마케팅을 위한 개인정보 수집/이용동의(선택)',
    content: <div>맞춤 마케팅을 위한 개인정보 수집/이용동의(선택) 내용</div>,
  },
  {
    id: 'hpoint-5',
    label: '제휴사 이벤트/상품안내 위한 제3자 동의(선택)',
    content: <div>제휴사 이벤트/상품안내 위한 제3자 동의(선택) 내용</div>,
  },
  {
    id: 'hpoint-6',
    label: '금융정보 안내를 위한 제3자 제공동의(선택)',
    content: <div>금융정보 안내를 위한 제3자 제공동의(선택) 내용</div>,
  },
  {
    id: 'hpoint-7',
    label: '제휴신용카드 안내 위한 제3자 제공동의(선택)',
    content: <div>제휴신용카드 안내 위한 제3자 제공동의(선택) 내용</div>,
  },
  {
    id: 'hpoint-8',
    label: '마케팅을 위한 개인정보 수집・이용 동의 (선택)',
    className: 'group',
    children: [
      { id: 'hpoint-sms', label: 'SMS' },
      { id: 'hpoint-email', label: '이메일' },
      { id: 'hpoint-tm', label: 'TM' },
      { id: 'hpoint-dm', label: 'DM' },
    ],
  },
];

// NCP 약관 항목들만 분리
export const NCP_CHILDREN = [
  {
    id: 'ncp-1',
    label: '이용약관(필수)',
    content: <div>NCP 이용약관(필수) 내용</div>,
  },
  {
    id: 'ncp-2',
    label: '개인정보 수집/이용동의(필수)',
    content: <div>NCP 개인정보 수집/이용동의(필수) 내용</div>,
  },
  {
    id: 'ncp-3',
    label: 'H.Point 서비스를 위한 개인정보 제공 동의(필수)',
    content: <div>H.Point 서비스를 위한 개인정보 제공 동의(필수) 내용</div>,
  },
  {
    id: 'ncp-4',
    label: '개인정보 마케팅 활용 동의(혜택알림)(선택)',
    content: <div>개인정보 마케팅 활용 동의(혜택알림)(선택) 내용</div>,
  },
  {
    id: 'ncp-5',
    label: '마케팅을 위한 개인정보 수집・이용 동의 (선택)',
    className: 'group',
    children: [
      { id: 'ncp-email', label: '이메일' },
      { id: 'ncp-sms', label: 'SMS' },
    ],
  },
];

// NCP 약관2 항목들만 분리__로그인 약관동의
export const NCP_CHILDREN2 = [
  {
    id: 'ncp2-1',
    label: '이용약관(필수)',
    content: <div>이용약관(필수) 내용</div>,
  },
  {
    id: 'ncp2-2',
    label: '개인정보 수집/이용동의(필수)',
    content: <div>개인정보 수집/이용동의(필수) 내용</div>,
  },
  {
    id: 'ncp2-3',
    label: 'H.Point 서비스를 위한 개인정보 제공 동의(필수)',
    content: <div>H.Point 서비스를 위한 개인정보 제공 동의(필수) 내용</div>,
  },
  {
    id: 'ncp2-4',
    label: '개인정보 마케팅 활용 동의(혜택알림)(선택)',
    className: 'group',
    children: [
      { id: 'ncp2-email', label: '이메일' },
      { id: 'ncp2-sms', label: 'SMS' },
    ],
  },
];

// NCP 약관3 항목들만 분리__회원가입 약관동의 (현대백화점 통합회원일 경우)
export const NCP_CHILDREN3 = [
  {
    id: 'ncp3-1',
    label: '이용약관(필수)',
    content: <div>이용약관(필수) 내용</div>,
  },
  {
    id: 'ncp3-2',
    label: '개인정보 수집/이용동의(필수)',
    content: <div>개인정보 수집/이용동의(필수) 내용</div>,
  },
  {
    id: 'ncp3-3',
    label: 'H.Point 서비스를 위한 개인정보 제공 동의(필수)',
    content: <div>H.Point 서비스를 위한 개인정보 제공 동의(필수) 내용</div>,
  },
  {
    id: 'ncp3-4',
    label: '개인정보 마케팅 활용 동의(혜택알림)(선택)',
    content: <div>개인정보 마케팅 활용 동의(혜택알림)(선택) 내용</div>,
  },
];

// 현대백화점 약관 항목들만 분리
export const HYUNDAI_CHILDREN = [
  {
    id: 'hyundai-1',
    label: '이용약관(필수)',
    content: <div>현대백화점 이용약관(필수) 내용</div>,
  },
  {
    id: 'hyundai-2',
    label: '개인정보 수집・이용동의(필수)',
    content: <div>현대백화점 개인정보 수집・이용동의(필수) 내용</div>,
  },
  {
    id: 'hyundai-3',
    label: 'H.Point 제휴사에 대한 개인정보 제공동의(필수)',
    content: <div>H.Point 제휴사에 대한 개인정보 제공동의(필수) 내용</div>,
  },
  {
    id: 'hyundai-4',
    label: '개인정보 마케팅 활용 동의(혜택알림)(선택)',
    content: <div>개인정보 마케팅 활용 동의(혜택알림)(선택) 내용</div>,
  },
  {
    id: 'hyundai-5',
    label: '마케팅을 위한 개인정보 수집・이용 동의 (선택)',
    className: 'group',
    children: [
      { id: 'hyundai-sms', label: 'SMS' },
      { id: 'hyundai-email', label: '이메일' },
      { id: 'hyundai-tm', label: 'TM' },
      { id: 'hyundai-dm', label: 'DM' },
    ],
  },
];

// 일반회원, BIZ회원 회원가입
export const DEFINED_CHILDREN = [
  {
    id: 'privacy',
    label: '개인정보 수집・이용 동의(필수)',
    content: (
      <>
        <dl>
          <dt>가입구분</dt>
          <dd>회원가입</dd>
          <dt>이용목적</dt>
          <dd>서비스 이용 및 상담</dd>
          <dt>수집항목</dt>
          <dd>이메일, 성명, ID, 비밀번호, 생년월일, 휴대폰번호</dd>
          <dt>보유기간</dt>
          <dd>회원탈퇴 시 또는 법정보유기간</dd>
        </dl>
      </>
    ),
    footer: (
      <p>
        개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며, 동의 거부시 회원가입이 제한됩니다
      </p>
    ),
  },
  {
    id: 'marketing',
    label: '마케팅을 위한 개인정보 수집・이용동의(선택)',
    className: 'group',
    content: (
      <>
        <dl>
          <dt>가입구분</dt>
          <dd>기타</dd>
          <dt>이용목적</dt>
          <dd>신규 서비스, 상품안내, 마케팅</dd>
          <dt>수집항목</dt>
          <dd>이메일, 휴대폰번호, 성별, 스페셜데이, 쿠키(방문이력, 방문/행동), 주문이력</dd>
          <dt>보유기간</dt>
          <dd>회원탈퇴 시 또는 동의철회시</dd>
        </dl>
      </>
    ),
    children: [
      { id: 'marketing-sms', label: 'SMS' },
      { id: 'marketing-email', label: '이메일' },
    ],
    footer: (
      <p>선택사항의 동의항목에 선택하지 않으셔도 회원가입 및 구매결제를 이용하실 수 있습니다</p>
    ),
  },
  {
    id: 'privacy-outsourcing',
    label: '개인정보 취급 업무 위탁 내역(고지사항)',
    onlyRead: true,
    content: (
      <>
        <dl>
          <dt>위탁 받는 자</dt>
          <dd>(주)플래티어</dd>
          <dt>업무내용</dt>
          <dd>AI마케팅 플랫폼 개발 및 유지보수</dd>
        </dl>
      </>
    ),
  },
];

// HiHi멤버십 약관동의
export const HIHI_CHILDREN = [
  {
    id: 'hihi-1',
    label: 'HiHi 멤버십 이용약관 동의(필수)',
    content: <div>HiHi 멤버십 이용약관 동의(필수)</div>,
  },
  {
    id: 'hihi-2',
    label: '전자금융거래 이용약관 동의(필수)',
    content: <div>전자금융거래 이용약관 동의(필수)</div>,
  },
  {
    id: 'hihi-3',
    label: '개인정보 수집 및 이용 동의(선택)',
    content: <div>개인정보 수집 및 이용 동의(선택)</div>,
  },
  {
    id: 'hihi-4',
    label: '개인정보 제3자 제공/위탁 동의(선택)',
    content: <div>개인정보 제3자 제공/위탁 동의(선택)</div>,
  },
  {
    id: 'hihi-5',
    label: '개별판매자 개인정보 제공안내(선택)',
    content: <div>개별판매자 개인정보 제공안내(선택)</div>,
  },
];

// 마이클럽 약관동의
export const MYCLUB_CHILDREN = [
  {
    id: 'myclub-1',
    label: '클럽별 개인정보 수집·이용 동의(필수)',
    content: <div>클럽별 개인정보 수집·이용 동의(필수)</div>,
    required: true,
  },
  {
    id: 'myclub-2',
    label: '마케팅 목적 개인정보 수집·이용 동의(필수)',
    content: <div>마케팅 목적 개인정보 수집·이용 동의(필수)</div>,
    required: true,
  },
  {
    id: 'myclub-3',
    label: '마케팅 정보 수신 동의 (선택)',
    content: <div>마케팅 정보 수신 동의 (선택)</div>,
    className: 'group',
    children: [
      { id: 'myclub-sms', label: 'SMS/카카오톡', required: true },
      { id: 'myclub-email', label: '이메일' },
      { id: 'myclub-push', label: 'PUSH' },
    ],
  },
];

// 예약 약관동의
export const RESERVATION_CHILDREN = [
  {
    id: 'reservation-1',
    label: '취소 및 환불 정책 동의 (필수)',
    slot: (
      <TextList
        data={[
          '예약일로부터 4일 전 취소, 100% 환불',
          '예약일로부터 3일 전 취소, 50% 환불',
          '예약일로부터 1,2일 전 취소, 0% 환불',
          '예약 당일 취소, 0% 환불',
        ]}
        variant="level3"
      />
    ),
  },
  {
    id: 'reservation-2',
    label: '개인정보 수집 및 이용동의 (필수)',
    content: <div>개인정보 수집 및 이용동의 (필수)</div>,
  },
  {
    id: 'reservation-3',
    label: '개인정보 제3자 제공동의 (필수)',
    content: <div>개인정보 제3자 제공동의 (필수)</div>,
  },
];

// 웨이팅 약관동의
export const WAITING_CHILDREN = [
  {
    id: 'waiting-1',
    label: '개인정보 수집 및 이용동의 (필수)',
    content: <div>개인정보 수집 및 이용동의 (필수)</div>,
  },
  {
    id: 'waiting-2',
    label: '개인정보 제3자 제공동의 (필수)',
    content: <div>개인정보 제3자 제공동의 (필수)</div>,
  },
];
export const WAITING_EN_CHILDREN = [
  {
    id: 'waiting-en-1',
    label: 'I agree to the collection and use of my personal information (required)',
  },
  {
    id: 'waiting-en-2',
    label: 'I agree to the provision of my personal information to third parties (required)',
  },
];
export const WAITING_CN_CHILDREN = [
  {
    id: 'waiting-cn-1',
    label: '我同意收集和使用我的个人信息 (必填)',
  },
  {
    id: 'waiting-cn-2',
    label: '我同意向第三方提供我的个人信息 (必填)',
  },
];

// 테이블오더 약관동의
export const TORDER_CHILDREN = [
  {
    id: 'torder-1',
    label: '개별판매자 개인정보 제공안내 (필수)',
    content: <div>개별판매자 개인정보 제공안내 (필수)</div>,
  },
];

// 프로모션/이벤트 참여 동의
export const EVENTS_CHILDREN = [
  {
    id: 'event-join-1',
    label: (
      <Text>
        개인정보 수집/이용 동의서 <span className="ncp-color-gray1">(필수)</span>
      </Text>
    ),
    dialogTitle: '개인정보 수집/이용 동의서',
    content: (
      <div className="ncp-mt-l">
        <TextList
          variant="level2"
          data={[
            { textProps: { color: 'gray1' } as const, text: '이용 목적 : 경품 지급 및 CS 처리' },
            {
              textProps: { color: 'gray1' } as const,
              text: '이용 항목 : 아이디, 이름, 휴대전화번호, 우편번호, 상세주소',
            },
            { textProps: { color: 'gray1' } as const, text: '보유기간 : 응모 종료 후 6개월 까지' },
          ]}
        />
        <div className="ncp-mt-m">
          <Icon size="small" name="info" className="ncp-color-gray3" />
          <Text as="span" color="gray3" size="4" className="ncp-mt-m ncp-mt-x0 ncp-ml-xs">
            이벤트 참여를 위해서 필요한 최소한의 개인정보이므로 동의해주셔야 서비스 이용이
            가능합니다.
          </Text>
        </div>
      </div>
    ),
  },
  {
    id: 'event-join-2',
    label: (
      <Text>
        개인정보 제3자 제공 동의 <span className="ncp-color-gray1">(필수)</span>
      </Text>
    ),
    dialogTitle: '개인정보 제3자 제공 동의',
    content: (
      <div className="ncp-mt-l">
        <TextList
          variant="level2"
          data={[
            {
              textProps: { color: 'gray1' } as const,
              text: '제공받는자 : {어드민에서 설정한 업체 명}',
            },
            {
              textProps: { color: 'gray1' } as const,
              text: '이용목적 : 당첨자 경품증정 및 CS처리',
            },
            {
              textProps: { color: 'gray1' } as const,
              text: '제공되는 항목 : 받는사람 이름, 휴대전화번호, 우편번호, 상세주소',
            },
            {
              textProps: { color: 'gray1' } as const,
              text: '보유기간 : 5년',
            },
          ]}
        />
        <div className="ncp-mt-m">
          <Icon size="small" name="info" className="ncp-color-gray3" />
          <Text as="span" color="gray3" size="4" className="ncp-mt-m ncp-mt-x0 ncp-ml-xs">
            이벤트 참여를 위해 동의를 해주셔야 서비스 이용이 가능합니다.
          </Text>
        </div>
      </div>
    ),
  },
];

// 이벤트 마케팅 수신 동의
export const EVENTS_MARKETING_CHILDREN = [
  {
    id: 'event-marketing-1',
    label: '마케팅 목적 개인정보 수집・이용 동의 (필수)',
    drawerTitle: '마케팅 목적 개인정보 수집・이용 동의',
    content: <div>마케팅 목적 개인정보 수집・이용 동의 내용</div>,
  },
  {
    id: 'event-marketing-2',
    label: '마케팅 정보 수신 동의',
    className: 'group',
    children: [
      { id: 'event-marketing-sms', label: 'SMS' },
      { id: 'event-marketing-email', label: '이메일' },
    ],
  },
];

// 회원정보 변경 약관동의
export const USERINFO_CHILDREN = [
  {
    id: 'userinfo-1',
    label: '마케팅 목적 개인정보 수집·이용 동의(선택)',
    content: <div>클럽별 개인정보 수집·이용 동의(필수)</div>,
  },
  {
    id: 'userinfo-2',
    label: '마케팅 정보 수신 동의(선택)',
    content: <div>마케팅 정보 수신 동의 (선택)</div>,
    className: 'group',
    children: [
      { id: 'userInfo-sms', label: 'SMS/카카오톡' },
      { id: 'userInfo-email', label: '이메일' },
      { id: 'userInfo-push', label: 'PUSH' },
    ],
  },
];

// 이벤트 당첨 동의 (제세공과금 안내)
export const EVENTREWARD_CHILDREN = [
  {
    id: 'privacy',
    label: '개인정보 수집・이용 동의',
    required: true,
    content: (
      <>
        <p>
          개인정보 처리에 대한 동의를 거부할 권리가 있으나, 거부할 경우 경품 수령에 제한을 받을 수
          있습니다.
        </p>
        <dl>
          <dt>수집항목</dt>
          <dd>이름, 연락처</dd>
          <dt>수집목적</dt>
          <dd>이벤트 당첨자 확인 및 경품 배송</dd>
          <dt>보유 및 이용기간</dt>
          <dd>이벤트 당첨/공지일로부터 30일</dd>
        </dl>
      </>
    ),
  },
  {
    id: 'info',
    label: '고유식별정보 수집 및 이용 동의',
    required: true,
    content: (
      <>
        <p>
          고유식별정보 처리에 대한 동의를 거부할 권리가 있으나, 거부할 경우 경품 수령에 제한을 받을
          수 있습니다.
        </p>
        <dl>
          <dt>수집항목</dt>
          <dd>주민등록번호</dd>
          <dt>수집목적</dt>
          <dd>제세공과금 처리</dd>
          <dt>보유 및 이용기간</dt>
          <dd>제세공과금처리 후 즉시 삭제</dd>
        </dl>
      </>
    ),
  },
];

// 나의 맞춤정보 관리
export const PERSONALSETTING_CHILDREN = [
  {
    id: 'personal-privacy',
    label: '개인정보 수집 및 이용 동의',
    required: true,
    content: (
      <>
        <p>
          귀하는 동의를 거부할 권리가 있으나 동의를 거부할 경우, 맞춤 리뷰 및 추천 서비스 이용이
          불가능합니다.
        </p>
        <dl>
          <dt>수집항목</dt>
          <dd>
            출생년도, 성별, 키, 몸무게, 상의사이즈, 하의사이즈, 발사이즈, 발볼, 피부타입, 피부톤,
            피부고민, 거주 인원수, 구성원 형태, 식이 관심사
          </dd>
          <dt>수집목적</dt>
          <dd>
            맞춤 리뷰 및 상품 추천 서비스 제공, 리뷰와 함께 공개 되어 다른 고객 상품구매에 도움을
            주는 서비스 활용
          </dd>
          <dt>보유 및 이용기간</dt>
          <dd>서비스 종료 시 동의 철회시 까지</dd>
        </dl>
      </>
    ),
  },
  {
    id: 'personal-marketing',
    label: '맞춤정보 마케팅 활용 동의',
    required: false,
    content: (
      <>
        <strong>사이즈/뷰티 정보를 이용한 추천 서비스 제공 동의</strong>
        <p>
          고객님의 저장된 회원정보(출생년도, 성별) 및 아래의 선택적으로 수집된 신체/피부 정보를
          분석하여 서비스가 제공됩니다.
        </p>
        <dl>
          <dt>수집항목</dt>
          <dd>
            (문자메세지 수신 동의 시) 휴대전화번호
            <br />
            (이메일 수신 동의 시) 이메일 주소
          </dd>
          <dt>수집목적</dt>
          <dd>맞춤 리뷰 및 상품 추천 서비스 제공</dd>
          <dt>보유 및 이용기간</dt>
          <dd>수신 동의 철회 시 까지</dd>
        </dl>
      </>
    ),
    className: 'group',
    children: [
      { id: 'personal-marketing-sms', label: 'SMS' },
      { id: 'personal-marketing-email', label: '이메일' },
    ],
  },
];

// 판매자센터 가입 인증단계 동의
export const SELLER_JOIN_AUTH_CHILDREN = [
  {
    id: 'seller-join-privacy',
    label: (
      <Text>
        개인정보 수집 및 이용동의 <span className="ncp-color-gray1">(필수)</span>
      </Text>
    ),
    required: true,
    dialogTitle: '개인정보 수집 및 이용동의',
    content: (
      <>
        <div className="ncp-mt-s">
          <Text reading indent>
            귀하는 개인정보의 편리한 입력을 위해 동의하신 개인정보의 수집 및 이용에 관한 필수적
            동의에 따라 수집한 주소, 이메일, 자사카드 등록등을 활용하는 것에 동의하실 수 있습니다.
          </Text>
          <Heading size="5" color="black" indent className="ncp-mt-xl">
            현대식품관 투홈 브랜드 직송의 수집하는 개인정보
          </Heading>
          <Box size="3">
            <InfoList gap="row24">
              <InfoItem
                title="개인정보 수집 목적"
                content={
                  <Text color="gray2" size="4" reading>
                    현대식품관 투홈 입점신청
                  </Text>
                }
              />
              <InfoItem
                title="수집하는 개인정보 항목"
                content={
                  <Text color="gray2" size="4" reading>
                    [필수] 사업자번호, 대표자 휴대폰번호, 사업자등록번호, 상호명, 대표자 성명,
                    사업자구분, 법인등록번호, 업종, 업태, 통신판매업신고번호, 주소, 담당자 성명,
                    담당자 휴대폰번호, 사업자 대표번호, 팩스번호, 이메일, 고객응대 가능시간, 출고지
                    및 반품교환지 주소, 사업자등록증, 법인등기부등본, 법인 인감증명서 사본,
                    통장사본, 통신판매업 신고증 사본, 사용인감계, 통장인감계
                  </Text>
                }
              />
              <InfoItem
                title="보유 및 이용기간"
                content={
                  <Text color="gray2" size="4" reading>
                    목적달성 후 즉시 파기
                  </Text>
                }
              />
              <InfoItem
                title="수집방법"
                content={
                  <Text color="gray2" size="4" reading>
                    온라인
                  </Text>
                }
              />
            </InfoList>
          </Box>
          <Text size="4" color="gray2" reading indent className="ncp-mt-m">
            현대식품관 투홈 입점신청을 위해 동의받는 개인정보 수집 및 이용동의를 제외한 나머지
            개인정보처리 관련 사항은 현대식품관 투홈 사이트의 개인정보처리방침과 동일하게
            적용됩니다.
          </Text>
        </div>
      </>
    ),
  },
];
