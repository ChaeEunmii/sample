'use client';

import { useSearchParams } from 'next/navigation';
import { Container } from '@widgets/layout/Container';
import { Heading, Text, TitleBar, Stack, TitleArea } from '@shared/ui';
import ChangePrime from '@views/mypage/membership/change/ChangePrime';
import ChangePlus from '@views/mypage/membership/change/ChangePlus';
import styles from './PaymentStatus.module.scss';

export default function PaymentStatus() {
  // 화면상태
  const searchParams = useSearchParams();
  const status = searchParams.get('status');

  // let content;
  // switch (status) {
  //   case 'status1':
  //     content = <ChangePrime />;
  //     break;
  //   case 'status2':
  //     content = <ChangePlus />;
  //     break;
  //   default:
  //     content = <ChangePrime />;
  //     break;
  // }
  return (
    <Container title="멤버십 결제 현황">
      <div className={styles.title}>
        <Text weight="semibold" color="point">
          현재 이용 중
        </Text>
        <Heading as="strong">HiHi 멤버십 프라임</Heading>
      </div>
      <TitleArea
        topSlot={
          <>
            <Text weight="semibold" color="point">
              현재 이용 중
            </Text>
          </>
        }
        title={<>HiHi 멤버십 프라임22222</>}
        variant="2"
      />
      {/* <TitleBar type="docs" title="HiHi 멤버십 프라임" /> */}
    </Container>
  );
}
