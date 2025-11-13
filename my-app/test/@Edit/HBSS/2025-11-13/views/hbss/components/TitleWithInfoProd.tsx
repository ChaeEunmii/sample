import { Text } from '@shared/ui';
import { TitleWithInfo } from '@views/hbss/components/TitleWithInfo';
import clsx from 'clsx';
import styles from './TitleWithInfoProd.module.scss';

interface ProductData {
  /** 브랜드명 */
  brand?: string;
  /** 상품명 */
  name: string;
  /** 수량 */
  quantity?: number | string;
  /** 가격 */
  price?: number | string;
}
interface TitleWithInfoProdProps {
  /** 데이터 */
  data: ProductData;
  /** 타이틀 변경시 */
  title?: string | React.ReactNode;
  /** 상품명 줄 수 */
  nameLine?: number;
  /** 추가 클래스 */
  className?: string;
}

export function TitleWithInfoProd({
  data,
  title = '상품명',
  nameLine,
  className,
}: TitleWithInfoProdProps) {
  // data 구조 분해
  const { brand, name, quantity, price } = data;

  return (
    <TitleWithInfo
      title={title}
      content={
        <div className={clsx(styles.product, className)}>
          {(brand || name) && (
            <Text
              size="5"
              className={clsx(styles.prdName, nameLine && styles[`nameLine${nameLine}`])}
            >
              {brand && `[${brand}] `} {name}
            </Text>
          )}
          {/* 정보들 */}
          {(price || quantity) && (
            <div className={styles.infos}>
              {price && (
                <Text as="span" size="5" color="gray2">
                  {price}원
                </Text>
              )}
              {quantity && (
                <Text as="span" size={price ? '5' : '4'} color="gray2">
                  {quantity}개
                </Text>
              )}
            </div>
          )}
        </div>
      }
    />
  );
}
