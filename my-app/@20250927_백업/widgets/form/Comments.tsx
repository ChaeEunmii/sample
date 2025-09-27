'use client';

import { useState, useEffect, useRef } from 'react';
import { formatDate } from '@shared/utils/ui';
import { Box, Button, Empty, Loading, Stack, Text, Textarea, TextButton } from '@/shared/ui';
import clsx from 'clsx';
import styles from './Comments.module.scss';

export interface CommentDataProps {
  id: string;
  userId: string;
  comment: string;
  date: string | Date;
  isAdmin?: boolean;
  isMyPost?: boolean;
  replies?: CommentDataProps[];
}

export interface CommentProps {
  data: CommentDataProps[];
  adminName?: string;
  onAdd?: (content: string, parentId?: string) => void;
  onEdit?: (id: string, content: string) => void;
  onDelete?: (id: string) => void;
  onLoadMore?: () => Promise<CommentDataProps[]> | CommentDataProps[];
  hasMore?: boolean;
  isLoading?: boolean;
  className?: string;
}

export const Comments = ({
  data,
  adminName = '관리자',
  onAdd,
  onEdit,
  onDelete,
  onLoadMore,
  hasMore = true,
  isLoading = false,
  className,
}: CommentProps) => {
  const [inputValue, setInputValue] = useState('');
  const [loadingMore, setLoadingMore] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);
  const [commentStates, setCommentStates] = useState<{
    [key: string]: {
      isEditing?: boolean;
      isReplying?: boolean;
      isChildOpen?: boolean;
      editValue?: string;
      replyValue?: string;
    };
  }>({});

  // 현재 열린 하위댓글 상태관리
  const [openChild, setOpenChild] = useState<string | null>(null);

  // Intersection Observer 설정
  useEffect(() => {
    if (!observerRef.current || !hasMore || isLoading || loadingMore || !onLoadMore) return;

    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          setLoadingMore(true);

          try {
            await onLoadMore();
          } catch (error) {
            // 필요시 에러 알림 처리 추가 필요
            console.error('댓글 로드 실패 체크', error);
          } finally {
            setLoadingMore(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, isLoading, loadingMore, onLoadMore]);

  const updateCommentState = (
    commentId: string,
    updates: Partial<(typeof commentStates)[string]>
  ) => {
    setCommentStates((prev) => ({
      ...prev,
      [commentId]: {
        ...prev[commentId],
        ...updates,
      },
    }));
  };

  const getCommentState = (commentId: string) => {
    return commentStates[commentId] || {};
  };

  // 댓글 아이템
  const renderCommentItem = (item: CommentDataProps, depth = 0) => {
    const state = getCommentState(item.id);
    const {
      isEditing = false,
      isReplying = false,
      editValue = item.comment,
      replyValue = '',
    } = state;

    const isChildOpen = openChild === item.id;

    const handleSaveEdit = () => {
      onEdit?.(item.id, editValue);
      updateCommentState(item.id, { isEditing: false });
    };

    const handleStartEdit = () => {
      updateCommentState(item.id, {
        isEditing: true,
        editValue: item.comment,
      });
    };

    const handleCancelEdit = () => {
      updateCommentState(item.id, {
        isEditing: false,
        editValue: item.comment,
      });
    };

    const handleAddReply = () => {
      if (replyValue.trim()) {
        onAdd?.(replyValue, item.id);
        updateCommentState(item.id, {
          isReplying: false,
          replyValue: '',
        });
      }
    };

    const handleToggleReplies = () => {
      if (openChild === item.id) {
        setOpenChild(null);
      } else {
        setOpenChild(item.id);
      }
    };

    const handleEditValueChange = (value: string) => {
      updateCommentState(item.id, { editValue: value });
    };

    const handleReplyValueChange = (value: string) => {
      updateCommentState(item.id, { replyValue: value });
    };

    return (
      <li key={item.id}>
        <div className={styles.info}>
          <Text
            as="span"
            size="3"
            color={item.isAdmin ? 'point' : undefined}
            weight={item.isAdmin ? 'semibold' : undefined}
            className={styles.infoItem}
          >
            {item.isAdmin ? adminName : item.userId}
          </Text>
          <Text
            as="time"
            size="3"
            color="gray3"
            dateTime={typeof item.date === 'string' ? item.date : item.date.toISOString()}
            className={styles.infoItem}
          >
            {typeof item.date === 'string' ? item.date : formatDate(item.date, 'dot', true, true)}
          </Text>

          {item.isMyPost && (
            <Stack className={styles.ctrl}>
              {isEditing ? (
                <TextButton size="1" color="gray3" variant="underline" onClick={handleCancelEdit}>
                  수정취소
                </TextButton>
              ) : (
                <>
                  <TextButton size="1" color="gray3" variant="underline" onClick={handleStartEdit}>
                    수정
                  </TextButton>
                  <TextButton
                    size="1"
                    color="gray3"
                    variant="underline"
                    onClick={() => onDelete?.(item.id)}
                  >
                    삭제
                  </TextButton>
                </>
              )}
            </Stack>
          )}
        </div>

        {isEditing ? (
          <div className={clsx(styles.field)}>
            <Textarea
              maxLength={500}
              value={editValue}
              onChange={(e) => handleEditValueChange(e.target.value)}
              autoFocus
            />
            <Button variant="primary" onClick={handleSaveEdit} disabled={!editValue.trim()}>
              수정
            </Button>
          </div>
        ) : (
          <Text className={styles.text} reading>
            {item.comment}
          </Text>
        )}

        {depth === 0 && item.replies && (
          <div className={styles.nested}>
            {/* 하위 댓글 토글버튼 */}
            <TextButton
              suffixIcon={isChildOpen ? 'arrowUp' : 'arrowDown'}
              size="1"
              color="gray3"
              onClick={handleToggleReplies}
            >
              댓글 {item.replies.length || undefined}
            </TextButton>

            {/* 하위 댓글 목록 및 입력 폼 */}
            {isChildOpen && (
              <Box>
                {item.replies.length > 0 && (
                  <ul className={styles.replies}>
                    {item.replies.map((r) => renderCommentItem(r, 1))}
                  </ul>
                )}

                {/* 하위 댓글 등록 폼 */}
                {!item.replies?.some((reply) => getCommentState(reply.id).isEditing) && (
                  <div className={clsx(styles.field)}>
                    <Textarea
                      maxLength={500}
                      placeholder="내용을 입력해 주세요. 본문과 무관하거나 욕설, 비방 등의 댓글은 관리자에 의해 삭제될 수 있습니다."
                      value={replyValue}
                      onChange={(e) => handleReplyValueChange(e.target.value)}
                    />
                    <Button
                      variant="primary"
                      onClick={handleAddReply}
                      disabled={!replyValue.trim()}
                    >
                      등록
                    </Button>
                  </div>
                )}
              </Box>
            )}
          </div>
        )}
      </li>
    );
  };

  return (
    <div className={clsx(styles.root, className)}>
      <div className={clsx(styles.field, styles.addField)}>
        <Textarea
          placeholder="내용을 입력해 주세요. 본문과 무관하거나 욕설, 비방 등의 댓글은 관리자에 의해 삭제될 수 있습니다."
          maxLength={500}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          variant="primary"
          onClick={() => {
            if (inputValue.trim()) {
              onAdd?.(inputValue);
              setInputValue('');
            }
          }}
          disabled={!inputValue.trim()}
        >
          등록
        </Button>
      </div>

      {isLoading && data.length === 0 ? (
        <Loading isLoading />
      ) : data.length === 0 ? (
        <Empty variant="minDisplay" title="댓글이 없습니다." desc="첫 번째 댓글을 남겨주세요." />
      ) : (
        <>
          <ul className={styles.replies}>{data.map((c) => renderCommentItem(c))}</ul>

          {/* 무한 스크롤 트리거 */}
          {onLoadMore && hasMore && (
            <div ref={observerRef} className={styles.more}>
              {(loadingMore || isLoading) && <Loading isLoading />}
            </div>
          )}
        </>
      )}
    </div>
  );
};

Comments.displayName = 'Comments';
