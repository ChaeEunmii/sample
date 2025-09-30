'use client';
// 라이브러리
import { useState } from 'react';
// 컴포넌트
import {
  Input,
  Avatar,
  Button,
  Text,
  More,
  TextButton,
  Drawer,
  IconButton,
  Empty,
} from '@shared/ui';
import { MeBadge } from './MeBadge';
// 유틸
import { formatCreatedAt } from '@shared/utils/ui';
// 스타일
import styles from './MeComment.module.scss';
import clsx from 'clsx';

// 타입 정의
export interface Comment {
  id: string;
  userName: string;
  userType?: 'influencer' | 'manager' | 'normal';
  avatar?: string;
  content: string;
  likes?: number;
  isLiked?: boolean;
  replies?: Comment[];
  deleted?: boolean;
  createdAt: Date | string;
}

// 현재 사용자 정보
export interface CurrentUser {
  userName: string;
  avatar?: string;
}

export interface CommentCardProps {
  comment: Comment;
  depth?: number;
  currentUser: CurrentUser;
  onReply?: (commentId: string) => void;
  onEdit?: (commentId: string) => void;
  onDelete?: (commentId: string) => void;
  onLikeToggle?: (commentId: string, isLiked: boolean) => void;
}

interface CommentListProps extends Omit<CommentCardProps, 'comment'> {
  comments: Comment[];
}

const CommentList = ({
  comments,
  currentUser,
  onReply,
  onEdit,
  onDelete,
  onLikeToggle,
}: CommentListProps) => {
  return (
    <div className={styles.comments}>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          depth={0}
          currentUser={currentUser}
          onReply={onReply}
          onEdit={onEdit}
          onDelete={onDelete}
          onLikeToggle={onLikeToggle}
        />
      ))}
    </div>
  );
};

const CommentCard = ({
  comment,
  depth = 0,
  currentUser,
  onReply,
  onEdit,
  onDelete,
  onLikeToggle,
}: CommentCardProps) => {
  const [showReplies, setShowReplies] = useState(false);
  const hasReplies = comment.replies && comment.replies.length > 0;
  const replyCount = comment.replies?.length || 0;
  const isMyComment = comment.userName === currentUser.userName;

  const handleToggleReplies = () => {
    setShowReplies(!showReplies);
  };

  // 좋아요 토글 핸들러
  const handleLikeToggle = () => {
    onLikeToggle?.(comment.id, !comment.isLiked);
  };

  const moreMenuData = isMyComment
    ? // More 1. 수정/삭제 (내가 쓴 글일경우)
      [
        {
          name: '수정하기',
          onClick: () => onEdit?.(comment.id),
        },
        {
          name: '삭제하기',
          onClick: () => onDelete?.(comment.id),
        },
      ]
    : // More 2. 신고하기
      [
        {
          name: '신고하기',
          href: '/report',
        },
      ];

  return (
    <div className={clsx(styles.card, depth > 0 && styles.replyCard)}>
      <Avatar className={styles.avatar} src={comment.avatar || '/images/no_avatar.png'} />

      <div className={styles.title}>
        <Text as="strong">{comment.userName}</Text>
        <MeBadge userType={comment.userType} size="small" />
        <Text
          as="time"
          size="3"
          color="gray3"
          dateTime={
            typeof comment.createdAt === 'string'
              ? comment.createdAt
              : comment.createdAt.toISOString()
          }
        >
          {formatCreatedAt(comment.createdAt)}
        </Text>
        <More className={styles.more} data={moreMenuData} />
      </div>

      <div className={styles.content}>
        <div className={styles.detail}>
          {comment.deleted ? (
            <Text reading color="gray3">
              삭제된 댓글입니다.
            </Text>
          ) : (
            <Text reading>{comment.content}</Text>
          )}
        </div>

        <div className={styles.footer}>
          {depth === 0 && (
            <TextButton color="gray3" onClick={() => onReply?.(comment.id)}>
              답글쓰기
            </TextButton>
          )}
          <TextButton
            size="1"
            color="gray3"
            prefixIcon={comment.isLiked ? 'highfiveOn' : 'highfiveOff'}
            onClick={handleLikeToggle}
            aria-label={
              comment.isLiked ? '도움이 됐어요 취소' : `${comment.likes}명에게 도움이 됐어요`
            }
          >
            <span>{comment.likes || 0}</span>
          </TextButton>
        </div>

        {/* depth가 0일 때만 답글 더보기 버튼과 답글 영역 표시 */}
        {depth === 0 && hasReplies && !showReplies && (
          <div className={styles.replyMore}>
            <TextButton color="gray3" onClick={handleToggleReplies}>
              답글 {replyCount}개 더보기
            </TextButton>
          </div>
        )}
      </div>

      {/* 답글 있을경우 렌더링 */}
      {depth === 0 && showReplies && hasReplies && (
        <div className={styles.replies}>
          {comment.replies?.map((reply) => (
            <CommentCard
              key={reply.id}
              comment={reply}
              depth={depth + 1}
              currentUser={currentUser}
              onReply={onReply}
              onEdit={onEdit}
              onDelete={onDelete}
              onLikeToggle={onLikeToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const CommentField = ({
  currentUser,
  replyingTo,
  onSubmit,
  onCancelReply,
}: {
  currentUser: CurrentUser;
  replyingTo?: string;
  onSubmit?: (content: string) => void;
  onCancelReply?: () => void;
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onSubmit?.(inputValue.trim());
      setInputValue(''); // 입력값 초기화
    }
  };

  return (
    <>
      {/* 답글작성 시 노출 */}
      {replyingTo && (
        <div className={styles.replyTo}>
          <Text size="4">{replyingTo} 님에게 답글 작성중</Text>
          <IconButton name="close" size="xsmall" onClick={onCancelReply}>
            취소
          </IconButton>
        </div>
      )}
      {/* 기본 입력 필드 */}
      <div className={styles.field}>
        <Avatar className={styles.avatar} src={currentUser.avatar || '/images/no_avatar.png'} />
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="댓글을 추가하세요."
          suffix={
            <Button iconOnly="top" variant="primary" className={styles.send} onClick={handleSubmit}>
              보내기
            </Button>
          }
        />
      </div>
    </>
  );
};

interface MeCommentProps {
  isOpen: boolean;
  onClose: () => void;
  comments: Comment[];
  currentUser: CurrentUser; // 추가: 현재 사용자 정보
  onAddComment?: (content: string) => void;
  onReplyComment?: (commentId: string, content: string) => void;
  onEditComment?: (commentId: string) => void;
  onDeleteComment?: (commentId: string) => void;
  onLikeToggle?: (commentId: string, isLiked: boolean) => void;
}

export const MeComment = ({
  isOpen,
  onClose,
  comments,
  currentUser,
  onAddComment,
  onReplyComment,
  onEditComment,
  onDeleteComment,
  onLikeToggle,
}: MeCommentProps) => {
  const [replyingTo, setReplyingTo] = useState<{
    commentId: string;
    userName: string;
  } | null>(null);

  const handleReply = (commentId: string) => {
    // 댓글 사용자명 찾기
    const findComment = (comments: Comment[], id: string): Comment | null => {
      for (const cmt of comments) {
        if (cmt.id === id) return cmt;
        if (cmt.replies) {
          const found = findComment(cmt.replies, id);
          if (found) return found;
        }
      }
      return null;
    };

    const target = findComment(comments, commentId);
    if (target) {
      setReplyingTo({ commentId, userName: target.userName });
    }
  };

  // 답글 취소
  const handleCancelReply = () => {
    setReplyingTo(null);
  };

  const handleSubmit = (content: string) => {
    if (replyingTo) {
      onReplyComment?.(replyingTo.commentId, content);
      setReplyingTo(null);
    } else {
      onAddComment?.(content);
    }
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      draggable
      className={styles.root}
      footer={
        <CommentField
          currentUser={currentUser}
          replyingTo={replyingTo?.userName}
          onSubmit={handleSubmit}
          onCancelReply={handleCancelReply}
        />
      }
    >
      {comments.length === 0 ? (
        <Empty
          title="가장 먼저 댓글을 남겨주세요."
          desc="대화를 시작하거나 기분좋은 한 마디를 남겨보세요."
          className={styles.empty}
        />
      ) : (
        <CommentList
          comments={comments}
          currentUser={currentUser}
          onReply={handleReply}
          onEdit={onEditComment}
          onDelete={onDeleteComment}
          onLikeToggle={onLikeToggle}
        />
      )}
    </Drawer>
  );
};
