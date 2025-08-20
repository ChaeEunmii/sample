import { formatPrice } from '@/shared/utils/ui';
import { Box, Button, Drawer, InfoItem, InfoList, Stack, Text } from '@/shared/ui';

interface ReservationCancelDrawerProps {
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export const ReservationCancelDrawer = ({ isOpen, onClose }: ReservationCancelDrawerProps) => {
  return (
    <Drawer
      title="예약을 취소하시겠어요?"
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
      <Box size="3">
        <InfoList variant="stacked" gap="row16">
          <InfoItem title="매장" content={<Text as="span">크리스탈제이드</Text>} />
          <InfoItem title="예약일시" content={<Text as="span">2025.10.16(수) 오전 11:30</Text>} />
          <InfoItem title="예약인원" content={<Text as="span">2명</Text>} />
        </InfoList>
      </Box>
      <Stack type="between" className="ncp-mt-s">
        <Text color="alert" weight="medium">
          예약금이 50% ({formatPrice(20000)}) 환불 됩니다.
        </Text>
        <Text as="span" color="gray2">
          이용일 1일 전
        </Text>
      </Stack>
    </Drawer>
  );
};

ReservationCancelDrawer.displayName = 'ReservationCancelDrawer';
