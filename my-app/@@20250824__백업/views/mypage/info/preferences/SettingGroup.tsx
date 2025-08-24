'use client';

import { Collapse, Heading } from '@shared/ui';
import clsx from 'clsx';
/**
 * 맞춤정보 관리 선택 그룹 영역 반복되는 레이아웃
 *
 */
export interface SettingGroupProps {
  /** 섹션 타이틀 */
  title: React.ReactNode;
  /** 기본 오픈 여부 (기본 true) */
  defaultOpen?: boolean;
  /** 추가적인 클래스 */
  className?: string;
  /** 섹션 본문 */
  children: React.ReactNode;
}

export function SettingGroup({
  title,
  defaultOpen = true,
  className,
  children,
}: SettingGroupProps) {
  return (
    <Collapse variant="section" className={clsx(className)} defaultOpen={defaultOpen}>
      <Collapse.Control border>
        <Heading as="strong" size="5" indent>
          {title}
        </Heading>
      </Collapse.Control>
      <Collapse.Content>{children}</Collapse.Content>
    </Collapse>
  );
}
