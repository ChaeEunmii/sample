import { Metadata } from 'next';
import FreeHtml from '@/views/freehtml/FreeHtml';
import { FourColumnNew } from '@views/main/components';
import { ProdCardItem } from '@views/product/components/ProdCard';
import { ProductsNew } from '@views/product/shop/ShopData';

export const metadata: Metadata = {
  title: '2025 가을 겨울 런웨이 - COS KR',
};

export default function Page() {
  return (
    <>
      <FreeHtml>
        <div className="content-section">
          <div
            className="pc"
            style={{
              position: 'relative',
              width: '100%',
              height: 0,
              paddingTop: '62.5%',
            }}
          >
            <iframe
              data-id="9c67a8ed-6e6e-45d6-8ce4-29eff29e7bb5"
              src="https://thd-play.livehyundai.com/video/6cd822d5-0260-48b4-9687-b525995ed4cb?noTitle&noControl&noLike&loop"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              title="AUTUMN</br> WINTER 2025"
            ></iframe>
            <div
              className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20"
              style={{
                color: '#fff',
                position: 'absolute',
                top: '80%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}
            >
              <h3
                className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop  text-current"
                style={{
                  fontSize: '4.625rem',
                  fontWeight: 700,
                  fontFamily: '"SuisseIntl", sans-serif !important',
                }}
              >
                AUTUMN
                <br /> WINTER 2025
              </h3>
              <p style={{ fontSize: '1.8rem', fontWeight: 600, marginTop: '3rem' }}></p>
            </div>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 10,
              }}
            />
          </div>
          <div className="mo" style={{ padding: '180% 0 0 0', position: 'relative' }}>
            <iframe
              data-id="75bfef56-6eba-4264-be50-a7de8e56ec94"
              src="https://thd-play.livehyundai.com/video/0565e05a-a9c6-47bf-8617-1804c9198d14?noTitle&noControl&noLike&loop"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              title="COS_FESTIVE_24_WOMAN_10_LOOP_16x10_ONLINE_H264_UNDER_500KB"
            ></iframe>
            <div
              className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20"
              style={{
                color: '#fff',
                top: '75%',
                left: '50%',
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                zIndex: 15,
                width: '99%',
              }}
            >
              <h3
                className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop text-current"
                style={{
                  fontWeight: 700,
                  fontFamily: '"SuisseIntl", sans-serif !important',
                }}
              >
                AUTUMN
                <br /> WINTER 2025
              </h3>
              <p style={{ fontSize: '1rem', marginTop: '1.5rem', fontWeight: 600 }}></p>
            </div>
          </div>
          <div className="o-spacing" />
          <div className="w-full flex-col bg-block px-5 justify-center h-15 lg:h-20 flex lg:flex" />
          <div
            className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:grid grid lg:pb-10 pb-5 theme-block-light lg:theme-block-light bg-block look-wrap"
            id=""
          >
            <h2
              className="text-current font_small_m_semibold lg:font_small_l_semibold col-span-full col-start-1 lg:col-start-5 lg:col-span-4 look text-center heading-contrast"
              data-testid="heading"
            >
              IN CONTRAST
            </h2>
          </div>
          <div className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5  pb-2.5 lg:grid grid">
            <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-4">
              <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
                <p className="">
                  어둠과 빛, 강인함과 부드러움, 강렬하면서도 은은한 무드를 담은 2025 가을 겨울 런웨이. 상반된 요소들이
                  교차하는 미지의 영역에서 컬렉션이 존재감을 드러내며, 모순 속에서 나타나는 새로운 아름다움을 공간을
                  통해 표현합니다. 뛰어난 장인 정신과 정교한 구조, 그리고 섬세한 디테일까지, COS 특유의 절제되면서도
                  세련된 감각이 돋보이는 런웨이를 만나보세요.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex-col bg-block px-5 justify-center h-15 lg:h-20 flex lg:flex" />
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n.heading-contrast {\nfont-size: 16px;\n}\n.manual-cpnt {\n    padding-top: 0 !important;\n}\n    @container root (min-width: 1024px) {\n        .look {\n            text-align: center;\n        }\n\n        .look-wrap {\n       \n        }\n    }\n     /*   .look-wrap+div {\n            margin-bottom: 5rem;\n        }*/\n\n    .o-spacing {\n        height: 0px;\n    }\n\n    .text-2cols i {\n        font-size: 13px;\n        font-style: normal;\n    }\n\n    .text-2cols {\n        display: flex;\n        margin: 0 auto 24px;\n        width: 50%;\n        gap: 20px;\n    }\n\n    .text-2cols p {\n        width: 50%;\n    }\n\n    @container root (max-width: 760px) {\n        .text-2cols {\n            width: 100%;\n            flex-direction: column;\n            padding: 0 20px;\n        }\n\n        .text-2cols p {\n            width: 100%;\n        }\n    }\n\n\n    .o-text-block.u-align-center {\n        margin-top: 48px;\n    }\n\n    @container root (max-width: 760px) {\n\n        .o-text-block.u-align-center {\n            padding: 20px;\n            text-align: left;\n        }\n\n    }\n\n    .u-row.u-full-width>[class^="o-"] {\n        margin: 0 auto !important\n    }\n\n    .o-text-block .a-heading-1 {\n\n        font-weight: 700;\n        font-size: 40px;\n        line-height: 40px;\n    }\n\n    .preamble-section {\n        margin: 0 auto 50px;\n        }\n\n\n        @container root (min-width: 1025px) {\n            .o-text-block {\n                width: 50.66667% !important;\n            }\n\n            .a-keyline {\n                width: calc(40% -(40px));\n            }\n\n            .o-text-block.u-float-right {\n                width: 50%;\n                font-weight: 400;\n                line-height: 18px;\n            }\n        }\n\n        @container root (max-width: 1025px) {\n            .o-text-block.u-float-right {\n                width: 100%;\n            }\n        }\n\n        @container root (min-width: 1025px) {\n            .o-text-block {\n                padding-top: 0px;\n                padding-bottom: 0px;\n            }\n        }\n\n@container root (max-width: 1023px) {\n.o-text-block .a-heading-1 {\nline-height: 24px !important;\n}\n}\n\n',
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n\n.col6_custom .o-square {margin-bottom: 0;}\n.col6_custom .is-four-cols{margin-top: 20px;}\n.o-grid-controller.is-four-cols .content .scrollable-content{padding: 0;}\n.o-grid-controller.is-four-cols.is-stacked-on-mobile .content .scrollable-content .column {  width: 49%;}\n.font_large_s_bold_desktop {\n    font-family: 'NotoSansKR', sans-serif;\n    line-height: 1.1;\n}\n.o-text-block.u-float-center.u-align-center .anchor-section{display: flex;  justify-content: space-evenly;}\n.u-cols-lg-24-24 {   margin-bottom: 20px;}\n\n@container root (min-width: 768px){\n.o-square .cell{width: 50%;}\n.o-square .cell:last-child{width: 50%; margin-bottom: 0;}\n}\n\n@container root (max-width: 767px){\n.o-text-block.u-float-center{padding-left: 20px; padding-right: 20px;}\n\n}\n\n\n@container root (min-width: 1025px) {\n\n\n.o-grid-controller.is-four-cols .content .scrollable-content { max-width: none; display: flex; justify-content: space-between;}\n\n}\n\n",
            }}
          />
        </div>
      </FreeHtml>
      <FourColumnNew
        items={[
          { content: <ProdCardItem product={ProductsNew[0]} /> },
          { content: <ProdCardItem product={ProductsNew[0]} /> },
          { content: <ProdCardItem product={ProductsNew[0]} /> },
          { content: <ProdCardItem product={ProductsNew[0]} /> },
          { content: <ProdCardItem product={ProductsNew[0]} /> },
        ]}
      />
      <FreeHtml>
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:grid grid lg:pb-15 pb-10 theme-block-light lg:theme-block-light bg-block accordion-wrap"
          id=""
        >
          <div
            data-component="OAccordion"
            className="o-accordion  col-start-1 col-span-12 lg:col-start-5 lg:col-end-9"
            data-exclusive="data-exclusive"
            data-exclusive-group="example"
            data-component-id="05457e63-ce91-4bdb-85e6-55761ce2f436"
          >
            <div className="accordion-header">
              <a href="#" target="_self" className="a-link a-link accordion-title js-accordion-toggle no-styling">
                <span className="a-icon-plus" />
                <span className="a-icon-minus" />
                <h3 className="a-heading-3">런웨이 룩을 아래 매장에서 만나보세요</h3>
              </a>
            </div>
            <div className="accordion-content">
              <div className="accordion-inner-content">
                <p className="a-paragraph">
                  COS 청담점
                  <br />
                  서울 특별시 강남구 압구정로 418
                </p>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n.o-accordion:last-child {\nborder-bottom: 0;\n}\n.accordion-wrap {\npadding-bottom: 80px;\npadding-top: 48px;\n}\n.o-accordion .accordion-inner-content .a-paragraph {\nfont-size: 13px;}\n\n.o-accordion .accordion-header .accordion-title {\n    padding-top: 19px;\n    padding-bottom: 25px;\n}\n.o-accordion .accordion-inner-content {\npadding-bottom: 30px;\n\n}\n\n@container root (max-width: 1023px) {\n.o-accordion .accordion-header .accordion-title {\npadding-top: 15px;\n}\n.o-accordion .accordion-inner-content {\npadding-bottom: 0;\n}\n.accordion-wrap {\npadding-bottom: 45px;\n}\n}\n',
          }}
        />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              {/* o-text-block */}
              <div className="o-text-block u-float-center u-align-center">
                <div className="headign-section">
                  <h1 className="a-heading-1 " style={{ cursor: 'default' }}>
                    <div id="lookarea">
                      일상 속 우아함의
                      <br /> 새로운 재해석{' '}
                    </div>
                  </h1>
                </div>
              </div>
              {/*// o-text-block */}
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n .o-text-block .headign-section .a-heading-1 {\nfont-size: 50px;\n}\n\n#lookarea {\ntext-align: center;\n}\n.o-text-block .a-heading-1 {\nline-height: 55px !important;\n}\n@container root (max-width: 1023px) {\n.o-text-block .headign-section .a-heading-1 {\nfont-size: 24px;\n}\n\n.title-detail {\n     padding-top: 0px !important;\n}\n.o-text-block .a-heading-1 {\nline-height: 30px !important;\n}\n}\n\n\n@container root (min-width: 768px) and (max-width: 1024px) {\n    .o-text-block {\n         padding-top: 0px;\n        padding-bottom: 20px;\n    }\n}\n@container root (min-width: 1025px) {\n    .o-text-block {\n        padding-top: 0px;\n        padding-bottom: 0px;\n    }\n}\n',
              }}
            />
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n\n@container root (max-width: 1023px) {\n.grid.grid-cols-12:has(.slider-container) {\ngap: 64px;\n}\n\n.grid.grid-cols-12:has(.slider-container) .relative.col-span-12 img {\n\nwidth: 100vw;\n\n}\n\n\n.o-page-content {\n  overflow-x: hidden;\n}\n\n.grid.grid-cols-12:has(.slider-container) .relative.col-span-12.w-full {\n\nwidth: 100vw;  \n}\n\n.relative.max-h-full img {\n  margin-bottom: 120px;\n\n}\n\n}\n\ndiv.lg\\:pt-20:has(button) {\n  padding-top: 0;\nmargin-top: -36px;\n}\n\n',
              }}
            />
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className=" relative" style={{ maxWidth: 'unset' }}>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n            .my-4 {\n                margin: 1rem 0;\n            }\n\n            .title-detail {\n                padding-top: 50px;\n            }\n        ',
                  }}
                />
                <div
                  className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:grid grid lg:pb-15 pb-10 theme-block-light lg:theme-block-light bg-block"
                  id=""
                >
                  <h2
                    className="text-current font_small_m_semibold lg:font_small_l_semibold col-span-full col-start-1 text-center lg:col-start-5 lg:col-span-4 title-detail"
                    data-testid="heading"
                  >
                    디테일
                  </h2>
                </div>
                <div className="grid grid-cols-12 " style={{ width: '100%' }}>
                  <div className="relative col-span-12 lg:col-span-6 theme-block-dark venCpn-image ">
                    {/* pc */}
                    <a
                      href="https://www.cos.com/ko-kr/women/coats-jackets.html"
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        textDecoration: 'none',
                        clear: 'both',
                      }}
                    >
                      <div
                        className="pc iframe-video"
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: 0,
                          paddingTop: '100%',
                        }}
                      >
                        <iframe
                          data-id="67d5f1e2-5674-4807-a32b-0c26e72870c1"
                          src="https://thd-play.livehyundai.com/video/67d5f1e2-5674-4807-a32b-0c26e72870c1?noTitle&noControl&noLike&loop"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                          }}
                          title="PRE-FALL 2025"
                        ></iframe>
                        <div
                          className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20"
                          style={{
                            color: '#fff',
                            position: 'absolute',
                            top: '80%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center',
                          }}
                        >
                          <h3
                            className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop  text-current"
                            style={{
                              fontSize: '4.625rem !important',
                              fontWeight: 700,
                              fontFamily: '"SuisseIntl", sans-serif !important',
                            }}
                          ></h3>
                          <p
                            style={{
                              fontSize: '1rem',
                              fontWeight: 600,
                              marginTop: '3rem',
                            }}
                          />
                        </div>
                        <div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 10,
                          }}
                        />
                      </div>
                    </a>
                    {/* mo */}
                    <div className="mo iframe-video" style={{ padding: '100% 0 0 0', position: 'relative' }}>
                      <iframe
                        data-id="67d5f1e2-5674-4807-a32b-0c26e72870c1"
                        src="https://thd-play.livehyundai.com/video/67d5f1e2-5674-4807-a32b-0c26e72870c1?noTitle&noControl&noLike&loop"
                        allow="autoplay; fullscreen; picture-in-picture"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                        }}
                        title="COS_FESTIVE_24_WOMAN_10_LOOP_16x10_ONLINE_H264_UNDER_500KB"
                      ></iframe>
                      <a
                        href="https://www.cos.com/ko-kr/women/coats-jackets.html"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          zIndex: 10,
                          textDecoration: 'none',
                        }}
                      />
                      <div
                        className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20"
                        style={{
                          color: '#fff',
                          top: '75%',
                          left: '50%',
                          position: 'absolute',
                          transform: 'translate(-50%, -50%)',
                          textAlign: 'center',
                          zIndex: 15,
                          width: '99%',
                        }}
                      >
                        <h3
                          className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop text-current"
                          style={{
                            fontWeight: 700,
                            fontFamily: '"SuisseIntl", sans-serif !important',
                          }}
                        ></h3>
                        <p
                          style={{
                            fontSize: '1rem',
                            marginTop: '1.5rem',
                            fontWeight: 600,
                          }}
                        ></p>
                      </div>
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 15,
                        left: 20,
                        color: '#fff',
                        zIndex: 1,
                      }}
                      className="inline-flex items-center gap-2 font_small_s_semibold font-semibold text-block pointer-events-none"
                    >
                      <a
                        style={{ color: '#ffffff' }}
                        className="!text-block font_small_s_semibold font-semibold pointer-events-auto"
                        href="https://www.cos.com/ko-kr/women/coats-jackets.html"
                      >
                        여성 코트 &amp; 재킷
                      </a>
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        right: '50%',
                        bottom: '5rem',
                        transform: 'translateX(50%)',
                      }}
                      className="theme-block-dark w-full pointer-events-none"
                    >
                      <div
                        style={{ wordWrap: 'break-word', padding: '0px 40px' }}
                        className="flex items-center text-block justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"
                      ></div>
                    </div>
                    <div
                      style={{ position: 'absolute', bottom: 15, left: 20 }}
                      className="inline-flex items-center gap-2 font_small_s_semibold font-semibold text-block"
                    >
                      <a
                        className="text-block font_small_s_semibold font-semibold "
                        href="https://www.cos.com/ko-kr/women/coats-jackets.html"
                      >
                        여성 코트 &amp; 재킷
                      </a>
                    </div>
                  </div>
                  {/* edit left slide */}
                  <div className="col-span-12 relative lg:col-span-6 flex  overflow-hidden w-full slider-container pointer-events-auto ">
                    <div
                      className="slides-left_634515 slides-left-wrapper w-full"
                      style={{
                        transition: 'transform 0.5s ease-in-out',
                        display: 'flex',
                        transform: 'translateX(0vw)',
                      }}
                    >
                      <div
                        className="slide_left_634515 slide-left-slide flex justify-center items-center  min-w-full min-w-screen lg:min-w-[50vw] venCpn-image"
                        style={{ position: 'relative', background: '#FFFFFF' }}
                      >
                        <div className="relative max-h-full">
                          <a href="https://www.cos.com/ko-kr/men/coats-jackets.html">
                            <img
                              alt=""
                              style={{ height: 656, width: 469 }}
                              className="hidden-new lg:block object-cover object-top "
                              data-nimg="fill"
                              src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2914371020250915174829.jpg"
                            />
                            <img
                              style={{ height: 418, width: 299 }}
                              alt=""
                              className="lg:hidden object-cover"
                              data-nimg="fill"
                              src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2914371020250915174829.jpg"
                            />
                          </a>
                          <div
                            style={{ position: 'absolute', bottom: '-42px' }}
                            className="absolute -bottom-10 right-[50%] translate-x-[50%] font_small_s_semibold text-3.25 
                          flex items-center text-block justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row"
                          ></div>
                        </div>
                        <div
                          style={{ bottom: 27, position: 'absolute', left: 20 }}
                          className="inline-flex items-center gap-2 font_small_s_semibold font-semibold text-block"
                        >
                          <a
                            className="text-block font_small_s_semibold font-semibold "
                            href="https://www.cos.com/ko-kr/men/coats-jackets.html"
                          >
                            남성 코트 &amp;재킷
                          </a>
                        </div>
                        <div
                          style={{ position: 'absolute', right: 36, bottom: 27 }}
                          className="bg-clip-text text-main cursor-pointer flex items-center hover:underline next-button-left_634515 next-button-left-btn font_small_l_regular text-3.25"
                          // onclick="handleNextSlideLeft()"
                        >
                          NEXT{' '}
                          <span className="ml-0 fill-current">
                            <svg
                              width={16}
                              height={17}
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 5.5L15 8.5L12 11.5" stroke="#080808" className="stroke-current" />
                            </svg>{' '}
                          </span>
                        </div>
                      </div>
                      <div
                        className="slide_left_634515 slide-left-slide flex justify-center items-center  min-w-full min-w-screen lg:min-w-[50vw] venCpn-image"
                        style={{ position: 'relative', background: '#FFFFFF' }}
                      >
                        <div className="relative max-h-full">
                          <a href="https://www.cos.com/ko-kr/women/tops.html">
                            <img
                              alt=""
                              style={{ height: 656, width: 469 }}
                              className="hidden-new lg:block object-cover object-top "
                              data-nimg="fill"
                              src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2914372020250915180327.jpg"
                            />
                            <img
                              style={{ height: 418, width: 299 }}
                              alt=""
                              className="lg:hidden object-cover"
                              data-nimg="fill"
                              src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2914372020250915180327.jpg"
                            />
                          </a>
                          <div
                            style={{ position: 'absolute', bottom: '-42px' }}
                            className="absolute -bottom-10 right-[50%] translate-x-[50%] font_small_s_semibold text-3.25 
                          flex items-center text-block justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row"
                          ></div>
                        </div>
                        <div
                          style={{ bottom: 27, position: 'absolute', left: 20 }}
                          className="inline-flex items-center gap-2 font_small_s_semibold font-semibold text-block"
                        >
                          <a
                            className="text-block font_small_s_semibold font-semibold "
                            href="https://www.cos.com/ko-kr/women/tops.html"
                          >
                            여성 탑
                          </a>
                        </div>
                        <div
                          style={{ position: 'absolute', right: 36, bottom: 27 }}
                          className="bg-clip-text text-main cursor-pointer flex items-center hover:underline next-button-left_634515 next-button-left-btn font_small_l_regular text-3.25"
                          // onclick="handleNextSlideLeft()"
                        >
                          NEXT{' '}
                          <span className="ml-0 fill-current">
                            <svg
                              width={16}
                              height={17}
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 5.5L15 8.5L12 11.5" stroke="#080808" className="stroke-current" />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div
                        className="slide_left_634515 slide-left-slide flex justify-center items-center  min-w-full min-w-screen lg:min-w-[50vw] venCpn-image"
                        style={{ position: 'relative', background: '#FFFFFF' }}
                      >
                        <div className="relative max-h-full">
                          <a href="https://www.cos.com/ko-kr/men/new-accessories.html">
                            <img
                              alt=""
                              style={{ height: 656, width: 469 }}
                              className="hidden-new lg:block object-cover object-top "
                              data-nimg="fill"
                              src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2914373020250915180337.jpg"
                            />
                            <img
                              style={{ height: 418, width: 299 }}
                              alt=""
                              className="lg:hidden object-cover"
                              data-nimg="fill"
                              src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2914373020250915180337.jpg"
                            />
                          </a>
                          <div
                            style={{ position: 'absolute', bottom: '-42px' }}
                            className="absolute -bottom-10 right-[50%] translate-x-[50%] font_small_s_semibold text-3.25 
                          flex items-center text-block justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row"
                          ></div>
                        </div>
                        <div
                          style={{ bottom: 27, position: 'absolute', left: 20 }}
                          className="inline-flex items-center gap-2 font_small_s_semibold font-semibold text-block"
                        >
                          <a
                            className="text-block font_small_s_semibold font-semibold "
                            href="https://www.cos.com/ko-kr/men/new-accessories.html"
                          >
                            남성 액세서리
                          </a>
                        </div>
                        <div
                          style={{ position: 'absolute', right: 36, bottom: 27 }}
                          className="bg-clip-text text-main cursor-pointer flex items-center hover:underline next-button-left_634515 next-button-left-btn font_small_l_regular text-3.25"
                          // onclick="handleNextSlideLeft()"
                        >
                          NEXT{' '}
                          <span className="ml-0 fill-current">
                            <svg
                              width={16}
                              height={17}
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 5.5L15 8.5L12 11.5" stroke="#080808" className="stroke-current" />
                            </svg>{' '}
                          </span>
                        </div>
                      </div>
                      <div
                        className="slide_left_634515 slide-left-slide flex justify-center items-center  min-w-full min-w-screen lg:min-w-[50vw] venCpn-image"
                        style={{ position: 'relative', background: '#FFFFFF' }}
                      >
                        <div className="relative max-h-full">
                          <a href="https://www.cos.com/ko-kr/women/knitwear.html">
                            <img
                              alt=""
                              style={{ height: 656, width: 469 }}
                              className="hidden-new lg:block object-cover object-top "
                              data-nimg="fill"
                              src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2914374020250915180349.jpg"
                            />
                            <img
                              style={{ height: 418, width: 299 }}
                              alt=""
                              className="lg:hidden object-cover"
                              data-nimg="fill"
                              src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2914374020250915180349.jpg"
                            />
                          </a>
                          <div
                            style={{ position: 'absolute', bottom: '-42px' }}
                            className="absolute -bottom-10 right-[50%] translate-x-[50%] font_small_s_semibold text-3.25 
                          flex items-center text-block justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row"
                          ></div>
                        </div>
                        <div
                          style={{ bottom: 27, position: 'absolute', left: 20 }}
                          className="inline-flex items-center gap-2 font_small_s_semibold font-semibold text-block"
                        >
                          <a
                            className="text-block font_small_s_semibold font-semibold "
                            href="https://www.cos.com/ko-kr/women/knitwear.html"
                          >
                            여성 니트웨어 &amp; 가디건
                          </a>
                        </div>
                        <div
                          style={{ position: 'absolute', right: 36, bottom: 27 }}
                          className="bg-clip-text text-main cursor-pointer flex items-center hover:underline next-button-left_634515 next-button-left-btn font_small_l_regular text-3.25"
                          // onclick="handleNextSlideLeft()"
                        >
                          NEXT{' '}
                          <span className="ml-0 fill-current">
                            <svg
                              width={16}
                              height={17}
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 5.5L15 8.5L12 11.5" stroke="#080808" className="stroke-current" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 15,
                        left: 12,
                        width: '96%',
                        height: 3,
                      }}
                      className="bg-clip-text text-main-inverted mix-blend-difference pagination pagination-left_634515 pagination-left-wrap flex justify-center gap-1  "
                    >
                      <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm active" />
                      <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm" />
                      <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm" />
                      <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm" />
                      <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm" />
                      <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm" />
                      <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm" />
                      <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm" />
                    </div>
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n            @container root (max-width: 1023px) {\n                .grid.grid-cols-12:has(.slider-container) {\n                    gap: 64px;\n                }\n\n                .grid.grid-cols-12:has(.slider-container) .relative.col-span-12 img {\n\n                    width: 100vw;\n\n                }\n\n\n                .o-page-content {\n                    overflow-x: hidden;\n                }\n\n                .grid.grid-cols-12:has(.slider-container) .relative.col-span-12.w-full {\n\n                    width: 100vw;\n                }\n\n                .relative.max-h-full img {\n                    margin-bottom: 120px;\n\n                }\n\n            }\n\n            div.lg\\:pt-20:has(button) {\n                padding-top: 0;\n                margin-top: -36px;\n            }\n        ',
                  }}
                />
              </div>
            </div>
            <div className="o-spacing" />
          </div>
        </div>
        <div className="o-spacing" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n@container root (min-width: 1024px) {\n    .lg\\:pb-30 {\n        padding-bottom: 7.5rem;\n    }\n}\n.manual-cpnt {\n    padding-bottom: 0 !important;\n}\n',
          }}
        />
        <br />
        <br />
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:grid grid  pb-5 theme-block-light lg:theme-block-light bg-block"
          id=""
        >
          <h2
            className="text-current font_small_m_semibold lg:font_small_l_semibold col-span-full col-start-1 text-center lg:col-start-5 lg:col-span-4"
            data-testid="heading"
          >
            게스트
          </h2>
        </div>
        <div className="pc" id="" style={{ fontSize: 13 }}>
          <h2
            className="text-current  col-span-full col-start-1 text-center lg:col-start-2 lg:col-span-12"
            data-testid="heading"
          >
            <span style={{}}>
              로지 헌팅턴 휘틀리, 아디티 라오 히다리, 조디 터너 스미스, 나오미 왓츠, 크리스토퍼 브리니, 하시즈메 미카,
              샘파, 슈화, 고현정, 지 프룩, 이준영 그리고 팁나리가 참석했습니다.
            </span>
          </h2>
        </div>
        <div className="mo" id="" style={{ fontSize: 13 }}>
          <h2
            className="text-current  col-span-full col-start-1 text-center lg:col-start-2 lg:col-span-12"
            data-testid="heading"
          >
            <span
              style={{
                position: 'relative',
                width: '100%',
                padding: '0 20px',
                textAlign: 'left',
                margin: '0 auto',
                display: 'inline-block',
              }}
            >
              로지 헌팅턴 휘틀리, 아디티 라오 히다리, 조디 터너 스미스, 나오미 왓츠, 크리스토퍼 브리니, 하시즈메 미카,
              샘파, 슈화, 고현정, 지 프룩, 이준영 그리고 팁나리가 참석했습니다.
            </span>
          </h2>
          <br />
          <br />
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-5 lg:grid hidden" id="">
              <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
                <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
                  <p className="">
                    로지 헌팅턴 휘틀리, 아디티 라오 히다리, 조디 터너 스미스, 나오미 왓츠, 크리스토퍼 브리니, 하시즈메
                    미카, 샘파, 슈화, 고현정, 지 프룩, 이준영 그리고 팁나리가 참석했습니다.
                  </p>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n.o-hero{width:90% ;margin-bottom: 10px;        margin-top: 0;}\n.o-hero .m-teaser {max-width:100%;}\n.u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-row.u-full-width .underTxt{width:22%;  margin-left: 51%; margin-top:80px; margin-bottom:50px;}\n.u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-row .o-square,\n.o-grid-controller.u-clearfix.is-four-cols {padding: 0;  margin: 0 auto;  max-width: none;}\n@container root (max-width: 1025px) {\n.u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-row.u-full-width .u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-cols-hero{display: flex;   flex-direction: column-reverse;}\n.u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-row.u-full-width .underTxt{ width: 85%;   margin-left: 6%;   margin-top: 0;}\n}\n',
              }}
            />
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              <div className=" relative" style={{ maxWidth: 'unset' }}>
                <div className="container-634529 flex flex-col w-full gap-5 lg:gap-10 pb-5 lg:pb-10  manual-cpnt">
                  <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-634529 ">
                    {/* o-grid-controller */}
                    <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12   pt-0 ">
                      <div className="column relative col-span-12 w-full h-full lg:col-span-8  lg:col-start-3 lg:col-end-11 ">
                        <div className="m-free-tile lg:px-0 px-3.75" style={{ cursor: 'default' }}>
                          {/* pc */}
                          <div
                            style={{
                              width: '100%',
                              height: '100%',
                              position: 'relative',
                              textDecoration: 'none',
                              clear: 'both',
                            }}
                          >
                            <div
                              className="pc iframe-video"
                              style={{
                                position: 'relative',
                                width: '100%',
                                height: 0,
                                paddingTop: '64%',
                              }}
                            >
                              <iframe
                                data-id="d42fa6e4-6d7f-48a1-86f9-7d0f974d1cd2"
                                src="https://thd-play.livehyundai.com/video/d42fa6e4-6d7f-48a1-86f9-7d0f974d1cd2?noTitle&noControl&noLike&loop"
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                }}
                                title="PRE-FALL 2025"
                              ></iframe>
                              <div
                                className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20"
                                style={{
                                  color: '#fff',
                                  position: 'absolute',
                                  top: '80%',
                                  left: '50%',
                                  transform: 'translate(-50%, -50%)',
                                  textAlign: 'center',
                                }}
                              >
                                <h3
                                  className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop  text-current"
                                  style={{
                                    fontSize: '4.625rem !important',
                                    fontWeight: 700,
                                    fontFamily: '"SuisseIntl", sans-serif !important',
                                  }}
                                ></h3>
                                <p
                                  style={{
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    marginTop: '3rem',
                                  }}
                                />
                              </div>
                              <div
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  zIndex: 10,
                                }}
                              />
                            </div>
                            {/* mo */}
                            <div className="mo iframe-video" style={{ padding: '174% 0 0 0', position: 'relative' }}>
                              <iframe
                                data-id="f47a0a80-4366-46a0-9bc4-327810009f9b"
                                src="https://thd-play.livehyundai.com/video/f47a0a80-4366-46a0-9bc4-327810009f9b?noTitle&noControl&noLike&loop"
                                allow="autoplay; fullscreen; picture-in-picture"
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                }}
                                title="COS_FESTIVE_24_WOMAN_10_LOOP_16x10_ONLINE_H264_UNDER_500KB"
                              ></iframe>
                              <a
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  zIndex: 10,
                                  textDecoration: 'none',
                                }}
                              />
                              <div
                                className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20"
                                style={{
                                  color: '#fff',
                                  top: '75%',
                                  left: '50%',
                                  position: 'absolute',
                                  transform: 'translate(-50%, -50%)',
                                  textAlign: 'center',
                                  zIndex: 15,
                                  width: '99%',
                                }}
                              >
                                <h3
                                  className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop text-current"
                                  style={{
                                    fontWeight: 700,
                                    fontFamily: '"SuisseIntl", sans-serif !important',
                                  }}
                                ></h3>
                                <p
                                  style={{
                                    fontSize: '1rem',
                                    marginTop: '1.5rem',
                                    fontWeight: 600,
                                  }}
                                ></p>
                              </div>
                            </div>
                            <div
                              style={{
                                position: 'absolute',
                                bottom: 15,
                                left: 20,
                                color: '#fff',
                                zIndex: 1,
                              }}
                              className="inline-flex items-center gap-2 font_small_s_semibold font-semibold text-block pointer-events-none"
                            >
                              <a
                                style={{ color: '#ffffff' }}
                                className="!text-block font_small_s_semibold font-semibold pointer-events-auto"
                              ></a>
                            </div>
                            <div className="headline-preamble-wrapper" style={{ marginBottom: 11 }}>
                              <div className="relative font_s_regular "></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-5 lg:grid hidden"
                      id=""
                    >
                      <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
                        <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
                          <p className="">
                            로지 헌팅턴 휘틀리, 아디티 라오 히다리, 조디 터너 스미스, 나오미 왓츠, 크리스토퍼 브리니,
                            하시즈메 미카, 샘파, 슈화, 고현정, 지 프룩, 이준영 그리고 팁나리가 참석했습니다.
                          </p>
                        </div>
                      </div>
                    </div>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n            .o-hero {\n                width: 90%;\n                margin-bottom: 10px;\n                margin-top: 0;\n            }\n\n            .o-hero .m-teaser {\n                max-width: 100%;\n            }\n\n            .u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-row.u-full-width .underTxt {\n                width: 22%;\n                margin-left: 51%;\n                margin-top: 80px;\n                margin-bottom: 50px;\n            }\n\n            .u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-row .o-square,\n            .o-grid-controller.u-clearfix.is-four-cols {\n                padding: 0;\n                margin: 0 auto;\n                max-width: none;\n            }\n\n            @container root (max-width: 1025px) {\n                .u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-row.u-full-width .u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-cols-hero {\n                    display: flex;\n                    flex-direction: column-reverse;\n                }\n\n                .u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-row.u-full-width .underTxt {\n                    width: 85%;\n                    margin-left: 6%;\n                    margin-top: 0;\n                }\n            }\n        ',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container-634496 flex flex-col gap-20 lg:gap-30 w-full lg:pb-30 pb-20 manual-cpnt">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row four-column-row load-more-634496 ">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-8 md:gap-x-4 col-span-12 lg:gap-y-30 gap-y-10 pt-0 ">
                  <div className="column relative col-span-6 w-full h-full lg:col-span-2  lg:col-start-3 lg:col-end-5 ">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        data-component-id="66b1368a-24fb-41fd-bd30-da333fbdf5e0"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2914370020250915175008.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2914370020250915175008.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        />
                      </picture>
                      <div className="headline-preamble-wrapper" style={{ marginBottom: 11 }}>
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
                                로지 헌팅턴 휘틀리
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
                                로지 헌팅턴 휘틀리
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column relative col-span-6 w-full h-full lg:col-span-2   ">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        data-component-id="71d326eb-5271-464c-9f34-f09538fea179"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2914371020250915175019.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2914371020250915175019.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        />
                      </picture>
                      <div className="headline-preamble-wrapper" style={{ marginBottom: 11 }}>
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
                                크리스토퍼 브리니
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
                                크리스토퍼 브리니
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column relative col-span-6 w-full h-full lg:col-span-2   ">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        data-component-id="583af32a-01bd-4f62-9ffe-be0fa341a284"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2914372020250915175026.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2914372020250915175026.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        />
                      </picture>
                      <div className="headline-preamble-wrapper" style={{ marginBottom: 11 }}>
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
                                나오미 왓츠
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
                                나오미 왓츠
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column relative col-span-6 w-full h-full lg:col-span-2   ">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        data-component-id="10f8825e-4c68-45dc-9623-96246c0d4983"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2914373020250915175033.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2914373020250915175033.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        />
                      </picture>
                      <div className="headline-preamble-wrapper" style={{ marginBottom: 11 }}>
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
                                지 프룩
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
                                지 프룩
                              </span>
                            </p>
                          </div>
                        </div>
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
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          {/* o-text-block */}
          <div className="o-text-block u-float-center u-align-center">
            <div className="headign-section">
              <h1 className="a-heading-1 q-mega" style={{ cursor: 'default' }}>
                <div id="menarea" style={{ textAlign: 'center' }}>
                  여성 컬렉션
                </div>
              </h1>
            </div>
          </div>
          {/*// o-text-block */}
        </div>
      </FreeHtml>
      <FourColumnNew
        items={[
          { content: <ProdCardItem product={ProductsNew[0]} /> },
          { content: <ProdCardItem product={ProductsNew[0]} /> },
          { content: <ProdCardItem product={ProductsNew[0]} /> },
          { content: <ProdCardItem product={ProductsNew[0]} /> },
          { content: <ProdCardItem product={ProductsNew[0]} /> },
        ]}
      />
      <FreeHtml>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
          <hr className="a-keyline" />
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          {/* o-text-block */}
          <div className="o-text-block u-float-center u-align-center">
            <div className="headign-section">
              <h1 className="a-heading-1 q-mega" style={{ cursor: 'default' }}>
                <div id="menarea" style={{ textAlign: 'center' }}>
                  남성 컬렉션
                </div>
              </h1>
            </div>
          </div>
          {/*// o-text-block */}
        </div>
      </FreeHtml>
      <FourColumnNew
        items={[
          { content: <ProdCardItem product={ProductsNew[0]} /> },
          { content: <ProdCardItem product={ProductsNew[0]} /> },
          { content: <ProdCardItem product={ProductsNew[0]} /> },
          { content: <ProdCardItem product={ProductsNew[0]} /> },
          { content: <ProdCardItem product={ProductsNew[0]} /> },
        ]}
      />
      <FreeHtml>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          {/* o-text-block */}
          <div className="o-text-block u-float-center u-align-center">
            <div className="headign-section">
              <h1 className="a-heading-1 q-mega" style={{ cursor: 'default' }}>
                {' '}
                <div id="menarea" style={{ textAlign: 'center' }}>
                  AW25 컬렉션 살펴보기
                </div>
              </h1>
            </div>
          </div>
          {/*// o-text-block */}
        </div>
        <div className="container-635479 flex flex-col gap-20 lg:gap-30 lg:px-5 w-full lg:pb-30 pb-20 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row two-column-row load-more-635479 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-8 md:gap-x-5 col-span-12 gap-y-5 pt-0 ">
              <div className="column relative col-span-8 w-full h-full lg:col-span-4 col-start-3 col-end-11 lg:col-start-3 lg:col-end-7 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-link="https://www.cos.com/ko-kr/campaign/autumn-winter-2025-womenswear.html"
                    data-component-id="e0d83565-daf7-4469-a3fe-04d25b0be127"
                  >
                    <img
                      loading="lazy"
                      className="a-image loaded"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2912520020250912130433.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2912520020250912130433.jpg"
                      style={{ objectFit: 'cover' }}
                      data-was-processed="true"
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
                      href="https://www.cos.com/ko-kr/campaign/autumn-winter-2025-womenswear.html"
                    >
                      여성 컬렉션
                    </a>
                  </div>
                </div>
              </div>
              <div className="column relative col-span-8 w-full h-full lg:col-span-4 col-start-3 col-end-11  ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-link="https://www.cos.com/ko-kr/campaign/autumn-winter-2025-menswear.html"
                    data-component-id="2c0a9762-2828-4b82-97dd-86468c0b0ddc"
                  >
                    <img
                      loading="lazy"
                      className="a-image loaded"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2912521020250912130441.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2912521020250912130441.jpg"
                      style={{ objectFit: 'cover' }}
                      data-was-processed="true"
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
                      href="https://www.cos.com/ko-kr/campaign/autumn-winter-2025-menswear.html"
                    >
                      남성 컬렉션
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*// o-grid-controller */}
          </div>
        </div>
      </FreeHtml>
    </>
  );
}
