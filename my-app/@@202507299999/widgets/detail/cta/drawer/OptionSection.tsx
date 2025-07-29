'use client';

import React, { useState } from 'react';
import { Button, Image, Select } from '@shared/ui';
import { formatPrice } from '@/shared/utils/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import AlramDialog from '../AlramDialog';

import styles from './CtaDrawer.module.scss';
import clsx from 'clsx';

/** ⚠️ 옵션 타입을 알 수 없기 때문에 any로 처리 후 eslint disabled 하였습니다. */

// 단계 리스트 추출
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractSteps(optionGroup: any) {
  if (!optionGroup) return [];
  const steps = [
    {
      type: optionGroup.type,
    },
  ];
  const typeSet = new Map();
  for (const sub of optionGroup.subs ?? []) {
    for (const d of sub.details ?? []) {
      if (!typeSet.has(d.type)) {
        typeSet.set(d.type, {
          type: d.type,
          placeholder: d.type,
        });
      }
    }
  }
  steps.push(...Array.from(typeSet.values()));
  return steps;
}

export const OptionSection = () => {
  const { item } = useProdDetail();
  const optionGroups = item?.optionList ?? [];

  // 재입고 알림 팝업 상태
  const [isRestockOpen, setIsRestockOpen] = useState(false);

  // 그룹 한 개만 사용
  const optionGroup = optionGroups[0];
  const steps = extractSteps(optionGroup);

  // 단계별 선택값(기본 null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedChain, setSelectedChain] = useState<any[]>(() => Array(steps.length).fill(null));

  // 각 단계별 옵션 목록 구하기
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getOptionsAtStep(stepIdx: number, selection: any[]) {
    if (stepIdx === 0) {
      return optionGroup?.subs ?? [];
    }
    const colorObj = selection[0];
    if (!colorObj?.details) return [];
    const stepType = steps[stepIdx]?.type;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const foundDetail = colorObj.details.find((d: any) => d.type === stepType);
    if (!foundDetail) return [];
    return foundDetail.subs ?? [];
  }

  // 상위 미선택시 disabled
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function isStepDisabled(stepIdx: number, selection: any[]) {
    if (stepIdx === 0) return false;
    if (!selection[stepIdx - 1]) return true;
    const options = getOptionsAtStep(stepIdx, selection);
    return !options.length;
  }

  return (
    <div className={styles['sec-option']}>
      {steps.map((step, i) => {
        const options = getOptionsAtStep(i, selectedChain);
        const selected = selectedChain[i]?.value ?? selectedChain[i]?.subValue ?? '';
        const disabled = isStepDisabled(i, selectedChain);

        return (
          <React.Fragment key={i}>
            <Select
              className={styles.select}
              key={`${step.type}-${i}`}
              placeholder={step.type}
              size="large"
              value={selected}
              onChange={(val: string) => {
                const found =
                  options.find(
                    (option: { value: string; subValue: string }) =>
                      (option.value ?? option.subValue) === val
                  ) || null;
                setSelectedChain((prev) => {
                  const arr = prev.slice(0, i);
                  arr[i] = found;
                  while (arr.length < steps.length) arr.push(null);
                  return arr;
                });
              }}
              options={[
                ...options.map(
                  (option: {
                    value: string;
                    subValue: string;
                    label: string;
                    subLabel: string;
                    stock: number;
                    subPrice: number;
                    colorCode: string;
                    image: { src: string; alt: string };
                  }) => ({
                    value: option.value ?? option.subValue,
                    label: (
                      <div className={styles.options}>
                        <div className={styles.left}>
                          {option.colorCode && (
                            <span
                              className={clsx(
                                styles.colorChip,
                                option.colorCode === '#FFFFFF' && styles.white
                              )}
                              style={{ '--color-chip-bg': option.colorCode } as React.CSSProperties}
                            ></span>
                          )}
                          {option.image && (
                            <Image
                              className={styles.optionImg}
                              src={option.image.src}
                              alt={option.image.alt}
                            />
                          )}
                          <span>{option.label || option.subLabel}</span>
                          {option.stock === 0 ? (
                            <span>[품절]</span>
                          ) : (
                            <>
                              {item.showRemainingQuantity && `[남은수량 : ${option.stock}] `}
                              {typeof option.subPrice === 'number' &&
                                `[${option.subPrice > 0 && '+'}${formatPrice(option.subPrice)}]`}
                            </>
                          )}
                        </div>
                        <div className={styles.right}>
                          {option.stock === 0 && item.restock && (
                            <Button
                              prefixIcon="bell"
                              size="small"
                              onClick={() => setIsRestockOpen(true)}
                            >
                              재입고 알림
                            </Button>
                          )}
                        </div>
                      </div>
                    ),
                    disabled: option.stock === 0 && !item.restock,
                  })
                ),
              ]}
              disabled={disabled}
            />
          </React.Fragment>
        );
      })}
      {item.restock && (
        <AlramDialog
          type="restock"
          option={'네이비 / M(95)'}
          isOpen={isRestockOpen}
          onClose={() => setIsRestockOpen(false)}
        />
      )}
    </div>
  );
};
