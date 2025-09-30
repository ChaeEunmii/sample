'use client';

import { useState, useEffect } from 'react';

import { Drawer, Button } from '@shared/ui';

import { AgreementGroup } from '@widgets/form';
import { NCP_AGREEMENTS } from '@views/policy/agreements-data';

interface TermsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsDialog({ isOpen, onClose }: TermsDialogProps) {
  // 전체동의
  const [agreeStates, setAgreeStates] = useState<Record<string, boolean>>({});
  const [disabledStates, setDisabledStates] = useState<Record<string, boolean>>({});

  const handleCheckChange = (id: string, checked: boolean) => {
    setAgreeStates((prev) => ({ ...prev, [id]: checked }));
  };

  // 동의항목 초기설정
  useEffect(() => {
    const defaultCheckedId = ['ncp-5', 'ncpemail', 'ncpsms'];
    const defaultDisabledIds = ['email', 'tm', 'dm'];

    // 초기 체크 상태 설정
    setAgreeStates((prev) => {
      const updated = { ...prev };
      defaultCheckedId.forEach((id) => {
        updated[id] = true;
      });
      return updated;
    });

    // 초기 disabled 상태 설정
    setDisabledStates((prev) => {
      const updated = { ...prev };
      defaultDisabledIds.forEach((id) => {
        updated[id] = true;
      });
      return updated;
    });
  }, []);

  return (
    <Drawer
      isOpen={isOpen}
      title="필수약관에 동의해주세요"
      description="최초 로그인 시 약관 동의가 필요해요"
      footer={
        <>
          <Button size="large">취소</Button>
          <Button variant="primary" size="large">
            동의
          </Button>
        </>
      }
      onClose={onClose}
    >
      <AgreementGroup
        data={NCP_AGREEMENTS}
        checked={agreeStates[NCP_AGREEMENTS.id]}
        onChange={handleCheckChange}
        allStates={agreeStates}
        disabledStates={disabledStates}
      />
    </Drawer>
  );
}
