import { Metadata } from 'next';
import FreeHtml from '@/views/freehtml/FreeHtml';

export const metadata: Metadata = {
  title: '2023 가을 겨울 런웨이',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n@media (min-width: 768px){\n.o-square .cell{width: 50%;}\n.o-square .cell:last-child{width: 50%; margin-bottom: 0;}\n}\n.col6_custom .o-square {margin-bottom: 0;}\n.col6_custom .is-four-cols{margin-top: 20px;}\n.o-grid-controller.is-four-cols .content .scrollable-content{padding: 0;}\n\n\n@media (max-width: 767px){\n.o-text-block.u-float-center{padding-left: 20px; padding-right: 20px;}\n}\n',
          }}
        />
        <div className="hero parbase section">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="contain" style={{ maxWidth: '100%', padding: 0 }}>
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="o-hero has-video" style={{ margin: '0 0 50px', padding: 0, width: '100%' }}>
                  <div className="m-video-tile ratio">
                    <div className="a-youtube-video" data-mute="true">
                      <iframe
                        style={{ width: '100%', height: '100%' }}
                        // type="text/html"
                        width={720}
                        height={405}
                        src="https://www.youtube.com/embed/Dbf8M3kf4dE?si=XGQVYYyMqPVwjjUy"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width" id="runway_title">
          <div className="contain">
            <div className="o-text-block u-float-center u-align-center">
              <div className="heading-section">
                <h1 className="title-1 " style={{ cursor: 'default' }}>
                  2023 가을 겨울 런웨이
                </h1>
              </div>
              <div className="preamble-section">
                <p className="preamble-1" style={{ cursor: 'default' }}>
                  뉴욕패션위크에서 선보인 런웨이 영상을 감상해 보세요.
                </p>
              </div>
              <div className="anchor-section">
                <a className="anchor" href="#runway" style={{ textDecoration: 'none' }}>
                  <u>런웨이 쇼핑하기</u>
                </a>
                <a className="anchor" href="#campaign" style={{ textDecoration: 'none' }}>
                  <u>캠페인 보러가기</u>
                </a>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n#runway_title h1{margin: 0;}\n#runway_title .heading-section{margin-bottom: 50px;}\n#runway_title .preamble-section{margin-bottom: 50px;}\n#runway_title .title-1{font-size: 40px; line-height: 1.2em;}\n#runway_title .title-2{font-size: 20px; line-height: 1.2em;}\n#runway_title .preamble-1{font-size: 16px; line-height: 1.2em;}\n#runway_title .anchor{display: inline-block; margin: 0 5px;}\n@media (max-width: 767px){\n  #runway_title .title-1{font-size: 28px;}\n}\n',
          }}
        />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
          <hr className="a-keyline" />
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          {/* o-text-block */}
          <div className="o-text-block u-float-center ">
            <div className="headign-section">
              <h1 className="a-heading-1 " style={{ cursor: 'default' }}>
                룩
              </h1>
            </div>
            <div className="preamble-section">
              <p className="a-paragraph " style={{ cursor: 'default' }}>
                맨해튼의 클래식 카 클럽을 배경으로 펼쳐진 2023 가을 겨울 컬렉션은 기존 COS 컬렉션의 본질에서 나아가
                대조에 대한 탐구로 이어진 점이 특징입니다.
              </p>
            </div>
          </div>
          {/*// o-text-block */}
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
          <hr className="a-keyline" />
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          {/* o-text-block */}
          <div className="o-text-block u-float-center ">
            <div className="headign-section">
              <h1 className="a-heading-1 " style={{ cursor: 'default' }}>
                디테일
              </h1>
            </div>
            <div className="preamble-section">
              <p className="a-paragraph " style={{ cursor: 'default' }}>
                서로 다른 요소를 믹스해 재정의한 컬렉션을 만나보세요. 유기적인 형태와 기하학적인 형태, 광택 있는 질감과
                매트한 질감, 전통적인 요소와 혁신적인 요소를 결합했습니다.
              </p>
            </div>
          </div>
          {/*// o-text-block */}
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div className="col6_trigger" />
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
          <hr className="a-keyline" />
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          {/* o-text-block */}
          <div className="o-text-block u-float-center ">
            <div className="headign-section">
              <h1 className="a-heading-1 " style={{ cursor: 'default' }}>
                게스트
              </h1>
            </div>
            <div className="preamble-section">
              <p className="a-paragraph " style={{ cursor: 'default' }}>
                2023 가을 겨울 런웨이를 방문해 자리를 빛낸 게스트. 조디 터너 스미스, 조슈아 잭슨, 수키 워터하우스, 카밀
                로우, 에반 목, 하트 에반젤리스타와 하리 네프, 그리고 캠페인 모델 켈렐라와 커티스 하딩까지 함께했습니다.
              </p>
            </div>
          </div>
          {/*// o-text-block */}
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-cols-hero">
              <style
                dangerouslySetInnerHTML={{
                  __html: '\n.o-hero{width:100%;}\n.o-hero .m-teaser {max-width:100%;}\n',
                }}
              />
              1
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
          <hr className="a-keyline" />
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div id="campaign" style={{ clear: 'both' }} />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n.o-flexible-listing .o-text-block .cta-section .a-button{font-size:14px;}\n@media (min-width: 768px){\n.o-flexible-listing.image-right .content{display: flex; flex-direction: row; align-items: center;}\n.o-flexible-listing.image-right .content .o-text-block{width: 50%;}\n.o-flexible-listing .flexible-video{width: 50%; padding: 0 10px;}\n}\n@media (max-width: 767px){\n.o-flexible-listing.image-right .content .o-text-block{padding: 40px 0;}\n}\n',
              }}
            />
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
              {/* Image left - title, preamble, cta */}
              <div className="o-flexible-listing image-right">
                <div className="content">
                  <img
                    className="flexible-video"
                    src="https://image.thehyundai.com/cos/hyundai/2023/9/14/AW23-Campaign-Runway-LP-EU.jpg"
                  />
                  <div className="o-text-block">
                    <div className="headign-section">
                      <h1 className="a-heading-1 " style={{ cursor: 'default' }}>
                        2023 가을 겨울 캠페인
                      </h1>
                    </div>
                    <div className="preamble-section" style={{ maxWidth: 500 }}>
                      <p className="a-paragraph " style={{ cursor: 'default' }}>
                        포토그래퍼 다니엘 잭슨이 담아낸 가을 겨울 캠페인. 배우 윌 포터와 하바나 로즈 리우, 그리고
                        싱어송라이터이자 프로듀서 켈렐라와 싱어송라이터이자 배우 커티스 하딩이 함께한 최신 캠페인을
                        확인해 보세요.
                      </p>
                    </div>
                    <div className="cta-section">
                      <div className="m-double-button">
                        <a
                          target="_self"
                          className="a-button  unsmart-underline"
                          href="https://www.cos.com/ko-kr/campaign/autumn-winter-2023-womenswear.html"
                        >
                          여성 컬렉션
                          <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                            여성 컬렉션
                          </span>
                        </a>
                        <a
                          target="_self"
                          className="a-button  unsmart-underline"
                          href="https://www.cos.com/ko-kr/campaign/autumn-winter-2023-menswear.html"
                        >
                          남성 컬렉션
                          <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                            남성 컬렉션
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div id="runway" style={{ clear: 'both' }} />
            <style
              dangerouslySetInnerHTML={{
                __html: '\n.u-row > .o-text-block.u-float-center{padding-top: 0;padding-bottom:0;}\n',
              }}
            />
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              {/* o-text-block */}
              <div className="o-text-block u-float-center u-align-center">
                <div className="headign-section">
                  <h1 className="a-heading-1 q-mega" style={{ cursor: 'default' }}>
                    여성 컬렉션
                  </h1>
                </div>
              </div>
              {/*// o-text-block */}
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
          <hr className="a-keyline" />
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          {/* o-text-block */}
          <div className="o-text-block u-float-center u-align-center">
            <div className="headign-section">
              <h1 className="a-heading-1 q-mega" style={{ cursor: 'default' }}>
                남성 컬렉션
              </h1>
            </div>
          </div>
          {/*// o-text-block */}
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
          <hr className="a-keyline" />
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div id="cqcanvas">
            <div className="chips">
              {/* <p>더 많은 아이템 살펴보기</p> */}
              <div className="scrollable-content" style={{ whiteSpace: 'normal', height: 'auto' }}>
                <a href="https://www.cos.com/ko-kr/women/new-arrivals.html">여성 신상품</a>
                <a href="https://www.cos.com/ko-kr/women/knitwear.html">여성 니트웨어</a>
                <a href="https://www.cos.com/ko-kr/men/new-arrivals.html">남성 신상품</a>
                <a href="https://www.cos.com/ko-kr/men/knitwear.html">남성 니트웨어</a>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n    .chips {display: block; width: 100%; margin: 50px auto 0;}\n    .chips p {font-size: 20px; line-height: 24px; letter-spacing: .02em; color: #1b1b1b; text-align: center; width: 100%; margin: 0 auto 20px auto;}\n    .chips a {display: inline-block; text-transform: uppercase; text-decoration: none; letter-spacing: .0825em; cursor: pointer; text-align: center; padding: 10px 12px 6px; margin: 4px 4px 8px 0; border: 1px solid #1b1b1b; color: #1b1b1b; font-size: 12px; line-height: 17px;}\n    .chips a:hover {background-color: #1b1b1b; color: #ffffff;}\n    .chips .scrollable-content {position: relative; padding: 0px 10px; overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: nowrap; text-align: center;}\n    @media (min-width: 1025px) {\n      .chips {width: 70%; margin-top: 60px; margin-bottom: 10px;}\n      .chips p {font-size: 24px; line-height: 28px;}\n       /* .chips a {text-transform: initial; letter-spacing: .04em; font-size: 13px; line-height: 18px;} */\n    }\n ',
              }}
            />
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
