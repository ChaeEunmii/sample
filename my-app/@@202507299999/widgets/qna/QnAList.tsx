// 라이브러리
import { useState, useEffect } from 'react';
// 컴포넌트
import { Grid, TextButton, Empty } from '@shared/ui';
import { QnACard, QnACardProps } from './QnACard';

type QnAData = Omit<QnACardProps, 'onEdit' | 'onDelete'>;
interface QnAListProps {
  data: QnAData[];
  rows?: number;
  showMore?: boolean;
  onEdit?: (qnaData: QnAData) => void;
  onDelete?: (qnaId: string) => void;
}

export const QnAList = ({ data, rows = 10, showMore = false, onEdit, onDelete }: QnAListProps) => {
  const [displayCount, setDisplayCount] = useState(rows);

  useEffect(() => {
    setDisplayCount(rows); // 새 데이터 올 때 display count 리셋
  }, [data, rows]);

  const visibleQnAs = data.slice(0, displayCount);
  const hasMore = showMore && displayCount < data.length;

  const handleEdit = (qnaId: string) => {
    const qnaData = data.find((item) => item.id === qnaId);
    if (qnaData) {
      onEdit?.(qnaData);
    }
  };

  const handleDelete = (qnaId: string) => {
    onDelete?.(qnaId);
  };

  const handleShowMore = () => {
    setDisplayCount((prev) => prev + rows);
  };

  if (data.length === 0) {
    return <Empty title="아직 등록된 Q&A가 없어요." style={{ marginBlock: '76px' }} />;
  }

  return (
    <>
      <Grid gutter={20} margin="2">
        {visibleQnAs.map((item) => (
          <QnACard key={item.id} {...item} onEdit={handleEdit} onDelete={handleDelete} />
        ))}
      </Grid>

      {hasMore && (
        <div className="ncp-text-center ncp-mt-m">
          <TextButton
            suffixIcon="arrowDown"
            iconSize="xsmall"
            color="gray3"
            onClick={handleShowMore}
          >
            더보기
          </TextButton>
        </div>
      )}
    </>
  );
};
