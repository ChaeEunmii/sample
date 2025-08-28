'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { TitleArea, ButtonArea, Button, TitleBar, TextButton, IconButton, Empty } from '@shared/ui';
import SellerCenterMenuDialog from '@views/mypage/info/seller/components/SellerCenterMenuDialog';
import styles from './SellerCenter.module.scss';
import { SellerAccordionList } from '@views/mypage/info/seller/components/SellerAccordionList';
import SellerAccordionSearch from '@views/mypage/info/seller/components/SellerAccordionSearch';

const sellerDocItem = {
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
const sellerDocs = [
  { ...sellerDocItem, id: 'docs-1' },
  {
    id: 'guide-1',
    // flags: 'new' as const,
    label: '가이드 문서',
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
  },
  { ...sellerDocItem, id: 'docs-2' },
  { ...sellerDocItem, id: 'docs-3' },
  { ...sellerDocItem, id: 'docs-4' },
  { ...sellerDocItem, id: 'docs-5' },
  { ...sellerDocItem, id: 'docs-6' },
  { ...sellerDocItem, id: 'docs-7' },
  { ...sellerDocItem, id: 'docs-8' },
  { ...sellerDocItem, id: 'docs-9' },
  { ...sellerDocItem, id: 'docs-10' },
  { ...sellerDocItem, id: 'docs-11' },
];

const sellerDocs2 = [
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

export default function SellerCenter() {
  const [isEmailAuthDialog, setIsEmailAuthDialog] = useState(false);

  // 데이터 가져오기
  const data = sellerDocs;
  const data2 = sellerDocs2;

  return (
    <Container
      showBack
      title="판매자 센터"
      actions={[
        {
          type: 'custom' as const,
          component: (
            <IconButton name="menu" size="large" onClick={() => setIsEmailAuthDialog(true)}>
              메뉴
            </IconButton>
          ),
        },
      ]}
    >
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              HiHi 오픈마켓
              <br />
              판매자 센터입니다
            </>
          }
          description="판매자 가입하고 입점신청을 해보세요!"
        />
        <ButtonArea margin="2">
          <Button variant="primary">입점 신청 바로가기</Button>
        </ButtonArea>
        <TitleBar
          type="docs"
          level="1"
          title="많이 보는 질문 TOP 5"
          side={
            <TextButton size="1" color="gray3" suffixIcon="arrowRight">
              전체보기
            </TextButton>
          }
        />
        <SellerAccordionList data={data} className="custom-wrap" />
        <br />
        <br />
        <SellerAccordionSearch
          tabs={[
            { label: 'PRODUCT', data: data },
            { label: 'BRAND', data: data2 },
            { label: 'COLLECTION', data: data },
            { label: 'PEOPLE', data: data2 },
            { label: 'PEOPLE', data: data2 },
            { label: 'PEOPLE', data: data2 },
          ]}
          defaultTabIndex={0}
        />
        <br />
        <br />
        <SellerAccordionSearch
          data={data}
          placeholder="궁금한 내용을 입력해 주세요."
          noResultSlot={
            <Empty
              title={`일치하는 검색 결과가 없어요.\n다른 키워드로 검색해 주세요.`}
              buttons={<Button variant="primary">목록으로 이동</Button>}
            />
          }
        />

        {/* 판매자센터 메뉴 (L)*/}
        <SellerCenterMenuDialog
          isOpen={isEmailAuthDialog}
          onClose={() => setIsEmailAuthDialog(false)}
        />
      </Contents>
    </Container>
  );
}
