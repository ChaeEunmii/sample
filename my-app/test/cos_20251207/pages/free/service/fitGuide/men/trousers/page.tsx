import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';
import { FourColumnNew } from '@views/main/components';
import { ProdCardItem } from '@views/product/components/ProdCard';
import { mockProducts } from '@views/freehtml/ui/freeData';

export const metadata: Metadata = {
  title: '트라우저 핏 가이드 - COS KR',
};

export default function Page() {
  return (
    <>
      <FreeHtml>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n.o-hero .a-heading-1.q-giga{font-size: 50px !important; line-height: 50px !important;        font-weight: 700;}\n@container root (max-width:787px){\n.m-padding-30{padding-top:30px;}\n.m-padding-20{padding-top:20px;}\n.m-padding-10{padding-top:10px;}\n.o-hero .a-heading-1.q-giga{font-size: 24px !important; line-height: 28px !important;}\n}\n',
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
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div id="shop" className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="u-cols-sm-8-8 u-cols-md-12-12 u-cols-lg-24-24 u-cols-hero">
                  <div className="o-hero title_box">
                    <div className="m-teaser mobile-align-top mobile-align-left tablet-align-top tablet-align-center desktop-align-top desktop-align-center text-align-center">
                      <div className="m-double-button">
                        <a className="a-button  unsmart-underline" href="#SLIM">
                          슬림
                        </a>
                        <a className="a-button  unsmart-underline" href="#TAPERED">
                          테이퍼드
                        </a>
                        <a className="a-button  unsmart-underline" href="#STRAIGHT_LEG">
                          스트레이트 레그
                        </a>
                        <a className="a-button  unsmart-underline" href="#WIDE_LEG">
                          와이드 레그
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
                  '\na.a-button.unsmart-underline {\n    display: inline-block;\n    width: fit-content;\nmin-width: 240px;\n    line-height: 45px;\n    font-size: 16px;\n    color: #1b1b1b;\n    background: #fff; \n  }\n\na.a-button.unsmart-underline:hover {\n  \nfont-weight:700;\n\n  }\n\n  .a-link.has-underline,\n  .is-richtext a.has-underline > span {\n    color: #000;\n  }\n',
              }}
            />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n.m-teaser.mobile-align-top.mobile-align-left.tablet-align-top.tablet-align-center.desktop-align-top.desktop-align-center.text-align-center .m-double-button {display:flex; justify-content: center; gap: 40px;}\n',
              }}
            />
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="contain">
            <div className="richTextSpan mt-0">
              <div className=" text-2cols noPadding">
                <p />
                <p>
                  슬림, 스트레이트, 테이퍼드, 와이드까지, 다양한 스타일의 트라우저 컬렉션을 소개합니다. COS 트라우저 핏
                  가이드를 통해 모던한 실루엣으로 정교하게 제작한 트라우저를 만나보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-section pb-4 lg:pb-0">
          <div className="m-double-button" style={{ textAlign: 'center' }}>
            <a className="fitguide_btn" href=" https://www.cos.com/ko-kr/men/trousers.html">
              트라우저 쇼핑하기
            </a>{' '}
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    .fitguide_btn {\n        display: inline-block;\n        width: 240px;\n        line-height: 45px;\n        font-size: 13px;\n        color: #000;\n        background: #fff;\nmargin:30px 0 120px;\nborder:1px solid #000;\n    }\n\n    .fitguide_btn:hover {\n        opacity: 0.7;\n    }\n\n    .a-link.has-underline,\n    .is-richtext a.has-underline>span {\n        color: #fff;\n    }\n',
          }}
        />
        <div
          className="container-602748 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt"
          style={{ paddingTop: 36 }}
        >
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-602748 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="cd815e11-c250-43d7-8042-cc4033c84d28"
                  >
                    <img
                      loading="lazy"
                      className="a-image initial loaded"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2854030020250610145544.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2854030020250610145544.jpg"
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
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div id="SLIM">
              <style
                dangerouslySetInnerHTML={{
                  __html: '\n.o-text-block.u-align-center{margin:0 auto; padding:50px 0;}\n',
                }}
              />
            </div>
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className=" relative" style={{ maxWidth: 'unset' }}>
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain">
                  <div className="richTextSpan">
                    <div className="h2-text">
                      <h3> 슬림 </h3> <br />
                    </div>
                    <div className=" text-2cols">
                      <p />
                      <p>
                        - 간결한 실루엣
                        <br />
                        <br />- 다리 라인을 따라 깔끔하게 떨어지는 핏
                      </p>
                    </div>
                    <div className=" text-2cols">
                      <p />
                      <p>
                        슬림 핏 트라우저는 샤프한 실루엣이 돋보이며, 다리 라인을 따라 깔끔하게 테일러링되어 포멀 룩부터
                        캐주얼 룩까지 다양한 스타일에 자연스럽게 어울립니다.
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
            <a className="fitguide_btn" href="https://www.cos.com/ko-kr/men/trousers.html">
              슬림 트라우저 쇼핑하기
            </a>{' '}
          </div>
        </div>
        <div className="container-602742 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-602742 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="024db3f2-67f2-4ec3-bc4a-80b1b78ae00c"
                  >
                    <img
                      loading="lazy"
                      className="a-image loaded"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2854030020250610145751.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2854030020250610145751.jpg"
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
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div id="TAPERED"></div>
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className=" relative" style={{ maxWidth: 'unset' }}>
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain">
                  <div className="richTextSpan">
                    <div className="h2-text">
                      <h3> 테이퍼드 </h3>
                    </div>
                    <div className=" text-2cols">
                      <p />
                      <p>
                        - 클래식한 실루엣
                        <br />
                        <br />
                        - 허벅지를 따라 약간 루즈한 핏<br />
                        <br />- 발목으로 갈수록 좁아지는 스타일
                      </p>
                    </div>
                    <div className=" text-2cols">
                      <p />
                      <p>
                        테이퍼드 핏 트라우저는 COS 남성 컬렉션의 주요 아이템입니다. 클래식한 핏이며, 전체적으로 여유
                        있게 떨어지다가 발목 쪽으로 자연스럽게 좁아지는 실루엣이 특징입니다. 포멀한 셔츠와 매치해도
                        좋고, 심플한 티셔츠와 함께 캐주얼하게 연출해도 좋은 아이템입니다.
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
            <a className="fitguide_btn" href="https://www.cos.com/ko-kr/men/trousers.html">
              테이퍼드 트라우저 쇼핑하기
            </a>
          </div>
        </div>
        <div className="container-603229 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-603229 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                <div className="m-free-tile lg:px-0 px-3.75" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="c38e7373-7320-4f3f-a8f3-658aabb180e4"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2854030020250610150044.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2854030020250610150044.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div id="STRAIGHT_LEG">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain">
                  <div className="richTextSpan">
                    <div className="h2-text">
                      <h3> 스트레이트 레그 </h3>
                    </div>
                    <div className=" text-2cols">
                      <p />
                      <p>
                        - 간결하고 클래식한 실루엣
                        <br />
                        <br />
                        - 허벅지를 따라 루즈해지는 핏<br />
                        <br />- 발목까지 스트레이트 핏으로 떨어지는 스타일
                      </p>
                    </div>
                    <div className=" text-2cols">
                      <p />
                      <p>
                        타임리스한 실루엣의 COS 스트레이트 레그 트라우저는 모던 워드로브의 기본이 되는 아이템입니다.
                        테일러링과 릴랙스드 핏이 조화를 이루어 완성되었으며, 편안함 착용감을 선사합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-605808 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-605808 ">
              {/* o-grid-controller */}
              <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
                <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                  <div className="m-free-tile lg:px-0 px-3.75" style={{ cursor: 'default' }}>
                    <picture
                      style={{ marginBottom: 6 }}
                      data-component="APicture"
                      className="a-picture"
                      data-component-id="ac558d90-18e0-4681-a717-e32914ca0de0"
                    >
                      <img
                        loading="lazy"
                        className="a-image"
                        data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2854030020250610150405.jpg"
                        src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2854030020250610150405.jpg"
                        style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className=" relative" style={{ maxWidth: 'unset' }}>
              <div id="WIDE_LEG">
                <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                  <div className="contain">
                    <div className="richTextSpan">
                      <div className="h2-text">
                        <h3> 와이드 레그 </h3>
                      </div>
                      <div className=" text-2cols">
                        <p />
                        <p>
                          - 가장 편안한 실루엣
                          <br />
                          <br />
                          - 허벅지 부분이 여유로운 실루엣
                          <br />
                          <br />- 넉넉한 와이드 레그
                        </p>
                      </div>
                      <div className=" text-2cols">
                        <p />
                        <p>
                          편안하면서도 세련된 무드를 자아내는 와이드 레그 트라우저는 모던한 감각의 디자인이 돋보입니다.
                          허벅지부터 밑단까지 전체적으로 루즈하게 떨어지며, 여유로운 실루엣이 특징입니다. 캐주얼 룩에
                          매치하거나 블레이저와 매치해 새로운 스타일을 연출해 보세요.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
              <a className="fitguide_btn" href="https://www.cos.com/ko-kr/men/trousers/wide-leg-trousers.html">
                와이드 레그 트라우저 쇼핑하기
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
                '\n    .o-text-block.u-align-center {\n        width: 60%;\n        margin-bottom: 0;\n        padding-bottom: 0;\n    }\n\n    .preamble-section .a-paragraph {\n        font-size: 50px;\n        line-height: 1.25;\n        font-weight: 700;\n    }\n\n    .h2-text {\n        margin: 0 auto;\n        width: 33%;\n        margin-bottom: 0px;\n    }\n\n    .h2-text h3 {\n        margin: 0 auto;\n        width: 40%;\n        margin-bottom: 0px;\n        text-align: center;\n    }\n\n    h2 {\n        font-size: 50px;\n        font-weight: 700;\n        line-heigh: 1.25;\n        font-size: 14px;\n    }\n\n    h3 {\n        font-size: 16px;\n        font-weight: 700;\n    }\n\n    .text-2cols {\n        display: flex;\n        margin: 0 auto;\n        width: 60%;\n        gap: 20px;\n        padding: 20px 0 60px 0\n    }\n\n    .text-2cols p {\n        width: 50%;\n    }\n\n    .text-2cols.mo-2cols .cols-right {\n        text-align: right;\n    }\n\n    .chips {\n        display: block;\n        width: 100%;\n        margin: 50px auto 50px;\n    }\n\n    .chips p {\n        font-size: 24px;\n        line-height: 34px;\n        letter-spacing: .02em;\n        color: #1b1b1b;\n        text-align: center;\n        width: 100%;\n        margin: 0 auto 20px auto;\n    }\n\n    .chips a {\n        display: inline-block;\n        text-transform: uppercase;\n        text-decoration: none;\n        letter-spacing: .0825em;\n        cursor: pointer;\n        text-align: center;\n        padding: 10px 12px 6px;\n        margin: 4px 4px 8px 0;\n        color: #1b1b1b;\n        font-size: 12px;\n        line-height: 17px;\n    }\n\n    /*.chips a:hover {background-color: #1b1b1b; color: #ffffff;}*/\n    .chips .scrollable-content {\n        position: relative;\n        padding: 0px 10px;\n        overflow-x: auto;\n        -webkit-overflow-scrolling: touch;\n        white-space: nowrap;\n        text-align: center;\n        display: flex;\n        justify-content: center;\n        gap: 10%;\n    }\n\n    .text-2cols i {\n        font-size: 13px;\n        font-style: normal;\n    }\n\n    .a-image {\n        cursor: pointer;\n    }\n\n    /*.headline-preamble-wrapper h2{    font-size: 50px;  margin-bottom: 18px;    position: absolute;    top: 50%;     left: 50%;  transform: translate(-50%); color:#fff}*/\n    .container-572651 {\n        padding-top: 0 !important\n    }\n\n    .container-572659 .headline-preamble-wrapper {\n        padding: 30px 50px\n    }\n\n    .container-572659 {\n        padding: 0 !important\n    }\n\n    @container root (min-width:1024px) {\n        .lg\\:pb-30 {\n            padding-bottom: 1.5rem;\n        }\n    }\n\n    @container root (max-width:760px) {\n        h2 {\n            font-size: 40px;\n            line-height: 1.25;\n        }\n\n        .h2-text h3 {\n            margin: 0;\n            width: 90%;\n            margin-bottom: 10px;\n            text-align: left;\n        }\n\n        .h2-text {\n            width: 100%;\n            margin: 0 20px;\n        }\n\n        .text-2cols.mo-2cols {\n            flex-direction: row;\n        }\n\n        .text-2cols.mo-2cols .cols-right {\n            width: 10%;\n        }\n\n        .o-text-block.u-align-center {\n            width: 100%;\n            padding: 0 10px;\n        }\n\n        .text-2cols {\n            width: 100%;\n            flex-direction: column;\n            padding: 0 20px 20px;\n        }\n\n        .text-2cols p {\n            width: 100%;\n        }\n\n        .text {\n            width: 100%;\n        }\n\n        .container-523574.flex.flex-col.w-full.lg\\:pb-30.pb-20.gap-20.lg\\:gap-30.manual-cpnt {\n            padding-bottom: 20px;\n        }\n\n        .chips .scrollable-content {\n            flex-direction: column;\n        }\n\n        .chips a {\n            text-align: left;\n        }\n\n        .pb-20 {\n            padding-bottom: 0rem;\n        }\n\n        .col-span-8 {\n            grid-column: span 12 / span 8;\n        }\n\n    }\n\n\n    @container root (max-width:760px) {\n\n        /* 스타일 수정 */\n        .title_box {\n            margin: 0;\n        }\n\n        .fitguide_btn {\n            margin: 0;\n            ;\n            box-sizing: border-box;\n            width: calc(100% - 60px);\n        }\n\n        .richTextSpan {\n            margin: 26px 0 12px;\n        }\n\n        .cta-section {\n            clear: both;\n        }\n\n        .mt-0 {\n            margin-top: 0;\n        }\n\n    }\n\n    @container root (min-width: 761px) {\n        .richTextSpan {\n            margin-top: 36px;\n        }\n\n        .text-2cols {\n            padding: 30px 0;\n        }\n\n        .text-2cols:nth-child(n+3) {\n            padding-top: 0;\n\n        }\n\n        .text-2cols:last-child {\n            padding-bottom: 60px;\n        }\n\n        .text-2cols.noPadding {\n            padding-top: 0;\n        }\n\n        .title_box {\n            margin-bottom: 0;\n        }\n    }\n',
            }}
          />
        </div>
      </FreeHtml>
    </>
  );
}
