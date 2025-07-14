'use client';

// import { useState } from 'react';
import { ButtonArea, Button, TitleBar, Line, Text } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { MembershipPayMethod } from '@views/mypage/membership/components/MembershipPayMethod';
import styles from './MembershipJoin.module.scss';

export default function MembershipJoin() {
  // H.Point 포인트 우선 사용 상태
  // const [isPointUse, setIsPointUse] = useState(false);
  // // 나의 포인트
  // const [myPoint, setMyPoint] = useState(102000);
  // const myPointConvert = formatNumber(myPoint);

  return (
    <Container title="HiHi 멤버십 가입하기" showBack>
      <Contents className={styles.layout}>
        <TitleBar type="docs" title="이용권을 선택해 주세요" />
        <div>여기는 버튼들</div>
        <Line variant="bold" margin="3" />
        <TitleBar
          type="docs"
          title="정기 배송 기프트를 선택해 주세요"
          description={
            <>
              <Text as="span" color="gray3" size="3">
                매월 받고 싶은 혜택 한 가지를 미리 고를 수 있어요.
              </Text>
            </>
          }
        />
        <Line variant="bold" margin="3" />
        {/* 결재수단 선택 */}
        <MembershipPayMethod />
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          멤버십 혜택 시작하기
        </Button>
      </ButtonArea>
    </Container>
  );
}
