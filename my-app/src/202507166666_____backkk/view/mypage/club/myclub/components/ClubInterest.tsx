import { Collapse, Heading, Carousel, ButtonArea, Button } from '@shared/ui';
import styles from './ClubView.module.scss';

export interface ClubInterestItem {
  label: string;
  content: string;
}

interface ClubInterestProps {
  data: ClubInterestItem[][]; // 슬라이드마다 들어갈 그룹 단위 데이터
}

export const ClubInterest = ({ data }: ClubInterestProps) => {
  // 슬라이드 생성
  const slides = data.map((group, index) => (
    <table className={styles.table} key={`group-${index}`}>
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
  ));

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
      </Collapse.Content>
    </Collapse>
  );
};
