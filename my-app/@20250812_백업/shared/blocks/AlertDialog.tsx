'use client';

import { useEffect, useId, useState } from 'react';
import ReactDOM from 'react-dom';
import { Heading, Text, Button, ButtonArea, FocusTrap } from '@shared/ui';
import { useModalOverlay, usePortal } from '@shared/hooks';
import clsx from 'clsx';
import styles from './AlertDialog.module.scss';

interface AlertProps {
  title?: string;
  message?: string | React.ReactNode;
  onConfirm: () => void;
  onCancel?: () => void;
  labelProps?: {
    confirm?: string;
    cancel?: string;
  };
}

export const AlertDialog = ({ title, message, onConfirm, onCancel, labelProps }: AlertProps) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => setIsOpen(true), []);

  const onClose = () => {
    onCancel ? onCancel() : onConfirm();
  };
  const titleId = `modal-label--${useId()}`;
  const { overlayProps, modalProps } = useModalOverlay({
    isOpen,
    onClose,
    isDismissable: false,
    role: 'alertdialog',
    labelledBy: title && titleId,
  });

  const portalRoot = usePortal();
  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <FocusTrap>
      <div className={styles.overlay} {...overlayProps}>
        <div className={clsx(styles.root)} {...modalProps}>
          {/* header */}
          {title && (
            <Heading as="h2" size="3" weight="semibold" id={titleId}>
              {title}
            </Heading>
          )}

          {/* body */}
          <Text className={styles.message}>{message}</Text>

          {/* footer */}
          <ButtonArea className={styles.footer}>
            {onCancel && <Button onClick={onCancel}> {labelProps?.cancel || '취소'} </Button>}
            <Button onClick={onConfirm} variant="primary">
              {labelProps?.confirm || '확인'}
            </Button>
          </ButtonArea>
        </div>
      </div>
    </FocusTrap>,
    portalRoot
  );
};

AlertDialog.displayName = 'AlertDialog';
