import { Metadata } from 'next';
import FreeHtml from '@/views/freehtml/FreeHtml';

export const metadata: Metadata = {
  title: 'COS 아틀리에',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="cos-atelier">
        <div className="content-section">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width" id="collabo_video">
            <div className="o-hero" style={{ marginTop: 0, padding: 0 }}>
              <video className="a-video pc_only" preload="auto" playsInline muted loop autoPlay>
                <source
                  src="https://image.thehyundai.com/cos/hyundai/2024/3/29/COS_ATELIER_WW_6SEC_1920x10801.mp4"
                  type="video/mp4"
                />
              </video>
              <video className="a-video mo_only" id="mvideo" preload="auto" playsInline muted loop autoPlay>
                <source src="https://image.thehyundai.com/cos/hyundai/2024/3/29/Mobile.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n#collabo_video video{width: 100%;}\n.mo_only{display: none;}\n\n@container root (max-width: 767px){\n  .mo_only{display: block;}\n  .pc_only{display: none;}\n}\n',
          }}
        />
        <div id="collabo_box">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="o-text-block u-float-center u-align-center">
              <div className="preamble-section">
                <p className="a-paragraph q-alpha3 " style={{ cursor: 'default' }}>
                  COS 아틀리에는 모던한 스타일에 대한 새로운 관점을 제시합니다. <br />
                  브랜드의 감각과 장인 정신을 기반으로 구현한 컬렉션을 만나보세요.{' '}
                </p>
              </div>
              <div className="cta-section">
                <div className="m-double-button" style={{ textAlign: 'center' }}>
                  <a className="fitguide_btn" href="http://pf.kakao.com/_jGrxkd" target="_blank">
                    카카오톡채널 추가하기
                  </a>
                </div>
                <div className="m-double-button" style={{ textAlign: 'center' }}>
                  <a className="fitguide_btn" href="https://www.instagram.com/cosstores_kr" target="_blank">
                    인스타그램 팔로우하기
                  </a>
                </div>
              </div>
            </div>
            <div className="hero parbase section">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain">
                  <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                    <div className="o-hero" style={{ marginBottom: 20 }}>
                      <div className="m-teaser align-middle align-center mobile-middle">
                        <p className="keep-reading">컬렉션 미리보기</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n    #collabo_box .o-text-block {\n        max-width: 500px;\n        padding-top: 0;\n        padding-bottom: 0;\n    }\n\n    #collabo_box .collabo_logo {\n        margin: 50px auto;\n    }\n\n    .custom_anchor_box {\n        margin: 40px auto;\n        text-align: center;\n    }\n\n    .custom_anchor_box .anchor {\n        display: inline-block;\n        font-size: 16px;\n        line-height: 1.2em;\n        margin-right: 10px;\n    }\n\n    .custom_anchor_box .anchor:last-child {\n        margin-right: 0;\n    }\n\n    .custom_anchor_box .anchor u {\n        text-decoration-thickness: 1px;\n    }\n\n    .cta-section {\n        display: flex;\n        justify-content: center;\n        gap: 20px;\n        margin: 60px;\n    }\n\n    .fitguide_btn {\n        display: inline-block;\n        width: 240px;\n        line-height: 45px;\n        font-size: 13px;\n        color: #fff;\n        background: #1b1b1b;\n    }\n\n    .fitguide_btn:hover {\n        opacity: 0.7;\n    }\n\n    .a-link.has-underline,\n    .is-richtext a.has-underline>span {\n        color: #fff;\n    }\n\n    .keep-reading {\n        font-size: 30px;\n        text-align: center;\n    }\n\n\n    @container root (max-width: 767px) {\n        #collabo_box .o-text-block {\n            margin: 25px auto;\n            padding: 0 15px;\n        }\n\n        #collabo_box .collabo_logo {\n            margin: 25px auto;\n            padding: 0 15px;\n        }\n\n        .cta-section {\n            flex-direction: column;\n        }\n\n    }\n',
              }}
            />
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className=" relative" style={{ maxWidth: 'unset' }}></div>
            </div>
            <div id="collabo_box">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="o-text-block u-float-center u-align-center">
                  <div className="cta-section">
                    <div className="m-double-button" style={{ textAlign: 'center' }}>
                      <a
                        className="fitguide_btn"
                        href="https://www.cos.com/ko-kr/women/new-arrivals.html"
                        target="_self"
                      >
                        여성 신상품 쇼핑하기
                      </a>
                    </div>
                    <div className="m-double-button" style={{ textAlign: 'center' }}>
                      <a className="fitguide_btn" href="https://www.cos.com/ko-kr/men/new-arrivals.html" target="_self">
                        남성 신상품 쇼핑하기
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n  #collabo_box .o-text-block{max-width: 500px; padding-top: 0; padding-bottom: 0;}\n  #collabo_box .collabo_logo{margin: 50px auto;}\n.custom_anchor_box{margin: 40px auto; text-align: center;}\n.custom_anchor_box .anchor{display: inline-block; font-size: 16px; line-height: 1.2em; margin-right: 10px;}\n.custom_anchor_box .anchor:last-child{margin-right: 0;}\n.custom_anchor_box .anchor u{text-decoration-thickness: 1px;}\n.cta-section {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    margin: 60px;\n}\n  .fitguide_btn {\n    display: inline-block;\n    width: 240px;\n    line-height: 45px;\n    font-size: 13px;\n    color: #fff;\n    background: #1b1b1b;\n  }\n  .fitguide_btn:hover {\n    opacity: 0.7;\n  }\n  .a-link.has-underline,\n  .is-richtext a.has-underline > span {\n    color: #fff;\n  }\n\n\n@container root (max-width: 767px){\n  #collabo_box .o-text-block{margin: 25px auto; padding: 0 15px;}\n  #collabo_box .collabo_logo{margin: 25px auto; padding: 0 15px;}\n     .cta-section {\n                                flex-direction: column;\n                            }\n  \n}\n',
              }}
            />
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
