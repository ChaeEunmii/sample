import { Drawer, Link } from '@shared/ui';
import styles from './OrderMoreDrawer.module.scss';

interface OrderMoreDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { label: '해외숙박', href: '#' },
  { label: '국내숙박', href: '#' },
  { label: '유럽철도', href: '#' },
  { label: 'VIP투어', href: '#' },
  { label: '하나투어', href: '#' },
  { label: '모두투어', href: '#' },
];

export const OrderMoreDrawer = ({ isOpen, onClose }: OrderMoreDrawerProps) => {
  return (
    <Drawer title="주문조회 더보기" isOpen={isOpen} onClose={onClose}>
      <ul className={styles.linkList}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link as="route" href={href} className={styles.link}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};
