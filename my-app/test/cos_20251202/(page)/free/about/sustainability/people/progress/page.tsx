import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '지속가능성 - 사람 - 공급망에서의 성 평등',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  .chips {\n      font-family: 'SuisseIntl', 'NotoSansKR', '돋움', dotum, sans-serif;\n      display: block;\n      width: 100%;\n      margin: 10px auto 30px;\n  }\n\n  .chips p {\n      font-size: 20px;\n      line-height: 24px;\n      letter-spacing: .02em;\n      color: #1b1b1b;\n      text-align: center;\n      width: 100%;\n      margin: 0 auto 20px auto;\n  }\n\n  .chips a {\n      display: inline-block;\n      text-transform: uppercase;\n      text-decoration: none;\n      letter-spacing: .0825em;\n      cursor: pointer;\n      text-align: center;\n      padding: 10px 12px 6px;\n      margin: 4px 4px 8px 0;\n      border: 1px solid #1b1b1b;\n      color: #1b1b1b;\n      font-size: 12px;\n      line-height: 17px;\n  }\n\n  .chips a:hover {\n      background-color: #1b1b1b;\n      color: #ffffff;\n  }\n\n  .chips .scrollable-content {\n      position: relative;\n      padding: 0px 10px;\n      overflow-x: auto;\n      -webkit-overflow-scrolling: touch;\n      white-space: nowrap;\n      text-align: center;\n  }\n\n  .cta-section {\n      display: flex;\n      justify-content: center;\n      /* gap: 20px;\n      margin-bottom: 60px; */\n      flex-direction: column;\n      border: 1px solid #1b1b1b\n  }\n\n  .fitguide_btn {\n    display: flex;\n    width: 100%;\n    line-height: 45px;\n    font-size: 13px;\n    color: #1b1b1b;\n    background: #fff;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n  }\n\n  .fitguide_btn:hover {\n      opacity: 0.7;\n  }\n\n  .a-link.has-underline,\n  .is-richtext a.has-underline>span {\n      color: #fff;\n  }\n  .o-grid-controller.is-two-cols .content .scrollable-content{\n    display: block;\n  }\n\n  .o-hero {\n      width: 100%\n  }\n\n  .m-free-tile.headline-preamble-wrapper.a {\n      text-decoration: underline !important\n  }\n\n  .o-blog-text .a-paragraph {\n      font-weight: 400;\n      font-size: 14px;\n      letter-spacing: .04em;\n      line-height: 19px;\n  }\n\n  .article-headline-sub {\n      font-size: 15px !important;\n      line-height: 20px !important;\n  }\n\n  .title2 {\n      font-size: 13px !important;\n      line-height: 18px !important;\n      ;\n  }\n\n  .o-hero .a-picture+.m-teaser.align-left {\n      max-width: 100% !important;\n      width: 100% !important;\n      top: 103%;\n      margin-left: -20px !important\n  }\n\n  .pull-quote.a-paragraph.a-page-paragraph {\n      padding-bottom: 40px !important\n  }\n\n  .m-free-tile .a-heading-2 {\n      font-size: 24px;\n      line-height: 17px;\n      letter-spacing: .0525em;\n      text-transform: none;\n      margin-bottom: 13px;\n      margin-top: 35px\n  }\n\n  .button1 {\n      letter-spacing: .06em;\n      margin-bottom: 10px;\n      margin-right: 5px;\n      margin-left: 5px;\n      height: 45px;\n      width: 240px;\n      background-color: #1b1b1b;\n      border: 1px solid #1b1b1b;\n      color: #fff;\n      padding: 12px 9px 12px 8px\n  }\n\n  .keyline .u-cols-sm-12-12 {\n      margin-bottom: 0px;\n  }\n  .a-keyline{\n     width:100% !important;\n }\n\n  .o-blog-text {\n      margin-top: 0\n  }\n\n  .o-blog-text.align_left {\n      text-align: left;\n      margin: 0;\n  }\n\n  .o-blog-text.align_left>p {\n      text-align: left !important;\n  }\n\n  .is-three-cols .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n      margin-top: 0;\n      font-size: 30px;\n      line-height: 34px;\n  }\n\n  .is-three-cols .m-free-tile .headline-preamble-wrapper .a-label {\n      font-size: 13px;\n      line-height: 18px;\n  }\n\n  .is-three-cols .m-free-tile .cta-wrapper .cta-link {\n      font-size: 14px;\n      line-height: 20px;\n  }\n\n  .custom_two_cols .content {\n      display: flex;\n      flex-direction: row;\n      max-width: 1600px;\n      margin: 0 auto;\n      padding: 0 30px;\n      justify-content: center;\n      align-items: center;\n  }\n\n  .custom_two_cols .column {\n      width: 50%;\n  }\n\n  .custom_two_cols .column .o-blog-text {\n      width: 100%;\n      padding-left: 50px;\n  }\n\n  .custom_two_cols .column .o-blog-text p {\n      text-align: left !important;\n  }\n\n  .custom_sub_title {\n      margin-bottom: 30px;\n      text-align: center;\n      font-size: 40px;\n      line-height: 48px;\n  }\n\n  .custom_anchor_box {\n      margin-bottom: 60px;\n      text-align: center;\n  }\n\n  .custom_anchor_box .anchor {\n      display: inline-block;\n      font-size: 20px;\n      line-height: 25px;\n      margin-right: 10px;\n  }\n\n  .custom_anchor_box .anchor:last-child {\n      margin-right: 0;\n  }\n\n  .custom_anchor_box .anchor u {\n      text-decoration-thickness: 1px;\n  }\n\n  .a-heading-3 {\n      font-size: 13px !important;\n      line-height: 18px !important;\n      margin-bottom: 10px;\n      text-transform: uppercase;\n  }\n\n  .two-cols.m-free-tile .cta-wrapper .cta-link {\n      font-size: 14px;\n      line-height: 20px;\n  }\n\n  .sus_top_tit {\n      text-transform: uppercase;\n  }\n\n .sub_para1 {\n    font-size: 20px;\n    line-height: 1.2em;\n }\n\n.u-cols-sm-12-12 {\n     padding-right: 0px !important;\n    padding-left: 0px  !important;\n}\n\n  .o-blog-text.align_left {\n      text-align: left;\n      margin: 0;\n  }\n\n  .o-blog-text.align_left>p {\n      text-align: left !important;\n  }\n\n  #sus_box_2023 .first {\n      margin-top: 50px;\n  }\n\n  .sus_btn_box {\n      text-align: center;\n      margin-bottom: 50px;\n  }\n\n  .sus_btn {\n      display: inline-block;\n      width: 240px;\n      line-height: 44px;\n      border: 1px solid #1b1b1b;\n      font-size: 12px;\n  }\n\n  .sus_btn:hover {\n      background: #1b1b1b;\n      color: #fff;\n  }\n\n  .o-grid-controller.is-two-cols .content .scrollable-content {\n      display: block;\n      }\n\n      .chips {\n          width: 70%;\n          margin-top: 40px;\n          margin-bottom: 20px;\n      }    \n      .cta-section {\n          flex-direction: column;\n      }\n\n .cta-wrap .arrow.right:before {\n    transform: translate(-50%, -50%) rotate(135deg);\n  }\n .cta-wrap .arrow {\n    position: relative;\n    display: inline-block;\n    width: 25px;\n    height: 25px;\n    overflow: hidden;\n    vertical-align: middle;\n  }\n\n  .cta-wrap .arrow:before {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 6px;\n    height: 6px;\n    -webkit-transform: translate(-50%, -50%) rotate(45deg);\n    transform: translate(-50%, -50%) rotate(45deg);\n    margin-top: 0px;\n    border-top: 1px solid #1b1b1b;\n    border-left: 1px solid #1b1b1b;\n  }\n\n   .o-grid-controller.is-two-cols .column {\n       width: 33.3333% !important;\n        margin-left: 0 !important;\n    }  \n   .u-row > [class^=\"o-\"]{\n   margin:0 auto !important;\n    }\n\n  .o-grid-controller .column .m-free-tile .a-picture:last-child {\n    margin-bottom: 15px;\n}\n\n    .o-blog-text {\n        padding:0  !important;\n    }\n\n.o-grid-controller.is-two-cols .column.leftcolum {\n    left: 16.888%;\n    position: relative;\n}\n\n  @media (max-width: 1025px) {\n\n      /* .chips {\n          width: 70%;\n          margin-top: 40px;\n          margin-bottom: 20px;\n      } */\n    \n      /* .chips a {text-transform: initial; letter-spacing: .04em; font-size: 13px; line-height: 18px;} */\n\n  }\n\n  @media(min-width:768px) {\n      .para {\n          padding-top: 40px !important\n      }\n\n      .button1 {\n          margin-left: 0;\n          display: inline-block\n      }\n\n      #sus_box_2023 .long_title {\n          width: 83.33%;\n      }\n         .u-row.u-full-width .contain.blogtext .richTextSpan {\n        left: 17.888%;\n         position: relative;\n   }\n    .o-blog-text.blogtext {\n        width: 33.33333%;\n        margin: 0px  !important; \n    }\n  .o-blog-text.blogtext .o-blog-text {\n      margin: 0px  !important; \n      width: 33%;\n   }\n  }\n\n\n  @media(max-width:767px) {\n\n      .o-grid-controller.is-three-cols .column {\n          width: 50%\n      }\n\n      .o-grid-controller.is-three-cols .column:nth-child(1) {\n          width: 100%;\n      }\n\n      .o-grid-controller.is-four-cols.is-stacked-on-mobile .content .scrollable-content {\n          padding: 0;\n      }\n\n      .custom_two_cols .content {\n          flex-direction: column-reverse;\n          padding: 0 14px;\n      }\n\n      .custom_two_cols .column {\n          width: 100%;\n      }\n\n      .custom_two_cols .column .o-blog-text {\n          padding-left: 0;\n          margin-bottom: 40px;\n      }\n\n      .custom_sub_title {\n          text-align: left;\n          font-size: 28px;\n          line-height: 34px;\n      }\n\n      .custom_anchor_box {\n          margin-bottom: 40px;\n          text-align: left;\n          overflow-x: auto;\n          white-space: nowrap;\n      }\n\n      .custom_anchor_box .anchor {\n          font-size: 18px;\n          line-height: 22px;\n      }\n\n      .sub_para1 {\n          font-size: 15px;\n          line-height: 19px;\n      }\n\n      .m_align_center>p {\n          text-align: center !important;\n      }\n\n      .is-three-cols .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n          font-size: 24px;\n          line-height: 29px;\n      }\n\n      .parr {\n          padding-bottom: 20px;\n          text-align: center\n      }\n\n      .article-headline {\n          font-size: 40px !important;\n          line-height: 44px !important;\n          margin-left: auto !important;\n          margin-right: auto !important\n      }\n\n      .article-headline-sub {\n          text-align: left !important;\n          font-size: 13px !important;\n          line-height: 18px !important;\n          padding-bottom: 5px !important\n      }\n\n      .pull-quote {\n          font-size: 24px !important;\n          line-height: 29px !important;\n          padding-bottom: 20px !important;\n          padding-top: 2px !important\n      }\n\n      .pull-quote2 {\n          font-size: 24px !important;\n          line-height: 29px !important;\n          padding-bottom: 35px !important;\n          padding-top: 2px !important\n      }\n\n      .keep-reading {\n          padding-top: 15px !important\n      }\n\n      .new {\n          margin: 0rem 0rem 0\n      }\n\n      .o-footer {\n          padding: 0 10px 18px\n      }\n\n      .o-hero .a-picture+.m-teaser.align-left {\n          margin-left: 9px !important\n      }\n\n      .m-free-tile.headline-preamble-wrapper.a {\n          text-decoration: underline !important\n      }\n\n      .m-free-tile .a-heading-2 {\n          font-size: 20px !important\n      }\n\n      .o-hero.image-wrapper {\n          margin-bottom: -35px\n      }\n\n      .keyline .u-cols-sm-12-12 {\n          margin-bottom: 0px;\n      }\n\n      .o-blog-text .article-headline {\n          margin-left: 0 !important;\n          text-align: left !important;\n          font-size: 34px !important;\n          line-height: 39px !important;\n      }\n\n      .o-blog-text .a-paragraph {\n          font-size: 13px !important;\n          line-height: 18px !important;\n      }\n\n      #sus_box_2023 .first {\n          margin-top: 30px;\n      }\n\n      #sus_box_2023 .long_title .pull-quote1 {\n          font-size: 24px !important;\n      }\n\n      #sus_box_2023 .sus_title1 {\n          font-size: 24px !important;\n          margin-top: 30px;\n      }\n\n    .o-grid-controller.is-two-cols .column {\n      width: 100%  !important;\n    }  \n     .o-grid-controller.is-two-cols .column.leftcolum {\n         left: 0 !important;\n   }\n\n   .u-row.u-full-width .contain.blogtext .richTextSpan {\n        left: 0;\n   }\n.o-grid-controller.is-two-cols .content .scrollable-content.reverse {\n    display: flex;\n    flex-direction: column-reverse;\n}\n  }\n",
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
                      지속가능성 / 사람 / 공급망에서의 성 평등{' '}
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
                      공급망에서의 성 평등
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
                  <div className="scrollable-content reverse">
                    <div className="column mo-margin-bottom-50" style={{ float: 'none' }}>
                      <div className="freetile parbase section must-margin-0">
                        <div className="m-free-tile two-cols " style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                          <picture
                            data-component="APicture"
                            className="a-picture"
                            data-component-id="96ddbf09-12d1-4542-b355-3f8f50767ee9"
                          >
                            <img
                              src="https://image.thehyundai.com/cos/hyundai/2025/8/27/사람 LP/공급망에서의 성 평등/1.jpg"
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
                                  padding: 0,
                                  lineHeight: '26.0px',
                                }}
                                className="article-headline-sub"
                              >
                                모든 사람들에게 평등한 기회를 주는 것이 브랜드의 목표입니다. 생산망의 최상위 단계에서
                                협력업체 12개국 12만 8천 명의 직원이 근무하고 있으며, 각 국가별로 문화, 사회적 기준,
                                법률 규정, 성평등에 대한 인식이 다르기 때문에 여성 근로자는 고용이 되지 않거나 불안정한
                                계약을 진행할 수 있습니다. 그렇기 때문에 안정적인 고용 환경을 조성하여 여성의 권리와
                                독립성을 신장시켜야 합니다.
                                <br />
                                <br />
                                적절한 고용은 여성의 역량 강화와 자립을 위한 가장 중요한 수단 중 하나입니다. 공급망에
                                속한 공장 근로자의 약 64%가 여성인 만큼, 우리는 이들이 일상 업무 환경 안팎에서 안전하고
                                건강하며 권한을 갖도록 보장할 책임이 있습니다.
                                <br />
                                <br />
                                공급망에 대한 성평등 전략을 개발하기 위해 플랜 인터내셔널과 협력하고 있습니다. H&amp;M
                                그룹과 함께 UN의 여성 역량 강화 원칙(WEP)에 서명했으며, 공급업체 및 기타 현지
                                이해관계자들과 협력하여 공급망이 현지 법률 및 국제노동기구 표준을 준수하도록 지원하는
                                동시에 UN 지속가능개발목표 달성을 위해 노력하고 있습니다.
                                <br />
                                <br />더 나아가 공급망에서 성평등의 가치를 지키기 위해 4가지 영역을 확인했습니다. 건강과
                                안전, 직무와 발전 사항, 그리고 임금 및 개선 사항이 반영되어야 한다는 점입니다. <br />
                                <br />
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
                          협력업체
                          <div className="m-double-button" style={{ textAlign: 'left' }}>
                            <div className="cta-wrap">
                              <i className="arrow right" role="img" />
                            </div>
                          </div>
                        </a>
                        <a
                          className="fitguide_btn"
                          href="/free/about/sustainability/people/partnerships"
                          style={{
                            borderBottom: '1px solid #1b1b1b',
                            borderTop: '1px solid #1b1b1b',
                          }}
                        >
                          파트너십과 콜라보레이션
                          <div className="m-double-button" style={{ textAlign: 'left' }}>
                            <div className="cta-wrap">
                              <i className="arrow right" role="img" />
                            </div>
                          </div>
                        </a>
                        <a className="fitguide_btn" href="https://career.cos.com/coscareer/en_gb/i-d.html">
                          다양성 &amp; 포용성
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
          <div className="twocolumns parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
              <div
                className="o-grid-controller is-two-cols twocols"
                style={{
                  backgroundImage: 'none',
                  backgroundColor: '#ffffff',
                  marginBottom: 0,
                }}
              >
                <div className="content">
                  <div className="scrollable-content flexorder">
                    <div className="column leftcolum" style={{ float: 'left' }}>
                      <div className="freetile parbase section">
                        <div className="m-free-tile two-cols" style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                          <div
                            className="image-container rimd rimd-background"
                            style={{
                              paddingTop: '130%',
                              backgroundImage:
                                'url("https://image.thehyundai.com/cos/hyundai/2025/8/27/사람 LP/공급망에서의 성 평등/2.jpg")',
                              backgroundSize: 'cover',
                            }}
                          ></div>
                        </div>
                        <div className="items" />
                      </div>
                      <div
                        className="para4"
                        style={{
                          fontSize: 14,
                          padding: '40px 0',
                          lineHeight: '24px',
                          fontWeight: 500,
                          letterSpacing: '0.04em',
                          paddingBottom: 0,
                          textAlign: 'left',
                        }}
                      >
                        티어 1 공급망에 대한 진행률 데이터를 추적하고 있으며 이미 2020년 기준선 대비 긍정적인 추세를
                        보이고 있습니다:
                      </div>
                    </div>
                    <div className="column leftcolum " style={{ float: 'left' }}>
                      <div className="freetile parbase section">
                        <div className="m-free-tile two-cols" style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                          <div
                            className="image-container rimd rimd-background"
                            style={{
                              paddingTop: '130%',
                              backgroundImage:
                                'url("https://image.thehyundai.com/cos/hyundai/2025/8/27/사람 LP/공급망에서의 성 평등/3.jpg")',
                              backgroundSize: 'cover',
                            }}
                          ></div>
                        </div>
                        <div className="items" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="keyline parbase section">
              <div
                className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24"
                style={{ marginBottom: 0, marginTop: 40 }}
              >
                <hr className="a-keyline" />
              </div>
            </div>
            <div className="text parbase section">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain blogtext">
                  <div className="richTextSpan">
                    <div className="o-blog-text is-richtext blogtext">
                      <p className="title2 a-paragraph a-page-paragraph" style={{ paddingTop: 40 }}>
                        <span style={{ fontSize: 20 }}>안전한 근무 환경</span>
                        <br />
                        <br />
                        우리의 비전은 여성이 일상적인 업무 환경 안팎에서 항상 안전하고 건강해야 한다는 것입니다. 우리는
                        근로자가 공장 밖에서 불만을 제기하고 갈등을 해결할 수 있는 독립적인 고충처리 메커니즘을 확보하는
                        데 도움을 주고 있습니다.
                        <br />
                        <br />
                        외부 지원에 대한 접근성은 9.9% 향상되었으며, COS 협력업체의 96.9%가 외부 지원에 대한 접근성을
                        제공하고 있습니다.
                        <br />
                        <br />
                        <br />
                        <span style={{ fontSize: 20 }}>여성 인권 보장</span>
                        <br />
                        <br />
                        여성들이 대표성을 갖고 목소리를 내는 것은 우리에게 필수적입니다. 우리는직원들이 경영진에게 우려
                        사항을 제기할 수 있는정기적인 위원회 회의를도입하는 데 도움을 주었습니다.
                        <br />
                        <br />
                        근로자 대표 포럼의 성별 격차는 0에 도달했으며, 8.2% 개선된 수치입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text parbase section">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain blogtext">
                  <div className="richTextSpan">
                    <div className="o-blog-text is-richtext blogtext">
                      <p className="title2 a-paragraph a-page-paragraph">
                        <span style={{ fontSize: 20 }}>커리어 발전</span>
                        <br />
                        <br />
                        여성들은 기업에서 리더가 될 수 있도록 지원과 권리를 보장받아야 합니다.
                        <br />
                        <br />
                        관리자 역할의 성별 격차는 -10.6%로, 2020년 기준선 대비 +5.4% 개선되었습니다.
                        <br />
                        <br />
                        <br />
                        <span style={{ fontSize: 20 }}>동일 임금</span>
                        <br />
                        <br />
                        COS는 평등의 가치를 바탕으로 동일 임금을 지향합니다.
                        <br />
                        <br />
                        COS 공급망의 성별 임금 격차는 -7.6%로 2020년 대비 0.5% 개선되었습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24" style={{ marginBottom: 0, marginTop: 40 }}>
              <hr className="a-keyline" />
            </div>
            <div className="text parbase section">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain blogtext">
                  <div className="richTextSpan">
                    <div className="o-blog-text is-richtext blogtext">
                      <p className="title2 a-paragraph a-page-paragraph" style={{ paddingTop: 40 }}>
                        <span style={{ fontSize: 20 }}>더 나은 미래를 위해</span>
                        <br />
                        <br />
                        2030년까지 공급망 내에서 모든 여성 노동자가 보호받고 공평한 대우를 받으며, 안전한 환경에서
                        근무할 수 있도록 최선을 다하겠습니다.
                        <br />
                        <br />
                      </p>
                      <ul style={{ fontSize: 14, margin: '0 0 0 20px' }}>
                        <li>- 안전한 근무 환경</li>
                        <li>- 여성 인권 보장</li>
                        <li>- 동일 임금</li>
                        <li>- 평등한 리더십</li>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="keyline parbase section">
              <div
                className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24"
                style={{ marginBottom: 0, marginTop: 40 }}
              >
                <hr className="a-keyline" />
              </div>
            </div>
            <div className="text parbase section">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain blogtext">
                  <div className="richTextSpan">
                    <div className="o-blog-text is-richtext blogtext">
                      <p className="title2 a-paragraph a-page-paragraph">
                        <span style={{ fontSize: 20 }}>리포트</span>
                        <br />
                        <br />
                        <a
                          href="https://www.cos.com/content/dam/cos/2024/sustainability/COS%20Gender%20Equality%20in%20the%20Supply%20Chain%20-%20Our%20Progress%202023-24.pdf"
                          target="_blank"
                        >
                          <u>2023/24 리포트</u>
                        </a>
                        를 다운로드하고 지속 가능한 미래에 대한 COS의 발전 과정을 자세히 알아보세요.
                        <br />
                        <br />
                        아카이브
                        <br />
                        <br />
                        이전의 리포트도 함께 확인해보세요:
                        <br />
                        <br />
                        <a
                          href="https://www.cos.com/content/dam/cos/2023/wk33/sustainability/COS%20Gender%20Equality%20in%20the%20Supply%20Chain%20-%20Our%20Progress%202022-3.pdf"
                          target="_blank"
                        >
                          -<u> 2022/23 리포트</u>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="twocolumns parbase section">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row" style={{ paddingTop: 40 }}>
                <div
                  className="o-grid-controller is-two-cols"
                  style={{
                    backgroundImage: 'none',
                    backgroundColor: '#ffffff',
                    marginBottom: 0,
                  }}
                >
                  <div className="content">
                    <div className="scrollable-content flexorder">
                      <div className="column leftcolum" style={{ float: 'left' }}>
                        <div className="freetile parbase section">
                          <div className="m-free-tile two-cols" style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                            <div
                              className="image-container rimd rimd-background"
                              style={{
                                paddingTop: '130%',
                                backgroundImage:
                                  'url("https://image.thehyundai.com/cos/hyundai/2024/3/29/IMAGE-3.jpg")',
                                backgroundSize: 'cover',
                              }}
                            ></div>
                          </div>
                          <div className="items" />
                        </div>
                        <div className="two-cols-text is-richtext">
                          <p
                            className="title2 a-paragraph a-page-paragraph"
                            style={{ paddingTop: 40, textAlign: 'left' }}
                          >
                            <span style={{ fontSize: 20 }}>YANINDAYIZ DERNEGI, TÜRKIYE</span>
                            <br />
                            <br />
                            트레이닝에 필요한 재정적 지원을 위해 튀르키예의 지역 단체 Yanindayiz Dernegi와 협력하고
                            있습니다. 남성들이 더 활발하게 토론에 참여할 수 있도록 장려하여 직장 안팎에서 성평등과 젠더
                            기반 폭력 및 괴롭힘(GBVH) 문제에 대한 인식과 이해를 고취시키는 것이 목표입니다. COS는 약
                            5,000명의 여성 및 남성 근로자와 가족을 포함해 지역 사회에 더 나은 영향력을 주려고 합니다.
                            <br />
                            <br />
                            2023년 초에 이 이니셔티브를 시작한 이래, 우리는 더 넓은 지역사회의 사람들을 포함하여
                            5,125명의 여성 및 남성 근로자를 교육했습니다. 교육에 참여한 직원 중 약 60%가 공장 외부에서
                            초청된 사람들로, 이는 직접 공급망을 넘어서는 긍정적인 영향력을 보여줍니다. 이러한 교육의
                            영향을 평가하기 위해 이스탄불 대학교와 함께 인식 변화 테스트를 실시했습니다. 그 결과 젠더
                            문제에 대한 인식과 이해가 긍정적으로 변화하고 성별 고정관념을 깨고자 하는 동기가 부여된
                            것으로 나타났습니다.
                            <br />
                            <br />
                            파트너십 2년차에는 야닌다이즈의 협력을 통해 터키 전역의 새로운 전략적 위치에서 더 많은
                            사람들에게 다가가는 것을 목표로 하고 있으며, 선정된 여성 근로자를 위한 여성 리더십 소프트
                            스킬 개발 세션도 추가로 제공할 계획입니다.
                          </p>
                        </div>
                      </div>
                      <div className="column leftcolum" style={{ float: 'left' }}>
                        <div className="freetile parbase section">
                          <div className="m-free-tile two-cols" style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                            <div
                              className="image-container rimd rimd-background"
                              style={{
                                paddingTop: '130%',
                                backgroundImage: 'url("https://image.thehyundai.com/cos/hyundai/2024/9/2/IMAGE4.jpg")',
                                backgroundSize: 'cover',
                              }}
                            ></div>
                          </div>
                          <div className="items" />
                          <div className="two-cols-text is-richtext">
                            <p
                              className="title2 a-paragraph a-page-paragraph"
                              style={{ paddingTop: 40, textAlign: 'left' }}
                            >
                              <span style={{ fontSize: 20 }}>CARE BANGLADESH</span>
                              <br />
                              <br />
                              2023년부터 우리는 CARE 방글라데시와 협력하여 공장에서 일하는 여성과 그들의 이웃과 친구들을
                              위한 여성 친화적 공간(WFS)에 자금을 지원하고 있습니다. 이 공간에서는 GBVH, 문제 해결 및
                              의사 결정, 스트레스 관리, 성 및 생식 건강 및 권리(SRHR), 음식과 영양에 대한 교육을
                              제공합니다. 여성 롤모델의 영감을 주는 강연, 커플 요리 대회, 거리 공연과 같은 추가 활동은
                              전반적인 영향력과 도달 범위를 더욱 확대합니다. 이 프로젝트는 H&amp;M 재단에서 시작한
                              광범위한 프로그램인 오포라지타의 일부입니다.
                              <br />
                              <br />
                              2023년 4월부터 2024년 5월까지 WFS 멤버십과 추가 서비스를 통해 12,090명에게 직접
                              도달했으며, 약 42,158명에게 간접적으로 도달한 것으로 예상하고 있습니다.
                              <br />
                              <br />
                              CARE와 함께 이러한 여성친화공간(WFS)이 장기적으로 자생력을 갖출 수 있도록 노력할 것입니다.{' '}
                              <br />
                              <br /> <br />
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="twocolumns parbase section">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row" style={{ paddingTop: 40 }}>
                <div
                  className="o-grid-controller is-two-cols"
                  style={{
                    backgroundImage: 'none',
                    backgroundColor: '#ffffff',
                    marginBottom: 0,
                  }}
                >
                  <div className="content">
                    <div className="scrollable-content flexorder">
                      <div className="column leftcolum" style={{ float: 'left' }}>
                        <div className="freetile parbase section">
                          <div className="m-free-tile two-cols" style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                            <div
                              className="image-container rimd rimd-background"
                              style={{
                                paddingTop: '130%',
                                backgroundImage:
                                  'url("https://image.thehyundai.com/cos/hyundai/2025/8/27/사람 LP/공급망에서의 성 평등.jpg")',
                                backgroundSize: 'cover',
                              }}
                            ></div>
                          </div>
                          <div className="items" />
                        </div>
                        <div className="two-cols-text is-richtext">
                          <p
                            className="title2 a-paragraph a-page-paragraph"
                            style={{ paddingTop: 40, textAlign: 'left' }}
                          >
                            <span style={{ fontSize: 20 }}>Oporajita Initiative, Bangladesh </span>
                            <br />
                            <br />
                            오포라지타(Oporajita) 이니셔티브는 여성 노동자들이 포용적인 환경에서 필수 업무 기술과 역량을
                            습득할 수 있도록 다양한 이해관계자들을 하나로 모으는 프로그램입니다. 이니셔티브는 노동자들과
                            함께 공동으로 개발되었으며, 중대한 영향을 미치는 세 가지 핵심 영역에서 요구를 충족합니다.{' '}
                            <br />
                            <br />
                            지원 환경에는 위생 관리, 의료 서비스, 그리고 성 인지적 금융 이해 능력에 대한 접근성을
                            제공하고, 업무 환경 내에서 성 포용적인 관행을 장려하는 것이 포함됩니다. 지역사회 차원에서는
                            과학, 기술, 공학, 수학(STEM) 교육과 육아 및 보육을 지원합니다. 기술교육은 여성들에게 리더십,
                            의사소통 능력, 그리고 기성복(RMG) 분야를 넘어 소규모 기업가 정신을 포함한 경력 성장을 위한
                            기술적 역량과 같은 관련 역량 강화를 지원합니다. RMG 부문 경쟁력 강화는의류 산업이 자동화 및
                            새로운 경쟁에 더욱 포용적이고 회복탄력적으로 대응할 수 있도록 하는 것을 목표로 합니다.
                            이해관계자 간 협력을 촉진하고 일자리 창출을 포함한 인간 중심적 혁신을 시범적으로 추진하여
                            RMG 여성들의 취업 가능성을 높입니다.
                            <br />
                            <br /> <br />
                            <br />
                            Photograph courtesy of Erik Stackpole Undéhn&nbsp;
                            <br />
                            <br /> <br />
                            <br />
                          </p>
                        </div>
                      </div>
                      <div className="column leftcolum" style={{ float: 'left' }}>
                        <div className="freetile parbase section"></div>
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
                '\n    .chips,\n    .cta-section-bottom {\n        font-weight: 700;\n    }\n\n    .cta-section-bottom {\n        display: flex;\n        padding: 0 10%;\n        lign-items: center;\n        justify-content: center;\n\n        position: relative;\n        margin: 0 auto 30px;\n    }\n\n    .cta-section-bottom .fitguide_btn {\n        padding: 0 25px !important;\n    }\n\n    @media (max-width: 1025px) {\n        .cta-section-bottom {\n            flex-direction: column;\n            padding: 0;\n        }\n\n        .cta-section-bottom .fitguide_btn {\n            padding: 0;\n        }\n    }\n',
            }}
          />
        </div>
      </div>
    </FreeHtml>
  );
}
