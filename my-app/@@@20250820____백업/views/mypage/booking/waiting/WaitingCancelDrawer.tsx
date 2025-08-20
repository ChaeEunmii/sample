import { Box, Button, Drawer, InfoItem, InfoList, Text } from '@/shared/ui';

interface WaitingCancelDrawerProps {
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export const WaitingCancelDrawer = ({ isOpen, onClose }: WaitingCancelDrawerProps) => {
  return (
    <Drawer
      title="웨이팅 취소"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <Button size="large" onClick={onClose}>
            아니요
          </Button>
          <Button variant="primary" size="large">
            네. 취소할게요
          </Button>
        </>
      }
    >
      <Text weight="medium" indent reading>
        <Text as="span" weight="semibold">
          크리스탈제이드
        </Text>
        <br />
        웨이팅을 취소할까요?
      </Text>
      <Box size="3">
        <InfoList variant="between" gap="row16">
          <InfoItem
            title="웨이팅번호"
            content={
              <Text as="span" weight="medium">
                1234번
              </Text>
            }
          />
        </InfoList>
      </Box>
    </Drawer>
  );
};

WaitingCancelDrawer.displayName = 'WaitingCancelDrawer';
