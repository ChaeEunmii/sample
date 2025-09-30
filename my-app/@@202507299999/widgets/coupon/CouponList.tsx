'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { formatDate } from '@/shared/utils/ui';
import { useToast } from '@/shared/contexts/ToastContext';
import { Button, ButtonArea, Collapse, Text, TextButton } from '@shared/ui';
import CouponItem, { CouponData } from '@/widgets/coupon/CouponItem';
import { ApplyCouponTargetDialog } from './ApplyCouponTargetDialog';
import { CouponUseDrawer } from './CouponUseDrawer';
import styles from './CouponList.module.scss';
import { mockCouponBarcode, mockCouponItem } from '@/mocks/coupon';

type CouponWithDownload = CouponData & {
  isDownload: boolean;
};

interface CouponListProps {
  data: CouponData[];
  /** 보여줄 초기 쿠폰 개수 (선택사항) */
  initialCount?: number;
  /** 더보기 클릭 시 증가 개수 (선택사항) */
  step?: number;
  onLoadMore?: () => void;
  /** 추가 클래스 */
  className?: string;
}

export const CouponList = ({
  data,
  initialCount = 10,
  step = 10,
  onLoadMore,
  className,
}: CouponListProps) => {
  // 임시 데이터
  const coupon = mockCouponItem;
  const barcode = mockCouponBarcode;
  const router = useRouter();
  const { showToast } = useToast();
  // 상태 관리
  const [isCouponTargetDialogOpen, setIsCouponTargetDialogOpen] = useState(false); // 쿠폰 적용 대상 Dialog
  const [isCouponBarcodeDrawerOpen, setIsCouponBarcodetDrawerOpen] = useState(false); // 쿠폰 사용하기 - 바코드 Drawer
  const [isAuthKeyDrawerOpen, setIsAuthKeyDraweOpen] = useState(false); // 쿠폰 사용하기 - 인증키 Drawer
  const [isCouponUseDrawerOpen, setIsCouponUseDraweOpen] = useState(false); // 쿠폰 사용하기 -  직원확인/아이체크 Drawer
  // 쿠폰 리스트 상태 (다운로드 상태 포함)
  const [couponList, setCouponList] = useState<CouponWithDownload[]>([]);
  // 각 그룹별 전체다운로드 상태
  const [isDownload, setIsDownload] = useState<Record<string, boolean>>({});
  // 보여줄 쿠폰 개수
  const [visibleCount, setVisibleCount] = useState(initialCount);

  // data가 변경되면 couponList 재설정
  useEffect(() => {
    const mapped = data.map((coupon) => ({
      ...coupon,
      isDownload: coupon.hasCoupon ?? false,
      type: coupon.type,
    }));
    setCouponList(mapped);
    setVisibleCount(initialCount);
    setIsDownload({}); // 그룹별 다운로드 상태 초기화
  }, [data, initialCount]);

  // visibleCount 만큼 쿠폰 슬라이스
  const visibleCouponList = couponList.slice(0, visibleCount);

  // 1) 쿠폰 리스트를 group.id 기준으로 그룹핑 (group이 없는 항목은 'ITEMS' 키로 분리)
  const grouped: Record<string, CouponWithDownload[]> = visibleCouponList.reduce(
    (acc, coupon) => {
      // group.id를 가져오거나, 없으면 'ITEMS'로 설정
      const key = coupon.group?.id ?? 'ITEMS';

      // 해당 키에 배열이 없으면 새 배열 생성
      if (!acc[key]) acc[key] = [];

      // 현재 쿠폰을 해당 그룹 배열에 추가
      acc[key].push(coupon);

      // 누적 객체 반환 (다음 순회에서 사용)
      return acc;
    },
    // 초기값: 빈 객체이며, 타입은 그룹 키별 쿠폰 배열 객체
    {} as Record<string, CouponWithDownload[]>
  );

  // 더보기 버튼 노출 조건
  const hasMore = couponList.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + step);
    onLoadMore?.();
  };

  // 개별 쿠폰 다운로드 핸들러
  const handleDownload = (idx: number) => {
    const target = couponList[idx];
    if (!target.isDownload) {
      setCouponList((list) =>
        list.map((item, i) => (i === idx ? { ...item, isDownload: true } : item))
      );
      showToast('쿠폰을 1장 받았어요');
    } else {
      // 다운로드 후 케이스
      switch (target.type) {
        case 'discount':
        case 'order':
        case 'tier':
          setIsCouponTargetDialogOpen(true);
          break;
        case 'parking':
          router.push('/mypage/coupon/parking?status=register');
          break;
        case 'barcode':
        case 'cis':
          setIsCouponBarcodetDrawerOpen(true);
          break;
        case 'authKey':
          setIsAuthKeyDraweOpen(true);
          break;
        default:
          setIsCouponUseDraweOpen(true);
          break;
      }
    }
  };

  // 그룹핑 전체 쿠폰 다운로드 핸들러
  const handleGroupDownload = (groupId: string) => {
    setCouponList((list) =>
      list.map((coupon) =>
        (coupon.group?.id ?? 'ITEMS') === groupId ? { ...coupon, isDownload: true } : coupon
      )
    );
    setIsDownload((prev) => ({ ...prev, [groupId]: true }));
    showToast('쿠폰을 N장 받았어요.');
  };

  // 공통 쿠폰 아이템 렌더링 함수
  const renderCouponItems = (items: CouponWithDownload[], isGroup = false) =>
    items.map((item, idx) => (
      <CouponItem
        key={idx}
        data={item}
        variant="module"
        isDownload={item.isDownload}
        isGroup={isGroup}
        onDownload={() => handleDownload(idx)}
        className={styles.couponItem}
      />
    ));

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.listBox}>
        {Object.entries(grouped).map(([groupId, items]) => {
          // 2) groupId가 없는 그룹은 key가 'ITEMS'으로 들어옴
          if (groupId === 'ITEMS') {
            // 묶이지 않은 쿠폰들은 개별 렌더
            return renderCouponItems(items);
          }

          // groupId 있는 그룹
          const groupTitle = items[0].group?.title; // 그룹핑 쿠폰 title
          const groupStart = items[0].start; // 그룹핑 쿠폰 시작 날짜
          const groupDue = items[0].due; // 그룹핑 쿠폰 종료 날짜

          // 3) groupId가 있는 애들은 div로 한번 감싸서 렌더
          return (
            <div key={groupId} className={styles.grouping}>
              <div className={styles.buttonWrap}>
                <Text size="5" weight="semibold" className={styles.title}>
                  {groupTitle}
                </Text>

                {/* 버튼 */}
                <TextButton
                  size="1"
                  suffixIcon={isDownload[groupId] ? 'check' : 'download'}
                  className={styles.btn}
                  color={isDownload[groupId] ? 'gray3' : 'gray1'}
                  disabled={isDownload[groupId] ? true : false}
                  onClick={() => handleGroupDownload(groupId)}
                >
                  {isDownload[groupId] ? '다운 완료' : '전체 다운로드'}
                </TextButton>
              </div>

              {/* 그룹핑 쿠폰 기간 */}
              <Text size="3" color="gray3" className={styles.period}>
                {formatDate(groupStart, 'dot')} ~ {formatDate(groupDue, 'dot')}
              </Text>
              {/* 그룹핑 쿠폰 영역 */}
              <Collapse variant="clear">
                <Collapse.Control arrowSize="small" align="end">
                  <Text size="4" align="right">
                    5장
                  </Text>
                </Collapse.Control>
                <Collapse.Content className={styles.grayBg}>
                  {renderCouponItems(items, true)}
                </Collapse.Content>
              </Collapse>
            </div>
          );
        })}
      </div>
      {/* 더보기 버튼 */}
      {hasMore && (
        <ButtonArea margin="2" align="center">
          <Button
            round
            size="small"
            suffixIcon="arrowDown"
            variant="tertiary"
            onClick={handleLoadMore}
          >
            더보기
          </Button>
        </ButtonArea>
      )}

      {/* 쿠폰 적용 대상 Dialog */}
      <ApplyCouponTargetDialog
        data={coupon}
        isOpen={isCouponTargetDialogOpen}
        onClose={() => setIsCouponTargetDialogOpen(false)}
      />
      {/* 쿠폰 사용하기 - 바코드 Drawer */}
      <CouponUseDrawer
        data={barcode}
        type="barcode"
        isOpen={isCouponBarcodeDrawerOpen}
        onClose={() => setIsCouponBarcodetDrawerOpen(false)}
      />
      {/* 쿠폰 사용하기 - 인증키 Drawer */}
      <CouponUseDrawer
        type="authCode"
        isOpen={isAuthKeyDrawerOpen}
        onClose={() => setIsAuthKeyDraweOpen(false)}
      />
      {/* 쿠폰 사용하기 - 직원확인/아이체크 Drawer */}
      <CouponUseDrawer
        type="eyeCheck"
        isOpen={isCouponUseDrawerOpen}
        onClose={() => setIsCouponUseDraweOpen(false)}
      />
    </div>
  );
};

CouponList.displayName = 'CouponList';
