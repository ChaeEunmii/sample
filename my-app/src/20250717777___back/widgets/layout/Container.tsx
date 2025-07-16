// 라이브러리
import React from 'react';
// 컴포넌트
import { Header, HeaderProps } from './Header';
// 스타일
import styles from './Layout.module.scss';
import clsx from 'clsx';

type ContainerProps = HeaderProps & {
  children: React.ReactNode;
  flush?: boolean;
  mode?: 'gray'; // 배경색 지정시 추가하여 사용
};

export const Container: React.FC<ContainerProps> = ({
  children,
  flush = false,
  mode,
  ...headerProps
}) => {
  return (
    <>
      <Header {...headerProps} />
      <main
        id="main"
        className={clsx(styles.main, flush && styles.flush, mode && styles[mode])}
        data-screen={headerProps.type}
      >
        {children}
      </main>
    </>
  );
};

interface ContentsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Contents = ({ children, className, ...rest }: ContentsProps) => {
  return (
    <div className={clsx(styles.contents, className)} {...rest}>
      {children}
    </div>
  );
};
