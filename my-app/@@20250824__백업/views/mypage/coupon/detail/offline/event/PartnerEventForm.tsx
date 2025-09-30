'use client';
import { useState } from 'react';
import { Button, ButtonArea, Tip } from '@/shared/ui';
import { formatDate } from '@/shared/utils/ui';
import { Container, Contents } from '@/widgets/layout/Container';
import { CouponBarcodeBox } from './CouponBarcodeBox';
import { CouponDetailInfo } from '@views/mypage/coupon/components';
import styles from '@views/mypage/coupon/Coupon.module.scss';
import { mockDetailCouponItem } from '@/mocks/coupon';

export const PartnerEventForm = () => {
  // 임시 데이터
  const detailCoupon = mockDetailCouponItem;

  // 상태 관리
  const [isConfirmed, setIsConfirmed] = useState(false); // 이미지 쿠폰 > alert 확인 버튼 클릭 여부
  const [tipOpen, setTipOpen] = useState(true); // 팁 열림 여부 상태

  // 주차권 상세 정보
  const couponDetailInfoList = [
    {
      title: '이용 기간',
      content: `${formatDate(detailCoupon.start, 'dot')} ~ ${formatDate(detailCoupon.due, 'dot')}`,
      isbold: true,
      desc: '유효기간이 지나기 전에 사용해주세요.',
    },
    {
      title: '사용 지점',
      content: `${detailCoupon.store}`,
    },
    {
      title: '증정 장소',
      content: `${detailCoupon.location}`,
    },
    {
      title: '증정 대상',
      content: `${detailCoupon.target}`,
    },
    {
      title: '증정 내용',
      content: `${detailCoupon.content}`,
    },
    {
      title: '사용 횟수',
      content: `${detailCoupon.usageLimit}`,
    },
  ];

  return (
    <Container title="쿠폰 상세" showBack>
      <Contents>
        {/* 이미지 쿠폰 */}
        <CouponBarcodeBox data={detailCoupon} onConfirm={() => setIsConfirmed(true)} />
        {/* 쿠폰 상세 정보 */}
        <CouponDetailInfo data={couponDetailInfoList} />
        <ButtonArea margin="1">
          <Button variant="secondary">자세히 보기</Button>
        </ButtonArea>
      </Contents>
      <ButtonArea type="sticky">
        {tipOpen && isConfirmed && (
          <Tip
            arrowPlace="start"
            placement="top"
            onClose={() => {
              setTipOpen(false);
            }}
            className={styles.couponTip}
          >
            바코드 번호가 복사돼요.
          </Tip>
        )}
        <Button size="large" variant="primary" disabled={!isConfirmed}>
          사용하기
        </Button>
      </ButtonArea>
    </Container>
  );
};

PartnerEventForm.displayName = 'PartnerEventForm';
