import { Section, Box, TextButton } from '@shared/ui';
import clsx from 'clsx';
import styles from './OrdererInfo.module.scss';

/** 정보 타입 */
export interface OrdererData {
  /** 이름 */
  name: string;
  /** 휴대폰 번호*/
  phone: string;
  /** 이메일 주소 */
  email: string;
}

interface OrdererInfoProps {
  /** 타이틀 */
  title?: string;
  /** 유형 */
  variant?: 'normal' | 'collapse';
  /** 정보 데이터 */
  data: OrdererData;
  /** 추가적인 클래스 이름 */
  className?: string;
}

/** '주문자 정보 or 반품 접수자 정보' 영역 컴포넌트 */
export const OrdererInfo = ({
  title = '주문자 정보',
  variant = 'collapse',
  data,
  className,
}: OrdererInfoProps) => {
  return (
    <Section
      title={title}
      variant={variant}
      level="1"
      flush
      borderTop
      className={clsx(styles.section, className)}
    >
      <Box size="3" margin="0" className={styles.box}>
        <div className={styles.info}>
          <ul className={styles.list}>
            <li>
              <strong className={styles.name}>{data.name}</strong>
            </li>
            <li>{data.phone}</li>
          </ul>
          <span className={styles.email}>{data.email}</span>
        </div>
        <div className={styles.btns}>
          <TextButton variant="underline" size="1" color="gray3">
            마스킹 해제
          </TextButton>
        </div>
      </Box>
    </Section>
  );
};
