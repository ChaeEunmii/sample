'use client';

import React, { useState } from 'react';
import { Text, TextButton } from '@shared/ui';
import { PrivacyConsentDialog } from '@/widgets/agreement/PrivacyDialog';
import styles from './PaymentConsent.module.scss';

export const PaymentConsent = () => {
  // 약관 동의 관련 (L) 상태관리
  const [dialogType, setDialogType] = useState<
    null | 'finance' | 'personal' | 'provision' | 'seller'
  >(null);

  // 약관 동의 관련 (L) 열기
  const openDialog = (type: 'finance' | 'personal' | 'provision' | 'seller') => {
    setDialogType(type);
  };

  // 약관 동의 관련 (L) 닫기
  const closeDialog = () => {
    setDialogType(null);
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.item}>
          <Text color="gray2">주문 내용을 확인했으며 결제에 동의합니다.</Text>
          <TextButton
            color="gray3"
            onClick={() => openDialog('finance')}
            size="2"
            variant="underline"
          >
            자세히
          </TextButton>
        </div>
        <div className={styles.item}>
          <Text color="gray2">회원님의 개인정보는 안전하게 관리됩니다. </Text>
          <TextButton
            color="gray3"
            onClick={() => openDialog('personal')}
            size="2"
            variant="underline"
          >
            자세히
          </TextButton>
        </div>
      </div>

      {/* 전자금융거래 이용약관 동의, 개인정보 수집 및 이용 동의, 개인정보 제3자 제공/위탁 동의, 개별판매자 개인정보 제공 안내 (L) */}
      <PrivacyConsentDialog type={dialogType} isOpen={!!dialogType} onClose={closeDialog} />
    </>
  );
};
PaymentConsent.displayName = 'PaymentConsent';
