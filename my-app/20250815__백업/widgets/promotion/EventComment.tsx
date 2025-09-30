'use client';
import { Stack, Text, TextButton, Textarea } from '@shared/ui';
import { formatDate } from '@shared/utils/ui';
import styles from './EventComment.module.scss';
import clsx from 'clsx';
import { useState } from 'react';

export interface EventCommentProps {
  /** 고유 id */
  id?: string;
  /** 사용자 id */
  userId: string;
  /** 등록 날짜 */
  date: Date | string;
  /** 댓글 내용 */
  comment: string;
  /** 내 글 여부 */
  isMyPost?: boolean;
  /** 댓글 수정 */
  onEdit?: (commentId: string, newContent: string) => void;
  /** 댓글 삭제 */
  onDelete?: (commentId: string) => void;
  /** 추가 클래스명 */
  className?: string;
}

export const EventComment = ({
  id,
  userId,
  date,
  comment,
  isMyPost = false,
  onEdit,
  onDelete,
  className,
}: EventCommentProps) => {
  const qnaId = id || `${userId}-${date}`;

  // 상태: 수정 여부 + 수정 중 내용
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment);

  const handleStartEdit = () => {
    setEditContent(comment); // 현재 내용으로 초기화
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditContent(comment);
  };

  const handleSaveEdit = () => {
    onEdit?.(qnaId, editContent);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete?.(qnaId);
  };

  // 메타 정보 표시
  const InfoBar = () => {
    const metaData = [
      <>
        <span className="ncp-blind">아이디</span>
        <Text as="span">{userId}</Text>
      </>,
      <>
        <span className="ncp-blind">날짜</span>
        <Text
          as="time"
          color="gray3"
          dateTime={typeof date === 'string' ? date : date.toISOString()}
        >
          {typeof date === 'string' ? date : formatDate(date, 'dot')}
        </Text>
      </>,
    ];
    return (
      <>
        <ul className={styles.info}>
          {metaData.map((item, index) => (
            <li key={index} className={styles.infoItem}>
              {item}
            </li>
          ))}
        </ul>
        {isMyPost && !isEditing && (
          <div className={styles.textButtons}>
            <TextButton
              size="1"
              color="gray3"
              variant="underline"
              onClick={handleStartEdit}
              className="ncp-weight-regular"
            >
              수정
            </TextButton>
            <TextButton
              size="1"
              color="gray3"
              variant="underline"
              onClick={handleDelete}
              className="ncp-weight-regular"
            >
              삭제
            </TextButton>
          </div>
        )}
      </>
    );
  };

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.comment}>
        <div className={styles.summary}>
          <InfoBar />
        </div>

        {/* 수정 모드일 때 */}
        {isEditing ? (
          <div className="ncp-mt-x6">
            <Textarea
              maxLength={500}
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
            <Stack type="end" className="ncp-mt-x6">
              <TextButton
                size="1"
                color="gray3"
                variant="underline"
                onClick={handleCancelEdit}
                className="ncp-weight-regular"
              >
                취소
              </TextButton>
              <TextButton
                size="1"
                color="gray3"
                variant="underline"
                onClick={handleSaveEdit}
                className="ncp-weight-regular"
              >
                등록
              </TextButton>
            </Stack>
          </div>
        ) : (
          /* 일반 코멘트 */
          <Text className="ncp-mt-x6">{comment}</Text>
        )}
      </div>
    </div>
  );
};

EventComment.displayName = 'EventComment';
