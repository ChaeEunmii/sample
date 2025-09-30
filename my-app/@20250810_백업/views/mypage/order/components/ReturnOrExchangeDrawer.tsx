import { Drawer, ButtonArea, Button, Heading } from '@shared/ui';

interface ReturnOrExchangeDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export default function ReturnOrExchangeDrawer({ isOpen, onClose }: ReturnOrExchangeDrawerProps) {
  return (
    <Drawer title={<>주문번호 25122512345678</>} isOpen={isOpen} onClose={onClose}>
      <Heading as="strong" size="3" weight="semibold">
        반품과 교환 중 어떤 것을 원하시나요?
      </Heading>
      <ButtonArea vertical margin="1">
        <Button variant="tertiary">반품하기</Button>
        <Button variant="tertiary">교환하기</Button>
      </ButtonArea>
    </Drawer>
  );
}
