import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Places: The COS store experience - COS KR',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    .o-hero {\n      width: 100%;\n    }\n    .para1 a-paragraph a-page-paragraph {\n      margin-top: -20px;\n    }\n    .o-blog-text .a-paragraph {\n      font-family: SuisseIntl-Regular;\n      font-weight: 400;\n      font-size: 14px;\n      letter-spacing: 0.04em;\n      line-height: 19px;\n      padding: 15px 10px;\n    }\n    .caption-1 {\n      margin-top: 5px !important;\n    }\n    .caption-2 {\n      margin-top: 5px !important;\n    }\n    .p {\n      margin-top: -34px !important;\n    }\n    .article-headline-sub {\n      margin-bottom: -15px !important;\n    }\n    .para-1 {\n      margin-top: -50px !important;\n    }\n\n    @media only screen and (min-width: 1200px) {\n      .article-headline-sub {\n        margin-bottom: -10px !important;\n      }\n      .m-free-tile .image-container.rimd {\n        margin-top: -15px !important;\n        margin-bottom: -50px !important;\n      }\n      .para-1 {\n        padding-top: 32px !important;\n        padding-bottom: -5px !important;\n      }\n      .para-3 {\n        margin-top: -8px !important;\n      }\n      .keep-reading {\n        margin-top: -36px;\n        margin-bottom: -22px;\n      }\n    }\n    @container root (min-width: 768px) {\n      .p {\n        margin-top: -30px !important;\n      }\n      .o-blog-text {\n        margin-top: 0 !important;\n      }\n    }\n    @container root (max-width: 767px) {\n      .p {\n        margin-top: -30px !important;\n      }\n      .o-blog-text {\n        margin-top: 0 !important;\n      }\n      .para-1 {\n        margin-top: -14px;\n        margin-bottom: 7px;\n      }\n      .para-1 a-paragraph a-page-paragraph {\n        margin-top: -30px;\n        padding-top: 0;\n      }\n      .para0 {\n        padding-top: 0 !important;\n        margin-top: -40px;\n      }\n      .para-2 {\n        margin-top: -1px;\n        margin-bottom: -11px;\n      }\n      .para-3 {\n        margin-top: 36px !important;\n        margin-bottom: -34px !important;\n      }\n      .para-4 {\n        margin-top: 1px;\n      }\n      .button1 {\n        width: 240px;\n      }\n      .parr {\n        padding-bottom: 20px;\n        text-align: center;\n      }\n      .article-headline {\n        font-size: 32px !important;\n        line-height: 44px !important;\n      }\n      .article-headline-sub {\n        font-size: 18px !important;\n        line-height: 23px !important;\n        padding-bottom: 5px !important;\n      }\n      .pull-quote-1 {\n        letter-spacing: 0.8px;\n        font-size: 24px !important;\n        line-height: 29px !important;\n        text-align: center;\n        margin-top: -15px !important;\n        padding-bottom: 16px !important;\n      }\n      .pull-quote-2 {\n        letter-spacing: 0.8px;\n        font-size: 24px !important;\n        line-height: 29px !important;\n        text-align: center;\n        margin-top: -48px !important;\n        margin-bottom: -41px !important;\n      }\n      .o-hero .bcgr-color.rimd {\n        margin-top: -39px !important;\n        margin-bottom: -39px !important;\n      }\n      .keep-reading {\n        margin-top: -40px;\n        margin-bottom: -15px;\n      }\n      .tile-headline {\n        margin-top: 3px;\n      }\n      .m-free-tile .image-container.rimd {\n        margin-top: 5px !important;\n        margin-bottom: -157px !important;\n      }\n      .shop {\n        font-size: 30px;\n        color: #1b1b1b;\n        font-weight: 400;\n        text-align: center;\n        padding-top: 0;\n        padding-bottom: 0;\n        width: 280px;\n      }\n      .image-container rimd rimd-background {\n        margin-bottom: -153px !important;\n      }\n      .m-free-tile .headline-preamble-wrapper + .cta-wrapper {\n        margin-bottom: -1px;\n      }\n    }\n  ',
          }}
        />
        <div className="genericpagepar parsys">
          <div className="text parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="richTextSpan">
                  <div className="o-blog-text is-richtext">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p
                      style={{
                        textAlign: 'center',
                        fontSize: 14,
                        lineHeight: '19px',
                        fontWeight: 400,
                        letterSpacing: '0.04em',
                      }}
                    >
                      장소
                    </p>
                    <p
                      style={{
                        letterSpacing: '0.8px',
                        textAlign: 'center',
                        fontSize: 53,
                        lineHeight: '64px',
                        paddingTop: 15,
                        paddingBottom: 25,
                      }}
                      className="article-headline"
                    >
                      자원순환성으로 이어지는 스토어 경험
                    </p>
                    <p
                      style={{
                        textAlign: 'center',
                        fontSize: 20,
                        paddingBottom: 25,
                        lineHeight: '26px',
                      }}
                      className="article-headline-sub"
                    >
                      자원순환성을 바탕으로 리사이클 소재를 사용해 모던한 감각의 COS 컬렉션과 어울리는 공간을
                      제작했습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                  <div className="o-hero">
                    <div style={{ backgroundColor: '#ffffff' }} className="bcgr-color">
                      <picture
                        data-component="APicture"
                        className="a-picture"
                        data-component-id="fbd1a11b-9dfb-4be9-b61d-4f6ba5b0a045"
                      >
                        <source
                          media="(min-width:768px)"
                          srcSet="https://image.thehyundai.com/cos/hyundai/2022/10/31/1_1920x1280_D.jpg"
                        />
                        <source
                          media="(min-width:1px)"
                          srcSet="https://image.thehyundai.com/cos/hyundai/2022/10/31/1_1080x1320_M.jpg"
                        />
                        <img
                          className="a-image initial loaded"
                          src="https://image.thehyundai.com/cos/hyundai/2022/10/31/1_1920x1280_D.jpg"
                          data-was-processed="true"
                        />
                      </picture>
                    </div>
                    <div className="headline-preamble-wrapper">
                      <div style={{ color: '#1b1b1b' }} className="q-alpha4 is-richtext" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="promotion-data cos-hero" hidden data-slides-index={0}>
                <span className="promo_id">STOCKHOLM_IMG1</span>
                <span className="promo_name">MAGAZINE_STOCKHOLM</span>
                <span className="promo_creative">STOCKHOLM_IMG1</span>
              </div>
            </div>
          </div>
          <div className="text parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="richTextSpan">
                  <div className="o-blog-text is-richtext">
                    <p
                      className="para1"
                      style={{
                        fontSize: 14,
                        lineHeight: '19px',
                        fontWeight: 400,
                        letterSpacing: '0.04em',
                        paddingBottom: 25,
                        paddingTop: 0,
                        textAlign: 'left',
                      }}
                    >
                      스토어는 단순히 쇼핑하는 매장의 개념을 넘어 브랜드의 아이덴티티를 반영한 공간이라고 할 수
                      있습니다. 예를 들어, 브랜드에 대한 정보를 적극적으로 알려주는 직원과 혁신적인 디자인의 인테리어로
                      브랜드에 대한 전반적인 이미지를 파악할 수 있습니다. 그렇기 때문에 오프라인 스토어를 방문한다는
                      것에는 쇼핑 이상의 특별한 경험이 필요합니다.
                      <br />
                      <br />
                      <a href="https://www.cos.com/ko-kr/store-locator.html" style={{ textDecoration: 'none' }}>
                        <u>스톡홀름</u>
                      </a>
                      스토어에서 쇼핑을 하다 보면 새롭게 변화된 점이 무엇인지 알 수 있습니다. 곡선형 셰이프와 자연스러운
                      텍스처의 디자인은 따뜻하고 조형적인 느낌을 주며, 코스 컬렉션과 마찬가지로 제작 과정에서 섬세한
                      방식으로 모던한 디자인을 완성했다는 점을 파악할 수 있습니다.
                      <br />
                      <br />
                      전 세계적으로 코스 플래그십 스토어는 스톡홀름 스토어과 같이 순환 가능한 재료를 더 많이 사용하려고
                      합니다. 리사이클 페이퍼로 제작한 계산대, 리사이클 무라노 글라스(Murano glass) 소재의 피팅룸 핸들,
                      생산 과정에서 남은 실로 만든 스테이트먼트 러그, 그리고 리사이클 플라스틱 소재의 마네킹을 대표적인
                      예시로 들 수 있습니다. 코스 인테리어팀은 환경에 대한 부담을 최소화하기 위해 순환 가능한 재료와
                      고객의 쇼핑 경험을 위한 공간을 모색하고 있습니다.
                      <br />
                      <br />
                      새로운 공간을 제작하면서 기존 재료를 적극적으로 활용하고 있습니다. 글로벌 그로스 디렉터 로이드
                      골드비는 기존 재료를 조합하는 것이 뉴 스토어를 오픈하는 데 중요하다고 이야기합니다. ‘브랜드가
                      제시하는 비전에 고객들이 영감을 받도록 벽면에 아트워크를 설치하고 오브제와 가구를 배치해서
                      감각적인 공간을 완성할 예정이에요. 모든 인테리어 자재는 재사용하거나 제품 수명이 다한 후에도 쉽게
                      재활용할 수 있도록 제작되었으며, 재료 본연의 상태를 보존하는 것에 중점을 두고 있어요.’
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
                  <div className="o-blog-text is-richtext">
                    <p
                      className="pull-quote"
                      style={{
                        letterSpacing: '0.8px',
                        fontSize: 40,
                        lineHeight: '46px',
                        textAlign: 'center',
                        paddingTop: 30,
                        paddingBottom: 20,
                      }}
                    >
                      ‘모든 인테리어 자재는 재사용하거나 제품 수명이 다한 후에도 쉽게 재활용할 수 있도록 제작되었으며,
                      재료 본연의 상태를 보존하는 것에 중점을 두고 있어요.’
                    </p>
                    <p
                      className="pull-quote-2"
                      style={{
                        letterSpacing: '0.8px',
                        fontSize: 14,
                        lineHeight: '46px',
                        textAlign: 'center',
                        paddingTop: 20,
                        paddingBottom: 45,
                      }}
                    >
                      - 로이드 골드비, 글로벌 그로스 디렉터 (Lloyd Goldby, Global Head of Growth)
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="twocolumns parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
              <div
                className="o-grid-controller is-two-cols"
                style={{ backgroundImage: 'none', backgroundColor: '#ffffff' }}
              >
                <div className="content">
                  <div className="scrollable-content">
                    <div className="column" style={{ float: 'left' }}>
                      <div className="freetile parbase section">
                        <div className="m-free-tile two-cols" style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                          <a href="#" target="_self">
                            <div>
                              <img
                                className="a-image"
                                src="https://image.thehyundai.com/cos/hyundai/2022/10/31/2_1080x1320.jpg"
                                alt="Stockholm"
                              />
                            </div>
                          </a>
                          {/* <div class="headline-preamble-wrapper">
              <div style="color:444444" class="q-alpha4 is-richtext">
                <p class="caption-1" style="font-size: 14.0px;line-height: 19.0px;font-weight: 400;letter-spacing: 0.04em;margin-top: 60.0px;text-align: left;">Mannequins made from recycled plastic.</p>
              </div>
            </div> */}
                          <div className="promotion-data cos-freetile" hidden data-slides-index={1}>
                            <span className="promo_id">STOCKHOLM_IMG_2</span>
                            <span className="promo_name">MAGAZINE_STOCKHOLM</span>
                            <span className="promo_creative">STOCKHOLM_IMG_2</span>
                          </div>
                          <span className="promoIndex" hidden>
                            [object Object]
                          </span>
                        </div>
                        <div className="items" />
                      </div>
                    </div>
                    <div className="column" style={{ float: 'left' }}>
                      <div className="freetile parbase section">
                        <div className="m-free-tile two-cols" style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                          <a href="#" target="_self">
                            <div>
                              <img
                                className="a-image"
                                src="https://image.thehyundai.com/cos/hyundai/2022/10/31/3_1080x1080.jpg"
                                alt="Stockholm"
                              />
                            </div>
                          </a>
                          {/* <div class="headline-preamble-wrapper">
              <div style="color:444444" class="q-alpha4 is-richtext">
                <p class="caption-2" style="font-size: 14.0px;line-height: 19.0px;font-weight: 400;letter-spacing: 0.04em;margin-top: 60.0px;text-align: left;">Fast-growing bamboo lumber for the in-store wardrobes.</p>
              </div>
            </div> */}
                          <div className="promotion-data cos-freetile" hidden data-slides-index={2}>
                            <span className="promo_id">STOCKHOLM_IMG_3</span>
                            <span className="promo_name">MAGAZINE_STOCKHOLM</span>
                            <span className="promo_creative">STOCKHOLM_IMG_3</span>
                          </div>
                          <span className="promoIndex" hidden>
                            [object Object]
                          </span>
                        </div>
                        <div className="items" />
                      </div>
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
                  <div className="o-blog-text is-richtext">
                    <p
                      className="para2"
                      style={{
                        fontSize: 14,
                        lineHeight: '19px',
                        fontWeight: 400,
                        letterSpacing: '0.04em',
                        paddingBottom: 25,
                        paddingTop: 0,
                        textAlign: 'left',
                        marginTop: 20,
                      }}
                    >
                      코스는 디자인이 주도적인 역할을 하는 환경을 만들기 위해 스토어에도 브랜드 아이덴티티를 담으려고
                      노력합니다. 각 스토어마다 도시와 문화에 맞는 컬러 테마부터 가구까지 선택해 개성을 살린 공간을
                      만들고 있습니다. 예를 들어 스톡홀름 스토어의 레드 컬러는 도시의 활기찬 에너지를 상징합니다.
                      <br />
                      <br />
                      새롭게 오픈한 스토어의 콘셉트는 브랜드가 자원순환성에 대해 관심을 기울인 부분을 강조하고 있습니다.
                      글로벌 그로스 디렉터 로이드의 설명을 참고해보세요. ‘스토어에서 발생하는 탄소배출량을 줄이고
                      <a
                        href="https://www.cos.com/ko-kr/sustainability/planet/our-buildings.html"
                        style={{ textDecoration: 'none' }}
                      >
                        <u>지속 가능한 스토어 디자인</u>
                      </a>
                      으로 패션 업계에서 선두적인 역할을 하려고 해요.’ 디스플레이 케이스는 100% 리사이클 아크릴 소재로
                      만들어졌으며, 저탄소 레일 시스템과 성장 속도가 빠른 대나무 목재로 스토어 내부를 구성하고 있습니다
                      또한, 새롭게 오픈한 스토어는 기존 스토보다 더 친환경적인 방식으로 제작되어 리사이클 재료를 50%
                      이상 사용하고 있습니다.
                      <br />
                      <br />
                      혁신적인 아이디어를 지속적으로 발전시키며 제작 과정에 반영하고 있습니다. 예를 들어, 스토어의 바닥
                      자재는 접착제 없이 제거 가능한 타일을 사용하여 수명이 다하면 재활용할 수 있습니다. 로이드가
                      이야기한 바와 같이 이러한 디테일 이야말로 가장 혁신적인 점이라고 볼 수 있습니다. ‘스토어를 다시
                      짓지 않고 변화를 주려면, 시간이 지나면서 새롭게 적용시킬 수 있는 콘셉트를 찾아야 하고 고객의
                      피드백과 실패 사례를 두려워하지 말아야 하죠.’
                      <br />
                      <br />
                      스토어의 미래 모습은 예측할 수 없습니다. 그렇지만 분명한 점은 달라진 환경에 맞춰 빠르게 적응하고
                      유연하게 반응할 수 있는 공간이 되어야 한다는 점입니다. 스토어의 미래에 대한 로이드의 의견을
                      알아보세요. ‘미래의 스토어 디자인은 기존 스토어 디자인을 답습하지 않고 개방적이며 협력적인 태도로
                      바라보아야 해요. 또한, 더 나은 재료와 효율적인 디자인 솔루션을 지속적으로 찾아야 할 필요가
                      있어요.’
                      <br />
                      <br />
                      <a href="https://www.cos.com/ko-kr/sustainability/planet.html" style={{ textDecoration: 'none' }}>
                        <u>자원순환성</u>
                      </a>
                      을 향한 브랜드의 여정은 아직 최종 목표에 도달하지 않았습니다. 그렇지만, 최근 오픈한 스토어에서
                      자원순환성에 대한 액션을 취하는 모습을 확인할 수 있으며, 자원순환성을 고려한 공간에서 앞으로 어떤
                      변화가 펼쳐질지 기대합니다. <br />
                      <br />
                      로렌 코크레인(Lauren Cochrane) 글
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                  <div className="o-hero">
                    <div style={{ backgroundColor: '#ffffff' }} className="bcgr-color">
                      <picture
                        data-component="APicture"
                        className="a-picture"
                        data-component-id="fbd1a11b-9dfb-4be9-b61d-4f6ba5b0a045"
                      >
                        <source
                          media="(min-width:768px)"
                          srcSet="https://image.thehyundai.com/cos/hyundai/2022/10/31/4_1920x1280_D.jpg"
                        />
                        <source
                          media="(min-width:1px)"
                          srcSet="https://image.thehyundai.com/cos/hyundai/2022/10/31/4_1080x1320_M.jpg"
                        />
                        <img
                          className="a-image initial loaded"
                          src="https://image.thehyundai.com/cos/hyundai/2022/10/31/4_1920x1280_D.jpg"
                          data-was-processed="true"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
              <div className="promotion-data cos-hero" hidden data-slides-index={3}>
                <span className="promo_id">STOCKHOLM_IMG_4</span>
                <span className="promo_name">MAGAZINE_STOCKHOLM</span>
                <span className="promo_creative">STOCKHOLM_IMG_4</span>
              </div>
            </div>
          </div>
          <div className="share parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
              <div className="o-social-share">
                <h2 className="a-heading-2 share-media-title">share</h2>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=http://www.cos.com/content/cos/en/magazine/places/new-store-concept-stockholm.html"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-link"
                >
                  <span className="a-icon-social-facebook" role="link" aria-label="Facebook" />
                </a>
                <a
                  href="http://pinterest.com/pin/create/button/?url=http://www.cos.com/content/cos/en/magazine/places/new-store-concept-stockholm.html"
                  data-pin-custom="true"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-link"
                >
                  <span className="a-icon-social-pinterest" role="link" aria-label="Facebook" />
                </a>
                <a
                  href="https://twitter.com/home?status=http://www.cos.com/content/cos/en/magazine/places/new-store-concept-stockholm.html"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-link"
                >
                  <span className="a-icon-social-twitter" role="link" aria-label="Facebook" />
                </a>
                <a
                  href="http://www.tumblr.com/share?v=3&u=http://www.cos.com/content/cos/en/magazine/places/new-store-concept-stockholm.html"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-link"
                >
                  <span className="a-icon-social-tumblr" role="link" aria-label="Facebook" />
                </a>
              </div>
            </div>
          </div>
          <div className="keyline parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
              <hr className="a-keyline" />
            </div>
          </div>
          <div className="hero parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                  <div className="o-hero hero_copy_copy_copy_ no-image" style={{ backgroundColor: '#ffffff' }}>
                    <div className="m-teaser align-middle align-center mobile-middle">
                      <p className="a-paragraph q-giga" style={{ color: '#1b1b1b' }} />
                      <p
                        style={{
                          fontSize: 30,
                          fontWeight: 400,
                          textAlign: 'center',
                          paddingTop: 35,
                          paddingBottom: 2,
                        }}
                        className="keep-reading"
                      >
                        Keep reading
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="twocolumns parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
              <div
                className="o-grid-controller is-two-cols"
                style={{ backgroundImage: 'none', backgroundColor: '#ffffff' }}
              >
                <div className="content">
                  <div className="scrollable-content">
                    <div className="column" style={{ float: 'left' }}>
                      <div className="freetile parbase section">
                        <div className="m-free-tile two-cols" style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                          <a href="https://www.cos.com/ko-kr/magazine/places/store-locator-Tallinn.html" target="_self">
                            <div>
                              <img
                                className="a-image"
                                src="https://image.thehyundai.com/cos/hyundai/2022/10/31/Tallinn.jpg"
                                alt="Store locator: Tallinn"
                              />
                            </div>
                          </a>
                          <div className="headline-preamble-wrapper">
                            <div style={{ color: '#444444' }} className="q-alpha4 is-richtext">
                              <p>&nbsp;</p>
                              <p className="tile-headline" style={{ fontSize: 24, lineHeight: '20px' }}>
                                에스토니아 탈린에 오픈한 COS 매장
                              </p>
                              <p>&nbsp;</p>
                              <p style={{ fontSize: 14, lineHeight: '20px' }}>
                                과거 제빵공장이었던 공간이 어떻게 에스토니아 최초 COS 매장으로 탈바꿈했는지에 대해
                                들어보세요.
                              </p>
                            </div>
                          </div>
                          <div className="cta-wrapper">
                            <a
                              href="https://www.cos.com/ko-kr/magazine/places/store-locator-Tallinn.html"
                              target="_self"
                              className="a-link cta-link unsmart-underline"
                              data-value="read more"
                              style={{ textDecoration: 'none' }}
                            >
                              더 보기
                              <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                                더 보기
                              </span>
                            </a>
                          </div>
                          <div className="promotion-data cos-freetile" hidden data-slides-index={4}>
                            <span className="promo_id">TALLINN</span>
                            <span className="promo_name">MAGAZINE_LP_PLACES</span>
                            <span className="promo_creative">TALLINN</span>
                          </div>
                          <span className="promoIndex" hidden>
                            [object Object]
                          </span>
                        </div>
                        <div className="items" />
                      </div>
                    </div>
                    <div className="column" style={{ float: 'left' }}>
                      <div className="freetile parbase section">
                        <div className="m-free-tile two-cols" style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                          <a
                            href="https://www.cos.com/ko-kr/magazine/places/cos-buildings-zurich-suwon-new-york-city-aw20.html"
                            target="_self"
                          >
                            <div>
                              <img
                                className="a-image"
                                src="https://image.thehyundai.com/cos/hyundai/2022/10/31/Zurich.jpg"
                                alt="Street Views: Athens with editor Chris Kontos"
                              />
                            </div>
                          </a>
                          <div className="headline-preamble-wrapper">
                            <div style={{ color: '#444444' }} className="q-alpha4 is-richtext">
                              <p>&nbsp;</p>
                              <p className="tile-headline" style={{ fontSize: 24, lineHeight: '20px' }}>
                                취리히에서 뉴욕까지
                              </p>
                              <p>&nbsp;</p>
                              <p style={{ fontSize: 14, lineHeight: '20px' }}>COS 매장 속 숨은 이야기를 만나보세요.</p>
                            </div>
                          </div>
                          <div className="cta-wrapper">
                            <a
                              href="https://www.cos.com/ko-kr/magazine/places/cos-buildings-zurich-suwon-new-york-city-aw20.html"
                              target="_self"
                              className="a-link cta-link unsmart-underline"
                              data-value="read more"
                              style={{ textDecoration: 'none' }}
                            >
                              더 보기
                              <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                                더 보기
                              </span>
                            </a>
                          </div>
                          <div className="promotion-data cos-freetile" hidden data-slides-index={5}>
                            <span className="promo_id">ATHENS</span>
                            <span className="promo_name">MAGAZINE_LP_PLACES</span>
                            <span className="promo_creative">ATHENS</span>
                          </div>
                          <span className="promoIndex" hidden>
                            [object Object]
                          </span>
                        </div>
                        <div className="items" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
