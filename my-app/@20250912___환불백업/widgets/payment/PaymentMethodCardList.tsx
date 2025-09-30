'use client';

import { useState, useEffect } from 'react';
import { Flag, IconButton } from '@shared/ui';
import { useAlert } from '@shared/contexts/AlertContext';
import { useToast } from '@shared/contexts/ToastContext';
import type { PaymentMethod } from '@widgets/payment/PaymentMethodCard';
import { PaymentMethodCard } from '@widgets/payment';
import clsx from 'clsx';
import styles from './PaymentMethodCardList.module.scss';

/**
 *
 *  결제수단 카드 목록 mode 별로 다르게 사용
 *  (mode = view) : 머아페이지 - H.Point Pay 등록된 결제수단 보기 (카드우측 컨트롤 버튼으로 기본 플래그 설정, 삭제)
 *  (mode = rank) : 마이페이지 - 구독관리 - 정기구독 결제수단 선택 (selectedIds 사용하여 1순위, 2순위 선택)
 *
 */

// 타입 확장
export type ExtendedPayment = Pick<PaymentMethod, 'id' | 'label' | 'cardNumber' | 'brand'> & {
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 기본 결제수단 여부 */
  isDefault?: boolean;
};

export interface PaymentMethodCardListProps {
  /** 결제 수단 배열*/
  data: ExtendedPayment[];
  /** 선택된 id 목록*/
  selectedIds?: string[];
  /** 비제어 초기값 */
  defaultSelectedIds?: string[];
  /** 선택 변경 이벤트 */
  onChangeSelected?: (ids: string[]) => void;
  /** 선택 최대 개수 (기본 2) */
  maxSelect?: number;
  /** 렌더 모드 (보기 | 순위선택)*/
  mode?: 'view' | 'rank';
  /** view 모드: 외부에서 기본 카드 id를 제어하고 싶을 때 */
  viewDefaultId?: string;
  /** view 모드: 기본 카드 변경 콜백 */
  onChangeViewDefault?: (id: string) => void;
  /** view 모드: 항목 삭제 콜백(부모에서 실제 데이터 삭제 처리 시) */
  onDeleteViewItem?: (id: string) => void;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export function PaymentMethodCardList({
  data,
  selectedIds,
  defaultSelectedIds,
  onChangeSelected,
  maxSelect = 2,
  mode = 'view',
  viewDefaultId,
  onChangeViewDefault,
  onDeleteViewItem,
  className,
}: PaymentMethodCardListProps) {
  const { showAlert } = useAlert();
  const { showToast } = useToast();

  // ========== rank 모드 ========== //
  // select controlled 여부
  const isControlled = selectedIds !== undefined;

  // 비제어 내부 상태 (ids)
  const [internalIds, setInternalIds] = useState<string[]>(defaultSelectedIds ?? []);

  // 현재 사용될 선택 id 목록
  const ids = isControlled ? (selectedIds as string[]) : internalIds;

  // 선택 업데이트 유틸
  const update = (next: string[]) => {
    if (!isControlled) setInternalIds(next);
    onChangeSelected?.(next);
  };

  // 선택 핸들러
  const handleSelect = (method: ExtendedPayment) => {
    if (mode === 'view') return; // view 모드일 땐 동작 안 함

    // 비활성
    if (method.disabled) {
      showToast('이 결제수단은 선택할 수 없어요.');
      return;
    }
    // 이미 선택
    const already = ids.includes(method.id);
    if (already) {
      const next = ids.filter((id) => id !== method.id);
      update(next);
      showToast('결제수단에서 선택해제되었어요.');
      return;
    }
    // 최대 개수 초과
    if (ids.length >= maxSelect) {
      showAlert({
        message: `정기구독을 위한 결제수단은\n최대 ${maxSelect}개까지 선택이 가능해요\n먼저 선택한 결제수단을 다시 선택하면\n해제가 가능합니다`,
        onConfirm: () => {},
        showCancel: false,
        labelProps: { confirm: '확인' },
      });
      return;
    }
    // 새로 선택
    update([...ids, method.id]);
    showToast('결제수단으로 선택되었어요.');
  };

  // ========== view모드 ========== //
  const [openMenuId, setOpenMenuId] = useState<string | null>(null); // 항목별 옵션 패널 토글
  const [viewData, setViewData] = useState<ExtendedPayment[]>(data); // view 모드에서 삭제 반영용 내부 목록

  // 부모 data 변경 시 동기화
  useEffect(() => setViewData(data), [data]);

  // view 기본 id: 컨트롤드/언컨트롤드 겸용
  const isViewDefaultControlled = viewDefaultId !== undefined;
  const [viewInternalDefaultId, setViewInternalDefaultId] = useState<string | undefined>(() => {
    return data.find((d) => d.isDefault)?.id;
  });

  useEffect(() => {
    // 컨트롤드 모드일 때 외부 값과 동기화
    if (isViewDefaultControlled) {
      setViewInternalDefaultId(viewDefaultId);
    }
  }, [isViewDefaultControlled, viewDefaultId]);

  const effectiveViewDefaultId = isViewDefaultControlled ? viewDefaultId : viewInternalDefaultId;

  // view 전용 핸들러: 기본 설정
  const handleSetDefault = (id: string) => {
    // 이미 기본인 경우
    if (effectiveViewDefaultId === id) {
      showToast('이미 기본 결제수단으로 설정되었어요.');
      setOpenMenuId(null);
      return;
    }

    onChangeViewDefault?.(id); // 부모에 알림
    if (!isViewDefaultControlled) {
      setViewInternalDefaultId(id); // 언컨트롤드일 때 내부 상태 갱신
    }
    showToast('기본 결제수단으로 설정되었어요.');
    setOpenMenuId(null);
  };

  // view 전용 핸들러: 삭제
  const handleDelete = (id: string) => {
    showAlert({
      message: '이 결제수단을 삭제하시겠어요?',
      showCancel: true,
      labelProps: { confirm: '삭제', cancel: '취소' },
      onConfirm: () => {
        // 삭제 처리
        if (onDeleteViewItem) {
          onDeleteViewItem(id);
        } else {
          setViewData((prev) => prev.filter((it) => it.id !== id));
          if (!isViewDefaultControlled && effectiveViewDefaultId === id) {
            setViewInternalDefaultId(undefined);
          }
        }
        setOpenMenuId(null);
        // 삭제 완료 알림
        showAlert({
          message: '결제수단이 삭제되었어요.',
          showCancel: false,
          labelProps: { confirm: '확인' },
        });
      },
    });
  };

  // view 모드일 땐 내부 목록 사용
  const renderList = mode === 'view' ? viewData : data;

  return (
    <ul className={clsx(styles.list, mode && styles[mode], className)}>
      {renderList.map((method) => {
        // 선택된 위치
        const order = ids.findIndex((id) => id === method.id);
        // 선택 여부
        const isSelected = order > -1;

        // view 모드 기본 여부: 외부/내부 상태 우선, 없으면 데이터의 isDefault 사용
        const isDefault =
          mode === 'view'
            ? effectiveViewDefaultId
              ? effectiveViewDefaultId === method.id
              : !!method.isDefault
            : false;

        return (
          <li key={method.id} className={styles.item}>
            <PaymentMethodCard
              as={mode === 'view' ? 'div' : 'button'}
              variant={mode === 'view' ? 'clear' : 'boxed'}
              data={method}
              disabled={method.disabled}
              isSelected={isSelected}
              onClick={() => handleSelect(method)}
              sideSlot={
                // rank 모드
                (mode === 'rank' && isSelected && (
                  <Flag
                    data={{ color: 'dark2', label: `${order + 1}순위` }}
                    className={styles.flag}
                  />
                )) ||
                // view 모드
                (mode === 'view' && (
                  <div className={styles.viewSlot}>
                    {isDefault && (
                      <Flag data={{ color: 'green2', label: `기본` }} className={styles.flag} />
                    )}
                    <div className={styles.ctrl}>
                      <IconButton
                        name="more"
                        size="medium"
                        onClick={(e) => {
                          e.stopPropagation(); // 카드 클릭과 분리
                          setOpenMenuId((prev) => (prev === method.id ? null : method.id));
                        }}
                        aria-pressed={openMenuId === method.id}
                        className={styles.openBtn}
                      >
                        옵션 열기
                      </IconButton>
                      {openMenuId === method.id && (
                        <div className={clsx(styles.listBox)}>
                          <ul className={clsx(styles.options)}>
                            <li className={clsx(styles.option)}>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleSetDefault(method.id);
                                }}
                                className={styles.ctrlBtn}
                              >
                                기본 설정
                              </button>
                            </li>
                            <li className={clsx(styles.option)}>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDelete(method.id);
                                }}
                                className={styles.ctrlBtn}
                              >
                                삭제하기
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              }
            />
          </li>
        );
      })}
    </ul>
  );
}
