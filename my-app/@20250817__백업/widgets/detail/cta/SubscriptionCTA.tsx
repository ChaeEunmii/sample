import clsx from 'clsx';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, TextButton } from '@/shared/ui';
import { CTACommonProps } from './drawer/CtaDrawer';
import { SubscriptionRoundProductDialog } from '@/widgets/order';
import { mockProductInfoList } from '@/mocks/subscription';

export const SubscriptionCTA = ({ setDrawerType, setIsDrawerOpen, hasRounds }: CTACommonProps) => {
  // 임시 데이터
  const products = mockProductInfoList;

  // 화면 상태
  const searchParams = useSearchParams();
  const isSubscribed = searchParams.get('isSubscribed') === 'true'; // 구독중인지 여부

  // 상태 관리
  const [isRoundProductDialogOpen, setIsRoundProductDialogOpen] = useState(false);

  if (isSubscribed) {
    return (
      <>
        <Button size="large">정기구독 관리</Button>
        <Button
          size="large"
          variant="primary"
          onClick={() => {
            if (setDrawerType) setDrawerType('apply');
            if (setIsDrawerOpen) setIsDrawerOpen(true);
          }}
        >
          추가 구독 신청하기
        </Button>
      </>
    );
  }

  return (
    <>
      {hasRounds && (
        <>
          <TextButton
            variant="block"
            size="3"
            suffixIcon="arrowRight"
            iconSize="medium"
            onClick={() => setIsRoundProductDialogOpen(true)}
          >
            회차별 구성상품 보기
          </TextButton>

          {/* 회차별 구성상품 보기(L) */}
          <SubscriptionRoundProductDialog
            data={products}
            isOpen={isRoundProductDialogOpen}
            onClose={() => setIsRoundProductDialogOpen(false)}
          />
        </>
      )}
      <Button
        size="large"
        variant="primary"
        className={clsx(hasRounds && 'ncp-mt-s')}
        onClick={() => {
          if (setDrawerType) setDrawerType('apply');
          if (setIsDrawerOpen) setIsDrawerOpen(true);
        }}
      >
        정기구독 신청하기
      </Button>
    </>
  );
};
