// 라이브러리
import { useState, useEffect } from 'react';
// 컴포넌트
import { Grid, TextButton, Empty } from '@shared/ui';
import { QnACard, QnACardProps } from './QnACard';
import { QnAImageViewerDialog } from '@widgets/qna/QnAImageViewerDialog';

export type QnAData = Omit<QnACardProps, 'onEdit' | 'onDelete'>;
interface QnAListProps {
  data: QnAData[];
  rows?: number;
  showMore?: boolean;
  onEdit?: (qnaData: QnAData) => void;
  onDelete?: (qnaId: string) => void;
  /** QMA 이미지 클릭시, 이미지 크게보기 팝업 오픈 여부(기본: false) */
  imageQnADetail?: boolean;
  /** 수정버튼 숨김 여부(기본: fasle) */
  hideEdit?: boolean;
  /** 토글 가능 여부 (true면 타이틀, 컨텐츠 영역 토글가능)*/
  toggleable?: boolean;
  /** 비밀글이어도 내용/답변을 표시 */
  revealSecret?: boolean;
  /** 답변 없을 때 펼치면 안내 문구 표시 */
  showPendingNotice?: boolean;
  /** 답변 없을 때 안내 문구 콘텐츠 (수정 시) */
  pendingNoticeText?: string;
  /** 액션 버튼 숨김 여부 (답변이 있을 때) */
  hideActionButtons?: boolean;
}

export const QnAList = ({
  data,
  rows = 10,
  showMore = false,
  imageQnADetail = false,
  onEdit,
  onDelete,
  hideEdit,
  toggleable,
  revealSecret,
  showPendingNotice,
  pendingNoticeText,
  hideActionButtons,
}: QnAListProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(rows);

  const selectedQnAData = selectedId ? data.find((qna) => qna.id === selectedId) : null;

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

  const handlePhotoClick = (id: string) => {
    setSelectedId(id);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedId(null);
  };

  if (data.length === 0) {
    return <Empty title="아직 등록된 Q&A가 없어요." variant="minDisplay" />;
  }

  return (
    <>
      <Grid gutter={20} margin="2">
        {visibleQnAs.map((item) => (
          <QnACard
            key={item.id}
            {...item}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onPhotoClick={handlePhotoClick}
            hideEdit={hideEdit}
            toggleable={toggleable}
            revealSecret={revealSecret}
            showPendingNotice={showPendingNotice}
            pendingNoticeText={pendingNoticeText}
            hideActionButtons={hideActionButtons}
          />
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

      {selectedQnAData && imageQnADetail && (
        <QnAImageViewerDialog
          isOpen={isDetailOpen}
          onClose={handleCloseDetail}
          data={selectedQnAData.photos ?? []}
        />
      )}
    </>
  );
};
