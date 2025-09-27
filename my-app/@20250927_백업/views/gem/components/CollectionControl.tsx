'use client';

import { useState, useRef, useEffect } from 'react';
import { IconButton, Link } from '@/shared/ui';
import clsx from 'clsx';
import styles from './CollectionControl.module.scss';
interface MenuItem {
  label: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

interface CollectionControlProps {
  menuItems: MenuItem[];
}

export const CollectionControl = ({ menuItems }: CollectionControlProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={clsx(styles.root)} ref={menuRef}>
      <IconButton
        name="more"
        size="large"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="옵션 열기"
      ></IconButton>
      {open && (
        <div className={clsx(styles.listbox)}>
          <ul className={clsx(styles.options)}>
            {menuItems.map((item, index) => (
              <li key={index} className={clsx(styles.option)}>
                {item.href ? (
                  <Link as="route" type="block" href={item.href} className={clsx(styles.link)}>
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    role="button"
                    onClick={() => {
                      item.onClick?.();
                      setOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
