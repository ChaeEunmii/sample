'use client';
// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Text, TextButton, Flag, IconButton, Heading, Stack, Icon } from '@shared/ui';
// 스타일
import styles from './QnACard.module.scss';
import clsx from 'clsx';

interface Answer {
  id: string;
  content: React.ReactNode;
  date: string;
}

export interface QnACardProps {
  /** 고유 id */
  id?: string;
  /** 사용자 id */
  userId: string;
  /** 등록 날짜 */
  date: string;
  /** 질문 내용 */
  question: {
    title: string;
    content?: React.ReactNode;
  };
  /** 답변(여러 개 등록 가능) */
  answers?: Answer[];
  /** 비밀글 여부 */
  isSecret?: boolean;
  /** 내 글 여부 */
  isMyPost?: boolean;
  /** 질문 수정 */
  onEdit?: (qnaId: string) => void;
  /** 질문 삭제 */
  onDelete?: (qnaId: string) => void;
  /** 추가 클래스명 */
  className?: string;
}

export const QnACard = ({
  id,
  userId,
  date,
  question,
  answers = [],
  isSecret = false,
  isMyPost = false,
  onEdit,
  onDelete,
  className,
}: QnACardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => setIsExpanded((prev) => !prev);

  const InfoBar = () => {
    const metaData = [
      <>
        {answers.length === 0 ? (
          <Flag
            data={{
              color: 'gray' as const,
              label: '답변대기',
            }}
          />
        ) : (
          <Flag
            data={{
              color: 'green2' as const,
              label: '답변완료',
            }}
          />
        )}
      </>,
      <>
        <span className="ncp-blind">아이디</span>
        <Text as="span">{userId}</Text>
      </>,
      <>
        <span className="ncp-blind">날짜</span>
        <Text as="time" color="gray3" dateTime={date}>
          {date}
        </Text>
      </>,
    ];

    return (
      <ul className={styles.info}>
        {metaData.map((item, index) => (
          <li key={index} className={styles.infoItem}>
            {item}
          </li>
        ))}
      </ul>
    );
  };

  const handleEdit = () => {
    const qnaId = id || `${userId}-${date}`;
    onEdit?.(qnaId);
  };

  const handleDelete = () => {
    const qnaId = id || `${userId}-${date}`;
    onDelete?.(qnaId);
  };

  return (
    <div className={clsx(styles.root, !isExpanded && styles.collapse, className)}>
      {/* 문의 섹션 */}
      <div className={styles.question}>
        <div className={styles.summary}>
          <InfoBar />
          {!isSecret && (
            <IconButton
              name={isExpanded ? 'arrowUp' : 'arrowDown'}
              size="small"
              className={styles.toggle}
              onClick={handleExpand}
            >
              {isExpanded ? '접기' : '펼치기'}
            </IconButton>
          )}
        </div>

        <div className={styles.detail}>
          {isSecret ? (
            <Text size="4" className={styles.secret}>
              <Icon name="lock" size="small" />
              비밀글입니다.
            </Text>
          ) : (
            <>
              <Heading className={styles.title} size="2" weight="regular">
                {question.title}
              </Heading>
              {question.content && (
                <Text size="4" className={styles.text}>
                  {question.content}
                </Text>
              )}
            </>
          )}
        </div>

        {isMyPost && (
          <Stack type="end">
            <TextButton size="1" color="gray3" variant="underline" onClick={handleEdit}>
              수정
            </TextButton>
            <TextButton size="1" color="gray3" variant="underline" onClick={handleDelete}>
              삭제
            </TextButton>
          </Stack>
        )}
      </div>

      {/* 답변 섹션 */}
      {!isSecret && answers.length > 0 && (
        <div className={styles.answers}>
          {answers.map((answer) => (
            <div key={answer.id} className={styles.answer}>
              <Stack type="between">
                <Heading size="2" weight="medium" color="point">
                  답변
                </Heading>
                <span className="ncp-blind">날짜</span>
                <Text as="time" size="3" color="gray3" dateTime={answer.date}>
                  {answer.date}
                </Text>
              </Stack>

              <Text size="4">{answer.content}</Text>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

QnACard.displayName = 'QnACard';
