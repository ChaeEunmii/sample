'use client';
import { Collapse, Heading } from '@/shared/ui';

interface ConfirmInfoProps {
  title?: string;
  children?: React.ReactNode;
}
/** 마이페이지 - 반복 사용되는 '확인해주세요' 섹션 */
export const ConfirmInfo = ({ title = '확인해주세요', children }: ConfirmInfoProps) => {
  return (
    <Collapse variant="section" marginTop="1">
      <Collapse.Control border>
        <Heading size="5" indent>
          {title}
        </Heading>
      </Collapse.Control>
      <Collapse.Content>{children}</Collapse.Content>
    </Collapse>
  );
};
