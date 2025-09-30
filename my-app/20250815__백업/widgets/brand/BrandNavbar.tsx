'use client';

import { useState, useEffect, useRef } from 'react';
import { useModalOverlay } from '@shared/hooks';
import { Tabs, Link, Icon } from '@/shared/ui';
import clsx from 'clsx';
import styles from './BrandNavbar.module.scss';

interface Depth3Item {
  label: string;
  href: string;
}

interface Depth2Item {
  label: string;
  href?: string;
  children?: Depth3Item[];
}

interface MenuItem {
  label: string;
  href?: string;
  depth?: Depth2Item[];
}

interface BrandNavbarProps {
  menuItems: MenuItem[];
  headSlot?: React.ReactNode;
}

export const BrandNavbar = ({ menuItems, headSlot }: BrandNavbarProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [depthOpenIndex, setDepthOpenIndex] = useState<number | null>(null);
  const [openAccordions, setOpenAccordions] = useState<Record<number, boolean>>({});
  const navRef = useRef<HTMLElement>(null);

  // 높이 변화를 감지해서 CSS 변수 설정
  useEffect(() => {
    if (!navRef.current) return;

    const updateHeight = () => {
      if (!navRef.current) return;

      const height = navRef.current.getBoundingClientRect().height;
      const mainEl = document.querySelector('#main') as HTMLElement | null;
      if (mainEl) {
        mainEl.style.setProperty('--ncp-brand-navbar-height', `${height.toFixed(2)}px`);
      }
    };

    const observer = new ResizeObserver(updateHeight);
    observer.observe(navRef.current);

    updateHeight();

    return () => {
      observer.disconnect();
    };
  }, []);

  const onClose = () => {
    setActiveIndex(null);
    setDepthOpenIndex(null);
    setOpenAccordions({});
  };

  const toggleAccordion = (idx: number) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const handleTabClick = (index: number) => {
    const menu = menuItems[index];

    if (menu.href) {
      setDepthOpenIndex(null);
      setActiveIndex(null);
      window.scrollTo(0, 0);
      return;
    }

    // 패널이 있는 경우 토글
    if (menu.depth) {
      if (depthOpenIndex === index) {
        setDepthOpenIndex(null);
        setActiveIndex(null);
      } else {
        setDepthOpenIndex(index);
        setActiveIndex(index);
      }
    } else {
      setDepthOpenIndex(null);
      setActiveIndex(null);
    }
  };

  // depth2 단일 링크 클릭 시 패널 닫기
  const handleDepth2Click = () => {
    window.scrollTo(0, 0);
    onClose();
  };

  // depth3 링크 클릭 시 패널 닫기
  const handleDepth3Click = () => {
    window.scrollTo(0, 0);
    onClose();
  };

  // Tabs에 넘길 데이터 변환
  const tabs = menuItems.map((menu, index) => ({
    label: menu.label,
    href: menu.href,
    onClick: () => handleTabClick(index),
  }));

  const currentMenu = depthOpenIndex !== null ? menuItems[depthOpenIndex] : null;
  const hasDepth = !!currentMenu?.depth;

  const { overlayProps, modalProps } = useModalOverlay({
    isOpen: hasDepth,
    onClose,
    isDismissable: true,
  });

  return (
    <nav ref={navRef} className={styles.root}>
      {headSlot}
      {/* 상단 메뉴탭 */}
      <Tabs
        variant="navbar"
        data={tabs}
        activeTab={activeIndex ?? -1}
        onTabChange={(index) => handleTabClick(index)}
      />

      {/* 하위 패널 */}
      {hasDepth && (
        <div className={styles.panel} {...overlayProps}>
          <ul className={styles.depth2} {...modalProps}>
            {currentMenu!.depth!.map((item, idx) => {
              const hasChildren = item.children?.length;

              if (hasChildren) {
                return (
                  <li key={idx}>
                    <Link
                      href="#"
                      type="flex"
                      className={clsx(styles.depth2Link)}
                      aria-selected={openAccordions[idx] ? 'true' : 'false'}
                      onClick={() => toggleAccordion(idx)}
                    >
                      {item.label}
                      <Icon
                        name={openAccordions[idx] ? 'arrowUp' : 'arrowDown'}
                        size="small"
                        className="ncp-ml-auto"
                      />
                    </Link>
                    {openAccordions[idx] && (
                      <ul className={styles.depth3}>
                        {item.children!.map((child, cIdx) => (
                          <li key={cIdx}>
                            <Link
                              href={child.href}
                              type="flex"
                              className={styles.depth3Link}
                              onClick={handleDepth3Click}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              // 하위 없으면 링크
              return (
                <li key={idx}>
                  <Link
                    href={item.href ?? '#'}
                    type="flex"
                    className={styles.depth2Link}
                    onClick={handleDepth2Click}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

BrandNavbar.displayName = 'BrandNavbar';
