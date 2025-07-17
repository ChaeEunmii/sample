import { Collapse, Heading, Line } from '@/shared/ui';
import styles from './ConfirmInfoSection.module.scss';
import clsx from 'clsx';

interface ConfirmInfoSectionProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}
/** 마이페이지-포인트 하단에 반복되는 '확인해주세요' 섹션 */
export const ConfirmInfoSection = ({
  title = '확인해주세요',
  className,
  children,
}: ConfirmInfoSectionProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <Line color="bg2" />
      <Collapse variant="section">
        <Collapse.Control>
          <Heading size="5">{title}</Heading>
        </Collapse.Control>
        <Collapse.Content>{children}</Collapse.Content>
      </Collapse>
    </div>
  );
};
