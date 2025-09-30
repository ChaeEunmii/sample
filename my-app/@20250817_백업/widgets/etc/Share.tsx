import { Drawer, Icon, IconName } from '@shared/ui';
import styles from './Share.module.scss';
import clsx from 'clsx';

interface ShareProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const shareOptions = [
  {
    icon: 'kakao',
    label: '카카오톡',
    type: 'social',
    onClick: (url: string) => {
      /* 공유 로직 */
    },
  },
  {
    icon: 'kakaostory',
    label: '카카오스토리',
    type: 'social',
    onClick: (url: string) => {
      /* 공유 로직 */
    },
  },
  {
    icon: 'facebook',
    label: '페이스북',
    type: 'social',
    onClick: (url: string) => {
      /* 공유 로직 */
    },
  },
  {
    icon: 'x',
    label: 'X',
    type: 'social',
    onClick: (url: string) => {
      /* 공유 로직 */
    },
  },
  {
    icon: 'link',
    label: '링크복사',
    type: 'icon',
    onClick: (url: string) => navigator.clipboard.writeText(url),
  },
  {
    icon: 'qrcode',
    label: 'QR코드',
    type: 'icon',
    onClick: (url: string) => {
      /* QR 띄우기 */
    },
  },
];

export const Share = ({ isOpen, onClose, url }: ShareProps) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="공유하기">
      <div className={styles.root}>
        {shareOptions.map(({ icon, label, type, onClick }, idx) => (
          <button key={idx} type="button" className={styles.item} onClick={() => onClick(url)}>
            {type === 'social' ? (
              <i className={clsx(styles.icon, type === 'social' && styles.social, styles[icon])} />
            ) : (
              <Icon name={icon as IconName} className={styles.icon} size="large" />
            )}
            <span>{label}</span>
          </button>
        ))}
      </div>
    </Drawer>
  );
};
