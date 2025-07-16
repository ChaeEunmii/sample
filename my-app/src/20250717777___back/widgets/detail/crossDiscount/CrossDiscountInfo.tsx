import { Flag, Text } from '@/shared/ui';
import { formatDate } from '@/shared/utils/ui';

import styles from './CrossDiscountInfo.module.scss';

/** 타이틀 타입 */
interface DiscountValue {
  condition: number;
  benefit: number;
}

/** 교차 할인 데이터 */
export interface CrossDiscountInfoType {
  /** 유형: N+N, 수량할인, 묶음할인 */
  case: 'case1' | 'case2' | 'case3' | string;
  /** 뱃지 텍스트 */
  badge: string;
  /** 정액,정률 타입 */
  type: 'value' | 'rate' | string;
  value: DiscountValue[];
  /** 날짜 */
  date: {
    start: string;
    end: string;
  };
}

interface CrossDiscountInfoProps {
  data: CrossDiscountInfoType;
  /** 팝업 내부에서 사용되는지 여부 */
  useDialog?: boolean;
}

export const CrossDiscountInfo = ({ data, useDialog }: CrossDiscountInfoProps) => {
  /** 유형별 텍스트 구하는 함수 */
  const getTitleText = (data: CrossDiscountInfoType, value: DiscountValue): [string, string] => {
    let returnValue: [string, string] = ['', ''];
    switch (data.case) {
      // CASE1 N+N유형
      case 'case1':
        if (useDialog) {
          returnValue = [`장바구니에 ${value.condition}개를 담으면 `, `${value.benefit}개 무료!!`]; // 팝업 내부
        } else {
          returnValue = [`${value.condition}개 구매 시 `, `${value.benefit}개 증정`];
        }
        break;
      // CASE2 수량할인유형
      case 'case2':
        if (data.type === 'rate') {
          // 정률
          returnValue = [`${value.condition}개 이상 구매 시 `, `${value.benefit}% 할인`];
        } else {
          // 정액
          returnValue = [`${value.condition}개 이상 구매 시 `, `${value.benefit}원 할인`];
        }
        break;
      // CASE3 묶음할인유형
      case 'case3':
        if (data.type === 'rate') {
          // 정률
          if (useDialog) {
            returnValue = [`묶음상품 구매 시 `, `${value.benefit}% 할인`]; // 팝업 내부
          } else {
            returnValue = [`${value.condition}개 구매 시 `, `${value.benefit}% 할인`];
          }
        } else {
          // 정액
          if (useDialog) {
            returnValue = [`묶음상품 구매 시 `, `${value.benefit}원에 구매 가능`]; // 팝업 내부
          } else {
            returnValue = [`${value.condition}개 구매 시 `, `${value.benefit}원에 구매 가능`];
          }
        }
        break;
      default:
        returnValue = ['', ''];
    }
    return returnValue;
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <Flag
          data={{
            color: 'black',
            label: data.badge,
          }}
          size="medium"
        />
        {/* 유형별 텍스트 노출 영역 */}
        <div>
          {data.value.map((value, index) => {
            /** 유형별 텍스트 개별 노출 */
            const [conditionText, benefitText] = getTitleText(data, value);
            return (
              <Text key={index} size="5" weight="semibold">
                {conditionText}
                <span className="ncp-color-point">{benefitText}</span>
              </Text>
            );
          })}
        </div>
      </div>
      {/* 날짜 텍스트 노출 영역 */}
      <Text size="4" className={styles.date}>
        {formatDate(data.date.start, 'dot')} ~ {formatDate(data.date.end, 'dot')}
      </Text>
    </div>
  );
};

CrossDiscountInfo.displayName = 'CrossDiscountInfo';
