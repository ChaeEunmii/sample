import { Metadata } from 'next';
import FreeHtml from '@/views/freehtml/FreeHtml';

export const metadata: Metadata = {
  title: 'AW22 - COS KR',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n.o-hero.has-video{width: 100%;}\n.button1{text-align:center;letter-spacing:.06em;font-size:13px;margin-right:5px;margin-left:5px;height:45px;width:260px;background-color:#000;border:1px solid #000;color:#fff;padding:12px 9px 12px 8px}\n.parr{display:flex;flex-flow:row wrap;justify-content:center;align-items:center;padding:10px 0}\n.parr2{padding-bottom: 50px;}\n.o-hero .m-teaser .cta-link{display:inline !important}\n\n@container root (min-width:768px){\n  .button1{margin-left:0;display:inline-block}\n}\n\n@media only screen and (min-width:1200px){\n  .o-hero .m-teaser .cta-wrapper .cta-link{margin-left:10px;padding:12px 35px 12px 35px}\n}\n\n@container root (max-width:767px){\n  .title3{width:100%}\n  .button1{width:168px}\n  .parr{text-align:center;display:flex;flex-flow:row;padding: 0;}\n  .parr2{padding-bottom: 30px;}\n  .article-headline{font-size:34px !important;line-height:38px !important}\n  .article-headline2{font-size:29px !important;line-height:35px !important}\n  .o-hero .m-teaser .cta-link{display:block !important}\n}\n',
          }}
        />
        <div className="genericpagepar parsys">
          <div className="text parbase section">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="richTextSpan">
                  <div className="o-blog-text is-richtext">
                    <p
                      style={{
                        textAlign: 'center',
                        fontSize: '14.0px',
                        lineHeight: '19.0px',
                        fontWeight: 400,
                        letterSpacing: '0.04em',
                      }}
                    >
                      Autumn Winter 2022
                    </p>
                    <p
                      style={{
                        letterSpacing: '0.8px',
                        textAlign: 'center',
                        fontSize: '40.0px',
                        lineHeight: '44.0px',
                        paddingTop: '15.0px',
                        paddingBottom: '25.0px',
                      }}
                      className="article-headline"
                    >
                      COS at New York Fashion Week
                    </p>
                    <p
                      style={{
                        textAlign: 'center',
                        fontSize: '15.0px',
                        paddingBottom: '25.0px',
                        lineHeight: '19.0px',
                      }}
                      className="article-headline-sub"
                    >
                      런웨이 영상을 확인하고 컬렉션을 쇼핑해보세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="freehtmlimporter importer section">
            <div>
              <div className="canvas">
                <div className="parbase hero section">
                  <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width category-push-background">
                    <div className="parr">
                      <a className="link1 button1" href="#women">
                        여성 컬렉션
                      </a>
                      <a className="link2 button1" href="#men">
                        남성 컬렉션
                      </a>
                    </div>
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
                      <div className="a-youtube-video" data-mute="true">
                        <iframe
                          style={{ width: '100%', height: '100%' }}
                          width={720}
                          height={405}
                          src="https://www.youtube.com/embed/v1cU_ksPT9g?color=white&autoplay=1&controls=0&fs=0&rel=0&showinfo=0&loop=1&playlist=v1cU_ksPT9g&autohide=2&enablejsapi=1&mute=1&playsinline=1"
                          allow="autoplay"
                          frameBorder={0}
                          allowFullScreen
                          title="COS AW22"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="promotion-data cos-hero" hidden data-slides-index={0}>
                <span className="promo_id">AW22_LIVESTREAM</span>
                <span className="promo_name">AW22</span>
                <span className="promo_creative">AW22_LIVESTREAM</span>
              </div>
            </div>
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className=" relative" style={{ maxWidth: 'unset' }}>
              <div id="women" style={{ position: 'absolute', top: '-100px' }} />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n.genericpagepar.parsys .u-row .is-four-cols{padding: 0;}\n.o-hero .m-teaser .cta-wrapper .a-link{font-size: 16px; line-height: 20px;}\n.m-free-tile .headline-preamble-wrapper .a-heading-2{font-size: 24px; line-height: 28px; margin-bottom: 0;}\n.m-free-tile .cta-wrapper .cta-link{font-size: 16px; line-height: 20px;}\n.aw_marker{display: block; margin-top: 6px; color:#BB762B; font-size: 11px; line-height: 1.2em;}\n@media (min-width: 768px){\n  .q-peta-e{font-size: 40px !important; line-height: 44px !important;}\n}\n@media (max-width: 767px){\n  .q-peta-e{font-size: 30px !important; line-height: 34px !important;}\n  .q-alpha3-e{font-size: 15px !important;}\n  .m-free-tile .headline-preamble-wrapper .a-heading-2{font-size: 18px; line-height: 22px;}\n  .m-free-tile .cta-wrapper .cta-link{font-size: 14px; line-height: 18px;}\n\n  .four-cols-wrap .is-four-cols{margin-bottom: 0;}\n  .four-cols-wrap+.four-cols-wrap .is-four-cols{margin-top: 0; margin-bottom: 30px;}\n  .aw_marker{padding-bottom: 15px;}\n}\n',
                }}
              />
            </div>
          </div>
          <div className="freehtmlimporter importer section">
            <div>
              <div className="canvas">
                <div className="parbase hero section">
                  <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width category-push-background">
                    <div className="parr parr2">
                      <a className="link1 button1" href="https://www.cos.com/ko-kr/women/new-arrivals.html">
                        여성 신상품
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
            <hr className="a-keyline" />
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className=" relative" style={{ maxWidth: 'unset' }}>
              <div id="men" style={{ position: 'absolute', top: '-100px' }} />
            </div>
          </div>
          <div className="freehtmlimporter importer section">
            <div>
              <div className="canvas">
                <div className="parbase hero section">
                  <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width category-push-background">
                    <div className="parr parr2">
                      <a className="link1 button1" href="https://www.cos.com/ko-kr/men/new-arrivals.html">
                        남성 신상품
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="o-spacing" />
        </div>
      </div>
    </FreeHtml>
  );
}
