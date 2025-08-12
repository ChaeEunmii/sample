'use client';

import React, { useId, createContext, useContext } from 'react';
import clsx from 'clsx';
import styles from './FormArea.module.scss';
import { Text } from '../base/Text';

type FormType = 'horizontal' | 'vertical' | 'stacked';

interface FormAreaProps {
  /** 입력 필드와 레이블 배치 (수평, 수직, type이 없는경우 field만 출력) */
  type?: FormType;
  /** 폼을 구성하는 컴포넌트 */
  children: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
  /** 사이 간격 크기
   * 1(24), 2(40), 3(32), 4(16)
   */
  gap?: '1' | '2' | '3' | '4';
}

interface FormItemProps {
  /** 폼 항목의 레이블(label 태그) */
  label?: React.ReactNode;
  /** 정보 항목의 제목(span 태그) */
  title?: React.ReactNode;
  /** 레이블(제목) 바로 뒤에 붙는 영역 */
  suffix?: React.ReactNode;
  /** 레이블(제목) 우측 사이드 slot */
  side?: React.ReactNode;
  /** 필수 입력 필드 여부 */
  required?: boolean;
  /** 설명 텍스트 */
  desc?: React.ReactNode;
  /** 에러 메시지 */
  error?: React.ReactNode;
  /** 폼 항목의 입력 컴포넌트 */
  children: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
  /** 레이블 클래스명 */
  labelClassName?: string;
  /** 입력 필드 래퍼 클래스명 */
  fieldClassName?: string;
  /** 레이블(제목)의 형태 */
  labelType?: 'default' | 'heading';
  /**
   * 요소의 ID (제공하지 않으면 자동 생성)
   * 이 ID는 label의 htmlFor와 연결됨
   */
  id?: string;
}

interface FormItemSlotProps {
  /** 기타 정보 내용 */
  children: React.ReactNode;
}

// FormItem 컴포넌트의 타입 정의
interface FormItemComponent {
  (props: FormItemProps): React.ReactElement;
  Slot: React.FC<FormItemSlotProps>;
  displayName?: string;
}

const FormContext = createContext<{ type?: FormType }>({});

export const FormArea = ({ type, children, className, gap }: FormAreaProps) => {
  return (
    <FormContext.Provider value={{ type }}>
      <div
        className={clsx(styles.root, type && styles[type], gap && styles[`gap${gap}`], className)}
      >
        {children}
      </div>
    </FormContext.Provider>
  );
};

// FormItemSlot 컴포넌트 먼저 정의
const FormItemSlot = ({ children }: FormItemSlotProps) => {
  return <div className={styles.slot}>{children}</div>;
};

FormItemSlot.displayName = 'FormItem.Slot';

export const FormItem = (({
  label,
  title,
  suffix,
  side,
  required = false,
  desc,
  error,
  children,
  className,
  labelClassName,
  fieldClassName,
  labelType = 'default',
  id: propId,
}: FormItemProps) => {
  // FormContext에서 type 값을 가져옴
  const { type } = useContext(FormContext);

  // 외부에서 제공된 ID가 있으면 사용, 없으면 생성된 ID 사용
  const generatedId = useId();
  const id = propId || `field-${generatedId}`;

  // children에서 FormItem.Slot과 다른 컴포넌트들을 분리
  const slotComponents: React.ReactNode[] = [];
  const fieldComponents: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && (child.type as any)?.displayName === 'FormItem.Slot') {
      slotComponents.push(child);
    } else {
      fieldComponents.push(child);
    }
  });

  // 첫 번째 field 컴포넌트에 id 부여하되, Stack인 경우 내부 첫 번째 요소에 부여
  const fieldComponentsWithId = React.Children.map(fieldComponents, (child, index) => {
    if (!React.isValidElement(child)) return child;

    const typedChild = child as React.ReactElement<any>;

    if (index === 0) {
      const childType = typedChild.type as { displayName?: string };
      const isStack = childType?.displayName === 'Stack';

      if (isStack && typedChild.props?.children) {
        let stackIdApplied = false;

        const newStackChildren = React.Children.map(typedChild.props.children, (stackChild) => {
          if (stackIdApplied || !React.isValidElement(stackChild)) {
            return stackChild;
          }

          stackIdApplied = true;
          return React.cloneElement(stackChild as React.ReactElement<{ id?: string }>, { id });
        });

        return React.cloneElement(typedChild, {
          children: newStackChildren,
        });
      }

      return React.cloneElement(typedChild, { id });
    }

    return child;
  });

  const renderHelpText = () => {
    return (
      <>
        {desc && <Text variant="desc">{desc}</Text>}
        {error && <Text variant="error">{error}</Text>}
      </>
    );
  };

  return type ? (
    // type이 있을 때 - label과 field 구조
    <div className={clsx(styles.item, className)}>
      {(label || title) && (
        <div
          className={clsx(
            styles.title,
            labelType !== 'default' && styles[labelType],
            labelClassName
          )}
        >
          {label ? (
            // label이 있는 경우 label 태그 사용
            <Text
              as="label"
              size={labelType === 'heading' ? '7' : '5'}
              weight={labelType === 'heading' ? 'bold' : 'medium'}
              htmlFor={id}
            >
              {label}
              {required && (
                <span className={styles.required}>
                  <em className="ncp-blind">필수입력</em>
                </span>
              )}
            </Text>
          ) : (
            // title이 있고 label이 없는 경우 span 태그 사용
            <span className={styles.label}>
              {title}
              {required && (
                <span className={styles.required}>
                  <em className="ncp-blind">필수입력</em>
                </span>
              )}
            </span>
          )}
          {suffix}
          {side && <div className={styles.side}>{side}</div>}
        </div>
      )}
      <div className={clsx(styles.field, fieldClassName)}>
        {fieldComponentsWithId}
        {(desc || error) && <>{renderHelpText()}</>}
        {slotComponents.length > 0 && slotComponents}
      </div>
    </div>
  ) : (
    // type이 없을 때 - field만 렌더링
    <div className={clsx(styles.field, fieldClassName, className)}>
      {fieldComponentsWithId}
      {(desc || error) && <>{renderHelpText()}</>}
      {slotComponents.length > 0 && slotComponents}
    </div>
  );
}) as FormItemComponent;

// FormItem에 Slot 연결
FormItem.Slot = FormItemSlot;
FormItem.displayName = 'FormItem';

// displayName 설정
FormArea.displayName = 'FormArea';
