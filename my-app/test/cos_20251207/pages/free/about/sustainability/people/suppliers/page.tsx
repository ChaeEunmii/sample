import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '협력업체를 만나보세요 - COS KR',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    .chips {\n        display: block;\n        width: 100%;\n        margin: 10px auto 30px;\n    }\n\n    .chips p {\n        font-size: 20px;\n        line-height: 24px;\n        letter-spacing: .02em;\n        color: #1b1b1b;\n        text-align: center;\n        width: 100%;\n        margin: 0 auto 20px auto;\n    }\n\n    .chips a {\n        display: inline-block;\n        text-transform: uppercase;\n        text-decoration: none;\n        letter-spacing: .0825em;\n        cursor: pointer;\n        text-align: center;\n        padding: 10px 12px 6px;\n        margin: 4px 4px 8px 0;\n        border: 1px solid #1b1b1b;\n        color: #1b1b1b;\n        font-size: 12px;\n        line-height: 17px;\n    }\n\n    .chips a:hover {\n        background-color: #1b1b1b;\n        color: #ffffff;\n    }\n\n    .chips .scrollable-content {\n        position: relative;\n        padding: 0px 10px;\n        overflow-x: auto;\n        -webkit-overflow-scrolling: touch;\n        white-space: nowrap;\n        text-align: center;\n    }\n\n    .cta-section {\n        display: flex;\n        justify-content: center;\n        /* gap: 20px;\n      margin-bottom: 60px; */\n        flex-direction: column;\n        border: 1px solid #1b1b1b\n    }\n\n    .fitguide_btn {\n        display: flex;\n        width: 100%;\n        line-height: 45px;\n        font-size: 13px;\n        color: #1b1b1b;\n        background: #fff;\n        justify-content: space-between;\n        align-items: center;\n        padding: 0 20px;\n    }\n\n    .fitguide_btn:hover {\n        opacity: 0.7;\n    }\n\n    .a-link.has-underline,\n    .is-richtext a.has-underline>span {\n        color: #fff;\n    }\n\n    .o-grid-controller.is-two-cols .content .scrollable-content {\n        display: block;\n    }\n\n    .o-hero {\n        width: 100%\n    }\n\n    .m-free-tile.headline-preamble-wrapper.a {\n        text-decoration: underline !important\n    }\n\n    .o-blog-text .a-paragraph {\n        font-weight: 400;\n        font-size: 14px;\n        letter-spacing: .04em;\n        line-height: 19px;\n    }\n\n    .article-headline-sub {\n        font-size: 15px !important;\n        line-height: 20px !important;\n    }\n\n    .title2 {\n        font-size: 13px !important;\n        line-height: 18px !important;\n        ;\n    }\n\n    .o-hero .a-picture+.m-teaser.align-left {\n        max-width: 100% !important;\n        width: 100% !important;\n        top: 103%;\n        margin-left: -20px !important\n    }\n\n    .pull-quote.a-paragraph.a-page-paragraph {\n        padding-bottom: 40px !important\n    }\n\n    .m-free-tile .a-heading-2 {\n        font-size: 24px;\n        line-height: 17px;\n        letter-spacing: .0525em;\n        text-transform: none;\n        margin-bottom: 13px;\n        margin-top: 35px\n    }\n\n    .button1 {\n        letter-spacing: .06em;\n        margin-bottom: 10px;\n        margin-right: 5px;\n        margin-left: 5px;\n        height: 45px;\n        width: 240px;\n        background-color: #1b1b1b;\n        border: 1px solid #1b1b1b;\n        color: #fff;\n        padding: 12px 9px 12px 8px\n    }\n\n    .keyline .u-cols-sm-12-12 {\n        margin-bottom: 0px;\n    }\n\n    .a-keyline {\n        width: 100% !important;\n    }\n\n    .o-blog-text {\n        margin-top: 0;\n        padding: 0 !important;\n    }\n\n    .o-blog-text.align_left {\n        text-align: left;\n        margin: 0;\n    }\n\n    .o-blog-text.align_left>p {\n        text-align: left !important;\n    }\n\n    .is-three-cols .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n        margin-top: 0;\n        font-size: 30px;\n        line-height: 34px;\n    }\n\n    .is-three-cols .m-free-tile .headline-preamble-wrapper .a-label {\n        font-size: 13px;\n        line-height: 18px;\n    }\n\n    .is-three-cols .m-free-tile .cta-wrapper .cta-link {\n        font-size: 14px;\n        line-height: 20px;\n    }\n\n    .custom_two_cols .content {\n        display: flex;\n        flex-direction: row;\n        max-width: 1600px;\n        margin: 0 auto;\n        padding: 0 30px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .custom_two_cols .column {\n        width: 50%;\n    }\n\n    .custom_two_cols .column .o-blog-text {\n        width: 100%;\n        padding-left: 50px;\n    }\n\n    .custom_two_cols .column .o-blog-text p {\n        text-align: left !important;\n    }\n\n    .custom_sub_title {\n        margin-bottom: 30px;\n        text-align: center;\n        font-size: 40px;\n        line-height: 48px;\n    }\n\n    .custom_anchor_box {\n        margin-bottom: 60px;\n        text-align: center;\n    }\n\n    .custom_anchor_box .anchor {\n        display: inline-block;\n        font-size: 20px;\n        line-height: 25px;\n        margin-right: 10px;\n    }\n\n    .custom_anchor_box .anchor:last-child {\n        margin-right: 0;\n    }\n\n    .custom_anchor_box .anchor u {\n        text-decoration-thickness: 1px;\n    }\n\n    .a-heading-3 {\n        font-size: 13px !important;\n        line-height: 18px !important;\n        margin-bottom: 10px;\n        text-transform: uppercase;\n    }\n\n    .two-cols.m-free-tile .cta-wrapper .cta-link {\n        font-size: 14px;\n        line-height: 20px;\n    }\n\n    .sus_top_tit {\n        text-transform: uppercase;\n    }\n\n    .sub_para1 {\n        font-size: 20px;\n        line-height: 1.2em;\n    }\n\n    .u-cols-sm-12-12 {\n        padding-right: 0px !important;\n        padding-left: 0px !important;\n    }\n\n    .o-blog-text.align_left {\n        text-align: left;\n        margin: 0;\n    }\n\n    .o-blog-text.align_left>p {\n        text-align: left !important;\n    }\n\n    #sus_box_2023 .first {\n        margin-top: 50px;\n    }\n\n    .sus_btn_box {\n        text-align: center;\n        margin-bottom: 50px;\n    }\n\n    .sus_btn {\n        display: inline-block;\n        width: 240px;\n        line-height: 44px;\n        border: 1px solid #1b1b1b;\n        font-size: 12px;\n    }\n\n    .sus_btn:hover {\n        background: #1b1b1b;\n        color: #fff;\n    }\n\n    .o-grid-controller.is-two-cols .content .scrollable-content {\n        display: block;\n    }\n\n    .chips {\n        width: 70%;\n        margin-top: 40px;\n        margin-bottom: 20px;\n    }\n\n    .cta-section {\n        flex-direction: column;\n    }\n\n    .cta-wrap .arrow.right:before {\n        transform: translate(-50%, -50%) rotate(135deg);\n    }\n\n    .cta-wrap .arrow {\n        position: relative;\n        display: inline-block;\n        width: 25px;\n        height: 25px;\n        overflow: hidden;\n        vertical-align: middle;\n    }\n\n    .cta-wrap .arrow:before {\n        content: "";\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 6px;\n        height: 6px;\n        -webkit-transform: translate(-50%, -50%) rotate(45deg);\n        transform: translate(-50%, -50%) rotate(45deg);\n        margin-top: 0px;\n        border-top: 1px solid #1b1b1b;\n        border-left: 1px solid #1b1b1b;\n    }\n\n    .o-grid-controller.is-two-cols .column {\n        width: 33.3333% !important;\n        margin-left: 0 !important;\n    }\n\n    .u-row>[class^="o-"] {\n        margin: 0 auto !important;\n    }\n\n    [class*=" u-cols"].u-center-col,\n    [class^="u-cols"].u-center-col {\n        float: none;\n        width: 32%;\n        margin: 0 0% 0 17%;\n    }\n\n    @container root (max-width: 1025px) {\n        /* .chips {\n          width: 70%;\n          margin-top: 40px;\n          margin-bottom: 20px;\n      } */\n        /* .chips a {text-transform: initial; letter-spacing: .04em; font-size: 13px; line-height: 18px;} */\n    }\n\n    @container root (max-width:720px) {\n        /* .cta-section {\n          flex-direction: column;\n      } */\n    }\n\n    @container root (min-width:768px) {\n        .para {\n            padding-top: 40px !important\n        }\n\n        .button1 {\n            margin-left: 0;\n            display: inline-block\n        }\n\n        #sus_box_2023 .long_title {\n            width: 83.33%;\n        }\n\n    }\n\n\n    @container root (max-width:767px) {\n        .o-grid-controller.is-three-cols .column {\n            width: 50%\n        }\n\n        .o-grid-controller.is-three-cols .column:nth-child(1) {\n            width: 100%;\n        }\n\n        .o-grid-controller.is-four-cols.is-stacked-on-mobile .content .scrollable-content {\n            padding: 0;\n        }\n\n        .custom_two_cols .content {\n            flex-direction: column-reverse;\n            padding: 0 14px;\n        }\n\n        .custom_two_cols .column {\n            width: 100%;\n        }\n\n        .custom_two_cols .column .o-blog-text {\n            padding-left: 0;\n            margin-bottom: 40px;\n        }\n\n        .custom_sub_title {\n            text-align: left;\n            font-size: 28px;\n            line-height: 34px;\n        }\n\n        .custom_anchor_box {\n            margin-bottom: 40px;\n            text-align: left;\n            overflow-x: auto;\n            white-space: nowrap;\n        }\n\n        .custom_anchor_box .anchor {\n            font-size: 18px;\n            line-height: 22px;\n        }\n\n        .sub_para1 {\n            font-size: 15px;\n            line-height: 19px;\n        }\n\n        .m_align_center>p {\n            text-align: center !important;\n        }\n\n        .is-three-cols .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n            font-size: 24px;\n            line-height: 29px;\n        }\n\n        .parr {\n            padding-bottom: 20px;\n            text-align: center\n        }\n\n        .article-headline {\n            font-size: 40px !important;\n            line-height: 44px !important;\n            margin-left: auto !important;\n            margin-right: auto !important\n        }\n\n        .article-headline-sub {\n            text-align: left !important;\n            font-size: 13px !important;\n            line-height: 18px !important;\n            padding-bottom: 5px !important\n        }\n\n        .pull-quote {\n            font-size: 24px !important;\n            line-height: 29px !important;\n            padding-bottom: 20px !important;\n            padding-top: 2px !important\n        }\n\n        .pull-quote2 {\n            font-size: 24px !important;\n            line-height: 29px !important;\n            padding-bottom: 35px !important;\n            padding-top: 2px !important\n        }\n\n        .keep-reading {\n            padding-top: 15px !important\n        }\n\n        .new {\n            margin: 0rem 0rem 0\n        }\n\n        .o-footer {\n            padding: 0 10px 18px\n        }\n\n        .o-hero .a-picture+.m-teaser.align-left {\n            margin-left: 9px !important\n        }\n\n        .m-free-tile.headline-preamble-wrapper.a {\n            text-decoration: underline !important\n        }\n\n        .m-free-tile .a-heading-2 {\n            font-size: 20px !important\n        }\n\n        .o-hero.image-wrapper {\n            margin-bottom: -35px\n        }\n\n        .keyline .u-cols-sm-12-12 {\n            margin-bottom: 0px;\n        }\n\n        .o-blog-text .article-headline {\n            margin-left: 0 !important;\n            text-align: left !important;\n            font-size: 34px !important;\n            line-height: 39px !important;\n        }\n\n        .o-blog-text .a-paragraph {\n            font-size: 13px !important;\n            line-height: 18px !important;\n        }\n\n        #sus_box_2023 .first {\n            margin-top: 30px;\n        }\n\n        #sus_box_2023 .long_title .pull-quote1 {\n            font-size: 24px !important;\n        }\n\n        #sus_box_2023 .sus_title1 {\n            font-size: 24px !important;\n            margin-top: 30px;\n        }\n\n        .o-grid-controller.is-two-cols .content .scrollable-content {\n            display: flex;\n            flex-direction: column-reverse;\n            align-items: center\n        }\n\n        [class*=" u-cols"].u-center-col,\n        [class^="u-cols"].u-center-col {\n            width: 100%;\n            margin: 0;\n        }\n    }\n',
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
                      디자인과 제작 과정 / 사람 / 협력업체를 만나보세요
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
                      협력업체를 만나보세요
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
                            data-component-id="3454499d-d01d-4f00-9c24-e99c34f7766e"
                          >
                            <img
                              src="https://image.thehyundai.com/cos/hyundai/2024/9/2/_DSF2513 (1) 1.jpg"
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
                                COS는 함께 일하는 커뮤니티와 협력업체에 대한 책임감을 가지면 더 나은 선택을 할 수 있다고
                                생각합니다. 예를 들면, 2007년부터 튀르키예의 데님 전문 업체와 인도의 면화 재배
                                업체에서부터 중국, 튀르키예, 포르투갈, 그리고 루마니아의 제조 업체까지, 다양한
                                협력업체와의 협업을 진행해왔습니다. 전통 기술을 전문으로 하는 소규모 공급업체나 혁신적인
                                기술에 중점을 둔 대규모 공급업체와 같이 다양한 파트너와 협력하고 있다는 건 우리가 지속
                                가능성에 대한 엄청난 양의 전문 지식과 열정을 가지고 있다는 걸 뜻합니다.
                                <br />
                                <br />
                                전 세계 협력업체에서 12만 8천 명의 직원이 COS 컬렉션을 제작하고 있으며, 그중 40%는 유럽
                                지역에, 60%는 아시아 지역에서 근무하고 있습니다. 함께 일하는 직원들을 공평하게 대우하고
                                환경친화적인 사업 방식을 준수하도록 하는 것이 기업의 책임이라고 생각합니다.
                                <br />
                                <br />위 사항을 준수하기 위해 의류 제조업체뿐만 아니라 비정부기관, 거래 조합, 지역 단체,
                                공장주와 직접적으로 협업을 진행하고 있고, 외부 협력업체와 협업을 진행하기 전에
                                지속가능성{' '}
                                <a href="https://hmgroup.com/sustainability/standards-and-policies/sustainability-commitment">
                                  <u>조약</u>
                                </a>
                                과
                                <a href="https://hmgroup.com/sustainability/standards-and-policies/code-of-ethics">
                                  <u>기업 윤리 강령</u>
                                </a>
                                을 준수하도록 하고 있습니다.
                                <br />
                                <br />
                                아래에서 협력업체에 대한 설명을 확인해 보세요.
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
                        <a className="fitguide_btn" href="/free/about/sustainability/people/progress">
                          공급망에서의 성 평등
                          <div className="m-double-button" style={{ textAlign: 'left' }}>
                            <div className="cta-wrap">
                              <i className="arrow right" role="img" />
                            </div>
                          </div>
                        </a>
                        <a
                          className="fitguide_btn"
                          href="/free/about/sustainability/people/partnerships"
                          style={{ borderTop: '1px solid #1b1b1b' }}
                        >
                          파트너십과 콜라보레이션
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
                '\n    .o-hero {\n        width: 100%\n    }\n\n    .m-free-tile.headline-preamble-wrapper.a {\n        text-decoration: underline !important\n    }\n\n    .o-blog-text .a-paragraph {\n        font-weight: 400;\n        font-size: 14px;\n        letter-spacing: .04em;\n        line-height: 19px;\n    }\n\n    .article-headline-sub {\n        font-size: 15px !important;\n        line-height: 20px !important;\n    }\n\n    .title2 {\n        font-size: 13px !important;\n        line-height: 18px !important;\n    }\n\n    .o-hero .a-picture+.m-teaser.align-left {\n        max-width: 100% !important;\n        width: 100% !important;\n        top: 103%;\n        margin-left: -20px !important\n    }\n\n    .pull-quote.a-paragraph.a-page-paragraph {\n        padding-bottom: 40px !important\n    }\n\n    .m-free-tile .a-heading-2 {\n        font-size: 24px;\n        line-height: 17px;\n        letter-spacing: .0525em;\n        text-transform: none;\n        margin-bottom: 13px;\n        margin-top: 35px\n    }\n\n    .button1 {\n        letter-spacing: .06em;\n        margin-bottom: 10px;\n        margin-right: 5px;\n        margin-left: 5px;\n        height: 45px;\n        width: 240px;\n        background-color: #1b1b1b;\n        border: 1px solid #1b1b1b;\n        color: #fff;\n        padding: 12px 9px 12px 8px;\n    }\n\n    .keyline .u-cols-sm-12-12 {\n        margin-bottom: 10px;\n        width: 50%;\n    }\n\n    .o-blog-text {\n        margin-top: 0;\n        width: 66.33333%;\n    }\n\n    .o-blog-text.align_left {\n        text-align: left;\n        margin: 0;\n    }\n\n    .o-blog-text.align_left>p {\n        text-align: left !important;\n    }\n\n    .is-three-cols .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n        margin-top: 0;\n        font-size: 30px;\n        line-height: 34px;\n    }\n\n    .is-three-cols .m-free-tile .headline-preamble-wrapper .a-label {\n        font-size: 13px;\n        line-height: 18px;\n    }\n\n    .is-three-cols .m-free-tile .cta-wrapper .cta-link {\n        font-size: 14px;\n        line-height: 20px;\n    }\n\n    .custom_two_cols .content {\n        display: flex;\n        flex-direction: column;\n        max-width: 1600px;\n        margin: 0 auto;\n        padding: 0 30px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .custom_two_cols .column {\n        width: 50%;\n    }\n\n    .custom_two_cols .column .o-blog-text {\n        width: 100%;\n        padding-right: 50px;\n    }\n\n    .custom_sub_title {\n        margin-bottom: 30px;\n        text-align: left;\n        font-size: 40px;\n        line-height: 48px;\n    }\n\n    .custom_anchor_box {\n        margin-bottom: 60px;\n        text-align: center;\n    }\n\n    .custom_anchor_box .anchor {\n        display: inline-block;\n        font-size: 20px;\n        line-height: 25px;\n        margin-right: 10px;\n    }\n\n    .custom_anchor_box .anchor:last-child {\n        margin-right: 0;\n    }\n\n    .custom_anchor_box .anchor u {\n        text-decoration-thickness: 1px;\n    }\n\n    .a-heading-3 {\n        font-size: 13px !important;\n        line-height: 18px !important;\n        margin-bottom: 10px;\n        text-transform: uppercase;\n    }\n\n    .two-cols.m-free-tile .cta-wrapper .cta-link {\n        font-size: 14px;\n        line-height: 20px;\n    }\n\n    .sus_top_tit {\n        text-transform: uppercase;\n    }\n\n    .sub_para1 {\n        font-size: 20px;\n        line-height: 24px;\n    }\n\n    .magazine-type .content .colum {\n        display: block !important;\n        margin-left: 16.8888% !important;\n    }\n\n    .m_align_center>p {\n        text-align: left !important;\n        font-size: 20.0px;\n        padding-bottom: 25.0px;\n        line-height: 26.0px;\n        width: 50%;\n    }\n\n    .o-grid-controller.is-three-cols .column.leftcolum {\n        margin-left: -34%;\n    }\n\n    .o-grid-controller.is-three-cols .column {\n        padding: 10px;\n    }\n\n    @container root (min-width:768px) {\n        .para {\n            padding-top: 40px !important\n        }\n\n        .button1 {\n            margin-left: 0;\n            display: inline-block\n        }\n\n    }\n\n    @container root (max-width:767px) {\n        .custom_two_cols .content {\n            padding: 0 14px;\n        }\n\n        .custom_two_cols .column {\n            width: 100%;\n        }\n\n        .custom_two_cols .column .o-blog-text {\n            padding-right: 0;\n            margin-bottom: 40px;\n        }\n\n        .custom_sub_title {\n            font-size: 28px;\n            line-height: 34px;\n        }\n\n        .custom_anchor_box {\n            margin: 0 auto 40px;\n            overflow-x: auto;\n            white-space: nowrap;\n            display: flex;\n            flex-direction: column;\n            width: 50%;\n        }\n\n        .custom_anchor_box .anchor {\n            font-size: 18px;\n            line-height: 22px;\n        }\n\n        .touch_target .anchor {\n            margin: 10px 0;\n        }\n\n        .sub_para1 {\n            font-size: 15px;\n            line-height: 19px;\n        }\n\n        .is-three-cols .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n            font-size: 24px;\n            line-height: 29px;\n        }\n\n        .parr {\n            padding-bottom: 20px;\n            text-align: center\n        }\n\n        .article-headline {\n            font-size: 40px !important;\n            line-height: 44px !important;\n            margin-left: auto !important;\n            margin-right: auto !important\n        }\n\n        .article-headline-sub {\n            font-size: 13px !important;\n            line-height: 18px !important;\n            padding-bottom: 5px !important\n        }\n\n        .pull-quote {\n            font-size: 24px !important;\n            line-height: 29px !important;\n            padding-bottom: 20px !important;\n            padding-top: 2px !important\n        }\n\n        .pull-quote2 {\n            font-size: 24px !important;\n            line-height: 29px !important;\n            padding-bottom: 35px !important;\n            padding-top: 2px !important\n        }\n\n        .keep-reading {\n            padding-top: 15px !important\n        }\n\n        .new {\n            margin: 0rem 0rem 0\n        }\n\n        .scrollable-content.magazine-2021 {\n            display: flex;\n            flex-direction: row;\n        }\n\n        .o-grid-controller.is-three-cols .column {\n            width: 100%;\n        }\n\n        .o-grid-controller.is-three-cols .column:nth-child(1) {\n            width: 100%;\n        }\n\n        .o-footer {\n            padding: 0 10px 18px\n        }\n\n        .o-hero .a-picture+.m-teaser.align-left {\n            margin-left: 9px !important\n        }\n\n        .m-free-tile.headline-preamble-wrapper.a {\n            text-decoration: underline !important\n        }\n\n        .m-free-tile .a-heading-2 {\n            font-size: 20px !important\n        }\n\n        .o-hero.image-wrapper {\n            margin-bottom: -35px\n        }\n\n        .keyline .u-cols-sm-12-12 {\n            margin-bottom: 0px;\n        }\n\n        .o-blog-text .article-headline {\n            margin-left: 0 !important;\n            font-size: 34px !important;\n            line-height: 39px !important;\n        }\n\n        .o-blog-text .a-paragraph {\n            font-size: 13px !important;\n            line-height: 18px !important;\n        }\n\n        .o-grid-controller.is-two-cols .column,\n        .o-blog-text {\n            width: 100% !important;\n        }\n\n        .magazine-type .content .colum {\n            margin: 0 !important;\n        }\n\n        .m_align_center>p {\n            width: 100%;\n        }\n\n        .o-grid-controller.is-three-cols .column.leftcolum {\n            margin-left: 0%;\n        }\n\n        .keyline .u-cols-sm-12-12 {\n            width: 100%;\n        }\n\n    }\n',
            }}
          />
          <div className="o-spacing" />
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
                          <a
                            data-component="APicture"
                            className="a-picture"
                            href="/free/about/sustainability/people/suppliers"
                            style={{ cursor: 'pointer' }}
                            data-component-id="e0db4c43-1a1b-4b53-9022-d3030c17180e"
                          >
                            <img
                              className="a-image loaded initial"
                              src="https://image.thehyundai.com/cos/hyundai/2024/9/2/Photo1.jpg"
                              data-was-processed="true"
                            />
                          </a>
                          <div className="headline-preamble-wrapper">
                            <h2 className="a-heading-3" style={{ cursor: 'default' }}>
                              만테코
                            </h2>
                            <p className="a-label js-a-label " style={{ cursor: 'default' }}>
                              토스카나 프라토 지역에 기반을 둔 가족 경영의 이탈리아 섬유 회사는 고급 원단으로 전
                              세계적으로 유명합니다. 이탈리아 장인 정신의 전통을 살리기 위해 현지 장인들과 협력하는
                              한편, 리사이클 울(MWool®)와 같은 리사이클 소재를 사용하여 제조에 신중하게 접근합니다.
                              <br />
                              <br />
                              처음부터 만테코와 긴밀히 협력하여 공급망의 모든 단계가 물리적으로 가능한 한 현지에서
                              이루어지는 제로 마일 울 공급망에 투자해 왔습니다. 자세한 내용은 CEO 마르코 만텔라시와의
                              인터뷰를 확인해 보세요.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*coloum*/}
                      <div className="column">
                        <div className="m-free-tile" style={{ cursor: 'default' }}>
                          <a
                            data-component="APicture"
                            className="a-picture"
                            href="/free/about/sustainability/people/progress"
                            style={{ cursor: 'pointer' }}
                            data-component-id="e4685226-22db-4dde-aee7-4cd07816ab6c"
                          >
                            <img
                              className="a-image loaded initial"
                              src="https://image.thehyundai.com/cos/hyundai/2024/9/2/Photo2.jpg"
                              data-was-processed="true"
                            />
                          </a>
                          <div className="headline-preamble-wrapper">
                            <h2 className="a-heading-3" style={{ cursor: 'default' }}>
                              마테라
                            </h2>
                            <p className="a-label js-a-label " style={{ cursor: 'default' }}>
                              인도의 구자라트(Gujarat)로 옮기기 전 에식스(Essex)의 온실에서 탄생한 마테라(Materra)는
                              지속 가능하고 부드러운 면화를 생산하는 기술 회사입니다. 현재까지 잘 알려진 마테라의
                              혁신적인 기술은 기후 조절이 가능한 온실 환경에서 면화를 재배하는 것입니다. 이를 통해
                              화학적 면화 재배 방식보다 물을 최대 80% 절약할 수 있으며 이산화탄소를 약 30% 적게 사용할
                              수 있습니다. <br />
                              <br />
                              2021년, COS는 마테라의 첫 수확량에 투자하여 프로토타입 티셔츠 세트를 제작했습니다.
                              마테라의 공동 창립자들이 온실 재배 면화와 지역 사회, 그리고 COS와의 협업에 대해 나눈
                              인터뷰를 확인해 보세요.
                            </p>
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
                          <a
                            data-component="APicture"
                            className="a-picture"
                            href="https://www.cos.com/ko-kr/features/stories/materials-that-matter-materra.html"
                            style={{ cursor: 'pointer' }}
                            data-component-id="e0db4c43-1a1b-4b53-9022-d3030c17180e"
                          >
                            <img
                              className="a-image loaded initial"
                              src="https://image.thehyundai.com/cos/hyundai/2024/9/2/Photo3.jpg"
                              data-was-processed="true"
                            />
                          </a>
                          <div className="headline-preamble-wrapper">
                            <h2 className="a-heading-3" style={{ cursor: 'default' }}>
                              발레리우스
                            </h2>
                            <p className="a-label js-a-label " style={{ cursor: 'default' }}>
                              발레리우스 저지 소재의 혁신에 있어 발레리우스(Valérius) 만큼 뛰어난 퀄리티와 발전을
                              보여주는 공급 업체를 찾긴 어렵습니다. 25년의 역사를 가진 포르투갈의 혁신적인 기업은 이제
                              원단 낭비 없이 소재를 재활용하는 것에 중점을 두고 있습니다.
                              <br />
                              <br />
                              발레리우스는 2009년부터 COS와 협업을 시작하여 평등, 지속가능성, 그리고 혁신에 대한 가치를
                              공유했고, 이를 바탕으로 두 기업은 좋은 파트너십을 맺으며 시너지 효과를 내왔습니다.
                              발레리우스 본사에서 지속가능성, 혁신적인 저지 리사이클 방식, 그리고 COS와의 협업에 대한
                              이야기를 나눴습니다. 아래 링크에서 자세한 내용을 확인해 보세요.
                            </p>
                          </div>
                          <div className="cta-wrapper noComma">
                            <a
                              target="_self"
                              className="a-link cta-link unsmart-underline"
                              href="https://www.cos.com/ko-kr/features/stories/materials-that-matter-materra.html"
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
                          <a
                            data-component="APicture"
                            className="a-picture"
                            href="/free/about/sustainability/people/progress"
                            style={{ cursor: 'pointer' }}
                            data-component-id="e4685226-22db-4dde-aee7-4cd07816ab6c"
                          >
                            <img
                              className="a-image loaded initial"
                              src="https://image.thehyundai.com/cos/hyundai/2024/9/2/Photo4.jpg"
                              data-was-processed="true"
                            />
                          </a>
                          <div className="headline-preamble-wrapper">
                            <h2 className="a-heading-3" style={{ cursor: 'default' }}>
                              {' '}
                              속타스
                            </h2>
                            <p className="a-label js-a-label " style={{ cursor: 'default' }}>
                              1971년에 튀르키예에서 설립된 카이한(Kayhan) 가문은 세대를 거쳐 면화 재배를 진행해왔고,
                              전문 분야는 독창적인 원사와 혼방 소재를 개발하는 것입니다. 속타스(Söktaş)는 수년에 걸쳐
                              고급 울, 실크 및 리넨과 코튼 혼방 소재를 생산하여 패션 산업에 기여했습니다.
                              <br />
                              <br />
                              COS는 고품질 소재로 잘 알려진 속타스와 협업하여 우수한 퀄리티의 셔츠 컬렉션을 제작하고
                              있습니다.
                            </p>
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
                          <a
                            data-component="APicture"
                            className="a-picture"
                            href="/free/about/sustainability/people/suppliers"
                            style={{ cursor: 'pointer' }}
                            data-component-id="e0db4c43-1a1b-4b53-9022-d3030c17180e"
                          >
                            <img
                              className="a-image loaded initial"
                              src="https://image.thehyundai.com/cos/hyundai/2024/9/2/Photo5.jpg"
                              data-was-processed="true"
                            />
                          </a>
                          <div className="headline-preamble-wrapper">
                            <h2 className="a-heading-3" style={{ cursor: 'default' }}>
                              {' '}
                              틴텍스
                            </h2>
                            <p className="a-label js-a-label " style={{ cursor: 'default' }}>
                              가족 경영 회사 틴텍스(Tintex Textiles)는 환경에 대한 부담을 최소화하고 고품질 직물을
                              제작하는 저지 전문 업체입니다. 포르투갈의 포르투(Porto) 지역에 기반을 둔 틴텍스는 지난
                              20년 동안 섬유 산업에서 선구자적인 역할을 해왔으며, COS 론칭 초기부터 협업을
                              진행해왔습니다.
                              <br />
                              <br />
                              오랜 관계를 통해 섬유 업계에서 새로운 혁신을 이뤄낸 결과, 뛰어난 부드러움과 선명한 색상의
                              저지를 제공할 수 있게 되었습니다.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*coloum*/}
                      <div className="column">
                        <div className="m-free-tile" style={{ cursor: 'default' }}>
                          <a
                            data-component="APicture"
                            className="a-picture"
                            href="/free/about/sustainability/people/progress"
                            style={{ cursor: 'pointer' }}
                            data-component-id="e4685226-22db-4dde-aee7-4cd07816ab6c"
                          >
                            <img
                              className="a-image loaded initial"
                              src="https://image.thehyundai.com/cos/hyundai/2024/9/2/Photo6.jpg"
                              data-was-processed="true"
                            />
                          </a>
                          <div className="headline-preamble-wrapper">
                            <h2 className="a-heading-3" style={{ cursor: 'default' }}>
                              {' '}
                              운루
                            </h2>
                            <p className="a-label js-a-label " style={{ cursor: 'default' }}>
                              운루 텍스틸은 튀르키예의 의류 제조업체로 COS의 최대 공급업체 중 하나입니다. 1992년부터
                              운영된 이 회사는 적응을 성공의 열쇠로 여깁니다. COS와의 충실한 파트너십을 통해 컬렉션을
                              확장하고 공급을 늘려 다양한 제품을 제공하는 데 도움을 주었습니다.
                              <br />
                              <br />
                              운루는 3D 샘플링을 통해 제품 개발 단계에서 불필요한 재료를 줄이고, 실을 꿰맬 때 물 없이
                              염색하는 시스템을 구현합니다. 또한 운루 아카데미를 설립하여 팀원들에게 지속 가능한 방식을
                              교육하고 있습니다.
                            </p>
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
          {/*혁렵업체*/}
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n    .accordion-header .a-heading-3 {\n        text-transform: uppercase;\n    }\n    @container root (min-width: 768px) {\n     .keyline .u-cols-sm-12-12 {\n      width: 100%;\n      }\n    }\n',
            }}
          />
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="contain">
              <div className="u-cols-sm-12-12 u-cols-md-8-12 u-cols-lg-10-24 q-vertical-padding-global u-center-col">
                <p className="a-paragraph"></p>
                <div className="keyline parbase section">
                  <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
                    <hr className="a-keyline" />
                  </div>
                </div>
                <b style={{ fontSize: 24, fontWeight: 400 }}>협력업체</b>
                <br />
                <br />
                2025년 1월 기준의 협력업체 리스트이며, 지난 세 시즌 동안 생산된 작품에 적용됩니다.
                <p />
              </div>
              <div className="u-cols-sm-12-12 u-cols-md-8-12 u-cols-lg-10-24 u-center-col">
                <div className="o-contain">
                  <div
                    data-component="OAccordion"
                    className="o-accordion"
                    data-exclusive="data-exclusive"
                    data-exclusive-group="example"
                    data-component-id="c2e9d8ac-1f51-4155-b22e-26adc8aba570"
                  >
                    <div className="accordion-header">
                      <a
                        href="#"
                        target="_self"
                        className="a-link a-link accordion-title js-accordion-toggle no-styling"
                      >
                        <span className="a-icon-plus" />
                        <span className="a-icon-minus" />
                        <h3 className="a-heading-3"> 방글라데시</h3>
                      </a>
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-inner-content">
                        <p className="a-paragraph">
                          협력업체 <br />
                          FAKIR APPARELS LTD. <br />
                          <br />
                          생산시설
                          <br />
                          FAKIR APPARELS LTD. <br />
                          16/17A BSCIC INDUSTRIAL AREA, ENAYETNAGAR, FATULLAH, 1400, NARAYANGANJ <br />
                          <br />
                          협력업체 <br />
                          FAKIR KNITWEARS LTD. <br />
                          <br />
                          생산시설
                          <br />
                          FAKIR KNITWEARS LTD. <br />
                          KAYEMPUR, FATULLAH, 1400, NARAYANGANJ <br />
                          <br />
                          협력업체
                          <br />
                          HAESONG KOREA LTD. <br />
                          <br />
                          생산시설
                          <br />
                          HAESONG KOREA <br />
                          BARA RANGAMATIA, HAN COMPLEX, ZIRABO, 1340, SAVAR <br />
                          <br />
                          협력업체
                          <br />
                          FLAMINGO FASHIONS LTD. <br />
                          <br />
                          생산시설
                          <br />
                          JINNAT APPARELS &amp; FASHION LTD <br />
                          SARDAGONJ ROAD, SARDAGONJ, KASHIMPUR, 1349, GAZIPUR <br />
                          <br />
                          협력업체 <br />
                          KC LINGERIE LTD <br />
                          <br />
                          생산시설
                          <br />
                          KNIT CONCERN LTD. <br />
                          62 WATER WORKS ROAD, GODNAIL, 1400, NARAYANGANJ <br />
                          <br />
                          협력업체
                          <br />
                          RUSSEL GARMENTS <br />
                          <br />
                          생산시설
                          <br />
                          RUSSEL GARMENTS <br />
                          OSMAN TOWER, 56/1, S.M. MALEH ROAD, 1400, NARAYANGANJ <br />
                          <br />
                          협력업체
                          <br />
                          FAKIR APPARELS LTD. <br />
                          <br />
                          생산시설
                          <br />
                          MIDLAND KNITWEAR LTD <br />
                          RAMARBAGH, KUTUBPUR, FATULLAH, 1420, NARAYANGONJ <br />
                          <br />
                          협력업체
                          <br />
                          VERTEX WEAR LTD. <br />
                          <br />
                          생산시설
                          <br />
                          VERTEX WEAR LIMITED. <br />
                          VARARI, TETULJHORA, RAJFULBARIA, HEMAYETPUR, SAVAR, 1340, DHAKA <br />
                          <br />
                          협력업체
                          <br />
                          FAKIR FASHION LTD <br />
                          <br />
                          생산시설
                          <br />
                          FAKIR FASHION <br />
                          SONARGAON ROAD, DOHARGAON, BALIAPARA, RUPGONJ, 1400, NARAYONGANJ <br />
                          <br />
                          협력업체
                          <br />
                          KC LINGERIE LTD <br />
                          <br />
                          생산시설
                          <br />
                          KC LINGERIE LTD. <br />
                          57/1, WATER WORKS ROAD, GODNAIL, SIDDERGONJ, 1400, NARAYANGANJ <br />
                          <br />
                          협력업체
                          <br />
                          FLAMINGO FASHIONS LTD. <br />
                          <br />
                          생산시설
                          <br />
                          FLAMINGO FASHIONS LTD UNIT 2 <br />
                          MARIALI, JOYDEBPUR, 1700, GAZIPUR <br />
                          <br />
                          협력업체
                          <br />
                          DEBONAIR PADDING AND QUILTING SOLUTION LIMITED <br />
                          <br />
                          생산시설
                          <br />
                          DEBONAIR PADDING &amp; QUILTING SOLUTION LTD <br />
                          CATAN PARA, PARAGON, VALUKA, MYMENSINGH, 2240, MYMENSINGH <br />
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-component="OAccordion"
                    className="o-accordion"
                    data-exclusive="data-exclusive"
                    data-exclusive-group="example"
                    data-component-id={6}
                  >
                    <div className="accordion-header">
                      <a
                        href="#"
                        target="_self"
                        className="a-link a-link accordion-title js-accordion-toggle no-styling"
                      >
                        <span className="a-icon-plus" />
                        <span className="a-icon-minus" />
                        <h3 className="a-heading-3">불가리아</h3>
                      </a>
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-inner-content">
                        <p className="a-paragraph">
                          협력업체 <br />
                          REDDROP LIMITED <br />
                          <br />
                          생산시설
                          <br />
                          N OPTIMUS EOOD <br />
                          URY GAGARIN, 1, 2303, PERNIK <br />
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-component="OAccordion"
                    className="o-accordion"
                    data-exclusive="data-exclusive"
                    data-exclusive-group="example"
                    data-component-id={7}
                  >
                    <div className="accordion-header">
                      <a
                        href="#"
                        target="_self"
                        className="a-link a-link accordion-title js-accordion-toggle no-styling"
                      >
                        <span className="a-icon-plus" />
                        <span className="a-icon-minus" />
                        <h3 className="a-heading-3">인도</h3>
                      </a>
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-inner-content">
                        <p className="a-paragraph">
                          협력업체 <br />
                          RADNIK EXPORTS GLOBAL PVT LIMITED <br />
                          <br />
                          생산시설 <br />
                          RADNIK EXPORTS GLOBAL PVT LIMITED (UNIT E2) <br />
                          E-2,, SECTOR- 59, 201301, NOIDA <br />
                          <br />
                          협력업체 <br />
                          K.H. EXPORTS INDIA PRIVATE LIMITED <br />
                          <br />
                          생산시설 <br />
                          KH EXPORTS INDIA PVT. LTD. - GLOVES <br />
                          142/1, CHENNAI KRISHNAGIRI, NATIONAL HIGHWAY (TRUNK ROAD), PERUMUGAI,, 632009, VELLORE
                          <br />
                          <br />
                          협력업체 <br />
                          RADNIK AUTO EXPORTS <br />
                          <br />
                          생산시설 <br />
                          RADNIK AUTO EXPORTS UNIT NSEZ <br />
                          64,, NSEZ, PHASE - II, 201305, NOIDA <br />
                          <br />
                          협력업체 <br />
                          BANOX EXIM PVT LTD <br />
                          <br />
                          생산시설 <br />
                          BANOX EXIM PVT LTD <br />
                          PLOT NO 19, SECTOR 4, IMT MANESAR, 122050, GURGAON <br />
                          <br />
                          협력업체 <br />
                          BHARTIYA INTERNATIONAL LTD. <br />
                          <br />
                          생산시설 <br />
                          SUNRISE FASHIONS UNIT 2 <br />
                          NO: 180/5, HULLAHALLI,, C K PALYA,SAKALAVARA POST,, 560083, BANGALAORE <br />
                          <br />
                          협력업체 <br />
                          K.H. EXPORTS INDIA PRIVATE LIMITED <br />
                          <br />
                          생산시설 <br />
                          K H EXPORTS INDIA PVT. LTD (FOOTWEA <br />
                          10/8, BYE PASS ROAD, RANIPET., TAMIL NADU, 632401, CHENNAI <br />
                          <br />
                          협력업체 <br />
                          RADNIK EXPORTS GLOBAL PVT LIMITED <br />
                          <br />
                          생산시설 <br />
                          RADNIK EXPORTS GLOBAL PVT LIMITED (UNIT D201) <br />
                          UNIT D -201, SECTOR 63, 201301, NOIDA
                          <br />
                          <br />
                          협력업체 <br />
                          SONI INTERNATIONAL JEWELRY MFG. CO. <br />
                          <br />
                          생산시설 <br />
                          SONI INTERNATIONAL JEWELRY MFG. CO. <br />
                          F-22, SPECIAL ECONOMIC ZONE-1, SITAPURA INDUSTRIAL AREA,, JAIPUR- INDIA, 302022, JAIPUR
                          <br />
                          <br />
                          협력업체 <br />
                          ALPINE APPARELS PVT. LTD. <br />
                          <br />
                          생산시설 <br />
                          ALPINE APPARELS PVT. LTD. <br />
                          PLOT NO. 18, SECTOR 27A, 121003, FARIDABAD <br />
                          <br />
                          협력업체 <br />
                          SAHU EXPORTS PVT LTD <br />
                          <br />
                          생산시설 <br />
                          SAHU EXPORTS <br />A 204, SECTOR 63,GAUTAM BUDDHA NAGAR , NCR, 201301, NOIDA <br />
                          <br />
                          협력업체 <br />
                          LAGUNA CLOTHING PRIVATE LIMITED <br />
                          <br />
                          생산시설 <br />
                          LAGUNA CLOTHING PVT LTD <br />
                          SW 49/50 KIADB APPAREL PARK, AREHALLI GUDDADAHALLI, 561203, BENGALURU <br />
                          <br />
                          협력업체 <br />
                          ALPINE APPARELS PVT. LTD. <br />
                          <br />
                          생산시설 <br />
                          ALPINE APPARELS PVT. LTD. [UNIT 19] <br />
                          PLOT NO. 19,SECTOR 27A, HARYANA, 121003, FARIDABAD <br />
                          <br />
                          협력업체 <br />
                          ALPINE APPARELS PVT. LTD. <br />
                          <br />
                          생산시설 <br />
                          ALPINE APPARELS PVT. LTD.[UNIT 68] <br />
                          PLOT NO. 68,SECTOR 27A, 121003, FARIDABAD <br />
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-component="OAccordion"
                    className="o-accordion"
                    data-exclusive="data-exclusive"
                    data-exclusive-group="example"
                    data-component-id="9271aa02-6cc0-4351-afb4-e23cc8bb55ea"
                  >
                    <div className="accordion-header">
                      <a
                        href="#"
                        target="_self"
                        className="a-link a-link accordion-title js-accordion-toggle no-styling"
                      >
                        <span className="a-icon-plus" />
                        <span className="a-icon-minus" />
                        <h3 className="a-heading-3">인도네시아</h3>
                      </a>
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-inner-content">
                        <p className="a-paragraph">
                          협력업체 <br />
                          PT. SANSAN SAUDARATEX JAYA <br />
                          <br />
                          생산시설 <br />
                          PT. SANSAN SAUDARATEX JAYA (UNIT 1) <br />
                          JL.CIBALIGO NO.33 CIMAHI, 40535, CIMAHI <br />
                          <br />
                          협력업체 <br />
                          PT BUSANAREMAJA AGRACIPTA <br />
                          <br />
                          생산시설 <br />
                          PT. BUSANAREMAJA AGRACIPTA - YOGYAKARTA (UNIT 1) <br />
                          JL. LINGKAR SELATAN SARIREJO II, RT03/11 SINGOSAREN BANGUNTAPAN, BANTUL, 55193, JOGJAKARTA
                          <br />
                          <br />
                          협력업체 <br />
                          PT. SUMBER BINTANG REJEKI <br />
                          <br />
                          생산시설 <br />
                          PT. SUMBER BINTANG REJEKI (SEMARANG BRANCH) <br />
                          L. RAYA TEGAL PANAS JIMBARAN,, DS. SECANG RT.01/RW.01, DSN., SAMBAN, KEC. BAWEN, KAB. SEMARANG
                          -, 50661, SEMARANG <br />
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-component="OAccordion"
                    className="o-accordion"
                    data-exclusive="data-exclusive"
                    data-exclusive-group="example"
                    data-component-id="417c5b09-a6c0-4093-bb38-807c29185f47"
                  >
                    <div className="accordion-header">
                      <a
                        href="#"
                        target="_self"
                        className="a-link a-link accordion-title js-accordion-toggle no-styling"
                      >
                        <span className="a-icon-plus" />
                        <span className="a-icon-minus" />
                        <h3 className="a-heading-3">이탈리아</h3>
                      </a>
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-inner-content">
                        <p className="a-paragraph">
                          협력업체 <br />
                          CALZIFICIO PRIMATO SRL <br />
                          <br />
                          생산시설 <br />
                          PRIMATO SRL CALZIFICIO <br />
                          STRADA ACQUAFREDDA, 24, 46042, CASTEL GOFFREDO <br />
                          <br />
                          협력업체 <br />
                          MIVA SRL <br />
                          <br />
                          생산시설 <br />
                          MIVA SRL <br />
                          VIA TREVIGLIO, 34, 24053, BRIGNANO GERA D&apos;ADDA <br />
                          <br />
                          협력업체 <br />
                          DORA S.R.L <br />
                          <br />
                          생산시설 <br />
                          DORA SRL <br />
                          VIA E. MATTEI, 24, 25046, CAZZAGO <br />
                          <br />
                          협력업체 <br />
                          TESSITURA ATTILIO BOTTINELLI SRL <br />
                          <br />
                          생산시설 <br />
                          TESSITURA ATTILIO BOTTINELLI SRL <br />
                          VIA VOLTA, 9, 22079, VILLA GUARDIA <br />
                          <br />
                          협력업체 <br />
                          TESSITURA ATTILIO BOTTINELLI SRL <br />
                          <br />
                          생산시설 <br />
                          DITTA SCHIAVI SANDRO LAVORAZIONE CRAVATTE <br />
                          VIA DON MINZONI, 131, 22040, ALZATE BRIANZA <br />
                          <br />
                          협력업체 <br />
                          CALZIFICIO ILARY S.R.L. <br />
                          <br />
                          생산시설 <br />
                          CALZIFICIO ILARY SRL <br />
                          VIA DON ZANETTI 12/14 AND, VIA DELL INDUSTRIA, , 25010, VISANO <br />
                          <br />
                          협력업체 <br />
                          INDUSTRIA CONFEZIONI MODERNE INCOM - STUDIO E CREAZIONI SPA <br />
                          <br />
                          생산시설 <br />
                          INCOM SPA <br />
                          VIA S. MARIA DEL PIANO 39, 61049, URBANIA <br />
                          <br />
                          협력업체 <br />
                          EFFEMME SRL <br />
                          <br />
                          생산시설 <br />
                          EFFEMME SRL <br />
                          CONTRADA CAMPIGLIONE, 20, 63900, FERMO <br />
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-component="OAccordion"
                    className="o-accordion"
                    data-exclusive="data-exclusive"
                    data-exclusive-group="example"
                    data-component-id="769c5b2e-8bc7-4afd-bb48-9cedd97dffbf"
                  >
                    <div className="accordion-header">
                      <a
                        href="#"
                        target="_self"
                        className="a-link a-link accordion-title js-accordion-toggle no-styling"
                      >
                        <span className="a-icon-plus" />
                        <span className="a-icon-minus" />
                        <h3 className="a-heading-3"> 중국</h3>
                      </a>
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-inner-content">
                        <p className="a-paragraph">
                          협력업체 <br />
                          HOP LUN (HK) LTD <br />
                          <br />
                          생산시설 <br />
                          HOP LUN FASHION (QUANNAN) LTD. <br />
                          THE FIRST INDUSTRY ZONE, QUANNAN COUNTY, 341800, GANZHOU
                          <br />
                          <br />
                          협력업체 <br />
                          LIVING ACCESSORIES CEANNIS LIMITED <br />
                          <br />
                          생산시설 <br />
                          ANKIE HANDBAG FACTORY <br />
                          CHUN WEI INDUSTRIAL AREA, HUANG LEI, 523000, DONGGUAN <br />
                          <br />
                          협력업체 <br />
                          XIANGGANG YILI INDUSTRY CO.,LIMITED <br />
                          <br />
                          생산시설 <br />
                          ANKIE HANDBAG FACTORY <br />
                          CHUN WEI INDUSTRIAL AREA, HUANG LEI, 523000, DONGGUAN <br />
                          <br />
                          협력업체 <br />
                          SUZHOU WANLI KNITTING CO.,LTD <br />
                          <br />
                          생산시설 <br />
                          SUZHOU WANLI KNITTING CO., LTD. <br />
                          DU VILLAGE, LINHU TOWN, WUZHONG DISTRICT, 215106, SUZHOU <br />
                          <br />
                          협력업체 <br />
                          ZHEJIANG HEMPELZHI TEXTILE TECHNOLOGY CO. LTD
                          <br />
                          <br />
                          생산시설 <br />
                          ZHEJIANG HEMPELZHI TEXTILE TECHNOLOGY CO. LTD. <br />
                          NO 477 HONGXING ROAD, E&amp;T DEVELOPMENT ZONE XIAOSHAN, DISTRICT, 311200, HANG ZHOU
                          <br />
                          <br />
                          협력업체 <br />
                          NINGBO SEDUNO IMP &amp; EXP CO.LTD <br />
                          <br />
                          생산시설 <br />
                          NINGBO ORIENT HONGYE KNIT CO.,LTD <br />
                          NO.397, SCIENTIFIC RESEARCH ROAD, WANGCHUN INDUSTRIAL PARK, HAISHU DISTRICT, 315000, NINGBO{' '}
                          <br />
                          <br />
                          협력업체 <br />
                          SHANGHAI JINGRONG SCIENCE &amp; TECHNOLOGY CO., LTD. <br />
                          <br />
                          생산시설 <br />
                          SHANGHAI JINGRONG SCIENCE &amp; TECHNOLOGY CO., LTD. <br />
                          NO.299 YISONG ROAD, FENGXIAN DISTRICT, 201401, SHANGHAI <br />
                          <br />
                          협력업체 <br />
                          YUEXIN (WUXI) APPAREL &amp; ACCESSORIES CO., LTD <br />
                          <br />
                          생산시설 <br />
                          YUEXIN (WUXI) APPAREL &amp; ACCESSORIES CO.,LTD <br />
                          NO.5 TAIYUN ROAD, BINGHU ECONOMIC &amp; TECHNOLOGICAL, DEVELOPMENT ZONE, 214131, WUXI
                          <br />
                          <br />
                          협력업체 <br />
                          WUXI MINGJING SILK KNITTING CO.LTD. <br />
                          <br />
                          생산시설 <br />
                          JIANGYIN BENDA GARMENT CO.,LTD. <br />
                          HUACHANG ROAD NO. 2, ZHUTANG TOWN, 214416, JIANGYIN <br />
                          <br />
                          협력업체 <br />
                          FUJIAN WANJIAMEI TEXTILE CLOTHING CO.,LTD <br />
                          <br />
                          생산시설 <br />
                          FUJIAN WANJIAMEI KNITTED WEAR CO.,LTD <br />
                          BANGDE INDUSTRY ZONE, TANHUA HILL,TAOCHENG,, YONGCHUN, 362600, QUANZHOU <br />
                          <br />
                          협력업체 <br />
                          WUXI MINGJING SILK KNITTING CO.LTD. <br />
                          <br />
                          생산시설 <br />
                          WUXI MINGJING SILK KNITTING CO., LTD. <br />
                          EAST ZHONGXING ROAD, LUOSHE TOWNSHIP, 214187, WUXI <br />
                          <br />
                          협력업체 <br />
                          SHENGZHOU JIALAN GARMENTS &amp; APPAREL CO.,LTD <br />
                          <br />
                          생산시설 <br />
                          SHENGZHOU JIA LAN APPAREL &amp; GARMENTS CO., LTD. <br />
                          NO 28, HUAFA EAST ROAD,, SHENGZHOU ECONOMIC DEVELOPMENT, ZONE, 312400, SHENGZHOU
                          <br />
                          <br />
                          협력업체 <br />
                          SERENDIPITY INTERNATIONAL TRADING LTD. <br />
                          <br />
                          생산시설 <br />
                          SERENDIPITY FASHION CO.,LTD <br />
                          LITANG INDUSTRIAL PARK,LITANG RIVER, ROAD XIANGCHENG DISTRICT, 215000, SU ZHOU <br />
                          <br />
                          협력업체 <br />
                          SUZHOU MARCONI GARMENT FACTORY CO.,LTD. <br />
                          <br />
                          생산시설 <br />
                          SUZHOU MARCONI GARMENT CO.,LTD <br />
                          BUILDING 2-1, NO.2601 TIANEDANG RD., WUZHONG DISTRICT, 215128, SUZHOU <br />
                          <br />
                          협력업체 <br />
                          FIRST STEP (HK) CO., LIMITED <br />
                          <br />
                          생산시설 <br />
                          QINGDAO SUNWAY SHOES CO., LTD. <br />
                          CHANG YANG INDUSTRIAL ZONE,, JIANGSHAN TOWN,, 266605, QINGDAO <br />
                          <br />
                          협력업체 <br />
                          SHINGRAND HATS MANUFACTURER CO LTD <br />
                          <br />
                          생산시설 <br />
                          SHINGRAND HATS MANUFACTURER CO LTD <br />
                          NO.13, ZHOINGXING ROAD, ZHEJIANG EAST ECONOMIC DEVELOPMENT, ZONE (WESTERN DISTRICT), 315403,
                          YUYAO <br />
                          <br />
                          협력업체 <br />
                          LIVING ACCESSORIES CEANNIS LIMITED <br />
                          <br />
                          생산시설 <br />
                          XINSHENG HANDBAG &amp; CRAFT INDUSTRIES LIMITED (XINHUA) <br />
                          SHUIZHU VILLAGE, CAOJIA TOWN,, XINHUA COUNTY, 417600, LOUDI CITY <br />
                          <br />
                          협력업체 <br />
                          SHANGHAI WEISHI INDUSTRIAL CO.,LTD <br />
                          <br />
                          생산시설 <br />
                          WENZHOU TAIXING CO., LTD. <br />
                          NO.40, YUFENG ROAD, XIANYAN, INDUSTRIAL ZONE, OUHAI DISTRICT,, 325062 WENZHOU, ZHEJIANG
                          SHENG,, CHINA, 325062, WENZHOU <br />
                          <br />
                          협력업체 <br />
                          SHANGHAI STYLE FASHION ACCESSORIES CO.,LTD. <br />
                          <br />
                          생산시설 <br />
                          RUDONG KNITIT FASHION ACCESSORIES CO., LTD <br />
                          HUANGHE ROAD, 220600, NANTONG <br />
                          <br />
                          협력업체 <br />
                          HANGZHOU KAIXIU TEXTILES CO.,LTD <br />
                          <br />
                          생산시설 <br />
                          HANGZHOU KAIXIU TEXTILES CO., LTD <br />
                          25 FUTANG RD., TANGQI TOWN, YUHANG DISTRICT, 311106, HANGZHOU <br />
                          <br />
                          협력업체 <br />
                          ZHEJIANG MENGNA KNITTING CO., LTD <br />
                          <br />
                          생산시설 <br />
                          ZHEJIANG MENGNA KNITTING CO., LTD. BEIYUAN BRANCH <br />
                          NO.768 HENGTONG ROAD, CHOUJIANG, STREET,YIWU CITY ZHEJIANG PROVINCE, 322000, YIWU
                          <br />
                          <br />
                          협력업체 <br />
                          ZHEJIANG MENGNA KNITTING CO., LTD <br />
                          <br />
                          생산시설 <br />
                          JIANG XI MENGNA SOCKS CO., LTD. <br />
                          NO.1 ZHENGONG ROAD,, INDUSTRIAL ZONE OF YINGTAN CITY, JIANGXI PROVINCE, CHINA, 335000, YINGTAN
                          <br />
                          <br />
                          협력업체 <br />
                          JIING SHENG KNITTING CO.,LTD
                          <br />
                          <br />
                          생산시설 <br />
                          JING RICH KNITTING (SHU YANG) CO.,LTD <br />
                          NO.2 TAIPEI AVENUE,, SHUYANG COUNTRY ECONOMIC, DEVELOPMENT ZONE, 215128, SUQIAN <br />
                          <br />
                          협력업체 <br />
                          SHANGHAI H&amp;G INTERNATIONAL TRADE CO.,LTD <br />
                          <br />
                          생산시설 <br />
                          ZHANG JIA GANG JIN YI KNIT AND ACCESSORIES CO.,LTD <br />
                          NO.2,CAN NAN ROAD, FENGHUANG TOWN,ZHANG JIA GANG CITY, 215614, ZHANGJIAGANG <br />
                          <br />
                          협력업체 <br />
                          QINGDAO MAY&apos;O ARTS &amp; CRAFTS CO.,LTD <br />
                          <br />
                          생산시설 <br />
                          QINGDAO MAY&apos;O ARTS &amp; CRAFTS CO., LTD. <br />
                          BLDG. 16, NO. 6 SOUTH THE GREAT, WALL ROAD, CHENGYANG DISTRICT, 266109, QINGDAO <br />
                          <br />
                          협력업체 <br />
                          QINGDAO EASTERN POSE ACCESSORIES CORP., LTD. <br />
                          <br />
                          생산시설 <br />
                          QINGDAO MAY&apos;O ARTS &amp; CRAFTS CO., LTD. <br />
                          BLDG. 16, NO. 6 SOUTH THE GREAT, WALL ROAD, CHENGYANG DISTRICT, 266109, QINGDAO <br />
                          <br />
                          협력업체 <br />
                          SUZHOU WANLI KNITTING CO.,LTD <br />
                          <br />
                          생산시설 <br />
                          SHANDONG WANLI FASHION CO.,LTD <br />
                          69 MAIN ROAD, WEN SHANG JI TOWN, CHENGWU, 274208, HEZHE <br />
                          <br />
                          협력업체 <br />
                          ZHANGJIAGANG MEIRUYI CAPS CO.,LTD. <br />
                          <br />
                          생산시설 <br />
                          ZHANGJIAGANG MEIRUYI CAPS CO.,LTD. <br />
                          EUROPE INDUSTRY PARK, 215618, ZHANGJIAGANG <br />
                          <br />
                          협력업체 <br />
                          QINGDAO BLUE JEWELRY CO.,LTD <br />
                          <br />
                          생산시설 <br />
                          QINGDAO BLUE JEWELRY CO.,LTD <br />
                          FLOORS 1-4, BUILDING 8, NO. 19 YUEHE ROAD, LIUTING SUB-DISTRICT, CHENGYANG DISTRICT, 266109,
                          QINGDAO <br />
                          <br />
                          협력업체 <br />
                          SUZHOU MARCONI GARMENT FACTORY CO.,LTD. <br />
                          <br />
                          생산시설 <br />
                          SUZHOU FENG HENG GARMENT FINISHING <br />
                          NO.368,YINZHONG SOUTH ROAD,, ECONOMY DEVELOPMENT ZONE, WUZHONG, 215128, SUZHOU <br />
                          <br />
                          협력업체 <br />
                          WENZHOU OUTLOOK OPTICAL CO.,LTD <br />
                          <br />
                          생산시설 <br />
                          ZHEJIANG OUTLOOK OPTICAL MANUFACTORY CO.,LTD <br />
                          NO. 12 SHENGYE ROAD, LIGHT INDUSTRIAL ZONE, LUCHENG, 325019, WENZHOU <br />
                          <br />
                          협력업체 <br />
                          SKY COSMOS LIMITED <br />
                          <br />
                          생산시설 <br />
                          XU TAI SPORTS BAGS CO., LTD <br />
                          XIANGFU ROAD XINCHENG INDUSTRIA, AREA KENGKOU VILLAGE LIAOBU TOWN, 520520, DONGGUAN
                          <br />
                          <br />
                          협력업체 <br />
                          NINGBO SEDUNO IMP &amp; EXP CO.LTD <br />
                          <br />
                          생산시설 <br />
                          NINGBO SEDUNO GARMENT MANUFACTURE CO.,LTD. <br />
                          NO.1917 GU ZHONG ROAD , GULIN TOWN, HAISHU DISTRICT, 315000, NINGBO <br />
                          <br />
                          협력업체 <br />
                          NINGBO SEDUNO IMP &amp; EXP CO.LTD
                          <br />
                          <br />
                          생산시설 <br />
                          NINGBO SEDUNO YUKANG FASHION CO., LTD <br />
                          NO.397, SCIENTIFIC RESEARCH ROAD, WANGCHUN INDUSTRIAL PARK, HAISHU DISTRICT, 315000, NINGBO{' '}
                          <br />
                          <br />
                          협력업체 <br />
                          DESAY GROUP CO.,LTD <br />
                          <br />
                          생산시설 <br />
                          DESAY GROUP CO.LTD <br />
                          NO.999 RUYI ROAD, XIANYAN STREET ,, OU&apos;HAI DISTRICT ,WEHNZHOU CITY,, ZHEJIANG
                          PROVINCE,CHINA, 325006, WENZHOU
                          <br />
                          <br />
                          협력업체 <br />
                          A CAP LTD <br />
                          <br />
                          생산시설 <br />
                          SUZHOU ADVANCED CAP AND ACCESSORIES CO., LTD <br />
                          XIAOGUO AVE, LINGBI INDUSTRIAL, DEVELOPING ZONE, 200000, SUZHOU <br />
                          <br />
                          협력업체 <br />
                          FLY EARTH CO.,LTD.
                          <br />
                          <br />
                          생산시설 <br />
                          SHUYANG BLOOMFIT INDUSTRIAL &amp; TRADING CO., LTD. <br />
                          INDUSTRIAL PARK OF LIHENG TOWN, SHUYANG COUNTY, 223600, SUQIAN <br />
                          <br />
                          협력업체 <br />
                          NINGBO SEDUNO IMP &amp; EXP CO.LTD <br />
                          <br />
                          생산시설 <br />
                          ZHEJIANG LUONA FASHION CO.,LTD . <br />
                          NO.428, XIAZHONG RD ,, HAINING ECONOMIC DEVELOPMENT ZONE, HAINING CITY,ZHEJIANG PROVINCE,CN,
                          314400, HAINING <br />
                          <br />
                          협력업체 <br />
                          SURI FASHION LIMITED <br />
                          <br />
                          생산시설 <br />
                          ZHEJIANG HUALI FASHION CO.,LTD <br />
                          56-9, BEISHA ROAD, LINPING DISTRICT, 311100, HANGZHOU <br />
                          <br />
                          협력업체
                          <br />
                          JIAXING WANYUAN FASHION CO.,LTD <br />
                          <br />
                          생산시설 <br />
                          JIAXING WANYUAN FASHION CO.,LTD <br />
                          NO.268 QIANJIN ROAD, YAOZHUANG INDUSTRIAL ZONE, JIASHAN COUNTY, 314117, JIAXING <br />
                          <br />
                          협력업체 <br />
                          CHENFENG (JIANGSU) APPAREL CO., LTD <br />
                          <br />
                          생산시설 <br />
                          CHENFENG(JIANGSU) APPAREL CO.,LTD <br />
                          NO.99 JINHU RD, JINTAN DISTRICT, 213200, CHANGZHOU <br />
                          <br />
                          협력업체 <br />
                          QINGDAO PENGTAI TRADE CO.,LTD
                          <br />
                          <br />
                          생산시설 <br />
                          SHANDONG LINUO ARTS&amp;CRAFTS CO., LTD <br />
                          XIMAYI VILLAGE, ZUOCUN TOWN, LAIZHOU CITY,SHANDONG, 261400, LAIZHOU <br />
                          <br />
                          협력업체 <br />
                          BESTBASE INTERNATIONAL TRADING CO., LTD. <br />
                          <br />
                          생산시설 <br />
                          ZHEJIANG FUHOWE FASHION CO., LTD <br />
                          CHINA TING INDUSTRIAL COMPLEX, 56-7 BEISHA EAST ROAD, YUHANG ECONOMIC DEVELOPMENT ZONE,
                          311100, HANGZHOU <br />
                          <br />
                          협력업체 <br />
                          ARTWELL HOLDINGS LIMITED <br />
                          <br />
                          생산시설 <br />
                          JIAXING ULTRAMAX CASHMERE PRODUCTS LTD. <br />
                          NO. 439 WENHUA SOUTH ROAD, WUTONG COMMUNITY, TONGXIANG, 314500, JIAXING <br />
                          <br />
                          협력업체 <br />
                          BESTBASE INTERNATIONAL TRADING CO., LTD. <br />
                          <br />
                          생산시설 <br />
                          HANGZHOU HANGSHENG GARMENT CO.,LTD. <br />
                          BLOCK NO.3,195TH XINTIAN ROAD, YUHANG ECONOMY DEVELOPMENT AREA, HANGZHOU,CHINA, 311100,
                          HANGZHOU <br />
                          <br />
                          협력업체 <br />
                          SHANGHAI WEISHI INDUSTRIAL CO.,LTD
                          <br />
                          <br />
                          생산시설 CHANGZHOU HENGXIU CO LTD <br />
                          NO.299 DONGDA STREET,ZHULIN TOWN,, ,JINTAN CHANGZHOU., 213241, CHANGZHOU <br />
                          <br />
                          협력업체 <br />
                          PUTIAN SINOSUN IMP &amp; EXP. CO., LTD
                          <br />
                          <br />
                          생산시설 <br />
                          PUTIAN SHUANGMEI FOOTWEAR CO.,LTD <br />
                          NO. 1088,, DUOTOU VILLAGE, SANJIANGKOU TOWN, HANJIANG DISTRICT, PUTIAN, 351111, PUTIAN
                          <br />
                          <br />
                          <br />
                          협력업체 <br />
                          SURI FASHION LIMITED <br />
                          <br />
                          생산시설 <br />
                          HANGZHOU JIEFENG GARMENTS CO., LTD. <br />
                          LIANSHENG VILLAGE, NANYUAN STREET, YUHANG DISTRICT, HANGZHOU, 311100, HANGZHOU <br />
                          <br />
                          협력업체 <br />
                          CHENFENG (JIANGSU) APPAREL CO., LTD <br />
                          <br />
                          생산시설 <br />
                          CHENFENG (SIHONG) APPAREL CO., LTD. <br />
                          NO.19 CHANGJIANG WEST ROAD, ECONOMIC DEVELOPMENT ZONE, SIHONG COUNTY, 223900, SUQIAN
                          <br />
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-component="OAccordion"
                    className="o-accordion"
                    data-exclusive="data-exclusive"
                    data-exclusive-group="example"
                    data-component-id={123235346}
                  >
                    <div className="accordion-header">
                      <a
                        href="#"
                        target="_self"
                        className="a-link a-link accordion-title js-accordion-toggle no-styling"
                      >
                        <span className="a-icon-plus" />
                        <span className="a-icon-minus" />
                        <h3 className="a-heading-3">포트루갈</h3>
                      </a>
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-inner-content">
                        <p className="a-paragraph">
                          협력업체 <br />
                          JORGE GOMES &amp; IRMAO SA <br />
                          <br />
                          생산시설 <br />
                          JORGE GOMES &amp; IRMAO SA <br />
                          S.VERISSIMO, APARTADO, 4751-100, BARCELOS <br />
                          <br />
                          협력업체 <br />
                          ASIAL-INDUSTRIA DE CALCADO, LDA <br />
                          <br />
                          생산시설 <br />
                          ASIAL-INDUSTRIA DE CALCADO, LDA <br />
                          RUA DA BOCA, , 152 S. JOAO DAS CALDAS, , 4815-640, VIZELA <br />
                          <br />
                          협력업체 <br />
                          LUIS ONOFRE INTERNACIONAL LDA <br />
                          <br />
                          생산시설 <br />
                          CONCEICAO ROSA PEREIRA &amp; CA,LDA <br />
                          R. DA INDUSTRIA 77 LOTE2, , OLIVEIRA DE AZEMEIS, , 3720-251, OLIVIERA DE AZEMEIS
                          <br />
                          <br />
                          협력업체 <br />
                          VALERIUS TEXTEIS SA <br />
                          <br />
                          생산시설 <br />
                          VALERIUS TEXTEIS LDA <br />
                          RUA INDUSTRIAL DO ALDAO VILA, FRESCAINHA, 4750-078, BARCELOS <br />
                          <br />
                          협력업체 <br />
                          BECRI MALHAS E CONFECCOES SA <br />
                          <br />
                          생산시설 <br />
                          BECRI MALHAS E CONFECCOES SA <br />
                          RUA DO PARQUE INDUSTRIAL, NO 60, ALVELOS, 4755-036, BARCELOS <br />
                          <br />
                          협력업체 <br />
                          VALERIUS TEXTEIS SA <br />
                          <br />
                          생산시설 <br />
                          ALIVANA - TEXTEIS, LDA <br />
                          RUA DA PRAIA QUIAO, 95 AVER-O-MAR, 4490-052, POVOA DE VARZIM <br />
                          <br />
                          협력업체 <br />
                          VALERIUS TEXTEIS SA <br />
                          <br />
                          생산시설 <br />
                          RIO MAU CONFECCOES LDA <br />
                          RUA DA AZENHA, 201, 4495-373, TERROSA <br />
                          <br />
                          협력업체 <br />
                          BECRI MALHAS E CONFECCOES SA <br />
                          <br />
                          생산시설 <br />
                          CONFECCOES DEOLINDA &amp; FERREIRA, LDA <br />
                          RUA NOSSA SENHORA ROSARIO 179, , RATES, 4570-488, POVOA DE VARZIM <br />
                          <br />
                          협력업체 <br />
                          BECRI MALHAS E CONFECCOES SA <br />
                          생산시설 <br />
                          LISEMATEX, MALHAS E CONFECOES UNIPESSOAL LDA <br />
                          RUA ENG.CARLOS ALBERTO, MARTINS 217, BALUGAES, 4905-042, BARCELOS <br />
                          <br />
                          협력업체 <br />
                          MOISES PINTO DE CARVALHO &amp; FILHOS LDA <br />
                          <br />
                          생산시설 <br />
                          MOISES PINTO DE CARVALHO &amp; FILHOS LDA <br />
                          RUA DAS CASINHAS NR. 353, 4610-623, FELGUEIRAS <br />
                          <br />
                          협력업체 <br />
                          VALERIUS TEXTEIS SA <br />
                          <br />
                          생산시설 <br />
                          ERIUS TEXTEIS SA <br />
                          R. DR. MANUEL DE ARRIAGA 148, , GUARDIZELA, , 4765-260, GUIMARAES <br />
                          <br />
                          협력업체 <br />
                          BECRI MALHAS E CONFECCOES SA <br />
                          생산시설 <br />
                          GUAY - TRADING INTERNACIONAL, S.A. <br />
                          RUA PARQUE INDUSTRAL, LOT 4 ALVELOS, 4755-036, BARCELOS <br />
                          <br />
                          협력업체 <br />
                          CARITE CALCADOS, LDA <br />
                          <br />
                          생산시설 <br />
                          CARITE CALCADOS, LDA <br />
                          NICOLAU COELHO, 2729, 4610-743, FELGUEIRAS <br />
                          <br />
                          협력업체 <br />
                          VALERIUS TEXTEIS SA <br />
                          <br />
                          생산시설 <br />
                          RISCAS E A LFINETES UNIPESSOAL LDA <br />
                          AVENIDA DE SANTO ANDRE, NO 2417, 4990-811, PONTE DE LIMA <br />
                          <br />
                          협력업체 <br />
                          VALERIUS TEXTEIS SA <br />
                          <br />
                          생산시설 <br />
                          TERTULIA POSITIVA LDA <br />
                          RUA DA QUINTA DAS MATAS, NO 320, 4755-417, BARCELOS <br />
                          <br />
                          협력업체 <br />
                          BECRI MALHAS E CONFECCOES SA <br />
                          <br />
                          생산시설 <br />
                          TITULOS &amp; RUBRICAS, LDA - VILA VERDE <br />
                          R. DE COIMBRA 18, , BRAGA, 4730-062, BRAGA <br />
                          <br />
                          협력업체 <br />
                          TEXTEIS J. F. ALMEIDA, S.A. <br />
                          <br />
                          생산시설 <br />
                          TEXTEIS J. F. ALMEIDA, S.A. - DYEING &amp; FINISHING <br />
                          CONDE, 4815-031, CONDE - S. MARTINHO, 4815-253, GUIMARAES <br />
                          <br />
                          협력업체 <br />
                          VALERIUS TEXTEIS SA <br />
                          <br />
                          생산시설 <br />
                          FANCYPEOPLE - UNIPESSOAL LDA <br />
                          RUA DO EIRADO 4,, 4700 PALMEIRA,, 4750-384, BRAGA <br />
                          <br />
                          협력업체 <br />
                          BECRI MALHAS E CONFECCOES SA <br />
                          <br />
                          생산시설 <br />
                          TITULOS &amp; RUBRICAS, LDA - GUIMARAES <br />
                          R. CASTRO DE SABROSO NO: 2167, , GUIMARAES, , 4805-583, GUIMARAES <br />
                          <br />
                          협력업체 <br />
                          VALERIUS TEXTEIS SA <br />
                          <br />
                          생산시설 <br />
                          SARTIUS - POLO ALCAINS <br />
                          R. DO CHAFARIZ VELHO, , ALCAINS, 6005-999, CASTELO BRANCO <br />
                          <br />
                          협력업체 <br />
                          FABRICA DE CALCADO SOFISAR LDA. <br />
                          <br />
                          생산시설 <br />
                          FABRICA DE CALCADO SOFISAR LDA. <br />
                          RUA DA GRANJA, 2008 ,, FELGUEIRAS, 4650-132, PORTO <br />
                          <br />
                          협력업체 <br />
                          TEXTEIS J. F. ALMEIDA, S.A. <br />
                          <br />
                          생산시설 <br />
                          TEXTEIS J. F. ALMEIDA, S.A. - CUT&amp;STITCH <br />
                          RUA PADRE DUARTE, , NO: 372, 4765 448, GUARDIZELA, 4765-448, <br />
                          <br />
                          <br />
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-component="OAccordion"
                    className="o-accordion"
                    data-exclusive="data-exclusive"
                    data-exclusive-group="example"
                    data-component-id={1}
                  >
                    <div className="accordion-header">
                      <a
                        href="#"
                        target="_self"
                        className="a-link a-link accordion-title js-accordion-toggle no-styling"
                      >
                        <span className="a-icon-plus" />
                        <span className="a-icon-minus" />
                        <h3 className="a-heading-3">루마니아</h3>
                      </a>
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-inner-content">
                        <p className="a-paragraph">
                          협력업체 <br />
                          PANDORA PROD SRL <br />
                          <br />
                          생산시설 <br />
                          PANDORA PROD (OLD ROSCA) <br />
                          MARASESTI STREET, NO 6, 0620063, FOCSANI <br />
                          <br />
                          협력업체 <br />
                          SIMIZ FASHION SRL, SC <br />
                          <br />
                          생산시설 <br />
                          SIMIZ FASHION SRL, SC <br />
                          DJ 204D, 0625000, FOCSANI <br />
                          <br />
                          협력업체 <br />
                          SC ARTIFEX SRL <br />
                          <br />
                          생산시설 <br />
                          ARTIFEX SRL SC <br />
                          BUCHAREST AVENUE, 12, 0125300, FOSCANI <br />
                          <br />
                          협력업체 <br />
                          PANDORA PROD SRL <br />
                          <br />
                          생산시설 <br />
                          PANDORA PROD SRL - TECUCI BRANCH <br />
                          STR.ANA IPATESCU, 0805300, TECUCI <br />
                          <br />
                          협력업체 <br />
                          SC ARTIFEX SRL <br />
                          <br />
                          생산시설 <br />
                          VALCONF PRODEX SRL <br />
                          STR.PRINCIPALA, NR.1, 0127661, OREAVU VRANCEA <br />
                          <br />
                          협력업체 <br />
                          PANDORA PROD SRL <br />
                          <br />
                          생산시설 <br />
                          PANDORA PROD. SRL-FOCSANI BRANCH 2 <br />
                          CUZA VODA 73, FOCSANI, 0620034, VRANCEA <br />
                          <br />
                          협력업체 <br />
                          PANDORA PROD SRL <br />
                          <br />
                          생산시설 <br />
                          SC FONSTER SRL <br />
                          CONSTRUCTORULUI 15, 0620135, FOSCANI <br />
                          <br />
                          협력업체 <br />
                          PANDORA PROD SRL <br />
                          <br />
                          생산시설 <br />
                          GEOTEX MANUFACTURING SRL <br />
                          STR POLIGONULUI, NR 1, , CONSTRUCTIA C2 SI C3, MUN PLOIESTI,, JUD PRAHOVA, 1000070, JUD
                          PRAHOVA <br />
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-component="OAccordion"
                    className="o-accordion"
                    data-exclusive="data-exclusive"
                    data-exclusive-group="example"
                    data-component-id={2}
                  >
                    <div className="accordion-header">
                      <a
                        href="#"
                        target="_self"
                        className="a-link a-link accordion-title js-accordion-toggle no-styling"
                      >
                        <span className="a-icon-plus" />
                        <span className="a-icon-minus" />
                        <h3 className="a-heading-3">스웨덴</h3>
                      </a>
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-inner-content">
                        <p className="a-paragraph">
                          협력업체
                          <br />
                          NORDIC LEATHER GROUP AB <br />
                          <br />
                          생산시설
                          <br />
                          NORDIC LEATHER GROUP AB <br />
                          KARRSTRANDVAGEN, 112B, 451 76, UDDEVALLA <br />
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-component="OAccordion"
                    className="o-accordion"
                    data-exclusive="data-exclusive"
                    data-exclusive-group="example"
                    data-component-id={3}
                  >
                    <div className="accordion-header">
                      <a
                        href="#"
                        target="_self"
                        className="a-link a-link accordion-title js-accordion-toggle no-styling"
                      >
                        <span className="a-icon-plus" />
                        <span className="a-icon-minus" />
                        <h3 className="a-heading-3">튀르키예</h3>
                      </a>
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-inner-content">
                        <p className="a-paragraph">
                          협력업체 <br />
                          AKBASLAR TEKSTIL ENERJI SAN.VE.TIC A.S. <br />
                          <br />
                          생산시설 <br />
                          AKBASLAR TEKSTIL ENERJI SAN. VE TIC. A.S. <br />
                          ATATURK CAD.KURTULUS MAH., NO:197 GURSU, 16580, BURSA <br />
                          <br />
                          협력업체 <br />
                          ALD DIS TICARET A.S. <br />
                          <br />
                          생산시설 <br />
                          ALDERS TEKSTIL SAN.VE TIC.A.S. VIZE BRANCH <br />
                          ATATURK CADDESI,COBANCESME MEVKII, NO:7, VIZE, 39400, KIRKLARELI <br />
                          <br />
                          협력업체 <br />
                          ORSAN TEKSTIL KONFEKSIYON SAN VE TIC AS <br />
                          <br />
                          생산시설 <br />
                          ORSAN TEKSTIL KONF. SAN. VE TIC AS - SINOP BRANCH <br />
                          DEMIRCI KOYU MEVKII, SINOP OSB.8.SOKAK,NO:1 , MERKEZ, 57000, SINOP <br />
                          <br />
                          협력업체 <br />
                          ORSAN TEKSTIL KONFEKSIYON SAN VE TIC AS <br />
                          <br />
                          생산시설 <br />
                          ORSAN TEKSTIL KONF. SAN. VE TIC.AS <br />
                          MEHMET AKIF CADDESI, EYUP SULTAN MAH, NO:6, SANCAKTEPE, 34885, ISTANBUL <br />
                          <br />
                          협력업체 <br />
                          UNLU TEKSTIL SANAYI VE TICARET A.S. <br />
                          <br />
                          생산시설 <br />
                          UNLU TEKSTIL DIS TIC A.S <br />
                          SIVAT CADDESI, EMEK MAHALLESI NO:15, SANCAKTEPE, 34785, ISTANBUL <br />
                          <br />
                          협력업체 <br />
                          GORKEM GIYIM SANAYI VE TICARET A.S. <br />
                          <br />
                          생산시설 <br />
                          EKIP TEKSTIL INS TURIZM GIDA SAN DIS TIC <br />
                          EYMIR MH., 1. CD., NO:10,OSMANCIK, 19500, CORUM <br />
                          <br />
                          협력업체 <br />
                          ROTEKS TEKSTIL IHR.SAN.VE TIC.A.S. <br />
                          <br />
                          생산시설 <br />
                          EGUM TEKSTIL SANAYI TIC LTD STI <br />
                          NO:7 TINAZTEPE BEGOS 3. BOLGE, ADATEPE MAH 2/20 SOK., BUCA / IZMIR, 35390, IZMIR
                          <br />
                          <br />
                          협력업체 <br />
                          DOMINO TEKSTIL URUNLERI SAN VE DIS TIC AS
                          <br />
                          <br />
                          생산시설 <br />
                          DOMINO TEKSTIL URUNLERI SAN.VE DIS.TIC.AS <br />
                          KARACAAGAC MAH. KARALAR SOK. NO:3/A, MERKEZ/BOLU, 14300, BOLU <br />
                          <br />
                          협력업체 <br />
                          ROTEKS TEKSTIL IHR.SAN.VE TIC.A.S. <br />
                          <br />
                          생산시설 <br />
                          ROND TEKSTIL TURZ. SAN. VE TIC. LTD. STI <br />
                          NO:7 TINAZTEPE BEGOS 3. BOLGE, ADATEPE MAH 2/20 SOK., BUCA / IZMIR, 35390, IZMIR
                          <br />
                          <br />
                          협력업체 <br />
                          SIK MAKAS GIYIM SAN.VE TIC.A.S. <br />
                          <br />
                          생산시설 <br />
                          SIK MAKAS GIYIM SAN.VE TIC.A.S. - CORLU BRANCH <br />
                          VELIMESE ORGANIZE SANAYI BOLGESI, CEKEZKOY YOLU CADDESI, 10/1, CORLU/ERGENE, 59930, TEKIRDAG{' '}
                          <br />
                          <br />
                          협력업체 <br />
                          ALD DIS TICARET A.S.
                          <br />
                          <br />
                          생산시설 <br />
                          ALDERS TEKSTIL SAN.VE TIC. A.S. <br />
                          CINAR CAD., DOGU SANAYI SITESI KOYALTI MEVKI, NO:23 YENIBOSNA, 34197, ISTANBUL <br />
                          <br />
                          협력업체 <br />
                          ALD DIS TICARET A.S.
                          <br />
                          <br />
                          생산시설 <br />
                          DODURGA NEWTEX TEKSTIL HAZIR GIYIM INSAAT GIDA TARIM HAYYANCILIK NAKL.SAN.TIC.LTD.STI.
                          <br />
                          ESENTEPE MAHALLESI,CORUM CAD., NO:62 DODURGA , 19060, CORUM <br />
                          <br />
                          협력업체 <br />
                          DEBB UNICA TEKSTIL SANAYI TICARET A.S <br />
                          <br />
                          생산시설 <br />
                          NAMS TEKSTIL GIYIM URUNLERI IHR. INS. SAN. VE TIC LTD STI <br />
                          EVKA-3 MAH.129/3 SOK, NO:10 BORNOVA, 35040, IZMIR
                          <br />
                          <br />
                          협력업체 <br />
                          TERA GIYIM SANAYI VE TICARET ANONIM SIRKETI <br />
                          <br />
                          생산시설 <br />
                          TERA GIYIM SAN. VE TIC A.S. <br />
                          YAKUPLU MAH.DEREBOYU CAD., BEYSAN SANAYI SITESI NO:35, BEYLIKDUZU, 34524, ISTANBUL
                          <br />
                          <br />
                          협력업체 <br />
                          PAMEKS GIYIM SAN A.S. <br />
                          <br />
                          생산시설 <br />
                          GULTEKS GIYIM URUNLERI SAN.TIC.LTD <br />
                          CAMIATIK MAH., LEYLEK PINAR CAD.NO:8A , MALKARA, 59300, TEKIRDAG <br />
                          <br />
                          협력업체 <br />
                          DOMINO TEKSTIL URUNLERI SAN VE DIS TIC AS <br />
                          <br />
                          생산시설 <br />
                          YAGMUR TEKSTIL - ZEYCAN BIDIK <br />
                          KULTUR MAH. MIMAR SINAN SOK., NO: 21 KAT NO:Z DAIRE NO: 1, 14300, BOLU <br />
                          <br />
                          협력업체 <br />
                          SUGLOBAL TEKSTIL VE KONFEKSIYON SAN. A.S. <br />
                          <br />
                          생산시설 <br />
                          SUGLOBAL TEKSTIL VE KONFEKSIYON SAN.AS. <br />
                          BASKOMUTAN ATATURK CAD.NO: 26/6, GOCERLER MAHALLESI , SARAY, 59600, TEKIRDAG <br />
                          <br />
                          협력업체 <br />
                          PAMEKS GIYIM SAN A.S. <br />
                          <br />
                          생산시설 <br />
                          PAMEKS GIYIM SAN A.S - MALKARA BRANCH <br />
                          CAMIATIK MAH. CAMIATIK 24. SOK.NO:6, MALKARA, 59310, TEKIRDAG <br />
                          <br />
                          협력업체 <br />
                          ALARA TEKSTIL SAN DIS TIC LTD STI <br />
                          <br />
                          생산시설 <br />
                          ALARA TEKSTIL SAN DIS TIC LTD STI <br />
                          TANYELI SOKAK, MAHMUTBEY MAH. TASOCAGI CAD, BAGCILAR, 34000, ISTANBUL <br />
                          <br />
                          협력업체 <br />
                          DESA DERI SANAYI VE TICARET A.S. <br />
                          <br />
                          생산시설 <br />
                          DESA DERI SANAYI TIC. SAN. A.S. <br />
                          HALKALI CAD., NO:208 SEFAKOY, KUCUKCEKMECE , 34420, ISTANBUL <br />
                          <br />
                          협력업체 <br />
                          ASTER TEXTILE LONDON LTD <br />
                          <br />
                          생산시설 <br />
                          ASTER TEKSTIL SANAYI VE DIS TICARET A.S.-BABAESKI BRANCH <br />
                          ESKI E-5 KARAYOLU UZERI NO:10, CUMHURIYET MAH. BABAESKI, 39200, KIRKLARELI <br />
                          <br />
                          협력업체 <br />
                          SIK MAKAS GIYIM SAN.VE TIC.A.S. <br />
                          <br />
                          생산시설 <br />
                          OZTURK KONFEKSIYON - ZEKI OZTURK <br />
                          ORG. SAN. BOLG., 317 ADA, 4 PARSEL,3.CADDE, NO:10 YERKOY, 66900, YOZGAT
                          <br />
                          <br />
                          협력업체 <br />
                          MARC CHANTAL DERI VE TEKSTIL URUNLERI SAN VE TIC LTD STI <br />
                          <br />
                          생산시설 <br />
                          MARC CHANTAL DERI VE TEKSTIL URUNLERI SAN VE TIC. LTD. STI. <br />
                          IHLAS CAD., FEVZI CAKMAK MAH., NO.4 TORBALI, 35780, IZMIR <br />
                          <br />
                          협력업체 <br />
                          PAMEKS GIYIM SAN A.S. <br />
                          <br />
                          생산시설 <br />
                          SEFAH TEKSTIL - YUKSEL TAS <br />
                          ATATURK MAH.ISTIKLAL MARSI CAD., NO:21/A-21/B, SULEYMANPASA, 59020, TEKIRDAG <br />
                          <br />
                          협력업체 <br />
                          SIK MAKAS GIYIM SAN.VE TIC.A.S. <br />
                          <br />
                          생산시설 <br />
                          SIK MAKAS GIYIM SAN.VE TIC.A.S- TOKAT BRANCH <br />
                          RECEP YAZICIOGLU BULVARI, ORGANIZE SANAYI B. NO 34/2 AND 34/6, MERKEZ, 60100, TOKAT
                          <br />
                          <br />
                          협력업체 <br />
                          SIK MAKAS GIYIM SAN.VE TIC.A.S. <br />
                          <br />
                          생산시설 <br />
                          TOKAT UMUT TEKSTIL SAN. VE TIC. AS <br />
                          BEDESTENLIOGLU OSB MAH, 2.KISIM, RECEP YAZICIOGLU BULV. , NO:39 , MERKEZ, 60200, TOKAT
                          <br />
                          <br />
                          협력업체 <br />
                          PAMEKS GIYIM SAN A.S. <br />
                          <br />
                          생산시설 <br />
                          PAMEKS GIYIM SANAYI A.S. - SAGLAMTAS BRANCH <br />
                          DARICI SOKAK, SAGLAMTAS MAHALLESI NO:9, MALKARA, 59300, TEKIRDAG <br />
                          <br />
                          협력업체 <br />
                          GORKEM GIYIM SANAYI VE TICARET A.S. <br />
                          <br />
                          생산시설 <br />
                          OSM HAZIR GIYIM TEKSTIL GIDA INS. NAK.SAN. VE TIC. A.S. <br />
                          KOYUNBABA MAH. , BURHAN ULUDAG CAD. NO:180, OSMANCIK, 19500, CORUM <br />
                          <br />
                          협력업체 <br />
                          GORKEM GIYIM SANAYI VE TICARET A.S. <br />
                          <br />
                          생산시설 <br />
                          GORKEM GIYIM SAN. VE TIC. A.S SINOP FABRIKA <br />
                          DEMIRCIKOY OSB MEVKII,, KADIR BOZKURT SOKAK,, NO;14, 57000, SINOP <br />
                          <br />
                          협력업체 <br />
                          GORKEM GIYIM SANAYI VE TICARET A.S. <br />
                          <br />
                          생산시설 <br />
                          EREN TEKSTIL-BULENT EREN <br />
                          PIRI REIS MAH. DEREN SOK., NO:7 DARICA, 41700, KOCAELI <br />
                          <br />
                          협력업체 <br />
                          TERA GIYIM SANAYI VE TICARET ANONIM SIRKETI <br />
                          <br />
                          생산시설 <br />
                          TERA GIYIM SAN. VE TIC.A.S. ORDU BRANCH <br />
                          1170 SK NO:12/A, KARAPINAR OSB MAH., ALTINORDU, 52200, ORDU <br />
                          <br />
                          협력업체 <br />
                          LIDER DERI URUNLERI SAN.VE TIC.A.S. <br />
                          <br />
                          생산시설 <br />
                          LIDER DERI URUNLERI SAN.VE TIC.A.S. <br />
                          TUNA MAH. 5500/3 SOK. NO:16, CAMDIBI, 35090, IZMIR <br />
                          <br />
                          협력업체 <br />
                          TERA GIYIM SANAYI VE TICARET ANONIM SIRKETI <br />
                          <br />
                          생산시설 <br />
                          TERA GIYIM SAN. VE TIC. A.S. - FATSA BRANCH <br />
                          FATSA OSB MAH. 101-2 SOKAK, NO:13 , 52400, ORDU <br />
                          <br />
                          협력업체 <br />
                          ROTEKS TEKSTIL IHR.SAN.VE TIC.A.S. <br />
                          <br />
                          생산시설 <br />
                          CICEK KARDESLER TEKSTIL TUR. INS.NAK.GIDA SAN. VE TIC.LTD.STI. <br />
                          OSB 1.CADDE NO:31 BESIRI, 72202, BATMAN
                          <br />
                          <br />
                          협력업체 <br />
                          MODERNTEKS HAZIR GIYIM IMALAT VE TICARET A.S. <br />
                          <br />
                          생산시설 <br />
                          MODERNTEKS HAZIR GIYIM IMALAT VE TICARET TOKAT SUBESI <br />
                          BEDESTENLIOGLU OSB MAH 6.CAD NO:30 , MERKEZ/TOKAT, 60030, TOKAT <br />
                          <br />
                          협력업체 <br />
                          GORKEM GIYIM SANAYI VE TICARET A.S. <br />
                          <br />
                          생산시설 <br />
                          AYDIN TEKSTIL - ADEM YASARBAS <br />
                          GUZELYURT MAH. ATATURK 7.KISIM , BULVARI, NO:68A, ATAKUM, 55270, SAMSUN <br />
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-component="OAccordion"
                    className="o-accordion"
                    data-exclusive="data-exclusive"
                    data-exclusive-group="example"
                    data-component-id={4}
                  >
                    <div className="accordion-header">
                      <a
                        href="#"
                        target="_self"
                        className="a-link a-link accordion-title js-accordion-toggle no-styling"
                      >
                        <span className="a-icon-plus" />
                        <span className="a-icon-minus" />
                        <h3 className="a-heading-3"> 베트남</h3>
                      </a>
                    </div>
                    <div className="accordion-content">
                      <div className="accordion-inner-content">
                        <p className="a-paragraph">
                          협력업체 <br />
                          JIING SHENG KNITTING CO.,LTD <br />
                          <br />
                          생산시설 <br />
                          JIANGSU JING MENG(VIETNAM) CO., LTD <br />
                          PLOT 104/2-2 AMATA INDUSTRIAL ZONE, LONG BINH WARD, BIEN HOA CITY, DONG NAI PROVINCE, 700000,
                          BIEN HOA
                          <br />
                          <br />
                          협력업체 <br />
                          CRYSTAL MARTIN (HONG KONG) LTD <br />
                          <br />
                          생산시설 <br />
                          CRYSTAL MARTIN (VIETNAM) CO.,LTD <br />
                          LOT R(R1) QUANG CHAU INDUSTRIAL, PARK, VIET YEN DISTRIC BAC GIANG, 150000, BAC GIANG
                          <br />
                          <br />
                          협력업체 <br />
                          UNICO GLOBAL INC <br />
                          <br />
                          생산시설 <br />
                          UNICO GLOBAL VN <br />
                          TAN DAN COMMUNE, YEN DUNG DISTRICT, BAC GIANG PROVINCE, 220000, YEN DUNG <br />
                          <br />
                          협력업체 <br />
                          NINGBO SEDUNO IMP &amp; EXP CO.LTD <br />
                          <br />
                          생산시설 <br />
                          HONG KONG FORTUNATE (VIETNAM) FASHION CO.,LTD <br />
                          LOT A2.1, DT 787 ROAD, FACTORY B9.7, B9.8, B9.9, N8 ROAD, THANH THANH CONG INDUSTRIAL PARK, AN
                          HOA WARD, TRANG BANG TOWN, 80915 TAY NINH PROVINCE, 843300, TRANG BANG
                          <br />
                          <br />
                          협력업체 <br />
                          SHINWON CORPORATION <br />
                          <br />
                          생산시설 <br />
                          SHINWON EBENEZER HA NOI CO., LTD <br />
                          CAI DAN WARD, SONG CONG CITY, THAI NGUYEN PROVINCE, 250000, THAI NGUYEN PROVINCE,
                          <br />
                          <br />
                          협력업체 <br />
                          SUZHOU MARCONI GARMENT FACTORY CO.,LTD.
                          <br />
                          <br />
                          생산시설 <br />
                          SMX - MARCONI GARMENT CO., LTD <br />
                          TOWN 1B, AN PHU WARD,, THUAN AN DISTRICT,, BINH DUONG PROVINCE, 700000, HO CHIMINH
                          <br />
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                '\n    .chips,\n    .cta-section-bottom {\n        font-weight: 700;\n    }\n\n    .cta-section-bottom {\n        display: flex;\n        padding: 0 10%;\n        lign-items: center;\n        justify-content: center;\n\n        position: relative;\n        margin: 0 auto 30px;\n    }\n\n    .cta-section-bottom .fitguide_btn {\n        padding: 0 25px !important;\n    }\n\n    @container root (max-width: 1025px) {\n        .cta-section-bottom {\n            flex-direction: column;\n            padding: 0;\n        }\n\n        .cta-section-bottom .fitguide_btn {\n            padding: 0;\n        }\n    }\n',
            }}
          />
        </div>
      </div>
    </FreeHtml>
  );
}
