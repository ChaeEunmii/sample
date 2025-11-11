import { Dialog, Box, Text, InfoList, InfoItem } from '@shared/ui';
import {
  TitleWithInfoStack,
  TitleWithInfo,
  TitleWithInfoProd,
  TitleWithInfoAddr,
} from '@views/hbss/components';
import styles from './DeliveryTrace.module.scss';

interface DeliveryTraceDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeliveryTraceDialog({ isOpen, onClose }: DeliveryTraceDialogProps) {
  return (
    <Dialog title="배송조회" isOpen={isOpen} onClose={onClose} showClose maximize>
      <Box className="ncp-mt-s">
        <InfoList variant="line">
          <InfoItem
            title={
              <Text color="primary" weight="semibold">
                보내시는 분
              </Text>
            }
            content={<Text color="gray1">김현대</Text>}
          />
        </InfoList>
      </Box>
      <div className={styles.processView}>배송현황</div>
      <TitleWithInfoStack>
        <TitleWithInfoAddr
          type="filled"
          data={{
            defaultAddress: '서울특별시 강남구 테헤란로 32-1',
            detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
          }}
        />
        <TitleWithInfo title="택배 발송일" content="2025년 12월 25일" />
        <TitleWithInfo title="배송 요청 사항" content="자유출입" />
        <TitleWithInfoProd
          data={{
            name: '더 건강한 브런치 슬라이스 닭가슴살',
          }}
        />
      </TitleWithInfoStack>
    </Dialog>
  );
}
