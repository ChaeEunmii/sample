import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, TitleArea, Steps } from '@shared/ui';
import { JOIN_STEPS } from './Join';
import SellerCenterMenuBtn from '@/views/mypage/seller/components/SellerCenterMenuBtn';
import styles from './Join.module.scss';

export default function JoinStep4() {
  // 현재 단계
  const currentStep = 3;

  return (
    <Container
      showBack
      title="가입 및 입점 신청 완료"
      actions={[
        {
          type: 'custom' as const,
          component: <SellerCenterMenuBtn />,
        },
      ]}
    >
      <Contents className={styles.layout}>
        <Steps
          steps={JOIN_STEPS}
          activeStep={currentStep}
          title="판매자 가입 진행단계"
          className="ncp-blind"
        />
        <TitleArea
          title={
            <>
              판매자 가입 및 입점 신청이
              <br />
              완료되었습니다
            </>
          }
          description="입점신청 정보는 로그인 후 신청내역에서 확인 및 수정할 수 있으며, 최종 심사 결과에 따라 입점 절차가 완료됩니다. 심사 결과는 진행상태에서 확인하실 수 있습니다."
        />
        <ButtonArea>
          <Button size="large">입점 신청 메인</Button>
          <Button variant="primary" size="large">
            판매자 로그인
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
