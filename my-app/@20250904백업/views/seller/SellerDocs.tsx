export const sellerDocItem = {
  id: 'notice-1',
  // flags: ['hot'] as const,
  label: '공지사항 제목입니다',
  updateDate: '2025.08.27',
  html: '<p>에디터에서 작성한 본문 내용입니다.</p>',
  files: [
    { name: '첨부파일.pdf', href: '/files/notice1.pdf' },
    { name: '스크린샷.png', onClick: () => alert('파일 클릭!') },
  ],
  notice: (
    <>
      답변이 충분하지 않으셨다면 <strong>비즈니스 문의</strong>를 이용해 주세요.
    </>
  ),
};

export const sellerHtmlDocItem = {
  id: 'html-1',
  // flags: 'new' as const,
  label: '제목',
  updateDate: '2025.08.15',
  content: (
    <>
      <p>
        안녕하세요, HIHI 입니다.
        <br />
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
        현대백화점카드 외 타사카드 결제는 정상적으로 이용이 가능합니다.
        <br />
        고객님의 많은 양해를 부탁드립니다. 감사합니다.
      </p>
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
              15%*2매
              <br />
              10%*5매
              <br />
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
    </>
  ),
  files: [
    { name: '첨부파일1.pdf', href: '/files/notice1.pdf' },
    { name: '첨부파일2.pdf', href: '/files/notice1.pdf' },
  ],
};
export const sellerDocs = [
  { ...sellerDocItem, id: 'docs-1' },
  { ...sellerHtmlDocItem, id: 'docs-2' },
  { ...sellerDocItem, id: 'docs-3' },
  { ...sellerDocItem, id: 'docs-4' },
  { ...sellerDocItem, id: 'docs-5' },
  { ...sellerDocItem, id: 'docs-6' },
  { ...sellerDocItem, id: 'docs-7' },
  { ...sellerDocItem, id: 'docs-8' },
  { ...sellerDocItem, id: 'docs-9' },
  { ...sellerDocItem, id: 'docs-10' },
  { ...sellerDocItem, id: 'docs-11' },
  { ...sellerDocItem, id: 'docs-12' },
];

export const sellerDocs2 = [
  { ...sellerDocItem, id: 'docs-1' },
  { ...sellerDocItem, id: 'docs-3' },
  { ...sellerDocItem, id: 'docs-4' },
  { ...sellerDocItem, id: 'docs-2' },
  { ...sellerDocItem, id: 'docs-5' },
  { ...sellerDocItem, id: 'docs-8' },
  { ...sellerDocItem, id: 'docs-9' },
  { ...sellerDocItem, id: 'docs-10' },
  { ...sellerDocItem, id: 'docs-11' },
];

// 판매자센터 - TOP5
export const mockSellerTopFive = [
  { ...sellerHtmlDocItem, id: 'top5-1', label: '매장에서 직접 반품 할 수 있나요?' },
  { ...sellerHtmlDocItem, id: 'top5-2', label: '매장에서 직접 교환 할 수 있나요?' },
  {
    ...sellerHtmlDocItem,
    id: 'top5-3',
    label: '주문한 상품을 일부 또는 전체 상품 주문취소가 가능한가요?',
  },
  { ...sellerHtmlDocItem, id: 'top5-4', label: '‘더머니’란 무엇인가요?' },
  { ...sellerHtmlDocItem, id: 'top5-5', label: '더현대닷컴의 적립금(더머니)는 어떻게 사용하나요?' },
];

// 판매자센터 - 공지사항
export const mockSellerNotice = [
  { ...sellerHtmlDocItem, id: 'notice-1', label: '시스템 점검 공지사항 입니다.' },
  { ...sellerHtmlDocItem, id: 'notice-2', label: '공지사항 입니다.' },
  { ...sellerHtmlDocItem, id: 'notice-3', label: '공지사항 입니다.' },
  { ...sellerHtmlDocItem, id: 'notice-4', label: '공지사항 입니다.' },
  { ...sellerHtmlDocItem, id: 'notice-5', label: '공지사항 입니다.' },
];
