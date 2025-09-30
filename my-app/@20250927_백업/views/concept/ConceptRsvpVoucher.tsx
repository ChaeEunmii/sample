'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs, Text, Empty } from '@shared/ui';
import { VoucherType } from '@/widgets/coupon/VoucherCard';
import { VoucherCardList } from '@/widgets/coupon/VoucherCardList';
import { mockRsvpVoucher } from '@/mocks/voucher';
// import styles from './Concept.module.scss';

export default function ConceptRsvpVoucher() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // mock 데이터 가져오기
  const voucherData = isNoData ? [] : mockRsvpVoucher;

  // 탭
  const tabItems: { label: string; value: 'all' | VoucherType }[] = [
    { label: '전체', value: 'all' },
    { label: '바우처', value: 'voucher' },
    { label: '방문예약', value: 'reservation' },
    { label: '방문쿠폰', value: 'coupon' },
    { label: '체험신청', value: 'experience' },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  // 현재 탭의 value
  const activeValue = tabItems[activeIndex].value;
  // 탭 필터링
  const filtered =
    activeValue === 'all' ? voucherData : voucherData.filter((item) => item.type === activeValue);

  // 위시리스트 상태 관리
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>([]);

  // 위시리스트 토글 핸들러
  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) => {
      if (isActive) {
        // 위시리스트에 추가
        return prev.includes(productId) ? prev : [...prev, productId];
      } else {
        // 위시리스트에서 제거
        return prev.filter((id) => id !== productId);
      }
    });

    console.log(`위시리스트 ${isActive ? '추가' : '제거'}:`, productId);
  };

  // 타입별 안내 문구
  const descMap: Record<'all' | VoucherType, string> = {
    all: '바우처부터 체험 신청까지 다양한 혜택을 확인하세요.',
    voucher: '고객님의 취향을 빛내는 전용 바우처를 확인하세요.',
    reservation: '다채로운 취향을 위한 프라이빗 행사에 초대합니다.',
    coupon: '매장 방문 시 사용 가능한 쿠폰을 미리 준비해보세요.',
    experience: '집까지 배송해드리는 우수고객 전용 샘플을 체험해보세요.',
  };

  // 타입별 Empty 문구
  const emptyMap: Record<'all' | VoucherType, string> = {
    all: '등록된 바우처가 없습니다.',
    voucher: '등록된 바우처 상품이 없습니다.',
    reservation: '등록된 방문 예약이 없습니다.',
    coupon: '등록된 방문 쿠폰이 없습니다.',
    experience: '등록된 체험 신청이 없습니다.',
  };

  return (
    <Container title="바우처" showBack type="basket">
      <Contents>
        <Tabs
          data={tabItems.map(({ label }) => ({ label }))}
          variant="buttons"
          activeTab={activeIndex}
          onTabChange={setActiveIndex}
          className="ncp-mt-s"
        />
        <Text size="4" color="gray2" indent className="ncp-mt-x0">
          총 {filtered.length}개
        </Text>
        <Text size="4" color="gray2" indent className="ncp-mt-s">
          {descMap[activeValue]}
        </Text>
        {filtered.length > 0 ? (
          <VoucherCardList
            data={filtered}
            cardVariant="boxed"
            wishlist={{
              activeIds: wishlistIds,
              onToggle: handleWishlistToggle,
            }}
            showDateTitle
            className="ncp-mt-s"
          />
        ) : (
          <Empty title={emptyMap[activeValue]} />
        )}
      </Contents>
    </Container>
  );
}
