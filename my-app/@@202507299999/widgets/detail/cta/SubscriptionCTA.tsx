import { Button, Icon } from '@/shared/ui';
import { CTACommonProps } from './drawer/CtaDrawer';

export const SubscriptionCTA = ({ setDrawerType, setIsDrawerOpen }: CTACommonProps) => {
  const isSubscribed = false; // 구독중인지 여부

  if (isSubscribed) {
    return (
      <>
        <Button size="large">
          {/* 아이콘 변경 필요 */}
          <Icon name="coupon" size="large" />
          정기구독 관리
        </Button>
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
    <Button
      size="large"
      variant="primary"
      onClick={() => {
        if (setDrawerType) setDrawerType('apply');
        if (setIsDrawerOpen) setIsDrawerOpen(true);
      }}
    >
      정기구독 신청하기
    </Button>
  );
};
