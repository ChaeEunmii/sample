import { Collapse, Heading, Carousel, ButtonArea, Button, TextButton } from '@shared/ui';
import styles from './ClubView.module.scss';

export interface ClubInterestItem {
  label: string;
  content: string;
}

interface ClubInterestProps {
  data: ClubInterestItem[];
}

export const ClubInterest = ({ data }: ClubInterestProps) => {
  const slides = [];

  for (let i = 0; i < data.length; i += 4) {
    const group = data.slice(i, i + 4); // 4개씩 나눠서 한 슬라이드로
    slides.push(
      <table className={styles.table}>
        <colgroup>
          <col width="120px" />
          <col />
        </colgroup>
        <tbody>
          {group.map(({ label, content }) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td>{content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <Collapse variant="section" className={styles.collapse}>
      <Collapse.Control>
        <Heading className={styles.tit}>관심정보</Heading>
      </Collapse.Control>
      <Collapse.Content>
        <Carousel slides={slides} slidesPerView={1} pagination="bullet" boxing />
        <ButtonArea margin="1">
          <Button>관심정보 수정</Button>
        </ButtonArea>
        <ButtonArea margin="2" align="right">
          <TextButton variant="underline" color="gray3" size="1">
            클럽 탈퇴하기
          </TextButton>
        </ButtonArea>
      </Collapse.Content>
    </Collapse>
  );
};
