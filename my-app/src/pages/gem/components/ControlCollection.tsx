'use client';

import { useState, useRef, useEffect } from 'react';
import { IconButton } from '@/shared/ui';
import clsx from 'clsx';
import styles from './ControlCollection.module.scss';

interface MenuItem {
  label: string;
  onClick: () => void;
}

const menuItems: MenuItem[] = [
  { label: '항목 추가', onClick: () => console.log('항목 추가') },
  { label: '항목 삭제', onClick: () => console.log('항목 삭제') },
  { label: '컬렉션명 편집', onClick: () => console.log('컬렉션명 편집') },
  { label: '컬렉션 삭제', onClick: () => console.log('컬렉션 삭제') },
];

export default function ControlCollection() {
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
                <button
                  onClick={() => {
                    item.onClick();
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
