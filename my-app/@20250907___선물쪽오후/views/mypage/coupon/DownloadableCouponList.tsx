'use client';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useToast } from '@/shared/contexts/ToastContext';
import { Button, Empty } from '@/shared/ui';
import { Container, Contents } from '@/widgets/layout/Container';
import { CouponList } from '@/widgets/coupon';
import { CouponFilters, CouponNav, CouponNotice } from './components';
import { mockOfflineCouponList, mockOnlineCouponList } from '@/mocks/coupon';

export const DownloadableCouponList = () => {
  // 임시 데이터
  const online = mockOnlineCouponList;
  const offline = mockOfflineCouponList;

  // 라우터 훅 (next/navigation)
  const searchParams = useSearchParams();

  // 화면 상태
  const status = searchParams.get('status');
  const isEmpty = status === 'empty';

  const { showToast } = useToast();

  // 상태 관리
  const [onlineOfflineTab, setOnlineOfflineTab] = useState(0); // 온라인/오프라인 탭
  const [categoryTab, setCategoryTab] = useState(0); // 카테고리 탭
  const [isReceivingCoupons, setIseceivingCoupons] = useState(false); // 쿠폰 전체 받기 버튼

  const handleClick = () => {
    setIseceivingCoupons(true); // 버튼 비활성화
    showToast('쿠폰을 N장 받았어요.');
  };

  // 쿠폰 목록 데이터
  const couponData = useMemo(() => {
    return onlineOfflineTab === 0 ? online : offline;
  }, [onlineOfflineTab, online, offline]);

  // 카테고리 탭별 empty 케이스
  const getEmptyProps = () => {
    // 온라인 > 생일/스페셜데이
    if (categoryTab === 1 && onlineOfflineTab === 0) {
      return {
        title: '받을 수 있는 쿠폰이 없어요',
        buttons: <Button variant="primary">기념일 관리하러 가기</Button>,
        desc: (
          <>
            스페셜데이 쿠폰은 연 최대 3장까지 발급 가능하며
            <br />
            기념일은 회원정보에서 직접 설정 가능해요.{' '}
          </>
        ),
      };
    }
    // 온라인 > 등급혜택
    if (categoryTab === 2 && onlineOfflineTab === 0) {
      return {
        title: '등급 쿠폰을 모두 다운로드 받았어요',
        buttons: <Button variant="primary">등급혜택 보러가기</Button>,
      };
    }
    // 온라인 > 클럽혜택
    if (categoryTab === 3 && onlineOfflineTab === 0) {
      return {
        title: '클럽 쿠폰을 모두 다운로드 받았어요',
        buttons: <Button variant="primary">클럽혜택 보러가기</Button>,
      };
    }
    // 기본
    return {
      title: '받을 수 있는 쿠폰이 없어요',
      buttons: <Button variant="primary">보유쿠폰 보러가기</Button>,
    };
  };

  const emptyProps = getEmptyProps();

  return (
    <Container title="쿠폰" showBack>
      <Contents>
        {/* nav */}
        <CouponNav activeKey="downloadable" />
        {/* 쿠폰 전체 받기 */}
        <Button variant="secondary" onClick={handleClick} disabled={isReceivingCoupons || isEmpty}>
          {isReceivingCoupons || isEmpty ? '쿠폰을 모두 받았어요' : '쿠폰 전체 받기'}
        </Button>
        {/* 필터 */}
        <CouponFilters
          type="downloadable"
          isEmpty={isEmpty}
          onlineOfflineTab={onlineOfflineTab}
          onChangeOnlineOfflineTab={setOnlineOfflineTab}
          onCategoryTab={categoryTab}
          onChangeCategoryTab={setCategoryTab}
        />
        {/* 쿠폰 리스트 */}
        {!isEmpty && couponData.length > 0 ? (
          <CouponList key={onlineOfflineTab} data={couponData} />
        ) : (
          <Empty
            title={emptyProps.title}
            buttons={emptyProps.buttons}
            desc={emptyProps.desc ? emptyProps.desc : undefined}
            variant="minDisplay"
          />
        )}
        {/* 확인해주세요 */}
        <CouponNotice />
      </Contents>
    </Container>
  );
};

DownloadableCouponList.displayName = 'DownloadableCouponList';
