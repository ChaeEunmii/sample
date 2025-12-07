import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'People: Kelela - COS KR',
};

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
                    <p className="article-headline">연약함의 새로운 의미</p>
                    <p className="article-headline-sub">
                      장르를 넘나들며 2집 앨범 레이븐을 발매한 지 얼마 되지 않은 싱어송라이터 켈렐라에게는 개방성과
                      연약함을 포용하고 두려움에 정면으로 맞서는 힘이 있습니다.
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
                                  src="https://image.thehyundai.com/cos/hyundai/2023/8/29/750x1000_AW23_CAMPAIGN_021.jpg"
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
                                켈렐라가 착용한{' '}
                                <a href="https://www.cos.com/ko-kr/women/coatsjackets/blazers.html">블레이저</a>와
                                <a href="https://www.cos.com/ko-kr/women/trousers.html">트라우저</a>, 모두 COS 제품
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
                      켈레라(Kelela)의 음악에는 과거와 현재 그리고, 미래와의 대화가 담겨있습니다. 싱어송라이터이자
                      프로듀서인 켈렐라는 2013년 첫 번째 믹스테이프 컷 포 미(Cut 4 Me)를 발표한 후 주목을 받게 되었고,
                      이 곡은 10년이 지난 지금 들어도 신선한 느낌을 유지하는 음악입니다.
                      <br />
                      <br />
                      켈레라는 데뷔하면서 기존 뮤지션과 같이 카테고리화되길 원하지 않았고, 무드와 템포를 쉽게 바꾸면서
                      작업할 수 있는 환경을 조성하려고 했습니다. 메릴랜드(Maryland)에서 자라면서 들었던 알앤비(RnB)의
                      톤, 그라임(Grime)과 드럼 앤 베이스(drum &amp; bass), 힙합 리듬(hip-hop rhythm), 그리고 중심에는
                      켈렐라만이 가지고 있는 풍부하면서 넓은 음역대의 보컬이 두드러졌습니다. 켈렐라는 어릴 때부터 부모님
                      덕분에 다양한 음악 취향에 따라 장르를 원활하게 넘나들며 음악을 들었습니다. ‘어릴 때부터 다양한
                      음악 장르를 들어보고 소화하려고 했어요. 덕분에 저만의 개성 있는 음악 활동을 시작할 수 있었던 것
                      같아요.’
                      <br />
                      <br />
                      첫 번째 정규 앨범인 테이크 미 아파트(Take Me Apart)는 2017년에 발매되어 혁신적인 뮤지션이라는
                      명성을 얻게 만들어줬습니다. 이 앨범은 소울풀한 보컬과 리드미컬한 비트를 융합해 팝의 새로운 모습을
                      보여줬습니다. 이후 공백기가 있었지만, 오히려 이를 통해 사람들은 켈렐라가 언제 컴백할지에 대해
                      추측하게 되었습니다. ‘제가 언제 컴백할지에 대한 사람들의 이야기는 대부분 따뜻하고 힘이 되는
                      느낌이라 크게 신경 쓰진 않았어요.’
                      <br />
                      <br />
                      2023년 초에 레이븐(Raven)이 발매되었을 때, 많은 시간을 기다린 만큼 두 번째 앨범은 사운드와
                      주제에서 뚜렷한 발전이 있었습니다. 시카고(Chicago)에서 볼티모어(Baltimore), 저지(Jersey)에
                      이르기까지, 클럽 씬을 탐구하는 켈렐라는 새로운 음악 장르의 중심에 있는 흑인 여성에게 존경을
                      표현하며 흑인 퀴어 관객들에게 이야기를 전달하게 되었습니다.
                      <br />
                      <br />
                      레이븐 이후의 켈렐라의 삶과 유니크한 사운드의 탄생에 대해 이야기하면서, 결과적으로 연약함에 대한
                      이야기로 주제는 돌아오게 됩니다. 선천적이든 의도적이든 명백하게 드러나는 켈렐라의 주제는
                      심플합니다. &apos;사람들이 서로 공유할 뿐만 아니라 자기 자신과도 친밀하게 공유할 수 있는
                      사운드트랙을 만드는 거예요.’
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
                    <p className="pull-quote1">
                      ‘레코드에서 약한 부분이 있는데, 그다음 갑자기 현악기 연주가 시작되는 게 압권이죠. 풍부한 멜로디를
                      바탕으로 드라마틱하게 전개되는 음악을 좋아해요.’
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
                          src="https://player.vimeo.com/video/853289755?badge=0&autopause=0&player_id=0&app_id=58479"
                          frameBorder={0}
                          allow="autoplay; fullscreen; picture-in-picture"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                          }}
                          title="COS AW23 Campaign | Kelela"
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
                      <b>어릴 때부터 받은 음악적인 영향</b>
                      <br />
                      ‘어른이 되고 나서 제가 좋아하는 음악 장르를 되돌아보면, 어릴 때부터 취향이 꽤 확고했다는 걸 알 수
                      있어요. 어머니가 수집한 음반이 많지 않았지만, 각 음반 별로 뚜렷하게 구별되는 음악들이 있었어요.
                      예를 들어, 휘트니 휴스턴(Whitney Houston), 자넷 잭슨(Janet Jackson)과 같은 팝 보컬이나 사라
                      본(Sarah Vaughan), 엘라 피츠제럴드(Ella Fitzgerald)와 같은 재즈 뮤지션이죠. 미리암 마케바(Miriam
                      Makeba)와 호세 펠리시아노(José Feliciano)의 음악을 듣고 피들러 온 더 루프(Fiddler on the Roof)와
                      사운드 오브 뮤직(The Sound of Music)과 같은 뮤지컬 음악도 듣곤 했어요. 아버지 차에서는 트레이시
                      채프먼(Tracy Chapman)과 모타운 히츠(Motown Hits)가 흘러나왔고, 그다음에 티엘씨(TLC), 엔 보그(En
                      Vogue), 솔트 앤 페파(Salt-N-Pepa) 등 RnB 그룹의 노래가 나왔죠.’
                      <br />
                      <br />
                      <b>음악의 테마</b>
                      <br />
                      ‘레이븐은 댄스 음악이라고 할 수 있는 다양한 사운드를 다루지만, 실제로는 다양한 형태의 팝과 흑인
                      음악에 뿌리를 두고 있어요. 그래서 실험적인 알앤비 보컬로 다양한 사운드를 찾는 게 중요하다고
                      생각해요. 대부분 남자들과의 로맨스와 제가 현실적으로 부딪히는 장애물을 음악의 형태로 표현하고
                      있어요’
                      <br />
                      <br />
                      <b>클럽 음악과 함께 발전</b>
                      <br />
                      ‘볼티모어와 가까운 메릴랜드에서 자라면서 댄스 음악이 끊임없이 라디오에서 흘러나왔죠. 클럽 음악은
                      삶의 일부분이었지만 열광할 정도는 아니에요. 개인적으로 힙합이나 알앤비 음악에 더 빠져드는
                      편이었어요. 가스펠과 알앤비 가수들이 선두에 있는 댄스 히트곡을 좋아했는데, 항상 자연스럽게
                      느껴졌어요. 힙합과 소울풀한 트랙과 나란히 할 수 있는 댄스 음악의 능력은 강력한 것 같아요. 사람들이
                      모든 스타일의 음악을 접할 수 있도록 음악 활동을 하면서 노력해왔던 것 같아요.’
                      <br />
                      <br />
                      <b>콜라보레이션과 혼자 작업하는 것</b>
                      <br />
                      ‘스튜디오에서는 프로듀서와 첫 번째 작업을 진행하는 초기 세션이 있고, 사람들 앞에서 즉흥적으로
                      연주해야 할 때 힘든 점이 있어요. 스튜디오 작업이 끝나면 혼자 집에서 남은 음반 작업을 마무리하죠.
                      레이븐은 대부분 혼자서 작업한 음반이고, 친구들한테 들려주면서 어떻게 생각하는지 물어봤었죠. 그
                      후에 코로나가 시작되었고, 저는 혼자 시간을 가지는 것이 음악 작업에 필요하다는 걸 깨닫게 되었어요.
                      현실적으로 제한된 상황 속에서도 음악과 가사에 제가 생각한 주제를 풍부하게 담으려고 했어요.’
                      <br />
                      <br />
                      <b>반대되는 요소</b>
                      <br />
                      ‘클럽 음악을 작업할 때 반대되는 특성을 찾아내는 편이에요. 전반적인 음악에서 반대되는 특성을
                      바탕으로 작업을 전개해요. 가볍고 부드러운 보컬을 표현하는 편이죠. 첫 번째 프로젝트인 믹스테이프를
                      만들 때, 부드러운 목소리와 균형을 맞출 수 있는 반대 요소가 필요했어요. 그래서 다소 투박하고 강한
                      사운드의 드럼과 배경음을 섞으려고 했어요.’
                      <br />
                      <br />
                      <b>사운드가 약한 부분을 섞는 것</b>
                      <br />
                      ‘레코드에서 약한 부분이 있는데, 그다음 갑자기 현악기 연주가 시작되는 게 압권이죠. 풍부한 멜로디를
                      바탕으로 드라마틱하게 전개되는 음악을 좋아해요. 이런 음악은 모든 요소가 슬로우 모션으로 진행되는
                      드라마와 같은 느낌이 들죠. 또한, 클럽에서 사람들이 약한 사운드 부분을 감상할 수 있도록 만들고,
                      이를 통해 클럽과 반대되는 약하고 부드러운 사운드가 부각되며 음악적으로 시너지 효과가 나는 게
                      좋아요.’
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
                                  src="https://image.thehyundai.com/cos/hyundai/2023/8/29/750x1000_AW23_CAMPAIGN_025.jpg"
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
                                켈렐라가 착용한{' '}
                                <a href="https://www.cos.com/ko-kr/women/knitwear/jumpers.html">니트웨어</a>와
                                <a href="https://www.cos.com/ko-kr/women/skirts.html">스커트</a>, 모두 COS 제품
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
                      ‘두려움이 없어졌으면 좋겠지만, 피할 수 없기 때문에 받아들이고 용기를 내어 앞으로 나아가는 것이
                      중요하다고 생각해요.’
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
                      <b>혁신 추구</b>
                      <br />
                      ‘혁신은 이미 존재하는 것과 사람들을 연결하는 새로운 것이라고 생각해요. 사람들의 감정을
                      불러일으키는 거죠. 음악 작업을 할 때 새로운 아이디어인지 스스로 묻는 편이에요. 레이븐 이전에
                      다음에 음반으로 발표할 수 있는 음악이 있었지만, 그 시점에는 그렇게 매력적으로 느껴지지 않았어요.
                      기존에 있는 분위기에서 벗어나 완전히 새로운 음악을 만들고 싶었죠. 제 자신을 한계까지 밀어붙여
                      완전하게 새로워진 음악을 선보이려고 노력해요.’
                      <br />
                      <br />
                      <b>자기표현으로서의 스타일</b>
                      <br />
                      ‘아버지는{' '}
                      <a href="https://www.cos.com/ko-kr/women/view-all.html">
                        <u>옷</u>
                      </a>
                      을 통해 제 자신을 표현할 수 있도록 도와주셨어요. 아버지는 스타일리시했고 퀄리티와 장인 정신에 많은
                      관심을 가지고 계셨죠. 함께 쇼핑에 가서 남성복 코너나 여성복 코너에만 머물진 않았어요. 여성스러운
                      스타일을 찾다가도 톰보이스러운 패션을 시도하고 싶을 때가 있었죠. 아버지와 쇼핑하면서 마음에 드는
                      옷을 찾으면 기뻤던 기억이 나네요. 남성적인 스타일과 여성스러운 스타일 사이를 넘나들며 나만의
                      스타일을 찾는 게 스타일리시하다고 생각하면서 살아왔고, 지금도 여전히 그래요.’
                      <br />
                      <br />
                      <b>에토스</b>
                      <br />
                      ‘자신이 가진 비전에 대해 자세히 설명할수록 더 구체적인 형태로 실현될 것이라고 생각해요. 마찬가지로
                      더 많은 위험을 감수하면 잠재적으로 가능성은 더 높아질 것 같아요. 두려움이 없는 것과 용기가 있는 건
                      차이가 있는 거죠. 그래서 음악 활동을 하면서 두려움이 없어졌으면 좋겠지만, 피할 수 없기 때문에
                      받아들이고 용기를 내어 앞으로 나아가는 것이 중요하다고 생각해요.’
                      <br />
                      <br />
                      <b>레거시</b>
                      <br />
                      ‘개인적으로 레거시는 가능성을 열어주는 카탈로그 같은 존재라고 생각해요. 서로 다른 영역과 공간에
                      걸쳐 있는 사람들을 위한 공간인 거죠. 흑인 여성이라는 정체성을 바탕으로, 저와 같은 사람을 대표하며
                      음악 활동을 할 때 우리의 목소리와 이야기가 널리 퍼질 수 있도록 만들 거예요.’
                      <br />
                      <br />
                      <b>앞으로의 활동 계획</b>
                      <br />
                      ‘레이븐 리믹스 프로젝트를 마무리하고 있는데, 정말 기대돼요. 제 음악을 표현하는 또 다른 방법인 것
                      같아요. 작업이 끝나면 다음 음반 작업으로 넘어갈 거예요.’
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
                      <b>최근 읽은 책은 무엇인가요?</b>
                      <br />
                      돈 미구엘 루이스(Don Miguel Ruiz)의 더 마스터리 오브 러브(The Mastery of Love)예요.
                      <br />
                      <br />
                      <b>
                        다른 곳으로 떠날 수 있다면 어디로 갈 건가요?
                        <br />
                      </b>
                      프랑스 마르세유(Marseille)에 가고 싶어요.
                      <br />
                      <br />
                      <b>
                        가장 좋아하는 영화는 무엇인가요?
                        <br />
                      </b>
                      클레어 데니스(Clarie Denis)의 쇼콜라(Chocolat)나 압델라만 시사코(Abderrahmane Sissko)의
                      바마코(Bamako)라고 생각해요.
                      <br />
                      <br />
                      <b>
                        가장 아끼는 물건이 있다면?
                        <br />
                      </b>
                      물건에 그렇게 집착하는 편은 아니에요. 아마 친구가 준 &apos;K&apos; 목걸이나 제 하드 드라이브에
                      있는 작업 파일이라고 할 수 있겠네요.
                      <br />
                      <br />
                      <b>친구들은 말하는 자신의 모습은 어떤가요?</b>
                      <br />
                      저는 잘 모르겠는데, 너무 분석적인 성격이거나 배려심이 많다고 말할 것 같아요.
                      <br />
                      <br />
                      <br />
                      레나 디스탕(Lena Dystant) 글
                      <br />
                      켈렐라(Kelela) COS 2023 가을 겨울 컬렉션 착용
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
                          <a
                            href="https://www.cos.com/ko-kr/magazine/people/interview-havana-rose-liu-aw23.html  "
                            target="_self"
                          >
                            <div className="image-container">
                              <div>
                                <img
                                  className="a-image"
                                  src="https://image.thehyundai.com/cos/hyundai/2023/8/29/750x1000_AW23_CAMPAIGN_028.jpg"
                                  alt="New view with Myha’la Herrold"
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
                              href="https://www.cos.com/ko-kr/magazine/people/interview-havana-rose-liu-aw23.html  "
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
                            href="https://www.cos.com/ko-kr/magazine/people/interview-havana-rose-liu-aw23.html  "
                            target="_self"
                          >
                            <div className="image-container">
                              <div>
                                <img
                                  className="a-image"
                                  src="https://image.thehyundai.com/cos/hyundai/2023/8/29/750x1000_AW23_CAMPAIGN_032.jpg"
                                  alt="Light Within with Sheila Atim"
                                />
                              </div>
                            </div>
                          </a>
                          <div className="headline-preamble-wrapper">
                            <div style={{ color: '#444444' }} className="q-alpha4 is-richtext">
                              <p className="tile-headline" style={{ fontSize: 24, lineHeight: '30px' }}>
                                다시 정의하는 배우의 역할
                              </p>
                              <p>
                                배우이자 모델 하바나 로즈 리우가 고정관념에 도전하며 모순 속에서 아름다움을 찾는 것에
                                대한 의견을 말합니다.
                              </p>
                            </div>
                          </div>
                          <div className="cta-wrapper">
                            <a
                              href="https://www.cos.com/ko-kr/magazine/people/interview-havana-rose-liu-aw23.html  "
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
