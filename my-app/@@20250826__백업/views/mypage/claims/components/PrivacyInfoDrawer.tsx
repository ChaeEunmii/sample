import { Drawer, Text, Box, InfoList, InfoItem } from '@shared/ui';

interface PrivacyInfoDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export default function PrivacyInfoDrawer({ isOpen, onClose }: PrivacyInfoDrawerProps) {
  return (
    <Drawer title="개인정보 수집 및 이용 안내" isOpen={isOpen} onClose={onClose}>
      <Text reading color="gray2" indent>
        NCP는 아래의 목적으로 개인정보를 수집 및 이용하며, 회원의 개인정보를 안전하게 처리하는데
        최선을 다하고 있습니다. 아래의 내용을 확인 후 동의하여 주시기 바랍니다.
      </Text>
      <Box>
        <InfoList variant="stacked" gap="row8">
          <InfoItem title={<Text color="gray2">유형</Text>} content={<Text>본인인증</Text>} />
          <InfoItem
            title={
              <Text size="4" color="gray2">
                수집 및 이용 목적
              </Text>
            }
            content={<Text size="4">환불 계좌 등록 및 관리</Text>}
          />
          <InfoItem
            title={
              <Text size="4" color="gray2">
                수집 및 이용 항목
              </Text>
            }
            content={<Text size="4">계좌번호 (예금주명, 은행명, 계좌번호)</Text>}
          />
          <InfoItem
            title={
              <Text size="4" color="gray2">
                보유 및 이용기간
              </Text>
            }
            content={
              <Text size="4">환불 계좌 삭제 또는 탈퇴 요청 5일 후 지체없이 파기합니다.</Text>
            }
          />
        </InfoList>
      </Box>
    </Drawer>
  );
}
