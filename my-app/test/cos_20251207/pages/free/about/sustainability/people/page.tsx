import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '사람 - COS KR',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    .chips {\n        display: block;\n        width: 100%;\n        margin: 10px auto 30px;\n    }\n\n    .chips p {\n        font-size: 20px;\n        line-height: 24px;\n        letter-spacing: .02em;\n        color: #1b1b1b;\n        text-align: center;\n        width: 100%;\n        margin: 0 auto 20px auto;\n    }\n\n    .chips a {\n        display: inline-block;\n        text-transform: uppercase;\n        text-decoration: none;\n        letter-spacing: .0825em;\n        cursor: pointer;\n        text-align: center;\n        padding: 10px 12px 6px;\n        margin: 4px 4px 8px 0;\n        border: 1px solid #1b1b1b;\n        color: #1b1b1b;\n        font-size: 12px;\n        line-height: 17px;\n    }\n\n    .chips a:hover {\n        background-color: #1b1b1b;\n        color: #ffffff;\n    }\n\n    .chips .scrollable-content {\n        position: relative;\n        padding: 0px 10px;\n        overflow-x: auto;\n        -webkit-overflow-scrolling: touch;\n        white-space: nowrap;\n        text-align: center;\n    }\n\n    .cta-section {\n        display: flex;\n        justify-content: center;\n        /* gap: 20px;\n      margin-bottom: 60px; */\n        flex-direction: column;\n        border: 1px solid #1b1b1b\n    }\n\n    .fitguide_btn {\n        display: inline-block;\n        width: 100%;\n        line-height: 45px;\n        font-size: 13px;\n        color: #1b1b1b;\n        background: #fff;\n    }\n\n    .fitguide_btn:hover {\n        opacity: 0.7;\n    }\n\n    .a-link.has-underline,\n    .is-richtext a.has-underline>span {\n        color: #fff;\n    }\n\n    .o-grid-controller.is-two-cols .content .scrollable-content {\n        display: block;\n    }\n\n    .o-hero {\n        width: 100%\n    }\n\n    .m-free-tile.headline-preamble-wrapper.a {\n        text-decoration: underline !important\n    }\n\n    .o-blog-text .a-paragraph {\n        font-weight: 400;\n        font-size: 14px;\n        letter-spacing: .04em;\n        line-height: 19px;\n    }\n\n    .article-headline-sub {\n        font-size: 15px !important;\n        line-height: 20px !important;\n    }\n\n    .title2 {\n        font-size: 13px !important;\n        line-height: 18px !important;\n        ;\n    }\n\n    .o-hero .a-picture+.m-teaser.align-left {\n        max-width: 100% !important;\n        width: 100% !important;\n        top: 103%;\n        margin-left: -20px !important\n    }\n\n    .pull-quote.a-paragraph.a-page-paragraph {\n        padding-bottom: 40px !important\n    }\n\n    .m-free-tile .a-heading-2 {\n        font-size: 24px;\n        line-height: 17px;\n        letter-spacing: .0525em;\n        text-transform: none;\n        margin-bottom: 13px;\n        margin-top: 35px\n    }\n\n    .button1 {\n        letter-spacing: .06em;\n        margin-bottom: 10px;\n        margin-right: 5px;\n        margin-left: 5px;\n        height: 45px;\n        width: 240px;\n        background-color: #1b1b1b;\n        border: 1px solid #1b1b1b;\n        color: #fff;\n        padding: 12px 9px 12px 8px\n    }\n\n    .keyline .u-cols-sm-12-12 {\n        margin-bottom: 0px;\n    }\n\n    .a-keyline {\n        width: 100% !important;\n    }\n\n    .o-blog-text {\n        margin-top: 0\n    }\n\n    .o-blog-text.align_left {\n        text-align: left;\n        margin: 0;\n    }\n\n    .o-blog-text.align_left>p {\n        text-align: left !important;\n    }\n\n    .is-three-cols .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n        margin-top: 0;\n        font-size: 30px;\n        line-height: 34px;\n    }\n\n    .is-three-cols .m-free-tile .headline-preamble-wrapper .a-label {\n        font-size: 13px;\n        line-height: 18px;\n    }\n\n    .is-three-cols .m-free-tile .cta-wrapper .cta-link {\n        font-size: 14px;\n        line-height: 20px;\n    }\n\n    .custom_two_cols .content {\n        display: flex;\n        flex-direction: row;\n        max-width: 1600px;\n        margin: 0 auto;\n        padding: 0 30px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .custom_two_cols .column {\n        width: 50%;\n    }\n\n    .custom_two_cols .column .o-blog-text {\n        width: 100%;\n        padding-left: 50px;\n    }\n\n    .custom_two_cols .column .o-blog-text p {\n        text-align: left !important;\n    }\n\n    .custom_sub_title {\n        margin-bottom: 30px;\n        text-align: center;\n        font-size: 40px;\n        line-height: 48px;\n        font-weight: 600;\n    }\n\n    .custom_anchor_box {\n        margin-bottom: 60px;\n        text-align: center;\n    }\n\n    .custom_anchor_box .anchor {\n        display: inline-block;\n        font-size: 20px;\n        line-height: 25px;\n        margin-right: 10px;\n    }\n\n    .custom_anchor_box .anchor:last-child {\n        margin-right: 0;\n    }\n\n    .custom_anchor_box .anchor u {\n        text-decoration-thickness: 1px;\n    }\n\n    .a-heading-3 {\n        font-size: 13px !important;\n        line-height: 18px !important;\n        margin-bottom: 10px;\n        text-transform: uppercase;\n    }\n\n    .two-cols.m-free-tile .cta-wrapper .cta-link {\n        font-size: 14px;\n        line-height: 20px;\n    }\n\n    .sus_top_tit {\n        text-transform: uppercase;\n    }\n\n    .sub_para1 {\n        font-size: 20px;\n        line-height: 1.2em;\n    }\n\n    .u-cols-sm-12-12 {\n        padding-right: 0px !important;\n        padding-left: 0px !important;\n    }\n\n    .o-blog-text.align_left {\n        text-align: left;\n        margin: 0;\n    }\n\n    .o-blog-text.align_left>p {\n        text-align: left !important;\n    }\n\n    #sus_box_2023 .first {\n        margin-top: 50px;\n    }\n\n    .sus_btn_box {\n        text-align: center;\n        margin-bottom: 50px;\n    }\n\n    .sus_btn {\n        display: inline-block;\n        width: 240px;\n        line-height: 44px;\n        border: 1px solid #1b1b1b;\n        font-size: 12px;\n    }\n\n    .sus_btn:hover {\n        background: #1b1b1b;\n        color: #fff;\n    }\n\n    .o-grid-controller.is-two-cols .content .scrollable-content {\n        display: block;\n    }\n\n    .chips {\n        width: 70%;\n        margin-top: 40px;\n        margin-bottom: 20px;\n    }\n\n    .cta-section {\n        flex-direction: column;\n    }\n\n    .cta-wrap {\n        display: flex;\n        align-items: center;\n    }\n\n    .cta-wrap .arrow.right:before {\n        transform: translate(-50%, -50%) rotate(135deg);\n    }\n\n    .cta-wrap .arrow {\n        position: relative;\n        display: inline-block;\n        width: 25px;\n        height: 25px;\n        overflow: hidden;\n        vertical-align: middle;\n    }\n\n    .cta-wrap .arrow:before {\n        content: "";\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 6px;\n        height: 6px;\n        -webkit-transform: translate(-50%, -50%) rotate(45deg);\n        transform: translate(-50%, -50%) rotate(45deg);\n        margin-top: 0px;\n        border-top: 1px solid #1b1b1b;\n        border-left: 1px solid #1b1b1b;\n    }\n\n    .m-double-button {\n        display: flex;\n        padding: 0 20px;\n    }\n\n    .o-grid-controller.is-two-cols .column {\n        width: 33.3333% !important;\n        margin-left: 0 !important;\n    }\n\n    .u-row>[class^="o-"] {\n        margin: 0 auto !important;\n    }\n\n    @container root (max-width: 1025px) {\n\n        /* .chips {\n          width: 70%;\n          margin-top: 40px;\n          margin-bottom: 20px;\n      } */\n\n        /* .chips a {text-transform: initial; letter-spacing: .04em; font-size: 13px; line-height: 18px;} */\n\n    }\n\n    @container root (max-width:720px) {\n        /* .cta-section {\n          flex-direction: column;\n      } */\n    }\n\n    @container root (min-width:768px) {\n        .para {\n            padding-top: 40px !important\n        }\n\n        .button1 {\n            margin-left: 0;\n            display: inline-block\n        }\n\n        #sus_box_2023 .long_title {\n            width: 83.33%;\n        }\n\n    }\n\n\n\n    @container root (max-width:767px) {\n\n\n\n        .o-grid-controller.is-three-cols .column {\n            width: 50%\n        }\n\n        .o-grid-controller.is-three-cols .column:nth-child(1) {\n            width: 100%;\n        }\n\n        .o-grid-controller.is-four-cols.is-stacked-on-mobile .content .scrollable-content {\n            padding: 0;\n        }\n\n        .custom_two_cols .content {\n            flex-direction: column-reverse;\n            padding: 0 14px;\n        }\n\n        .custom_two_cols .column {\n            width: 100%;\n        }\n\n        .custom_two_cols .column .o-blog-text {\n            padding-left: 0;\n            margin-bottom: 40px;\n        }\n\n        .custom_sub_title {\n            text-align: left;\n            font-size: 28px;\n            line-height: 34px;\n        }\n\n        .custom_anchor_box {\n            margin-bottom: 40px;\n            text-align: left;\n            overflow-x: auto;\n            white-space: nowrap;\n        }\n\n        .custom_anchor_box .anchor {\n            font-size: 18px;\n            line-height: 22px;\n        }\n\n        .sub_para1 {\n            font-size: 15px;\n            line-height: 19px;\n        }\n\n        .m_align_center>p {\n            text-align: center !important;\n        }\n\n        .is-three-cols .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n            font-size: 24px;\n            line-height: 29px;\n        }\n\n        .parr {\n            padding-bottom: 20px;\n            text-align: center\n        }\n\n        .article-headline {\n            font-size: 40px !important;\n            line-height: 44px !important;\n            margin-left: auto !important;\n            margin-right: auto !important\n        }\n\n        .article-headline-sub {\n            text-align: left !important;\n            font-size: 13px !important;\n            line-height: 18px !important;\n            padding-bottom: 5px !important\n        }\n\n        .pull-quote {\n            font-size: 24px !important;\n            line-height: 29px !important;\n            padding-bottom: 20px !important;\n            padding-top: 2px !important\n        }\n\n        .pull-quote2 {\n            font-size: 24px !important;\n            line-height: 29px !important;\n            padding-bottom: 35px !important;\n            padding-top: 2px !important\n        }\n\n        .keep-reading {\n            padding-top: 15px !important\n        }\n\n        .new {\n            margin: 0rem 0rem 0\n        }\n\n        .o-footer {\n            padding: 0 10px 18px\n        }\n\n        .o-hero .a-picture+.m-teaser.align-left {\n            margin-left: 9px !important\n        }\n\n        .m-free-tile.headline-preamble-wrapper.a {\n            text-decoration: underline !important\n        }\n\n        .m-free-tile .a-heading-2 {\n            font-size: 20px !important\n        }\n\n        .o-hero.image-wrapper {\n            margin-bottom: -35px\n        }\n\n        .keyline .u-cols-sm-12-12 {\n            margin-bottom: 0px;\n        }\n\n        .o-blog-text .article-headline {\n            margin-left: 0 !important;\n            text-align: left !important;\n            font-size: 34px !important;\n            line-height: 39px !important;\n        }\n\n        .o-blog-text .a-paragraph {\n            font-size: 13px !important;\n            line-height: 18px !important;\n        }\n\n        #sus_box_2023 .first {\n            margin-top: 30px;\n        }\n\n        #sus_box_2023 .long_title .pull-quote1 {\n            font-size: 24px !important;\n        }\n\n        #sus_box_2023 .sus_title1 {\n            font-size: 24px !important;\n            margin-top: 30px;\n        }\n\n        .o-grid-controller.is-two-cols .content .scrollable-content {\n            display: flex;\n            flex-direction: column-reverse;\n            align-items: center\n        }\n    }\n',
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
                      디자인과 제작 과정 / 사람
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
                      사람
                    </p>
                  </div>
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
                            data-component-id="e3b74409-3949-4ef6-9b22-611d7f521813"
                          >
                            <img
                              src="https://image.thehyundai.com/cos/hyundai/2025/3/26/people_750x1125.jpg"
                              style={{ width: '100%' }}
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="freetile parbase section must-margin-0">
                        <div className="m-free-tile two-cols" style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                          <div className="richTextSpan">
                            <div
                              className="o-blog-text is-richtext"
                              style={{ width: '100%', textAlign: 'left', padding: 0 }}
                            >
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
                                COS에서는 다양한 분야의 전문가들과 협력하여 혁신적 프로세스와 전통적인 프로세스를
                                수용하고 전문 지식을 활용하고 있습니다.
                                <br /> <br />
                                COS는 오랜 협력업체 관계부터 자선단체와의 파트너십 및 협업에 이르기까지 책임감과 진정한
                                관계를 위해 노력합니다. H&amp;M 그룹과 COS의 프로덕션 팀과 지속가능성 팀은 협력업체와
                                함께 공급망에서 현지 임금과 성평등을 개선하기 위해 노력합니다.
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
                        <div className="m-double-button" style={{ textAlign: 'left' }}>
                          <a className="fitguide_btn" href="/free/about/sustainability/people/suppliers">
                            협력업체
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
                          <a className="fitguide_btn" href="/free/about/sustainability/people/progress">
                            공급망에서의 성 평등
                          </a>
                          <div className="cta-wrap">
                            <i className="arrow right" role="img" />
                          </div>
                        </div>
                        <div className="m-double-button" style={{ textAlign: 'left' }}>
                          <a className="fitguide_btn" href="/free/about/sustainability/people/designTeam">
                            디자인 팀
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
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n    .o-hero {\n        width: 100%\n    }\n\n    .m-free-tile.headline-preamble-wrapper.a {\n        text-decoration: underline !important\n    }\n\n    .o-blog-text .a-paragraph {\n        font-weight: 400;\n        font-size: 14px;\n        letter-spacing: .04em;\n        line-height: 19px;\n    }\n\n    .article-headline-sub {\n        font-size: 15px !important;\n        line-height: 20px !important;\n    }\n\n    .title2 {\n        font-size: 13px !important;\n        line-height: 18px !important;\n    }\n\n    .o-hero .a-picture+.m-teaser.align-left {\n        max-width: 100% !important;\n        width: 100% !important;\n        top: 103%;\n        margin-left: -20px !important\n    }\n\n    .pull-quote.a-paragraph.a-page-paragraph {\n        padding-bottom: 40px !important\n    }\n\n    .m-free-tile .a-heading-2 {\n        font-size: 24px;\n        line-height: 17px;\n        letter-spacing: .0525em;\n        text-transform: none;\n        margin-bottom: 13px;\n        margin-top: 35px\n    }\n\n    .button1 {\n        letter-spacing: .06em;\n        margin-bottom: 10px;\n        margin-right: 5px;\n        margin-left: 5px;\n        height: 45px;\n        width: 240px;\n        background-color: #1b1b1b;\n        border: 1px solid #1b1b1b;\n        color: #fff;\n        padding: 12px 9px 12px 8px;\n    }\n\n    .keyline .u-cols-sm-12-12 {\n        margin-bottom: 10px;\n        width: 50%;\n    }\n\n    .o-blog-text {\n        margin-top: 0;\n        width: 66.33333%;\n    }\n\n    .o-blog-text.align_left {\n        text-align: left;\n        margin: 0;\n    }\n\n    .o-blog-text.align_left>p {\n        text-align: left !important;\n    }\n\n    .is-three-cols .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n        margin-top: 0;\n        font-size: 30px;\n        line-height: 34px;\n    }\n\n    .is-three-cols .m-free-tile .headline-preamble-wrapper .a-label {\n        font-size: 13px;\n        line-height: 18px;\n    }\n\n    .is-three-cols .m-free-tile .cta-wrapper .cta-link {\n        font-size: 14px;\n        line-height: 20px;\n    }\n\n    .custom_two_cols .content {\n        display: flex;\n        flex-direction: column;\n        max-width: 1600px;\n        margin: 0 auto;\n        padding: 0 30px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .custom_two_cols .column {\n        width: 50%;\n    }\n\n    .custom_two_cols .column .o-blog-text {\n        width: 100%;\n        padding-right: 50px;\n    }\n\n    .custom_sub_title {\n        margin-bottom: 30px;\n        text-align: left;\n        font-size: 40px;\n        line-height: 48px;\n    }\n\n    .custom_anchor_box {\n        margin-bottom: 60px;\n        text-align: center;\n    }\n\n    .custom_anchor_box .anchor {\n        display: inline-block;\n        font-size: 20px;\n        line-height: 25px;\n        margin-right: 10px;\n    }\n\n    .custom_anchor_box .anchor:last-child {\n        margin-right: 0;\n    }\n\n    .custom_anchor_box .anchor u {\n        text-decoration-thickness: 1px;\n    }\n\n    .a-heading-3 {\n        font-size: 13px !important;\n        line-height: 18px !important;\n        margin-bottom: 10px;\n        text-transform: uppercase;\n    }\n\n    .two-cols.m-free-tile .cta-wrapper .cta-link {\n        font-size: 14px;\n        line-height: 20px;\n    }\n\n    .sus_top_tit {\n        text-transform: uppercase;\n    }\n\n    .sub_para1 {\n        font-size: 20px;\n        line-height: 24px;\n    }\n\n    .magazine-type .content .colum {\n        display: block !important;\n        margin-left: 16.8888% !important;\n    }\n\n    .m_align_center>p {\n        text-align: left !important;\n        font-size: 20.0px;\n        padding-bottom: 10px;\n        line-height: 26.0px;\n        width: 50%;\n    }\n\n    .o-grid-controller.is-three-cols .column.leftcolum {\n        margin-left: -34%;\n    }\n\n    @container root (min-width:768px) {\n        .para {\n            padding-top: 40px !important\n        }\n\n        .button1 {\n            margin-left: 0;\n            display: inline-block\n        }\n    }\n\n    @container root (max-width:767px) {\n        .custom_two_cols .content {\n            padding: 0 14px;\n        }\n\n        .custom_two_cols .column {\n            width: 100%;\n        }\n\n        .custom_two_cols .column .o-blog-text {\n            padding-right: 0;\n            margin-bottom: 40px;\n        }\n\n        .custom_sub_title {\n            font-size: 28px;\n            line-height: 34px;\n        }\n\n        .custom_anchor_box {\n            margin: 0 auto 40px;\n            overflow-x: auto;\n            white-space: nowrap;\n            display: flex;\n            flex-direction: column;\n            width: 50%;\n        }\n\n        .custom_anchor_box .anchor {\n            font-size: 18px;\n            line-height: 22px;\n        }\n\n        .touch_target .anchor {\n            margin: 10px 0;\n        }\n\n        .sub_para1 {\n            font-size: 15px;\n            line-height: 19px;\n        }\n\n        .is-three-cols .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n            font-size: 24px;\n            line-height: 29px;\n        }\n\n        .parr {\n            padding-bottom: 20px;\n            text-align: center\n        }\n\n        .article-headline {\n            font-size: 40px !important;\n            line-height: 44px !important;\n            margin-left: auto !important;\n            margin-right: auto !important\n        }\n\n        .article-headline-sub {\n            font-size: 13px !important;\n            line-height: 18px !important;\n            padding-bottom: 5px !important\n        }\n\n        .pull-quote {\n            font-size: 24px !important;\n            line-height: 29px !important;\n            padding-bottom: 20px !important;\n            padding-top: 2px !important\n        }\n\n        .pull-quote2 {\n            font-size: 24px !important;\n            line-height: 29px !important;\n            padding-bottom: 35px !important;\n            padding-top: 2px !important\n        }\n\n        .keep-reading {\n            padding-top: 15px !important\n        }\n\n        .new {\n            margin: 0rem 0rem 0\n        }\n\n        .scrollable-content.magazine-2021 {\n            display: flex;\n            flex-direction: row;\n        }\n\n        .o-grid-controller.is-three-cols .column {\n            width: 100%;\n        }\n\n        .o-grid-controller.is-three-cols .column:nth-child(1) {\n            width: 100%;\n        }\n\n        .o-footer {\n            padding: 0 10px 18px\n        }\n\n        .o-hero .a-picture+.m-teaser.align-left {\n            margin-left: 9px !important\n        }\n\n        .m-free-tile.headline-preamble-wrapper.a {\n            text-decoration: underline !important\n        }\n\n        .m-free-tile .a-heading-2 {\n            font-size: 20px !important\n        }\n\n        .o-hero.image-wrapper {\n            margin-bottom: -35px\n        }\n\n        .keyline .u-cols-sm-12-12 {\n            margin-bottom: 0px;\n        }\n\n        .o-blog-text .article-headline {\n            margin-left: 0 !important;\n            font-size: 34px !important;\n            line-height: 39px !important;\n        }\n\n        .o-blog-text .a-paragraph {\n            font-size: 13px !important;\n            line-height: 18px !important;\n        }\n\n        .o-grid-controller.is-two-cols .column,\n        .o-blog-text {\n            width: 100% !important;\n        }\n\n        .magazine-type .content .colum {\n            magin: 0 !important !;\n        }\n\n        .m_align_center>p {\n            width: 100%;\n        }\n\n        .o-grid-controller.is-three-cols .column.leftcolum {\n            margin-left: 0%;\n        }\n\n        .keyline .u-cols-sm-12-12 {\n            width: 100%;\n        }\n\n    }\n',
            }}
          />
          <div className="text parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="richTextSpan">
                  <div className="o-blog-text is-richtext">
                    <p className="custom_sub_title" style={{ margin: '30px 0 0 0' }}>
                      모두를 위한 공정하고 평등한 대우를 지지합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="o-spacing" />
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
                    <p className="custom_sub_title" style={{ textAlign: 'left' }}>
                      협력업체
                    </p>
                    <p className="article-headline-sub">
                      COS와 함께 근무하는 모든 사람들은 안전하고 공정하며 평등한 근무 환경에서 일할 수 있어야 한다고
                      생각합니다. 브랜드 런칭 때부터 평등과 지속가능성 그리고 혁신의 가치를 공유하는 전문가들과 공고히
                      관계를 다져왔습니다.{' '}
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
                            href="/free/about/sustainability/people/suppliers"
                            style={{ cursor: 'pointer' }}
                            data-component-id="e0db4c43-1a1b-4b53-9022-d3030c17180e"
                          >
                            <img
                              className="a-image loaded initial"
                              src="https://image.thehyundai.com/cos/hyundai/2024/9/2/Photo.jpg"
                              data-was-processed="true"
                            />{' '}
                          </a>
                          <div className="headline-preamble-wrapper">
                            <h2 className="a-heading-3" style={{ cursor: 'default' }}>
                              협력업체를 만나보세요
                            </h2>
                            <p className="a-label js-a-label " style={{ cursor: 'default' }}>
                              튀르키예의 데님 전문업체와 인도의 면화 재배업자부터 포르투갈과 루마니아의 생산업체까지,
                              COS의 협력업체를 소개합니다.{' '}
                            </p>
                          </div>
                          <div className="cta-wrapper noComma">
                            <a
                              target="_self"
                              className="a-link cta-link unsmart-underline"
                              href="/free/about/sustainability/people/suppliers"
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
                      <div className="column">
                        <div className="m-free-tile" style={{ cursor: 'default' }}>
                          {' '}
                          <a
                            data-component="APicture"
                            className="a-picture"
                            href="/free/about/sustainability/people/progress"
                            style={{ cursor: 'pointer' }}
                            data-component-id="e4685226-22db-4dde-aee7-4cd07816ab6c"
                          >
                            <img
                              className="a-image loaded initial"
                              src="https://image.thehyundai.com/cos/hyundai/2025/8/27/사람 LP/공급망에서의 성 평등.jpg"
                              data-was-processed="true"
                            />{' '}
                          </a>
                          <div className="headline-preamble-wrapper">
                            <h2 className="a-heading-3" style={{ cursor: 'default' }}>
                              공급망에서의 성 평등
                            </h2>
                            <p className="a-label js-a-label " style={{ cursor: 'default' }}>
                              COS는 평등의 가치를 추구하며 공급망에서 여성에게 기회와 안전한 환경을 제공하려고 합니다.
                              지금까지 이뤄온 발전 사항을 확인해 보세요.
                            </p>
                          </div>
                          <div className="cta-wrapper noComma">
                            <a
                              target="_self"
                              className="a-link cta-link unsmart-underline"
                              href="/free/about/sustainability/people/progress"
                            >
                              더 보기
                              <img
                                className="inline h-4 w-4 fill-current -mt-px ml-1"
                                src="https://image.thehyundai.com/cos/images/cos/02/chevron-right.svg"
                              />
                            </a>{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*// o-grid-controller */}
              </div>
            </div>
          </div>
          <div className="o-spacing" />
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
                    <p className="custom_sub_title" style={{ textAlign: 'left' }}>
                      디자인 팀{' '}
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
                  <div className="u-clearfix" />
                  <div className="content" style={{ overflow: 'hidden' }}>
                    <div className="scrollable-content magazine-2021">
                      <div className="column leftcolum" style={{}}>
                        <div className="m-free-tile" style={{ cursor: 'default' }}>
                          {' '}
                          <a
                            data-component="APicture"
                            className="a-picture"
                            href="/free/about/sustainability/people/designTeam"
                            style={{ cursor: 'pointer' }}
                            data-component-id="e4685226-22db-4dde-aee7-4cd07816ab6c"
                          >
                            <img
                              className="a-image loaded initial"
                              src="https://image.thehyundai.com/cos/hyundai/2025/8/27/사람 LP/디자인 팀.jpg"
                              data-was-processed="true"
                            />{' '}
                          </a>
                          <div className="headline-preamble-wrapper">
                            <h2 className="a-heading-3" style={{ cursor: 'default' }} />
                            <p className="a-label js-a-label " style={{ cursor: 'default' }}>
                              제작 과정과 구조, 그리고 소재에 대한 디자인 철학을 고수하며, 시즌 별로 컬렉션과 스토어를
                              담당하는 팀에 대해 알아보세요.{' '}
                            </p>
                          </div>
                          <div className="cta-wrapper noComma">
                            <a
                              target="_self"
                              className="a-link cta-link unsmart-underline"
                              href="/free/about/sustainability/people/designTeam"
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
                    </div>
                  </div>
                </div>
                {/*// o-grid-controller */}
              </div>
            </div>
          </div>
          <div className="o-spacing" />
          <div id="suppliers" style={{ clear: 'both' }} />
          <div className="o-spacing" />
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
                '\n    .cta-section-bottom {\n        display: flex;\n        padding: 0 10%;\n        lign-items: center;\n        justify-content: center;\n        margin: 0 auto 30px;\n        position: relative;\n    }\n\n    .cta-section-bottom .fitguide_btn {\n        padding: 0 25px !important;\n    }\n\n    @container root (max-width: 1025px) {\n        .cta-section-bottom {\n            flex-direction: column;\n            padding: 0;\n        }\n\n        .cta-section-bottom .fitguide_btn {\n            padding: 0;\n        }\n    }\n\n    .chips,\n    .cta-section-bottom {\n        font-weight: 700;\n    }\n',
            }}
          />
        </div>
      </div>
    </FreeHtml>
  );
}
