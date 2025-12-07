import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';
import { FourColumnNew } from '@views/main/components';
import { ProdCardItem } from '@views/product/components/ProdCard';
import { mockProducts } from '@views/freehtml/ui/freeData';

export const metadata: Metadata = {
  title: 'Women trousers-fit-guide - COS KR',
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
                      <h1 className="a-heading-1 q-giga">트라우저 핏 가이드</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="relative" style={{ maxWidth: 'unset' }}>
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="richTextSpan">
                  <div className="text-2cols noPadding">
                    <p />
                    <p>
                      여성 트라우저 컬렉션은 어떤 드레스 코드에도 어울리는 다양한 실루엣이 특징입니다. 스트레이트,
                      와이드, 배럴, 테이퍼드, 슬림 핏으로 구성한 컬렉션은 정제된 실루엣와 세심한 디테일, 그리고 모던한
                      테일러링을 바탕으로 제작되었습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cta-section pb-4 lg:pb-0">
              <div className="m-double-button" style={{ textAlign: 'center' }}>
                <a className="fitguide_btn" href="https://www.cos.com/ko-kr/women/trousers.html">
                  트라우저 쇼핑하기
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
          className="container-603496 flex flex-col w-full lg:pb-30 pb-20 gap-20 lg:gap-30 manual-cpnt"
          style={{ paddingTop: 36 }}
        >
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row load-more-603496">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5 pt-0">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4 lg:col-start-5 lg:col-end-9">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="32cb1341-3c61-4eec-a0c7-a66ffabaeb15"
                  >
                    <img
                      loading="lazy"
                      className="a-image initial loaded"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2855300020250610145123.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2855300020250610145123.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
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
            <div id="STRAIGHT">
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
                      <h3>스트레이트</h3>
                    </div>
                    <div className="text-2cols">
                      <p />
                      <p>
                        - 클래식한 실루엣
                        <br />
                        <br />
                        - 허벅지를 따라 루즈한 스타일
                        <br />
                        <br />- 발목까지 스트레이트 핏으로 떨어지는 디자인
                      </p>
                    </div>
                    <div className="text-2cols">
                      <p />
                      <p>
                        클래식 워드로브를 세련되게 재해석한 스트레이트 핏 트라우저. 실루엣과 움직임을 고려한 디자인을
                        바탕으로 타임리스한 감각의 테일러링이 완성되었습니다.
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
          <div className="relative" style={{ maxWidth: 'unset' }}>
            <div id="WIDE">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain">
                  <div className="richTextSpan">
                    <div className="h2-text">
                      <h3>와이드</h3>
                    </div>
                    <div className="text-2cols">
                      <p />
                      <p>
                        - 과장된 와이드 레그 핏<br />
                        <br />
                        - 길게 떨어지는 실루엣
                        <br />
                        <br />- 여유롭고 넉넉한 디자인
                      </p>
                    </div>
                    <div className="text-2cols">
                      <p />
                      <p>
                        와이드 레그 트라우저는 자연스러운 스타일이 돋보이는 아이템입니다. 가장 여유로운 실루엣으로, 다리
                        라인을 따라 부드럽게 흐르며 볼륨감과 유려한 실루엣을 선사합니다.
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
        <div className="container-603490 flex flex-col w-full lg:pb-30 pb-20 gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row load-more-603490">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5 pt-0">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4 lg:col-start-5 lg:col-end-9">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="3cc6ab41-b3e7-4a1e-8a3c-7fbbd8dea68c"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2855300020250610145157.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2855300020250610145157.jpg"
                      style={{ objectFit: 'cover' }}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="relative" style={{ maxWidth: 'unset' }}>
            <div id="BARREL" />
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="relative" style={{ maxWidth: 'unset' }}>
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain">
                  <div className="richTextSpan">
                    <div className="h2-text">
                      <h3>배럴</h3>
                    </div>
                    <div className="text-2cols">
                      <p />
                      <p>
                        - 모던한 곡선 실루엣
                        <br />
                        <br />
                        - 다리 라인을 따라 제작된 구조적인 실루엣
                        <br />
                        <br />- 발목으로 갈수록 좁아지는 스타일
                      </p>
                    </div>
                    <div className="text-2cols">
                      <p />
                      <p>
                        독특한 곡선 실루엣으로 완성된 배럴 레그 트라우저는 클래식 테일러링을 새롭게 재해석한
                        디자인입니다. 간결한 아이템과 매치해 밸런스를 맞추거나, 오버사이즈 탑과 함께 스타일링해 모던한
                        무드를 연출해 보세요.
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
        <div className="cta-section pb-10 pt-7.5">
          <div className="m-double-button" style={{ textAlign: 'center' }}>
            <a className="fitguide_btn" href="https://www.cos.com/ko-kr/women/trousers/barrel-leg-trousers.html">
              배럴 레그 트라우저 쇼핑하기
            </a>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="relative" style={{ maxWidth: 'unset' }}>
            <div id="SLIM" />
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="relative" style={{ maxWidth: 'unset' }}>
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain">
                  <div className="richTextSpan">
                    <div className="h2-text">
                      <h3>슬림</h3>
                    </div>
                    <div className="text-2cols">
                      <p />
                      <p>
                        - 간결한 실루엣
                        <br />
                        <br />
                        - 다리에 깔끔하게 떨어지는 스타일
                        <br />
                        <br />- 슬림하게 딱 붙는 핏
                      </p>
                    </div>
                    <div className="text-2cols">
                      <p />
                      <p>
                        여성 컬렉션에서 가장 슬림한 실루엣이 돋보이는 아이템. 몸에 딱 붙는 슬림 트라우저는 테일러링에
                        세련된 감각을 더해주며, 다리 라인을 따라 흐르는 정제된 실루엣이 특징입니다. 블레이저, 깔끔한
                        셔츠와 함께 스타일링하면 완성도 높은 룩을 연출할 수 있습니다.
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
        <div className="cta-section pb-10 pt-7.5">
          <div className="m-double-button" style={{ textAlign: 'center' }}>
            <a className="fitguide_btn" href="https://www.cos.com/ko-kr/women/trousers.html">
              슬림 트라우저 쇼핑하기
            </a>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    .o-text-block.u-align-center {\n      width: 60%;\n      margin-bottom: 0;\n      padding-bottom: 0;\n    }\n\n    .preamble-section .a-paragraph {\n      font-size: 50px;\n      line-height: 1.25;\n      font-weight: 700;\n    }\n\n    .h2-text {\n      margin: 0 auto;\n      width: 33%;\n      margin-bottom: 0px;\n    }\n\n    .h2-text h3 {\n      margin: 0 auto;\n      width: 40%;\n      margin-bottom: 0px;\n      text-align: center;\n    }\n\n    h2 {\n      font-size: 50px;\n      font-weight: 700;\n      line-heigh: 1.25;\n      font-size: 14px;\n    }\n\n    h3 {\n      font-size: 16px;\n      font-weight: 700;\n    }\n\n    .text-2cols {\n      display: flex;\n      margin: 0 auto;\n      width: 60%;\n      gap: 20px;\n      padding: 20px 0 60px 0;\n    }\n\n    .text-2cols p {\n      width: 50%;\n    }\n\n    .text-2cols.mo-2cols .cols-right {\n      text-align: right;\n    }\n\n    .chips {\n      display: block;\n      width: 100%;\n      margin: 50px auto 50px;\n    }\n\n    .chips p {\n      font-size: 24px;\n      line-height: 34px;\n      letter-spacing: 0.02em;\n      color: #1b1b1b;\n      text-align: center;\n      width: 100%;\n      margin: 0 auto 20px auto;\n    }\n\n    .chips a {\n      display: inline-block;\n      text-transform: uppercase;\n      text-decoration: none;\n      letter-spacing: 0.0825em;\n      cursor: pointer;\n      text-align: center;\n      padding: 10px 12px 6px;\n      margin: 4px 4px 8px 0;\n      color: #1b1b1b;\n      font-size: 12px;\n      line-height: 17px;\n    }\n\n    /*.chips a:hover {background-color: #1b1b1b; color: #ffffff;}*/\n    .chips .scrollable-content {\n      position: relative;\n      padding: 0px 10px;\n      overflow-x: auto;\n      -webkit-overflow-scrolling: touch;\n      white-space: nowrap;\n      text-align: center;\n      display: flex;\n      justify-content: center;\n      gap: 10%;\n    }\n\n    .text-2cols i {\n      font-size: 13px;\n      font-style: normal;\n    }\n\n    .a-image {\n      cursor: pointer;\n    }\n\n    /*.headline-preamble-wrapper h2{    font-size: 50px;  margin-bottom: 18px;    position: absolute;    top: 50%;     left: 50%;  transform: translate(-50%); color:#fff}*/\n\n    .container-572651 {\n      padding-top: 0 !important;\n    }\n\n    .container-573244 .headline-preamble-wrapper {\n      padding: 30px 50px;\n    }\n\n    .container-573244 {\n      padding: 0 !important;\n    }\n\n    @container root (min-width: 1024px) {\n      .lg\\:pb-30 {\n        padding-bottom: 1.5rem;\n      }\n    }\n\n    @container root (max-width: 760px) {\n      h2 {\n        font-size: 40px;\n        line-height: 1.25;\n      }\n\n      .h2-text h3 {\n        margin: 0;\n        width: 90%;\n        margin-bottom: 10px;\n        text-align: left;\n      }\n\n      .h2-text {\n        width: 100%;\n        margin: 0 20px;\n      }\n\n      .text-2cols.mo-2cols {\n        flex-direction: row;\n      }\n\n      .text-2cols.mo-2cols .cols-right {\n        width: 10%;\n      }\n\n      .o-text-block.u-align-center {\n        width: 100%;\n        padding: 0 10px;\n      }\n\n      .text-2cols {\n        width: 100%;\n        flex-direction: column;\n        padding: 0 20px 20px;\n      }\n\n      .text-2cols p {\n        width: 100%;\n      }\n\n      .text {\n        width: 100%;\n      }\n\n      .container-523574.flex.flex-col.w-full.lg\\:pb-30.pb-20.gap-20.lg\\:gap-30.manual-cpnt {\n        padding-bottom: 20px;\n      }\n\n      .chips .scrollable-content {\n        flex-direction: column;\n      }\n\n      .chips a {\n        text-align: left;\n      }\n\n      .pb-20 {\n        padding-bottom: 0rem;\n      }\n\n      .col-span-8 {\n        grid-column: span 12 / span 8;\n      }\n    }\n\n    @container root (max-width: 760px) {\n      /* 스타일 수정 */\n      .title_box {\n        margin: 0;\n      }\n\n      .fitguide_btn {\n        margin: 0;\n        box-sizing: border-box;\n        width: calc(100% - 60px);\n      }\n\n      .richTextSpan {\n        margin: 26px 0 12px;\n      }\n\n      .cta-section {\n        clear: both;\n      }\n    }\n\n    @container root (min-width: 761px) {\n      .richTextSpan {\n        margin-top: 36px;\n      }\n\n      .text-2cols {\n        padding: 30px 0;\n      }\n\n      .text-2cols:nth-child(n + 3) {\n        padding-top: 0;\n      }\n\n      .text-2cols:last-child {\n        padding-bottom: 60px;\n      }\n\n      .text-2cols.noPadding {\n        padding-top: 0;\n      }\n\n      .title_box {\n        margin-bottom: 0;\n      }\n    }\n  ',
          }}
        />
      </FreeHtml>
    </>
  );
}
