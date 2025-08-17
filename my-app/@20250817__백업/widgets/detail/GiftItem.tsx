'use client';

import { Image, Text, TextButton } from '@/shared/ui';
import { GiftType, PromoGiftType } from './GiftPackageInfo';
import { formatNumber, formatPrice } from '@/shared/utils/ui';
import { useState } from 'react';

import styles from './GiftPackageInfo.module.scss';

export interface GiftItemType {
  /** 사은품 타입 : 구매사은품, 프로모션 */
  type: 'common' | 'promotion';
  /** 사은품 이미지 경로 */
  imgUrl?: string;
  /** 사은품명 */
  giftName: string;
  /** 사은품 설명 */
  desc?: string;
  /** 프로모션 값 : 금액 or 개수 */
  promoValue?: number;
  /** 재고 */
  stock: number;
  /** 공통사은품 여부 */
  isStandard?: boolean;
}

interface GiftItemProps {
  data: GiftType | PromoGiftType;
}

export const GiftItem = ({ data }: GiftItemProps) => {
  /** 고객이 선택해야하는 사은품보다 적은 사은품만 남은 경우 값 */
  const [endedEarly] = useState(false);

  /** 더보기 버튼 상태 */
  const [open, setOpen] = useState(false);

  /** 조기 종료 표기 */
  const renderEarlyEnded = (item: GiftItemType) => {
    // 프로모션 사은품의 경우에만 해당
    if (item.type !== 'promotion') return null;
    // 사은품 지급방식이 '선택지급'일 때에만 해당
    if ('giveawayMethod' in data && data.giveawayMethod === 'select') {
      if (!item.isStandard && (item.stock <= 0 || endedEarly)) {
        // 공통 사은품이 아니면서, 재고가 0보다 적거나 조기 종료에 해당하는 경우
        return '[조기종료] ';
      }
    } else {
      return null;
    }
  };

  /** 텍스트 렌더링 */
  const renderText = (item: GiftItemType) => {
    // 구매 사은품인 경우
    if (item.type === 'common') {
      return (
        <>
          {item.desc}
          <br />
          사은품명 : {item.giftName}
        </>
      );
    }

    // 프로모션 사은품인 경우
    if (item.type === 'promotion' && 'promoCondition' in data && data.promoCondition) {
      // 공통 사은품의 경우
      if (item.isStandard) {
        return `(공통사은품) ${item.giftName} 증정`;
      } else {
        // 공통 사은품이 아니면, 프로모션 사은품 조건에 따라 출력
        switch (data.promoCondition) {
          // 모두 구매시
          case 'all':
            return (
              <span>
                대상상품 모두 구매 시,
                <br />
                {item.giftName} 증정
              </span>
            );
          // 구매 금액 기준
          case 'price':
            if (item.promoValue) {
              return (
                <span>
                  {formatPrice(item.promoValue ?? 0)} 이상 구매 시,
                  <br />
                  {item.giftName} 증정
                </span>
              );
            }
          // 구매 수량 기준
          case 'count':
            if (item.promoValue) {
              return (
                <span>
                  {formatNumber(item.promoValue ?? 1, 'count')} 이상 구매 시,
                  <br />
                  {item.giftName} 증정
                </span>
              );
            }
          default:
            return '';
        }
      }
    }
  };

  // 노출될 사은품 리스트 (open 여부에 따라 slicing)
  const visibleItems = open ? data.items : data.items.slice(0, 2);

  return (
    <>
      <ul className={styles.itemlist}>
        {visibleItems.map((item, idx) => (
          <li key={idx}>
            <Image
              src={item.imgUrl ? item.imgUrl : '/images/detail/img_basic_gift.png'}
              alt={item.giftName}
              className={styles.img}
            />
            <Text
              size="4"
              color="gray2"
              className={item.stock <= 0 || endedEarly ? styles.ended : undefined}
            >
              {renderEarlyEnded(item)}
              {renderText(item)}
            </Text>
          </li>
        ))}
      </ul>
      {/* 사은품이 n개 이상이고, 아직 열리지 않은 경우만 더보기 버튼 노출 (임시 2개 처리)*/}
      {data.items.length > 2 && !open && (
        <TextButton size="1" color="gray3" onClick={() => setOpen(true)} className={styles.moreBtn}>
          더보기
        </TextButton>
      )}
    </>
  );
};

GiftItem.displayName = 'GiftItem';
