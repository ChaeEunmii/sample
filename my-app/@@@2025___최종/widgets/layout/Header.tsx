'use client';

// 라이브러리
import React from 'react';
import { useRouter } from 'next/navigation';
// 컴포넌트
import { Heading, IconButton, TextButton, IconName } from '@shared/ui';
import { LangSelector } from '@widgets/form';
import { SearchButton } from './SearchButton';
// 스타일
import styles from './Header.module.scss';

type ActionItem =
  | { type: 'icon'; name: IconName; count?: number; onClick?: () => void }
  | { type: 'text'; name: string; onClick?: () => void }
  | { type: 'lang'; onClick?: (lang: string) => void; value?: string }
  | { type: 'custom'; component: React.ReactNode };

export type HeaderProps = {
  title?: string | React.ReactNode;
  type?:
    | 'homefeed'
    | 'shop'
    | 'cart'
    | 'brand'
    | 'my'
    | 'gem'
    | 'search'
    | 'detail'
    | 'menu'
    | 'category'
    | 'myorder';
  showBack?: boolean;
  content?: React.ReactNode;
  actions?: ActionItem[];
  hidden?: boolean;
  customHeader?: React.ReactNode;
  brandHeader?: React.ReactNode;
  slot?: React.ReactNode;
  children?: React.ReactNode;
};

// 타입별 기본 설정
const getTypeDefaults = (type: HeaderProps['type']) => {
  switch (type) {
    case 'homefeed':
      return {
        title: 'HiHi',
        showBack: false,
        actions: [
          {
            type: 'icon' as const,
            name: 'notice' as IconName,
            onClick: () => console.log('notice!!'),
          },
          {
            type: 'icon' as const,
            name: 'cart' as IconName,
            onClick: () => console.log('cart!!'),
          },
        ],
      };
    case 'shop':
      return {
        content: <SearchButton label="최대 10만원 리워드&사은 혜택" />,
        actions: [
          {
            type: 'icon' as const,
            name: 'notice' as IconName,
            onClick: () => console.log('notice!!'),
          },
          {
            type: 'icon' as const,
            name: 'cart' as IconName,
            count: 1999,
            onClick: () => console.log('cart!!'),
          },
        ],
      };
    case 'cart':
      return {
        title: '장바구니',
        showBack: true,
        actions: [
          {
            type: 'icon' as const,
            name: 'search' as IconName,
            onClick: () => console.log('search!!'),
          },
          {
            type: 'icon' as const,
            name: 'shopHome' as IconName,
            onClick: () => console.log('home!!'),
          },
        ],
      };
    case 'brand':
      return {
        showBack: true,
        actions: [
          {
            type: 'icon' as const,
            name: 'search' as IconName,
            onClick: () => console.log('search!!'),
          },
          {
            type: 'icon' as const,
            name: 'cart' as IconName,
            count: 999,
            onClick: () => console.log('cart!!'),
          },
        ],
      };
    case 'my':
      return {
        actions: [
          {
            type: 'icon' as const,
            name: 'notice' as IconName,
            count: 3,
            onClick: () => console.log('notice!!'),
          },
          {
            type: 'icon' as const,
            name: 'setting' as IconName,
            onClick: () => console.log('setting!!'),
          },
        ],
      };
    case 'gem':
      return {
        actions: [
          {
            type: 'icon' as const,
            name: 'notice' as IconName,
            count: 1999,
            onClick: () => console.log('notice!!'),
          },
          {
            type: 'icon' as const,
            name: 'cart' as IconName,
            count: 1999,
            onClick: () => console.log('cart!!'),
          },
        ],
      };
    case 'detail':
      return {
        showBack: true,
        actions: [
          {
            type: 'icon' as const,
            name: 'search' as IconName,
            onClick: () => console.log('search!!'),
          },
          {
            type: 'icon' as const,
            name: 'cart' as IconName,
            count: 999,
            onClick: () => console.log('cart!!'),
          },
        ],
      };
    case 'menu':
      return {
        showBack: true,
        content: <SearchButton label="최대 10만원 리워드&사은 혜택" />,
        actions: [
          {
            type: 'icon' as const,
            name: 'cart' as IconName,
            count: 1999,
            onClick: () => console.log('cart!!'),
          },
        ],
      };
    case 'category':
      return {
        showBack: true,
        actions: [
          {
            type: 'icon' as const,
            name: 'search' as IconName,
            onClick: () => console.log('search!!'),
          },
          {
            type: 'icon' as const,
            name: 'cart' as IconName,
            count: 1999,
            onClick: () => console.log('cart!!'),
          },
        ],
      };
    case 'myorder':
      return {
        showBack: true,
        actions: [
          {
            type: 'icon' as const,
            name: 'cart' as IconName,
            count: 1999,
            onClick: () => console.log('cart!!'),
          },
        ],
      };
    default:
      return {
        title: undefined,
        showBack: false,
        actions: [],
      };
  }
};

export const Header = ({
  title,
  type,
  showBack,
  content,
  actions,
  hidden,
  slot,
  customHeader,
  brandHeader,
}: HeaderProps) => {
  if (hidden) return null;
  if (customHeader) return <>{customHeader}</>;

  const router = useRouter();

  // 타입별 기본값 가져오기
  const defaults = type
    ? getTypeDefaults(type)
    : { title: undefined, showBack: false, content: undefined, actions: [] };

  const hdTitle = title ?? defaults.title;
  const hdShowBack = showBack ?? defaults.showBack;
  const hdContent = content ?? defaults.content;
  const hdActions = actions ?? defaults.actions;

  const renderAction = (action: ActionItem, idx: number) => {
    switch (action.type) {
      case 'icon':
        return (
          <IconButton
            key={idx}
            name={action.name}
            badge={action.count && (action.count > 999 ? '999+' : action.count)}
            size="large"
            onClick={action.onClick}
          />
        );
      case 'text':
        return (
          <TextButton key={idx} onClick={action.onClick}>
            {action.name}
          </TextButton>
        );
      case 'lang':
        return (
          <LangSelector key={idx} lang={action.value} onChange={(val) => action.onClick?.(val)} />
        );
      case 'custom':
        return <React.Fragment key={idx}>{action.component}</React.Fragment>;
    }
  };

  return (
    <>
      {brandHeader && <>{brandHeader}</>}
      <header id="header" className={styles.root}>
        {hdShowBack && <IconButton name="back" size="large" onClick={() => router.back()} />}

        {hdTitle && (
          <Heading as="h1" className={styles.title}>
            {hdTitle}
          </Heading>
        )}

        {hdContent && <div className={styles.content}>{hdContent}</div>}

        {hdActions && hdActions.length > 0 && (
          <div className={styles.actions}>{hdActions.map(renderAction)}</div>
        )}
      </header>
    </>
  );
};

Header.displayName = 'Header';
