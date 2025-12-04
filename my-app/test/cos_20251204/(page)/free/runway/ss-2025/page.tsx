import { Metadata } from 'next';
import FreeHtml from '@/views/freehtml/FreeHtml';
import { FourColumnNew } from '@views/main/components';
import { ProdCardItem } from '@views/product/components/ProdCard';
import { ProductsNew } from '@views/product/shop/ShopData';

export const metadata: Metadata = {
  title: '2025 봄 여름 런웨이',
};

export default function Page() {
  return (
    <>
      <FreeHtml>
        <div className="content-section">
          <div className="pc" style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56%' }}>
            <iframe
              data-id="9c67a8ed-6e6e-45d6-8ce4-29eff29e7bb5"
              src="https://thd-play.livehyundai.com/video/9c67a8ed-6e6e-45d6-8ce4-29eff29e7bb5?noTitle&noControl&noLike&loop"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              title="SPRING</br> SUMMER 2025"
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
                SPRING
                <br />
                SUMMER 2025
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
              data-id="4c3de0ef-e17a-4e18-90cc-fdab2788785f"
              src="https://thd-play.livehyundai.com/video/4c3de0ef-e17a-4e18-90cc-fdab2788785f?noTitle&noControl&noLike&loop"
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
                SPRING <br />
                SUMMER 2025
              </h3>
              <p style={{ fontSize: '1rem', marginTop: '1.5rem', fontWeight: 600 }}></p>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n\n.col6_custom .o-square {margin-bottom: 0;}\n.col6_custom .is-four-cols{margin-top: 20px;}\n.o-grid-controller.is-four-cols .content .scrollable-content{padding: 0;}\n.o-grid-controller.is-four-cols.is-stacked-on-mobile .content .scrollable-content .column {  width: 49%;}\n.font_large_s_bold_desktop {\n    font-family: 'NotoSansKR', sans-serif;\n    line-height: 1.1;\n}\n.o-text-block.u-float-center.u-align-center .anchor-section{display: flex;  justify-content: space-evenly;}\n.u-cols-lg-24-24 {   margin-bottom: 20px;}\n\n@media (min-width: 768px){\n.o-square .cell{width: 50%;}\n.o-square .cell:last-child{width: 50%; margin-bottom: 0;}\n}\n\n@media (max-width: 767px){\n.o-text-block.u-float-center{padding-left: 20px; padding-right: 20px;}\n}\n\n\n@media (min-width: 1025px) {\n\n\n.o-grid-controller.is-four-cols .content .scrollable-content { max-width: none; display: flex; justify-content: space-between;}\n\n}\n\n",
            }}
          />
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className=" relative" style={{ maxWidth: 'unset' }}>
              <style dangerouslySetInnerHTML={{ __html: '\n.my-4 {\nmargin: 1rem 0;\n}\n' }} />
              <div
                className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:grid grid lg:pb-15 pb-10 theme-block-light lg:theme-block-light bg-block"
                id=""
              >
                <h2
                  className="text-current font_small_m_semibold lg:font_small_l_semibold col-span-full col-start-1 text-center lg:col-start-4 lg:col-span-4"
                  data-testid="heading"
                >
                  디테일
                </h2>
              </div>
              <div className="grid grid-cols-12 " style={{ width: '100%' }}>
                <div className="relative col-span-12 lg:col-span-6 theme-block-dark venCpn-image ">
                  <a className="pointer-events-auto" href="https://www.cos.com/ko-kr/women/coats-jackets.html">
                    <img
                      alt=""
                      className="hidden-new lg:block h-full w-full object-cover object-top "
                      data-nimg="fill"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548980020250404083603.jpg"
                    />
                    <img
                      alt=""
                      className="lg:hidden h-full w-full object-cover"
                      data-nimg="fill"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548980020250404083603.jpg"
                    />
                  </a>
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
                    className="slides-left_527869 slides-left-wrapper w-full"
                    style={{
                      transition: 'transform 0.5s ease-in-out',
                      display: 'flex',
                      transform: 'translateX(-100vw)',
                    }}
                  >
                    <div
                      className="slide_left_527869 slide-left-slide flex justify-center items-center  min-w-full min-w-screen lg:min-w-[50vw] venCpn-image"
                      style={{ position: 'relative', background: '#FFFFFF' }}
                    >
                      <div className="relative max-h-full">
                        <a href="https://www.cos.com/ko-kr/men/new-accessories.html">
                          <img
                            alt=""
                            style={{ height: 656, width: 469 }}
                            className="hidden-new lg:block object-cover object-top "
                            data-nimg="fill"
                            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548981020250404083612.jpg"
                          />
                          <img
                            style={{ height: 418, width: 299 }}
                            alt=""
                            className="lg:hidden object-cover"
                            data-nimg="fill"
                            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548981020250404083612.jpg"
                          />{' '}
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
                        className="bg-clip-text text-main cursor-pointer flex items-center hover:underline next-button-left_527869 next-button-left-btn font_small_l_regular text-3.25"
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
                      className="slide_left_527869 slide-left-slide flex justify-center items-center  min-w-full min-w-screen lg:min-w-[50vw] venCpn-image"
                      style={{ position: 'relative', background: '#FFFFFF' }}
                    >
                      <div className="relative max-h-full">
                        <a href="https://www.cos.com/ko-kr/women/new-accessories.html">
                          <img
                            alt=""
                            style={{ height: 656, width: 469 }}
                            className="hidden-new lg:block object-cover object-top "
                            data-nimg="fill"
                            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548982020250404085334.jpg"
                          />
                          <img
                            style={{ height: 418, width: 299 }}
                            alt=""
                            className="lg:hidden object-cover"
                            data-nimg="fill"
                            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548982020250404085334.jpg"
                          />{' '}
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
                          href="https://www.cos.com/ko-kr/women/new-accessories.html"
                        >
                          여성 액세서리
                        </a>
                      </div>
                      <div
                        style={{ position: 'absolute', right: 36, bottom: 27 }}
                        className="bg-clip-text text-main cursor-pointer flex items-center hover:underline next-button-left_527869 next-button-left-btn font_small_l_regular text-3.25"
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
                      className="slide_left_527869 slide-left-slide flex justify-center items-center  min-w-full min-w-screen lg:min-w-[50vw] venCpn-image"
                      style={{ position: 'relative', background: '#FFFFFF' }}
                    >
                      <div className="relative max-h-full">
                        <a href="https://www.cos.com/ko-kr/men/shirts.html">
                          <img
                            alt=""
                            style={{ height: 656, width: 469 }}
                            className="hidden-new lg:block object-cover object-top "
                            data-nimg="fill"
                            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain25489811020250404114016.jpg"
                          />
                          <img
                            style={{ height: 418, width: 299 }}
                            alt=""
                            className="lg:hidden object-cover"
                            data-nimg="fill"
                            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain25489811020250404114016.jpg"
                          />{' '}
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
                          href="https://www.cos.com/ko-kr/men/shirts.html"
                        >
                          남성 셔츠
                        </a>
                      </div>
                      <div
                        style={{ position: 'absolute', right: 36, bottom: 27 }}
                        className="bg-clip-text text-main cursor-pointer flex items-center hover:underline next-button-left_527869 next-button-left-btn font_small_l_regular text-3.25"
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
                      className="slide_left_527869 slide-left-slide flex justify-center items-center  min-w-full min-w-screen lg:min-w-[50vw] venCpn-image"
                      style={{ position: 'relative', background: '#FFFFFF' }}
                    >
                      <div className="relative max-h-full">
                        <a href="https://www.cos.com/ko-kr/women/knitwear.html">
                          <img
                            alt=""
                            style={{ height: 656, width: 469 }}
                            className="hidden-new lg:block object-cover object-top "
                            data-nimg="fill"
                            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548984020250404085403.jpg"
                          />
                          <img
                            style={{ height: 418, width: 299 }}
                            alt=""
                            className="lg:hidden object-cover"
                            data-nimg="fill"
                            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548984020250404085403.jpg"
                          />{' '}
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
                        className="bg-clip-text text-main cursor-pointer flex items-center hover:underline next-button-left_527869 next-button-left-btn font_small_l_regular text-3.25"
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
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 15,
                      left: 12,
                      width: '96%',
                      height: 3,
                    }}
                    className="bg-clip-text text-main-inverted mix-blend-difference pagination pagination-left_527869 pagination-left-wrap flex justify-center gap-1  "
                  >
                    <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm active" />
                    <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm active" />
                    <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm active" />
                    <div className="flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm" />
                  </div>
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n\n@media (max-width: 1023px) {\n.grid.grid-cols-12:has(.slider-container) {\ngap: 64px;\n}\n\n.grid.grid-cols-12:has(.slider-container) .relative.col-span-12 img {\n\nwidth: 100vw;\n\n}\n\n\n.o-page-content {\n  overflow-x: hidden;\n}\n\n.grid.grid-cols-12:has(.slider-container) .relative.col-span-12.w-full {\n\nwidth: 100vw;  \n}\n\n.relative.max-h-full img {\n  margin-bottom: 120px;\n\n}\n\n}\n\ndiv.lg\\:pt-20:has(button) {\n  padding-top: 0;\nmargin-top: -36px;\n}\n\n',
                }}
              />
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html: '\n@media (min-width: 1024px) {\n    .lg\\:pb-30 {\n        padding-bottom: 7.5rem;\n    }\n}\n',
            }}
          />
          <div
            className="bg-block text-block theme-block-light lg:theme-block-light pb-15 lg:pb-30"
            style={{ clear: 'both' }}
          />
          <div
            className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:grid grid lg:pb-15 pb-10 theme-block-light lg:theme-block-light bg-block"
            id=""
          >
            <h2
              className="text-current font_small_m_semibold lg:font_small_l_semibold col-span-full col-start-1 text-center lg:col-start-4 lg:col-span-4"
              data-testid="heading"
            >
              게스트
            </h2>
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className=" relative" style={{ maxWidth: 'unset' }}>
              <div
                className="container-531976 flex flex-col w-full gap-5 lg:gap-10 pb-5 lg:pb-10  manual-cpnt"
                style={{ paddingTop: 36 }}
              >
                <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-531976 ">
                  {/* o-grid-controller */}
                  <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12   pt-0 ">
                    <div className="column relative col-span-12 w-full h-full lg:col-span-12  landscape-full ">
                      <div
                        className="m-free-tile lg:px-0 
 
   "
                        style={{ cursor: 'default' }}
                      >
                        <picture
                          style={{ marginBottom: 6 }}
                          data-component="APicture"
                          className="a-picture"
                          data-component-id="91527826-ab11-42c2-8060-79d5d1ed4cd6"
                        >
                          <img
                            loading="lazy"
                            className="a-image loaded"
                            data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548980020250404103747.jpg"
                            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548980020250404103747.jpg"
                            style={{ objectFit: 'cover', aspectRatio: '3/2' }}
                            data-was-processed="true"
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
                                  애드리언 브로디, 젬마 찬, 조디 터너 스미스 그리고 샤론 스톤
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
                                  애드리언 브로디, 젬마 찬, 조디 터너 스미스 그리고 샤론 스톤
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-5 lg:grid hidden" id="">
                <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
                  <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
                    <p className="">
                      캠페인의 주인공 애드리언 브로디부터 젬마 찬, 조디 터너 스미스, 샤론 스톤, 아난 웡, 팁나리
                      위라왓노돔, 이상헌, 정소민, 하트 에반젤리스타, 미카 그리고 미요시 아야카.
                    </p>
                  </div>
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n.o-hero{width:90% ;margin-bottom: 10px;        margin-top: 0;}\n.o-hero .m-teaser {max-width:100%;}\n.u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-row.u-full-width .underTxt{width:22%;  margin-left: 51%; margin-top:80px; margin-bottom:50px;}\n.u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-row .o-square,\n.o-grid-controller.u-clearfix.is-four-cols {padding: 0;  margin: 0 auto;  max-width: none;}\n@media (max-width: 1025px) {\n.u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-row.u-full-width .u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-cols-hero{display: flex;   flex-direction: column-reverse;}\n.u-cols-sm-12-12.u-cols-md-12-12.u-cols-lg-24-24.u-row.u-full-width .underTxt{ width: 85%;   margin-left: 6%;   margin-top: 0;}\n}\n',
                }}
              />
            </div>
          </div>
          <div className="container-527187 flex flex-col gap-20 lg:gap-30 w-full lg:pb-30 pb-20 manual-cpnt">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row four-column-row load-more-527187 ">
              {/* o-grid-controller */}
              <div className="grid grid-cols-12 gap-x-8 md:gap-x-4 col-span-12 lg:gap-y-30 gap-y-10 pt-0 ">
                <div className="column relative col-span-6 w-full h-full lg:col-span-2  lg:col-start-3 lg:col-end-5 ">
                  <div
                    className="m-free-tile lg:px-0 
 
   "
                    style={{ cursor: 'default' }}
                  >
                    <picture
                      style={{ marginBottom: 6 }}
                      data-component="APicture"
                      className="a-picture"
                      data-component-id="630dd78d-8ca9-4a5c-8e05-cbd0f8f17953"
                    >
                      <img
                        loading="lazy"
                        className="a-image loaded"
                        data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548980020250404103932.jpg"
                        src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548980020250404103932.jpg"
                        style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        data-was-processed="true"
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
                            <span style={{ color: 'rgb(0, 0, 0)', wordWrap: 'break-word' }}>애드리언 브로디</span>
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
                            <span className="content-full" style={{ color: 'rgb(0, 0, 0)', wordBreak: 'break-word' }}>
                              애드리언 브로디
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column relative col-span-6 w-full h-full lg:col-span-2   ">
                  <div
                    className="m-free-tile lg:px-0 
 
   "
                    style={{ cursor: 'default' }}
                  >
                    <picture
                      style={{ marginBottom: 6 }}
                      data-component="APicture"
                      className="a-picture"
                      data-component-id="f4b80f40-dfee-433c-80c2-5d7ea95e831b"
                    >
                      <img
                        loading="lazy"
                        className="a-image loaded"
                        data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548981020250404103948.jpg"
                        src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548981020250404103948.jpg"
                        style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        data-was-processed="true"
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
                            <span style={{ color: 'rgb(0, 0, 0)', wordWrap: 'break-word' }}>
                              아난 웡, 팁나리 위라왓노돔, 이상헌 그리고 정소민
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
                            <span className="content-full" style={{ color: 'rgb(0, 0, 0)', wordBreak: 'break-word' }}>
                              아난 웡, 팁나리 위라왓노돔, 이상헌 그리고 정소민
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column relative col-span-6 w-full h-full lg:col-span-2   ">
                  <div
                    className="m-free-tile lg:px-0 
 
   "
                    style={{ cursor: 'default' }}
                  >
                    <picture
                      style={{ marginBottom: 6 }}
                      data-component="APicture"
                      className="a-picture"
                      data-component-id="0d633ee5-3ce9-4a37-8151-8d6e606ecddd"
                    >
                      <img
                        loading="lazy"
                        className="a-image loaded"
                        data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548982020250404105422.jpg"
                        src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548982020250404105422.jpg"
                        style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        data-was-processed="true"
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
                            <span style={{ color: 'rgb(0, 0, 0)', wordWrap: 'break-word' }}>샤론 스톤</span>
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
                            <span className="content-full" style={{ color: 'rgb(0, 0, 0)', wordBreak: 'break-word' }}>
                              샤론 스톤
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column relative col-span-6 w-full h-full lg:col-span-2   ">
                  <div
                    className="m-free-tile lg:px-0 
 
   "
                    style={{ cursor: 'default' }}
                  >
                    <picture
                      style={{ marginBottom: 6 }}
                      data-component="APicture"
                      className="a-picture"
                      data-component-id="fa7f20ba-47da-4863-96ea-b1aebf29e304"
                    >
                      <img
                        loading="lazy"
                        className="a-image loaded"
                        data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548983020250404104006.jpg"
                        src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548983020250404104006.jpg"
                        style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        data-was-processed="true"
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
                            <span style={{ color: 'rgb(0, 0, 0)', wordWrap: 'break-word' }}>
                              하트 에반젤리스타, 미카 그리고 미요시 아야카
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
                            <span className="content-full" style={{ color: 'rgb(0, 0, 0)', wordBreak: 'break-word' }}>
                              하트 에반젤리스타, 미카 그리고 미요시 아야카
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
      </FreeHtml>
      <FreeHtml>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
          <hr className="a-keyline" />
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
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
                    <div id="womenarea" style={{ textAlign: 'center' }}>
                      여성 컬렉션
                    </div>
                  </h1>
                </div>
              </div>
              {/*// o-text-block */}
            </div>
          </div>
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
                <div id="menarea" style={{ textAlign: 'center' }}>
                  더 많은 아이템 살펴보기
                </div>
              </h1>
            </div>
          </div>
          {/*// o-text-block */}
        </div>
        <div className="container-583222 flex flex-col gap-20 lg:gap-30 lg:px-5 w-full lg:pb-30 pb-20 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row two-column-row load-more-583222 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-8 md:gap-x-5 col-span-12 gap-y-5 pt-0 ">
              <div className="column relative col-span-8 w-full h-full lg:col-span-4 col-start-3 col-end-11 lg:col-start-3 lg:col-end-7 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    // onclick="location.href='https://www.cos.com/ko-kr/campaign/spring-summer-2025-womenswear.html'"
                    data-component-id="3bfe1b83-59a7-40a7-a4b5-a65847a6db28"
                  >
                    <img
                      loading="lazy"
                      className="a-image loaded"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548980020250328094636.png"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548980020250328094636.png"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                      data-was-processed="true"
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
                          <span style={{ color: 'rgb(0, 0, 0)', wordWrap: 'break-word' }}>2025 봄 여름 컬렉션</span>
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
                          <span className="content-full" style={{ color: 'rgb(0, 0, 0)', wordBreak: 'break-word' }}>
                            2025 봄 여름 컬렉션
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
                      href="https://www.cos.com/ko-kr/campaign/spring-summer-2025-womenswear.html"
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
                    // onclick="location.href='https://www.cos.com/ko-kr/campaign/spring-summer-2025-menswear.html'"
                    data-component-id="cf6bc8f7-c726-4efc-90a1-33025c580a03"
                  >
                    <img
                      loading="lazy"
                      className="a-image loaded"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548981020250328094646.png"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2548981020250328094646.png"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                      data-was-processed="true"
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
                          <span style={{ color: 'rgb(0, 0, 0)', wordWrap: 'break-word' }}>2025 봄 여름 컬렉션</span>
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
                          <span className="content-full" style={{ color: 'rgb(0, 0, 0)', wordBreak: 'break-word' }}>
                            2025 봄 여름 컬렉션
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
                      href="https://www.cos.com/ko-kr/campaign/spring-summer-2025-menswear.html"
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
