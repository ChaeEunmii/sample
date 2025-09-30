import { Dialog, Text, TitleBar, TextList, Box } from '@shared/ui';

interface CarPolicyAgreeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CarPolicyAgreeDialog({ isOpen, onClose }: CarPolicyAgreeDialogProps) {
  return (
    <Dialog
      title="개인정보(차량번호) 수집이용 동의"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
    >
      <TitleBar
        type="docs"
        title="수집이용 목적"
        description={<>셀프픽업, 테이블오더, QR결제 이용 시 무료주차 정산 간소화 처리</>}
        level="2"
      />
      <TitleBar type="docs" title="수집 항목" description={<>차량 번호</>} level="2" />
      <TitleBar
        type="docs"
        title="보유 및 이용 기간"
        description={<>회원탈퇴 또는 동의 철회 시 까지</>}
        level="2"
      />
      <Box className="ncp-mt-xl">
        <Text weight="medium">
          차량 번호를 등록하시면 주차 정산을 간편하게 이용 할 수 있습니다.
        </Text>
        <TextList
          variant="level2"
          data={[
            '식당가 예약, 웨이팅 서비스는 해당되지 않습니다.',
            '차량 번호는 최대 3개까지 등록 가능합니다.',
          ]}
        />
      </Box>
    </Dialog>
  );
}
