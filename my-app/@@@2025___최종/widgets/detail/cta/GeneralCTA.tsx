import { useState, useEffect } from 'react';
import { Button, Tip } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { ShowroomCTA } from './ShowroomCTA';
import { ReserveCTA } from './ReserveCTA';
import { CTACommonProps } from './drawer/CtaDrawer';

import styles from './DetailCTA.module.scss';
import clsx from 'clsx';
import ReserveDialog from './ReserveDialog';

export const GeneralCTA = ({ setDrawerType, setIsDrawerOpen, inDialog }: CTACommonProps) => {
  const { prodType, prodDetailType, item } = useProdDetail();

  // 선물하기 툴팁 상태
  const [showTip, setShowTip] = useState(true);
  // 예약 구매 안내 팝업 상태
  const [isReserveDialogOpen, setIsReserveDialogOpen] = useState(false);

  const isSimplePay = false; // 간편결제 신청 여부

  useEffect(() => {
    if (!showTip) return;
    const timer = setTimeout(() => setShowTip(false), 5000);
    return () => clearTimeout(timer);
  }, [showTip]);

  return (
    <>
      {isSimplePay ? (
        // 간편결제(즉시결제)
        <Button
          size="large"
          variant="primary"
          onClick={() => {
            if (setDrawerType) setDrawerType('buy');
            if (setIsDrawerOpen) setIsDrawerOpen(true);
          }}
        >
          결제하기
        </Button>
      ) : (
        <>
          {prodDetailType === 'holidayOnly' && item.useChat && (
            <Button iconOnly="chat" variant="tertiary" size="large" onClick={() => {}}>
              상담하기
            </Button>
          )}
          {item.isGiftable && (
            <>
              <Button
                iconOnly="gift"
                variant="tertiary"
                size="large"
                onClick={() => {
                  if (prodDetailType === 'preOrder') setIsReserveDialogOpen(true);
                  if (setDrawerType) setDrawerType('gift');
                  if (setIsDrawerOpen) setIsDrawerOpen(true);
                }}
              >
                선물하기
              </Button>
              {!inDialog && (
                <Tip
                  className={clsx(
                    styles.presentTip,
                    !showTip && styles.hide,
                    prodDetailType === 'holidayOnly' && item.useChat && styles.secoundBtn
                  )}
                  placement="top"
                  arrowPlace="start"
                >
                  받는 사람이 고르는 선물, 더 마음에 쏙!
                </Tip>
              )}
            </>
          )}
          {/* 쇼룸 매장문의 / 1:1채팅 버튼 */}
          {prodType === 'showroom' && <ShowroomCTA />}
          {prodType === 'serviceReserve' ? (
            // 서비스 예약
            <ReserveCTA setDrawerType={setDrawerType} setIsDrawerOpen={setIsDrawerOpen} />
          ) : (
            // 일반 구매
            <Button
              size="large"
              variant="primary"
              onClick={() => {
                // TODO: 동작 확인 필요. 현재는 Dialog가 뒤에 깔리고 Drawer가 위에 오픈됨.
                if (prodDetailType === 'preOrder') setIsReserveDialogOpen(true);
                if (setDrawerType) setDrawerType('buy');
                if (setIsDrawerOpen) setIsDrawerOpen(true);
              }}
            >
              구매하기
            </Button>
          )}
        </>
      )}
      {prodDetailType === 'preOrder' && (
        <ReserveDialog isOpen={isReserveDialogOpen} onClose={() => setIsReserveDialogOpen(false)} />
      )}
    </>
  );
};
