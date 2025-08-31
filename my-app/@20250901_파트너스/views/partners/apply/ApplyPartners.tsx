import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, TextButton, Image } from '@shared/ui';
import styles from './ApplyPartners.module.scss';

export default function ApplyPartners() {
  return (
    <Container showBack title="파트너스 신청하기" flush>
      <Contents>
        <div className={styles.img}>
          <Image src="/images/dummy/@sample_img.png" alt="샘플 이미지" />
        </div>
        <div className={styles.cont}>
          <ButtonArea margin="0" align="right" className="ncp-w-full">
            <TextButton variant="underline" size="1">
              파트너스 이용 가이드
            </TextButton>
          </ButtonArea>
        </div>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          파트너스 신청하기
        </Button>
      </ButtonArea>
    </Container>
  );
}
