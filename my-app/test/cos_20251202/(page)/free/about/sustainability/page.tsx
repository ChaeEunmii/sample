import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '디자인과 제작 과정',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".chips , .cta-section-bottom {font-weight:700;}\n\n    .chips {\n        font-family: 'SuisseIntl', 'NotoSansKR', '돋움', dotum, sans-serif;\n        display: block;\n        width: 100%;\n        margin: 10px auto 30px;\n    }\n\n    .chips p {\n        font-size: 20px;\n        line-height: 24px;\n        letter-spacing: .02em;\n        color: #1b1b1b;\n        text-align: center;\n        width: 100%;\n        margin: 0 auto 20px auto;\n    }\n\n    .chips a {\n        display: inline-block;\n        text-transform: uppercase;\n        text-decoration: none;\n        letter-spacing: .0825em;\n        cursor: pointer;\n        text-align: center;\n        padding: 10px 12px 6px;\n        margin: 4px 4px 8px 0;\n        border: 1px solid #1b1b1b;\n        color: #1b1b1b;\n        font-size: 12px;\n        line-height: 17px;\n    }\n\n    .chips a:hover {\n        background-color: #1b1b1b;\n        color: #ffffff;\n    }\n\n    .chips .scrollable-content {\n        position: relative;\n        padding: 0px 10px;\n        overflow-x: auto;\n        -webkit-overflow-scrolling: touch;\n        white-space: nowrap;\n        text-align: center;\n    }\n\n    .cta-section {\n        display: flex;\n        justify-content: center;\n        /* gap: 20px;\n      margin-bottom: 60px; */\n        flex-direction: column;\n        border: 1px solid #1b1b1b;\n        margin: 0 auto 30px;\n    }\n\n\n    .fitguide_btn {\n        display: inline-block;\n        width: 100%;\n        line-height: 45px;\n        font-size: 13px;\n        color: #1b1b1b;\n        background: #fff;\n    }\n\n    .fitguide_btn:hover {\n        opacity: 0.7;\n    }\n\n    .a-link.has-underline,\n    .is-richtext a.has-underline>span {\n        color: #fff;\n    }\n\n    .o-grid-controller.is-two-cols .content .scrollable-content {\n        display: block;\n    }\n\n    .o-hero {\n        width: 100%\n    }\n\n    .m-free-tile.headline-preamble-wrapper.a {\n        text-decoration: underline !important\n    }\n\n    .o-blog-text .a-paragraph {\n        font-weight: 400;\n        font-size: 14px;\n        letter-spacing: .04em;\n        line-height: 19px;\n    }\n\n    .article-headline-sub {\n        font-size: 15px !important;\n        line-height: 20px !important;\n    }\n\n    .title2 {\n        font-size: 13px !important;\n        line-height: 18px !important;\n        ;\n    }\n\n    .o-hero .a-picture+.m-teaser.align-left {\n        max-width: 100% !important;\n        width: 100% !important;\n        top: 103%;\n        margin-left: -20px !important\n    }\n\n    pull-quote.a-paragraph.a-page-paragraph {\n        padding-bottom: 40px !important\n    }\n\n    .m-free-tile .a-heading-2 {\n        font-size: 24px;\n        line-height: 17px;\n        letter-spacing: .0525em;\n        text-transform: none;\n        margin-bottom: 13px;\n        margin-top: 35px\n    }\n\n    .button1 {\n        letter-spacing: .06em;\n        margin-bottom: 10px;\n        margin-right: 5px;\n        margin-left: 5px;\n        height: 45px;\n        width: 240px;\n        background-color: #1b1b1b;\n        border: 1px solid #1b1b1b;\n        color: #fff;\n        padding: 12px 9px 12px 8px\n    }\n\n    .keyline .u-cols-sm-12-12 {\n        margin-bottom: 0px;\n    }\n\n    .a-keyline {\n        width: 100% !important;\n    }\n\n    .o-blog-text {\n        margin-top: 0;\n        padding: 0;\n    }\n\n    .o-blog-text.align_left {\n        text-align: left;\n        margin: 0;\n    }\n\n    .o-blog-text.align_left>p {\n        text-align: left !important;\n    }\n\n    .is-three-cols .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n        margin-top: 0;\n        font-size: 30px;\n        line-height: 34px;\n    }\n\n    .is-three-cols .m-free-tile .headline-preamble-wrapper .a-label {\n        font-size: 13px;\n        line-height: 18px;\n    }\n\n    .is-three-cols .m-free-tile .cta-wrapper .cta-link {\n        font-size: 14px;\n        line-height: 20px;\n    }\n\n    .custom_two_cols .content {\n        display: flex;\n        flex-direction: row;\n        max-width: 1600px;\n        margin: 0 auto;\n        padding: 0 30px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .custom_two_cols .column {\n        width: 50%;\n    }\n\n    .custom_two_cols .column .o-blog-text {\n        width: 100%;\n        padding-left: 50px;\n    }\n\n    .custom_two_cols .column .o-blog-text p {\n        text-align: left !important;\n    }\n\n    .custom_sub_title {\n        margin-bottom: 30px;\n        text-align: center;\n        font-size: 40px;\n        line-height: 48px;\n    }\n\n    .custom_anchor_box {\n        margin-bottom: 60px;\n        text-align: center;\n    }\n\n    .custom_anchor_box .anchor {\n        display: inline-block;\n        font-size: 20px;\n        line-height: 25px;\n        margin-right: 10px;\n    }\n\n    .custom_anchor_box .anchor:last-child {\n        margin-right: 0;\n    }\n\n    .custom_anchor_box .anchor u {\n        text-decoration-thickness: 1px;\n    }\n\n    .a-heading-3 {\n        font-size: 13px !important;\n        line-height: 18px !important;\n        margin-bottom: 10px;\n        text-transform: uppercase;\n    }\n\n    .two-cols.m-free-tile .cta-wrapper .cta-link {\n        font-size: 14px;\n        line-height: 20px;\n    }\n\n    .sus_top_tit {\n        text-transform: uppercase;\n    }\n\n\n    .sub_para1 {\n        font-size: 16px;\n        line-height: 1.2em;\n        font-weight: 600;\n    }\n\n    .u-cols-sm-12-12 {\n        padding-right: 0px !important;\n        padding-left: 0px !important;\n    }\n\n    .o-blog-text.align_left {\n        text-align: left;\n        margin: 0;\n    }\n\n    .o-blog-text.align_left>p {\n        text-align: left !important;\n    }\n\n    #sus_box_2023 .first {\n        margin-top: 50px;\n    }\n\n    .sus_btn_box {\n        text-align: center;\n        margin-bottom: 50px;\n    }\n\n    .sus_btn {\n        display: inline-block;\n        width: 240px;\n        line-height: 44px;\n        border: 1px solid #1b1b1b;\n        font-size: 12px;\n    }\n\n    .sus_btn:hover {\n        background: #1b1b1b;\n        color: #fff;\n    }\n\n    .o-grid-controller.is-two-cols .content .scrollable-content {\n        display: block;\n    }\n\n    .chips {\n        width: 70%;\n        margin-top: 40px;\n        margin-bottom: 20px;\n    }\n\n    .cta-section {\n        flex-direction: column;\n    }\n\n    .cta-wrap {\n        display: flex;\n        align-items: center;\n    }\n\n    .cta-wrap .arrow.right:before {\n        transform: translate(-50%, -50%) rotate(135deg);\n    }\n\n    .cta-wrap .arrow {\n        position: relative;\n        display: inline-block;\n        width: 25px;\n        height: 25px;\n        overflow: hidden;\n        vertical-align: middle;\n    }\n\n    .cta-wrap .arrow:before {\n        content: \"\";\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 6px;\n        height: 6px;\n        -webkit-transform: translate(-50%, -50%) rotate(45deg);\n        transform: translate(-50%, -50%) rotate(45deg);\n        margin-top: 0px;\n        border-top: 1px solid #1b1b1b;\n        border-left: 1px solid #1b1b1b;\n    }\n\n    .m-double-button {\n        display: flex;\n        padding: 0 20px;\n    }\n\n    @media (max-width: 1025px) {\n        .o-grid-controller.is-two-cols .content .scrollable-content {\n            display: flex;\n            flex-direction: column-reverse;\n            align-items: center\n        }\n\n    }\n\n    @media (max-width:720px) {\n        /* .cta-section {\n          flex-direction: column;\n      } */\n    }\n\n    @media(min-width:768px) {\n        .para {\n            padding-top: 40px !important\n        }\n\n        .button1 {\n            margin-left: 0;\n            display: inline-block\n        }\n\n        #sus_box_2023 .long_title {\n            width: 83.33%;\n        }\n\n    }\n\n\n\n    @media(max-width:767px) {\n\n        .o-grid-controller.is-three-cols .column {\n            width: 50%\n        }\n\n        .o-grid-controller.is-three-cols .column:nth-child(1) {\n            width: 100%;\n        }\n\n        .o-grid-controller.is-four-cols.is-stacked-on-mobile .content .scrollable-content {\n            padding: 0;\n        }\n\n        .custom_two_cols .content {\n            flex-direction: column-reverse;\n            padding: 0 14px;\n        }\n\n        .custom_two_cols .column {\n            width: 100%;\n        }\n\n        .custom_two_cols .column .o-blog-text {\n            padding-left: 0;\n            margin-bottom: 40px;\n        }\n\n        .custom_sub_title {\n            text-align: left;\n            font-size: 28px;\n            line-height: 34px;\n        }\n\n        .custom_anchor_box {\n            margin-bottom: 40px;\n            text-align: left;\n            overflow-x: auto;\n            white-space: nowrap;\n        }\n\n        .custom_anchor_box .anchor {\n            font-size: 18px;\n            line-height: 22px;\n        }\n\n        .sub_para1 {\n            font-size: 15px;\n            line-height: 19px;\n        }\n\n        .m_align_center>p {\n            text-align: center !important;\n        }\n\n        .is-three-cols .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n            font-size: 24px;\n            line-height: 29px;\n        }\n\n        .parr {\n            padding-bottom: 20px;\n            text-align: center\n        }\n\n        .article-headline {\n            font-size: 40px !important;\n            line-height: 44px !important;\n            margin-left: auto !important;\n            margin-right: auto !important\n        }\n\n        .article-headline-sub {\n            text-align: left !important;\n            font-size: 13px !important;\n            line-height: 18px !important;\n            padding-bottom: 5px !important\n        }\n\n        .pull-quote {\n            font-size: 24px !important;\n            line-height: 29px !important;\n            padding-bottom: 20px !important;\n            padding-top: 2px !important\n        }\n\n        .pull-quote2 {\n            font-size: 24px !important;\n            line-height: 29px !important;\n            padding-bottom: 35px !important;\n            padding-top: 2px !important\n        }\n\n        .keep-reading {\n            padding-top: 15px !important\n        }\n\n        .new {\n            margin: 0rem 0rem 0\n        }\n\n        .o-footer {\n            padding: 0 10px 18px\n        }\n\n        .o-hero .a-picture+.m-teaser.align-left {\n            margin-left: 9px !important\n        }\n\n        .m-free-tile.headline-preamble-wrapper.a {\n            text-decoration: underline !important\n        }\n\n        .m-free-tile .a-heading-2 {\n            font-size: 20px !important\n        }\n\n        .o-hero.image-wrapper {\n            margin-bottom: -35px\n        }\n\n        .keyline .u-cols-sm-12-12 {\n            margin-bottom: 0px;\n        }\n\n        .o-blog-text .article-headline {\n            margin-left: 0 !important;\n            text-align: left !important;\n            font-size: 34px !important;\n            line-height: 39px !important;\n        }\n\n        .o-blog-text .a-paragraph {\n            font-size: 13px !important;\n            line-height: 18px !important;\n        }\n\n        #sus_box_2023 .first {\n            margin-top: 0px !important;\n        }\n\n        #sus_box_2023 .long_title .pull-quote1 {\n            font-size: 24px !important;\n        }\n\n        #sus_box_2023 .sus_title1 {\n            font-size: 24px !important;\n            margin-top: 30px;\n        }\n\n    }\n",
          }}
        />
        <div className="genericpagepar parsys" id="sus_box_2023">
          <div className="text parbase section first">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="richTextSpan">
                  <div className="o-blog-text is-richtext">
                    <p
                      style={{
                        letterSpacing: '0.8px',
                        textAlign: 'center',
                        fontSize: '60.0px',
                        lineHeight: '64.0px',
                        paddingTop: '40.0px',
                        paddingBottom: '25.0px',
                        fontWeight: 600,
                      }}
                      className="article-headline"
                    >
                      디자인과 제작 과정
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="richTextSpan">
                  <div className="o-blog-text is-richtext"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="twocolumns parbase section mv-section pc-margin-bottom-50 mo-margin-bottom-50">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
              <div
                className="o-grid-controller is-two-cols must-margin-0-auto"
                style={{ backgroundImage: 'none', backgroundColor: '#FFFFFF' }}
              >
                <div className="content">
                  <div className="scrollable-content">
                    <div className="column mo-margin-bottom-50" style={{ float: 'none' }}>
                      <div className="freetile parbase section must-margin-0">
                        <div className="m-free-tile two-cols " style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                          <picture
                            data-component="APicture"
                            className="a-picture"
                            data-component-id="3bdcab38-4c09-4576-9803-cb1eecad3735"
                          >
                            <img
                              src="https://image.thehyundai.com/cos/hyundai/2025/8/27/AW25_Campaign_14.jpg"
                              style={{ width: '100%' }}
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="freetile parbase section must-margin-0">
                        <div className="m-free-tile two-cols" style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                          <div className="richTextSpan">
                            <div className="o-blog-text is-richtext" style={{ width: '100%', textAlign: 'left' }}>
                              <p
                                style={{
                                  textAlign: 'left',
                                  fontSize: '20.0px',
                                  padding: '25px 0',
                                  lineHeight: '26.0px',
                                }}
                                className="article-headline-sub"
                              >
                                COS는 뛰어난 퀄리티과 오래도록 지속 가능한 디자인에 기반을 둔 레디 투 웨어와 액세서리
                                컬렉션을 선보입니다. 장인 정신과 혁신에 세심한 주의를 기울이는 COS 아틀리에에서는
                                차별화된 핏, 패브릭, 디테일을 완성하기 위해 최선을 다하고 있습니다.
                                <br />
                                <br />
                                컬렉션 전반에 걸쳐 천연 섬유를 우선적으로 사용하며, 오가닉과 리사이클 소재, 그리고
                                Textile Exchange의 동물복지 기준을 충족하는 인증 섬유 등 프리미엄 소재를 엄선해
                                사용합니다. 모든 원단은 고유한 질감, 실의 밀도, 섬유 길이, 마감 처리 및 전반적인 품질을
                                기준으로 신중히 선택됩니다.&nbsp;
                                <br />
                                <br />
                                COS는 브랜드와 협업하는 이들을 지원하고, 더 넓은 공동체에 긍정적인 변화를 만들기 위한
                                다양한 방법을 지속적으로 모색합니다. 이는 자선 단체와의 협업은 물론, 공급망 주변
                                지역사회의 양성 평등 향상을 위한 비영리 단체에 대한 투자까지 포함합니다.&nbsp;
                              </p>
                              <div className="keyline parbase section">
                                <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="column mo-margin-bottom-50"
                      style={{ float: 'none', marginLeft: 0, marginBottom: 50 }}
                    >
                      <div className="cta-section">
                        <div className="m-double-button" style={{ textAlign: 'left' }}>
                          <a className="fitguide_btn" href="/free/about/sustainability/products">
                            제품
                          </a>
                          <div className="cta-wrap">
                            <i className="arrow right" role="img" />
                          </div>
                        </div>
                        <div
                          className="m-double-button"
                          style={{
                            textAlign: 'left',
                            borderTop: '1px solid #1b1b1b',
                            borderBottom: '1px solid #1b1b1b',
                          }}
                        >
                          <a className="fitguide_btn" href="/free/about/sustainability/people">
                            사람
                          </a>
                          <div className="cta-wrap">
                            <i className="arrow right" role="img" />
                          </div>
                        </div>
                        <div className="m-double-button" style={{ textAlign: 'left' }}>
                          <a className="fitguide_btn" href="/free/about/sustainability/storeExperience">
                            스토어 경험
                          </a>
                          <div className="cta-wrap">
                            <i className="arrow right" role="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chips">
            <p>EXPLORE MORE</p>
          </div>
          <div className="cta-section-bottom">
            <div className="m-double-button" style={{ textAlign: 'left' }}>
              <a className="fitguide_btn" href="/free/about/sustainability/people">
                사람
              </a>
            </div>
            <div className="m-double-button" style={{ textAlign: 'left' }}>
              <a className="fitguide_btn" href="/free/about/sustainability/products">
                제품
              </a>
            </div>
            <div className="m-double-button" style={{ textAlign: 'left' }}>
              <a className="fitguide_btn" href="/free/about/sustainability/storeExperience">
                스토어 경험
              </a>
            </div>
            <div className="m-double-button" style={{ textAlign: 'left' }}>
              <a className="fitguide_btn" href="/free/about/sustainability">
                디자인과 제작 과정
              </a>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n    .cta-section-bottom {\n        display: flex;\n        padding: 0 10%;\n        lign-items: center;\n        justify-content: center;\n        margin: 0 auto 30px;;\n        position: relative;\n    }\n\n    .cta-section-bottom .fitguide_btn {\n        padding: 0 25px !important;\n    }\n\n    @media (max-width: 1025px) {\n        .cta-section-bottom {\n            flex-direction: column;\n            padding: 0;\n        }\n\n        .cta-section-bottom .fitguide_btn {\n            padding: 0;\n        }\n    }\n',
            }}
          />
        </div>
      </div>
    </FreeHtml>
  );
}
