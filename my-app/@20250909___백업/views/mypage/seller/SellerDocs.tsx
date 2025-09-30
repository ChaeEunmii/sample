// 게시판 컨텐츠 샘플 html
const mockSampleHtml = `
    <p>
      안녕하세요, HIHI 입니다.<br />
      현대백화점카드의 안정적인 서비스 제공을 위해 시스템 점검을 진행합니다.
    </p>
    <ul>
      <li>점검일시 : 5월18일(일) 22:00 ~ 5월19일(월) 6:00</li>
      <li>점검 내용 : 현대백화점카드 시스템 점검</li>
      <li>
        중단 서비스 : 현대백화점카드 결제 불가, 현대백화점카드 H.Point Pay 결제 및 등록 불가,
        백화점 우수고객 등급 연동 일시 중단
      </li>
    </ul>
    <p>
      현대백화점카드 외 타사카드 결제는 정상적으로 이용이 가능합니다.<br />
      고객님의 많은 양해를 부탁드립니다. 감사합니다.
    </p>
    <img src="/images/dummy/@sample_img.png" alt="이미지" />
    <table>
      <caption>
        배송 정보 확인 테이블로 받으시는 분, 주소, 선택상품, 주문수량을 나타냅니다.
      </caption>
      <colgroup>
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">변경 전 등급명</th>
          <th scope="col">변경 전 등급 혜택</th>
          <th scope="col">변경 후 등급명</th>
          <th scope="col">변경 후 등급명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>black</td>
          <td>
            15%*2매<br />
            10%*5매<br />
            1만원*2매
          </td>
          <td>black</td>
          <td>black</td>
        </tr>
        <tr>
          <td>black</td>
          <td>black</td>
          <td>black</td>
          <td>black</td>
        </tr>
      </tbody>
    </table>
  `;
const mockSampleHtml2 = `
    <p>스토어픽으로 주문한 상품만 가능합니다.<br/>택배 배송 상품의 경우 구매는 온라인으로만 접수 가능하며,<br/>[마이현대 > 주문확인/배송조회] 에서 신청하실 수 있습니다.</p>
    <img src="/images/dummy/@sample_img.png" alt="이미지" />
    <table>
      <caption>
        배송 정보 확인 테이블로 받으시는 분, 주소, 선택상품, 주문수량을 나타냅니다.
      </caption>
      <colgroup>
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">변경 전 등급명</th>
          <th scope="col">변경 전 등급 혜택</th>
          <th scope="col">변경 후 등급명</th>
          <th scope="col">변경 후 등급명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>black</td>
          <td>
            15%*2매<br />
            10%*5매<br />
            1만원*2매
          </td>
          <td>black</td>
          <td>black</td>
        </tr>
        <tr>
          <td>black</td>
          <td>black</td>
          <td>black</td>
          <td>black</td>
        </tr>
      </tbody>
    </table>
  `;

// =========== 게시판 아이템 샘플데이터 =========== //
export const boardItem = {
  id: 'board-id',
  label: '제목입니다',
  updateDate: '20250827',
  html: mockSampleHtml,
  files: [
    { name: '파일명1.jpg', href: '/files/notice1.pdf' },
    { name: '파일명2.jpg', href: '/files/notice1.pdf' },
  ],
};
// ============================================ //

// 판매자센터 - TOP5
export const mockSellerTopFive = [
  {
    ...boardItem,
    id: 'top5-1',
    updateDate: undefined,
    label: '매장에서 직접 반품 할 수 있나요?',
    html: mockSampleHtml2,
  },
  {
    ...boardItem,
    id: 'top5-2',
    updateDate: undefined,
    label: '매장에서 직접 교환 할 수 있나요?',
    html: mockSampleHtml2,
  },
  {
    ...boardItem,
    id: 'top5-3',
    updateDate: undefined,
    label: '주문한 상품을 일부 또는 전체 상품 주문취소가 가능한가요?',
    html: mockSampleHtml2,
  },
  {
    ...boardItem,
    id: 'top5-4',
    updateDate: undefined,
    label: '‘더머니’란 무엇인가요?',
    html: mockSampleHtml2,
  },
  {
    ...boardItem,
    id: 'top5-5',
    updateDate: undefined,
    label: '더현대닷컴의 적립금(더머니)는 어떻게 사용하나요?',
    html: mockSampleHtml2,
  },
];

// 판매자센터 - 공지사항
export const mockSellerNotice = [
  { ...boardItem, id: 'notice-1', label: '시스템 점검 공지사항 입니다.' },
  { ...boardItem, id: 'notice-2', label: '공지사항 입니다.' },
  { ...boardItem, id: 'notice-3', label: '공지사항 입니다.' },
  { ...boardItem, id: 'notice-4', label: '공지사항 입니다.' },
  { ...boardItem, id: 'notice-5', label: '공지사항 입니다.' },
];

// 판매자센터 - 입점가이드
export const mockSellerEntryGuides = [
  { ...boardItem, id: 'docs-1', label: '입점 가이드입니다.' },
  { ...boardItem, id: 'docs-2', label: '입점 가이드입니다.' },
  { ...boardItem, id: 'docs-3', label: '입점 가이드입니다.' },
  { ...boardItem, id: 'docs-4', label: '회원가입은 어떻게 해야 하나요?' },
  {
    ...boardItem,
    id: 'docs-5',
    label: '가입한 기억이 없는데 이미 가입된 회원이라고 인증을 할',
  },
  { ...boardItem, id: 'docs-6', label: '회원정보를 변경하고 싶습니다.' },
  {
    ...boardItem,
    id: 'docs-7',
    label: '가입한 기억이 없는데 이미 가입된 회원이라고 인증을 할',
  },
  { ...boardItem, id: 'docs-8', label: '회원정보를 변경하고 싶습니다.' },
  { ...boardItem, id: 'docs-9', label: '이벤트는 더 현대 회원만 응모 가능한가요?' },
  { ...boardItem, id: 'docs-10', label: '이벤트는 더 현대 회원만 응모 가능한가요?' },
];

// 판매자센터 - 운영매뉴얼 - 매뉴얼
export const mockManualList = [
  { ...boardItem, id: 'docs-1', label: '사업자 운영 매뉴얼 입니다.' },
  {
    ...boardItem,
    id: 'docs-2',
    label: '사업자 운영 매뉴얼 입니다. 최대 1줄이고 이후는 표기 됩니다.',
  },
  { ...boardItem, id: 'docs-3', label: '입점 가이드입니다.' },
  { ...boardItem, id: 'docs-4', label: '사업자 운영 매뉴얼 입니다.' },
  { ...boardItem, id: 'docs-5', label: '입점 가이드입니다.' },
  { ...boardItem, id: 'docs-6', label: '사업자 운영 매뉴얼 입니다.' },
  { ...boardItem, id: 'docs-7', label: '입점 가이드입니다.' },
  { ...boardItem, id: 'docs-8', label: '사업자 운영 매뉴얼 입니다.' },
  { ...boardItem, id: 'docs-9', label: '입점 가이드입니다.' },
  { ...boardItem, id: 'docs-10', label: '사업자 운영 매뉴얼 입니다.' },
  { ...boardItem, id: 'docs-11', label: '입점 가이드입니다.' },
  { ...boardItem, id: 'docs-12', label: '사업자 운영 매뉴얼 입니다.' },
  { ...boardItem, id: 'docs-13', label: '입점 가이드입니다.' },
];

// 판매자센터 - 운영매뉴얼 - 오픈 API 가이드
export const mockOpenApiGuide = [
  { ...boardItem, id: 'docs-1', label: '오픈 API 가이드 입니다.' },
  { ...boardItem, id: 'docs-2', label: '오픈 API 가이드 입니다.' },
  { ...boardItem, id: 'docs-3', label: '오픈 API 가이드 입니다.' },
  { ...boardItem, id: 'docs-4', label: '오픈 API 가이드 입니다.' },
  { ...boardItem, id: 'docs-5', label: '오픈 API 가이드 입니다.' },
  { ...boardItem, id: 'docs-6', label: '오픈 API 가이드 입니다.' },
  { ...boardItem, id: 'docs-7', label: '오픈 API 가이드 입니다.' },
  { ...boardItem, id: 'docs-8', label: '오픈 API 가이드 입니다.' },
  { ...boardItem, id: 'docs-9', label: '오픈 API 가이드 입니다.' },
  { ...boardItem, id: 'docs-10', label: '오픈 API 가이드 입니다.' },
  { ...boardItem, id: 'docs-11', label: '오픈 API 가이드 입니다.' },
  { ...boardItem, id: 'docs-12', label: '오픈 API 가이드 입니다.' },
];

// 판매자센터 - 고객센터 - 공지사항
export const mockCustomerNotice = [
  { ...boardItem, id: 'docs-1', label: 'HIHI 회원제도 변경 안내 (25/5/1~)' },
  { ...boardItem, id: 'docs-2', label: 'HIHI 회원제도 변경 안내 (25/5/1~)' },
  { ...boardItem, id: 'docs-3', label: '더현대 앱테크 종료 안내 (25/4/1~)' },
  {
    ...boardItem,
    id: 'docs-4',
    label: 'SKT 이용 고객 대상 피해 예방 수칙 안내 피해 보상 관련하여',
  },
  { ...boardItem, id: 'docs-5', label: 'HIHI 회원제도 변경 안내 (25/5/1~)' },
  { ...boardItem, id: 'docs-6', label: 'HIHI 회원제도 변경 안내 (25/5/1~)' },
  { ...boardItem, id: 'docs-7', label: '더현대 앱테크 종료 안내 (25/4/1~)' },
  { ...boardItem, id: 'docs-8', label: 'HIHI 회원제도 변경 안내 (25/5/1~)' },
  { ...boardItem, id: 'docs-9', label: 'HIHI 회원제도 변경 안내 (25/5/1~)' },
  { ...boardItem, id: 'docs-10', label: '더현대 앱테크 종료 안내 (25/4/1~)' },
  { ...boardItem, id: 'docs-11', label: '더현대 앱테크 종료 안내 (25/4/1~)' },
  { ...boardItem, id: 'docs-12', label: '더현대 앱테크 종료 안내 (25/4/1~)' },
];

// 판매자센터 - FAQ
export const boardFaqItem = {
  id: 'faq-id',
  label: 'FAQ 제목입니다',
  html: mockSampleHtml2,
};
// faq 목록 샘플데이터
export const mockFaqList = [
  { ...boardFaqItem, id: 'docs-1', label: '매장에서 직접 반품 할 수 있나요?' },
  { ...boardFaqItem, id: 'docs-2', label: '매장에서 직접 교환 할 수 있나요?' },
  {
    ...boardFaqItem,
    id: 'docs-3',
    label: '주문한 상품을 일부 또는 전체 상품 주문취소가 가능한가요?',
  },
  { ...boardFaqItem, id: 'docs-4', label: '‘더머니’란 무엇인가요?' },
  { ...boardFaqItem, id: 'docs-5', label: '더현대닷컴의 적립금(더머니)는 어떻게 사용하나요?' },
  { ...boardFaqItem, id: 'docs-6', label: '더현대닷컴의 적립금(더머니)는 어떻게 사용하나요?' },
  { ...boardFaqItem, id: 'docs-7', label: '더현대닷컴의 적립금(더머니)는 어떻게 사용하나요?' },
  { ...boardFaqItem, id: 'docs-8', label: '더현대닷컴의 적립금(더머니)는 어떻게 사용하나요?' },
  { ...boardFaqItem, id: 'docs-9', label: '더현대닷컴의 적립금(더머니)는 어떻게 사용하나요?' },
  { ...boardFaqItem, id: 'docs-10', label: '더현대닷컴의 적립금(더머니)는 어떻게 사용하나요?' },
  { ...boardFaqItem, id: 'docs-11', label: '더현대닷컴의 적립금(더머니)는 어떻게 사용하나요?' },
  { ...boardFaqItem, id: 'docs-12', label: '더현대닷컴의 적립금(더머니)는 어떻게 사용하나요?' },
  { ...boardFaqItem, id: 'docs-13', label: '이것은 테스트' },
];
// faq 목록 샘플데이터2
export const mockFaqList2 = [
  { ...boardFaqItem, id: 'docs-1', label: '회원 가입은 어떻게 해야 하나요?' },
  {
    ...boardFaqItem,
    id: 'docs-2',
    label: '가입한 기억이 없는데 이미 등록된 계정이라고 인증을 할 수 없습니다.',
  },
  { ...boardFaqItem, id: 'docs-3', label: '회원정보를 변경하고 싶습니다.' },
  { ...boardFaqItem, id: 'docs-4', label: '비밀번호가 생각 나지 않습니다.' },
  { ...boardFaqItem, id: 'docs-5', label: '비밀번호가 생각 나지 않습니다.' },
  { ...boardFaqItem, id: 'docs-6', label: '비밀번호가 생각 나지 않습니다.' },
  { ...boardFaqItem, id: 'docs-7', label: '비밀번호가 생각 나지 않습니다.' },
  { ...boardFaqItem, id: 'docs-8', label: '비밀번호가 생각 나지 않습니다.' },
  { ...boardFaqItem, id: 'docs-9', label: '비밀번호가 생각 나지 않습니다.' },
  { ...boardFaqItem, id: 'docs-10', label: '비밀번호가 생각 나지 않습니다.' },
  { ...boardFaqItem, id: 'docs-11', label: '비밀번호가 생각 나지 않습니다.' },
  { ...boardFaqItem, id: 'docs-12', label: '비밀번호가 생각 나지 않습니다.' },
  { ...boardFaqItem, id: 'docs-13', label: '이것은 테스트' },
];
