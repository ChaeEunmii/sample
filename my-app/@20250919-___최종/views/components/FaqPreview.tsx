import { TextButton, TitleBar } from '@/shared/ui';
import { BoardAccSearch } from '@/widgets/form';
import { BoardAccListItem } from '@/widgets/form/BoardAccList';

interface FaqPreviewProps {
  data: BoardAccListItem[];
  className?: string;
}

export const FaqPreview = ({ data, className }: FaqPreviewProps) => {
  return (
    <article className={className}>
      <TitleBar
        title="자주 묻는 질문"
        side={
          <TextButton size="1" color="gray3" suffixIcon="arrowRight" href="#">
            전체보기
          </TextButton>
        }
      />
      <BoardAccSearch data={data} />
    </article>
  );
};

FaqPreview.displayName = 'FaqPreview';
