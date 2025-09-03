'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { useSearchParams } from 'next/navigation';
import { TitleBar, TextButton } from '@shared/ui';
import styles from './SellerCenter.module.scss';
import { SellerAccordionList } from '@views/mypage/info/seller/components/SellerAccordionList';
import { mockSellerTopFive, mockSellerNotice } from '@views/mypage/info/seller/SellerDocs';
import SellerCenterMenuBtn from '@views/mypage/info/seller/components/SellerCenterMenuBtn';
import {
  SellerApplyHeader,
  ApplyStatus,
} from '@/views/mypage/info/seller/components/SellerApplyHeader';

export default function SellerCenter() {
  const searchParams = useSearchParams();
  // 화면확인용
  const isCase2 = searchParams.has('case2'); // 로그인 - 입점신청 상태
  const isCase3 = searchParams.has('case3'); // 로그인 - 입점반려 상태
  const isCase4 = searchParams.has('case4'); // 로그인 - 입점승인 상태

  // 쿼리에 따른 상태 매핑 (기본은 none)
  const status: ApplyStatus = isCase2
    ? 'pending'
    : isCase3
      ? 'rejected'
      : isCase4
        ? 'approved'
        : 'none';

  // 아코디언 정보 숨김 조건 : status 기반
  const hideAccordion = status === 'rejected' || status === 'approved';

  // 셀러명 설정값
  const sellerName = '샤넬뷰티';

  // 샘플데이터 가져오기
  const topFiveData = mockSellerTopFive;
  const noticeData = mockSellerNotice;

  // 상태별 버튼 액션들
  const actions: Record<ApplyStatus, (() => void) | undefined> = {
    none: () => console.log('입점 신청 바로가기'),
    pending: () => console.log('심사 진행 상태 확인하기'),
    rejected: () => console.log('심사 진행 상태 확인하기'),
    approved: () => console.log('승인 상태 - 버튼 없음'),
  };
  const primaryClickByStatus = actions[status];

  return (
    <Container
      showBack
      title="판매자 센터"
      actions={[
        {
          type: 'custom' as const,
          component: <SellerCenterMenuBtn />,
        },
      ]}
    >
      <Contents className={styles.layout}>
        <SellerApplyHeader
          variant="center"
          status={status}
          sellerName={sellerName}
          onPrimaryClick={primaryClickByStatus}
        />
        {!hideAccordion && (
          <>
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
            <SellerAccordionList data={topFiveData} className="custom-wrap" />
            <TitleBar
              type="docs"
              level="1"
              title="공지사항"
              side={
                <TextButton size="1" color="gray3" suffixIcon="arrowRight">
                  전체보기
                </TextButton>
              }
            />
            <SellerAccordionList data={noticeData} className="custom-wrap" />
          </>
        )}
      </Contents>
    </Container>
  );
}
