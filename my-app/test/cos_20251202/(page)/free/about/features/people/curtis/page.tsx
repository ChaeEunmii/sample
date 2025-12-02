'use client';

import FreeHtml from '@/views/freehtml/FreeHtml';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'People: Curtis - COS KR',
// };

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    .o-grid-controller.is-three-cols .column {\n        width: calc(99%/3);\n    }\n\n    .mgz_style .pull-quote1 {\n        margin-bottom: 50px;\n        font-size: 40px;\n        line-height: 1.25em;\n        letter-spacing: 0.04em;\n        text-align: center;\n    }\n\n    .mgz_style .article-category {\n        margin-top: 35px;\n        text-align: center;\n        font-size: 14px;\n        line-height: 1.25em;\n        letter-spacing: 0.04em;\n    }\n\n    .mgz_style .article-headline {\n        text-align: center;\n        padding: 15px 0 25px;\n        font-size: 60px;\n        line-height: 1.25em;\n        letter-spacing: 0.04em;\n    }\n\n    .mgz_style .article-headline-sub {\n        text-align: center;\n        font-size: 20px;\n        line-height: 1.25em;\n    }\n\n    .mgz_style .para-1 {\n        padding-bottom: 25px;\n        text-align: left;\n        font-size: 14px;\n        line-height: 1.35em;\n        letter-spacing: 0.04em;\n    }\n\n    .mgz_style .para-1+.pull-quote1 {\n        margin-top: 25px;\n    }\n\n    .mgz_style .o-hero.has-video {\n        width: 100%;\n    }\n\n    .mgz_style .o-blog-text {\n        margin-top: 0;\n    }\n\n    .mgz_style .o-grid-controller .column:not(:last-child)>*:last-child {\n        margin-bottom: 0;\n    }\n\n    .mgz_style .EC1 {\n        margin-top: 8px;\n    }\n\n    .mgz_style .keep-reading {\n        font-size: 30px;\n        text-align: center;\n    }\n\n    .mgz_style .tile-headline {\n        margin: 10px 0 17px;\n    }\n\n    .mgz_style .tile-headline+p {\n        font-size: 14px;\n    }\n\n    @container root (max-width: 767px) {\n\n.o-grid-controller.is-three-cols .column {width:100%}\n\n        .mgz_style .pull-quote1 {\n            margin-bottom:30px;\n            font-size: 24px;\n        }\n\n        .mgz_style .article-headline {\n            font-size: 32px;\n        }\n\n        .mgz_style .article-headline-sub {\n            font-size: 18px;\n        }\n\n        .mgz_style .para-1 {\n            padding-bottom: 0;\n        }\n\n        .mgz_style .para-1+.pull-quote1 {\n            margin-top: 5px;\n        }\n\n        .mgz_style .m-free-tile .headline-preamble-wrapper {\n            margin-bottom: 0;\n        }\n\n        .mgz_style .o-grid-controller.is-three-cols {\n            margin: 15px auto;\n        }\n\n        .mgz_style .m-free-tile .headline-preamble-wrapper+.cta-wrapper {\n            margin:13px 0 30px 0;\n        }\n    }\n',
          }}
        />
        <div className="genericpagepar parsys mgz_style">
          <div className="text parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="richTextSpan">
                  <div className="o-blog-text is-richtext">
                    <p className="article-category">인터뷰</p>
                    <p className="article-headline">커티스 하딩의 가스펠 음악</p>
                    <p className="article-headline-sub">
                      싱어송라이터이자 배우인 커티스 하딩과 만나 교회에서 보낸 어린 시절이 어떤 영향을 미쳤는지에 대해
                      인터뷰를 나눴습니다.
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
                style={{ backgroundImage: 'none', backgroundColor: '#ffffff' }}
              >
                <div className="content">
                  <div className="scrollable-content">
                    <div className="column" />
                    <div className="column">
                      <div className="freetile parbase section">
                        <div className="m-free-tile three-cols" style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                          <a href="#" target="_self">
                            <div className="image-container">
                              <div>
                                <img
                                  className="a-image initial loading"
                                  src="https://image.thehyundai.com/cos/hyundai/2023/8/29/750x1000_AW23_CAMPAIGN_007.jpg"
                                  alt="Alternate Image"
                                  data-was-processed="true"
                                />
                              </div>
                            </div>
                          </a>
                          <div className="headline-preamble-wrapper">
                            <div style={{ color: '#444444' }} className="q-giga is-richtext">
                              <p
                                className="caption-1"
                                style={{
                                  fontSize: 14,
                                  lineHeight: '19px',
                                  fontWeight: 400,
                                  letterSpacing: '0.04em',
                                  textAlign: 'left',
                                }}
                              >
                                커티스가 착용한 <a href="https://www.cos.com/ko-kr/men/knitwear.html">니트웨어</a>와
                                <a href="https://www.cos.com/ko-kr/men/coats-jackets/jackets.html">재킷</a>, 모두 COS
                                제품
                              </p>
                            </div>
                          </div>
                          <div className="promotion-data cos-freetile" hidden data-slides-index={0}>
                            <span className="promo_id">IMAGE_ONE</span>
                            <span className="promo_name">MAGAZINE_KIERAN</span>
                            <span className="promo_creative">IMAGE_ONE</span>
                          </div>
                          <span className="promoIndex" hidden>
                            [object Object]
                          </span>
                        </div>
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
                    <p className="para-1" style={{ marginBottom: 50 }}>
                      조지아(Georgia) 주 애틀랜타(Atlanta)에 있는 집에서 살고 있는 커티스 하딩(Curtis Harding)의
                      이야기를 들어보세요. ‘어릴 때 많은 물건을 싣고 이동하면서 삶이 평범하지 않다는 걸 깨닫게
                      되었어요.’
                      <br />
                      <br />
                      미시간(Michigan) 주 새기노(Saginaw)에서 태어난 커티스는 가스펠 음악을 노래하는 어머니와 교회에
                      다니는 가족과 함께 미국 전역을 여행하며 어린 시절을 보냈습니다. ‘엄마와 아빠는 미국 전역의 여러
                      도시를 돌아다니며 교회 활동을 하셔서 한곳에 오래 머물진 않았어요.’
                      <br />
                      <br />
                      커티스는 8살에 교회에서 드럼을 연주하고 노래를 부르기 시작했고, 가족들과 함께 전국을 돌아다니며
                      가스펠 음악 공연을 했습니다. 14살 때 가족들이 애틀랜타에 정착하고 나서야 커티스가 집이라고 부를 수
                      있는 장소를 찾게 되었습니다.
                      <br />
                      <br />
                      커티스는 아웃캐스트(OutKast)의 남부 힙합과 던전 패밀리(Dungeon Family)의 탄생과 함께 애틀랜타
                      음악의 역사에서 중요한 시기에 도시로 오게 되었습니다. ‘모든 음악들이 초기 단계에 있었고, 그 중심이
                      되는 애틀란타에서 지낼 수 있는 건 뜻 깊은 시간이었어요.’ 그리고 커티스는 힙합 그룹
                      프로시드(Proceed)의 멤버가 되어 씨로 그린(CeeLo Green)과 함께 투어에 참여하게 되었습니다.
                      <br />
                      커티스는 블랙 립스(Black Lips)의 콜 알렉산더(Cole Alexander)와 함께 그룹 나이트 선(Night Sun)을
                      결성하면서 2014년, 커티스의 데뷔 솔로 앨범이 될 곡을 쓰기 시작했습니다. 가스펠의 영적인 힘, 빈티지
                      소울의 강렬함, 개러지 록(Garage rock)의 날 것과 같으면서도 임팩트 있는 감성이 더해진 소울
                      파워(Soul Power)는 커티스가 슬롭 앤 소울(Slop n Soul)이라고 칭한 것처럼 풍부한 사운드가 매력적인
                      음악이었습니다.
                      <br />
                      소울 파워는 이전 음악에서도 물론 영향을 받았지만, 커티스는 과거 향수에 젖어 음악 활동을 하는
                      뮤지션은 아닙니다. 2017년 후속 앨범인 페이스 유어 피어(Face Your Fear)에서 21세기 얼터너티브 소울
                      작품을 위해 실험적인 힙합 프로듀서인 데인저 마우스(Danger Mouse)와 협력했습니다. ‘한 종류의 음악만
                      하면 지루하기 때문에 항상 새로운 것을 시도하는 게 중요한 것 같아요.’
                      <br />
                      <br />
                      고통부터 쾌락, 강인함, 연약함까지 상반되는 감정을 전달하는 목소리와 가사로 커티스는 사랑, 단결,
                      회복력에 관한 앨범인 이프 워즈 월 플라워즈(If Words Were Flowers)로 코로나 락다운으로 인한 고립과
                      두려움에 대한 이야기를 노래했습니다. 이 노래들의 영향력은 커티스가 늘 그렇게 해왔던 것처럼 음악
                      활동을 하고 있을 때 가장 빛을 발하게 됩니다. COS는 유럽 투어를 마치고 돌아온 지 며칠 뒤 커티스를
                      만나 음악의 근본적인 테마부터 인터뷰를 시작했습니다.
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
                    <p className="pull-quote1">
                      ‘가스펠 음악이 제 음악의 시작이었어요.’
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
                  <div className="o-hero has-video">
                    <div className="m-video-tile ratio">
                      <div className="a-youtube-video">
                        <iframe
                          src="https://player.vimeo.com/video/853291396?badge=0&autopause=0&player_id=0&app_id=58479"
                          frameBorder={0}
                          allow="autoplay; fullscreen; picture-in-picture"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                          }}
                          title="COS AW23 Campaign | Curtis Harding"
                          data-ready="true"
                        />
                      </div>
                    </div>
                    <div className="m-teaser" />
                  </div>
                </div>
              </div>
              <div className="promotion-data cos-hero" hidden data-slides-index={1}>
                <span className="promo_id">MAGAZINE_PEOPLE_MYHALA_VIDEO</span>
                <span className="promo_name">MAGAZINE_PEOPLE_MYHALA_VIDEO</span>
                <span className="promo_creative">MAGAZINE_PEOPLE_MYHALA_VIDEO</span>
              </div>
            </div>
          </div>
          <div className="text parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="richTextSpan">
                  <div className="o-blog-text is-richtext">
                    <p className="para-1">
                      <b>가스펠 음악의 영향</b>
                      <br />
                      ‘어렸을 때 어머니가 교회 무대에서 합창단과 함께 노래를 부르고, 집에서 어머니가 녹음한 마할리아
                      잭슨(Mahalia Jackson)의 연주를 들었던 게 기억이 나요. 가스펠 음악을 통해 처음으로 음악에 입문하게
                      된 거죠. 제가 앞으로 하게 될 모든 음악의 기초가 되었던 것 같아요.’
                      <br />
                      <br />
                      <b>떠돌아다니는 유년 시절</b>
                      <br />
                      ‘어렸을 때 한 곳에서 다른 곳으로 거처를 옮기면서 안 좋았던 점은 마음을 열고 친해진 친구를 곧
                      떠나야 한다는 점이었어요. 그렇지만 반대로 생각하면 항상 새로운 친구를 사귀어야 한다는 점에서
                      현실을 받아들이고 떠돌아다니는 상황에 마음을 열게 되었어요. 모든 도시에는 고유한 에너지와 분위기가
                      있고, 그 점이 지금 제 음악 활동에 많은 영향을 미치는 것 같고, 지금의 제가 된 것 같아요.’
                      <br />
                      <br />
                      <b>힙합을 찾아서</b>
                      <br />
                      ‘힙합은 어디서나 들을 수 있었지만, 제가 직접 힙합을 탐구하고 작업해 봐야 겠다고 생각한 건,
                      여동생이 힙합에 빠졌다는 걸 알았기 때문이에요. 자신이 잘할 수 있는 걸 보여줄 수 있는 가족이 있는
                      건 정말 좋은 것 같아요. 특히 그땐 인터넷이 없었기 때문에 함께할 수 있는 가족의 존재가 더
                      소중했죠.’
                      <br />
                      <br />
                      <b>딥 사우스</b>
                      <br />
                      ‘친한 친구들과 저는 운이 좋게도 라페이스 레코드(LaFace Records)에 들어가서 뛰어난 재능을 지닌
                      애틀랜타 아티스트들과 함께 활동할 수 있게 되었어요. 젊고 유능한 아티스트들과 어울리며 혼자서는
                      결코 상상할 수 없었던 방식으로 음악적인 관점과 목표를 넓힐 수 있었어요.’
                      <br />
                      <br />
                      <b>나만의 목소리</b>
                      <br />
                      ‘음악을 하면서 자기 자신만의 색깔이 있는 목소리를 찾아야 한다고 생각해요. 요즘 랩 분야에서는 인기
                      있는 스타일이 있으면 그 스타일에 편승하려는 것 같아요. 그렇지만, 음악 활동을 하면서 제일 중요한 건
                      다른 사람을 따라 하지 않고 개성이 있어야 한다고 생각해요. 자기 자신만의 목소리를 찾아 음악을
                      보여주는 게 가장 중요하다고 느껴요.’
                      <br />
                      <br />
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
                style={{ backgroundImage: 'none', backgroundColor: '#ffffff' }}
              >
                <div className="content">
                  <div className="scrollable-content">
                    <div className="column" />
                    <div className="column">
                      <div className="freetile parbase section">
                        <div className="m-free-tile three-cols" style={{ clear: 'both', backgroundColor: '#ffffff' }}>
                          <a href="#" target="_self">
                            <div className="image-container">
                              <div>
                                <img
                                  className="a-image"
                                  src="https://image.thehyundai.com/cos/hyundai/2023/8/29/750x1000_AW23_CAMPAIGN_005.jpg"
                                  alt="Alternate Image"
                                />
                              </div>
                            </div>
                          </a>
                          <div className="headline-preamble-wrapper">
                            <div style={{ color: '#444444' }} className="q-giga is-richtext">
                              <p
                                className="caption-1"
                                style={{
                                  fontSize: 14,
                                  lineHeight: '19px',
                                  fontWeight: 400,
                                  letterSpacing: '0.04em',
                                  textAlign: 'left',
                                }}
                              >
                                커티스가 착용한{' '}
                                <a href="https://www.cos.com/ko-kr/men/suits-and-tailoring/blazers.html">블레이저</a>와
                                <a href="https://www.cos.com/ko-kr/men/trousers.html">트라우저</a>, 모두 COS 제품
                              </p>
                            </div>
                          </div>
                          <div className="promotion-data cos-freetile" hidden data-slides-index={2}>
                            <span className="promo_id">IMAGE_ONE</span>
                            <span className="promo_name">MAGAZINE_KIERAN</span>
                            <span className="promo_creative">IMAGE_ONE</span>
                          </div>
                          <span className="promoIndex" hidden>
                            [object Object]
                          </span>
                        </div>
                        <div className="items" />
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
                    <p className="pull-quote1">
                      ‘자신만의 방식으로 표현하는 방법을 배우는 게 중요하다고 느껴요.’
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
                    <p className="para-1">
                      <b>슬롭 앤 소울</b>
                      <br />
                      ‘슬롭 앤 소울은 팔러먼트 펑커델릭(Parliament-Funkadelic)의 코스믹 슬롭(Cosmic Slop)에서 따왔고,
                      펑크와 제 음악의 플로우를 잘 설명해 준다고 생각해요. 그리고 인위적이지 않은 방식으로 음악을 믹스한
                      것이 특징이에요. 다양한 스타일의 음악이 좋아서 음악 활동을 꾸준히 이어나갈 수 있는 것 같아요. 예를
                      들어, 소울풀한 음악을 들어야만 음악적인 소울이 생기는 것 아닌 것 같고, 펑크(Punk)나 드림 팝(Dream
                      pop)처럼 다른 음악 장르에 빠져도 여전히 소울풀한 음악을 할 수 있다고 느껴요.’
                      <br />
                      <br />
                      <b>스타일 아이콘</b>
                      <br />
                      ‘슬라이 스톤(Sly Stone)은 펑커델릭(Funkadelic)과 데이비드 보위(David Bowie)처럼 저한테 많은 영향을
                      주는 인물이에요. 특히 슬라이 스톤이 다양한 단계를 거쳐간 방식이 인상 깊었죠. 그리고 아웃캐스트나
                      씨로 같은 뮤지션으로부터 영감을 받는 편이에요. 그렇지만, 제 어머니도 스타일 아이콘 중 하나예요.
                      그리고 삼촌처럼 저와 가까운 사람들이라고 생각해요. 흔히 사람들은 스타일 아이콘으로 유명한 사람들을
                      찾는 경우가 많지만, 이웃이나 바로 옆에 있는 사람들도 스타일 아이콘이 될 수 있어요.’
                      <br />
                      <br />
                      <b>음악을 넘어</b>
                      <br />
                      ‘친구들과 대본을 쓰고 연기도 해봤어요. 햅 앤 레너드(Hap and Leonard)라는 넷플릭스(Netflix)
                      시리즈에 출연했고 게이트웨이(The Gateway)라는 영화에서 설교자 역할을 맡았죠. 음악, 영화, 그리고
                      사진까지 모든 분야는 저에게 다양한 영향을 주는 것 같아요. 자신에게 한계를 둘 필요는 없다고 봐요.’
                      <br />
                      <br />
                      <b>앞으로의 계획</b>
                      <br />
                      ‘음악 활동을 꾸준히 이어나갈 것 같아요. 지금처럼 자주 투어를 하게 될지는 모르겠지만, 음악 활동을
                      멈추진 않을 것 같아요. 다른 아티스트나 대형 합창단과도 더 많은 작업을 하고 싶어요. 그리고 음악
                      큐레이팅에 관심이 많아서 앞으로도 더 많은 협업을 하려고 해요. 전 아마 80살까지 투어를 계속했던
                      비비 킹(B.B. King)처럼 죽을 때까지 음악 활동을 계속할 것 같아요.’
                      <br />
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
                    <p className="para-1">
                      <b>Q&amp;A</b>
                      <br />
                      <br />
                      <b>가장 좋아하는 가스펠 아티스트는 누구인가요?</b>
                      <br />
                      마할리아 잭슨(Mahalia Jackson)이죠.
                      <br />
                      <br />
                      <b>
                        최근 구입한 음반은 무엇인가요?
                        <br />
                      </b>
                      엘 미쉘스 어페어(El Michels Affair)와 블랙 소트(Black Thought)의 글로리어스 게임(Glorious
                      Game)이에요.
                      <br />
                      <br />
                      <b>
                        가장 좋아하는 애틀랜타의 레스토랑은 어디인가요?
                        <br />
                      </b>
                      가장 좋아하는 레스토랑인 샨터렐(Chanterelle)은 문을 닫았지만, 요즘엔 이츠(Eats)의 요리도 좋아해요.
                      <br />
                      <br />
                      <b>
                        좋아하는 패션 아이템이 있나요?
                        <br />
                      </b>
                      오래된 빈티지{' '}
                      <a href="https://www.cos.com/ko-kr/men/t-shirts.html">
                        <u>티셔츠</u>
                      </a>
                      를 선호해요.
                      <br />
                      <br />
                      <b>공연해 보고 싶은 장소가 있나요?</b>
                      <br />
                      어디서 공연을 하는 것보다 어떤 사람과 함께 하는지가 더 중요해요. 모든 사람들이 즐거운 시간을 보낼
                      수 있도록 공연을 하려고 해요. 왜냐하면 음악이란 존재는 모든 사람들을 하나로 만들어주는 역할이기
                      때문이죠.
                      <br />
                      <br />
                      <br />
                      앤디 토마스(Andy Thomas) 글
                      <br />
                      커티스 하딩(Curtis Harding) COS 2023 가을 겨울 컬렉션 착용
                      <br />
                      다니엘 잭슨(Daniel Jackson) 사진
                      <br />
                      제인 하우(Jane How) 스타일링
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="keyline parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
              <hr className="a-keyline" />
            </div>
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className=" relative" style={{ maxWidth: 'unset' }}></div>
          </div>
          <div className="share parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
              <div className="o-social-share">
                <h2 className="a-heading-2 share-media-title">share</h2>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.cos.com/ko-kr/magazine/people/interview-will-poulter-aw23.html "
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-link"
                >
                  <span className="a-icon-social-facebook" role="link" aria-label="Facebook" />
                </a>
                <a
                  href="http://pinterest.com/pin/create/button/?url=https://www.cos.com/ko-kr/magazine/people/interview-will-poulter-aw23.html "
                  data-pin-custom="true"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-link"
                >
                  <span className="a-icon-social-pinterest" role="link" aria-label="Facebook" />
                </a>
                <a
                  href="https://twitter.com/home?status=https://www.cos.com/ko-kr/magazine/people/interview-will-poulter-aw23.html "
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-link"
                >
                  <span className="a-icon-social-twitter" role="link" aria-label="Facebook" />
                </a>
                <a
                  href="http://www.tumblr.com/share?v=3&u=https://www.cos.com/ko-kr/magazine/people/interview-will-poulter-aw23.html "
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
                  <div className="o-hero" style={{ marginBottom: 20 }}>
                    <div className="m-teaser align-middle align-center mobile-middle">
                      <p className="keep-reading">Keep reading</p>
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
                          <a href="https://www.cos.com/ko-kr/magazine/people/interview-kelela-aw23.html" target="_self">
                            <div className="image-container">
                              <div>
                                <img
                                  className="a-image"
                                  src="https://image.thehyundai.com/cos/hyundai/2023/8/29/750x1000_AW23_CAMPAIGN_021.jpg"
                                  alt="New view with Myha’la Herrold"
                                />
                              </div>
                            </div>
                          </a>
                          <div className="headline-preamble-wrapper">
                            <div style={{ color: '#444444' }} className="q-alpha4 is-richtext">
                              <p className="tile-headline" style={{ fontSize: 24, lineHeight: '30px' }}>
                                연약함의 새로운 의미
                              </p>
                              <p>자신만의 음악의 의미를 찾고 연약함을 받아들이는 싱어송라이터.</p>
                            </div>
                          </div>
                          <div className="cta-wrapper">
                            <a
                              href="https://www.cos.com/ko-kr/magazine/people/interview-kelela-aw23.html"
                              target="_self"
                              className="a-link cta-link unsmart-underline"
                              data-value="read more"
                            >
                              더 보기
                              <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                                더 보기
                              </span>
                            </a>
                          </div>
                          <div className="promotion-data cos-freetile" hidden data-slides-index={3}>
                            <span className="promo_id">MAGAZINE_KIERAN_CULKIN_MYHALA</span>
                            <span className="promo_name">MAGAZINE_KIERAN_CULKIN</span>
                            <span className="promo_creative">MAGAZINE_KIERAN_CULKIN_MYHALA</span>
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
                            href="https://www.cos.com/ko-kr/magazine/people/interview-will-poulter-aw23.html"
                            target="_self"
                          >
                            <div className="image-container">
                              <div>
                                <img
                                  className="a-image"
                                  src="https://image.thehyundai.com/cos/hyundai/2023/8/29/750x1000_AW23_CAMPAIGN_022.jpg"
                                  alt="Light Within with Sheila Atim"
                                />
                              </div>
                            </div>
                          </a>
                          <div className="headline-preamble-wrapper">
                            <div style={{ color: '#444444' }} className="q-alpha4 is-richtext">
                              <p className="tile-headline" style={{ fontSize: 24, lineHeight: '30px' }}>
                                배우 윌 폴터가 말하는 사회적 책임감
                              </p>
                              <p>
                                가디언즈 오브 갤럭시 3에 출연한 영국 배우 윌 폴터는 사람들에게 긍정적인 영향을 주는
                                대화와 함께 있을 때의 즐거움에 대해 이야기합니다.
                              </p>
                            </div>
                          </div>
                          <div className="cta-wrapper">
                            <a
                              href="https://www.cos.com/ko-kr/magazine/people/interview-will-poulter-aw23.html"
                              target="_self"
                              className="a-link cta-link unsmart-underline"
                              data-value="read more"
                            >
                              더 보기
                              <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                                더 보기
                              </span>
                            </a>
                          </div>
                          <div className="promotion-data cos-freetile" hidden data-slides-index={4}>
                            <span className="promo_id">MAGAZINE_KIERAN_CULKIN_SHEILA</span>
                            <span className="promo_name">MAGAZINE_KIERAN_CULKIN</span>
                            <span className="promo_creative">MAGAZINE_KIERAN_CULKIN_SHEILA</span>
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
