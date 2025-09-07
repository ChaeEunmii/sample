'use client';

import React from 'react';
import clsx from 'clsx';
import { Collapse, Heading, Tooltip, Section } from '@shared/ui';
import { ScheduleBoxList } from '@/views/mypage/subscription/components';
import { ScheduleBoxData } from '@views/mypage/subscription/components/ScheduleBox';
import styles from './SubscriptionSchedule.module.scss';

interface SubscriptionScheduleProps {
  /** 섹션 타이틀 텍스트 */
  title?: string;
  /** 리스트 데이터  */
  data: ScheduleBoxData[];
  /** 초기 오픈 여부 (기본 true) */
  defaultOpen?: boolean;
  /** 타이틀 옆 툴팁 내용 (없으면 툴팁 미노출) */
  tooltip?: React.ReactNode;
  /** 추가적인 클래스 */
  className?: string;
  /** 주문상세 버튼 핸들러 */
  onViewOrder?: (id: string) => void;
  /** 배송조회 버튼 핸들러 */
  onTrackDelivery?: (id: string) => void;
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
}

export function SubscriptionSchedule({
  title = '진행된 일정',
  data,
  defaultOpen = true,
  tooltip,
  className,
  onViewOrder,
  onTrackDelivery,
  hideCollapse = false,
}: SubscriptionScheduleProps) {
  // 공통 리스트
  const renderContent = (
    <ScheduleBoxList data={data} onViewOrder={onViewOrder} onTrackDelivery={onTrackDelivery} />
  );

  return (
    <>
      {!hideCollapse ? (
        <Collapse
          variant="section"
          defaultOpen={defaultOpen}
          marginTop="2"
          className={clsx(styles.collapse, className)}
        >
          <Collapse.Control as="div">
            <div className={clsx(styles.title)}>
              <Heading as="h2" size="6" weight="bold">
                {title}
              </Heading>
              {tooltip && (
                <span
                  className={clsx(styles.hasTip)}
                  onClick={(e) => e.stopPropagation()}
                  onPointerDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                >
                  <Tooltip placement="bottom">{tooltip}</Tooltip>
                </span>
              )}
            </div>
          </Collapse.Control>
          <Collapse.Content paddingBlock="0">{renderContent}</Collapse.Content>
        </Collapse>
      ) : (
        <Section
          title={title}
          variant="normal"
          flush
          level="1"
          defaultOpen={defaultOpen}
          className={clsx(styles.section, className)}
        >
          {renderContent}
        </Section>
      )}
    </>
  );
}
