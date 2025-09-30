import { Drawer, IconButton, Button, FormArea, FormItem, Input } from '@shared/ui';

interface SearchSettingDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export default function SearchSettingDrawer({ isOpen, onClose }: SearchSettingDrawerProps) {
  return (
    <Drawer
      title="어떤 주문을 찾으세요?"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <Button size="large">초기화</Button>
          <Button size="large" variant="primary">
            조회하기
          </Button>
        </>
      }
    >
      <FormArea type="vertical">
        <FormItem title="주문한 상품명">
          <Input
            title="주문한 상품명"
            placeholder="주문한 상품명으로 검색하세요"
            suffix={<IconButton name="search">지우기</IconButton>}
          />
        </FormItem>
        <FormItem>
          <Input title="아이디" />
        </FormItem>
        <FormItem label="서비스 선택">
          <Input title="아이디" />
        </FormItem>
      </FormArea>
    </Drawer>
  );
}
