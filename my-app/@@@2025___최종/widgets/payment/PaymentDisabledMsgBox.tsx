import clsx from 'clsx';
import { Text, Box } from '@shared/ui';
import styles from './PaymentDisabledMsgBox.module.scss';

interface PaymentDisabledMsgBoxProps {
  /** 타이틀 */
  title?: string;
  /** 내용 */
  content?: React.ReactNode;
  /** 하단정보 */
  bottom?: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
}

export const PaymentDisabledMsgBox = ({
  title,
  content,
  bottom,
  className,
}: PaymentDisabledMsgBoxProps) => {
  return (
    <Box size="3" className={clsx(styles.root, className)}>
      <Text size="4" color="alert" weight="semibold">
        {title}
      </Text>
      <Text size="4" color="gray2">
        {content}
      </Text>
      <Text size="4" color="gray2">
        {bottom}
      </Text>
    </Box>
  );
};
PaymentDisabledMsgBox.displayName = 'PaymentDisabledMsgBox';
