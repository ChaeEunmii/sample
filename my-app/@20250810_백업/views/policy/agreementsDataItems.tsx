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

// HiHi멤버십 약관동의
export const TORDER_CHILDREN = [
  {
    id: 'torder-1',
    label: '개별판매자 개인정보 제공안내 (필수)',
    content: <div>개별판매자 개인정보 제공안내 (필수)</div>,
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
      { id: 'myclub-sms', label: 'SMS/카카오톡', required: true },
      { id: 'myclub-email', label: '이메일' },
    ],
  },
];
