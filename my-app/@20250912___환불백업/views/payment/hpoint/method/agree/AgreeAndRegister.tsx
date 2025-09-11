'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, Box, Text } from '@shared/ui';
import { LinkSet } from '@/views/mypage/payment/hpoint/components/LinkSet';
import TermsDetailDialog from '@views/policy/TermsDetailDialog';
import { HPOINTPAY_DEFAULT_TERMS } from '@views/policy/agreementsDataItems';
import styles from './AgreeAndRegister.module.scss';

export default function AgreeAndRegister() {
  const [isTermsDialog, setIsTermsDialog] = useState(false); // 약관상세 (L)

  // 하단 버튼 링크 리스트
  const links = [
    {
      label: '전자금융거래 기본 약관',
      onClick: () => setIsTermsDialog(true),
    },
    {
      label: 'H.Point Pay 이용약관',
      onClick: () => console.log('H.Point Pay 이용약관 클릭'),
    },
    {
      label: '개인정보 수집 이용 동의',
      onClick: () => console.log('개인정보 수집 이용 동의 클릭'),
    },
    {
      label: '개인정보 제3자 제공 동의',
      onClick: () => console.log('개인정보 제3자 제공 동의 클릭'),
    },
    {
      label: '오픈뱅킹 이용약관(은행)',
      onClick: () => console.log('오픈뱅킹 이용약관(은행) 클릭'),
    },
    {
      label: '개인정보 제3자 제공 동의(은행)',
      onClick: () => console.log('개인정보 제3자 제공 동의(은행) 클릭'),
    },
    {
      label: '현대백화점 카드 확인을 위한 개인정보 수집 및 이용 동의',
      onClick: () => console.log('현대백화점 카드 확인을 위한 개인정보 수집 및 이용 동의 클릭'),
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
          isOpen={isTermsDialog}
          onClose={() => setIsTermsDialog(false)}
          title={HPOINTPAY_DEFAULT_TERMS.title}
          content={HPOINTPAY_DEFAULT_TERMS.content}
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
