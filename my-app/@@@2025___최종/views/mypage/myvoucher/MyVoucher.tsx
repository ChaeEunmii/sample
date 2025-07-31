'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs, ButtonArea, Button, TextList, Empty, Stack, Text, Select } from '@shared/ui';
import { VoucherType, VoucherCardProps } from '@/widgets/coupon/VoucherCard';
import { VoucherCardList } from '@/widgets/coupon/VoucherCardList';
import { ConfirmInfoSection } from '@views/mypage/point/components/ConfirmInfoSection';
import UseVoucherDrawer from '@views/mypage/myvoucher/UseVoucherDrawer';
import styles from './MyVoucher.module.scss';
import { mockVoucherCards } from '@mocks/voucher';

// 정렬 옵션
export const periodOptions = [
  {
    label: '최신주문순',
    value: 'option1',
  },
  {
    label: '만료임박순',
    value: 'option2',
  },
];

// 최상단 탭 데이터 분리
export const topTabItems: { label: string; content: React.ReactNode | null }[] = [
  { label: '사용가능', content: null },
  { label: '사용완료/만료/취소', content: null },
];

// 하단 탭 데이터
export const tabItems: { label: string; type: VoucherType | 'all' }[] = [
  { label: '전체', type: 'all' },
  { label: '바우처', type: 'voucher' },
  { label: '방문 쿠폰', type: 'coupon' },
  { label: '방문 예약', type: 'reservation' },
  { label: '체험/신청', type: 'experience' },
];

export default function MyVoucher() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');
  const isTab2 = searchParams.has('tab2');

  // mock 데이터 변수에 할당
  const voucherData = isNoData
    ? []
    : // 바우처목록에서 링크 이동이 아니므로 href 제거(샘플)
      mockVoucherCards.map((item) => ({
        ...item,
        href: '',
      }));

  // 정렬
  const [sortBrandValue, setSortBrandValue] = useState('option1');

  // 선택 된 바우처
  const [selectedVoucher, setSelectedVoucher] = useState<VoucherCardProps | null>(null);
  // 바우처 사용 Drawer 상태
  const [isUseVoucherDrawerOpen, setIsUseVoucherDrawerOpen] = useState(false);
  // 최상단 탭 상태: 0 - 사용가능, 1 - 사용완료/만료/취소
  const [topTab, setTopTab] = useState(isTab2 ? 1 : 0);

  // 하단 탭 상태
  const [clickedTab, setClickedTab] = useState(0);
  // 하단 탭 타입
  const currentType = tabItems[clickedTab].type;
  // 하단 탭 기준 필터링 (타입별)
  let filteredListData = voucherData.filter(
    (item) => currentType === 'all' || item.type === currentType
  ) as VoucherCardProps[];

  // 최상단 탭 기준으로 추가 필터링 (상태별)
  if (topTab === 0) {
    // 사용가능 탭: status가 'available'인 데이터만
    filteredListData = filteredListData.filter((item) => item.status === 'available');
  } else if (topTab === 1) {
    // 사용완료/만료/취소 탭: status가 'used', 'expired', 'cancelled' 중 하나인 데이터만
    filteredListData = filteredListData.filter(
      (item) => item.status === 'used' || item.status === 'expired' || item.status === 'cancelled'
    );
  }

  return (
    <Container showBack title="마이 바우처">
      <Contents className={styles.layout}>
        {/* 최상단 탭 */}
        <Tabs data={topTabItems} activeTab={topTab} onTabChange={setTopTab} variant="default" />
        {/* 하단 탭 */}
        <Tabs
          data={tabItems}
          variant="buttons"
          activeTab={clickedTab}
          onTabChange={setClickedTab}
          className={styles.tabs}
        />
        {/* 정렬 필터 */}
        <Stack type="between" className={styles.total}>
          <Text size="5" weight="regular" color="gray2">
            총 <em>{filteredListData.length}</em>개
          </Text>
          <Select
            title="정렬"
            options={periodOptions}
            value={sortBrandValue}
            onChange={setSortBrandValue}
            variant="ghost"
            placeholder="기간 선택"
            className={styles.select}
          />
        </Stack>
        {/* 바우처 목록 */}
        {filteredListData.length > 0 ? (
          <>
            <VoucherCardList
              data={filteredListData}
              onCardClick={(card) => {
                setSelectedVoucher(card);
                setIsUseVoucherDrawerOpen(true);
              }}
            />
            <div className={styles.btns}>
              <Button size="small" suffixIcon="arrowDown" variant="tertiary" round>
                더보기
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* 내역 없음 */}
            <div className={styles.hasEmpty}>
              <Empty title="내역이 없어요" />
            </div>
          </>
        )}
        {/* 확인해주세요 */}
        <ConfirmInfoSection>
          <TextList
            data={[
              '체험/신청 신청 건수는 오늘 기준 한달 전까지의 신청 내역 중 신청 취소를 제외한 수 입니다.',
              '목록은 신청하신 내역 전체가 조회됩니다.',
            ]}
            variant="info"
          />
        </ConfirmInfoSection>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          바우처 전체보기
        </Button>
      </ButtonArea>

      {/* 바우처 사용하기 (D)*/}
      <UseVoucherDrawer
        isOpen={isUseVoucherDrawerOpen}
        onClose={() => setIsUseVoucherDrawerOpen(false)}
        voucherData={selectedVoucher ?? undefined}
      />
    </Container>
  );
}
