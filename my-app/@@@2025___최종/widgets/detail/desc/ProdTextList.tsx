'use client';

import { Heading, Icon, Link, TextList } from '@/shared/ui';

import styles from './ProdTextList.module.scss';

interface ProdTextListProps {
  title: string;
  link?: {
    label: string;
    href: string;
  };
  list: string[];
}

export const ProdTextList = ({ title, link, list }: ProdTextListProps) => {
  return (
    <div className={styles.root}>
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
