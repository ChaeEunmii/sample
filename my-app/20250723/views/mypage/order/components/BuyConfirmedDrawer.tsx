import { Drawer, Button, TitleBar } from '@shared/ui';

interface BuyConfirmedDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export default function BuyConfirmedDrawer({ isOpen, onClose }: BuyConfirmedDrawerProps) {
  return (
    <Drawer
      title={<>주문번호 25122512345678</>}
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <Button variant="primary" size="large">
            구매확정
          </Button>
        </>
      }
    >
      <TitleBar
        type="docs"
        title="구매확정 하시겠어요?"
        description={
          <>
            확정 후에는 적립 예정인 포인트가 지급되고,
            <br />
            이제 리뷰 작성이 가능합니다.
          </>
        }
        level="2"
      />
    </Drawer>
  );
}
