import clsx from 'clsx';
import { useState } from 'react';
import { Drawer, Button, TextButton } from '@shared/ui';
import { PrivacyConsentDialog } from '@/widgets/agreement/PrivacyDialog';
import { CodeResultDialog } from '@/widgets/order/CodeResultDialog';
import styles from './AgreementDrawer.module.scss';

interface AgreementDrawerProps {
  /** 개인통관고유부호 데이터 */
  data: string;
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const AgreementDrawer = ({ data, isOpen, onClose, className }: AgreementDrawerProps) => {
  // 개인정보 수집.이용 동의, 개인정보 제3자 제공 동의 (L) 상태관리
  const [dialogType, setDialogType] = useState<null | 'collection' | 'thirdParty'>(null);
  const [isCodeResultDialog, setIsCodeResultDialog] = useState(false);

  // 개인정보 수집.이용 동의, 개인정보 제3자 제공 동의 (L) 열기
  const openDialog = (type: 'collection' | 'thirdParty') => {
    setDialogType(type);
  };

  // 개인정보 수집.이용 동의, 개인정보 제3자 제공 동의 (L) 닫기
  const closeDialog = () => {
    setDialogType(null);
  };

  return (
    <Drawer
      title={
        <>
          관세청을 통해
          <br /> 개인통관고유부호를 조회합니다.
        </>
      }
      collapsible
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <Button variant="primary" size="large" onClick={() => setIsCodeResultDialog(true)}>
          동의하고 조회하기
        </Button>
      }
      className={clsx(styles.agreement, className)}
    >
      <div className={styles.content}>
        <TextButton
          color="gray1"
          onClick={() => openDialog('collection')}
          size="2"
          variant="bold"
          suffixIcon="arrowRight"
          className={styles.agreeButton}
        >
          개인정보 수집.이용 동의
        </TextButton>
        <TextButton
          color="gray1"
          onClick={() => openDialog('thirdParty')}
          size="2"
          variant="bold"
          suffixIcon="arrowRight"
          className={styles.agreeButton}
        >
          개인정보 제3자 제공동의
        </TextButton>
      </div>

      {/* 개인정보 수집.이용 동의, 개인정보 제3자 제공 동의 (L) */}
      <PrivacyConsentDialog type={dialogType} isOpen={!!dialogType} onClose={closeDialog} />
      {/* 개인통관고유부호 조회 결과 (L) */}
      <CodeResultDialog
        data={data}
        isOpen={isCodeResultDialog}
        onClose={() => setIsCodeResultDialog(false)}
      />
    </Drawer>
  );
};

AgreementDrawer.displayName = 'AgreementDrawer';
