import { Heading, Dialog, TitleBar, Line, Tabs, Stack, SelectDrawer } from '@shared/ui';

import clsx from 'clsx';
import styles from './ApplyCouponTarget.module.scss';

import { CouponDetailInfo } from '../../views/mypage/coupon/components/CouponDetailInfo';
import { formatDate, formatPrice } from '@/shared/utils/ui';
import { MLPD015_2 } from '@/widgets/display';
import { mockProdBanner, mockProdCase } from '@/mocks/product';
import { ProdCardList } from '../product';
import { useState } from 'react';
import { mockSortOptions } from '@/mocks/display';

// 쿠폰 적용 대상 데이터 아이템
interface TargetItemProps {
  /** 쿠폰 유형(일반, 더할인-다운로드형만 해당, 더플러스, 장바구니, 무료배송) */
  category?: string;
  /** 쿠폰명 */
  title: string;
  /** 할인율(정률 쿠폰값) */
  rate?: number;
  /** 할인 금액(정액 쿠폰값) */
  value?: number;
  /** 사용 조건 */
  require?: string;
  /** 최대할인금액 */
  maxDiscountAmount?: number;
  /** 사용 기한(시작일) */
  start?: string;
  /** 사용 기한(만료일) */
  due?: string;
}

interface CouponTargetDialogProps {
  /** 쿠폰 적용 대상 데이터 */
  data: TargetItemProps;
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const ApplyCouponTargetDialog = ({
  data,
  isOpen = false,
  onClose,
  className,
}: CouponTargetDialogProps) => {
  const [wishlistIds, setWishlistIds] = useState<(string | number)[]>(['case-1', 'case-3']);
  const [sortValue, setSortValue] = useState('recommended');

  const handleWishlistToggle = (productId: string | number, isActive: boolean) => {
    setWishlistIds((prev) =>
      isActive ? [...new Set([...prev, productId])] : prev.filter((id) => id !== productId)
    );
  };

  // 상세 정보
  const infoList = [
    {
      title: '할인율/금액',
      content: `${data.value ? formatPrice(data.value) : `${data.rate}%`}`,
    },
    {
      title: '최대할인금액',
      content: `${formatPrice(data.maxDiscountAmount ?? 0)}`,
    },
    {
      title: '사용 조건',
      content: `${data.require}`,
    },
    {
      title: '사용 기간',
      content: `${formatDate(data.start, 'dot')} ~ ${formatDate(data.due, 'dot')}`,
    },
  ];

  return (
    <Dialog
      title="쿠폰 적용 대상"
      isOpen={isOpen}
      onClose={onClose}
      className={clsx(className)}
      maximize
      showClose
      flush
      bodyClassName={styles.flushBody}
    >
      <Heading as="h3" size="6">
        [{data.category}] {data.title}
      </Heading>
      <Line variant="bold" margin="3" />
      {/* 상세 정보 */}
      <CouponDetailInfo data={infoList} />
      <Line variant="bold" margin="3" />
      <TitleBar title="사용 가능 상품 (100)" level="3" className="ncp-mt-x0" />
      <Tabs
        data={[
          {
            label: '카테고리명',
          },
          {
            label: '카테고리명',
          },
          {
            label: '카테고리명',
          },
          {
            label: '카테고리명',
          },
          {
            label: '카테고리명',
          },
        ]}
        defaultActive={0}
        variant="buttons"
        className={styles.flushTabs}
      />
      <Tabs
        data={[
          {
            label: '카테고리명',
          },
          {
            label: '카테고리명',
          },
          {
            label: '카테고리명',
          },
          {
            label: '카테고리명',
          },
          {
            label: '카테고리명',
          },
        ]}
        defaultActive={0}
        variant="texts"
        className={styles.flushTabs}
      />
      <Stack type="end">
        <SelectDrawer
          title="정렬"
          options={mockSortOptions}
          value={sortValue}
          onChange={setSortValue}
          variant="filter"
        />
      </Stack>
      <ProdCardList
        data={mockProdCase.slice(0, 4)}
        columns={2}
        wishlist={{ activeIds: wishlistIds, onToggle: handleWishlistToggle }}
      />
    </Dialog>
  );
};

ApplyCouponTargetDialog.displayName = 'ApplyCouponTargetDialog';
