'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { TitleArea, ButtonArea, Button, TitleBar, TextButton, IconButton, Empty } from '@shared/ui';
import SellerCenterMenuDialog from '@views/mypage/info/seller/components/SellerCenterMenuDialog';
import styles from './SellerCenter.module.scss';
import { SellerAccordionList } from '@views/mypage/info/seller/components/SellerAccordionList';
import SellerAccordionSearch from '@views/mypage/info/seller/components/SellerAccordionSearch';
import { sellerDocs, sellerDocs2 } from '@views/mypage/info/seller/SellerDocs';

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
