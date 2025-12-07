import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';
import { FourColumnNew } from '@views/main/components';
import { ProdCardItem } from '@views/product/components/ProdCard';
import { mockProducts } from '@views/freehtml/ui/freeData';

export const metadata: Metadata = {
  title: 'Women t-shirt fit guide - COS KR',
};

export default function Page() {
  return (
    <>
      <FreeHtml>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="relative" style={{ maxWidth: 'unset' }}>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n        .o-hero .a-heading-1.q-giga {\n          font-size: 50px !important;\n          line-height: 50px !important;\n          font-weight: 700;\n        }\n        @container root (max-width: 787px) {\n          .m-padding-30 {\n            padding-top: 30px;\n          }\n          .m-padding-20 {\n            padding-top: 20px;\n          }\n          .m-padding-10 {\n            padding-top: 10px;\n          }\n          .o-hero .a-heading-1.q-giga {\n            font-size: 24px !important;\n            line-height: 28px !important;\n          }\n        }\n      ',
              }}
            />
            <div className="u-cols-sm-8-8 u-cols-md-12-12 u-cols-lg-24-24 u-cols-hero">
              <div className="o-hero" style={{ margin: '0px auto' }}>
                <div className="cos-seo cos-seo-title u-cols-sm-8-8 u-cols-md-12-12 u-cols-lg-24-24 u-cols-hero">
                  <div className="o-hero cos-seo-wrapper">
                    <div className="cos-seo m-teaser mobile-align-top mobile-align-left tablet-align-top tablet-align-center desktop-align-top desktop-align-center text-align-center">
                      <h1 className="a-heading-1 q-giga">티셔츠 핏 가이드</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="relative" style={{ maxWidth: 'unset' }}>
            <div id="shop" className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="u-cols-sm-8-8 u-cols-md-12-12 u-cols-lg-24-24 u-cols-hero">
                  <div className="o-hero title_box">
                    <div className="m-teaser mobile-align-top mobile-align-left tablet-align-top tablet-align-center desktop-align-top desktop-align-center text-align-center">
                      <div className="m-double-button free-custom-nowrap">
                        <a className="a-button unsmart-underline" href="#SLIM">
                          슬림
                        </a>
                        <a className="a-button unsmart-underline" href="#REGULAR">
                          레귤러
                        </a>
                        <a className="a-button unsmart-underline" href="#RELAXED">
                          릴랙스드
                        </a>
                        <a className="a-button unsmart-underline" href="#OVERSIZED">
                          오버사이즈
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n        a.a-button.unsmart-underline {\n          display: inline-block;\n          width: 240px;\n          line-height: 45px;\n          font-size: 16px;\n          color: #1b1b1b;\n          background: #fff;\n        }\n\n        a.a-button.unsmart-underline:hover {\n          font-weight: 700;\n        }\n\n        .a-link.has-underline,\n        .is-richtext a.has-underline > span {\n          color: #000;\n        }\n      ',
              }}
            />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n        .m-teaser.mobile-align-top.mobile-align-left.tablet-align-top.tablet-align-center.desktop-align-top.desktop-align-center.text-align-center\n          .m-double-button {\n          display: flex;\n          justify-content: center;\n          gap: 40px;\n        }\n      ',
              }}
            />
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="relative" style={{ maxWidth: 'unset' }}>
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="richTextSpan">
                  <div className="text-2cols">
                    <p />
                    <p>
                      아이코닉한 데일리 아이템, 티셔츠가 한층 더 완벽해졌습니다. COS 여성 컬렉션의 시작부터 중심이
                      되어온 티셔츠는 프리미엄 퀄리티와 부드러운 텍스처, 그리고 편안함을 중점에 두고 디자인되었습니다.
                      크루넥과 브이넥 스타일을 포함해 다양한 시그니처 핏으로 선보입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cta-section pb-4 lg:pb-0">
              <div className="m-double-button" style={{ textAlign: 'center' }}>
                <a className="fitguide_btn" href="https://www.cos.com/ko-kr/women/t-shirts.html">
                  티셔츠 쇼핑하기
                </a>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n        .fitguide_btn {\n          display: inline-block;\n          width: 240px;\n          line-height: 45px;\n          font-size: 13px;\n          color: #000;\n          background: #fff;\n          margin: 30px 0 120px;\n          border: 1px solid #000;\n        }\n\n        .fitguide_btn:hover {\n          opacity: 0.7;\n        }\n\n        .a-link.has-underline,\n        .is-richtext a.has-underline > span {\n          color: #fff;\n        }\n      ',
              }}
            />
          </div>
        </div>
        <div
          className="container-602628 flex flex-col w-full lg:pb-30 pb-20 gap-20 lg:gap-30 manual-cpnt"
          style={{ paddingTop: 36 }}
        >
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row load-more-602628">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5 pt-0">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4 lg:col-start-5 lg:col-end-9">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="68feaca2-9cc1-4cb6-8975-98072df5894b"
                  >
                    <img
                      loading="lazy"
                      className="a-image initial loaded"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2854010020250610143725.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2854010020250610143725.jpg"
                      style={{ objectFit: 'cover' }}
                      data-was-processed="true"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="relative" style={{ maxWidth: 'unset' }}>
            <div id="SLIM">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n          .o-text-block.u-align-center {\n            margin: 0 auto;\n            padding: 50px 0;\n          }\n        ',
                }}
              />
            </div>
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="relative" style={{ maxWidth: 'unset' }}>
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain">
                  <div className="richTextSpan">
                    <div className="h2-text">
                      <h3>슬림</h3>
                      <br />
                    </div>
                    <div className="text-2cols">
                      <p />
                      <p>
                        - 티셔츠 컬렉션에서 가장 정교하게 완성한 핏<br />
                        <br />
                        - 몸에 딱 붙는 라인
                        <br />
                        <br />- 미니멀하고 세련된 실루엣
                      </p>
                    </div>
                    <div className="text-2cols">
                      <p />
                      <p>
                        슬림 핏 티셔츠는 몸에 딱 붙는 실루엣으로 디자인되어, 자연스러운 레이어링이 가능합니다. 단독으로
                        스타일링해도 좋고, 테일러드 룩의 이너 아이템으로도 활용하기 좋습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n          .richTextSpan .pull-quote1 {\n            font-size: 16pt;\n            text-align: center;\n            line-height: 1.35em;\n            letter-spacing: 0.04em;\n            padding: 20px 0;\n          }\n          .o-grid-controller.u-clearfix.is-three-cols {\n            margin-bottom: 0;\n          }\n          .richTextSpan .pull-quote1 {\n            padding: 50px 0;\n          }\n          @container root (min-width: 1025px) {\n            .o-blog-text {\n              margin-top: 0;\n            }\n          }\n        ',
                }}
              />
            </div>
          </div>
          <div className="cta-section pb-10 pt-7.5">
            <div className="m-double-button" style={{ textAlign: 'center' }}>
              <a className="fitguide_btn" href="https://www.cos.com/ko-kr/women/t-shirts.html">
                슬림 티셔츠 쇼핑하기
              </a>
            </div>
          </div>
          <div className="container-602622 flex flex-col w-full lg:pb-30 pb-20 gap-20 lg:gap-30 manual-cpnt">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row load-more-602622">
              {/* o-grid-controller */}
              <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5 pt-0">
                <div className="column relative col-span-12 w-full h-full lg:col-span-4 lg:col-start-5 lg:col-end-9">
                  <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                    <picture
                      style={{ marginBottom: 6 }}
                      data-component="APicture"
                      className="a-picture"
                      data-component-id="20600335-3df1-443c-b6b6-ad48eb8c44ad"
                    >
                      <img
                        loading="lazy"
                        className="a-image loaded"
                        data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2854010020250610143830.jpg"
                        src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2854010020250610143830.jpg"
                        style={{ objectFit: 'cover' }}
                        data-was-processed="true"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="relative" style={{ maxWidth: 'unset' }}>
              <div id="REGULAR" />
            </div>
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="relative" style={{ maxWidth: 'unset' }}>
                <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                  <div className="contain">
                    <div className="richTextSpan">
                      <div className="h2-text">
                        <h3>레귤러</h3>
                        <br />
                      </div>
                      <div className="text-2cols">
                        <p />
                        <p>
                          - 간결하고 클래식한 디자인
                          <br />
                          <br />
                          - 전체적으로 깔끔하게 떨어지는 핏<br />
                          <br />- 활용도 높은 실루엣
                        </p>
                      </div>
                      <div className="text-2cols">
                        <p />
                        <p>
                          레귤러 핏 티셔츠는 완벽한 핏을 위해 정교하게 설계되었습니다. 활용도 높은 레귤러 핏은 정제된
                          클래식 실루엣이 돋보이며, 데님과 매치하기 좋은 아이템입니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n          .richTextSpan .pull-quote1 {\n            font-size: 16pt;\n            text-align: center;\n            line-height: 1.35em;\n            letter-spacing: 0.04em;\n            padding: 20px 0;\n          }\n          .o-grid-controller.u-clearfix.is-three-cols {\n            margin-bottom: 0;\n          }\n          .richTextSpan .pull-quote1 {\n            padding: 50px 0;\n          }\n          @container root (min-width: 1025px) {\n            .o-blog-text {\n              margin-top: 0;\n            }\n          }\n        ',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </FreeHtml>
      <FourColumnNew
        items={[
          { content: <ProdCardItem product={mockProducts[0]} /> },
          { content: <ProdCardItem product={mockProducts[0]} /> },
          { content: <ProdCardItem product={mockProducts[0]} /> },
          { content: <ProdCardItem product={mockProducts[0]} /> },
        ]}
      />
      <FreeHtml>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="cta-section pb-10 pt-7.5">
            <div className="m-double-button" style={{ textAlign: 'center' }}>
              <a className="fitguide_btn" href="https://www.cos.com/ko-kr/women/t-shirts.html">
                레귤러 티셔츠 쇼핑하기
              </a>
            </div>
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="relative" style={{ maxWidth: 'unset' }}>
              <div id="RELAXED" />
            </div>
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="relative" style={{ maxWidth: 'unset' }}>
                <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                  <div className="contain">
                    <div className="richTextSpan">
                      <div className="h2-text">
                        <h3>릴렉스드</h3>
                        <br />
                      </div>
                      <div className="text-2cols">
                        <p />
                        <p>
                          - 자연스러운 실루엣
                          <br />
                          <br />
                          - 전체적으로 여유로운 실루엣
                          <br />
                          <br />- 드롭 숄더 디자인
                        </p>
                      </div>
                      <div className="text-2cols">
                        <p />
                        <p>
                          릴랙스드 핏 티셔츠는 자연스러운 실루엣으로 여유롭고 모던한 무드를 자아내며, 모든 순간에
                          어울리는 COS 시그니처 아이템입니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n          .richTextSpan .pull-quote1 {\n            font-size: 16pt;\n            text-align: center;\n            line-height: 1.35em;\n            letter-spacing: 0.04em;\n            padding: 20px 0;\n          }\n          .o-grid-controller.u-clearfix.is-three-cols {\n            margin-bottom: 0;\n          }\n          .richTextSpan .pull-quote1 {\n            padding: 50px 0;\n          }\n          @container root (min-width: 1025px) {\n            .o-blog-text {\n              margin-top: 0;\n            }\n          }\n        ',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </FreeHtml>
      <FourColumnNew items={[{ content: <ProdCardItem product={mockProducts[0]} /> }]} />
      <FreeHtml>
        <div className="cta-section pb-10 pt-7.5">
          <div className="m-double-button" style={{ textAlign: 'center' }}>
            <a className="fitguide_btn" href="https://www.cos.com/ko-kr/women/t-shirts.html">
              릴렉스드 티셔츠 쇼핑하기
            </a>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div id="OVERSIZED"></div>
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className=" relative" style={{ maxWidth: 'unset' }}>
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain">
                  <div className="richTextSpan">
                    <div className="h2-text">
                      <h3> 오버사이즈</h3> <br />
                    </div>
                    <div className=" text-2cols">
                      <p />
                      <p>
                        - 가장 루즈한 실루엣
                        <br />
                        <br />
                        - 전체적으로 흐르는 실루엣
                        <br />
                        <br />- 과장된 비율
                      </p>
                    </div>
                    <div className=" text-2cols">
                      <p />
                      <p>
                        오버사이즈는 COS를 대표하는 핏으로 자리잡아 왔습니다. 여유로우면서도 정제된 무드를 지닌
                        오버사이즈 핏 티셔츠는 과장된 실루엣이 돋보이며, 자연스러운 스타일링을 완성하는 아이템입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n.richTextSpan .pull-quote1 {font-size:16pt; text-align:center;line-height: 1.35em;letter-spacing: 0.04em; padding:20px 0;}\n.o-grid-controller.u-clearfix.is-three-cols {margin-bottom:0;}\n.richTextSpan .pull-quote1 {padding:50px 0;}\n@container root (min-width: 1025px) {\n    .o-blog-text {margin-top:0;}\n}\n',
                }}
              />
            </div>
          </div>
        </div>
        <div className="cta-section pb-10 pt-7.5">
          <div className="m-double-button" style={{ textAlign: 'center' }}>
            <a className="fitguide_btn" href=" https://www.cos.com/ko-kr/women/t-shirts.html">
              오버사이즈 티셔츠 쇼핑하기
            </a>{' '}
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div id="cqcanvas">
            <div className="chips" style={{ fontWeight: 700 }}>
              <p>EXPLORE MORE</p>
              <div className="scrollable-content" style={{ whiteSpace: 'normal', height: 'auto' }}>
                <a href="https://www.cos.com/ko-kr/features/people.html">인터뷰</a>
                <a href="https://www.cos.com/ko-kr/features/stories.html">컬렉션</a>
                <a href="https://www.cos.com/ko-kr/features/places.html">장소</a>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    .o-text-block.u-align-center {\n        width: 60%;\n        margin-bottom: 0;\n        padding-bottom: 0;\n    }\n\n    .preamble-section .a-paragraph {\n        font-size: 50px;\n        line-height: 1.25;\n        font-weight: 700;\n    }\n\n    .h2-text {\n        margin: 0 auto;\n        width: 33%;\n        margin-bottom: 0px;\n    }\n\n    .h2-text h3 {\n        margin: 0 auto;\n        width: 40%;\n        margin-bottom: 0px;\n        text-align: center;\n    }\n\n    h2 {\n        font-size: 50px;\n        font-weight: 700;\n        line-heigh: 1.25;\n        font-size: 14px;\n    }\n\n    h3 {\n        font-size: 16px;\n        font-weight: 700;\n    }\n\n    .text-2cols {\n        display: flex;\n        margin: 0 auto;\n        width: 60%;\n        gap: 20px;\n        padding: 20px 0 60px 0\n    }\n\n    .text-2cols p {\n        width: 50%;\n    }\n\n    .text-2cols.mo-2cols .cols-right {\n        text-align: right;\n    }\n\n    .chips {\n        display: block;\n        width: 100%;\n        margin: 50px auto 50px;\n    }\n\n    .chips p {\n        font-size: 24px;\n        line-height: 34px;\n        letter-spacing: .02em;\n        color: #1b1b1b;\n        text-align: center;\n        width: 100%;\n        margin: 0 auto 20px auto;\n    }\n\n    .chips a {\n        display: inline-block;\n        text-transform: uppercase;\n        text-decoration: none;\n        letter-spacing: .0825em;\n        cursor: pointer;\n        text-align: center;\n        padding: 10px 12px 6px;\n        margin: 4px 4px 8px 0;\n        color: #1b1b1b;\n        font-size: 12px;\n        line-height: 17px;\n    }\n\n    /*.chips a:hover {background-color: #1b1b1b; color: #ffffff;}*/\n    .chips .scrollable-content {\n        position: relative;\n        padding: 0px 10px;\n        overflow-x: auto;\n        -webkit-overflow-scrolling: touch;\n        white-space: nowrap;\n        text-align: center;\n        display: flex;\n        justify-content: center;\n        gap: 10%;\n    }\n\n    .text-2cols i {\n        font-size: 13px;\n        font-style: normal;\n    }\n\n    .a-image {\n        cursor: pointer;\n    }\n\n    /*.headline-preamble-wrapper h2{    font-size: 50px;  margin-bottom: 18px;    position: absolute;    top: 50%;     left: 50%;  transform: translate(-50%); color:#fff}*/\n\n    .container-572651 {\n        padding-top: 0 !important\n    }\n\n    .container-573244 .headline-preamble-wrapper {\n        padding: 30px 50px\n    }\n\n    .container-573244 {\n        padding: 0 !important\n    }\n\n    @container root (min-width:1024px) {\n        .lg\\:pb-30 {\n            padding-bottom: 1.5rem;\n        }\n    }\n\n    @container root (max-width:760px) {\n        h2 {\n            font-size: 40px;\n            line-height: 1.25;\n        }\n\n        .h2-text h3 {\n            margin: 0;\n            width: 90%;\n            margin-bottom: 10px;\n            text-align: left;\n        }\n\n        .h2-text {\n            width: 100%;\n            margin: 0 20px;\n        }\n\n        .text-2cols.mo-2cols {\n            flex-direction: row;\n        }\n\n        .text-2cols.mo-2cols .cols-right {\n            width: 10%;\n        }\n\n        .o-text-block.u-align-center {\n            width: 100%;\n            padding: 0 10px;\n        }\n\n        .text-2cols {\n            width: 100%;\n            flex-direction: column;\n            padding: 0 20px 20px;\n        }\n\n        .text-2cols p {\n            width: 100%;\n        }\n\n        .text {\n            width: 100%;\n        }\n\n        .container-523574.flex.flex-col.w-full.lg\\:pb-30.pb-20.gap-20.lg\\:gap-30.manual-cpnt {\n            padding-bottom: 20px;\n        }\n\n        .chips .scrollable-content {\n            flex-direction: column;\n        }\n\n        .chips a {\n            text-align: left;\n        }\n\n        .pb-20 {\n            padding-bottom: 0rem;\n        }\n\n        .col-span-8 {\n            grid-column: span 12 / span 8;\n        }\n\n    }\n\n    @container root (max-width:760px) {\n\n        /* 스타일 수정 */\n        .title_box {\n            margin: 0;\n        }\n\n        .fitguide_btn {\n            margin: 0;\n            ;\n            box-sizing: border-box;\n            width: calc(100% - 60px);\n        }\n\n        .richTextSpan {\n            margin: 26px 0 12px;\n        }\n\n\n    }\n\n    @container root (min-width: 761px) {\n        .richTextSpan {\n            margin-top: 36px;\n        }\n\n        .text-2cols {\n            padding: 30px 0;\n        }\n\n        .text-2cols:nth-child(n+3) {\n            padding-top: 0;\n\n        }\n\n        .text-2cols:last-child {\n            padding-bottom: 60px;\n        }\n\n        .text-2cols.noPadding {\n            padding-top: 0;\n        }\n\n        .title_box {\n            margin-bottom: 0;\n        }\n    }\n',
          }}
        />
      </FreeHtml>
    </>
  );
}
