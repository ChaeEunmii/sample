import { TimeLineBannerList } from '@widgets/banner/TimeLineBannerList';
import { mockTimeLineBanners } from '@mocks/banner';

export default function StoreAttag() {
  return (
    <div>
      스케줄 타임라인배너 테스트중
      <br />
      <br />
      <TimeLineBannerList data={mockTimeLineBanners} />
      <br />
      <br />
    </div>
  );
}
