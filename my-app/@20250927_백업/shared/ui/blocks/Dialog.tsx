// 라이브러리
import { useId } from 'react';
import ReactDOM from 'react-dom';
// 컴포넌트
import { FocusTrap } from '@shared/ui';
import { Heading, IconButton } from '@shared/ui';
import { useModalOverlay, usePortal } from '@shared/hooks';
// 스타일
import clsx from 'clsx';
import styles from './Dialog.module.scss';

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 모달 제목 */
  title?: string;
  /** 모달 헤더 구분선 */
  divider?: boolean;
  /** 추가 클래스명 */
  className?: string;
  /** 추가 클래스명 (모달 바디) */
  bodyClassName?: string;
  /** 모달 내용 */
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  /** 모달 상단 고정 영역 */
  navBar?: React.ReactNode;
  /** 모달 하단 고정 영역 */
  footer?: React.ReactNode;
  /** 전체를 차지하는 모달인지 여부 */
  maximize?: boolean;
  /** maximize 배경색 지정시 추가하여 사용 */
  mode?: 'gray' | 'black' | 'dimed';
  /** 닫기버튼 노출 여부 */
  showClose?: boolean;
  /** 컨텐츠 영역 여백 제거 */
  flush?: boolean;
}

export const Dialog = ({
  title,
  divider = false,
  className,
  bodyClassName,
  children,
  isOpen,
  onClose,
  navBar,
  footer,
  maximize,
  mode,
  showClose,
  flush,
  ...props
}: DialogProps) => {
  const titleId = `modal-label--${useId()}`;
  const { overlayProps, modalProps } = useModalOverlay({
    isOpen,
    onClose,
    isDismissable: false,
    labelledBy: title && titleId,
  });

  const portalRoot = usePortal();

  if (!isOpen || !portalRoot) return null;

  return ReactDOM.createPortal(
    <FocusTrap>
      <div className={styles.overlay} {...overlayProps} {...props}>
        <div
          {...modalProps}
          aria-label={props['aria-label']}
          className={clsx(
            styles.root,
            maximize && styles.maximize,
            mode && styles[`mode-${mode}`],
            className
          )}
        >
          {/* header */}
          {title && (
            <div className={clsx(styles.header)}>
              <Heading as="h2" size="6" weight="semibold" id={titleId}>
                {title}
              </Heading>
            </div>
          )}
          {/* close button */}
          {showClose && (
            <IconButton name="close" size="large" onClick={onClose} className={styles.close}>
              닫기
            </IconButton>
          )}

          {navBar && <div className={styles.navBar}>{navBar}</div>}
          {/* body */}
          <div
            className={clsx(
              styles.body,
              divider && styles.divider,
              flush && styles.flush,
              bodyClassName
            )}
          >
            {children}
          </div>
          {footer && <div className={styles.footer}>{footer}</div>}
        </div>
      </div>
    </FocusTrap>,
    portalRoot
  );
};

Dialog.displayName = 'Dialog';
