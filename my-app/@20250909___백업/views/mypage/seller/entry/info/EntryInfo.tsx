'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { TitleBar, TextButton } from '@shared/ui';
import { BoardAccList } from '@/views/mypage/seller/components/BoardAccList';
import { EntryProcess } from '@/views/mypage/seller/entry/info/EntryProcess';
import SellerCenterMenuBtn from '@/views/mypage/seller/components/SellerCenterMenuBtn';
import { SellerApplyHeader, ApplyStatus } from '@/views/mypage/seller/components/SellerApplyHeader';
import { mockSellerNotice } from '@/views/mypage/seller/SellerDocs';
import styles from './EntryInfo.module.scss';

export default function EntryInfo() {
  const searchParams = useSearchParams();
  // 화면확인용
  const isCase2 = searchParams.has('case2'); // 로그인 - 입점신청 상태
  const isCase3 = searchParams.has('case3'); // 로그인 - 입점반려 상태
  const isCase4 = searchParams.has('case4'); // 로그인 - 입점승인 상태

  // 샘플데이터 가져오기
  const noticeData = mockSellerNotice;

  // 쿼리에 따른 상태 매핑 (기본은 none)
  const status: ApplyStatus = isCase2
    ? 'pending'
    : isCase3
      ? 'rejected'
      : isCase4
        ? 'approved'
        : 'none';

  // 컨텐츠 노출 조건 : status 기반
  const showContents = status === 'none';

  // 셀러명 설정값
  const sellerName = '샤넬뷰티';

  // 상태별 버튼 액션들
  const actions: Record<ApplyStatus, (() => void) | undefined> = {
    none: () => console.log('입점 신청 바로가기'),
    pending: () => console.log('심사 진행 상태 확인하기'),
    rejected: () => console.log('심사 진행 상태 확인하기'),
    approved: () => console.log('승인 상태 - 버튼 없음'),
  };
  const primaryClickByStatus = actions[status];

  // 반려 사유 (샘플)
  const rejectReason =
    status === 'rejected' ? 'OOO 서류 부적합 (해당 내용은 MD가 어드민에서 입력할 예정)' : undefined;

  return (
    <Container
      showBack
      title="입점 안내"
      actions={[
        {
          type: 'custom' as const,
          component: <SellerCenterMenuBtn />,
        },
      ]}
    >
      <Contents className={styles.layout}>
        <SellerApplyHeader
          variant="guide"
          status={status}
          sellerName={sellerName}
          onPrimaryClick={primaryClickByStatus}
          rejectReason={rejectReason}
        />
        {showContents && (
          <>
            <TitleBar type="docs" title="입점 절차 안내" className="ncp-mt-xxl" />
            <EntryProcess className="ncp-mt-m" />
            <TitleBar
              type="docs"
              level="1"
              title="HiHi 입점 가이드"
              side={
                <TextButton size="1" color="gray3" suffixIcon="arrowRight">
                  전체보기
                </TextButton>
              }
              className="ncp-mt-xxl"
            />
            <BoardAccList data={noticeData} className="custom-wrap" />
          </>
        )}
      </Contents>
    </Container>
  );
}
