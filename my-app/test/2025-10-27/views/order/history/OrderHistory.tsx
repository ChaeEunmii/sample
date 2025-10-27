import { Link, Heading, Text } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import styles from './OrderHistory.module.scss';

export default function OrderHistory() {
  return (
    <Container showBack title="과거 주문 내역 조회">
      <Contents className={styles.layout}>
        <Heading as="strong" size="3" weight="medium" className={styles.tit}>
          과거 주문 내역을 조회할 서비스를 선택해 주세요.
          <br />
          과거 주문 내역을 최근 5년까지 조회가 가능합니다.
        </Heading>
        <ul className={styles.list}>
          <li>
            <Link as="route" href="#" className={styles.link}>
              <Heading as="strong" className={styles.head}>
                더현대닷컴
              </Heading>
              <span>과거에 더현대닷컴에서 주문한 정보 확인</span>
            </Link>
          </li>
          <li>
            <Link as="route" href="#" className={styles.link}>
              <Heading as="strong" className={styles.head}>
                현대식품관 to Home
              </Heading>
              <span>과거에 현대식품관에서 주문한 정보 확인</span>
            </Link>
          </li>
          <li>
            <Link as="route" href="#" className={styles.link}>
              <Heading as="strong" className={styles.head}>
                비로그인 주문 조회
              </Heading>
              <span>과거에 로그인 없이 주문한 정보 확인</span>
            </Link>
          </li>
        </ul>
        <Text size="4" className="ncp-mt-l">
          최근 5년 내의 주문 정보를 조회할 수 없다면, 고객센터{' '}
          <Link href="tel:01012345678" variant="underline" type="inline" className={styles.call}>
            1800-2233
          </Link>
          로 문의주세요.
        </Text>
      </Contents>
    </Container>
  );
}
