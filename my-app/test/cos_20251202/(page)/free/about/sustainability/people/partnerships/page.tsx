import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '파트너십과 콜라보레이션',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    .chips {\n        font-family: \'SuisseIntl\', \'NotoSansKR\', \'돋움\', dotum, sans-serif;\n        display: block;\n        width: 100%;\n        margin: 10px auto 30px;\n    }\n\n    .chips p {\n        font-size: 20px;\n        line-height: 24px;\n        letter-spacing: .02em;\n        color: #1b1b1b;\n        text-align: center;\n        width: 100%;\n        margin: 0 auto 20px auto;\n    }\n\n    .chips a {\n        display: inline-block;\n        text-transform: uppercase;\n        text-decoration: none;\n        letter-spacing: .0825em;\n        cursor: pointer;\n        text-align: center;\n        padding: 10px 12px 6px;\n        margin: 4px 4px 8px 0;\n        border: 1px solid #1b1b1b;\n        color: #1b1b1b;\n        font-size: 12px;\n        line-height: 17px;\n    }\n\n    .chips a:hover {\n        background-color: #1b1b1b;\n        color: #ffffff;\n    }\n\n    .chips .scrollable-content {\n        position: relative;\n        padding: 0px 10px;\n        overflow-x: auto;\n        -webkit-overflow-scrolling: touch;\n        white-space: nowrap;\n        text-align: center;\n    }\n\n    .cta-section {\n        display: flex;\n        justify-content: center;\n        /* gap: 20px;\n      margin-bottom: 60px; */\n        flex-direction: column;\n        border: 1px solid #1b1b1b\n    }\n\n    .fitguide_btn {\n        display: flex;\n        width: 100%;\n        line-height: 45px;\n        font-size: 13px;\n        color: #1b1b1b;\n        background: #fff;\n        justify-content: space-between;\n        align-items: center;\n        padding: 0 20px;\n    }\n\n    .fitguide_btn:hover {\n        opacity: 0.7;\n    }\n\n    .a-link.has-underline,\n    .is-richtext a.has-underline>span {\n        color: #fff;\n    }\n\n    .o-grid-controller.is-two-cols .content .scrollable-content {\n        display: block;\n    }\n\n    .o-hero {\n        width: 100%\n    }\n\n    .m-free-tile.headline-preamble-wrapper.a {\n        text-decoration: underline !important\n    }\n\n    .o-blog-text .a-paragraph {\n        font-weight: 400;\n        font-size: 14px;\n        letter-spacing: .04em;\n        line-height: 19px;\n    }\n\n    .article-headline-sub {\n        font-size: 15px !important;\n        line-height: 20px !important;\n    }\n\n    .title2 {\n        font-size: 13px !important;\n        line-height: 18px !important;\n        ;\n    }\n\n    .o-hero .a-picture+.m-teaser.align-left {\n        max-width: 100% !important;\n        width: 100% !important;\n        top: 103%;\n        margin-left: -20px !important\n    }\n\n    .pull-quote.a-paragraph.a-page-paragraph {\n        padding-bottom: 40px !important\n    }\n\n    .m-free-tile .a-heading-2 {\n        font-size: 24px;\n        line-height: 17px;\n        letter-spacing: .0525em;\n        text-transform: none;\n        margin-bottom: 13px;\n        margin-top: 35px\n    }\n\n    .button1 {\n        letter-spacing: .06em;\n        margin-bottom: 10px;\n        margin-right: 5px;\n        margin-left: 5px;\n        height: 45px;\n        width: 240px;\n        background-color: #1b1b1b;\n        border: 1px solid #1b1b1b;\n        color: #fff;\n        padding: 12px 9px 12px 8px\n    }\n\n    .keyline .u-cols-sm-12-12 {\n        margin-bottom: 0px;\n    }\n\n    .a-keyline {\n        width: 100% !important;\n    }\n\n    .o-blog-text {\n        margin-top: 0;\n        padding: 0 !important;\n    }\n\n    .o-blog-text.align_left {\n        text-align: left;\n        margin: 0;\n    }\n\n    .o-blog-text.align_left>p {\n        text-align: left !important;\n    }\n\n    .is-three-cols .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n        margin-top: 0;\n        font-size: 30px;\n        line-height: 34px;\n    }\n\n    .is-three-cols .m-free-tile .headline-preamble-wrapper .a-label {\n        font-size: 13px;\n        line-height: 18px;\n    }\n\n    .is-three-cols .m-free-tile .cta-wrapper .cta-link {\n        font-size: 14px;\n        line-height: 20px;\n    }\n\n    .custom_two_cols .content {\n        display: flex;\n        flex-direction: row;\n        max-width: 1600px;\n        margin: 0 auto;\n        padding: 0 30px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .custom_two_cols .column {\n        width: 50%;\n    }\n\n    .custom_two_cols .column .o-blog-text {\n        width: 100%;\n        padding-left: 50px;\n    }\n\n    .custom_two_cols .column .o-blog-text p {\n        text-align: left !important;\n    }\n\n    .custom_sub_title {\n        margin-bottom: 30px;\n        text-align: center;\n        font-size: 40px;\n        line-height: 48px;\n    }\n\n    .custom_anchor_box {\n        margin-bottom: 60px;\n        text-align: center;\n    }\n\n    .custom_anchor_box .anchor {\n        display: inline-block;\n        font-size: 20px;\n        line-height: 25px;\n        margin-right: 10px;\n    }\n\n    .custom_anchor_box .anchor:last-child {\n        margin-right: 0;\n    }\n\n    .custom_anchor_box .anchor u {\n        text-decoration-thickness: 1px;\n    }\n\n    .a-heading-3 {\n        font-size: 13px !important;\n        line-height: 18px !important;\n        margin-bottom: 10px;\n        text-transform: uppercase;\n    }\n\n    .two-cols.m-free-tile .cta-wrapper .cta-link {\n        font-size: 14px;\n        line-height: 20px;\n    }\n\n    .sus_top_tit {\n        text-transform: uppercase;\n    }\n\n    .sub_para1 {\n        font-size: 20px;\n        line-height: 1.2em;\n    }\n\n    .u-cols-sm-12-12 {\n        padding-right: 0px !important;\n        padding-left: 0px !important;\n    }\n\n    .o-blog-text.align_left {\n        text-align: left;\n        margin: 0;\n    }\n\n    .o-blog-text.align_left>p {\n        text-align: left !important;\n    }\n\n    #sus_box_2023 .first {\n        margin-top: 50px;\n    }\n\n    .sus_btn_box {\n        text-align: center;\n        margin-bottom: 50px;\n    }\n\n    .sus_btn {\n        display: inline-block;\n        width: 240px;\n        line-height: 44px;\n        border: 1px solid #1b1b1b;\n        font-size: 12px;\n    }\n\n    .sus_btn:hover {\n        background: #1b1b1b;\n        color: #fff;\n    }\n\n    .o-grid-controller.is-two-cols .content .scrollable-content {\n        display: block;\n    }\n\n    .chips {\n        width: 70%;\n        margin-top: 40px;\n        margin-bottom: 20px;\n    }\n\n    .cta-section {\n        flex-direction: column;\n    }\n\n    .cta-wrap .arrow.right:before {\n        transform: translate(-50%, -50%) rotate(135deg);\n    }\n\n    .cta-wrap .arrow {\n        position: relative;\n        display: inline-block;\n        width: 25px;\n        height: 25px;\n        overflow: hidden;\n        vertical-align: middle;\n    }\n\n    .cta-wrap .arrow:before {\n        content: "";\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 6px;\n        height: 6px;\n        -webkit-transform: translate(-50%, -50%) rotate(45deg);\n        transform: translate(-50%, -50%) rotate(45deg);\n        margin-top: 0px;\n        border-top: 1px solid #1b1b1b;\n        border-left: 1px solid #1b1b1b;\n    }\n\n    .o-grid-controller.is-two-cols .column {\n        width: 33.3333% !important;\n        margin-left: 0 !important;\n    }\n\n    .u-row>[class^="o-"] {\n        margin: 0 auto !important;\n    }\n\n    [class*=" u-cols"].u-center-col,\n    [class^="u-cols"].u-center-col {\n        float: none;\n        width: 32%;\n        margin: 0 0% 0 17%;\n    }\n\n    @media (max-width: 1025px) {\n        /* .chips {\n          width: 70%;\n          margin-top: 40px;\n          margin-bottom: 20px;\n      } */\n        /* .chips a {text-transform: initial; letter-spacing: .04em; font-size: 13px; line-height: 18px;} */\n    }\n\n    @media (max-width:720px) {\n        /* .cta-section {\n          flex-direction: column;\n      } */\n    }\n\n    @media(min-width:768px) {\n        .para {\n            padding-top: 40px !important\n        }\n\n        .button1 {\n            margin-left: 0;\n            display: inline-block\n        }\n\n        #sus_box_2023 .long_title {\n            width: 83.33%;\n        }\n\n    }\n\n\n    @media(max-width:767px) {\n        .o-grid-controller.is-three-cols .column {\n            width: 50%\n        }\n\n        .o-grid-controller.is-three-cols .column:nth-child(1) {\n            width: 100%;\n        }\n\n        .o-grid-controller.is-four-cols.is-stacked-on-mobile .content .scrollable-content {\n            padding: 0;\n        }\n\n        .custom_two_cols .content {\n            flex-direction: column-reverse;\n            padding: 0 14px;\n        }\n\n        .custom_two_cols .column {\n            width: 100%;\n        }\n\n        .custom_two_cols .column .o-blog-text {\n            padding-left: 0;\n            margin-bottom: 40px;\n        }\n\n        .custom_sub_title {\n            text-align: left;\n            font-size: 28px;\n            line-height: 34px;\n        }\n\n        .custom_anchor_box {\n            margin-bottom: 40px;\n            text-align: left;\n            overflow-x: auto;\n            white-space: nowrap;\n        }\n\n        .custom_anchor_box .anchor {\n            font-size: 18px;\n            line-height: 22px;\n        }\n\n        .sub_para1 {\n            font-size: 15px;\n            line-height: 19px;\n        }\n\n        .m_align_center>p {\n            text-align: center !important;\n        }\n\n        .is-three-cols .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n            font-size: 24px;\n            line-height: 29px;\n        }\n\n        .parr {\n            padding-bottom: 20px;\n            text-align: center\n        }\n\n        .article-headline {\n            font-size: 40px !important;\n            line-height: 44px !important;\n            margin-left: auto !important;\n            margin-right: auto !important\n        }\n\n        .article-headline-sub {\n            text-align: left !important;\n            font-size: 13px !important;\n            line-height: 18px !important;\n            padding-bottom: 5px !important\n        }\n\n        .pull-quote {\n            font-size: 24px !important;\n            line-height: 29px !important;\n            padding-bottom: 20px !important;\n            padding-top: 2px !important\n        }\n\n        .pull-quote2 {\n            font-size: 24px !important;\n            line-height: 29px !important;\n            padding-bottom: 35px !important;\n            padding-top: 2px !important\n        }\n\n        .keep-reading {\n            padding-top: 15px !important\n        }\n\n        .new {\n            margin: 0rem 0rem 0\n        }\n\n        .o-footer {\n            padding: 0 10px 18px\n        }\n\n        .o-hero .a-picture+.m-teaser.align-left {\n            margin-left: 9px !important\n        }\n\n        .m-free-tile.headline-preamble-wrapper.a {\n            text-decoration: underline !important\n        }\n\n        .m-free-tile .a-heading-2 {\n            font-size: 20px !important\n        }\n\n        .o-hero.image-wrapper {\n            margin-bottom: -35px\n        }\n\n        .keyline .u-cols-sm-12-12 {\n            margin-bottom: 0px;\n        }\n\n        .o-blog-text .article-headline {\n            margin-left: 0 !important;\n            text-align: left !important;\n            font-size: 34px !important;\n            line-height: 39px !important;\n        }\n\n        .o-blog-text .a-paragraph {\n            font-size: 13px !important;\n            line-height: 18px !important;\n        }\n\n        #sus_box_2023 .first {\n            margin-top: 30px;\n        }\n\n        #sus_box_2023 .long_title .pull-quote1 {\n            font-size: 24px !important;\n        }\n\n        #sus_box_2023 .sus_title1 {\n            font-size: 24px !important;\n            margin-top: 30px;\n        }\n\n        .o-grid-controller.is-two-cols .content .scrollable-content {\n            display: flex;\n            flex-direction: column-reverse;\n            align-items: center\n        }\n\n        [class*=" u-cols"].u-center-col,\n        [class^="u-cols"].u-center-col {\n            width: 100%;\n            margin: 0;\n        }\n    }\n',
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
                        textAlign: 'center',
                        fontSize: 14,
                        lineHeight: '19px',
                        fontWeight: 400,
                        letterSpacing: '0.04em',
                      }}
                      className="article-category"
                    >
                      디자인과 제작 과정 / 사람 / 파트너십과 콜라보레이션
                    </p>
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
                      파트너십과 콜라보레이션
                    </p>
                  </div>
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
                          data-component-id="bd39a4c6-2d23-432d-954d-1ec18878b71b"
                        >
                          <img
                            src="https://image.thehyundai.com/cos/hyundai/2024/9/2/000918 COS 06K MRS low-res-1.jpg"
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
                                fontSize: '15.0px',
                                lineHeight: '20.0px',
                                fontWeight: 400,
                                letterSpacing: 1,
                              }}
                              className="a-paragraph a-page-paragraph must-padding-0 sus_top_tit"
                            ></p>
                            <p
                              style={{
                                textAlign: 'left',
                                fontSize: '20.0px',
                                paddingBottom: '25.0px',
                                lineHeight: '26.0px',
                              }}
                              className="article-headline-sub"
                            >
                              선구적인 시각을 가진 다양한 인물, 익스클루시브 아이템과 디자이너 콜라보레이션을 통해
                              커뮤니티를 지지하며, 매년 지원하는 자선 단체와 오래도록 지속되는 관계를 구축합니다.
                            </p>
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
                      <a className="fitguide_btn" href="/free/about/sustainability/people/suppliers">
                        협력업체를 만나보세요
                        <div className="m-double-button" style={{ textAlign: 'left' }}>
                          <div className="cta-wrap">
                            <i className="arrow right" role="img" />
                          </div>
                        </div>
                      </a>
                      <a
                        className="fitguide_btn"
                        href="/free/about/sustainability/people/progress"
                        style={{ borderTop: '1px solid #1b1b1b' }}
                      >
                        공급망에서의 성 평등
                        <div className="m-double-button" style={{ textAlign: 'left' }}>
                          <div className="cta-wrap">
                            <i className="arrow right" role="img" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    .o-hero {\n        width: 100%\n    }\n\n    .m-free-tile.headline-preamble-wrapper.a {\n        text-decoration: underline !important\n    }\n\n    .o-blog-text .a-paragraph {\n        font-weight: 400;\n        font-size: 14px;\n        letter-spacing: .04em;\n        line-height: 19px;\n    }\n\n    .article-headline-sub {\n        font-size: 15px !important;\n        line-height: 20px !important;\n    }\n\n    .title2 {\n        font-size: 13px !important;\n        line-height: 18px !important;\n    }\n\n    .o-hero .a-picture+.m-teaser.align-left {\n        max-width: 100% !important;\n        width: 100% !important;\n        top: 103%;\n        margin-left: -20px !important\n    }\n\n    .pull-quote.a-paragraph.a-page-paragraph {\n        padding-bottom: 40px !important\n    }\n\n    .m-free-tile .a-heading-2 {\n        font-size: 24px;\n        line-height: 17px;\n        letter-spacing: .0525em;\n        text-transform: none;\n        margin-bottom: 13px;\n        margin-top: 35px\n    }\n\n    .button1 {\n        letter-spacing: .06em;\n        margin-bottom: 10px;\n        margin-right: 5px;\n        margin-left: 5px;\n        height: 45px;\n        width: 240px;\n        background-color: #1b1b1b;\n        border: 1px solid #1b1b1b;\n        color: #fff;\n        padding: 12px 9px 12px 8px;\n    }\n\n    .keyline .u-cols-sm-12-12 {\n        margin-bottom: 10px;\n        width: 50%;\n    }\n\n    .o-blog-text {\n        margin-top: 0;\n        width: 66.33333%;\n    }\n\n    .o-blog-text.align_left {\n        text-align: left;\n        margin: 0;\n    }\n\n    .o-blog-text.align_left>p {\n        text-align: left !important;\n    }\n\n    .is-three-cols .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n        margin-top: 0;\n        font-size: 30px;\n        line-height: 34px;\n    }\n\n    .is-three-cols .m-free-tile .headline-preamble-wrapper .a-label {\n        font-size: 13px;\n        line-height: 18px;\n    }\n\n    .is-three-cols .m-free-tile .cta-wrapper .cta-link {\n        font-size: 14px;\n        line-height: 20px;\n    }\n\n    .custom_two_cols .content {\n        display: flex;\n        flex-direction: column;\n        max-width: 1600px;\n        margin: 0 auto;\n        padding: 0 30px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .custom_two_cols .column {\n        width: 50%;\n    }\n\n    .custom_two_cols .column .o-blog-text {\n        width: 100%;\n        padding-right: 50px;\n    }\n\n    .custom_sub_title {\n        margin-bottom: 30px;\n        text-align: left;\n        font-size: 40px;\n        line-height: 48px;\n    }\n\n    .custom_anchor_box {\n        margin-bottom: 60px;\n        text-align: center;\n    }\n\n    .custom_anchor_box .anchor {\n        display: inline-block;\n        font-size: 20px;\n        line-height: 25px;\n        margin-right: 10px;\n    }\n\n    .custom_anchor_box .anchor:last-child {\n        margin-right: 0;\n    }\n\n    .custom_anchor_box .anchor u {\n        text-decoration-thickness: 1px;\n    }\n\n    .a-heading-3 {\n        font-size: 15px !important;\n        line-height: 18px !important;\n        margin-bottom: 15px;\n        text-transform: uppercase;\n    }\n\n    .two-cols.m-free-tile .cta-wrapper .cta-link {\n        font-size: 14px;\n        line-height: 20px;\n    }\n\n    .sus_top_tit {\n        text-transform: uppercase;\n    }\n\n    .sub_para1 {\n        font-size: 20px;\n        line-height: 24px;\n    }\n\n    .magazine-type .content .colum {\n        display: block !important;\n        margin-left: 16.8888% !important;\n    }\n\n    .m_align_center>p {\n        text-align: left !important;\n        font-size: 20.0px;\n        padding-bottom: 0px;\n        line-height: 26.0px;\n        width: 50%;\n    }\n\n    .o-grid-controller.is-three-cols .column.leftcolum {\n        margin-left: -34%;\n    }\n\n    .o-grid-controller.is-three-cols .column {\n        padding: 10px;\n    }\n\n    @media(min-width:768px) {\n        .para {\n            padding-top: 40px !important\n        }\n\n        .button1 {\n            margin-left: 0;\n            display: inline-block\n        }\n\n    }\n\n    @media(max-width:767px) {\n        .custom_two_cols .content {\n            padding: 0 14px;\n        }\n\n        .custom_two_cols .column {\n            width: 100%;\n        }\n\n        .custom_two_cols .column .o-blog-text {\n            padding-right: 0;\n            margin-bottom: 40px;\n        }\n\n        .custom_sub_title {\n            font-size: 28px;\n            line-height: 34px;\n        }\n\n        .custom_anchor_box {\n            margin: 0 auto 40px;\n            overflow-x: auto;\n            white-space: nowrap;\n            display: flex;\n            flex-direction: column;\n            width: 50%;\n        }\n\n        .custom_anchor_box .anchor {\n            font-size: 18px;\n            line-height: 22px;\n        }\n\n        .touch_target .anchor {\n            margin: 10px 0;\n        }\n\n        .sub_para1 {\n            font-size: 15px;\n            line-height: 19px;\n        }\n\n        .is-three-cols .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n            font-size: 24px;\n            line-height: 29px;\n        }\n\n        .parr {\n            padding-bottom: 20px;\n            text-align: center\n        }\n\n        .article-headline {\n            font-size: 40px !important;\n            line-height: 44px !important;\n            margin-left: auto !important;\n            margin-right: auto !important\n        }\n\n        .article-headline-sub {\n            font-size: 13px !important;\n            line-height: 18px !important;\n            padding-bottom: 5px !important\n        }\n\n        .pull-quote {\n            font-size: 24px !important;\n            line-height: 29px !important;\n            padding-bottom: 20px !important;\n            padding-top: 2px !important\n        }\n\n        .pull-quote2 {\n            font-size: 24px !important;\n            line-height: 29px !important;\n            padding-bottom: 35px !important;\n            padding-top: 2px !important\n        }\n\n        .keep-reading {\n            padding-top: 15px !important\n        }\n\n        .new {\n            margin: 0rem 0rem 0\n        }\n\n        .scrollable-content.magazine-2021 {\n            display: flex;\n            flex-direction: row;\n        }\n\n        .o-grid-controller.is-three-cols .column {\n            width: 100%;\n        }\n\n        .o-grid-controller.is-three-cols .column:nth-child(1) {\n            width: 100%;\n        }\n\n        .o-footer {\n            padding: 0 10px 18px\n        }\n\n        .o-hero .a-picture+.m-teaser.align-left {\n            margin-left: 9px !important\n        }\n\n        .m-free-tile.headline-preamble-wrapper.a {\n            text-decoration: underline !important\n        }\n\n        .m-free-tile .a-heading-2 {\n            font-size: 20px !important\n        }\n\n        .o-hero.image-wrapper {\n            margin-bottom: -35px\n        }\n\n        .keyline .u-cols-sm-12-12 {\n            margin-bottom: 0px;\n        }\n\n        .o-blog-text .article-headline {\n            margin-left: 0 !important;\n            font-size: 34px !important;\n            line-height: 39px !important;\n        }\n\n        .o-blog-text .a-paragraph {\n            font-size: 13px !important;\n            line-height: 18px !important;\n        }\n\n        .o-grid-controller.is-two-cols .column,\n        .o-blog-text {\n            width: 100% !important;\n        }\n\n        .magazine-type .content .colum {\n            margin: 0 !important;\n        }\n\n        .m_align_center>p {\n            width: 100%;\n        }\n\n        .o-grid-controller.is-three-cols .column.leftcolum {\n            margin-left: 0%;\n        }\n\n        .keyline .u-cols-sm-12-12 {\n            width: 100%;\n        }\n\n        .o-grid-controller.is-three-cols .column {\n            padding: 0px;\n        }\n    }\n',
          }}
        />
        <div id="suppliers" style={{ clear: 'both' }} />
        <div className="text parbase section">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="contain">
              <div className="richTextSpan">
                <div className="o-blog-text is-richtext m_align_center">
                  <div className="keyline parbase section">
                    <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
                      <hr className="a-keyline" />
                    </div>
                  </div>
                  <p className="custom_sub_title" style={{ textAlign: 'left', fontWeight: 600 }}>
                    다양성을 위한 지지
                  </p>
                  <p className="article-headline-sub" style={{ marginBottom: 30 }}>
                    사회활동가 자나야 퓨처 칸(Janaya Future Khan)부터 배우 조디 터너 스미스(Jodie-Turner-Smith)와 그레타
                    리(Greta Lee)까지, 미래에 대해 새로운 관점으로 바라보는 아티스트를 만나보세요.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="contain">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
              {/* o-grid-controller */}
              <div className="magazine-type o-grid-controller u-clearfix is-stacked-on-mobile is-three-cols">
                <div className="u-clearfix"></div>
                <div className="content" style={{ overflow: 'hidden' }}>
                  <div className="scrollable-content magazine-2021">
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        {' '}
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="https://www.cos.com/ko-kr/features/people/interview-janaya-future-khan-sustainability-aw21.html"
                          style={{ cursor: 'pointer' }}
                          data-component-id="e0db4c43-1a1b-4b53-9022-d3030c17180e"
                        >
                          <img
                            className="a-image loaded initial"
                            src="https://image.thehyundai.com/cos/hyundai/2024/9/2/Photo10.jpg"
                            data-was-processed="true"
                          />{' '}
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-3" style={{ cursor: 'default' }}>
                            자나야 퓨처 칸이 말하는 패션{' '}
                          </h2>
                          <p className="a-label js-a-label " style={{ cursor: 'default' }}>
                            COS와의 인터뷰에서 자나야는 활동가 및 사회 정의 교육자로 활동하며 지속가능성의 현 상황을
                            알리고 미래를 재고하는 것이 중요하다고 이야기합니다.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="https://www.cos.com/ko-kr/features/people.html"
                          >
                            더 보기
                            <img
                              className="inline h-4 w-4 fill-current -mt-px ml-1"
                              src="https://image.thehyundai.com/cos/images/cos/02/chevron-right.svg"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*coloum*/}
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        {' '}
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="https://www.cos.com/ko-kr/features/people/interview-paloma-elsesser-aw22.html"
                          style={{ cursor: 'pointer' }}
                          data-component-id="e4685226-22db-4dde-aee7-4cd07816ab6c"
                        >
                          <img
                            className="a-image loaded initial"
                            src="https://image.thehyundai.com/cos/hyundai/2024/9/2/Photo11.jpg"
                            data-was-processed="true"
                          />{' '}
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-3" style={{ cursor: 'default' }}>
                            {' '}
                            커뮤니티와 연결성에 대해 이야기하는 팔로마 엘세서
                          </h2>
                          <p className="a-label js-a-label " style={{ cursor: 'default' }}>
                            모델 팔로마 엘세서는 공동체에서 연대감을 느끼고 커리어를 바탕으로 새로운 미래를
                            그려나갑니다.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="https://www.cos.com/ko-kr/features/people/interview-paloma-elsesser-aw22.html"
                          >
                            더 보기{' '}
                            <img
                              className="inline h-4 w-4 fill-current -mt-px ml-1"
                              src="https://image.thehyundai.com/cos/images/cos/02/chevron-right.svg"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*coloum*/}
                  </div>
                </div>
                {/*content*/}
                <div className="content" style={{ overflow: 'hidden' }}>
                  <div className="scrollable-content magazine-2021">
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        {' '}
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="https://www.cos.com/ko-kr/features/people/interview-sheila-atim-ss23.html"
                          style={{ cursor: 'pointer' }}
                          data-component-id="e0db4c43-1a1b-4b53-9022-d3030c17180e"
                        >
                          <img
                            className="a-image loaded initial"
                            src="https://image.thehyundai.com/cos/hyundai/2024/9/2/Photo12.jpg"
                            data-was-processed="true"
                          />{' '}
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-3" style={{ cursor: 'default' }}>
                            여성의 경이로움에 대한 실라 아팀
                          </h2>
                          <p className="a-label js-a-label " style={{ cursor: 'default' }}>
                            배우 실라 아팀이 알려주는 연기, 성평등, 스타일에 대한 이야기.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="https://www.cos.com/ko-kr/features/people/interview-sheila-atim-ss23.html"
                          >
                            더 보기
                            <img
                              className="inline h-4 w-4 fill-current -mt-px ml-1"
                              src="https://image.thehyundai.com/cos/images/cos/02/chevron-right.svg"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*coloum*/}
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        {' '}
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="https://www.cos.com/ko-kr/features/people/interview-greta-lee-los-angeles-aw22.html"
                          style={{ cursor: 'pointer' }}
                          data-component-id="e4685226-22db-4dde-aee7-4cd07816ab6c"
                        >
                          <img
                            className="a-image loaded initial"
                            src="https://image.thehyundai.com/cos/hyundai/2024/9/2/Photo13.jpg"
                            data-was-processed="true"
                          />{' '}
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-3" style={{ cursor: 'default' }}>
                            {' '}
                            자신만의 이야기를 만들어가는 그레타 리
                          </h2>
                          <p className="a-label js-a-label " style={{ cursor: 'default' }}>
                            ‘자신이 속한 집단을 대표하는 것만으로는 부족해요.’ 배우이자 작가인 그레타 리는 현대
                            무용수처럼 옷을 입고 LA를 사랑하는 법을 말하며 자신이 속한 집단을 대표하는 점에 대해
                            살펴보는 시간을 가졌습니다.{' '}
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="https://www.cos.com/ko-kr/features/people/interview-greta-lee-los-angeles-aw22.html"
                          >
                            더 보기
                            <img
                              className="inline h-4 w-4 fill-current -mt-px ml-1"
                              src="https://image.thehyundai.com/cos/images/cos/02/chevron-right.svg"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*coloum*/}
                  </div>
                </div>
                {/*content*/}
                <div className="content" style={{ overflow: 'hidden' }}>
                  <div className="scrollable-content magazine-2021">
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        {' '}
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="https://www.cos.com/ko-kr/features/people/interview-honey-dijon-international-womens-day-ss22.html"
                          style={{ cursor: 'pointer' }}
                          data-component-id="e0db4c43-1a1b-4b53-9022-d3030c17180e"
                        >
                          <img
                            className="a-image loaded initial"
                            src="https://image.thehyundai.com/cos/hyundai/2024/9/2/Photo14.jpg"
                            data-was-processed="true"
                          />{' '}
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-3" style={{ cursor: 'default' }}>
                            {' '}
                            젠더와 성 해방에 관한 허니 디전
                          </h2>
                          <p className="a-label js-a-label " style={{ cursor: 'default' }}>
                            시카고에서 태어나 베를린 기반으로 활동하는 DJ 허니 디전을 소개합니다. 자신의 성 정체성을
                            받아들이게 된 계기와 매일 하루를 세계 여성의 날로 기념하는 이유에 대해 인터뷰를 나눴습니다.{' '}
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="https://www.cos.com/ko-kr/features/people/interview-honey-dijon-international-womens-day-ss22.html"
                          >
                            더 보기
                            <img
                              className="inline h-4 w-4 fill-current -mt-px ml-1"
                              src="https://image.thehyundai.com/cos/images/cos/02/chevron-right.svg"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*coloum*/}
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        {' '}
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="https://www.cos.com/ko-kr/features/people/interview-jodie-turner-smith-equality-aw21.html"
                          style={{ cursor: 'pointer' }}
                          data-component-id="e4685226-22db-4dde-aee7-4cd07816ab6c"
                        >
                          <img
                            className="a-image loaded initial"
                            src="https://image.thehyundai.com/cos/hyundai/2024/9/2/Photo15.jpg"
                            data-was-processed="true"
                          />{' '}
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-3" style={{ cursor: 'default' }}>
                            {' '}
                            평등의 미래에 대한 조디 터너-스미스의 생각
                          </h2>
                          <p className="a-label js-a-label " style={{ cursor: 'default' }}>
                            세상에 대해 변화한 관점과 행동의 힘에 대해 조디 터너 스미스가 이야기합니다.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="https://www.cos.com/ko-kr/features/people.html"
                          >
                            더 보기
                            <img
                              className="inline h-4 w-4 fill-current -mt-px ml-1"
                              src="https://image.thehyundai.com/cos/images/cos/02/chevron-right.svg"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*coloum*/}
                  </div>
                </div>
                {/*content*/}
              </div>
              {/*// o-grid-controller */}
            </div>
          </div>
        </div>
        <div id="suppliers" style={{ clear: 'both' }} />
        <div className="text parbase section">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="contain">
              <div className="richTextSpan">
                <div className="o-blog-text is-richtext m_align_center">
                  <div className="keyline parbase section">
                    <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
                      <hr className="a-keyline" />
                    </div>
                  </div>
                  <p className="custom_sub_title" style={{ textAlign: 'left', fontWeight: 600 }}>
                    COS × PRIDE{' '}
                  </p>
                  <p className="article-headline-sub">
                    세계 프라이드의 달을 맞이해 리미티드 캡슐 컬렉션을 제작했습니다. 클럽 싱크 더 핑크(Sink The Pink),
                    추러스 콘 초콜라테(Churros con Chocolate), 홀스 미트 디스코(Horse Meat Disco), 하우스 오브
                    예스(House of Yes), 아티스트 코코 카피탄(Coco Capitán), 뮤지션이자 배우 소코(SOKO), 퍼포먼스
                    시인이자 트랜스젠더 가시화 운동가인 카이 이사야 자말(Kai-Isaiah Jamal), 아티스트 지펭 주(Zipeng
                    Zhu)와 함께한 티셔츠 컬렉션부터 스페셜 토트백까지 만나보세요.{' '}
                  </p>
                  <div className="o-spacing" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div className="grid grid-cols-12 " style={{ width: '100%' }}>
              {/* edit left slide */}
              <div className="col-span-12 relative lg:col-span-6 flex  overflow-hidden w-full slider-container pointer-events-auto ">
                <div
                  className="slides-left_575444 slides-left-wrapper w-full"
                  style={{
                    transition: 'transform 0.5s ease-in-out',
                    display: 'flex',
                    transform: 'translateX(0vw)',
                  }}
                >
                  <div
                    className="slide_left_575444 slide-left-slide flex justify-center items-center  min-w-full min-w-screen lg:min-w-[50vw] venCpn-image"
                    style={{ position: 'relative', background: '#FFFFFF' }}
                  >
                    <div className="relative max-h-full">
                      <a href="">
                        <img
                          alt=""
                          style={{ height: 656, width: 469 }}
                          className="hidden-new lg:block object-cover object-top "
                          data-nimg="fill"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2544782020241029134942.jpg"
                        />
                        <img
                          style={{ height: 418, width: 299 }}
                          alt=""
                          className="lg:hidden object-cover"
                          data-nimg="fill"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2544782020241029134942.jpg"
                        />{' '}
                      </a>
                      <div
                        style={{ position: 'absolute', bottom: '-42px' }}
                        className="absolute -bottom-10 right-[50%] translate-x-[50%] font_small_s_semibold text-3.25 
                          flex items-center text-block justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row"
                      ></div>
                    </div>
                    <div
                      style={{ position: 'absolute', right: 36, bottom: 27 }}
                      className="bg-clip-text text-main cursor-pointer flex items-center hover:underline next-button-left_575444 next-button-left-btn font_small_l_regular text-3.25"
                      // onclick="handleNextSlideLeft()"
                    >
                      NEXT{' '}
                      <span className="ml-0 fill-current">
                        <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5.5L15 8.5L12 11.5" stroke="#080808" className="stroke-current" />
                        </svg>{' '}
                      </span>
                    </div>
                  </div>
                  <div
                    className="slide_left_575444 slide-left-slide flex justify-center items-center  min-w-full min-w-screen lg:min-w-[50vw] venCpn-image"
                    style={{ position: 'relative', background: '#FFFFFF' }}
                  >
                    <div className="relative max-h-full">
                      <a href="">
                        <img
                          alt=""
                          style={{ height: 656, width: 469 }}
                          className="hidden-new lg:block object-cover object-top "
                          data-nimg="fill"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2544783020241031164743.jpg"
                        />
                        <img
                          style={{ height: 418, width: 299 }}
                          alt=""
                          className="lg:hidden object-cover"
                          data-nimg="fill"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2544783020241031164743.jpg"
                        />{' '}
                      </a>
                      <div
                        style={{ position: 'absolute', bottom: '-42px' }}
                        className="absolute -bottom-10 right-[50%] translate-x-[50%] font_small_s_semibold text-3.25 
                          flex items-center text-block justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row"
                      ></div>
                    </div>
                    <div
                      style={{ position: 'absolute', right: 36, bottom: 27 }}
                      className="bg-clip-text text-main cursor-pointer flex items-center hover:underline next-button-left_575444 next-button-left-btn font_small_l_regular text-3.25"
                      // onclick="handleNextSlideLeft()"
                    >
                      NEXT{' '}
                      <span className="ml-0 fill-current">
                        <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5.5L15 8.5L12 11.5" stroke="#080808" className="stroke-current" />
                        </svg>{' '}
                      </span>
                    </div>
                  </div>
                  <div
                    className="slide_left_575444 slide-left-slide flex justify-center items-center  min-w-full min-w-screen lg:min-w-[50vw] venCpn-image"
                    style={{ position: 'relative', background: '#FFFFFF' }}
                  >
                    <div className="relative max-h-full">
                      <a href="">
                        <img
                          alt=""
                          style={{ height: 656, width: 469 }}
                          className="hidden-new lg:block object-cover object-top "
                          data-nimg="fill"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2544784020241031164807.jpg"
                        />
                        <img
                          style={{ height: 418, width: 299 }}
                          alt=""
                          className="lg:hidden object-cover"
                          data-nimg="fill"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2544784020241031164807.jpg"
                        />{' '}
                      </a>
                      <div
                        style={{ position: 'absolute', bottom: '-42px' }}
                        className="absolute -bottom-10 right-[50%] translate-x-[50%] font_small_s_semibold text-3.25 
                          flex items-center text-block justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row"
                      ></div>
                    </div>
                    <div
                      style={{ position: 'absolute', right: 36, bottom: 27 }}
                      className="bg-clip-text text-main cursor-pointer flex items-center hover:underline next-button-left_575444 next-button-left-btn font_small_l_regular text-3.25"
                      // onclick="handleNextSlideLeft()"
                    >
                      NEXT{' '}
                      <span className="ml-0 fill-current">
                        <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5.5L15 8.5L12 11.5" stroke="#080808" className="stroke-current" />
                        </svg>{' '}
                      </span>
                    </div>
                  </div>
                  <div
                    className="slide_left_575444 slide-left-slide flex justify-center items-center  min-w-full min-w-screen lg:min-w-[50vw] venCpn-image"
                    style={{ position: 'relative', background: '#FFFFFF' }}
                  >
                    <div className="relative max-h-full">
                      <a href="">
                        <img
                          alt=""
                          style={{ height: 656, width: 469 }}
                          className="hidden-new lg:block object-cover object-top "
                          data-nimg="fill"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2544785020241031164819.jpg"
                        />
                        <img
                          style={{ height: 418, width: 299 }}
                          alt=""
                          className="lg:hidden object-cover"
                          data-nimg="fill"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2544785020241031164819.jpg"
                        />{' '}
                      </a>
                      <div
                        style={{ position: 'absolute', bottom: '-42px' }}
                        className="absolute -bottom-10 right-[50%] translate-x-[50%] font_small_s_semibold text-3.25 
                          flex items-center text-block justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row"
                      ></div>
                    </div>
                    <div
                      style={{ position: 'absolute', right: 36, bottom: 27 }}
                      className="bg-clip-text text-main cursor-pointer flex items-center hover:underline next-button-left_575444 next-button-left-btn font_small_l_regular text-3.25"
                      // onclick="handleNextSlideLeft()"
                    >
                      NEXT{' '}
                      <span className="ml-0 fill-current">
                        <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5.5L15 8.5L12 11.5" stroke="#080808" className="stroke-current" />
                        </svg>{' '}
                      </span>
                    </div>
                  </div>
                  <div
                    className="slide_left_575444 slide-left-slide flex justify-center items-center  min-w-full min-w-screen lg:min-w-[50vw] venCpn-image"
                    style={{ position: 'relative', background: '#FFFFFF' }}
                  >
                    <div className="relative max-h-full">
                      <a href="">
                        <img
                          alt=""
                          style={{ height: 656, width: 469 }}
                          className="hidden-new lg:block object-cover object-top "
                          data-nimg="fill"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2544786020241031164846.jpg"
                        />
                        <img
                          style={{ height: 418, width: 299 }}
                          alt=""
                          className="lg:hidden object-cover"
                          data-nimg="fill"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2544786020241031164846.jpg"
                        />{' '}
                      </a>
                      <div
                        style={{ position: 'absolute', bottom: '-42px' }}
                        className="absolute -bottom-10 right-[50%] translate-x-[50%] font_small_s_semibold text-3.25 
                          flex items-center text-block justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row"
                      ></div>
                    </div>
                    <div
                      style={{ position: 'absolute', right: 36, bottom: 27 }}
                      className="bg-clip-text text-main cursor-pointer flex items-center hover:underline next-button-left_575444 next-button-left-btn font_small_l_regular text-3.25"
                      // onclick="handleNextSlideLeft()"
                    >
                      NEXT{' '}
                      <span className="ml-0 fill-current">
                        <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5.5L15 8.5L12 11.5" stroke="#080808" className="stroke-current" />
                        </svg>{' '}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    left: 12,
                    width: '96%',
                    height: 3,
                  }}
                  className="bg-clip-text text-main-inverted mix-blend-difference pagination pagination-left_575444 pagination-left-wrap flex justify-center gap-1  "
                >
                  <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm active" />
                  <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm" />
                  <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm" />
                  <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm" />
                  <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div id="suppliers" style={{ clear: 'both' }} />
            <div className="text parbase section">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain">
                  <div className="richTextSpan">
                    <div className="o-blog-text is-richtext m_align_center">
                      <div className="keyline parbase section">
                        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24"> </div>
                      </div>
                      <p className="article-headline-sub">
                        01 Glyn Fussell and Amy Zing, co-founders of Sink The Pink. Portrait by Philip Sinden
                        <br />
                        <br />
                        02 Zipeng Zhu, SoKo and Kai-Isaiah Jamal. Portrait by Collier Schorr <br />
                        <br />
                        03 Jim Stanton, Severino Panzetta, James Hillard and Luke Howard, co-founders of Horse Meat
                        Disco. Portrait by Philip Sinden
                        <br />
                        <br />
                        04 Kae Burke, co-founder of House of Yes. Portrait by Lila Barth <br />
                        <br />
                        05 Manuel Ponce, Puy Ruiz de Alda and Luis Alcalá, co-founders of Churros con Chocolate.
                        Portrait by Wai Lin Tse
                        <br />
                        <br />{' '}
                      </p>
                      <video
                        src="https://image.thehyundai.com/cos/hyundai/2024/10/31/COS-Charity-ezgif.com-resize-video.mp4"
                        autoPlay
                        muted
                        loop
                        className=""
                      >
                        <source
                          src="https://image.thehyundai.com/cos/hyundai/2024/10/31/COS-Charity-ezgif.com-resize-video.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="suppliers" style={{ clear: 'both' }} />
            <div className="text parbase section">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain">
                  <div className="richTextSpan">
                    <div className="o-blog-text is-richtext m_align_center">
                      <div className="keyline parbase section">
                        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
                          <hr className="a-keyline" />
                        </div>
                      </div>
                      <p className="custom_sub_title" style={{ textAlign: 'left', fontWeight: 600 }}>
                        기부 단체
                      </p>
                      <p className="article-headline-sub">
                        기부 단체와 커뮤니티, 그리고 사회에서 선두적인 활동으로 두각을 나타내는 개인을 꾸준히
                        지원합니다.
                        <br />
                        <br />
                        로컬 마켓 관련 자선단체 및 조직과 파트너십을 구축하기 위해 글로벌 팀의 조언과 전문 지식을 구하고
                        있으며, 트레버 프로젝트, 칼레이도스코프 트러스트, 러브랜드 파운데이션, 블랙 커리큘럼, 블랙
                        레인보우, 아웃라인 아오테로아, 하우징 웍스 등과 긴밀하게 협력하고 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="o-spacing" />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n.relative.max-h-full img{ height: auto !important;  width: auto !important;   margin-bottom: 120px; }\n.col-span-12.relative.lg:col-span-6 flex.overflow-hidden.w-full slider-container.pointer-events-auto {margin:0 0 0 34% !important;}\n.lg:hidden.object-cover{height: auto !important;  width: auto !important;   margin-bottom: 120px;}\n.u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-row u-full-width{    margin: 0px 8em;}\n.grid grid-cols-12 {margin-left;14%:}\n.u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-row.u-full-width .grid-cols-12{   margin: 0px 0 0 26%;  position: relative;}\n\n\n\n@media (max-width: 768px) {\n.u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-row.u-full-width .grid-cols-12{      margin: 0px 0 0 0%;}\n\n}\n\n',
              }}
            />
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
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n    .cta-section-bottom {\n        display: flex;\n        padding: 0 10%;\n        lign-items: center;\n        justify-content: center;\n        margin: 0 auto 30px;\n        position: relative;\n    }\n\n    .cta-section-bottom .fitguide_btn {\n        padding: 0 25px !important;\n    }\n\n    .chips,\n    .cta-section-bottom {\n        font-weight: 700;\n    }\n\n    @media (max-width: 1025px) {\n        .cta-section-bottom {\n            flex-direction: column;\n            padding: 0;\n        }\n\n        .cta-section-bottom .fitguide_btn {\n            padding: 0;\n        }\n    }\n',
            }}
          />
        </div>
      </div>
    </FreeHtml>
  );
}
