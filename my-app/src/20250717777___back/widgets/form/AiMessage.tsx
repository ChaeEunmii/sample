'use client';

import clsx from 'clsx';
import React from 'react';
import { Carousel, Collapse, Heading, Tabs, Text } from '@shared/ui';
import styles from './AiMessage.module.scss';

// 그룹 ID(친구, 커플, 부모님, 선후배, 선생님, 자녀)
type GroupId = 'friend' | 'couple' | 'parent' | 'mentor' | 'teacher' | 'child';

export interface MessageItem {
  /** 고유 ID */
  id: string;
  /** 메세지 내용 */
  content: React.ReactNode;
}

export interface MessageGroup {
  /** 그룹 ID */
  groupId: GroupId;
  /** 그룹 label */
  label: string;
  /** 메세지 내용 */
  messages: MessageItem[];
}

interface AiMessageProps {
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const AiMessage = ({ className }: AiMessageProps) => {
  // 메세지 목록
  const aiMessage = [
    {
      groupId: 'friend',
      label: '친구',
      messages: [
        {
          id: 'friend-1',
          content: '이 세상에 태어나줘서 고마워. 너의 모든 순간을 응원해. 생일 축하해!',
        },
        {
          id: 'friend-2',
          content: '365일 중 가장 특별한 오늘, 세상에서 가장 행복한 사람이 되길 바라.',
        },
        {
          id: 'friend-3',
          content: '태어나줘서 고마워. 언제나 함께하자. 생일 축하해!',
        },
        {
          id: 'friend-4',
          content: '친구 메세지',
        },
      ],
    },
    {
      groupId: 'couple',
      label: '커플',
      messages: [
        {
          id: 'couple-1',
          content: '커플 메세지',
        },
        {
          id: 'couple-2',
          content: '커플 메세지 2',
        },
      ],
    },
    {
      groupId: 'parent',
      label: '부모님',
      messages: [
        {
          id: 'parent-1',
          content: '부모님 메세지',
        },
        {
          id: 'parent-2',
          content: '부모님 메세지 2',
        },
        {
          id: 'parent-3',
          content: '사랑합니다.',
        },
      ],
    },
    {
      groupId: 'mentor',
      label: '선후배',
      messages: [
        {
          id: 'mentor-1',
          content: '선후배 메세지',
        },
      ],
    },
    {
      groupId: 'teacher',
      label: '선생님',
      messages: [
        {
          id: 'teacher-1',
          content: '선생님 메세지',
        },
      ],
    },
    {
      groupId: 'child',
      label: '자녀',
      messages: [
        {
          id: 'child-1',
          content: '자녀 메세지',
        },
      ],
    },
  ];

  const renderItem = (item: MessageItem) => {
    return (
      <button key={item.id} className={styles.message}>
        <Text color="gray2" weight="medium" align="left">
          {item.content}
        </Text>
      </button>
    );
  };

  return (
    <Collapse variant="default" className={clsx(styles.root, className)}>
      <Collapse.Control>
        <Heading size="5" weight="bold" indent>
          AI 추천 메세지
        </Heading>
      </Collapse.Control>
      <Collapse.Content>
        <Tabs
          data={aiMessage.map((group) => ({
            label: group.label,
            content: (
              <Carousel
                slides={group.messages.map((item) => renderItem(item))}
                slidesPerView={1}
                spaceBetween={16}
                pagination={group.messages.length > 3 ? 'bullet' : undefined}
                rows={3}
                rowGap={8}
                className={styles.messageList}
              />
            ),
          }))}
          variant="texts"
          defaultActive={0}
          className={styles.aiMessageTabs}
        />
      </Collapse.Content>
    </Collapse>
  );
};

AiMessage.displayName = 'AiMessage';
