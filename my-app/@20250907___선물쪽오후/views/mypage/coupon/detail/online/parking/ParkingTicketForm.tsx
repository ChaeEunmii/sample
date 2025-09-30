'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useToast } from '@/shared/contexts/ToastContext';
import { Box, Button, ButtonArea, Text, Tip } from '@/shared/ui';
import { formatDate } from '@/shared/utils/ui';
import { Container, Contents } from '@/widgets/layout/Container';
import CouponItem from '@/widgets/coupon/CouponItem';
import { CouponDetailInfo, CouponNotice } from '../../../components';
import { ParkingTicketRegister } from './register/ParkingTicketRegister';
import { VehicleInfo } from './info/VehicleInfo';
import styles from '@views/mypage/coupon/Coupon.module.scss';
import { mockParkingCouponItem } from '@/mocks/coupon';

export const ParkingTicketForm = () => {
  // 임시 데이터
  const parkingCoupon = mockParkingCouponItem;

  const { showToast } = useToast();
  // 상태 관리
  const [carNumber, setCarNumber] = useState(''); // 인풋 value 상태
  const [inputTouched, setInputTouched] = useState(false); // 인풋 포커스 여부
  const [showError, setShowError] = useState(false); // 에러 문구 노출
  const [tipOpen, setTipOpen] = useState(true); // 팁 열림 여부 상태

  // 화면상태
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const register = status === 'register'; // 차량번호 미등록 시
  const use = status === 'use'; // 주차권 사용하기

  // 출차하기 버튼 클릭 핸들러
  const handleClick = () => {
    const trimmed = carNumber.trim();
    if (!trimmed) {
      setShowError(true); // 빈 값일 경우 에러 표시
      return;
    }

    // 정상 처리
    setShowError(false);
    showToast('차량 번호를 등록했어요.');
  };

  // 주차권 상세 정보
  const infoList = [
    {
      title: '사용 지점',
      content:
        '충청점, 무역센터점, 충청점, 무역센터점, 충청점, 무역센터점, 충청점, 무역센터점, 충청점, 무역센터점, 충청점, 무역센터점, 더현대서울점',
    },
    {
      title: '무료주차 시간',
      content: `${parkingCoupon.perk}`,
      isbold: true,
    },
    {
      title: '이용 기간',
      content: `${formatDate(parkingCoupon.start, 'dot')} ~ ${formatDate(parkingCoupon.due, 'dot')}`,
      isbold: true,
    },
  ];

  // 대상 차량정보
  const VehicleList = [
    {
      id: 'vehicle-1',
      label: '123가 3456',
      value: '123가 3456',
    },
    {
      id: 'vehicle-2',
      label: '123나 7890',
      value: '123나 7890',
    },
    {
      id: 'vehicle-3',
      label: '123다 4567',
      value: '123다 4567',
    },
  ];

  return (
    <Container title="주차권 사용하기" showBack>
      <Contents>
        {register ? (
          <ParkingTicketRegister
            carNumber={carNumber}
            onChange={(val) => {
              setCarNumber(val);
              if (showError && val.trim()) setShowError(false); // 입력시 에러 제거
            }}
            onFocus={() => setInputTouched(true)} // 인풋 클릭 시 활성화 조건 충족
            showError={showError}
          />
        ) : (
          <VehicleInfo data={VehicleList} />
        )}
        {/* 주차권 쿠폰 */}
        <CouponItem data={parkingCoupon} isContent />
        <Box>
          <Text size="4" color="gray3">
            현대식품관에서 발행한 주차권 및 셀프픽업, 테이블오더, QR결제 이용 시 사용하세요.
          </Text>
          <Text size="4" weight="medium" color="point">
            출차 10분 전 사용하기를 눌러주세요.
          </Text>
        </Box>
        {/* 주차권 상세 정보 */}
        <CouponDetailInfo data={infoList} />
        {/* 확인해주세요 */}
        <CouponNotice />
      </Contents>
      <ButtonArea type="sticky">
        {tipOpen && (
          <Tip
            arrowPlace="start"
            placement="top"
            onClose={() => {
              setTipOpen(false);
            }}
            className={styles.couponTip}
          >
            입차하셨나요? 반드시 입차 후 사용해주세요!
          </Tip>
        )}
        <Button
          size="large"
          variant="primary"
          onClick={handleClick}
          disabled={!inputTouched && register}
        >
          출차하기
        </Button>
      </ButtonArea>
    </Container>
  );
};

ParkingTicketForm.displayName = 'ParkingTicketForm';
