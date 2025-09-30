import { Box, Heading, TextButton, TitleBar, Text } from '@/shared/ui';
import { formatDate } from '@/shared/utils/ui';

interface NoticeBoxProps {
  data: {
    title: string;
    date: string;
  };
  className?: string;
}

export const NoticeBox = ({ data, className }: NoticeBoxProps) => {
  return (
    <article className={className}>
      <TitleBar
        title="공지사항"
        side={
          <TextButton size="1" color="gray3" suffixIcon="arrowRight" href="#">
            전체보기
          </TextButton>
        }
      />
      <Box size="3">
        <Heading size="4" weight="semibold" color="black" indent>
          {data.title}
        </Heading>
        <Text size="3" color="gray3" indent>
          {formatDate(data.date, 'dot')}
        </Text>
      </Box>
    </article>
  );
};

NoticeBox.displayName = 'NoticeBox';
