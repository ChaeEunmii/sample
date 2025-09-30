import { Dialog, ButtonArea, TextButton, Heading, Link, Icon } from '@shared/ui';
import styles from './SellerCenterMenu.module.scss';

// 메뉴 데이터
const MENU_DATA: MenuSection[] = [
  {
    id: 'join',
    title: '입점',
    items: [
      { id: 'join-info', label: '입점안내', href: '#' },
      { id: 'join-guide', label: '입점 가이드', href: '#' },
    ],
  },
  {
    id: 'manual',
    title: '운영 매뉴얼',
    items: [
      { id: 'manual-main', label: '매뉴얼', href: '#' },
      { id: 'manual-faq', label: 'FAQ', href: '#' },
      { id: 'manual-api', label: '오픈 API 가이드', href: '#' },
    ],
  },
  {
    id: 'cs',
    title: '고객센터',
    items: [
      { id: 'cs-notice', label: '공지사항', href: '#' },
      { id: 'cs-contact', label: '비즈니스 문의하기', href: '#' },
    ],
  },
  {
    id: 'biz',
    items: [{ id: 'biz-ads', label: '광고 비즈니스', href: '#' }],
  },
];

interface MenuItem {
  id: string;
  label: string;
  href: string;
}
interface MenuSection {
  id: string;
  title?: string;
  items: MenuItem[];
}

interface SellerCenterMenuDialogProps {
  isOpen: boolean;
  onClose: () => void;
  /** 로그인 여부 */
  isLoggedIn?: boolean;
}

export default function SellerCenterMenuDialog({
  isOpen,
  onClose,
  isLoggedIn = false,
}: SellerCenterMenuDialogProps) {
  return (
    <Dialog title="" isOpen={isOpen} onClose={onClose} showClose maximize>
      <div className={styles.title}>
        {isLoggedIn ? (
          <TextButton size="inherit" suffixIcon="arrowRight" href="#">
            가입신청 내역 확인하기
          </TextButton>
        ) : (
          <TextButton size="inherit" suffixIcon="arrowRight" href="#">
            로그인 해주세요
          </TextButton>
        )}
      </div>
      {/* 메뉴목록 */}
      <nav className={styles.nav} aria-label="seller center navigation">
        <ul className={styles.list}>
          {MENU_DATA.map((section) => (
            <li key={section.id} className={styles.item}>
              {section.title && (
                <Heading as="strong" className={styles.tit}>
                  {section.title}
                </Heading>
              )}
              <ul className={styles.depth}>
                {section.items.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href} as="route" type="block">
                      <span>{item.label}</span>
                      <Icon name="arrowRight" size="xsmall" />
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
      {isLoggedIn && (
        <ButtonArea align="center">
          <TextButton size="1" color="gray3" variant="underline">
            로그아웃
          </TextButton>
        </ButtonArea>
      )}
    </Dialog>
  );
}
