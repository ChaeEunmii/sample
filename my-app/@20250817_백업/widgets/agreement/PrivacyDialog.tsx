import { Button, Dialog, Heading } from '@shared/ui';
import clsx from 'clsx';
import styles from './PrivacyDialog.module.scss';
import { ORDER_AGREEMENTS } from '@/widgets/agreement/privacy-data';

interface ChildrenItem {
  title?: string;
  subTitle?: string;
  content?: React.ReactNode;
}

interface TypeItem {
  id: string;
  title: string;
  children: ChildrenItem[];
}

interface ConsentContent {
  collection: TypeItem[];
  thirdParty: TypeItem[];
  finance: TypeItem[];
  personal: TypeItem[];
  provision: TypeItem[];
  seller: TypeItem[];
}

interface PrivacyConsentDialogProps {
  /** 컨텐츠 타입 */
  type: 'collection' | 'thirdParty' | 'finance' | 'personal' | 'provision' | 'seller' | null;
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const PrivacyConsentDialog = ({
  type,
  isOpen = false,
  onClose,
  className,
}: PrivacyConsentDialogProps) => {
  if (!isOpen || !type) return null;

  // 약관
  const content = ORDER_AGREEMENTS;

  return (
    <Dialog
      title={type ? (content[type]?.[0]?.title ?? '') : ''}
      isOpen={isOpen}
      onClose={onClose}
      footer={
        (type === 'collection' || type === 'thirdParty') && (
          <Button variant="primary" size="large" onClick={onClose}>
            닫기
          </Button>
        )
      }
      className={clsx(className)}
      maximize
      showClose
    >
      <div className={styles.content}>
        {content[type].map((type) => (
          <ul key={type.id} className={styles.privacyList}>
            {type.children?.map((item, index) => (
              <li key={index}>
                {'title' in item && (
                  <Heading as="h3" size="6" weight="bold">
                    {item.title}
                  </Heading>
                )}
                {'subTitle' in item && (
                  <Heading as="h3" size="5" weight="bold" className={styles.title}>
                    {item.subTitle}
                  </Heading>
                )}
                {item.content}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Dialog>
  );
};

PrivacyConsentDialog.displayName = 'PrivacyConsentDialog';
