import { Drawer, Button, Text, FormArea, FormItem, Input } from '@shared/ui';

interface UseGuideDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export default function UseGuideDrawer({ isOpen, onClose }: UseGuideDrawerProps) {
  return (
    <Drawer
      title="사용안내"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <Button variant="primary" size="large" onClick={onClose}>
            직원 확인
          </Button>
        </>
      }
    >
      <Text size="5" indent reading>
        매장의 직원 안내에 따라 비밀번호를 입력 후<br />
        아래의 확인 버튼을 선택해 주세요.
      </Text>
      <Text as="strong" color="alert" size="3" weight="regular" indent>
        확인 후에는 교환권을 다시 사용할 수 없어요.
      </Text>
      <FormArea type="vertical" className="ncp-mt-m">
        <FormItem label="비밀번호">
          <Input type="password" placeholder="비밀번호를 입력하세요" reveal={false} />
        </FormItem>
      </FormArea>
    </Drawer>
  );
}
