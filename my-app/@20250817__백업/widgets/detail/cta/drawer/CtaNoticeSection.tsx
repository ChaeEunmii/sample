'use client';

import React from 'react';
import { Text } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { DiscountValue, getCrossDiscountText } from '../../CrossDiscountInfo';
import { formatDate } from '@/shared/utils/ui';

import styles from './CtaDrawer.module.scss';

export const CtaNoticeSection = () => {
  const { item, prodDetailType } = useProdDetail();

  /** 교차할인 텍스트 추출 */
  const crossDiscountText = () => {
    switch (item.crossDiscount.case) {
      case 'case1':
      case 'case3':
        return '더 담을수록 이득, 장바구니에서 혜택을 확인하세요';
      case 'case2':
        return item.crossDiscount.value.map((value: DiscountValue, idx: number) => {
          const [conditionText, benefitText] = getCrossDiscountText(item.crossDiscount, value);
          return (
            <span key={idx}>
              {conditionText}
              <span className="ncp-color-point">{benefitText}</span>
              {idx !== item.crossDiscount.value.length - 1 && ' / '}
            </span>
          );
        });
      default:
        return null;
    }
  };

  return (
    <div className={styles['sec-ctaNotice']}>
      {/* 교차 할인 정보가 있는 경우 */}
      {item.crossDiscount && (
        <Text size="4" className={styles.crossDiscount}>
          <span className="ncp-color-point">[{item.crossDiscount.badge}]</span>&nbsp;
          {crossDiscountText()}
        </Text>
      )}

      {/* 예약 배송 정보가 있는 경우 */}
      {prodDetailType === 'preOrder' && (
        <Text>
          <span className="ncp-color-point">[배송 시작일]</span>&nbsp;
          {formatDate(item.preOrder.start, 'kor', false)} 순차 출고 됩니다.
        </Text>
      )}

      {/* 취소 가능일이 있는 경우 */}
      <Text size="4">취소가능일 : 선택한 방문일로 부터 00일 전까지 가능</Text>

      {/* 위약금이 있는 경우 */}
      <Text size="4">위약금이 있는 상품입니다. 상세페이지를 확인해 주세요.</Text>
    </div>
  );
};
