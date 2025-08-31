'use client';
import React, { createContext, useContext, ReactNode, useMemo, useState } from 'react';

import styles from './Table.module.scss';
import clsx from 'clsx';

type TableDirection = 'horizontal' | 'vertical';

type SortDir = 'asc' | 'desc' | null;
type SortState = { key: string | null; dir: SortDir };

interface TableContextType {
  direction: TableDirection;
  sortable?: boolean;
  sort?: SortState;
  setSort?: (next: SortState) => void;
  first?: 'asc' | 'desc';
}

const TableContext = createContext<TableContextType | null>(null);

const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) throw new Error('Table 컴파운드 컴포넌트는 반드시 Table 내에서 사용해야 합니다.');
  return context;
};

/** table */
interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  /** variant
   * - borderless : border 없는 스타일 (ex- 상품상세 > 상세정보탭 > 실측사이즈, 상품상세 > 옥션테이블)
   * - plain : 컬럼 배경색, border 모두 없는 미니멀한 스타일 (ex- 상품상세 > 상세정보탭 > 식품정보)
   * - detailTop : 상품상세 상단에서 가격 위에 표기되는 스타일
   */
  variant?: 'borderless' | 'plain' | 'detailTop';
  /** variant: spacing 커스텀 / true는 css에 설정된 기본값 사용 */
  borderSpacing?:
    | true
    | {
        x?: number;
        y?: number;
      };
  /** 가로형/세로형 */
  direction?: TableDirection;
  children: ReactNode;
  className?: string;
  /** 정렬(옵션) */
  sortable?: boolean;
  firstSort?: 'asc' | 'desc';
  sort?: SortState;
  onSortChange?: (next: SortState) => void;
  defaultSort?: SortState;
}

const Table = ({
  variant,
  direction = 'horizontal',
  borderSpacing,
  children,
  className,
  sortable = false,
  firstSort = 'desc',
  sort,
  onSortChange,
  defaultSort = { key: null, dir: null },
  ...rest
}: TableProps) => {
  let style: React.CSSProperties | undefined;

  if (borderSpacing === true) {
    style = undefined;
  } else if (borderSpacing) {
    // 객체일 때 각각 x, y가 있으면 적용
    style = {
      ...(borderSpacing.x !== undefined && { '--table-border-spacing-x': `${borderSpacing.x}px` }),
      ...(borderSpacing.y !== undefined && { '--table-border-spacing-y': `${borderSpacing.y}px` }),
    } as React.CSSProperties;
  } else {
    style = undefined;
  }

  // 테이블에 border-spacing이 적용되는 케이스
  const wrapper =
    borderSpacing ||
    variant === 'plain' ||
    (direction === 'horizontal' && variant === 'borderless');

  // 제어/비제어 정렬 상태
  const controlled = typeof sort !== 'undefined';
  const [innerSort, setInnerSort] = useState<SortState>(defaultSort);
  const sortState = controlled ? (sort as SortState) : innerSort;
  const setSort = (next: SortState) => {
    if (!controlled) setInnerSort(next);
    onSortChange?.(next);
  };

  return (
    <TableContext.Provider
      value={{ direction, sortable, sort: sortState, setSort, first: firstSort }}
    >
      <div
        className={clsx(
          styles.root,
          direction && styles[direction],
          variant && styles[variant],
          wrapper && styles.wrapper,
          sortable && styles.sortable,
          className
        )}
        style={style}
      >
        <table className={styles.table} {...rest}>
          {children}
        </table>
      </div>
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
  return <thead className={clsx(styles.thead, className)}>{children}</thead>;
};

/** tbody (sortable=true일 때만 정렬) */
interface TableBodyProps {
  children: ReactNode;
  className?: string;
}

type CellElement = React.ReactElement<
  React.TdHTMLAttributes<HTMLTableCellElement> & {
    children?: ReactNode;
    dataKey?: string;
    sortValue?: string | number | Date | boolean | null;
  }
>;

type RowElement = React.ReactElement<{
  children?: ReactNode;
}>;

// 텍스트 안전 추출
const textOf = (node: React.ReactNode): string => {
  if (node == null) return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  if (React.isValidElement(node)) {
    return textOf((node as React.ReactElement<{ children?: React.ReactNode }>).props?.children);
  }
  return '';
};

const TableBody = ({ children, className }: TableBodyProps) => {
  const { sortable, sort } = useTableContext();

  // <tr>만 추출 (공백 텍스트 제거 → hydration 안정)
  const rows = useMemo(() => {
    return React.Children.toArray(children).filter(React.isValidElement) as RowElement[];
  }, [children]);

  // 해당 행에서 정렬값 추출: dataKey 매칭, sortValue 우선
  const pickSortValue = (rowEl: RowElement, key: string | null): unknown => {
    if (!key) return null;
    const cells = React.Children.toArray(rowEl.props?.children).filter(
      React.isValidElement
    ) as CellElement[];

    for (const cell of cells) {
      const p = cell.props as CellElement['props'];
      if (p.dataKey === key) {
        return p.sortValue ?? textOf(p.children);
      }
    }
    return null;
  };

  const sortedChildren = useMemo(() => {
    if (!sortable || !sort?.key || !sort?.dir) return rows; // 초기: 정렬 없음
    const sign = sort.dir === 'asc' ? 1 : -1;

    const toNum = (v: unknown) => {
      if (typeof v === 'number') return v;
      const raw = String(v);
      const stripped = raw.replace(/[^\d.-]/g, '');
      // 숫자 문자가 전혀 없으면 숫자 비교를 포기(= NaN)
      if (stripped.trim() === '' || stripped === '-' || stripped === '.' || stripped === '-.')
        return NaN;
      return Number(stripped);
    };
    return [...rows].sort((ra, rb) => {
      const va = pickSortValue(ra, sort.key);
      const vb = pickSortValue(rb, sort.key);

      if (va == null && vb == null) return 0;
      if (va == null) return 1;
      if (vb == null) return -1;

      if (va instanceof Date || vb instanceof Date) {
        const ta = va instanceof Date ? va.getTime() : new Date(String(va)).getTime();
        const tb = vb instanceof Date ? vb.getTime() : new Date(String(vb)).getTime();
        return (ta - tb) * sign;
      }
      if (typeof va === 'boolean' || typeof vb === 'boolean') {
        return (Number(!!va) - Number(!!vb)) * sign;
      }

      const na = toNum(va);
      const nb = toNum(vb);
      if (!Number.isNaN(na) && !Number.isNaN(nb)) return (na - nb) * sign;

      return String(va).localeCompare(String(vb), 'ko-KR', { numeric: true }) * sign;
    });
  }, [rows, sortable, sort?.key, sort?.dir]);

  return <tbody className={clsx(styles.tbody, className)}>{sortedChildren}</tbody>;
};

/** tr (공백 텍스트 노드가 들어오면 제거) */
interface TableRowProps {
  children: ReactNode;
  className?: string;
  /** 행 하이라이트 */
  point?: boolean;
}
const TableRow = ({ children, className, point }: TableRowProps) => {
  const { direction } = useTableContext();
  const onlyCells = useMemo(
    () => React.Children.toArray(children).filter(React.isValidElement),
    [children]
  );
  return (
    <tr
      className={clsx(
        styles.tr,
        direction === 'vertical' && styles['tr-vertical'],
        point && styles['tr-point'],
        className
      )}
    >
      {onlyCells as React.ReactElement[]}
    </tr>
  );
};

/** td, th
 *  - dataKey: 이 셀이 어떤 컬럼의 값인지(헤더 sortKey와 매칭)
 *  - sortValue: 정렬에 사용할 실제 값(숫자/날짜/불리언/문자열). 없으면 children 텍스트에서 파싱
 */
interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  as?: 'td' | 'th';
  scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
  children: ReactNode;
  className?: string;
  rowHeader?: boolean;
  colHeader?: boolean;
  dataKey?: string;
  sortValue?: string | number | Date | boolean | null;
}

const TableCell = ({
  as,
  scope,
  children,
  colHeader,
  rowHeader,
  className,
  dataKey, // 정렬 매칭용 (TableBody에서만 사용)
  sortValue, // 정렬 값 (TableBody에서만 사용)
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

/** 정렬 가능한 헤더 셀 (옵션) */
interface SortCellProps
  extends Omit<TableCellProps, 'as' | 'colHeader' | 'rowHeader' | 'dataKey' | 'sortValue'> {
  sortKey: string;
  first?: 'asc' | 'desc';
  disabled?: boolean;
  children: React.ReactNode;
}
const TableSortCell = ({
  sortKey,
  first,
  disabled,
  children,
  className,
  ...rest
}: SortCellProps) => {
  const { sortable, sort, setSort, first: ctxFirst } = useTableContext();
  const active: SortDir = sort?.key === sortKey ? (sort?.dir ?? null) : null;
  const ariaSort = active === 'asc' ? 'ascending' : active === 'desc' ? 'descending' : 'none';
  const start = first ?? ctxFirst ?? 'desc';

  const interactive = !!setSort && sortable && !disabled;

  const toggle = () => {
    if (!interactive) return;
    if (active === null) setSort!({ key: sortKey, dir: start });
    else if (active === 'desc') setSort!({ key: sortKey, dir: 'asc' });
    else setSort!({ key: null, dir: null });
  };

  const onKeyDown: React.KeyboardEventHandler = (e) => {
    if (!interactive) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <TableCell
      as="th"
      colHeader
      aria-sort={ariaSort}
      onClick={interactive ? toggle : undefined}
      onKeyDown={interactive ? onKeyDown : undefined}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-pressed={interactive ? active !== null : undefined}
      aria-disabled={!interactive || undefined}
      className={clsx(className, styles.sortTh)}
      {...rest}
    >
      <span className={styles.sortBtn}>
        <span>{children}</span>
        <span className={styles.sortIcon} aria-hidden>
          <span className={clsx(styles.arrow, styles.asc, active === 'asc' && styles.active)} />
          <span className={clsx(styles.arrow, styles.desc, active === 'desc' && styles.active)} />
        </span>
      </span>
    </TableCell>
  );
};

// 컴파운드 할당
Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.SortCell = TableSortCell;
Table.Caption = TableCaption;
Table.ColGroup = TableColGroup;

Table.displayName = 'Table';
TableHead.displayName = 'Table.Head';
TableBody.displayName = 'Table.Body';
TableRow.displayName = 'Table.Row';
TableCell.displayName = 'Table.Cell';
TableSortCell.displayName = 'Table.SortCell';
TableCaption.displayName = 'Table.Caption';
TableColGroup.displayName = 'Table.ColGroup';

export { Table };
