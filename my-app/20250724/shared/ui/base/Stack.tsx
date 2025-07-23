import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Stack.module.scss';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'base' | 'field' | 'between' | 'end';
  vertical?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ type = 'base', vertical, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          styles.root,
          type !== 'base' && styles[type],
          vertical && 'ncp-align-vertical',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';
