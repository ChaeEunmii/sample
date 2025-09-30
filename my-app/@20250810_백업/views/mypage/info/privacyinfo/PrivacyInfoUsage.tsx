import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, TitleBar, Box, Text } from '@shared/ui';
import styles from './PrivacyInfoUsage.module.scss';

export default function PrivacyInfoUsage() {
  return (
    <Container showBack title="개인정보 이용현황">
      <Contents className={styles.layout}>
        <TitleBar
          type="docs"
          title="개인정보의 수집 및 이용"
          description="NCP에 제공하여 주신 개인정보의 쓰임새와 항목에 대해 확인하실 수 있습니다."
        />
        <ButtonArea margin="1">
          <Button variant="tertiary" suffixIcon="arrowRight">
            수집 및 이용 내역 바로가기
          </Button>
        </ButtonArea>
        <TitleBar
          type="docs"
          title="개인정보의 처리위탁"
          description="서비스 제공을 위해 위탁계약에 따라 개인정보를 위탁받은 수탁 업체 및 업무 목적을 확인 하실 수 있습니다."
          className="ncp-mt-xxl"
        />
        <ButtonArea margin="1">
          <Button variant="tertiary" suffixIcon="arrowRight">
            처리위탁 내역 바로가기
          </Button>
        </ButtonArea>
        <Box className="ncp-mt-xxl">
          <Text size="4" color="gray2" reading>
            NCP에는 정보통신망법 제 30조 2에 따르면 대통령령으로 정하는 기준에 해당하는
            정보통신서비스 제공자는 수집한 이용자 개인정보의 이용내역을 1년에 최소 1회이상
            이용자에게 통지하고 있습니다.
          </Text>
        </Box>
      </Contents>
    </Container>
  );
}
