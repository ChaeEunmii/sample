import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'COS PERFUMERY',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="free-row free-full-width q-vertical-padding-global">
        <div className="free-contain">
          <div className="free-layout--narrow free-center-col">
            {/* free-breadcrumb */}
            <div className="free-breadcrumb">
              <a href="/main" className="a-link">
                <h3 className="breadcrumb-heading">HOME</h3>
              </a>
              <a href="/free/service" className="a-link">
                <h3 className="breadcrumb-heading">CUSTOMER SERVICE</h3>
              </a>
              <a href="/free/service/perfumery" className="a-link">
                <h3 className="breadcrumb-heading">COS PERFUMERY</h3>
              </a>
            </div>
            <p className="a-paragraph">
              <b>COS PERFUMERY</b>
              <br />
              <br />
              새롭게 선보이는 COS의 향수 컬렉션에 대한 자세한 내용을 함께 확인해 보세요. 비건, 업사이클 원료, 천연 유래
              성분까지, 제품 제작 과정과 용어에 대한 정의를 함께 만나볼 수 있습니다.
              <br />
              <br />
              <br />
            </p>
            <p className="a-paragraph">
              <b>비건은 무엇을 의미하나요?</b>
              <br />
              &apos;비건&apos;이 표기된 향수는 제품 내 동물 유래 성분이 포함되지 않았음을 의미합니다. 예를 들어,
              벌집에서 추출한 비즈 왁스나 곤충으로 만들어진 카민, 또는 잔탄검 등을 사용하지 않고 제품을 제작하고
              있습니다. 코스메틱 제품과 관련하여 동물 실험에 대한 정보가 필요한 경우, H&amp;M 그룹의 동물 복지 정책을
              함께 참고해 주세요. 비건 제품의 경우 천연 유래 성분 또는 합성 성분을 사용하여 제작하고 있으며, COS는
              비건이라는 용어를 제품이 환경에 긍정적인 영향을 미치거나 환경에 미치는 영향이 적다는 의미로 사용하지
              않습니다.
              <br />
              <br />
              <br />
            </p>
            <p className="a-paragraph">
              <b>천연 유래 성분이란 무엇인가요</b>
              <br />
              &apos;천연 유래 성분&apos;이 표기된 향수는 ISO 16128이라는 국제 가이드라인을 준수했음을 의미합니다. 여기서
              이야기하는 천연 유래 성분은 변형되지 않은 자연 성분을 의미하며, 천연 유래 성분이지만 가공을 거친 경우에는
              자연 상태를 50% 이상 유지하여 온라인을 통해 해당 성분의 비율을 제공하고 있습니다. 천연 유래 성분은
              식품의약품안전처의 천연화장품(유기농 화장품)에 해당한다는 의미가 아니며, COS는 자연이라는 용어를 제품이
              환경에 긍정적인 영향을 미치거나 환경에 미치는 영향이 적다는 의미로 사용하지 않습니다.
              <br />
              <br />
              <br />
            </p>
            <p className="a-paragraph">
              <b>업사이클 원료란 무엇인가요?</b>
              <br />
              &apos;업사이클 원료&apos;가 표기된 향수는 제품에 포함된 탄소 원자 50% 이상이 업사이클 재료에서 유래했음을
              의미합니다. 여기서 의미하는 업사이클은 폐기물, 버려진 자원, 또는 사용되지 않은 제품을 가치 있는 성분으로
              전환하는 과정을 의미하며, 식품, 음료, 그리고 꽃 등을 코스메틱 제품에 사용되는 업사이클 원료의 예시로 들 수
              있습니다. COS는 업사이클 원료라는 용어를 제품이 환경에 긍정적인 영향을 미치거나 환경에 미치는 영향이
              적다는 의미로 사용하지 않으며, 원료의 비율을 공개하여 제품 구매 시 이를 확인할 수 있도록 정보를 제공하고
              있습니다.
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
