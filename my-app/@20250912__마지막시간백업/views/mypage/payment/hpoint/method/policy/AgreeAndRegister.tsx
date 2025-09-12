'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, Box, Text } from '@shared/ui';
import { LinkSet } from '@/views/mypage/info/payment/hpoint/components/LinkSet';
import TermsDetailDialog from '@views/policy/TermsDetailDialog';
import styles from './AgreeAndRegister.module.scss';
import { HPOINTPAY_TERMS } from '@views/policy/agreementsDataItems';

export default function AgreeAndRegister() {
  // 약관 상세 (L) : 타입별 내용 변경 (HPOINTPAY_TERMS 에서 순서대로 설정)
  type termsType = 0 | 1 | 2 | 3 | 4 | 5 | 6;
  const [termsStatusProps, setTermsStatusProps] = useState<{
    isOpen: boolean;
    type: termsType;
  }>({
    isOpen: false,
    type: 0,
  });
  const openTermsDetailDialog = (type: termsType) => {
    setTermsStatusProps({ isOpen: true, type });
  };

  // 하단 버튼 LinkSet 리스트
  const links = [
    {
      label: '전자금융거래 기본 약관',
      onClick: () => openTermsDetailDialog(0),
    },
    {
      label: 'H.Point Pay 이용약관',
      onClick: () => openTermsDetailDialog(1),
    },
    {
      label: '개인정보 수집 이용 동의',
      onClick: () => openTermsDetailDialog(2),
    },
    {
      label: '개인정보 제3자 제공 동의',
      onClick: () => openTermsDetailDialog(3),
    },
    {
      label: '오픈뱅킹 이용약관(은행)',
      onClick: () => openTermsDetailDialog(4),
    },
    {
      label: '개인정보 제3자 제공 동의(은행)',
      onClick: () => openTermsDetailDialog(5),
    },
    {
      label: '현대백화점 카드 확인을 위한 개인정보 수집 및 이용 동의',
      onClick: () => openTermsDetailDialog(6),
    },
  ];

  return (
    <Container title="H.Point Pay 이용약관 동의 및 등록" showBack>
      <Contents className={styles.layout}>
        <Box>
          <Text as="span" size="4" color="gray2">
            H.Point Pay 이용 약관에 동의 후 결제수단을 등록해 주세요.
            <br />
            보다 빠르고 간편하게 1초 결제가 가능해요.
          </Text>
        </Box>
        <LinkSet items={links} className="ncp-mt-l" />

        {/* 약관 상세 (L)*/}
        <TermsDetailDialog
          isOpen={termsStatusProps.isOpen}
          onClose={() => setTermsStatusProps((prev) => ({ ...prev, isOpen: false }))}
          title={HPOINTPAY_TERMS[termsStatusProps.type].title}
          content={HPOINTPAY_TERMS[termsStatusProps.type].content}
        />
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">뒤로</Button>
        <Button variant="primary" size="large">
          동의 후 계속
        </Button>
      </ButtonArea>
    </Container>
  );
}
