'use client';

import { Heading, Icon, Link, TextList } from '@/shared/ui';

import styles from './ProdTextList.module.scss';
import clsx from 'clsx';

interface ProdTextListProps {
  title: string;
  link?: {
    label: string;
    href: string;
  };
  list: string[];
  className?: string;
}

export const ProdTextList = ({ title, link, list, className }: ProdTextListProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.title}>
        <Heading as="h3" size="3" weight="semibold">
          {title}
        </Heading>
        {link && (
          <Link href={link.href} color="gray3" className={styles.link}>
            {link.label}
            <Icon name="arrowRight" size="xsmall" />
          </Link>
        )}
      </div>
      <TextList data={list} className={styles.textlist} />
    </div>
  );
};

ProdTextList.displayName = 'ProdTextList';
