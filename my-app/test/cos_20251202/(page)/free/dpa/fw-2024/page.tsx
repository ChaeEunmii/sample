import { Metadata } from 'next';
import FreeHtml from '@/views/freehtml/FreeHtml';

export const metadata: Metadata = {
  title: '2024 가을 겨울 런웨이',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section fw-runway-2024">
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div
              className="hero-image-background u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width"
              id="cos_video_box"
            >
              <div className="contain">
                <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
                  <div className="o-hero" style={{ marginTop: 0, marginBottom: 0 }}>
                    <div
                      data-component="APicture"
                      className="a-picture"
                      data-component-id="8e9bd06f-37ec-4b37-9731-857ba8de6092"
                    >
                      <video className="pc" style={{ width: '100%' }} autoPlay loop muted playsInline>
                        <source
                          src="https://image.thehyundai.com/cos/hyundai/2024/9/mp4/Runway/KR COS_FW24_TEASER_01_16x10.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <video id="mvideo" className="mo" style={{ width: '100%' }} autoPlay loop muted playsInline>
                        <source
                          src="https://image.thehyundai.com/cos/hyundai/2024/9/mp4/Runway/KR COS_FW24_TEASER_01_16x10.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div
                      className="m-teaser mobile-align-middle mobile-align-left tablet-align-middle tablet-align-center desktop-align-middle desktop-align-center text-align-center"
                      style={{ zIndex: 5 }}
                    ></div>
                  </div>
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n    @media (min-width:787px) {\n        .mo {\n            display: none\n        }\n    }\n\n    @media (max-width:786px) {\n        .pc {\n            display: none\n        }\n\n        .mo {\n            display: block;\n        }\n    }\n\n    .hero-image-background .contain>div .a-heading-1 {\n        font-size: 30px !important;\n        line-height: 1.2em;\n    }\n\n    .hero-image-background .o-hero .a-picture+.m-teaser {\n        width: auto;\n        max-width: 1000px;\n    }\n\n    .hero-image-background.u-cols-sm-12-12 .contain>div p {\n        font-size: 18px !important;\n        line-height: 23px;\n    }\n\n    .a-button.sale {\n        width: 240px;\n        display: inline-block;\n        margin: 10px 4px 0;\n        padding: 12px 9px 8px 9px;\n        background: #fff;\n        border: 1px solid #fff;\n        color: #000;\n        font-size: 13px;\n        line-height: 21px;\n        font-weight: normal;\n        text-align: center;\n    }\n\n    .a-button.sale:hover {\n        opacity: 0.9;\n    }\n\n    .a-button.sale .unsmart-underline-underline {\n        display: none;\n    }\n\n    #cos_video_box img {\n        cursor: pointer;\n    }\n\n    #cos_video_box .o-hero {\n        width: 100%;\n    }\n\n    @media(max-width:767px) {\n        #cos_video_box {\n            margin: 0;\n        }\n\n        .hero-image-background .o-hero .a-picture+.m-teaser {\n            width: 100%;\n            padding: 0 10px;\n        }\n\n        .hero-image-background .contain>div .a-heading-1 {\n            font-size: 30px !important;\n            line-height: 36px;\n        }\n\n        .hero-image-background.u-cols-sm-12-12 .contain>div p {\n            font-size: 15px !important;\n            line-height: 19px;\n        }\n\n        .custom_align_bottom {\n            bottom: 30px;\n        }\n\n        .cta-container {\n            display: flex;\n            justify-content: center;\n            flex-direction: column;\n            align-items: center;\n        }\n\n        #cos_video_box .wn_btn,\n        #cos_video_box .mn_btn {\n            display: none;\n        }\n\n        #cos_video_box .m-teaser {\n            top: 40%;\n            bottom: 66px;\n            transform: translateX(-50%);\n        }\n    }\n\n    #cos_video_box.hero-image-background .contain .desktop-left .a-heading-1 {\n        font-size: 26px !important;\n        line-height: 34px;\n    }\n\n    #cos_video_box.hero-image-background .contain .desktop-left p {\n        font-size: 16px !important;\n        line-height: 21px;\n    }\n\n    @media (min-width: 1025px) {\n        #cos_video_box .o-hero .m-teaser.desktop-left {\n            text-align: left !important;\n            left: 40px;\n            transform: translate(0, -50%);\n        }\n\n        #cos_video_box.hero-image-background .contain .desktop-left .a-heading-1 {\n            font-size: 30px !important;\n            line-height: 34px;\n        }\n\n        #cos_video_box.hero-image-background .contain .desktop-left p {\n            font-size: 16px !important;\n            line-height: 21px;\n        }\n\n\n        #cos_video_box .o-hero .a-picture+.m-teaser.desktop-align-middle.m-teaser.desktop-align-center {\n            position: static;\n            transform: none;\n        }\n\n        #cos_video_box .first-button,\n        #cos_video_box .second-button {\n            position: absolute;\n            top: 50%;\n            margin: 0;\n            transform: translateY(-50%);\n            z-index: 1;\n        }\n\n        #cos_video_box .first-button {\n            left: calc(25% - 120px);\n        }\n\n        #cos_video_box .second-button {\n            right: calc(25% - 120px);\n        }\n    }\n\n    @media (min-width: 767px) {\n\n        #cos_video_box .wn_btn,\n        #cos_video_box .mn_btn {\n            display: block;\n            position: absolute;\n            width: 50%;\n            height: 100%;\n            z-index: 1;\n            top: 0;\n        }\n\n        #cos_video_box .wn_btn {\n            right: 0;\n        }\n\n        #cos_video_box .mn_btn {\n            left: 0;\n        }\n    }\n',
                }}
              />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n#cos_video_box .o-hero {\n    display: none;\n}\n\n\n@media (min-width:1025px) {\n.o-hero{width:100%; margin-top:0;}\n}\n@media (min-width:1px) and (max-width: 767px) {\n.o-hero{margin-top:0;}\n}\n',
                }}
              />
            </div>
          </div>
          <div className="hero parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                  <div className="o-hero hero no-image" style={{ backgroundColor: '#FFFFFF' }}>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n                 @media (max-width: 1024px) {\n                 }\n                 @media (min-width: 1025px) {\n                 }\n                 .swiper-slider .o-hero{\n                 width: 100%; !important\n                 }\n              ',
                      }}
                    />
                    <div className="m-teaser align-middle align-center mobile-middle">
                      <p className="a-paragraph q-body-copy-1" style={{ color: '#1B1B1B', fontWeight: 600 }}>
                        <br /> NEW YORK FASHION WEEK
                      </p>
                      <p style={{ fontWeight: 600 }}>
                        SEPT 11 <br />
                      </p>
                      <p style={{ fontWeight: 600 }}>
                        2AM KST <br />
                        <br /> <br />
                      </p>
                      <p>
                        이번 시즌, 뉴욕에서 2024 가을 겨울 런웨이를 선보입니다. <br />
                        장인 정신과 혁신, 타임리스 디자인을 구현한 컨템포러리 워드로브 아이콘을 런웨이에서 만나보세요.
                        <br />
                        <br />
                        <br />
                        인스타그램 @cosstores 계정에서 라이브 스트리밍으로 감상해 보세요.
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
                  <div className="o-blog-text is-richtext">
                    <p
                      className="socials"
                      style={{
                        fontSize: '14.0px',
                        lineHeight: '20.0px',
                        textAlign: 'center',
                      }}
                    >
                      <a
                        href="https://www.instagram.com/cosstores/"
                        target="_blank"
                        className="a-link has-underline"
                        style={{ textDecoration: 'none', fontSize: 12 }}
                      >
                        <span className="underline">인스타그램 팔로우하기</span>
                      </a>
                      &nbsp; &nbsp; &nbsp; &nbsp;
                      <br /> <br /> <br /> <br />
                    </p>
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
