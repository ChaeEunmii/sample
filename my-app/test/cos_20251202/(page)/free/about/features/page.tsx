'use client';

import FreeHtml from '@/views/freehtml/FreeHtml';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'features',
// };

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n#magazine .a-heading-1.q-peta{font-size: 40px !important; line-height: 44px !important;}\n#magazine .o-hero{width: 100%; margin: 0 auto; padding: 0;}\n#magazine .o-text-block{padding: 0;}\n\n#magazine .o-hero .m-teaser{width: 100%; max-width: 100%; z-index:1; right:auto; position:absolute; top:90%;}\n#magazine .o-hero .m-teaser .a-heading-1{text-align:center; font-size:5.625rem; font-weight:700; letter-spacing:-.02em; line-height:95%; text-transform:uppercase;}\n#magazine .o-hero .m-teaser .a-label{font-size: 14px; line-height: 22px;}\n#magazine .o-hero .m-teaser .a-link{font-size: 12px;}\n#magazine .m-free-tile .headline-preamble-wrapper .a-heading-2{text-transform: none; letter-spacing: .04em;}\n#magazine .is-four-cols{margin-top: 10px;}\n#magazine .is-four-cols .a-heading-2{font-size: 24px; line-height: 30px;}\n#magazine .is-four-cols .a-label{font-size: 13px;}\n.m-free-tile .headline-preamble-wrapper .a-heading-2 {font-size:18px; font-weight:500; padding:10px 0;}\n.m-free-tile .a-picture img {cursor:pointer;}\n.chips {width: 70%;}\n  .chips { display: block; width: 100%; margin: 50px auto 50px;    font-weight: 600;}\n    .chips p {font-size: 24px; line-height: 34px; letter-spacing: .02em; color: #1b1b1b; text-align: center; width: 100%; margin: 0 auto 20px auto;}\n    .chips a {display: inline-block; text-transform: uppercase; text-decoration: none; letter-spacing: .0825em; cursor: pointer; padding:20px; color: #1b1b1b; font-size: 18px; line-height: 17px;}\n    /*.chips a:hover {background-color: #1b1b1b; color: #ffffff;}*/\n    .chips .scrollable-content {position: relative; padding: 0px 10px; overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: nowrap; text-align: center; display:flex; justify-content:center; gap:10%;}\n\n.magazine.cta .o-text-block .a-heading-1{font-weight: 600;}\n.o-spacing{height: 0px;}\n\n@media (max-width: 767px){\n  #magazine{padding-top: 5px;}\n  #magazine .a-heading-1.q-peta{font-size: 30px !important; line-height: 34px !important;}\n  #magazine .o-hero .m-teaser{margin-left: 20px; width: 83.3333%; padding: 0 4px; bottom: auto; top: 76%; transform: translateY(-50%); left: auto;}\n  #magazine .o-hero .m-teaser .a-heading-1{font-size: 24px; line-height: 29px;}\n.chips {width:1005;}\n.chips .scrollable-content {flex-direction:column;}\n.chips a {text-align:left;}\n\n}\n\n/* mobile */\n@media (max-width: 1023px) {\n.grid-cols-12 {grid-template-columns: repeat(1, minmax(0, 1fr)); padding:0 10px;}\n}\n\n  @media (max-width: 1024px) {\n    .two-column-row .column.col-span-12 .m-free-tile .headline-preamble-wrapper,\n.two-column-row .column.col-span-12 .m-free-tile .cta-wrapper,\n      .one-column-row .column.col-span-12 .m-free-tile .headline-preamble-wrapper,\n.one-column-row .column.col-span-12 .m-free-tile .cta-wrapper   {\n        padding-left: 0;\n        padding-right: 0;\n    }\n}\n\n',
          }}
        />
        <div className="main magazine" id="magazine">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className=" relative" style={{ maxWidth: 'unset' }}>
              <div className="o-spacing" />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n.a-label.js-a-label a{color:#fff;}\n.magazine h1, .magazine h2 {\nfont-size: 64px;\n}\n/*\n@media screen and (max-width: 1023px) {\n.relative.w-full.theme-block-dark img {\nobject-position: 5% 0;\n}\n}\n*/\n\n.container-649411 .grid .column:last-child img {\ncontent: url('https://image.thehyundai.com/cos/hyundai/2025/10/28/750x1125_CASHMERE_MW_02.jpg');\n}\n\n",
                }}
              />
              <div
                style={{ width: '100%' }}
                className="theme-block-dark lg:theme-block-dark relative overflow-hidden text-clip bg-block text-center text-block flex lg:flex h-[100vh] max-h-full snap-end "
              >
                <a className=" relative aspect-5/9 md:aspect-16/10 h-full w-full bg-block text-block theme-block-dark lg:theme-block-dark ">
                  <img
                    alt="women low res"
                    className="absolute inset-0 text-transparent h-full w-full object-cover object-[50%_0%] hidden-new lg:block"
                    data-nimg="fill"
                    sizes="100vw"
                    srcSet="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2912172020250917155048.jpg"
                  />
                  <img
                    alt=""
                    className="h-full w-full object-cover object-[50%_0%] lg:hidden"
                    data-nimg="fill"
                    src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2912172020250917085215.jpg"
                  />
                </a>
                <div
                  style={{ zIndex: 2 }}
                  className="absolute left-0 top-0 flex h-full w-full flex-col theme-block-dark lg:theme-block-dark justify-end items-start pointer-events-none"
                >
                  <div className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20 ">
                    <a>
                      <h2
                        className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop pb-7.5 text-current"
                        data-testid="heading"
                        style={{ color: '#' }}
                      >
                        FEATURES
                      </h2>
                    </a>
                    <a className="">
                      <p className="text-center font_m_semibold lg:font_small_l_semibold pb-15 pt-5 " />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              {/* o-text-block */}
              <div className="o-text-block  u-align-center">
                <div className="headign-section">
                  <h1 className="a-heading-1 q-alpha" style={{ cursor: 'default' }}>
                    <span style={{ textAlign: 'left' }}>
                      여성과 남성을 위한 디자인 스토리와 함께, 문화와 패션에 대한 인터뷰를 확인해 보세요.{' '}
                    </span>
                  </h1>
                </div>
              </div>
              {/*// o-text-block */}
            </div>
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div id="cqcanvas">
                <div className="chips">
                  <p>DISCOVER MORE STORIES</p>
                  <div className="scrollable-content" style={{ whiteSpace: 'normal', height: 'auto' }}>
                    <a href="https://www.cos.com/ko-kr/features/people.html">인터뷰</a>
                    <a href="https://www.cos.com/ko-kr/features/stories.html">컬렉션</a>
                    <a href="https://www.cos.com/ko-kr/features/styling.html">스타일링</a>
                    <a href="https://www.cos.com/ko-kr/features/places.html">장소</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div
              className="container-652952 flex flex-col gap-20 lg:gap-30 lg:px-5 w-full lg:pb-30 pb-20 manual-cpnt"
              style={{ paddingTop: 36 }}
            >
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row two-column-row load-more-652952 ">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-8 md:gap-x-5 col-span-12 gap-y-5 pt-0 ">
                  <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-2 lg:col-end-7 ">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        onClick={() => {
                          window.location.href =
                            'https://www.cos.com/ko-kr/features/stories/the-womens-winter-capsule-wardrobe.html';
                        }}
                        data-component-id="13d9d0c6-0b6d-4631-b790-da7b3e55d3c5"
                      >
                        <img
                          loading="lazy"
                          className="a-image loaded"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2959640020251113161009.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2959640020251113161009.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                          data-was-processed="true"
                        />
                      </picture>
                      <div className="headline-preamble-wrapper" style={{ marginBottom: 11 }}>
                        <h2 style={{ lineHeight: '19px', marginBottom: 6 }} className="a-heading-2 ">
                          여성 겨울 캡슐 워드로브&nbsp;
                        </h2>
                        <div className="relative font_s_regular ">
                          <div className="absolute bottom-0 right-0 bg-main text-main before:absolute before:left-[-1.875rem] before:z-50 before:h-full before:w-[1.875rem] before:bg-[transparant] before:bg-gradient-to-l before:from-[var(--color-base-white)] before:to-[2.5rem]">
                            <button
                              className="hidden-new m-0 p-0 appearance-none bg-main-button text-main cursor-pointer pl-3 tw-underline readMoreBtn"
                              type="button"
                              style={{ border: 'none' }}
                              // onclick="handleReadmoreDes(this)"
                            >
                              더 보기
                            </button>
                          </div>
                          <div className="hidden-new relative z-behind fullContent">
                            <p className="!normal-case" style={{ cursor: 'default' }}>
                              <span
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordWrap: 'break-word',
                                }}
                              >
                                섬세한 소재와 생동감 있는 컬러로 완성한 워드로브. 리치한 아우터웨어, 클래식한 니트웨어,
                                그리고 세련된 파티 아이템까지, 겨울 시즌 무드를 담은 컬렉션을 만나보세요.
                              </span>
                            </p>
                            <button
                              className="m-0 p-0 appearance-none bg-main-button text-main cursor-pointer tw-underline py-3 pr-3 readLessBtn"
                              type="button"
                              // onclick="handleReadlessDes(this)"
                              style={{ border: 'none' }}
                            >
                              접기
                            </button>
                          </div>
                          <div className="line-clamp-2 !normal-case clampedContent">
                            <p className="!normal-case" style={{ lineHeight: '19px' }}>
                              <span
                                className="content-full"
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordBreak: 'break-word',
                                }}
                              >
                                섬세한 소재와 생동감 있는 컬러로 완성한 워드로브. 리치한 아우터웨어, 클래식한 니트웨어,
                                그리고 세련된 파티 아이템까지, 겨울 시즌 무드를 담은 컬렉션을 만나보세요.
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="cta-wrapper noComma">
                        <a
                          target="_self"
                          className="a-link cta-link  font-semibold !text-[13px]"
                          style={{
                            lineHeight: '19px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                          }}
                          href="https://www.cos.com/ko-kr/features/stories/the-womens-winter-capsule-wardrobe.html"
                        >
                          더 보기
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="column relative col-span-12 w-full h-full lg:col-span-5   ">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        onClick={() => {
                          window.location.href =
                            'https://www.cos.com/ko-kr/features/stories/the-mens-winter-capsule-wardrobe.html';
                        }}
                        data-component-id="410f6a6d-e1bd-42cd-9c5c-427e74125b53"
                      >
                        <img
                          loading="lazy"
                          className="a-image loaded"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2959641020251113160958.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2959641020251113160958.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                          data-was-processed="true"
                        />
                      </picture>
                      <div className="headline-preamble-wrapper" style={{ marginBottom: 11 }}>
                        <h2 style={{ lineHeight: '19px', marginBottom: 6 }} className="a-heading-2 ">
                          남성 겨울 캡슐 워드로브&nbsp;
                        </h2>
                        <div className="relative font_s_regular ">
                          <div className="absolute bottom-0 right-0 bg-main text-main before:absolute before:left-[-1.875rem] before:z-50 before:h-full before:w-[1.875rem] before:bg-[transparant] before:bg-gradient-to-l before:from-[var(--color-base-white)] before:to-[2.5rem]">
                            <button
                              className="hidden-new m-0 p-0 appearance-none bg-main-button text-main cursor-pointer pl-3 tw-underline readMoreBtn"
                              type="button"
                              style={{ border: 'none' }}
                              // onclick="handleReadmoreDes(this)"
                            >
                              더 보기
                            </button>
                          </div>
                          <div className="hidden-new relative z-behind fullContent">
                            <p className="!normal-case" style={{ cursor: 'default' }}>
                              <span
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordWrap: 'break-word',
                                }}
                              >
                                COS의 겨울 시즌 아이템을 만나보세요. 헤리티지에서 영감을 받은 소재와 계절감 있는 컬러
                                팔레트가 어우러져 겨울 스타일을 완성합니다.&nbsp;
                              </span>
                            </p>
                            <button
                              className="m-0 p-0 appearance-none bg-main-button text-main cursor-pointer tw-underline py-3 pr-3 readLessBtn"
                              type="button"
                              // onclick="handleReadlessDes(this)"
                              style={{ border: 'none' }}
                            >
                              접기
                            </button>
                          </div>
                          <div className="line-clamp-2 !normal-case clampedContent">
                            <p className="!normal-case" style={{ lineHeight: '19px' }}>
                              <span
                                className="content-full"
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordBreak: 'break-word',
                                }}
                              >
                                COS의 겨울 시즌 아이템을 만나보세요. 헤리티지에서 영감을 받은 소재와 계절감 있는 컬러
                                팔레트가 어우러져 겨울 스타일을 완성합니다.&nbsp;
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="cta-wrapper noComma">
                        <a
                          target="_self"
                          className="a-link cta-link  font-semibold !text-[13px]"
                          style={{
                            lineHeight: '19px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                          }}
                          href="https://www.cos.com/ko-kr/features/stories/the-mens-winter-capsule-wardrobe.html"
                        >
                          더 보기
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*// o-grid-controller */}
              </div>
            </div>
            <div className="container-652947 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-652947 ">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
                  <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        onClick={() => {
                          window.location.href =
                            'https://www.cos.com/ko-kr/features/people/perspectives-rosie-huntington-whiteley.html';
                        }}
                        data-component-id="5aa89728-acad-466a-a3cf-e9a936154c26"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2947510020251002154312.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2947510020251002154312.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        />
                      </picture>
                      <div className="headline-preamble-wrapper" style={{ marginBottom: 11 }}>
                        <h2 style={{ lineHeight: '19px', marginBottom: 6 }} className="a-heading-2 ">
                          모델 로지 헌팅턴 휘틀리의 순간 속 시선
                        </h2>
                        <div className="relative font_s_regular ">
                          <div className="absolute bottom-0 right-0 bg-main text-main before:absolute before:left-[-1.875rem] before:z-50 before:h-full before:w-[1.875rem] before:bg-[transparant] before:bg-gradient-to-l before:from-[var(--color-base-white)] before:to-[2.5rem]">
                            <button
                              className="hidden-new m-0 p-0 appearance-none bg-main-button text-main cursor-pointer pl-3 tw-underline readMoreBtn"
                              type="button"
                              style={{ border: 'none' }}
                              // onclick="handleReadmoreDes(this)"
                            >
                              더 보기
                            </button>
                          </div>
                          <div className="hidden-new relative z-behind fullContent">
                            <p className="!normal-case" style={{ cursor: 'default' }}>
                              <span
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordWrap: 'break-word',
                                }}
                              >
                                COS 2025 가을 겨울 런웨이를 향해 달리는 뉴욕 택시 안, 그 안에서 펼쳐지는 사색과 기억의
                                순간.{' '}
                              </span>
                            </p>
                            <button
                              className="m-0 p-0 appearance-none bg-main-button text-main cursor-pointer tw-underline py-3 pr-3 readLessBtn"
                              type="button"
                              // onclick="handleReadlessDes(this)"
                              style={{ border: 'none' }}
                            >
                              접기
                            </button>
                          </div>
                          <div className="line-clamp-2 !normal-case clampedContent">
                            <p className="!normal-case" style={{ lineHeight: '19px' }}>
                              <span
                                className="content-full"
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordBreak: 'break-word',
                                }}
                              >
                                COS 2025 가을 겨울 런웨이를 향해 달리는 뉴욕 택시 안, 그 안에서 펼쳐지는 사색과 기억의
                                순간.{' '}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="cta-wrapper noComma">
                        <a
                          target="_self"
                          className="a-link cta-link  font-semibold !text-[13px]"
                          style={{
                            lineHeight: '19px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                          }}
                          href="https://www.cos.com/ko-kr/features/people/perspectives-rosie-huntington-whiteley.html"
                        >
                          더보기
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*
                   */}
                </div>
              </div>
            </div>
            <div className="o-spacing" />
            <div className="container-652927 flex flex-col gap-20 lg:gap-30 lg:px-5 w-full lg:pb-30 pb-20 manual-cpnt">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row two-column-row load-more-652927 ">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-8 md:gap-x-5 col-span-12 gap-y-5 pt-0 ">
                  <div className="column relative col-span-8 w-full h-full lg:col-span-4  lg:col-start-3 lg:col-end-7 ">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        onClick={() => {
                          window.location.href =
                            'https://www.cos.com/ko-kr/features/stories/the-womens-aw25-runway-collection.html';
                        }}
                        data-component-id="ea7593df-2b5c-4897-8d73-559dad6d23ec"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2947510020251002154342.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2947510020251002154342.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        />
                      </picture>
                      <div className="headline-preamble-wrapper" style={{ marginBottom: 11 }}>
                        <h2 style={{ lineHeight: '19px', marginBottom: 6 }} className="a-heading-2 ">
                          코스 여성 가을 겨울 2025 런웨이 컬렉션
                        </h2>
                        <div className="relative font_s_regular ">
                          <div className="absolute bottom-0 right-0 bg-main text-main before:absolute before:left-[-1.875rem] before:z-50 before:h-full before:w-[1.875rem] before:bg-[transparant] before:bg-gradient-to-l before:from-[var(--color-base-white)] before:to-[2.5rem]">
                            <button
                              className="hidden-new m-0 p-0 appearance-none bg-main-button text-main cursor-pointer pl-3 tw-underline readMoreBtn"
                              type="button"
                              style={{ border: 'none' }}
                              // onclick="handleReadmoreDes(this)"
                            >
                              더 보기
                            </button>
                          </div>
                          <div className="hidden-new relative z-behind fullContent">
                            <p className="!normal-case" style={{ cursor: 'default' }}>
                              <span
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordWrap: 'break-word',
                                }}
                              >
                                뛰어난 장인 정신과 구조적인 디자인, 그리고 섬세한 디테일이 돋보이는 2025 가을 겨울
                                런웨이 컬렉션의 주요 아이템을 만나보세요.{' '}
                              </span>
                            </p>
                            <button
                              className="m-0 p-0 appearance-none bg-main-button text-main cursor-pointer tw-underline py-3 pr-3 readLessBtn"
                              type="button"
                              // onclick="handleReadlessDes(this)"
                              style={{ border: 'none' }}
                            >
                              접기
                            </button>
                          </div>
                          <div className="line-clamp-2 !normal-case clampedContent">
                            <p className="!normal-case" style={{ lineHeight: '19px' }}>
                              <span
                                className="content-full"
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordBreak: 'break-word',
                                }}
                              >
                                뛰어난 장인 정신과 구조적인 디자인, 그리고 섬세한 디테일이 돋보이는 2025 가을 겨울
                                런웨이 컬렉션의 주요 아이템을 만나보세요.{' '}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="cta-wrapper noComma">
                        <a
                          target="_self"
                          className="a-link cta-link  font-semibold !text-[13px]"
                          style={{
                            lineHeight: '19px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                          }}
                          href="https://www.cos.com/ko-kr/features/stories/the-womens-aw25-runway-collection.html"
                        >
                          더 보기
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="column relative col-span-8 w-full h-full lg:col-span-4   ">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        onClick={() => {
                          window.location.href =
                            'https://www.cos.com/ko-kr/features/stories/autumn-winter-colour-palette.html';
                        }}
                        data-component-id="f599621f-9e02-48fc-9e8a-fe132f3f8c19"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2947511020251002154424.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2947511020251002154424.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        />
                      </picture>
                      <div className="headline-preamble-wrapper" style={{ marginBottom: 11 }}>
                        <h2 style={{ lineHeight: '19px', marginBottom: 6 }} className="a-heading-2 ">
                          코스 컬러 에딧: 2025 가을 겨울 컬러 팔레트{' '}
                        </h2>
                        <div className="relative font_s_regular ">
                          <div className="absolute bottom-0 right-0 bg-main text-main before:absolute before:left-[-1.875rem] before:z-50 before:h-full before:w-[1.875rem] before:bg-[transparant] before:bg-gradient-to-l before:from-[var(--color-base-white)] before:to-[2.5rem]">
                            <button
                              className="hidden-new m-0 p-0 appearance-none bg-main-button text-main cursor-pointer pl-3 tw-underline readMoreBtn"
                              type="button"
                              style={{ border: 'none' }}
                              // onclick="handleReadmoreDes(this)"
                            >
                              더 보기
                            </button>
                          </div>
                          <div className="hidden-new relative z-behind fullContent">
                            <p className="!normal-case" style={{ cursor: 'default' }}>
                              <span
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordWrap: 'break-word',
                                }}
                              >
                                2025 가을 겨울 컬렉션의 컬러 팔레트를 확인해 보세요. 가을 무드의 뉴트럴 톤부터 깊은 겨울
                                톤까지 만날 수 있습니다.{' '}
                              </span>
                            </p>
                            <button
                              className="m-0 p-0 appearance-none bg-main-button text-main cursor-pointer tw-underline py-3 pr-3 readLessBtn"
                              type="button"
                              // onclick="handleReadlessDes(this)"
                              style={{ border: 'none' }}
                            >
                              접기
                            </button>
                          </div>
                          <div className="line-clamp-2 !normal-case clampedContent">
                            <p className="!normal-case" style={{ lineHeight: '19px' }}>
                              <span
                                className="content-full"
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordBreak: 'break-word',
                                }}
                              >
                                2025 가을 겨울 컬렉션의 컬러 팔레트를 확인해 보세요. 가을 무드의 뉴트럴 톤부터 깊은 겨울
                                톤까지 만날 수 있습니다.{' '}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="cta-wrapper noComma">
                        <a
                          target="_self"
                          className="a-link cta-link  font-semibold !text-[13px]"
                          style={{
                            lineHeight: '19px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                          }}
                          href="https://www.cos.com/ko-kr/features/stories/autumn-winter-colour-palette.html"
                        >
                          더 보기
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*
	            
	            
      
      

*/}
                </div>
                {/*// o-grid-controller */}
              </div>
            </div>
            <div className="container-652924 flex flex-col gap-20 lg:gap-30 lg:px-5 w-full lg:pb-30 pb-20 manual-cpnt">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row two-column-row load-more-652924 ">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-8 md:gap-x-5 col-span-12 gap-y-5 pt-0 ">
                  <div className="column relative col-span-8 w-full h-full lg:col-span-4  lg:col-start-3 lg:col-end-7 ">
                    <div
                      className="m-free-tile lg:px-0 
 
   "
                      style={{ cursor: 'default' }}
                    >
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        onClick={() => {
                          window.location.href =
                            'https://www.cos.com/ko-kr/features/stories/the-cashmere-clothing-edit.html';
                        }}
                        data-component-id="16f07172-c03d-44f8-a9d2-04ed790eecd9"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2954360020251028160201.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2954360020251028160201.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        />
                      </picture>
                      <div className="headline-preamble-wrapper" style={{ marginBottom: 11 }}>
                        <h2 style={{ lineHeight: '19px', marginBottom: 6 }} className="a-heading-2 ">
                          COS&nbsp;컬렉션:&nbsp;여성&nbsp;캐시미어
                        </h2>
                        <div className="relative font_s_regular ">
                          <div className="absolute bottom-0 right-0 bg-main text-main before:absolute before:left-[-1.875rem] before:z-50 before:h-full before:w-[1.875rem] before:bg-[transparant] before:bg-gradient-to-l before:from-[var(--color-base-white)] before:to-[2.5rem]">
                            <button
                              className="hidden-new m-0 p-0 appearance-none bg-main-button text-main cursor-pointer pl-3 tw-underline readMoreBtn"
                              type="button"
                              style={{ border: 'none' }}
                              // onclick="handleReadmoreDes(this)"
                            >
                              더 보기
                            </button>
                          </div>
                          <div className="hidden-new relative z-behind fullContent">
                            <p className="!normal-case" style={{ cursor: 'default' }}>
                              <span
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordWrap: 'break-word',
                                }}
                              >
                                시즌에&nbsp;구애받지&nbsp;않은&nbsp;퓨어&nbsp;캐시미어&nbsp;컬렉션.&nbsp;타임리스&nbsp;디자인과&nbsp;장인&nbsp;정신이
                                돋보이는 스타일을 만나보세요.&nbsp;&nbsp;
                              </span>
                            </p>
                            <button
                              className="m-0 p-0 appearance-none bg-main-button text-main cursor-pointer tw-underline py-3 pr-3 readLessBtn"
                              type="button"
                              // onclick="handleReadlessDes(this)"
                              style={{ border: 'none' }}
                            >
                              접기
                            </button>
                          </div>
                          <div className="line-clamp-2 !normal-case clampedContent">
                            <p className="!normal-case" style={{ lineHeight: '19px' }}>
                              <span
                                className="content-full"
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordBreak: 'break-word',
                                }}
                              >
                                시즌에&nbsp;구애받지&nbsp;않은&nbsp;퓨어&nbsp;캐시미어&nbsp;컬렉션.&nbsp;타임리스&nbsp;디자인과&nbsp;장인&nbsp;정신이
                                돋보이는 스타일을 만나보세요.&nbsp;&nbsp;
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="cta-wrapper noComma">
                        <a
                          target="_self"
                          className="a-link cta-link  font-semibold !text-[13px]"
                          style={{
                            lineHeight: '19px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                          }}
                          href="https://www.cos.com/ko-kr/features/stories/the-cashmere-clothing-edit.html"
                        >
                          더 보기
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="column relative col-span-8 w-full h-full lg:col-span-4   ">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        onClick={() => {
                          window.location.href =
                            'https://www.cos.com/ko-kr/features/stories/the-cashmere-clothing-menswear-edit.html';
                        }}
                        data-component-id="714144a5-c4e9-4b4d-a1fa-ff0a7744ff0f"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2885441020250805092416.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2885441020250805092416.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        />
                      </picture>
                      <div className="headline-preamble-wrapper" style={{ marginBottom: 11 }}>
                        <h2 style={{ lineHeight: '19px', marginBottom: 6 }} className="a-heading-2 ">
                          COS&nbsp;컬렉션:&nbsp;남성&nbsp;캐시미어
                        </h2>
                        <div className="relative font_s_regular ">
                          <div className="absolute bottom-0 right-0 bg-main text-main before:absolute before:left-[-1.875rem] before:z-50 before:h-full before:w-[1.875rem] before:bg-[transparant] before:bg-gradient-to-l before:from-[var(--color-base-white)] before:to-[2.5rem]">
                            <button
                              className="hidden-new m-0 p-0 appearance-none bg-main-button text-main cursor-pointer pl-3 tw-underline readMoreBtn"
                              type="button"
                              style={{ border: 'none' }}
                              // onclick="handleReadmoreDes(this)"
                            >
                              더 보기
                            </button>
                          </div>
                          <div className="hidden-new relative z-behind fullContent">
                            <p className="!normal-case" style={{ cursor: 'default' }}>
                              <span
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordWrap: 'break-word',
                                }}
                              >
                                타임리스&nbsp;디자인과&nbsp;장인 정신이 돋보이는
                                스타일.&nbsp;시간을&nbsp;초월한&nbsp;우아함을&nbsp;담은&nbsp;캐시미어&nbsp;컬렉션은&nbsp;시즌&nbsp;아이템을&nbsp;넘어,&nbsp;오래도록&nbsp;함께할&nbsp;수&nbsp;있는
                                아이템입니다
                              </span>
                            </p>
                            <button
                              className="m-0 p-0 appearance-none bg-main-button text-main cursor-pointer tw-underline py-3 pr-3 readLessBtn"
                              type="button"
                              // onclick="handleReadlessDes(this)"
                              style={{ border: 'none' }}
                            >
                              접기
                            </button>
                          </div>
                          <div className="line-clamp-2 !normal-case clampedContent">
                            <p className="!normal-case" style={{ lineHeight: '19px' }}>
                              <span
                                className="content-full"
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordBreak: 'break-word',
                                }}
                              >
                                타임리스&nbsp;디자인과&nbsp;장인 정신이 돋보이는
                                스타일.&nbsp;시간을&nbsp;초월한&nbsp;우아함을&nbsp;담은&nbsp;캐시미어&nbsp;컬렉션은&nbsp;시즌&nbsp;아이템을&nbsp;넘어,&nbsp;오래도록&nbsp;함께할&nbsp;수&nbsp;있는
                                아이템입니다
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="cta-wrapper noComma">
                        <a
                          target="_self"
                          className="a-link cta-link  font-semibold !text-[13px]"
                          style={{
                            lineHeight: '19px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                          }}
                          href="https://www.cos.com/ko-kr/features/stories/the-cashmere-clothing-menswear-edit.html"
                        >
                          더 보기
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*
	            
	            
      
      

*/}
                </div>
                {/*// o-grid-controller */}
              </div>
            </div>
            <div className="container-652949 flex flex-col gap-20 lg:gap-30 lg:px-5 w-full lg:pb-30 pb-20 manual-cpnt">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row two-column-row load-more-652949 ">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-8 md:gap-x-5 col-span-12 gap-y-5 pt-0 ">
                  <div className="column relative col-span-6 w-full h-full lg:col-span-3  lg:col-start-4 lg:col-end-7 ">
                    <div
                      className="m-free-tile lg:px-0 
 
   "
                      style={{ cursor: 'default' }}
                    >
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        onClick={() => {
                          window.location.href =
                            'https://cos.com/ko-kr/features/stories/the-womens-outerwear-collection.html';
                        }}
                        data-component-id="079e7779-7400-442a-90a6-15374e512ce2"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2918910020250922112848.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2918910020250922112848.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        />
                      </picture>
                      <div className="headline-preamble-wrapper" style={{ marginBottom: 11 }}>
                        <h2 style={{ lineHeight: '19px', marginBottom: 6 }} className="a-heading-2 ">
                          여성 아우터웨어 컬렉션&nbsp;
                        </h2>
                        <div className="relative font_s_regular ">
                          <div className="absolute bottom-0 right-0 bg-main text-main before:absolute before:left-[-1.875rem] before:z-50 before:h-full before:w-[1.875rem] before:bg-[transparant] before:bg-gradient-to-l before:from-[var(--color-base-white)] before:to-[2.5rem]">
                            <button
                              className="hidden-new m-0 p-0 appearance-none bg-main-button text-main cursor-pointer pl-3 tw-underline readMoreBtn"
                              type="button"
                              style={{ border: 'none' }}
                              // onclick="handleReadmoreDes(this)"
                            >
                              더 보기
                            </button>
                          </div>
                          <div className="hidden-new relative z-behind fullContent">
                            <p className="!normal-case" style={{ cursor: 'default' }}>
                              <span
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordWrap: 'break-word',
                                }}
                              >
                                모던한 감각으로 재해석한 클래식 아우터웨어의 겨울 워드로브&nbsp;
                              </span>
                            </p>
                            <button
                              className="m-0 p-0 appearance-none bg-main-button text-main cursor-pointer tw-underline py-3 pr-3 readLessBtn"
                              type="button"
                              // onclick="handleReadlessDes(this)"
                              style={{ border: 'none' }}
                            >
                              접기
                            </button>
                          </div>
                          <div className="line-clamp-2 !normal-case clampedContent">
                            <p className="!normal-case" style={{ lineHeight: '19px' }}>
                              <span
                                className="content-full"
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordBreak: 'break-word',
                                }}
                              >
                                모던한 감각으로 재해석한 클래식 아우터웨어의 겨울 워드로브&nbsp;
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="cta-wrapper noComma">
                        <a
                          target="_self"
                          className="a-link cta-link  font-semibold !text-[13px]"
                          style={{
                            lineHeight: '19px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                          }}
                          href="https://cos.com/ko-kr/features/stories/the-womens-outerwear-collection.html"
                        >
                          더 보기
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*
	            
	            
      
      






      
	            
	            
	            
	            
	            
          
          
          
          
	            




















*/}
                  <div className="column relative col-span-6 w-full h-full lg:col-span-3   ">
                    <div
                      className="m-free-tile lg:px-0 
 
   "
                      style={{ cursor: 'default' }}
                    >
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        onClick={() => {
                          window.location.href =
                            'https://cos.com/ko-kr/features/stories/the-mens-outerwear-collection.html';
                        }}
                        data-component-id="75921215-0270-465d-ae5c-0076378dba2e"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2918911020250922112855.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2918911020250922112855.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        />
                      </picture>
                      <div className="headline-preamble-wrapper" style={{ marginBottom: 11 }}>
                        <h2 style={{ lineHeight: '19px', marginBottom: 6 }} className="a-heading-2 ">
                          COS 컬렉션: 남성 아우터웨어
                        </h2>
                        <div className="relative font_s_regular ">
                          <div className="absolute bottom-0 right-0 bg-main text-main before:absolute before:left-[-1.875rem] before:z-50 before:h-full before:w-[1.875rem] before:bg-[transparant] before:bg-gradient-to-l before:from-[var(--color-base-white)] before:to-[2.5rem]">
                            <button
                              className="hidden-new m-0 p-0 appearance-none bg-main-button text-main cursor-pointer pl-3 tw-underline readMoreBtn"
                              type="button"
                              style={{ border: 'none' }}
                              // onclick="handleReadmoreDes(this)"
                            >
                              더 보기
                            </button>
                          </div>
                          <div className="hidden-new relative z-behind fullContent">
                            <p className="!normal-case" style={{ cursor: 'default' }}>
                              <span
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordWrap: 'break-word',
                                }}
                              >
                                2025 가을 겨울 컬렉션에서 선보이는 코트와 재킷&nbsp;
                              </span>
                            </p>
                            <button
                              className="m-0 p-0 appearance-none bg-main-button text-main cursor-pointer tw-underline py-3 pr-3 readLessBtn"
                              type="button"
                              // onclick="handleReadlessDes(this)"
                              style={{ border: 'none' }}
                            >
                              접기
                            </button>
                          </div>
                          <div className="line-clamp-2 !normal-case clampedContent">
                            <p className="!normal-case" style={{ lineHeight: '19px' }}>
                              <span
                                className="content-full"
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordBreak: 'break-word',
                                }}
                              >
                                2025 가을 겨울 컬렉션에서 선보이는 코트와 재킷&nbsp;
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="cta-wrapper noComma">
                        <a
                          target="_self"
                          className="a-link cta-link  font-semibold !text-[13px]"
                          style={{
                            lineHeight: '19px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                          }}
                          href="https://cos.com/ko-kr/features/stories/the-mens-outerwear-collection.html"
                        >
                          더 보기
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*// o-grid-controller */}
              </div>
            </div>
            <div className="container-652910 flex flex-col gap-20 lg:gap-30 lg:px-5 w-full lg:pb-30 pb-20 manual-cpnt">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row two-column-row load-more-652910 ">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-8 md:gap-x-5 col-span-12 gap-y-5 pt-0 ">
                  <div className="column relative col-span-8 w-full h-full lg:col-span-4  lg:col-start-3 lg:col-end-7 ">
                    <div className="m-free-tile lg:px-0 " style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        onClick={() => {
                          window.location.href =
                            'https://www.cos.com/ko-kr/features/stories/the-womens-autumn-capsule-wardrobe-2025.html';
                        }}
                        data-component-id="6129a0a5-f3e9-407e-ad20-7a6686762ff9"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2906650020250829094053.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2906650020250829094053.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        />
                      </picture>
                      <div className="headline-preamble-wrapper" style={{ marginBottom: 11 }}>
                        <h2 style={{ lineHeight: '19px', marginBottom: 6 }} className="a-heading-2 ">
                          여성 가을 캡슐 워드로브
                        </h2>
                        <div className="relative font_s_regular ">
                          <div className="absolute bottom-0 right-0 bg-main text-main before:absolute before:left-[-1.875rem] before:z-50 before:h-full before:w-[1.875rem] before:bg-[transparant] before:bg-gradient-to-l before:from-[var(--color-base-white)] before:to-[2.5rem]">
                            <button
                              className="hidden-new m-0 p-0 appearance-none bg-main-button text-main cursor-pointer pl-3 tw-underline readMoreBtn"
                              type="button"
                              style={{ border: 'none' }}
                              // onclick="handleReadmoreDes(this)"
                            >
                              더 보기
                            </button>
                          </div>
                          <div className="hidden-new relative z-behind fullContent">
                            <p className="!normal-case" style={{ cursor: 'default' }}>
                              <span
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordWrap: 'break-word',
                                }}
                              >
                                시즌에 맞게 큐레이팅한 COS 시그니처 아이템
                              </span>
                            </p>
                            <button
                              className="m-0 p-0 appearance-none bg-main-button text-main cursor-pointer tw-underline py-3 pr-3 readLessBtn"
                              type="button"
                              // onclick="handleReadlessDes(this)"
                              style={{ border: 'none' }}
                            >
                              접기
                            </button>
                          </div>
                          <div className="line-clamp-2 !normal-case clampedContent">
                            <p className="!normal-case" style={{ lineHeight: '19px' }}>
                              <span
                                className="content-full"
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordBreak: 'break-word',
                                }}
                              >
                                시즌에 맞게 큐레이팅한 COS 시그니처 아이템
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="cta-wrapper noComma">
                        <a
                          target="_self"
                          className="a-link cta-link  font-semibold !text-[13px]"
                          style={{
                            lineHeight: '19px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                          }}
                          href="https://www.cos.com/ko-kr/features/stories/the-womens-autumn-capsule-wardrobe-2025.html"
                        >
                          더 보기
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="column relative col-span-8 w-full h-full lg:col-span-4">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        onClick={() => {
                          window.location.href =
                            'https://www.cos.com/ko-kr/features/stories/the-mens-autumn-essentials-wardrobe-2025.html';
                        }}
                        data-component-id="8ff2792b-f45d-49c0-9363-23590d0101b2"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2906651020250829094103.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2906651020250829094103.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        />
                      </picture>
                      <div className="headline-preamble-wrapper" style={{ marginBottom: 11 }}>
                        <h2 style={{ lineHeight: '19px', marginBottom: 6 }} className="a-heading-2 ">
                          가을 워드로브 에센셜{' '}
                        </h2>
                        <div className="relative font_s_regular ">
                          <div className="absolute bottom-0 right-0 bg-main text-main before:absolute before:left-[-1.875rem] before:z-50 before:h-full before:w-[1.875rem] before:bg-[transparant] before:bg-gradient-to-l before:from-[var(--color-base-white)] before:to-[2.5rem]">
                            <button
                              className="hidden-new m-0 p-0 appearance-none bg-main-button text-main cursor-pointer pl-3 tw-underline readMoreBtn"
                              type="button"
                              style={{ border: 'none' }}
                              // onclick="handleReadmoreDes(this)"
                            >
                              더 보기
                            </button>
                          </div>
                          <div className="hidden-new relative z-behind fullContent">
                            <p className="!normal-case" style={{ cursor: 'default' }}>
                              <span
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordWrap: 'break-word',
                                }}
                              >
                                이번 시즌에 가장 돋보이는 COS 시그니처 아이템{' '}
                              </span>
                            </p>
                            <button
                              className="m-0 p-0 appearance-none bg-main-button text-main cursor-pointer tw-underline py-3 pr-3 readLessBtn"
                              type="button"
                              // onclick="handleReadlessDes(this)"
                              style={{ border: 'none' }}
                            >
                              접기
                            </button>
                          </div>
                          <div className="line-clamp-2 !normal-case clampedContent">
                            <p className="!normal-case" style={{ lineHeight: '19px' }}>
                              <span
                                className="content-full"
                                style={{
                                  color: 'rgb(0, 0, 0)',
                                  wordBreak: 'break-word',
                                }}
                              >
                                이번 시즌에 가장 돋보이는 COS 시그니처 아이템{' '}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="cta-wrapper noComma">
                        <a
                          target="_self"
                          className="a-link cta-link  font-semibold !text-[13px]"
                          style={{
                            lineHeight: '19px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                          }}
                          href="https://www.cos.com/ko-kr/features/stories/the-mens-autumn-essentials-wardrobe-2025.html"
                        >
                          더 보기
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*// o-grid-controller */}
              </div>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
          <hr className="a-keyline" />
        </div>
        <div className="o-spacing" />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div className="magazine cta">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                {/* o-text-block */}
                <div className="o-text-block  u-align-center">
                  <div className="headign-section">
                    <h1 className="a-heading-1 q-giga2" style={{ cursor: 'default' }}>
                      EXPLORE MORE
                    </h1>
                  </div>
                </div>
                {/*// o-text-block */}
              </div>
              <div className="container-652920 flex flex-col gap-20 lg:gap-30 w-full lg:pb-30 pb-20 manual-cpnt ">
                <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row three-column-row load-more-652920">
                  {/* o-grid-controller */}
                  <div className="grid grid-cols-12 gap-x-8 md:gap-x-4 col-span-12 lg:gap-y-30  gap-y-10   pt-0  ">
                    <div className="column relative col-span-6 w-full h-full lg:ml-[15%] lg:col-span-3  lg:col-start-2 lg:col-end-5 ">
                      <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                        <picture
                          style={{ marginBottom: 6 }}
                          data-component="APicture"
                          className="a-picture"
                          onClick={() => {
                            window.location.href = 'https://www.cos.com/ko-kr/features/stories.html';
                          }}
                          data-component-id="afc846da-5562-47cb-8d60-73484b2e414d"
                        >
                          <img
                            loading="lazy"
                            className="a-image"
                            data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2530440020240903173436.jpg"
                            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2530440020240903173436.jpg"
                            style={{ objectFit: 'cover' }}
                          />
                        </picture>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link  font-semibold !text-[13px]"
                            style={{
                              lineHeight: '19px',
                              cursor: 'pointer',
                              textDecoration: 'none',
                            }}
                            href="https://www.cos.com/ko-kr/features/stories.html"
                          >
                            컬렉션
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column relative col-span-6 w-full h-full lg:ml-[15%] lg:col-span-3   ">
                      <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                        <picture
                          style={{ marginBottom: 6 }}
                          data-component="APicture"
                          className="a-picture"
                          onClick={() => {
                            window.location.href = 'https://www.cos.com/ko-kr/features/people.html';
                          }}
                          data-component-id="87b7b33d-e0ae-4743-97b6-af9d011fee57"
                        >
                          <img
                            loading="lazy"
                            className="a-image"
                            data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2601051020241127180044.jpg"
                            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2601051020241127180044.jpg"
                            style={{ objectFit: 'cover' }}
                          />
                        </picture>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link  font-semibold !text-[13px]"
                            style={{
                              lineHeight: '19px',
                              cursor: 'pointer',
                              textDecoration: 'none',
                            }}
                            href="https://www.cos.com/ko-kr/features/people.html"
                          >
                            인터뷰
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column relative col-span-6 w-full h-full lg:ml-[15%] lg:col-span-3   ">
                      <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                        <picture
                          style={{ marginBottom: 6 }}
                          data-component="APicture"
                          className="a-picture"
                          onClick={() => {
                            window.location.href = 'https://www.cos.com/ko-kr/features/places.html';
                          }}
                          data-component-id="848a867a-8ffd-4228-bbab-ecafc209d89c"
                        >
                          <img
                            loading="lazy"
                            className="a-image"
                            data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2530442020240903173447.jpg"
                            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2530442020240903173447.jpg"
                            style={{ objectFit: 'cover' }}
                          />
                        </picture>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link  font-semibold !text-[13px]"
                            style={{
                              lineHeight: '19px',
                              cursor: 'pointer',
                              textDecoration: 'none',
                            }}
                            href="https://www.cos.com/ko-kr/features/places.html"
                          >
                            장소
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
                    '\n@media (max-width:767px) {\n.magazine.cta .u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-row.three-column-row.load-more-519203 {width:100%; overflow:hidden;}\n.magazine.cta .w-full {min-width:80%;}\n.magazine.cta .grid-cols-12 {display:flex; overflow:scroll;}\n}\n',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
