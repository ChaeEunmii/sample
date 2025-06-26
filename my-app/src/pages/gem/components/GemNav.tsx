import { Link, Icon } from '@shared/ui';
import clsx from 'clsx';
import styles from './GemNav.module.scss';

// 활성 메뉴 키 타입
type ActiveKey = 'gem' | 'collection';

interface GemNavProps {
  activeKey: ActiveKey;
}

// GEM 메뉴 항목 배열
const NAV_ITEMS = [
  { key: 'gem', label: 'GEM', href: '/gem/gem', icon: { off: 'gemOff', on: 'gemOn' } },
  {
    key: 'collection',
    label: 'MY COLLECTION',
    href: '/gem/mycollection',
    icon: { off: 'collectionOff', on: 'collectionOn' },
  },
] as const;

export const GemNav = ({ activeKey }: GemNavProps) => {
  return (
    <nav className={styles.nav} aria-label="GEM navigation">
      <ul className={styles.list}>
        {NAV_ITEMS.map(({ key, label, href, icon }) => (
          <li key={key} className={clsx(styles.item, { [styles.active]: activeKey === key })}>
            <Link
              as="route"
              href={href}
              type="inline"
              aria-current={activeKey === key ? 'page' : undefined}
              className={styles.link}
            >
              {icon && <Icon name={activeKey === key ? icon.on : icon.off} />}
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
