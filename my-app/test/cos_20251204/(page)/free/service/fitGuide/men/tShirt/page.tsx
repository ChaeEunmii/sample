import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '핏 가이드 - 남성 티셔츠',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n.o-hero .a-heading-1.q-giga{font-size: 50px !important; line-height: 50px !important;        font-weight: 700;}\n@media(max-width:787px){\n.m-padding-30{padding-top:30px;}\n.m-padding-20{padding-top:20px;}\n.m-padding-10{padding-top:10px;}\n.o-hero .a-heading-1.q-giga{font-size: 24px !important; line-height: 28px !important;}\n}\n',
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
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div id="shop" className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="u-cols-sm-8-8 u-cols-md-12-12 u-cols-lg-24-24 u-cols-hero">
                  <div className="o-hero title_box">
                    <div className="m-teaser mobile-align-top mobile-align-left tablet-align-top tablet-align-center desktop-align-top desktop-align-center text-align-center">
                      <div className="m-double-button">
                        <a className="a-button  unsmart-underline" href="#slim">
                          슬림
                        </a>
                        <a className="a-button  unsmart-underline" href="#regular">
                          레귤러
                        </a>
                        <a className="a-button  unsmart-underline" href="#relaxed">
                          릴랙스드
                        </a>
                        <a className="a-button  unsmart-underline" href="#over">
                          오버사이즈
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className="contain">
                <div className="richTextSpan">
                  <div className="h2-text"></div>
                  <div className=" text-2cols noPadding">
                    <p />
                    <p>
                      완벽을 추구하는 기본 아이템, COS 티셔츠는 컷, 퀄리티, 그리고 신중하게 선별한 소재를 최우선으로
                      디자인되었습니다. 남성 티셔츠는 프리미엄 코튼과 리넨 패브릭으로 제작되었으며, 세련되고 고급스러운
                      컬러 팔레트로 선보입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n    .richTextSpan .pull-quote1 {\n        font-size: 16pt;\n        text-align: center;\n        line-height: 1.35em;\n        letter-spacing: 0.04em;\n        padding: 20px 0;\n    }\n\n    .o-grid-controller.u-clearfix.is-three-cols {\n        margin-bottom: 0;\n    }\n\n    .richTextSpan .pull-quote1 {\n        padding: 50px 0;\n    }\n\n    @container root (min-width: 1025px) {\n        .o-blog-text {\n            margin-top: 0;\n        }\n    }\n',
              }}
            />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n    a.a-button.unsmart-underline {\n        display: inline-block;\n        width: 240px;\n        line-height: 45px;\n        font-size: 16px;\n        color: #1b1b1b;\n        background: #fff;\n    }\n\n    a.a-button.unsmart-underline:hover {\n\n        font-weight: 700;\n\n    }\n\n    .a-link.has-underline,\n    .is-richtext a.has-underline>span {\n        color: #000;\n    }\n',
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
        <div className="cta-section pb-4 lg:pb-0">
          <div className="m-double-button" style={{ textAlign: 'center' }}>
            <a className="fitguide_btn" href="https://www.cos.com/ko-kr/men/shirts.html">
              티셔츠 쇼핑하기
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
          className="container-602456 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt"
          style={{ paddingTop: 36 }}
        >
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-602456 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-4 lg:col-end-9 lg:ml-[10%] ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="0ce5dd78-adc4-42eb-ab3f-3e5bf9347f5f"
                  >
                    <img
                      loading="lazy"
                      className="a-image initial loaded"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2853970020250610151822.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2853970020250610151822.jpg"
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
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div id="slim">
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
                      <h3> 슬림 </h3>
                    </div>
                    <div className=" text-2cols">
                      <p />
                      <p>
                        - 간결한 실루엣
                        <br />
                        <br />
                        - 전체적으로 깔끔하게 맞는 스타일
                        <br />
                        <br />- 가장 정교하게 완성한 핏
                      </p>
                    </div>
                    <div className=" text-2cols">
                      <p />
                      <p>
                        슬림 핏 티셔츠는 데일리 워드로브의 기본 아이템입니다. 몸에 꼭 맞게 제작된 정교한 실루엣으로,
                        테일러링 아이템이나 셔츠 안에 레이어링하기 좋습니다.
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
            <a className="fitguide_btn" href="https://www.cos.com/ko-kr/men/t-shirts.html">
              티셔츠 쇼핑하기
            </a>{' '}
          </div>
        </div>
        <div className="container-602450 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-602450 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="bc323f46-9892-4389-be26-67b6698f1a00"
                  >
                    <img
                      loading="lazy"
                      className="a-image loaded"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2853970020250610152013.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2853970020250610152013.jpg"
                      style={{ objectFit: 'cover' }}
                      data-was-processed="true"
                    />
                  </picture>
                </div>
              </div>
              {/*
               */}
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div id="regular"></div>
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className=" relative" style={{ maxWidth: 'unset' }}>
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain">
                  <div className="richTextSpan">
                    <div className="h2-text">
                      <h3> 레귤러 </h3>
                    </div>
                    <div className=" text-2cols">
                      <p />
                      <p>
                        - 가장 클래식한 실루엣
                        <br />
                        <br />
                        - 전체적으로 깔끔하게 떨어지는 핏<br />
                        <br />- 힙 라인에 맞는 길이
                      </p>
                    </div>
                    <div className=" text-2cols">
                      <p />
                      <p>
                        레귤러 핏 티셔츠는 남성 컬렉션의 핵심 아이템입니다. 시대를 초월한 클래식한 실루엣으로
                        디자인되어, 스타일링이 간편하고 다양하게 레이어링이 가능합니다.
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
            <a className="fitguide_btn" href="https://www.cos.com/ko-kr/men/t-shirts/regular-fit-t-shirts.html">
              레귤러 티셔츠 쇼핑하기
            </a>{' '}
          </div>
        </div>
        <div className="container-603209 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-603209 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                <div
                  className="m-free-tile lg:px-0 
  px-3.75
   "
                  style={{ cursor: 'default' }}
                >
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="aa8b95c1-0a4c-4e4c-b104-4a0aded42e61"
                  >
                    <img
                      loading="lazy"
                      className="a-image loaded"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2853970020250610152144.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2853970020250610152144.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                      data-was-processed="true"
                    />
                  </picture>
                </div>
              </div>
              {/*
               */}
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div id="relaxed"></div>
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className=" relative" style={{ maxWidth: 'unset' }}>
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain">
                  <div className="richTextSpan">
                    <div className="h2-text">
                      <h3> 릴랙스드 </h3>
                    </div>
                    <div className=" text-2cols">
                      <p />
                      <p>
                        - 편안한 실루엣
                        <br />
                        <br />
                        - 드롭 숄더 디자인
                        <br />
                        <br />- 전체적으로 루즈한 핏
                      </p>
                    </div>
                    <div className=" text-2cols">
                      <p />
                      <p>
                        릴랙스드 핏 티셔츠는 편안한 실루엣으로 디자인되어 캐주얼한 스타일에 잘 어울립니다. 여유로운
                        핏으로 활동성이 뛰어나며, 다양한 아이템과 손쉽게 레이어링할 수 있습니다.
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
            <a className="fitguide_btn" href="https://www.cos.com/ko-kr/men/t-shirts.html">
              릴랙스드 티셔츠 쇼핑하기
            </a>{' '}
          </div>
        </div>
        <div className="container-603121 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-603121 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                <div
                  className="m-free-tile lg:px-0 
  px-3.75
   "
                  style={{ cursor: 'default' }}
                >
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="bdb896a3-1539-484a-84ac-cb44b8b71a0b"
                  >
                    <img
                      loading="lazy"
                      className="a-image loaded"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2853970020250610152528.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2853970020250610152528.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                      data-was-processed="true"
                    />
                  </picture>
                </div>
              </div>
              {/*
               */}
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div id="over"></div>
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className=" relative" style={{ maxWidth: 'unset' }}>
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain">
                  <div className="richTextSpan">
                    <div className="h2-text">
                      <h3> 오버사이즈 </h3>
                    </div>
                    <div className=" text-2cols">
                      <p />
                      <p>
                        - 가장 넉넉한 실루엣
                        <br />
                        <br />
                        - 전체적으로 여유로운 핏<br />
                        <br />- 길게 떨어지는 실루엣
                      </p>
                    </div>
                    <div className=" text-2cols">
                      <p />
                      <p>
                        오버사이즈 핏 티셔츠는 여유로운 핏이 돋보이며, 편안한 무드를 담아 과장된 비율과 루즈한
                        실루엣으로 디자인되었습니다.
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
            <a className="fitguide_btn" href=" https://www.cos.com/ko-kr/men/t-shirts/oversized-t-shirts.html">
              오버사이즈 티셔츠 쇼핑하기
            </a>{' '}
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div id="cqcanvas">
            <div className="chips" style={{ fontWeight: 700 }}>
              <p>EXPLORE MORE</p>
              <div className="scrollable-content" style={{ whiteSpace: 'normal', height: 'auto' }}>
                <a href="/free/about/features/people">인터뷰</a>
                <a href="/free/about/features/stories">컬렉션</a>
                <a href="/free/about/features/places">장소</a>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n\n  .o-text-block.u-align-center {width:60%; margin-bottom:0; padding-bottom:0;}\n  .preamble-section .a-paragraph {font-size:50px; line-height:1.25; font-weight:700;}\n  .h2-text {margin:0 auto; width:33%; margin-bottom:0px;}\n  .h2-text h3{ margin: 0 auto; width: 40%; margin-bottom: 0px;     text-align: center; }\n  h2 {font-size:50px; font-weight:700;line-heigh:1.25;    font-size: 14px;}\n  h3 {  font-size: 16px;  font-weight: 700;}\n  .text-2cols {display:flex; margin:0 auto; width:60%; gap:20px; padding:20px 0 60px 0}\n  .text-2cols p {width:50%;}\n  .text-2cols.mo-2cols .cols-right  {text-align:right;}\n      .chips {display: block; width: 100%; margin: 50px auto 50px;}\n      .chips p {font-size: 24px; line-height: 34px; letter-spacing: .02em; color: #1b1b1b; text-align: center; width: 100%; margin: 0 auto 20px auto;}\n      .chips a {display: inline-block; text-transform: uppercase; text-decoration: none; letter-spacing: .0825em; cursor: pointer; text-align: center; padding: 10px 12px 6px; margin: 4px 4px 8px 0; color: #1b1b1b; font-size: 12px; line-height: 17px;}\n      /*.chips a:hover {background-color: #1b1b1b; color: #ffffff;}*/\n      .chips .scrollable-content {position: relative; padding: 0px 10px; overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: nowrap; text-align: center; display:flex; justify-content:center; gap:10%;}\n  .text-2cols i{    font-size: 13px;   font-style: normal;}\n    .a-image{cursor: pointer;}\n/*.headline-preamble-wrapper h2{    font-size: 50px;  margin-bottom: 18px;    position: absolute;    top: 50%;     left: 50%;  transform: translate(-50%); color:#fff}*/\n\n.container-572651{padding-top:0 !important}\n.container-572762 .headline-preamble-wrapper{padding: 30px 50px}\n.container-572762 {padding:0 !important}\n\n  @container root (min-width:1024px) {\n  .lg\\:pb-30 { padding-bottom:1.5rem;}\n  }\n\n  @container root (max-width:760px) {\n  h2 {font-size:40px; line-height:1.25;}\n  .h2-text h3 { margin: 0;  width: 90%;  margin-bottom: 10px;  text-align: left;}\n  .h2-text {width:100%; margin:0 20px;}\n  .text-2cols.mo-2cols {flex-direction:row;}\n  .text-2cols.mo-2cols .cols-right {width:10%;}\n  .o-text-block.u-align-center {width:100%; padding:0 10px;}\n  .text-2cols {width:100%; flex-direction: column; padding:0 20px 20px; }\n  .text-2cols p {width:100%;}\n  .text {width:100%;}\n  .container-523574.flex.flex-col.w-full.lg\\:pb-30.pb-20.gap-20.lg\\:gap-30.manual-cpnt {padding-bottom:20px;}\n  .chips .scrollable-content {flex-direction:column;}\n  .chips a {text-align:left;}\n  .pb-20 {  padding-bottom: 0rem;}\n.col-span-8 {\n    grid-column: span 12 / span 8;\n}\n\n  }\n\n\n    @container root (max-width:760px) {\n\n        /* 스타일 수정 */\n        .title_box {\n            margin: 0;\n        }\n\n        .fitguide_btn {\n            margin: 0;\n            ;\n            box-sizing: border-box;\n            width: calc(100% - 60px);\n        }\n\n        .richTextSpan {\n            margin: 26px 0 12px;\n        }\n\n\n    }\n\n    @container root (min-width: 761px) {\n        .richTextSpan {\n            margin-top: 36px;\n        }\n\n        .text-2cols {\n            padding: 30px 0;\n        }\n\n        .text-2cols:nth-child(n+3) {\n            padding-top: 0;\n\n        }\n\n        .text-2cols:last-child {\n            padding-bottom: 60px;\n        }\n\n        .text-2cols.noPadding {\n            padding-top: 0;\n        }\n\n        .title_box {\n            margin-bottom: 0;\n        }\n    }\n\n',
          }}
        />
      </div>
    </FreeHtml>
  );
}
