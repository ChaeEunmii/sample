import { Icon, Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './ClaimInfoTxt.module.scss';

/**
 * 클레임 안내글에서 반복되는 디자인
 */

interface ClaimInfoTxtProps {
  /** 안내텍스트 */
  content: string;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const ClaimInfoTxt = ({ content, className }: ClaimInfoTxtProps) => {
  return (
    <div className={clsx(styles.info, className)}>
      <Icon name="info" size="small" />
      <Text as="span" size="5" weight="semibold">
        {content}
      </Text>
    </div>
  );
};
