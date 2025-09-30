// 라이브러리
import { useState, useEffect } from 'react';
// 컴포넌트
import { Grid, Empty, Stack, Checkbox, Heading, Text, Button } from '@shared/ui';
import { EventComment, EventCommentProps } from './EventComment';

import styles from './EventComment.module.scss';

type EventCommentData = Omit<EventCommentProps, 'onEdit' | 'onDelete'>;
interface EventCommentListProps {
  data: EventCommentData[];
  rows?: number;
  showMore?: boolean;
  onEdit?: (commentData: EventCommentData) => void;
  onDelete?: (commentId: string) => void;
}

export const EventCommentList = ({
  data,
  rows = 10,
  showMore = true,
  onEdit,
  onDelete,
}: EventCommentListProps) => {
  const [displayCount, setDisplayCount] = useState(rows);

  useEffect(() => {
    setDisplayCount(rows); // 새 데이터 올 때 display count 리셋
  }, [data, rows]);

  const visibleEventComments = data.slice(0, displayCount);
  const hasMore = showMore && displayCount < data.length;

  const handleEdit = (commentId: string) => {
    const commentData = data.find((item) => item.id === commentId);
    if (commentData) {
      onEdit?.(commentData);
    }
  };

  const handleDelete = (commentId: string) => {
    onDelete?.(commentId);
  };

  const handleShowMore = () => {
    setDisplayCount((prev) => prev + rows);
  };

  return (
    <>
      <Stack type="between">
        <Heading as="h3" size="6" className={styles.heading}>
          응모댓글
          <span className={styles.totalCount}>
            총&nbsp;<span>{data.length}개</span>
          </span>
        </Heading>
        <Checkbox
          label={
            <Text color="primary" size="4">
              내가 쓴 댓글
            </Text>
          }
        />
      </Stack>

      {data.length === 0 ? (
        <Empty title="등록된 댓글이 없습니다." style={{ marginBlock: '76px' }} />
      ) : (
        <>
          <Grid gutter={20} margin="2">
            {visibleEventComments.map((item) => (
              <EventComment key={item.id} {...item} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
          </Grid>

          {hasMore && (
            <div className="ncp-text-center ncp-mt-l">
              <Button
                suffixIcon="arrowDown"
                variant="tertiary"
                round
                size="small"
                color="gray3"
                onClick={handleShowMore}
              >
                더보기
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};
