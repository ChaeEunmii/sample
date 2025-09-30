'use client';

import { useState } from 'react';
import { Popover, IconButton, Link } from '@shared/ui';
import styles from './More.module.scss';
import clsx from 'clsx';

interface MoreProps {
  iconSize?: 'medium' | 'large';
  data: {
    name: string;
    onClick?: () => void;
    href?: string;
  }[];
  className?: string;
}
export const More = ({ iconSize = 'medium', data = [], className }: MoreProps) => {
  if (data.length === 0) return;

  const [isOpen, setIsOpen] = useState(false);
  const changedPopoverState = (state: boolean) => {
    setIsOpen(state);
  };
  return (
    <Popover
      trigger={
        <IconButton name="more" size={iconSize} className={clsx(styles.button, className)}>
          설정
        </IconButton>
      }
      gap={8}
      placement={['bottom', 'end']}
      isOpen={isOpen}
      popoverState={changedPopoverState}
    >
      <ul className={styles.list}>
        {data.map((item, idx) => (
          <li key={idx}>
            <Link
              href={!item.onClick && item.href ? item.href : '#'}
              type="block"
              {...(item.onClick
                ? {
                    onClick: () => {
                      item.onClick?.();
                      setIsOpen(false);
                    },
                  }
                : {})}
              className={styles.link}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </Popover>
  );
};

More.displayName = 'More';
