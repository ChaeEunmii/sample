'use client';

import FreeHtml from '@/views/freehtml/FreeHtml';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'People: The power of colour  - COS KR',
// };

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n.m-free-tile{cursor: default;}\n.m-free-tile .headline-preamble-wrapper p{font-size: 14px; line-height: 19px;}\n.o-hero{width:100%}\n.m-free-tile.headline-preamble-wrapper.a{text-decoration:underline !important}\n.o-blog-text .a-paragraph{font-weight:400;font-size:14px;letter-spacing:.04em;line-height:19px;padding:15px 10px}\n.o-hero .a-picture+.m-teaser.align-left{max-width:100% !important;width:100% !important;top:103%;margin-left:-20px !important}\npull-quote.a-paragraph.a-page-paragraph{padding-bottom:40px !important}\n.m-free-tile .a-heading-2{font-size:24px;line-height:17px;letter-spacing:.0525em;text-transform:none;margin-bottom:13px;margin-top:35px}\n.button1{font-size:16px;letter-spacing:.06em;margin-bottom:10px;margin-right:5px;margin-left:5px;height:45px;width:240px;background-color:#1b1b1b;border:1px solid #1b1b1b;color:#fff;padding:12px 9px 12px 8px}\n@container root (min-width:768px){.para{padding-top:40px !important}\n.button1{margin-left:0;display:inline-block}\n.o-blog-text{margin-top:0}\n}\n@container root (max-width:767px){.parr{padding-bottom:20px;text-align:center}\n.article-headline{font-size:40px !important;line-height:44px !important;width:80% !important;margin-left:auto !important;margin-right:auto !important}\n.article-headline-sub{font-size:18px !important;line-height:23px !important;padding-bottom:5px !important}\n.pull-quote{font-size:24px !important;line-height:29px !important;padding-bottom:20px !important;padding-top:2px !important}\n.pull-quote2{font-size:24px !important;line-height:29px !important;padding-bottom:35px !important;padding-top:2px !important}\n.keep-reading{padding-top:15px !important}\n.new{margin:0rem 0rem 0}\n.o-footer{padding:0 10px 18px}\n.o-hero .a-picture+.m-teaser.align-left{margin-left:9px !important}\n.m-free-tile.headline-preamble-wrapper.a{text-decoration:underline !important}\n.m-free-tile .a-heading-2{font-size:20px !important}\n.o-hero.image-wrapper{margin-bottom:-35px}\n.para1{margin-top:-30px}\n}\n',
          }}
        />
        <div className="genericpagepar parsys">
          <div className="text parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="richTextSpan">
                  <div className="o-blog-text is-richtext">
                    <p>&nbsp;</p>
                    <p
                      style={{
                        textAlign: 'center',
                        fontSize: '14.0px',
                        lineHeight: '19.0px',
                        fontWeight: 400,
                        letterSpacing: '0.04em',
                      }}
                    >
                      인터뷰
                    </p>
                    <p
                      style={{
                        letterSpacing: '0.8px',
                        textAlign: 'center',
                        fontSize: '60.0px',
                        lineHeight: '64.0px',
                        paddingTop: '15.0px',
                        paddingBottom: '25.0px',
                      }}
                      className="article-headline"
                    >
                      The power of colour 
                    </p>
                    <p
                      style={{
                        textAlign: 'center',
                        fontSize: '20.0px',
                        paddingBottom: '25.0px',
                        lineHeight: '26.0px',
                      }}
                      className="article-headline-sub"
                    >
                      강렬한 컬러를 통해 아티스틱한 무드를 연출하는 레아 콜롬보.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="threecolumns parbase section u-clearfix">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
              <div
                className="o-grid-controller is-three-cols"
                style={{
                  backgroundImage: 'none',
                  backgroundColor: '#FFFFFF',
                  margin: '20px auto 0',
                }}
              >
                <div className="content">
                  <div className="scrollable-content">
                    <div className="column" />
                    <div className="column">
                      <div className="freetile parbase section">
                        <div className="m-free-tile three-cols " style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                          <a href="https://www.cos.com/ko-kr/collaborations.html" target="_self">
                            <div className="image-container rimd rimd-background">
                              <img
                                className="a-image initial loading"
                                src="https://image.thehyundai.com/cos/hyundai/2022/7/1/lea-portrait01.jpg"
                                alt="Lea Colombo"
                                data-was-processed="true"
                              />
                            </div>
                          </a>
                          <div className="headline-preamble-wrapper"></div>
                          <div className="promotion-data cos-freetile" hidden data-slides-index={0}>
                            <span className="promo_id">IMAGE_ONE</span>
                            <span className="promo_name">MAGAZINE_LEA_COLOMBO</span>
                            <span className="promo_creative">IMAGE_ONE</span>
                          </div>
                          <span className="promoIndex" hidden>
                            [object Object]
                          </span>
                        </div>
                        <div className="items"></div>
                      </div>
                    </div>
                    <div className="column" />
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
                      className="para-1"
                      style={{
                        fontSize: '14.0px',
                        lineHeight: '19.0px',
                        fontWeight: 400,
                        letterSpacing: '0.04em',
                        paddingBottom: '25.0px',
                        paddingTop: '35.0px',
                        textAlign: 'left',
                      }}
                    >
                      레아 콜롬보(Lea Colombo)는 자신만의 페이스를 유지하는 포토그래퍼 및 디렉터이며, 다양한 예술
                      분야에서 활동하는 아티스트입니다. 풍부한 컬러가 돋보이는 패션 사진으로 잘 알려져 있고{' '}
                      <a href="https://www.cosstores.com/ko-kr/store-locator.html" style={{ textDecoration: 'none' }}>
                        <u>파리</u>
                      </a>
                      로 활동 무대를 옮긴 뒤, 데이즈드 &amp; 컨퓨즈드(Dazed &amp; Confused), 아이디(i-D) 매거진과 함께
                      작업했습니다. 그 후, 잠시 동안 런던에서 작품 활동을 이어나간 뒤 고향인 남아프리카공화국
                      케이프타운으로 돌아왔습니다. 레아는 케이프타운으로 돌아오게 된 이유를 다음과 같이 밝혔습니다.
                      ‘런던에서는 더 이상의 영감을 찾을 수 없어서 작년에 고향으로 돌아오게 되었어요. 케이프타운만의
                      분위기로부터 많은 영감을 받아요.’
                      <br />
                      <br />
                      최근 레아는 이미지 메이킹과 조각 작업을 같이 진행하고 있습니다. 새롭게 오픈한 그녀의 스튜디오에서
                      다채로운 컬러 팔레트를 사용한 자화상 ‘컬러 오브 마이 바디(Colours of my body)’와 아티스틱한 플로럴
                      포토그램(Photogram) 기법으로 완성한{' '}
                      <a href="https://www.cos.com/ko-kr/women/collaborations.html" style={{ textDecoration: 'none' }}>
                        <u>캡슐 컬렉션</u>
                      </a>
                      에 대해 심층적인 인터뷰를 나눴습니다. 컬러 본연의 힘을 담아 새로운 무드를 자아내는 레아의 작품과
                      컬러에 대한 철학을 확인해보세요. ‘컬러는 빛을 통해 감지할 수 있고, 살아있는 언어라고 할 수 있죠.’{' '}
                      <br />
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
                  <div
                    className="o-hero hero "
                    style={{ backgroundColor: '' }}
                    data-component="OHero"
                    data-component-id="a8b3588b-af42-41e2-8a89-e195328670cb"
                  >
                    <div className="image-wrapper a-picture " style={{ backgroundColor: '' }}>
                      <a href="https://www.cos.com/ko-kr/collaborations.html" target="_self" className="js-mobile-href">
                        <div className="rimd rimd-background bcgr-color" data-mobile-image="true">
                          <img src="https://image.thehyundai.com/cos/hyundai/2022/7/1/lea-02.jpg" />
                        </div>
                        <span className="promoIndex" hidden>
                          6
                        </span>
                      </a>
                    </div>
                    <div className="m-teaser "></div>
                  </div>
                </div>
              </div>
              <div className="promotion-data cos-hero" hidden data-slides-index={1}>
                <span className="promo_id">IMAGE_TWO</span>
                <span className="promo_name">MAGAZINE_LEA_COLOMBO</span>
                <span className="promo_creative">IMAGE_TWO</span>
                <span className="promo_creative_1">Lea Colombo</span>
                <span className="promo_creative_2">Lea Colombo</span>
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
                        fontSize: '36.0px',
                        lineHeight: '46.0px',
                        textAlign: 'center',
                        paddingTop: '30.0px',
                        paddingBottom: '20.0px',
                      }}
                    >
                       ‘컬러는 빛을 통해 감지할 수 있고, 살아있는 언어라고 할 수 있죠.’
                      <br />
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
                      className="para-2"
                      style={{
                        fontSize: '14.0px',
                        lineHeight: '19.0px',
                        fontWeight: 400,
                        letterSpacing: '0.04em',
                        paddingBottom: '25.0px',
                        paddingTop: '25.0px',
                        textAlign: 'left',
                      }}
                    >
                      <b>아티스트로서의 시작 </b>
                      <br />
                      ‘전통적인 예술 학교의 과정을 따르지 않고, 자연스럽게 감각적으로 배운 부분이 많아요. 학교 수업을
                      좋아하진 않았지만, 존경하는 미술 선생님이 계셔서 그 분을 통해 사진을 접하게 되었어요. 게다가 저는
                      패션에 관심이 있었기 때문에, 뭘 원하고 필요한지 정확하게 깨달을 수 있었어요. 그래서 파리에서
                      고등학교를 졸업한 뒤 조금씩 사진 관련 일을 시작하게 되었어요. 예를 들면, 데이즈드 &amp;
                      컨퓨즈드(Dazed &amp; Confused) 매거진에서 일하면서 패션위크 한 달 동안 모든 컬렉션을 돌아다니며
                      백스테이지를 촬영했어요. 현장에서 직접 부딪히면서 열악한 환경 속에서도 짧은 시간 안에 퀄리티 있는
                      사진을 촬영할 수 있어야 한다는 걸 배웠어요.’
                      <br />
                      <br />
                      <b>오픈 마인드</b>
                      <br />
                      ‘한 가지 사고방식에만 몰두하지 않고 열려 있는 자세로 세상을 바라보려고 노력해요. 항상 제 자신을
                      몰아붙이며 색다른 것을 시도하고 스스로에게 질문을 던져요. ‘새로운 에너지를 가져다줄 수 있는 것을
                      나의 작품에 더 녹일 수 있을까?’
                      <br />
                      <br />
                      <b>암실 창작 과정</b>
                      <br />
                      ‘암실에서 빛, 컬러, 그리고 형태를 포토그램 기법을 사용해 구체적인 비주얼 작업으로 제작해요. COS와
                      협업한 이번 캡슐 컬렉션에서도 포토그램 기법을 사용했는데, 암실에서 오브젝트를 활용해 아름다운
                      이미지를 만들 수 있다는 점이 매력적이었죠.’
                      <br />
                      <br />
                      <b>컬러에 대한 철학</b>
                      <br />
                      ‘저는 컬러에 강하게 끌리는 스타일이에요. 그 이유는 컬러가 다양한 방식으로 사람을 치유할 수 있는
                      에너지를 가지고 있으며 제가 어떤 컬러에 끌리는지, 그리고 그 컬러가 어떤 의미를 가지는지에 대해
                      파악하는 것이 흥미롭기 때문이에요. 앞에서 이야기한 내용은 인간이 의식적 또는 무의식적으로 컬러를
                      보고 느끼는 것에 대한 내용인데, 사람들은 항상 컬러의 의미에 대해 집중하진 않는 것 같아요. 그렇지만
                      저는 컬러와 에너지의 관계에 많은 관심을 가지고 있고 있어요. 예를 들면 사람의 몸은 에너지와
                      차크라(Chakra)로 이루어졌고, 컬러를 바탕으로 한다는 점이에요. 사람들이 더 적극적으로 컬러의 의미를
                      받아들인다면, 컬러가 우리 몸에 어떠한 영향을 주는지 이해할 수 있을 거라고 생각해요.’
                      <br />
                      <br />
                      <b>COS와의 협업</b>
                      <br />
                      ‘COS 관계자분들이 저의 플로럴 프린트와 컬러 작업에 많은 관심을 가지더라고요. 거기서부터 이번 캡슐
                      컬렉션의 테마는 시작된 것 같아요. 우선, 성별 관계없이 적용할 수 있을 법한 디자인을 큐레이팅
                      해봤어요. COS는 미니멀한 디자인의 브랜드라 제가 과감한 컬러를 사용해 새로운 변화를 줄 수 있다는
                      점이 좋았던 것 같아요.’
                      <br />
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
                  <div
                    className="o-hero hero_copy "
                    style={{ backgroundColor: '' }}
                    data-component="OHero"
                    data-component-id="1182209d-cdaa-4cea-bd9e-eeaffa6a5f37"
                  >
                    <div className="image-wrapper a-picture " style={{ backgroundColor: '' }}>
                      <a href="https://www.cos.com/ko-kr/collaborations.html" target="_self" className="js-mobile-href">
                        <div className="rimd rimd-background bcgr-color" data-mobile-image="true">
                          <img src="https://image.thehyundai.com/cos/hyundai/2022/7/1/lea-03.jpg" />
                        </div>
                        <span className="promoIndex" hidden>
                          7
                        </span>
                      </a>
                    </div>
                    <div className="m-teaser "></div>
                  </div>
                </div>
              </div>
              <div className="promotion-data cos-hero" hidden data-slides-index={2}>
                <span className="promo_id">IMAGE_THREE</span>
                <span className="promo_name">MAGAZINE_LEA_COLOMBO</span>
                <span className="promo_creative">IMAGE_THREE</span>
                <span className="promo_creative_1">Lea Colombo</span>
                <span className="promo_creative_2">Lea Colombo</span>
              </div>
            </div>
          </div>
          <div className="text parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="richTextSpan">
                  <div className="o-blog-text is-richtext">
                    <p
                      className="para-3"
                      style={{
                        fontSize: '14.0px',
                        lineHeight: '19.0px',
                        fontWeight: 400,
                        letterSpacing: '0.04em',
                        paddingBottom: '15.0px',
                        paddingTop: '35.0px',
                        textAlign: 'left',
                      }}
                    >
                      <b>과감한 컬러 아이템</b>
                      <br />
                      ‘이번 컬렉션의 컬러 팔레트는 전반적으로 에너지의 흐름을 보여준다고 할 수 있어요. 과감한 컬러의
                      컬렉션 아이템을 착용하면 더 돋보이는 느낌이 들죠. 그래서 사람들이 어떤 느낌을 받을지 기대되고,
                      매장을 방문해서 컬렉션의 다채로운 컬러를 보고 새롭게 시도해봤으면 좋겠어요.’
                      <br />
                      <br />
                      <b>케이프타운</b>
                      <br />
                      ‘제 고향 케이프타운은 테이블 산(Table Mountain)과 라이온스 헤드 산(Lion’s Head) 아래에 위치하고
                      있어 아름다운 풍경으로 잘 알려진 도시예요. 그래서 암석에서 영감을 받은 작업을 시작하게 되었죠.
                      그리고 9시 출근해서 5시에 퇴근하는 일상에 익숙해서 일과 삶의 균형을 위해 쉬는 날 종종 바다에 놀러
                      가기도 해요.’
                      <br />
                      <br />
                      <b>조각 작업</b>
                      <br />
                      ‘항상 원석과 보석에 관심이 많았어요. 그래서 요즘 강철보다 단단한 레드 재스퍼(Red Jasper) 원석으로
                      조각 작업을 하는데, 육체적으로 힘이 많이 들지만 기계와 재료에만 오롯이 집중할 수 있어서 보람
                      있다고 생각해요. 그리고 작업에 많은 기대를 하지 않고 제한을 두지 않으면 어떤 결과물이 나올 수
                      있을지 시도해보고 있어요.’
                      <br />
                      <br />
                      <b>자화상</b>
                      <br />
                      ‘빛과 컬러를 바탕으로 제 자신의 모습을 촬영하기 시작했고, 암실에 갈 수 있는 상황이 아니라 집에
                      있는 오브젝트로 아름답고 근사한 작품을 제작하게 되었어요. 매일 제 모습을 촬영한 이미지를 바탕으로
                      컬러스 오브 마이 바디(Colours of my body) 작품을 발전시켰어요.’
                      <br />
                      <br />
                      ‘예전엔 제 모습을 촬영한다는 건 절대 상상할 수 없었지만, 제 자신을 받아들이고 남성성과 여성성에
                      대한 깊이 있는 질문을 하기 위해서 꼭 해야만 하는 작업이었죠. 아름다운 몸의 형태와 라인을 담을 수
                      있었던 경험이었어요.’
                      <br />
                      <br />
                      <b>인생의 조언</b>
                      <br />
                      ‘가장 도움이 되는 조언은 자기 자신을 믿으며 다른 사람과 비교하지 말고 인생을 살아가야 한다는
                      것이었어요. 사람들은 각자의 길을 가고 있고, 거기엔 옳고 그름이 존재하는 않는다는 걸 깨달았어요.’
                      <br />
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
                      className="pull-quote-2"
                      style={{
                        letterSpacing: '0.8px',
                        fontSize: '36.0px',
                        lineHeight: '46.0px',
                        textAlign: 'center',
                        paddingTop: '20.0px',
                        paddingBottom: '30.0px',
                      }}
                    >
                      <span className="q-alpha4" />
                      ‘이번 컬렉션은 다채로운 컬러 팔레트를 사용해 강렬한 임팩트를 전달하는 점이 특징이에요.’
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="threecolumns parbase section u-clearfix">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
              <div
                className="o-grid-controller is-three-cols"
                style={{ backgroundImage: 'none', backgroundColor: '#FFFFFF' }}
              >
                <div className="content">
                  <div className="scrollable-content">
                    <div className="column" />
                    <div className="column">
                      <div className="freetile parbase section">
                        <div className="m-free-tile three-cols " style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                          <a href="https://www.cos.com/ko-kr/collaborations.html" target="_self">
                            <div className="image-container rimd rimd-background">
                              <img
                                className="a-image"
                                src="https://image.thehyundai.com/cos/hyundai/2022/7/1/lea-portrait02.jpg"
                                alt="Lea Colombo"
                              />
                            </div>
                          </a>
                          <div className="headline-preamble-wrapper"></div>
                          <div className="promotion-data cos-freetile" hidden data-slides-index={3}>
                            <span className="promo_id">IMAGE_FOUR</span>
                            <span className="promo_name">MAGAZINE_LEA_COLOMBO</span>
                            <span className="promo_creative">IMAGE_FOUR</span>
                          </div>
                          <span className="promoIndex" hidden>
                            [object Object]
                          </span>
                        </div>
                        <div className="items"></div>
                      </div>
                    </div>
                    <div className="column" />
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
                      className="para-4"
                      style={{
                        fontSize: '14.0px',
                        lineHeight: '19.0px',
                        fontWeight: 400,
                        letterSpacing: '0.04em',
                        paddingBottom: '15.0px',
                        paddingTop: '35.0px',
                        textAlign: 'left',
                      }}
                    >
                      <b>QUICKFIRE Q&amp;A</b>
                      <br />
                      <br />
                      <b>가장 최근에 읽은 책은 무엇인가요? </b>
                      <br />
                      ‘아나가리카 고빈다(Anagarika Govinda)의 더 웨이 오브 더 화이트 클라우즈(The way of the White
                      Clouds)예요. 아름다운 티베트(Tibet)을 배경으로 하는 책이죠.’
                      <br />
                      <br />
                      <b>내일 비행기를 타고 떠날 수 있다면 어디로 가고 싶으세요? </b>
                      <br />
                      ‘평소에 가고 싶었던 케냐(Kenya)나 에티오피아(Ethiopa)에 가고 싶어요.’
                      <br />
                      <br />
                      <b>가장 최근에 감상한 영화는 무엇인가요? </b>
                      <br />
                      ‘마이크 밀스(Mike Mills) 감독의 영화 컴온 컴온(C’mon C’mon)이에요.’
                      <br />
                      <br />
                      <b>가장 아끼는 물건은 무엇인가요?</b>
                      <br />
                      ‘항상 청금석(Bule lapis lazuli)을 가지고 다녀요.’
                      <br />
                      <br />
                      <b>친구들이 말하는 자신의 모습은 어떤가요? </b>
                      <br />
                      ‘컬러풀하고 에너지 넘친다고 이야기해요. 친구들은 저를 콜롬보 컬러스(Colombo Colours)라고 불러요.’
                      <br />
                      <br />
                      <br />
                      <br />
                      레나 디스탕(Lena Dystant) 인터뷰 <br />
                      레아 콜롬보(Lea Colombo) 사진{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="share parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
              <div className="o-social-share">
                <h2 className="a-heading-2 share-media-title">share</h2>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=http://www.cos.com/content/cos/ko-kr/magazine/people/interview-lea-colombo-ss22-collection.html"
                  target="_blank"
                  className="a-link"
                >
                  <span className="a-icon-social-facebook" role="link" aria-label="Facebook" />
                </a>
                <a
                  href="http://pinterest.com/pin/create/button/?url=http://www.cos.com/content/cos/ko-kr/magazine/people/interview-lea-colombo-ss22-collection.html"
                  data-pin-custom="true"
                  target="_blank"
                  className="a-link"
                >
                  <span className="a-icon-social-pinterest" role="link" aria-label="Facebook" />
                </a>
                <a
                  href="https://twitter.com/home?status=http://www.cos.com/content/cos/ko-kr/magazine/people/interview-lea-colombo-ss22-collection.html"
                  target="_blank"
                  className="a-link"
                >
                  <span className="a-icon-social-twitter" role="link" aria-label="Facebook" />
                </a>
                <a
                  href="http://www.tumblr.com/share?v=3&u=http://www.cos.com/content/cos/ko-kr/magazine/people/interview-lea-colombo-ss22-collection.html"
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
                  <div className="o-hero hero_copy_copy_copy_ no-image" style={{ backgroundColor: '#FFFFFF' }}>
                    <div className="m-teaser align-middle align-center mobile-middle">
                      <p className="a-paragraph q-giga" style={{ color: '#1B1B1B' }} />
                      <p
                        style={{
                          fontSize: '30.0px',
                          color: 'rgb(27,27,27)',
                          fontWeight: 400,
                          textAlign: 'center',
                          paddingTop: '35.0px',
                          paddingBottom: '25.0px',
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
                style={{ backgroundImage: 'none', backgroundColor: '#FFFFFF' }}
              >
                <div className="content">
                  <div className="scrollable-content">
                    <div className="column" style={{ float: 'left' }}>
                      <div className="freetile parbase section">
                        <div className="m-free-tile two-cols " style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                          <a
                            href="https://www.cos.com/ko-kr/magazine/stories/the-womens-holiday-packing-list.html"
                            target="_self"
                          >
                            <div className="image-container rimd rimd-background">
                              <img
                                className="a-image"
                                src="https://image.thehyundai.com/cos/hyundai/2022/7/1/750x750_HIGH_SUMMER_COS40.jpg"
                                alt="The women’s holiday packing list"
                              />
                            </div>
                          </a>
                          <div className="headline-preamble-wrapper">
                            <div style={{ color: '#444444' }} className="q-giga is-richtext">
                              <p>&nbsp;</p>
                              <p className="tile-headline" style={{ fontSize: '24.0px', lineHeight: '26.0px' }}>
                                The women’s holiday packing list
                              </p>
                              <p>&nbsp;</p>
                              <p style={{ fontSize: '14.0px', lineHeight: '20.0px' }}>
                                휴가 시즌을 위한 여성 아이템을 소개합니다.
                              </p>
                            </div>
                          </div>
                          <div className="cta-wrapper">
                            <a
                              href="https://www.cos.com/ko-kr/magazine/stories/the-womens-holiday-packing-list.html"
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
                        </div>
                        <div className="items"></div>
                      </div>
                    </div>
                    <div className="column" style={{ float: 'left' }}>
                      <div className="freetile parbase section">
                        <div className="m-free-tile two-cols " style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                          <a
                            href="https://www.cos.com/ko-kr/magazine/stories/the-mens-holiday-packing-list.html "
                            target="_self"
                          >
                            <div className="image-container rimd rimd-background">
                              <img
                                className="a-image"
                                src="https://image.thehyundai.com/cos/hyundai/2022/7/1/750x1000_HIGH_SUMMER_COS_03.jpg"
                                alt="The men’s holiday packing list"
                              />
                            </div>
                          </a>
                          <div className="headline-preamble-wrapper">
                            <div style={{ color: '#444444' }} className="q-giga is-richtext">
                              <p>&nbsp;</p>
                              <p className="tile-headline" style={{ fontSize: '24.0px', lineHeight: '26.0px' }}>
                                The men’s holiday packing list
                              </p>
                              <p>&nbsp;</p>
                              <p style={{ fontSize: '14.0px', lineHeight: '20.0px' }}>
                                휴가 시즌을 위한 남성 아이템을 소개합니다.
                              </p>
                            </div>
                          </div>
                          <div className="cta-wrapper">
                            <a
                              href="https://www.cos.com/ko-kr/magazine/stories/the-mens-holiday-packing-list.html "
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
                        </div>
                        <div className="items"></div>
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
