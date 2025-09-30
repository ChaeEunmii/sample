import { Box, Heading, Chip, TextList } from '@shared/ui';
import { clubOffline } from '@mocks/club';
import styles from './JoinOfflineBox.module.scss';

const typeTextMap = {
  beauty: {
    title: '뷰티',
    subtitle: '헤이, 마이 뷰티',
    detail: ['자세한 혜택은 H.Point APP > 메뉴 > 클럽 > 헤이마이뷰티 에서 확인할 수 있어요.'],
  },
  moms: {
    title: '맘스',
    subtitle: '맘스클럽',
    detail: [
      '자세한 혜택은 H.Point APP > 메뉴 > 클럽 > 맘스클럽 에서 확인할 수 있어요.',
      '현재는 천호점에서만 서비스 중이며, 추후 점포 확대 예정이에요.',
    ],
  },
};

interface JoinOfflineBoxProps {
  variant?: 'beauty' | 'moms';
  selected: string | string[] | undefined;
  onChange?: (value: string | string[]) => void;
}
export const JoinOfflineBox = ({ variant = 'beauty', selected, onChange }: JoinOfflineBoxProps) => {
  const textSet = typeTextMap[variant];
  return (
    <>
      <Box size="3" className={styles.offline}>
        <Heading size="3" weight="semibold">
          현대백화점 오프라인 {textSet.title} 멤버십
          <br />
          {textSet.subtitle} 가입하고 추가 혜택 받으세요!
        </Heading>
        <div className={styles.cont}>
          <Heading size="3" weight="medium">
            현대백화점
          </Heading>
          <Chip
            variant="filled"
            size="small"
            selected={selected}
            onChange={onChange}
            columns="auto"
            data={clubOffline}
            name="clubOffline"
          />
        </div>
      </Box>
      <TextList data={textSet.detail} variant="info" />
    </>
  );
};
