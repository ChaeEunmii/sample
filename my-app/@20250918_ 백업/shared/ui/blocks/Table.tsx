'use client';
import React, { createContext, useContext, ReactNode, useMemo, useState } from 'react';

import styles from './Table.module.scss';
import clsx from 'clsx';

type TableDirection = 'horizontal' | 'vertical';

// 정렬 방향 타입: 'asc'(오름차순) | 'desc'(내림차순) | null(정렬 없음)
type SortDir = 'asc' | 'desc' | null;
// 현재 정렬 상태: key(정렬 기준 컬럼) + dir(정렬 방향)
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
   */
  variant?: 'borderless' | 'plain';
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
  /** 정렬 기능 사용 여부 */
  sortable?: boolean;
  /** 첫 클릭 시 정렬 방향 */
  firstSort?: 'asc' | 'desc';
  /** 외부 제어용 정렬 상태 */
  sort?: SortState;
  /** 정렬 변경 콜백 */
  onSortChange?: (next: SortState) => void;
  /** 비제어 모드 초기 정렬 값 */
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

  // 제어 모드 여부(sort prop 존재)
  const controlled = typeof sort !== 'undefined';
  // 비제어 모드에서 사용할 내부 정렬 상태 (초기값은 defaultSort)
  const [innerSort, setInnerSort] = useState<SortState>(defaultSort);
  // 실제 정렬 상태: 제어 모드면 외부 sort, 아니면 내부 innerSort 사용
  const sortState = controlled ? (sort as SortState) : innerSort;

  // 정렬 상태를 변경하는 함수 (제어 모드면 콜백만, 비제어 모드면 내부 상태도 업데이트)
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
  return <thead className={clsx(styles.thad, className)}>{children}</thead>;
};

/** tbody */
interface TableBodyProps {
  children: ReactNode;
  className?: string;
  visibleCount?: number; // 행 개수 제한 (더보기 버튼과 연동)
}

// 셀(td) 엘리먼트 타입: 기본 td 속성 + 정렬용 dataKey/sortValue
type CellElement = React.ReactElement<
  React.TdHTMLAttributes<HTMLTableCellElement> & {
    children?: ReactNode;
    dataKey?: string; // 정렬 기준으로 쓰일 키
    sortValue?: string | number | Date | boolean | null; // 실제 정렬 값
  }
>;

// 행(tr) 엘리먼트 타입: 자식으로 셀들을 가짐
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

const TableBody = ({ children, className, visibleCount }: TableBodyProps) => {
  // Table 컴포넌트에서 내려준 정렬 관련 값들(sortable, sort) 가져오기
  const { sortable, sort } = useTableContext();

  // <tr> 배열 추출 (정렬 켜진 경우만, 아니면 빈 배열)
  const rows = useMemo(() => {
    if (!sortable) return [];
    return React.Children.toArray(children).filter(React.isValidElement) as RowElement[];
  }, [children, sortable]);

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

  // 행(rows)을 데이터 타입별 규칙에 맞춰 정렬
  const sortedChildren = useMemo(() => {
    // 정렬 옵션이 꺼져있거나 기준/방향이 없으면 정렬 안 하고 원본 그대로 반환
    if (!sortable || !sort?.key || !sort?.dir) return rows;
    const sign = sort.dir === 'asc' ? 1 : -1; // 정렬 방향: asc(1) / desc(-1)

    // 값이 숫자처럼 보이면 숫자로 변환
    const toNum = (v: unknown) => {
      if (typeof v === 'number') return v;
      const raw = String(v);
      const stripped = raw.replace(/[^\d.-]/g, '');
      // 숫자 문자가 전혀 없으면 숫자 비교를 포기(= NaN)
      if (stripped.trim() === '' || stripped === '-' || stripped === '.' || stripped === '-.')
        return NaN;
      return Number(stripped);
    };

    // 행 배열(rows)을 복사해서 정렬
    return [...rows].sort((ra, rb) => {
      // 두 행에서 정렬 기준값 추출
      const va = pickSortValue(ra, sort.key);
      const vb = pickSortValue(rb, sort.key);
      // 값이 없을 때 처리: null/undefined는 항상 뒤로
      if (va == null && vb == null) return 0;
      if (va == null) return 1;
      if (vb == null) return -1;
      // 날짜 비교 (Date 객체 or 날짜 문자열)
      if (va instanceof Date || vb instanceof Date) {
        const ta = va instanceof Date ? va.getTime() : new Date(String(va)).getTime();
        const tb = vb instanceof Date ? vb.getTime() : new Date(String(vb)).getTime();
        return (ta - tb) * sign;
      }
      // 불리언 비교 (true=1, false=0)
      if (typeof va === 'boolean' || typeof vb === 'boolean') {
        return (Number(!!va) - Number(!!vb)) * sign;
      }
      // 숫자 비교
      const na = toNum(va);
      const nb = toNum(vb);
      if (!Number.isNaN(na) && !Number.isNaN(nb)) return (na - nb) * sign;
      // 그 외엔 문자열 비교
      return String(va).localeCompare(String(vb), 'ko-KR', { numeric: true }) * sign;
    });
  }, [rows, sortable, sort?.key, sort?.dir]);

  // 정렬된 전체 행 중에서 visibleCount 만큼만 잘라서 렌더(값 없으면 전체 표시)
  const renderChildren =
    sortable && typeof visibleCount === 'number'
      ? sortedChildren.slice(0, visibleCount)
      : sortedChildren;

  // 정렬 또는 visibleCount 옵션 있으면 가공된 행, 없으면 children
  const hasSlice = typeof visibleCount === 'number';
  const bodyChildren = sortable
    ? renderChildren
    : hasSlice
      ? React.Children.toArray(children).slice(0, visibleCount)
      : null;

  return <tbody className={clsx(styles.tbody, className)}>{bodyChildren ?? children}</tbody>;
};

/** tr */
interface TableRowProps {
  children: ReactNode;
  className?: string;
  /** 행 하이라이트 */
  point?: boolean;
}
const TableRow = ({ children, className, point }: TableRowProps) => {
  const { direction } = useTableContext();
  // 기존 children에서 td/th만 남겨 정렬 시 안전하게 사용
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
