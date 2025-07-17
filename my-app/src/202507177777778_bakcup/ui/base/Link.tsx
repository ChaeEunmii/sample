import { forwardRef } from 'react';
import RouterLink from 'next/link';
import clsx from 'clsx';
import styles from './Link.module.scss';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** router link 또는 a 태그의 URL */
  href: string;
  /** 컴포넌트의 태그 타입 */
  as?: 'route' | 'a';
  /** 타입 */
  type?: 'inline' | 'block';
  /** 문장 내에 링크 표시 */
  accent?: boolean;
  /** 추가 클래스 이름 */
  className?: string;
  /** 타겟 속성 (_blank일 때 title, rel 속성 추가) */
  target?: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { children, href, as = 'route', type = 'inline', accent, className, target, onClick, ...props },
    ref
  ) => {
    const isExternal = href.startsWith('http') || href.startsWith('//');
    const Tag = !isExternal || as === 'route' ? RouterLink : ('a' as const);

    const newTabProps =
      target === '_blank'
        ? {
            rel: 'noopener noreferrer',
            title: '새 창 열림',
          }
        : {};

    const buttonProps = onClick
      ? {
          role: 'button',
          onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            onClick(e);
          },
          onKeyDown: (e: React.KeyboardEvent<HTMLAnchorElement>) => {
            if (e.key === ' ' || e.key === 'Spacebar') {
              e.preventDefault();
              onClick(e as unknown as React.MouseEvent<HTMLAnchorElement>);
            }
          },
        }
      : {};

    return (
      <Tag
        href={href}
        className={clsx(type && styles[type], accent && styles.accent, className)}
        ref={ref}
        target={target}
        {...buttonProps}
        {...newTabProps}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Link.displayName = 'Link';
