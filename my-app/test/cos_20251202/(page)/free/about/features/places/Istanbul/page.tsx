import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Istanbul - COS KR',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    @container root (max-width: 767px) {\n      .onlypc {\n        display: none !important;\n      }\n      .onlymo {\n        display: block !important;\n      }\n    }\n    @container root (min-width: 768px) {\n      .onlypc {\n        display: block !important;\n      }\n      .onlymo {\n        display: none !important;\n      }\n    }\n    .building-header h1.a-heading-1.fixed-size.q-peta {\n      font-size: 20px !important;\n      color: #444444;\n      line-height: 26px !important;\n      font-family: 'Gill Sans MT Pro Medium', 'Nanum Barun Gothic';\n      letter-spacing: 0.002em;\n      word-break: break-all;\n    }\n    .building-header p.a-paragraph.fixed-size.q-body-copy-1 {\n      font-size: 20px !important;\n      color: #444444;\n      line-height: 26px !important;\n      font-family: 'Gill Sans MT Pro Medium', 'Nanum Barun Gothic';\n      letter-spacing: 0.002em;\n      word-break: break-all;\n    }\n  ",
          }}
        />
        <div className="parsys genericpagepar">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            {/* blogtext-*/}
            <div className="contain building-header">
              <div className="u-cols-sm-12-12 u-cols-md-11-12 u-cols-lg-22-24 u-full-width u-row u-center-col">
                <div className="m-teaser blog-teaser">
                  <h1 className="a-heading-1 fixed-size q-peta" style={{ color: '#444444' }}>
                    COS Buildings
                    <br />
                    Bagdat Caddesi, Istanbul
                  </h1>
                  <p className="a-paragraph fixed-size q-body-copy-1" style={{ color: '' }}>
                    이스탄불 마르마라 해안선과 나란히 놓인 바그다드 거리(Bağdat Caddesi)에 자리한 COS 매장은 도시의
                    다채로운 문화와 역사적인 유산에서 영감을 받은 디자인으로 연출되었습니다.
                  </p>
                  <br />
                  <p>&nbsp;</p>
                </div>
              </div>
            </div>
            {/* // blogtext-*/}
            {/* textlog */}
            {/* //textlog */}
            {/* ohero */}
            {/* //ohero */}
          </div>
          {/* imagehero-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="contain">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div style={{ cursor: 'default' }} className="o-hero">
                  <div style={{ backgroundColor: 'FFFFFF' }} className="bcgr-color">
                    <picture
                      data-component="APicture"
                      className="a-picture"
                      data-component-id="379e7a42-019a-4c25-adff-2fbf163af1c6"
                    >
                      <source
                        media="(min-width:768px)"
                        srcSet="https://image.thehyundai.com/hdcos/images/hdcos/building/2/1/1.jpg"
                      />
                      <source media="(min-width:1px)" />
                      <img
                        className="a-image initial loading"
                        src="https://image.thehyundai.com/hdcos/images/hdcos/building/2/1/1.jpg"
                        alt=""
                        data-was-processed="true"
                      />
                    </picture>
                    <div className="m-teaser">
                      <div className="a-label js-a-label q-body-copy-1" style={{ color: '#ffffff' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* // imagehero-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            {/* blogtext-*/}
            {/* // blogtext-*/}
            {/* textlog */}
            <div className="contain">
              <span className="richTextSpan"> </span>
              <div className="o-blog-text is-richtext">
                <div className="a-paragraph a-page-paragraph q-body-copy-1">
                  이스탄불 스카이라인의 가장 큰 특징인 비잔틴 양식의 돔을 본뜬 기하학적 형태의 건물 외관은 아름다운 원형
                  창으로 덮여 있습니다. 둥글게 뚫린 부분은 건물 형태와 입체적으로 어우러집니다. 공사 기간 중 현지에서
                  공수된 콘크리트 패널의 질감은 모던한 외벽에 촉감을 더합니다.
                </div>
              </div>
            </div>
            {/* //textlog */}
            {/* ohero */}
            {/* //ohero */}
          </div>
          {/* Square-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
            <div className="o-square">
              <div className="cell">
                <a
                  href="#"
                  style={{
                    color: 'inherit',
                    textDecoration: 'inherit',
                    display: 'inherit',
                  }}
                >
                  <picture
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="17fbc72d-2cd9-42f2-be1c-6d80bf155512"
                  >
                    <img
                      className="a-image"
                      src="https://image.thehyundai.com/hdcos/images/hdcos/building/2/2/1.jpg"
                      alt="Pic alt 1"
                    />
                  </picture>
                </a>
                <div className="text-content">
                  <div className="a-paragraph is-richtext" style={{ color: '#444444' }}>
                    <a href="" style={{ textDecoration: 'none' }}>
                      <span className="underline" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="cell">
                <a
                  href="#"
                  style={{
                    color: 'inherit',
                    textDecoration: 'inherit',
                    display: 'inherit',
                  }}
                >
                  <picture
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="17fbc72d-2cd9-42f2-be1c-6d80bf155512"
                  >
                    <img
                      className="a-image"
                      src="https://image.thehyundai.com/hdcos/images/hdcos/building/2/2/2.jpg"
                      alt="Pic alt 1"
                    />
                  </picture>
                </a>
                <div className="text-content">
                  <div className="a-paragraph is-richtext" style={{ color: '#444444' }}>
                    <a href="" style={{ textDecoration: 'none' }}>
                      <span className="underline" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* // Square-*/}
          {/* threecolumns-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
            {/* o-grid-controller */}
            <div className="o-grid-controller is-three-cols">
              <div className="content">
                <div className="scrollable-content">
                  <div className="column">
                    <div className="m-free-tile" style={{ cursor: 'default' }}>
                      <picture
                        data-component="APicture"
                        className="a-picture"
                        style={{ cursor: 'pointer' }}
                        data-component-id="7612d5c1-5335-4af2-a9bd-582d2c2365a7"
                      >
                        <img
                          className="a-image"
                          src=" https://image.thehyundai.com/hdcos/images/hdcos/building/2/3/1.jpg"
                        />
                      </picture>
                      <div className="cta-wrapper noComma">
                        <a target="_self" className="a-link cta-link unsmart-underline" href="">
                          <span className="unsmart-underline-underline" style={{ background: 'rgb(68, 68, 68)' }} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*// o-grid-controller */}
          </div>
          {/* // threecolumns-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            {/* blogtext-*/}
            {/* // blogtext-*/}
            {/* textlog */}
            <div className="contain">
              <span className="richTextSpan"> </span>
              <div className="o-blog-text is-richtext">
                <div className="a-paragraph a-page-paragraph q-body-copy-1">
                  내부에는 4개 층에 걸친 넓은 공간이 펼쳐지며, 사람들이 잠시 쉬어갈 수 있는 평온한 라운지가 있습니다.
                  남색 계단은 이스탄불 건축과 터키 부적인 나자르 본주우(nazar boncuğu)에서 나타나는 푸른색을 띱니다.
                </div>
              </div>
            </div>
            {/* //textlog */}
            {/* ohero */}
            {/* //ohero */}
          </div>
          {/* twocolumns-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n        @container root (max-width: 1023px) {\n          .o-grid-controller.is-two-cols-only .column {\n            width: 50% !important;\n            float: left !important;\n          }\n        }\n      ',
              }}
            />
            {/* o-grid-controller */}
            <div className="o-grid-controller is-two-cols is-two-cols-only">
              <div className="content">
                <div className="scrollable-content">
                  <div className="column">
                    <div className="m-free-tile" style={{ cursor: 'default' }}>
                      <picture
                        data-component="APicture"
                        className="a-picture"
                        style={{ cursor: 'pointer' }}
                        data-component-id="7612d5c1-5335-4af2-a9bd-582d2c2365a7"
                      >
                        <img
                          className="a-image"
                          src=" https://image.thehyundai.com/hdcos/images/hdcos/building/2/4/1.jpg"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="column">
                    <div className="m-free-tile" style={{ cursor: 'default' }}>
                      <picture
                        data-component="APicture"
                        className="a-picture"
                        style={{ cursor: 'pointer' }}
                        data-component-id="7612d5c1-5335-4af2-a9bd-582d2c2365a7"
                      >
                        <img
                          className="a-image"
                          src=" https://image.thehyundai.com/hdcos/images/hdcos/building/2/4/2.jpg"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*// o-grid-controller */}
          </div>
          {/* // twocolumns-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            {/* blogtext-*/}
            {/* // blogtext-*/}
            {/* textlog */}
            <div className="contain">
              <span className="richTextSpan"> </span>
              <div className="o-blog-text is-richtext">
                <div className="a-paragraph a-page-paragraph q-body-copy-1">
                  <div style={{ textAlign: 'center' }}>
                    <br />
                    매장 주소:
                    <br />
                    <br />
                    Bağdat Caddesi No: 468 <br />
                    Bostancı Mahallesi <br />
                    34740 Kadıköy <br />
                    Istanbul, Turkey
                    <br />
                    <br />
                    COS 온라인{' '}
                    <a href="/locator">
                      <span style={{ textDecoration: 'underline' }}>매장 찾기</span>
                    </a>
                    에서 가까운 매장을 찾아보세요
                  </div>
                </div>
              </div>
            </div>
            {/* //textlog */}
            {/* ohero */}
            {/* //ohero */}
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="o-social-share">
              <h2 className="a-heading-2 share-media-title">share</h2>
              <a
                href="javascript:;"
                className="a-link share-facebook"
                data-share="facebook"
                data-url="https://www.cos.com/ko-kr/features/places/Istanbul.html"
              >
                <span className="a-icon-social-facebook" />
              </a>
              <a
                href="javascript:;"
                className="a-link share-pinterest"
                data-share="pinterest"
                data-url="https://www.cos.com/ko-kr/features/places/Istanbul.html"
              >
                <span className="a-icon-social-pinterest" />
              </a>
              <a
                href="javascript:;"
                className="a-link share-twitter"
                data-share="twitter"
                data-url="https://www.cos.com/ko-kr/features/places/Istanbul.html"
              >
                <span className="a-icon-social-twitter" />
              </a>
              <a
                href="#"
                className="a-link open-lightbox"
                target="_self"
                data-template="pop-send-mail"
                data-classes="is-medium"
              >
                <span className="a-icon-email" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
