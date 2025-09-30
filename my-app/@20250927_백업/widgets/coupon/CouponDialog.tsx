import { Button, Dialog, TextList } from '@shared/ui';
import { mockCouponList } from '@/mocks/coupon';

import styles from './CouponDialog.module.scss';
import CouponItem from './CouponItem';
import { useState } from 'react';
import { useToast } from '@/shared/contexts/ToastContext';

interface CouponDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function CouponDialog({ isOpen, onClose }: CouponDialogProps) {
  const { showToast } = useToast();

  // Coupon 리스트 상태 관리
  const [couponList, setCouponList] = useState(
    mockCouponList.map((coupon) => ({
      ...coupon,
      isDownload: coupon.hasCoupon ?? false,
    }))
  );

  // 전체 다운로드 처리
  const handleDownloadAll = () => {
    // 이미 받은 쿠폰 개수
    const beforeCount = couponList.filter((c) => c.isDownload).length;
    // 전체 쿠폰 개수
    const totalCount = couponList.length;
    // 새로 받을 수 있는 쿠폰 개수
    const newlyReceivable = couponList.filter((c) => !c.isDownload).length;

    // 모두 이미 받은 경우
    if (beforeCount === totalCount) return;

    setCouponList((list) => list.map((coupon) => ({ ...coupon, isDownload: true })));

    // 토스트 메시지
    setTimeout(() => {
      // 이번에 받은 쿠폰 개수
      const receivedNow = newlyReceivable;
      // 이번에 받을 수 있었던 쿠폰 개수와 실제 받은 개수가 같으면 모두 받은 것
      if (receivedNow === totalCount) {
        showToast('쿠폰을 모두 받았어요');
      } else if (receivedNow === newlyReceivable) {
        showToast('쿠폰을 모두 받았어요');
      } else {
        showToast(`쿠폰을 ${receivedNow}장 받았어요`);
      }
    }, 0);
  };

  // 모든 쿠폰이 다운로드 되었는지 여부
  const allDownloaded = couponList.every((coupon) => coupon.isDownload);

  return (
    <Dialog
      title="쿠폰다운 받기"
      isOpen={isOpen}
      onClose={onClose}
      bodyClassName={styles.root}
      showClose
      maximize
      footer={
        <>
          <Button
            size="large"
            variant="primary"
            onClick={handleDownloadAll}
            disabled={allDownloaded}
          >
            쿠폰 전체 받기
          </Button>
        </>
      }
    >
      <div className={styles.coupons}>
        {couponList.map((item, idx) => (
          <CouponItem
            key={idx}
            data={item}
            isDownload={item.isDownload}
            onDownload={() => {
              if (!item.isDownload) {
                setCouponList((list) =>
                  list.map((c, i) => (i === idx ? { ...c, isDownload: true } : c))
                );
                setTimeout(() => {
                  showToast('쿠폰을 1장 받았어요');
                }, 0);
              }
            }}
          />
        ))}
      </div>

      <TextList
        className={styles.note}
        data={[
          '다운받은 쿠폰은 주문 시 사용이 가능 합니다.',
          '쿠폰은 당사의 사정에 따라 임의 변경 될 수 있습니다.',
          '다운받은 쿠폰은 마이페이지에서 확인 하실 수 있습니다.',
        ]}
      />
    </Dialog>
  );
}
