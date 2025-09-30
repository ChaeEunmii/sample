'use client';
import React, { createContext, useContext, ReactNode } from 'react';

import styles from './Table.module.scss';
import clsx from 'clsx';

type TableDirection = 'horizontal' | 'vertical';

interface TableContextType {
  direction: TableDirection;
}

const TableContext = createContext<TableContextType | null>(null);

const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) throw new Error('Table 컴파운드 컴포넌트는 반드시 Table 내에서 사용해야 합니다.');
  return context;
};

/** table */
interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  direction?: TableDirection;
  children: ReactNode;
  className?: string;
}
const Table = ({ direction = 'horizontal', children, className, ...rest }: TableProps) => {
  return (
    <TableContext.Provider value={{ direction }}>
      <table className={clsx(styles.root, className, direction && styles[direction])} {...rest}>
        {children}
      </table>
    </TableContext.Provider>
  );
};

/** caption */
interface TableCaptionProps {
  children: ReactNode;
  className?: string;
}
const TableCaption = ({ children, className }: TableCaptionProps) => (
  <caption className={clsx(styles.caption, className)}>{children}</caption>
);

/** colgroup */
interface TableColGroupProps {
  children: ReactNode;
  className?: string;
}
const TableColGroup = ({ children, className }: TableColGroupProps) => (
  <colgroup className={clsx(styles.colgroup, className)}>{children}</colgroup>
);

/** thead */
interface TableHeadProps {
  children: ReactNode;
  className?: string;
}
const TableHead = ({ children, className }: TableHeadProps) => {
  const { direction } = useTableContext();
  // vertical은 thead를 렌더하지 않음
  if (direction === 'vertical') return null;
  return <thead className={clsx(styles.thad, className)}>{children}</thead>;
};

/** tbody */
interface TableBodyProps {
  children: ReactNode;
  className?: string;
}
const TableBody = ({ children, className }: TableBodyProps) => (
  <tbody className={clsx(styles.tbody, className)}>{children}</tbody>
);

/** tr */
interface TableRowProps {
  children: ReactNode;
  className?: string;
}
const TableRow = ({ children, className }: TableRowProps) => {
  const { direction } = useTableContext();
  return (
    <tr className={clsx(styles.tr, direction === 'vertical' && styles['tr-vertical'], className)}>
      {children}
    </tr>
  );
};

/** td, th */
interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  as?: 'td' | 'th';
  scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
  children: ReactNode;
  className?: string;
  rowHeader?: boolean;
  colHeader?: boolean;
}

const TableCell = ({
  as,
  scope,
  children,
  colHeader,
  rowHeader,
  className,
  ...rest
}: TableCellProps) => {
  const { direction } = useTableContext();

  let Cell: 'td' | 'th';
  let renderScope: 'row' | 'col' | 'rowgroup' | 'colgroup' | undefined;

  // colHeader/rowHeader 우선
  if (direction === 'horizontal' && colHeader) {
    Cell = 'th';
    renderScope = 'col';
  } else if (direction === 'vertical' && rowHeader) {
    Cell = 'th';
    renderScope = 'row';
  } else if (as) {
    Cell = as;
    renderScope = scope;
  } else {
    Cell = 'td';
    renderScope = undefined;
  }

  return (
    <Cell className={className} scope={Cell === 'th' ? renderScope : undefined} {...rest}>
      {children}
    </Cell>
  );
};

// 컴파운드 할당
Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Caption = TableCaption;
Table.ColGroup = TableColGroup;

Table.displayName = 'Table';
TableHead.displayName = 'Table.Head';
TableBody.displayName = 'Table.Body';
TableRow.displayName = 'Table.Row';
TableCell.displayName = 'Table.Cell';
TableCaption.displayName = 'Table.Caption';
TableColGroup.displayName = 'Table.ColGroup';

export { Table };
