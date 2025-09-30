'use client';

import { useEffect, useState, useRef } from 'react';
import { Checkbox, IconButton, Text, Collapse } from '@shared/ui';
import TermsDetailDialog from '@views/policy/TermsDetailDialog';
import clsx from 'clsx';
import styles from './AgreementGroup.module.scss';
export interface AgreementItemProps {
  id: string;
  label?: React.ReactNode | string;
  dialogTitle?: string; // dialog에서 사용할 Title이 별도로 필요한 경우에만
  content?: React.ReactNode;
  header?: React.ReactNode;
  headerDesc?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  onlyRead?: boolean; // 체크박스 없는 읽기 유형의 경우
  required?: boolean; // 필수 체크 일 경우 (validateMode로 체크)
  requiredText?: string; // "약관에 동의해주세요" 텍스트 변경 필요할 경우
  children?: AgreementItemProps[];
  slot?: React.ReactNode;
}

interface AgreementGroupProps {
  variant?: 'type1' | 'type2' | 'type3' | 'type4';
  data: AgreementItemProps;
  checked: boolean;
  onChange: (id: string, checked: boolean) => void;
  depth?: number;
  allStates: Record<string, boolean>;
  className?: string;
  disabledStates?: Record<string, boolean>;
  readOnlyMode?: boolean; // 자식 전체를 읽기 전용으로 표시하는 모드
  validateMode?: boolean; // 부모에서 트리거할 검증 모드 (데이터 필수 요소검사)
  linkedChecks?: Array<{ triggers: string[]; targets: string[] }>; // 특정 항목이 체크되면 연결된 항목도 같이 체크
  showBottomRequired?: boolean; // 그룹 하단에 필수 경고 표시 여부
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
  linkedChecks = [],
  showBottomRequired = false,
}) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const isDisabled = !!disabledStates[data.id]; // 항목별 disabled 여부
  const [slotClientOnly, setSlotClientOnly] = useState(false); // 클라이언트 전용 slot 렌더링

  useEffect(() => {
    if (data.slot) setSlotClientOnly(true);
  }, [data.slot]);

  // variant type 체크
  const isType1 = variant === 'type1';
  const isType2 = variant === 'type2';
  const isType3 = variant === 'type3';
  const isType4 = variant === 'type4'; // Collapse 유형

  // 최상단 전체 체크박스 여부
  const isTopLevel = !data.content && depth === 0;
  // 전체 체크박스 설정
  const allCheckBoxed = isTopLevel && (isType1 || isType2); // type1, type2 일때 전체체크박스 boxed 스타일
  const allCheckNormal = isTopLevel && (isType3 || isType4); // 기본 전체체크박스 스타일

  // 자식들의 체크 상태에 기반한 부모 체크박스 상태 업데이트
  useEffect(() => {
    // 자식이 없는 경우 처리
    if (!data.children || data.children.length === 0) return;

    // 최상단(전체동의): 모든 말단 항목이 체크됐을 때만 ON (linkedChecks 무시)
    if (depth === 0) {
      const isFullyChecked = (node: AgreementItemProps): boolean => {
        if (disabledStates?.[node.id] || node.onlyRead) return true; // 제외
        if (node.children?.length) return node.children.every(isFullyChecked);
        return !!allStates[node.id]; // 말단 항목은 자기 자신의 체크박스 값으로 판단
      };
      // 최상단 부모는 모든 자식(말단 항목까지) 체크 여부와 동일하게 상태 동기화
      const topAllChecked = data.children.every(isFullyChecked);
      if (checked !== topAllChecked) onChange(data.id, topAllChecked);
      return;
    }

    // disabled도 아니고, onlyRead도 아닌 자식만 검사 대상으로 포함
    const validChildren = data.children.filter(
      (child) => !disabledStates?.[child.id] && !child.onlyRead
    );
    if (validChildren.length === 0) return; // 다 제외면 아무 것도 안 함

    // 모든 자식이 체크되었는지 확인
    const allChildrenChecked = validChildren.every((child) => allStates[child.id]);

    // 자식이 모두 체크되었지만 부모는 아직 체크되지 않은 경우(linked 타겟이면 자동 ON 금지)
    if (allChildrenChecked && !checked && !linkedChecks?.some((r) => r.targets.includes(data.id))) {
      onChange(data.id, true);
    }

    // 자식 중 해제된 게 있으면, 링크로 묶이지 않은 부모는 체크 해제
    if (
      !allChildrenChecked &&
      checked &&
      !linkedChecks?.some(
        (r) => r.targets.includes(data.id) && r.triggers.some((tg) => allStates[tg])
      )
    ) {
      onChange(data.id, false);
    }
  }, [data.children, allStates, checked, data.id, onChange, disabledStates, linkedChecks, depth]);

  // ReactNode를 string으로 변환
  function extractText(node: React.ReactNode | string): string {
    // null, undefined, boolean → 빈 문자열
    if (node == null || typeof node === 'boolean') return '';

    // string인 경우는 그대로 반환
    if (typeof node === 'string') return node;

    // number는 문자열로 변환
    if (typeof node === 'number') return String(node);

    // 배열이면 각 요소 재귀 호출 후 합치기
    if (Array.isArray(node)) return node.map(extractText).join('');

    // React Element인 경우 children 재귀 처리
    if (typeof node === 'object' && 'props' in (node as any)) {
      const el = node as React.ReactElement<any>;
      return extractText(el.props.children);
    }

    // 그 외는 처리 불가 → 빈 문자열
    return '';
  }

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

  // 체크박스 변경 핸들러
  const handleCheckChange = (newChecked: boolean) => {
    if (isDisabled) return; // disabled 상태이면 무시

    onChange(data.id, newChecked);

    // 부모가 체크/해제되면 모든 자식도 같은 상태로 변경
    if (data.children && data.children.length) {
      cascadeCheckState(data.children, newChecked);
    }

    // ---------- 특정 항목이 체크되면 연결된 항목도 체크 ----------
    if (newChecked && linkedChecks?.length) {
      linkedChecks.forEach(({ triggers, targets }) => {
        if (triggers.includes(data.id)) {
          targets.forEach((linkedId: string) => {
            if (!allStates[linkedId] && !disabledStates[linkedId]) {
              onChange(linkedId, true);
            }
          });
        }
      });
    }
    // 사용 예시
    // linkedChecks={[
    //   {
    //     triggers: ['event-marketing-sms', 'event-marketing-email'],
    //     targets: ['event-marketing-1']
    //   }
    // ]}
    // ---------- 특정 항목이 체크되면 연결된 항목도 체크 ----------
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

  // 이전 렌더 때의 disabled 상태를 기억해두는 ref
  const prevDisabled = useRef<Record<string, boolean>>({});
  // disabled 였다가 풀린 자식은 부모의 체크 상태(true)로 맞춰줌(페이지에서 disabledStates 해제 시 일관성 유지)
  useEffect(() => {
    // 부모가 체크되지 않은 상태라면 비교만 갱신 후 종료
    if (!checked) {
      prevDisabled.current = { ...disabledStates };
      return;
    }
    data.children?.forEach((c) => {
      // disabled → enabled로 바뀌고 onlyRead가 아닌 자식만 부모 상태 전파
      if (prevDisabled.current[c.id] && !disabledStates[c.id] && !c.onlyRead) {
        cascadeCheckState([c], true);
      }
    });
    // 이번 disabled 상태를 저장해 두고 다음 렌더에서 비교
    prevDisabled.current = { ...disabledStates };
  }, [disabledStates, checked, data.children]);

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
              linkedChecks={linkedChecks}
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
            allCheckNormal && styles.allCheckNormal,
            showRequiredText && isTopLevel && styles.showRequiredText,
            slotClientOnly && styles.slot
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
                  {data.requiredText ? data.requiredText : '약관에 동의해 주세요.'}
                </Text>
              )}
            </>
          ) : (
            <>
              {/* 체크박스가 없는 읽기유형 */}
              <p className={styles.onlyReadText}>{data.label}</p>
            </>
          )}
          {!(isType2 || isType4 || data.slot) && data.content && (
            <IconButton
              name="arrowRight"
              size={'medium'}
              className={styles.detailBtn}
              onClick={() => setDialogOpen(true)}
              aria-label="약관 자세히 보기"
            />
          )}
          {slotClientOnly && data.slot}
        </div>
      )}
    </>
  );

  // ---------- type4 전용 renderItem (Collapse) ---------- //
  // Collapse 사용 조건
  const useCollapse = isType4 && depth === 1 && !!data.content;
  // 필수 여부에 따라 표시
  const renderReq = (req?: boolean) =>
    req === undefined ? null : (
      <Text as="span" color={req ? 'gray1' : 'gray3'}>
        {req ? '(필수)' : '(선택)'}
      </Text>
    );
  const renderType4Item = () => (
    <Collapse variant="section" className={styles.collapse}>
      <Collapse.Control border>
        {!isReadOnly ? (
          <div
            className={styles.chkWrap}
            // Collapse 토글로 전파 방지
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            <Checkbox
              label={
                <span>
                  {data.label}
                  {renderReq(data.required)}
                </span>
              }
              checked={checked}
              onChange={(e) => handleCheckChange(e.target.checked)}
              disabled={isDisabled}
              aria-readonly={false}
            />
          </div>
        ) : (
          <p className={styles.onlyReadText}>
            {data.label}
            {renderReq(data.required)}
          </p>
        )}
      </Collapse.Control>
      <Collapse.Content>
        {data.content && <div className={styles.termsWrap}>{data.content}</div>}
        {renderChildren()}
      </Collapse.Content>
    </Collapse>
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
          {data.label && (useCollapse ? renderType4Item() : renderItem())}
          {!useCollapse && renderChildren()}
          {data.footer && <p className={styles.footerTxt}>{data.footer}</p>}

          {/* 필수 체크 안 된 경우 메시지 문구 (type4 기본, 1~3은 showBottomRequired=true) */}
          {showRequiredText && (isType4 || showBottomRequired) && (
            <Text
              as="strong"
              color="alert"
              className={clsx(styles.requiredTxt, showBottomRequired && styles.bottomRequired)}
            >
              모든 약관에 동의해 주세요.
            </Text>
          )}
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
          {useCollapse ? renderType4Item() : renderItem()}
          {isType2 && data.content && <div className={styles.termsBox}>{data.content}</div>}
          {isType4 && !useCollapse && data.content && (
            <div className={styles.termsWrap}>{data.content}</div>
          )}
          {!useCollapse && renderChildren()}
          {data.footer && <div className={styles.footerTxt}>{data.footer}</div>}
        </li>
      )}

      {/* type1, isType3: Dialog에 내용보여줌*/}
      {(isType1 || isType3) && data.content && (
        <TermsDetailDialog
          isOpen={isDialogOpen}
          onClose={() => setDialogOpen(false)}
          title={data.dialogTitle ?? extractText(data.label)}
          content={data.content}
        />
      )}
    </>
  );
};

AgreementGroup.displayName = 'AgreementGroup';
