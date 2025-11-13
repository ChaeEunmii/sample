'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, TitleArea, Text, TextList } from '@shared/ui';
import { HbssFooter } from '@views/hbss/components/HbssFooter';
import styles from './MobileRemote.module.scss';

export default function MobileRemoteMain() {
  return (
    <Container title="현대백화점 명절 배송 접수">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              현대백화점과 함께하는
              <br />올 명절은 더 새롭습니다
            </>
          }
          description={
            <Text as="span" size="5" color="gray2" weight="regular">
              오랜 인연, 새로운 인연을 위한 좋은 선물들을 준비했습니다.
              <br />
              행복한 명절 되십시오.
            </Text>
          }
        />
        <ButtonArea vertical margin="0">
          <Button size="large">모바일 배송 접수</Button>
          <Button size="large">현장 배송 접수</Button>
        </ButtonArea>
        <TextList
          data={[
            '모바일 배송 접수 또는 현장 배송접수를 선택해 주세요.',
            '정확한 접수를 위해 모바일 배송접수 선택 후에도 콜센터에서  직접 연락을 통해 선물 받으시는 고객님과 정보를 확인을 진행합니다.',
          ]}
          variant="info"
          margin="4"
        />
      </Contents>
      <HbssFooter />
    </Container>
  );
}
