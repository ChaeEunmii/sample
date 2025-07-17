'use client';
import clsx from 'clsx';
// 라이브러리
import React, { useState, createContext, useContext } from 'react';
// 컴포넌트
import { Icon, IconSize } from '@shared/ui';
// 스타일
import styles from './Collapse.module.scss';

// Context 타입 정의
interface CollapseContextType {
  isActive: boolean;
  toggleCollapse: () => void;
  variant?: 'line' | string;
  defaultSummary?: boolean;
  defaultSuffix?: boolean;
}
const CollapseContext = createContext<CollapseContextType | null>(null);

const useCollapseContext = () => {
  const context = useContext(CollapseContext);
  if (!context) {
    throw new Error('Collapse 컴파운드 컴포넌트는 Collapse 내에서 사용해야 합니다.');
  }
  return context;
};

interface CollapseProps {
  /** collaps 스타일
   * graybox : 컨트롤(흰색), 컨텐츠(회색) ex) 주문 완료 >  결제 금액
   * fullGrayBox : 전체 회색 박스 형태 ex) 상품 상세 상단 > 혜택 계산기(최대혜택가)
   * clear : line 등 아무것도 없는 깨끗한 형태 ex) 상품 상세 > 추가 혜택
   * inner : collapse 내부에 들어가는 inner collapse 형태
   *          ex) 상품 상세 > 추가 혜택 > 내부
   * line: 하단에 8px 라인 포함 ex) 주문서
   * borderTop: 상단에 1px border-top 포함 ex) 일반 장바구니 > 배송지 설정 > N번째 배송지
   * section: CollapseControl 상하 패딩 20px 포함 ex)
   * normal: CollapseControl에 하단 패딩 + border-bottom 포함 ex) 주문 완료 > 사은품 신청 > 사은품 정보
   * default: CollapseControl에 padding, border 없음 ex) AI 추천 메세지
   */
  variant?:
    | 'line'
    | 'borderTop'
    | 'section'
    | 'graybox'
    | 'normal'
    | 'default'
    | 'fullGrayBox'
    | 'clear'
    | 'inner'
    | string;
  /** margin-top 크기 */
  marginTop?: '1';
  /** 처음부터 열려 있는지 여부 */
  defaultOpen?: boolean;
  /** 오른쪽 문구가 항상 보이는지 여부 */
  defaultSuffix?: boolean;
  /** variant가 line일 경우, 컨텐츠 요약 내용 영역이 항상 보이는지 여부 */
  defaultSummary?: boolean;
  /** 자식 노드 */
  children: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
}

const Collapse = ({
  variant,
  marginTop,
  children,
  defaultOpen = false,
  className,
  defaultSummary = false,
  defaultSuffix = false,
}: CollapseProps) => {
  const [isActive, setIsActive] = useState(defaultOpen);

  const toggleCollapse = () => {
    setIsActive((prev) => !prev);
  };

  const contextValue: CollapseContextType = {
    variant,
    isActive,
    toggleCollapse,
    defaultSummary,
    defaultSuffix,
  };

  return (
    <CollapseContext.Provider value={contextValue}>
      <article
        className={clsx(
          styles.root,
          variant && styles[variant],
          marginTop && styles[`marginTop${marginTop}`],
          className
        )}
      >
        {children}
      </article>
    </CollapseContext.Provider>
  );
};

interface CollapseControlProps {
  handleClick?: (isActive: boolean) => void;
  suffix?: React.ReactNode;
  children: React.ReactNode;
  /** arrow 아이콘 사이즈 */
  arrowSize?: IconSize;
  side?: React.ReactNode;
  slot?: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
}

const CollapseControl = ({
  suffix,
  children,
  arrowSize = 'medium',
  side,
  slot,
  className,
  handleClick,
}: CollapseControlProps) => {
  const { isActive, toggleCollapse, variant, defaultSummary, defaultSuffix } = useCollapseContext();

  const onClick = () => {
    const nextState = !isActive; // 토글 후 상태를 먼저 계산
    toggleCollapse();
    handleClick?.(nextState); // 외부에 토글 후 상태 전달
  };

  return (
    <div className={clsx(styles.controls, className)}>
      <button type="button" onClick={onClick} className={styles.control}>
        {variant === 'line' ||
        variant === 'section' ||
        variant === 'graybox' ||
        variant === 'normal' ||
        variant === 'fullGrayBox' ||
        variant === 'default' ? (
          <>
            <div className={styles.titleArea}>
              {children}
              {side && side}
            </div>
            {suffix && (!isActive || defaultSuffix) && (
              <div className={styles.suffix}>{suffix}</div>
            )}
          </>
        ) : (
          <>{children}</>
        )}
        <Icon
          name={isActive ? 'arrowUp' : 'arrowDown'}
          label={isActive ? '닫기' : '열기'}
          size={arrowSize}
        />
      </button>
      {variant === 'line' || variant === 'section' || variant === 'graybox' || variant === 'normal'
        ? (defaultSummary || !isActive) && <div className={styles.summaryBox}>{slot}</div>
        : slot}
    </div>
  );
};

interface CollapseContentProps {
  children: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
}

const CollapseContent = ({ children, className }: CollapseContentProps) => {
  const { isActive } = useCollapseContext();

  return (
    <div className={clsx(styles.content, className)} data-state={isActive ? 'show' : 'hide'}>
      {children}
    </div>
  );
};

// Compound Component
Collapse.Control = CollapseControl;
Collapse.Content = CollapseContent;

// displayName
Collapse.displayName = 'Collapse';
CollapseControl.displayName = 'Collapse.Control';
CollapseContent.displayName = 'Collapse.Content';

export { Collapse };
