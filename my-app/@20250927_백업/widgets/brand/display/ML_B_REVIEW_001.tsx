// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Display } from '@widgets/display/Display';
import { ReviewBriefCard } from '@widgets/review';
import { Grid, ButtonArea, Button, Drawer } from '@shared/ui';

const sampleData = {
  id: 'review-1',
  rating: 4.8,
  total: 256,
  review: `이베리코 짜장면과 칠리새우, 어향동고가 베스트였고 싱가프로식 마늘 쇠고기 안심이나 소롱포 그리고 깐풍기, 탕수육, 짬뽕 같은 메뉴들도 전반적으로 맛있었다. 곁들이는 자스민 차는 농도가 진하고 맛있었습니다. 또 갈거여요!! 이베리코 짜장면과 칠리새우, 어향동고가 베스트였고 싱가프로식 마늘 쇠고기 안심이나 소롱포 그리고 깐풍기, 탕수육, 짬뽕 같은 메뉴들도 전반적으로 맛있었다. 곁들이는 자스민 차는 농도가 진하고 맛있었습니다. 또 갈거여요!!`,
  href: '#',
};
export const ML_B_REVIEW_001 = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Display title="리뷰">
        <Grid>
          <ReviewBriefCard {...sampleData} />
        </Grid>
        <ButtonArea margin="1" align="center">
          <Button size="small" variant="tertiary" round onClick={() => setIsDrawerOpen(true)}>
            더보기
          </Button>
        </ButtonArea>
      </Display>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}></Drawer>
    </>
  );
};
