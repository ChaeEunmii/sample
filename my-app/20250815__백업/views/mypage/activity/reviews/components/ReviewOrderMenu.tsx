import { Section, Box, Checkbox, Text } from '@shared/ui';

type ReviewOrderMenuProps = {
  /** 섹션 제목 */
  title?: string;
  /** 메뉴 리스트 */
  menus?: string[];
  /** 메뉴 비공개 여부 */
  isPrivate?: boolean;
  /** 비공개 상태 변경 핸들러 */
  onPrivateChange?: (checked: boolean) => void;
};

export function ReviewOrderMenu({
  title = '주문하신 메뉴',
  menus = [],
  isPrivate,
  onPrivateChange,
}: ReviewOrderMenuProps) {
  // 체크박스 상태 변경 시 부모로 전달
  const handlePrivateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onPrivateChange?.(e.target.checked);
  };

  return (
    <Section variant="section" title={title} marginTop="4">
      <Box>
        <Text>{menus.join(', ')}</Text>
      </Box>
      <Checkbox
        label="메뉴 비공개"
        className="ncp-mt-s"
        checked={isPrivate}
        onChange={handlePrivateChange}
      />
    </Section>
  );
}
