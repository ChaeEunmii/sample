import { Section, Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './PersonalCustomsCode.module.scss';

interface PersonalCustomsCodeProps {
  /** 주문자 정보 데이터 */
  data: string;
  /** 추가적인 클래스 이름 */
  className?: string;
}

/** '개인통관고유부호' 영역 컴포넌트 */
export const PersonalCustomsCode = ({ data, className }: PersonalCustomsCodeProps) => {
  return (
    <Section
      title="개인통관고유부호"
      variant="collapse"
      level="1"
      flush
      borderTop
      className={clsx(styles.section, className)}
    >
      <Text size="5">개인통관고유부호 : {data}</Text>
    </Section>
  );
};
