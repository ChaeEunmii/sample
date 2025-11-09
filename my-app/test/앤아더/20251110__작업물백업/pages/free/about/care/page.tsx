import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '제품 관리 방법',
};

export default function Page() {
  return (
    <FreeHtml>
      {/* section */}
      <div className="free-section">
        {/* textBox */}
        <div className="free-textBox">
          <h3 className="heading3 q-mega">제품 관리 방법</h3>
          <p className="paragraph2">
            오래 함께할 수 있는 패션이야말로 환경에 미치는 영향을 줄이는 열쇠라고 믿습니다. 이것이 바로 우리가 시즌이
            끝나도 긴 시간 함께할 수 있도록, 사려깊게 엄선된 고품질 소재로 컬렉션을 제작하는 이유입니다. 캐시미어
            가디건부터 매일 입는 데님까지, 약간의 애정과 관심이 더해진다면 더 긴 시간 옷장에서 그 특별한 존재감을 뿜어낼
            수 있습니다.
          </p>
        </div>
      </div>
      {/* gridBox */}
      <div className="free-gridBox third">
        {/* 리넨 */}
        <div className="free-tile">
          <a href="/free/about/care/detail#sec-linnen">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/img_care_01.jpg" alt="Alternate Image" />
            </div>
          </a>
        </div>
        {/* 울 스웨터 */}
        <div className="free-tile">
          <a href="/free/about/care/detail#sec-wool">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/img_care_02.jpg" alt="Alternate Image" />
            </div>
          </a>
        </div>
        {/* 실크 셔츠 */}
        <div className="free-tile">
          <a href="/free/about/care/detail#sec-silk">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/img_care_03.jpg" alt="Alternate Image" />
            </div>
          </a>
        </div>
        {/* 겨울 모직 코트 */}
        <div className="free-tile">
          <a href="/free/about/care/detail#sec-winter-coat">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/img_care_04.jpg" alt="Alternate Image" />
            </div>
          </a>
        </div>
        {/* 다운 재킷 */}
        <div className="free-tile">
          <a href="/free/about/care/detail#sec-down">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/img_care_05.jpg" alt="Alternate Image" />
            </div>
          </a>
        </div>
        {/* 레더 백 */}
        <div className="free-tile">
          <a href="/free/about/care/detail#sec-leather-bag">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/img_care_06.jpg" alt="Alternate Image" />
            </div>
          </a>
        </div>
        {/* 레더 슈즈 */}
        <div className="free-tile">
          <a href="/free/about/care/detail#sec-leather-shoes">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/img_care_07.jpg" alt="Alternate Image" />
            </div>
          </a>
        </div>
        {/* 코튼 티셔츠 */}
        <div className="free-tile">
          <a href="/free/about/care/detail#sec-cotton">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/img_care_08.jpg" alt="Alternate Image" />
            </div>
          </a>
        </div>
        {/* 레이스 란제리 */}
        <div className="free-tile">
          <a href="/free/about/care/detail#sec-lingerie">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/img_care_09.jpg" alt="Alternate Image" />
            </div>
          </a>
        </div>
        {/* 데님 소재 관리 */}
        <div className="free-tile">
          <a href="/free/about/care/detail#sec-denim-care">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/img_care_10.jpg" alt="Alternate Image" />
            </div>
          </a>
        </div>
        {/* 스니커즈 */}
        <div className="free-tile">
          <a href="/free/about/care/detail#sec-sneakers">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/img_care_11.jpg" alt="Alternate Image" />
            </div>
          </a>
        </div>
        {/* 뷰티 */}
        <div className="free-tile">
          <a href="/free/about/care/detail#sec-beauty">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/img_care_12.jpg" alt="Alternate Image" />
            </div>
          </a>
        </div>
      </div>
      {/* section */}
      <div className="free-section has-bg">
        {/* textBox */}
        <div className="free-textBox">
          <h3 className="heading3 q-mega">여기를 클릭하여 섬세한 소재에 관해 더 자세히 알아보세요.</h3>
          <p className="paragraph1">
            <a className="a-link boxed" data-value="READ MORE" href="/free/about/materials" target="_blank">
              더 보기
            </a>
          </p>
        </div>
      </div>
    </FreeHtml>
  );
}
