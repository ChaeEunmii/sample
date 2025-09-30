'use client';

import React from 'react';
import { AgreementGroup } from '@widgets/form';
import { TextList } from '@shared/ui';
import styles from './ClubForms.module.scss';
import { MYCLUB_AGREEMENTS } from '@views/policy/agreements-data';

type AgreementDataType = typeof MYCLUB_AGREEMENTS;

interface ClubAgreementSectionProps {
  agreeStates: Record<string, boolean>;
  disabledStates: Record<string, boolean>;
  validateMode: boolean;
  handleCheckChange: (id: string, checked: boolean) => void;
  agreementData: AgreementDataType;
}

export const ClubAgreementSection = ({
  agreeStates,
  disabledStates,
  validateMode,
  handleCheckChange,
  agreementData,
}: ClubAgreementSectionProps) => {
  return (
    <div className={styles.agreement}>
      <AgreementGroup
        variant="type3"
        data={agreementData}
        checked={agreeStates[agreementData.id]}
        onChange={handleCheckChange}
        allStates={agreeStates}
        disabledStates={disabledStates}
        validateMode={validateMode}
      />
      <TextList
        data={[
          '클럽 전용 혜택은 알림을 통해 안내해 드립니다.',
          '알림 수신에 동의하지 않으실 경우, 클럽 서비스 이용이 제한될 수 있습니다.',
        ]}
        variant="info"
      />
    </div>
  );
};
