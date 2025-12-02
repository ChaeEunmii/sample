import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '스타일링 - COS KR',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <div
          className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width"
          style={{ marginBottom: 30 }}
        >
          <div className="contain">
            <div className="richTextSpan">
              <div className="o-blog-text is-richtext">
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    lineHeight: '19px',
                    fontWeight: 400,
                    letterSpacing: '0.04em',
                  }}
                  className="a-paragraph a-page-paragraph"
                >
                  HOME / FEATURES / 스타일링
                </p>
                <p
                  className="magazine-title"
                  style={{
                    letterSpacing: '0.8px',
                    textAlign: 'center',
                    fontSize: 60,
                    lineHeight: '64px',
                    paddingTop: 15,
                    paddingBottom: 25,
                  }}
                >
                  스타일링
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="relative" style={{ maxWidth: 'unset' }}>
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
              {/* o-grid-controller */}
              <div className="magazine-type o-grid-controller u-clearfix is-stacked-on-mobile is-four-cols">
                <div className="u-clearfix" />
                <div className="content" style={{ overflow: 'hidden' }}>
                  <div className="scrollable-content magazine-2021" style={{ padding: 0 }}>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="/free/about/features/styling/womens-trench"
                          style={{ cursor: 'pointer' }}
                          data-component-id="f5f19500-a08e-4f8c-bf2d-fca3f95594ed"
                        >
                          <img
                            className="a-image loaded initial loading"
                            src="https://image.thehyundai.com/cos/hyundai/2025/3/19/SS25_Campaign_20.jpg"
                            data-was-processed="true"
                          />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            트렌치코트 스타일링&nbsp;
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            계절이 변화하는 시기를 대표하는 아우터웨어. 정교한 제작 과정과 구조에 중점을 두고 디자인된
                            트렌치코트를 소개합니다.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="/free/about/features/styling/womens-trench"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="/free/about/features/styling/fw-2025-palette"
                          style={{ cursor: 'pointer' }}
                          data-component-id="cf8afbf5-2531-43eb-9d3f-a1f82cb691d0"
                        >
                          <img
                            className="a-image loaded initial loading"
                            src="https://image.thehyundai.com/cos/hyundai/2025/9/17/AW25_Campaign_40.jpg"
                            data-was-processed="true"
                          />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            COS 컬러 에딧: 2025 가을 겨울 컬러 팔레트&nbsp;
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            시즌 워드로브에서 가장 돋보이는 컬러를 확인해 보세요.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="/free/about/features/styling/fw-2025-palette"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*// o-grid-controller */}
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n        .magazine-2021 {\n          display: flex !important;\n          flex-wrap: wrap;\n        }\n        .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n          font-size: 24px;\n          line-height: 28px;\n          text-transform: none;\n          letter-spacing: 0.04em;\n        }\n        .m-free-tile .headline-preamble-wrapper p {\n          font-size: 14px;\n          line-height: 18px;\n        }\n        @container root (min-width: 787px) {\n          .magazine-2021 .column {\n            margin-bottom: 40px;\n          }\n        }\n\n        @media all and (-ms-high-contrast: none) {\n          .magazine-2021 .column {\n            margin-bottom: 40px;\n            flex: none;\n          }\n        }\n\n        .a-image {\n          aspect-ratio: 750 / 1000;\n        }\n      ',
              }}
            />
          </div>
        </div>
        <div className="o-spacing" />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
          <hr className="a-keyline" />
        </div>
        <div className="o-spacing" />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div id="cqcanvas">
            <div className="chips">
              <p>EXPLORE MORE</p>
              <div className="scrollable-content" style={{ whiteSpace: 'normal', height: 'auto' }}>
                <a href=" https://www.cos.com/ko-kr/women.html">여성</a>
                <a href=" https://www.cos.com/ko-kr/men.html">남성</a>
                <a href="/free/about/sustainability">지속가능성</a>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    .o-text-block.u-align-center {\n      width: 60%;\n      margin-bottom: 0;\n      padding-bottom: 0;\n    }\n    .preamble-section .a-paragraph {\n      font-size: 50px;\n      line-height: 1.25;\n      font-weight: 700;\n    }\n    .h2-text {\n      margin: 0 auto;\n      width: 70%;\n      margin-bottom: 10px;\n    }\n    .h2-text h3 {\n      margin: 0 auto;\n      width: 40%;\n      margin-bottom: 30px;\n      text-align: center;\n    }\n    h2 {\n      font-size: 50px;\n      font-weight: 700;\n      line-heigh: 1.25;\n    }\n    h3 {\n      font-size: 13px;\n      font-weight: 400;\n    }\n    .text-2cols {\n      display: flex;\n      margin: 0 auto;\n      width: 50%;\n      gap: 20px;\n    }\n    .text-2cols p {\n      width: 50%;\n    }\n    .text-2cols.mo-2cols .cols-right {\n      text-align: right;\n    }\n    .chips {\n      display: block;\n      width: 100%;\n      margin: 50px auto 50px;\n      font-weight: 600;\n    }\n    .chips p {\n      font-size: 1rem;\n      line-height: 34px;\n      letter-spacing: 0.02em;\n      color: #1b1b1b;\n      text-align: center;\n      width: 100%;\n      margin: 0 auto 20px auto;\n    }\n    .chips a {\n      display: inline-block;\n      text-transform: uppercase;\n      text-decoration: none;\n      letter-spacing: 0.0825em;\n      cursor: pointer;\n      text-align: center;\n      padding: 10px 12px 6px;\n      margin: 4px 4px 8px 0;\n      color: #1b1b1b;\n      font-size: 0.813rem;\n      line-height: 145%;\n    }\n    /*.chips a:hover {background-color: #1b1b1b; color: #ffffff;}*/\n    .chips .scrollable-content {\n      position: relative;\n      padding: 0px 10px;\n      overflow-x: auto;\n      -webkit-overflow-scrolling: touch;\n      white-space: nowrap;\n      text-align: center;\n      display: flex;\n      justify-content: center;\n      gap: 10%;\n    }\n    .text-2cols i {\n      font-size: 13px;\n      font-style: normal;\n    }\n    .a-image {\n      cursor: pointer;\n    }\n    a {\n      text-decoration: underline;\n    }\n\n    @container root (min-width: 1024px) {\n      .lg\\:pb-30 {\n        padding-bottom: 1.5rem;\n      }\n    }\n\n    @container root (max-width: 760px) {\n      h2 {\n        font-size: 40px;\n        line-height: 1.25;\n      }\n      .h2-text h3 {\n        margin: 0;\n        width: 90%;\n        margin-bottom: 10px;\n        text-align: left;\n      }\n      .h2-text {\n        width: 100%;\n        margin: 0 20px;\n      }\n      .text-2cols.mo-2cols {\n        flex-direction: row;\n      }\n      .text-2cols.mo-2cols .cols-right {\n        width: 10%;\n      }\n      .o-text-block.u-align-center {\n        width: 100%;\n        padding: 0 10px;\n      }\n      .text-2cols {\n        width: 100%;\n        flex-direction: column;\n        padding: 0 20px;\n      }\n      .text-2cols p {\n        width: 100%;\n      }\n      .text {\n        width: 100%;\n      }\n      .container-523574.flex.flex-col.w-full.lg\\:pb-30.pb-20.gap-20.lg\\:gap-30.manual-cpnt {\n        padding-bottom: 20px;\n      }\n      .chips .scrollable-content {\n        flex-direction: column;\n      }\n      .chips a {\n        text-align: left;\n      }\n      .pb-20 {\n        padding-bottom: 0rem;\n      }\n    }\n  ',
          }}
        />
      </div>
    </FreeHtml>
  );
}
