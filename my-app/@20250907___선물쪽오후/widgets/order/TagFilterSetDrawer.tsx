'use client';

import { useMemo, useState, useCallback } from 'react';
import { Drawer, IconButton, Button, FormArea, FormItem, Input, Chip, Text } from '@shared/ui';
import styles from './TagFilterSet.module.scss';
import { DateRangePicker, DateRange } from '@/widgets/form';
import { CatalogKey, CATALOG, FIELDS_BY_MODE, INITIAL_FILTERS } from './TagFilterSetDrawerOptions';

// 렌더링할 모드 (orders, claims, reservation, subscription...)
export type Mode = keyof typeof FIELDS_BY_MODE;

interface TagFilterSetDrawerProps {
  /** 타이틀 설정 */
  title?: string;
  /** 캘린더만 사용여부 */
  onlyCalendar?: boolean;
  /** 클레임 필터여부 (있으면 유지, 내부에서 mode로 매핑만 사용)*/
  isClaims?: boolean;
  /** 예약 필터여부 (있으면 유지, 내부에서 mode로 매핑만 사용)*/
  isReservation?: boolean;
  /** 모드로 화면 렌더링 결정 (확장) */
  mode?: Mode;
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 필터 적용 시 호출 함수 */
  onApplyFilters?: () => void;
  /** 상단 검색영역 안내 문구 숨김 여부 */
  hideTopInfo?: boolean;
}

export default function TagFilterSetDrawer({
  title = '어떤 주문을 찾으세요?',
  onlyCalendar = false,
  isClaims = false,
  isReservation = false,
  mode,
  isOpen,
  onClose,
  onApplyFilters,
  hideTopInfo = false,
}: TagFilterSetDrawerProps) {
  /** 기존에 설정했던 props는 유지 :legacy 매핑 */
  const effectiveMode: Mode = useMemo(() => {
    if (mode) return mode;
    if (isClaims) return 'claims';
    if (isReservation) return 'reservation';
    return 'orders';
  }, [mode, isClaims, isReservation]);

  /** 선택 상태관리 */
  const [filters, setFilters] = useState<Record<CatalogKey, string>>(INITIAL_FILTERS);
  // Chip onChange 공통 (string | string[] 대비)
  const onChangeSingle = useCallback(
    (key: CatalogKey) => (v: string | string[]) =>
      setFilters((prev) => ({ ...prev, [key]: Array.isArray(v) ? (v[0] ?? 'all') : v })),
    []
  );

  const usedKeys: readonly CatalogKey[] = FIELDS_BY_MODE[effectiveMode];

  /** 렌더링에 사용시 (mode 기준) */
  const isReservationMode = effectiveMode === 'reservation';

  // 기간선택
  const [range, setRange] = useState<DateRange>({
    from: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    to: new Date(),
  });

  return (
    <Drawer
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <Button
            size="large"
            onClick={() => {
              setFilters(INITIAL_FILTERS);
              setRange({
                from: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                to: new Date(),
              });
            }}
          >
            초기화
          </Button>
          <Button
            size="large"
            variant="primary"
            onClick={() => {
              // range 기본 포함 + mode별 필터 키만 선택적으로 추가
              const payload: { range: DateRange } & Partial<Record<CatalogKey, string>> = {
                range,
              };
              usedKeys.forEach((k) => (payload[k] = filters[k]));
              console.log('선택된 필터:', payload); // mode에 해당하는 것만 출력
              onApplyFilters?.();
              onClose();
            }}
          >
            조회하기
          </Button>
        </>
      }
    >
      <div className={styles.top}>
        {!onlyCalendar && (
          <Input
            title={isReservationMode ? '매장명' : '주문한 상품명'}
            placeholder={
              isReservationMode ? '매장명으로 검색하세요' : '주문한 상품명으로 검색하세요'
            }
            suffix={<IconButton name="search">검색</IconButton>}
          />
        )}
        <div className={styles.rangeCal}>
          <DateRangePicker
            mode="ym"
            value={range}
            onChange={setRange}
            minDate={new Date(2020, 0, 1)}
            maxDate={new Date()}
          />
        </div>
        {!(isReservationMode || hideTopInfo) && (
          <Text size="3" color="gray3" className="ncp-mt-x0">
            최대 5년간의 구매 이력을 확인할 수 있습니다.
          </Text>
        )}
      </div>
      {!onlyCalendar && (
        <FormArea type="vertical" gap="1">
          {usedKeys.map((key) => (
            <FormItem
              key={key}
              label={
                key === 'service'
                  ? '서비스 선택'
                  : key === 'delivery'
                    ? '배송 상태'
                    : key === 'order'
                      ? '주문 상태'
                      : key === 'reservation'
                        ? '상태'
                        : key === 'subscription'
                          ? '구독 상태'
                          : key
              }
            >
              <Chip
                selected={filters[key]}
                onChange={onChangeSingle(key)}
                variant="filled"
                size="small"
                columns="auto"
                data={CATALOG[key]}
                name={`${key}-select`}
              />
            </FormItem>
          ))}
        </FormArea>
      )}
    </Drawer>
  );
}
