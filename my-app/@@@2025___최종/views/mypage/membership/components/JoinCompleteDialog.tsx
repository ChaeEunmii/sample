import { Dialog, TitleArea, Box, Button, InfoList, InfoItem, Text } from '@shared/ui';

interface JoinCompleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinCompleteDialog({ isOpen, onClose }: JoinCompleteDialogProps) {
  return (
    <Dialog
      title="HiHi 멤버십 가입완료"
      footer={
        <Button variant="primary" size="large">
          쇼핑하러 가기
        </Button>
      }
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
    >
      <TitleArea
        title={
          <>
            환영합니다!
            <br />
            HiHi 멤버십 혜택을
            <br />
            지금 바로 이용해보세요
          </>
        }
      />
      <Box>
        <InfoList variant="stacked">
          <InfoItem
            title={<Text color="gray2">이용 상태</Text>}
            content={<Text>2025.04.04</Text>}
          />
          <InfoItem
            title={<Text color="gray2">이용 기간</Text>}
            content={<Text>2025.04.04~2025.05.03</Text>}
          />
          <InfoItem title={<Text color="gray2">이용 금액</Text>} content={<Text>10,000원</Text>} />
          <InfoItem
            title={<Text color="gray2">이번달 정기배송</Text>}
            content={<Text>과일 꾸러미</Text>}
          />
        </InfoList>
      </Box>
    </Dialog>
  );
}
