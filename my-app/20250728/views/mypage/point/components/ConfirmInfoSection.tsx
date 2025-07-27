import { Collapse, Heading } from '@/shared/ui';
interface ConfirmInfoSectionProps {
  title?: string;
  children?: React.ReactNode;
}
/** 마이페이지 - 마이바우처, 포인트 하단에 반복되는 '확인해주세요' 섹션 */
export const ConfirmInfoSection = ({
  title = '확인해주세요',
  children,
}: ConfirmInfoSectionProps) => {
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
