'use client';

import { useEffect, useState } from 'react';
import { Checkbox, IconButton, Text } from '@shared/ui';
import TermsDetailDialog from '@views/policy/TermsDetailDialog';
import clsx from 'clsx';
import styles from './AgreementGroup.module.scss';
export interface AgreementItemProps {
  id: string;
  label?: string;
  content?: React.ReactNode;
  header?: React.ReactNode;
  headerDesc?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  onlyRead?: boolean; // 체크박스 없는 읽기 유형의 경우
  required?: boolean; // 필수 체크 일 경우 (validateMode로 체크)
  children?: AgreementItemProps[];
}

interface AgreementGroupProps {
  variant?: 'type1' | 'type2' | 'type3';
  data: AgreementItemProps;
  checked: boolean;
  onChange: (id: string, checked: boolean) => void;
  depth?: number;
  allStates: Record<string, boolean>;
  className?: string;
  disabledStates?: Record<string, boolean>;
  readOnlyMode?: boolean; // 자식 전체를 읽기 전용으로 표시하는 모드
  validateMode?: boolean; // 부모에서 트리거할 검증 모드 (데이터 필수 요소검사)
}

export const AgreementGroup: React.FC<AgreementGroupProps> = ({
  variant = 'type1',
  data,
  checked,
  onChange,
  depth = 0,
  allStates,
  className,
  disabledStates = {}, // 기본값 빈 객체로 설정
  validateMode,
  readOnlyMode,
}) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const isDisabled = !!disabledStates[data.id]; // 항목별 disabled 여부

  // variant type 체크
  const isType1 = variant === 'type1';
  const isType2 = variant === 'type2';
  const isType3 = variant === 'type3';

  // 최상단 전체 체크박스 여부
  const isTopLevel = !data.content && depth === 0;
  // 전체 체크박스 설정
  const allCheckBoxed = isTopLevel && (isType1 || isType2); // type1, type2 일때 전체체크박스 boxed 스타일
  const allCheckType3 = isTopLevel && isType3; // type3 일때 전체체크박스 스타일

  // 자식들의 체크 상태에 기반한 부모 체크박스 상태 업데이트
  useEffect(() => {
    // 자식이 없는 경우 처리
    if (!data.children || data.children.length === 0) return;

    // disabled 아닌 애들만 체크 대상에 포함
    const validChildren = data.children.filter((child) => !disabledStates?.[child.id]);

    // 모든 자식이 체크되었는지 확인
    const allChildrenChecked = validChildren.every((child) => allStates[child.id]);
    if (validChildren.length === 0) return; // 다 disabled면 아무 것도 안 함

    // 자식이 모두 체크되었지만 부모는 아직 체크되지 않은 경우
    if (allChildrenChecked && !checked) {
      onChange(data.id, true);
    }

    // 자식 중 하나라도 체크 해제되었는데 부모가 체크된 경우
    if (!allChildrenChecked && checked) {
      onChange(data.id, false);
    }
  }, [data.children, allStates, checked, data.id, onChange]);

  // 하위 필수 항목 중 미동의 항목이 있는지 판단
  const hasUncheckedRequired = (item: AgreementItemProps): boolean => {
    if (item.required && !allStates[item.id]) return true;
    if (item.children) {
      return item.children.some((child) => hasUncheckedRequired(child));
    }
    return false;
  };

  // 최상단 체크박스를 제외한 나머지는 읽기 전용 상태인지 여부
  const isReadOnly = !isTopLevel && (readOnlyMode || data.onlyRead);
  // 필수 항목 검증 시 표시할 텍스트 조건
  // - readOnlyMode일 때는 자식 검사 없이 최상단 체크박스 상태만 확인
  // - 그렇지 않은 경우에는 자식 항목들까지 모두 검사
  const showRequiredText =
    validateMode &&
    ((readOnlyMode && isTopLevel && !checked) || (!readOnlyMode && hasUncheckedRequired(data)));

  // 부모 체크박스 변경 핸들러
  const handleCheckChange = (newChecked: boolean) => {
    if (isDisabled) return; // disabled 상태이면 무시

    onChange(data.id, newChecked);

    // 부모가 체크/해제되면 모든 자식도 같은 상태로 변경
    if (data.children && data.children.length) {
      cascadeCheckState(data.children, newChecked);
    }
  };

  // 자식들에게 체크 상태를 재귀적으로 전파하는 함수
  const cascadeCheckState = (children: AgreementItemProps[], newChecked: boolean) => {
    children.forEach((child) => {
      const isChildDisabled = !!disabledStates[child.id];

      // 자식이 비활성화되어 있지 않다면 상태 변경
      if (!isChildDisabled) {
        onChange(child.id, newChecked);
        // 자식이 자식을 갖고 있다면 재귀 호출 (여기서도 isChildDisabled가 true면 무시)
        if (child.children && child.children.length) {
          cascadeCheckState(child.children, newChecked);
        }
      }
    });
  };

  // 자식 렌더링 함수
  const renderChildren = () => {
    if (!data.children || data.children.length === 0) return null;
    const isCurrentDisabled = !!disabledStates[data.id]; // 부모가 disabled인지

    return (
      <ul className={clsx(styles.child)}>
        {data.children.map((child) => {
          const childDisabled = isCurrentDisabled || !!disabledStates[child.id];

          return (
            <AgreementGroup
              variant={variant}
              key={child.id}
              data={child}
              checked={allStates[child.id]}
              onChange={onChange}
              depth={depth + 1}
              allStates={allStates}
              disabledStates={{
                ...disabledStates,
                [child.id]: childDisabled,
              }}
              validateMode={validateMode}
              readOnlyMode={readOnlyMode}
            />
          );
        })}
      </ul>
    );
  };

  const renderItem = () => (
    <>
      {data.label && (
        <div
          className={clsx(
            styles.check,
            allCheckType3 && styles.allCheckType3,
            showRequiredText && isTopLevel && styles.showRequiredText
          )}
        >
          {!isReadOnly ? (
            <>
              <Checkbox
                label={data.label}
                checked={checked}
                onChange={(e) => handleCheckChange(e.target.checked)}
                disabled={isDisabled}
                variant={allCheckBoxed ? 'boxed' : undefined}
                className={clsx(styles.agreeCheckBox, allCheckBoxed && styles['boxed'])}
              />
              {/* 여기서 필수 체크 안 된 경우 메시지 띄우기 */}
              {isTopLevel && showRequiredText && (
                <Text as="strong" color="alert" className={styles.requiredTxt}>
                  약관에 동의해 주세요.
                </Text>
              )}
            </>
          ) : (
            <>
              {/* 체크박스가 없는 읽기유형 */}
              <p className={styles.onlyReadText}>{data.label}</p>
            </>
          )}
          {!isType2 && data.content && (
            <IconButton
              name="arrowRight"
              size={'medium'}
              className={styles.detailBtn}
              onClick={() => setDialogOpen(true)}
              aria-label="약관 자세히 보기"
            />
          )}
        </div>
      )}
    </>
  );

  return (
    <>
      {depth === 0 ? (
        // 항목 그룹
        <div className={clsx(styles.root, styles[variant], className)}>
          {data.header && (
            <div className={styles.headTxt}>
              {data.header}
              {data.headerDesc && <span>{data.headerDesc}</span>}
            </div>
          )}
          {data.label && renderItem()}
          {renderChildren()}
          {data.footer && <p className={styles.footerTxt}>{data.footer}</p>}
        </div>
      ) : (
        // 동의 항목
        <li className={clsx(styles[`${data.className}`], data.required && styles.required)}>
          {data.header && (
            <div className={styles.headTxt}>
              {data.header}
              {data.headerDesc && <span>{data.headerDesc}</span>}
            </div>
          )}
          {renderItem()}
          {isType2 && data.content && <div className={styles.termsBox}>{data.content}</div>}
          {renderChildren()}
          {data.footer && <div className={styles.footerTxt}>{data.footer}</div>}
        </li>
      )}

      {/* type1, isType3: Dialog에 내용보여줌*/}
      {(isType1 || isType3) && data.content && (
        <TermsDetailDialog
          isOpen={isDialogOpen}
          onClose={() => setDialogOpen(false)}
          title={data.label}
          content={data.content}
        />
      )}
    </>
  );
};

AgreementGroup.displayName = 'AgreementGroup';
