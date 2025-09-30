import clsx from 'clsx';
import { useState } from 'react';
import { Box, Button, Image } from '@/shared/ui';
import { useAlert } from '@/shared/contexts/AlertContext';
import { ImageCouponItem } from '@/widgets/coupon';
import styles from './CouponBarcodeBox.module.scss';

interface ImageCouponItem {
  /** 쿠폰 이미지 */
  couponImg?: {
    src: string;
    alt: string;
  };
  /** 바코드 이미지 */
  barcodeImg?: {
    src: string;
    alt: string;
  };
  /** 쿠폰명 */
  title: string;
  /** 사용 조건 */
  require?: string;
  /** 이용기간 시작일 */
  start?: string;
  /** 이용기간 종료일 */
  due?: string;
  /** 사용 지점 */
  store?: string;
}

interface CouponBarcodeBoxProps {
  /** 이미지 쿠폰 데이터 */
  data: ImageCouponItem;
  /** 외부에서 쿠폰 사용 확인 전달 받을 콜백 */
  onConfirm?: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const CouponBarcodeBox = ({ data, onConfirm, className }: CouponBarcodeBoxProps) => {
  const { showAlert } = useAlert();
  const [confirmed, setConfirmed] = useState(false); // 쿠폰 사용 여부

  const handleConfirm = () => {
    setConfirmed(true);
    onConfirm?.(); // 외부에도 쿠폰 사용 완료 알림
  };

  return (
    <div className={clsx(styles.root, className)}>
      <ImageCouponItem data={data} />

      {!confirmed ? (
        <Button
          variant="secondary"
          onClick={() => {
            showAlert({
              message: (
                <>
                  쿠폰번호를 확인하면 쿠폰이 사용 처리돼요.
                  <br />
                  쿠폰을 사용하시겠어요?
                </>
              ),
              onConfirm: handleConfirm,
              showCancel: true,
              labelProps: { confirm: '네, 사용할게요', cancel: '아니요' },
            });
          }}
        >
          쿠폰번호 확인하기
        </Button>
      ) : (
        <Box size="4" className="ncp-mt-x0">
          <Image src={data.barcodeImg?.src ?? ''} alt={data.barcodeImg?.alt} />
        </Box>
      )}
    </div>
  );
};

CouponBarcodeBox.displayName = 'CouponBarcodeBox';
