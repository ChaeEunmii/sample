import { Metadata } from 'next';
import FreeHtml from '@/views/freehtml/FreeHtml';

export const metadata: Metadata = {
  title: 'Spring Summer 2025 Womenswear',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <div className="grid grid-cols-12 " style={{ width: '100%' }}>
          <div
            className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
            style={{
              overflow: 'hidden',
              maxHeight: 'calc(-50px + 100vh)',
              height: 'calc(-50px + 100vh)',
            }}
          >
            <a className="">
              <img
                alt=""
                className="hidden-new lg:block h-full w-full object-cover object-top"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2650420020250226115127.jpg"
              />
              <img
                alt=""
                className="lg:hidden h-full w-full object-cover"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2650420020250226115127.jpg"
              />
            </a>
            <div
              style={{
                position: 'absolute',
                right: '50%',
                bottom: '5rem',
                transform: 'translateX(50%)',
                zIndex: 1,
              }}
              className="theme-block-dark w-full pointer-events-none "
            >
              <div className="text-block flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
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
            ></div>
          </div>
          <div
            className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
            style={{
              overflow: 'hidden',
              maxHeight: 'calc(-50px + 100vh)',
              height: 'calc(-50px + 100vh)',
            }}
          >
            <a className="">
              <img
                alt=""
                className="hidden-new lg:block h-full w-full object-cover object-top"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2650421020250226112855.jpg"
              />
              <img
                alt=""
                className="lg:hidden h-full w-full object-cover"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2650421020250226112855.jpg"
              />
            </a>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: '50%',
                transform: 'translateX(50%)',
                zIndex: 1,
              }}
              className=" flex-col self-center items-center text-balance text-block  theme-block-dark w-full pointer-events-none"
            >
              <div className="flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
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
            ></div>
          </div>
        </div>
        <div className="o-spacing" />
        <div
          className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 
    
    u-row"
        >
          {/* o-product-filter */}
          <div
            id="filter-component"
            data-component="OProductFilter"
            className="hidden-new o-product-filter "
            data-component-id="28260c96-cb6a-492a-aba2-85ba4cda5a40"
          >
            <div className="hidden-new filter-wrapper">
              {/* [COS_RENEWAL] @Description : 모바일 필터 타이틀 변경. @date:2018-05-08 @author : 정병준 - 시작 */}
              <a href="#" target="_self" className="a-link filter-link">
                필터
              </a>
              <div className="filter-section">
                <h2 className="a-heading-2 filter-title">필터</h2>
                {/* [COS_RENEWAL] @Description : 모바일 필터 타이틀 변경. @date:2018-05-08 @author : 정병준 - 끝 */}
                <span className="a-icon-close" />
                <div className="filters-content">{/* [D] 대분류 */}</div>
              </div>
              {/* [D] 필터 버튼 */}
              <div className="hidden-new filter-buttons">
                <button type="submit" className="a-button is-primary">
                  <span>Apply</span>
                </button>
                <button className="a-button is-secondary is-disabled js-clear" disabled>
                  <span>Clear all</span>
                </button>
              </div>
              {/* [D] 필터 배지 */}
              <div
                data-component="OFilterBadges"
                className="hidden-new o-filter-badges"
                data-component-id="92daa6db-d766-4167-92bb-90d1f49bef4d"
              />
              <a href="#" target="_self" className="a-link js-clear">
                Clear All
              </a>
            </div>
          </div>
          {/*// o-product-filter */}
          {/* o-product-sort */}
          <div
            data-component="OProductSort"
            className="hidden-new o-product-sort has-option-chosen "
            data-component-id="2a8e19a9-6fd7-4454-b8b6-6cd1e42cc45f"
          >
            <div className="product-sort-wrapper">
              <a href="#" target="_self" className="a-link product-sort-link">
                정렬 기준
              </a>
              <div className="product-sort-section">
                <h2 className="a-heading-2 product-sort-title">정렬 기준</h2>
                <span className="a-icon-close" />
                <div className="product-sort-content">
                  <div className="o-filter" id="sort-filter">
                    <div
                      data-component="MDropdown"
                      className="m-dropdown filter-dropdown is-filled"
                      data-filter-dropdown="true"
                      data-component-id="99eb7473-309a-4d0b-8358-1a0aa9750202"
                    >
                      <label className="a-label js-a-label placeholder">
                        <span>정렬 기준</span>
                        <span className="value-label"> / 추천순</span>
                      </label>
                      <span className="a-icon-close" />
                      <input name="Sort by" defaultValue="best" className="js-input" />
                      <span className="a-icon-arrow-down-small" />
                      <ul className="list-wrapper">
                        <li>
                          <ul className="options">
                            <li className="a-option is-selected" data-value="disp_prty">
                              <span className="option-name is-selected is-active">추천순</span>
                            </li>
                            <li className="a-option" data-value="date">
                              <span className="option-name ">신상품순</span>
                            </li>
                            <li className="a-option" data-value="lowprice">
                              <span className="option-name ">낮은가격순</span>
                            </li>
                            <li className="a-option" data-value="highprice">
                              <span className="option-name ">높은가격순</span>
                            </li>
                          </ul>
                          <ul className="bottom-option">
                            <li>Cancel</li>
                          </ul>
                        </li>
                      </ul>
                      <span className="error-msg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*// o-product-sort */}
          {/* PC는 다른 필터들(o-product-filter) 밑으로  (안재철)*/}
          <div className="hidden-new relative w-full justify-between px-5 lg:flex">
            <button
              className="m-0 p-0 appearance-none bg-main-button text-main z-10 border-0"
              type="button"
              id="change-view"
              data-value="is-six-cols"
            >
              <div className="flex cursor-pointer items-center gap-3 py-3 font_small_l_regular">
                <svg
                  className="inline h-4 w-4 fill-current hidden-new four-cols-icon"
                  id="layout-view-2-desktop"
                  viewBox="0 0 17 17"
                  width="100%"
                  height="100%"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.15002 13.3496V3.14961h7.2V13.3496h-7.2Zm1.2-1.2h4.8V4.34961h-4.8v7.79999Zm6.8 1.2V3.14961H16.35V13.3496H9.15002Zm1.19998-1.2h4.8V4.34961h-4.8v7.79999Z"
                  ></path>
                </svg>
                <svg
                  className="inline h-4 w-4 fill-current hidden-new six-cols-icon"
                  id="layout-view-3-desktop"
                  viewBox="0 0 17 17"
                  width="100%"
                  height="100%"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3239 3.96777h4.5268v4.52687h-4.5268V3.96777Zm1.2 1.2v2.12687h2.1268V5.16777h-2.1268Zm-1.2 4.13594h4.5268v4.52689h-4.5268V9.30371Zm1.2 1.19999v2.1269h2.1268v-2.1269h-2.1268ZM5.98792 9.30371h4.52688v4.52689H5.98792V9.30371Zm1.2 1.19999v2.1269h2.12686v-2.1269H7.18792ZM.651001 9.30371H5.17787v4.52689H.651001V9.30371ZM1.851 10.5037v2.1269h2.12687v-2.1269H1.851ZM.651001 3.96777H5.17787v4.52687H.651001V3.96777Zm1.199999 1.2v2.12687h2.12687V5.16777H1.851Zm4.13692-1.2h4.52688v4.52687H5.98792V3.96777Zm1.2 1.2v2.12687h2.12686V5.16777H7.18792Z"
                  ></path>
                </svg>
                <svg
                  className="inline h-4 w-4 fill-current hidden-new ten-cols-icon"
                  id="layout-view-4-desktop"
                  viewBox="0 0 17 17"
                  width="100%"
                  height="100%"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.15002 4.15039h2.2v2.2h-2.2v-2.2Zm4.29981 0h2.2v2.2h-2.2v-2.2Zm4.2998 0h2.19997v2.2H9.74963v-2.2Zm4.40037 0h2.2v2.2h-2.2v-2.2ZM1.15002 8h2.2v2.2h-2.2V8Zm4.29981 0h2.2v2.2h-2.2V8Zm4.2998 0h2.19997v2.2H9.74963V8ZM14.15 8h2.2v2.2h-2.2V8ZM1.15002 11.8506h2.2v2.2h-2.2v-2.2Zm4.29981 0h2.2v2.2h-2.2v-2.2Zm4.2998 0h2.19997v2.2H9.74963v-2.2Zm4.40037 0h2.2v2.2h-2.2v-2.2Z"
                  ></path>
                </svg>
                <p className="">보기 변경</p>
              </div>
            </button>
            <div className="z-0 flex w-full justify-center absolute left-1/2 -translate-x-1/2 transform">
              <div className="relative flex max-w-full px-3.75  lg:w-1/2">
                <nav
                  className="no-scrollbar relative z-10 flex w-full overflow-x-scroll whitespace-nowrap"
                  id="nav-container"
                >
                  <div className="mx-auto font_small_l_regular">
                    <ul className=" flex w-full"></ul>
                  </div>
                </nav>
                <div className="pointer-events-none absolute right-3 z-40 h-full w-[18px] bg-gradient-to-l from-[white] to-[18px]"></div>
                <div className="pointer-events-none absolute left-3 z-40 h-full w-[18px] bg-gradient-to-r from-[white] to-[18px]"></div>
                <div className="invisible absolute -right-10 z-50 lg:visible hidden-new" id="btn-right-scroll">
                  <button
                    className="m-0 p-0 appearance-none bg-main-button text-main py-3 pr-3 font-small_l_regular hover:font-small_s_semibold border-0"
                    type="button"
                    // onclick="handleScrollRight(this)"
                  >
                    <svg
                      className="inline h-4 w-4 fill-current"
                      id="chevron-right"
                      viewBox="0 0 17 17"
                      width="100%"
                      height="100%"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.90146 8.24995 6.32573 4.67421l.84853-.84853 4.42424 4.42427-4.42424 4.42425-.84853-.8485 3.57573-3.57575Z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="invisible absolute -left-10 z-50 lg:visible hidden-new" id="btn-left-scroll">
                  <button
                    className="m-0 p-0 appearance-none bg-main-button text-main py-3 pr-3 font-small_l_regular hover:font-small_s_semibold border-0"
                    type="button"
                    // onclick="handleScrollLeft(this)"
                  >
                    <svg
                      className="inline h-4 w-4 fill-current"
                      id="chevron-left"
                      viewBox="0 0 17 17"
                      width="100%"
                      height="100%"
                    >
                      <path
                        fillRule="evenodd"
                        d="m6.09853 8.24957 3.57574 3.57573-.84853.8485-4.42427-4.42423L8.82574 3.8253l.84852.84853-3.57573 3.57574Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div style={{ height: '42.84px' }}></div>
          </div>
          <div className="no-scrollbar relative overflow-x-scroll lg:hidden">
            <div>
              <div className="relative z-0 flex w-full justify-center">
                <div className="relative flex max-w-full px-3.75 lg:w-1/2">
                  <nav
                    className="no-scrollbar relative z-10 flex w-full overflow-x-scroll whitespace-nowrap"
                    id="nav-container"
                  >
                    <div className="mx-auto font_small_l_regular">
                      <ul className=" flex w-full"></ul>
                    </div>
                  </nav>
                  <div className="pointer-events-none absolute right-3 z-40 h-full w-[18px] bg-gradient-to-l from-[white] to-[18px]"></div>
                  <div className="pointer-events-none absolute left-3 z-40 h-full w-[18px] bg-gradient-to-r from-[white] to-[18px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Change view, filter, reset, scroll top on mobile */}
        <div className="pointer-events-auto tw-fixed top-3/4 z-10 inline-flex flex-col lg:hidden !right-0 w-10">
          <button
            className="m-0 p-0 appearance-none bg-main-button text-main flex h-10 w-full items-center justify-center border-0 border-x-0.5 border-t-0.5 border-base-black"
            type="button"
            id="change-view-2"
            data-value="is-six-cols"
          >
            <svg
              className="inline h-4 w-4 fill-current hidden-new ten-cols-icon"
              id="layout-view-4-mobile"
              viewBox="0 0 17 17"
              width="100%"
              height="100%"
            >
              <path
                fillRule="evenodd"
                d="M.649994.649902H2.84999V2.8499H.649994V.649902Zm4.299806 0h2.2V2.8499h-2.2V.649902Zm4.2998 0h2.2V2.8499h-2.2V.649902Zm4.4004 0h2.2V2.8499h-2.2V.649902ZM.649994 4.94971H2.84999v2.2H.649994v-2.2Zm4.299806 0h2.2v2.2h-2.2v-2.2Zm4.2998 0h2.2v2.2h-2.2v-2.2Zm4.4004 0h2.2v2.2h-2.2v-2.2ZM.649994 9.24951H2.84999v2.19999H.649994V9.24951Zm4.299806 0h2.2v2.19999h-2.2V9.24951Zm4.2998 0h2.2v2.19999h-2.2V9.24951Zm4.4004 0h2.2v2.19999h-2.2V9.24951ZM.649994 13.5503H2.84999v2.2H.649994v-2.2Zm4.299806 0h2.2v2.2h-2.2v-2.2Zm4.2998 0h2.2v2.2h-2.2v-2.2Zm4.4004 0h2.2v2.2h-2.2v-2.2Z"
              ></path>
            </svg>
            <svg
              className="inline h-4 w-4 fill-current hidden-new six-cols-icon"
              id="layout-view-3-mobile"
              viewBox="0 0 17 17"
              width="100%"
              height="100%"
            >
              <path
                fillRule="evenodd"
                d="M1.15.649902h4.52687V5.17677H1.15V.649902ZM2.35 1.8499v2.12687h2.12687V1.8499H2.35ZM6.48692.649902h4.52688V5.17677H6.48692V.649902Zm1.2 1.199998v2.12687h2.12686V1.8499H7.68692ZM11.8229.649902h4.5268V5.17677h-4.5268V.649902Zm1.2 1.199998v2.12687h2.1268V1.8499h-2.1268Zm-1.2 4.13692h4.5268v4.52688h-4.5268V5.98682Zm1.2 1.2v2.12686h2.1268V7.18682h-2.1268Zm-1.2 4.13598h4.5268v4.5268h-4.5268v-4.5268Zm1.2 1.2v2.1268h2.1268v-2.1268h-2.1268Zm-6.53598-1.2h4.52688v4.5268H6.48692v-4.5268Zm1.2 1.2v2.1268h2.12686v-2.1268H7.68692Zm-6.53692-1.2h4.52687v4.5268H1.15v-4.5268Zm1.2 1.2v2.1268h2.12687v-2.1268H2.35Zm-1.2-6.53598h4.52687v4.52688H1.15V5.98682Zm1.2 1.2v2.12686h2.12687V7.18682H2.35Zm4.13692-1.2h4.52688v4.52688H6.48692V5.98682Zm1.2 1.2v2.12686h2.12686V7.18682H7.68692Z"
              ></path>
            </svg>
            <svg
              className="inline h-4 w-4 fill-current hidden-new four-cols-icon"
              id="layout-view-2-mobile"
              viewBox="0 0 17 17"
              width="100%"
              height="100%"
            >
              <path
                fillRule="evenodd"
                d="M.65.651367h7.03333V7.6847H.65V.651367Zm1.2 1.200003V6.4847h4.63333V1.85137H1.85ZM8.81797.651367h7.03333V7.6847H8.81797V.651367ZM10.018 1.85137V6.4847h4.6333V1.85137H10.018ZM.65 8.81543h7.03333v7.03337H.65V8.81543Zm1.2 1.19997v4.6334h4.63333v-4.6334H1.85Zm6.96797-1.19997h7.03333v7.03337H8.81797V8.81543ZM10.018 10.0154v4.6334h4.6333v-4.6334H10.018Z"
              ></path>
            </svg>
          </button>
          <button
            className="btn-scroll-to-top m-0 p-0 appearance-none bg-main-button text-main flex h-10 w-full items-center justify-center border-0 border-x-0.5 border-b-0.5 border-base-black hidden-new"
            style={{ borderRight: '1px solid rgb(8, 8, 8)' }}
            type="button"
          >
            <svg className="inline h-4 w-4 fill-current" id="chevron-up" viewBox="0 0 17 17" width="100%" height="100%">
              <path
                fillRule="evenodd"
                d="M8.75003 6.09896 5.1743 9.6747l-.84853-.84853 4.42426-4.42426 4.42427 4.42426-.8485.84853-3.57577-3.57574Z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="pointer-events-auto tw-fixed left-[calc(100%-6rem)] top-3/4 z-10 hidden-new flex-col scroll-to-top-section">
          <button
            className="m-0 p-0 appearance-none bg-main-button text-main flex h-10 w-10 items-center justify-center border-0.5 btn-scroll-to-top hidden-new"
            type="button"
            style={{ borderColor: 'rgb(8, 8, 8) !important' }}
          >
            <svg className="inline h-4 w-4 fill-current" id="chevron-up" viewBox="0 0 17 17" width="100%" height="100%">
              <path
                fillRule="evenodd"
                d="M8.75003 6.09896 5.1743 9.6747l-.84853-.84853 4.42426-4.42426 4.42427 4.42426-.8485.84853-3.57577-3.57574Z"
              ></path>
            </svg>
          </button>
        </div>
        {/* Modal when click button search on header */}
        <div id="search-page-modal" className="search-drawer-modal z-drawer tw-fixed w-full top-0 right-0 hidden-new">
          <div aria-hidden="true" className="tw-fixed inset-0 bg-main-drawer-backdrop" style={{ opacity: 1 }} />
          <div
            className="pointer-events-none tw-fixed right-0 top-0 flex max-h-screen min-h-full w-full max-w-full justify-end "
            id="headlessui-dialog-panel"
            style={{ opacity: 1 }}
          >
            <div className="flex w-full shrink-0 grow basis-0 justify-end px-2.5 z-[999]">
              <div
                className="pointer-events-auto flex w-full flex-col bg-main md:[&:first-child]:-mr-2.5 md:w-w-full lg:w-1/3 xl:w-[25%] xl:[&:first-child]:w-[calc(25%_+_1.25rem)] headlessui-dialog-content overflow-y-auto"
                style={{ opacity: 1 }}
              >
                <div className="flex-1 bg-main">
                  <div className="w-full border-l-0.5 border-main relative flex flex-col" style={{ height: '100vh' }}>
                    <div
                      className="flex justify-between h-12.5 border-b-0.5 hidden-new"
                      style={{ borderColor: '#6b7280' }}
                      id="input-section"
                    >
                      <input
                        id="search-input"
                        className="search-input m-0 px-3 py-2 w-full appearance-none hover:cursor-text border-0  bg-main text-main"
                        autoComplete="off"
                        maxLength={500}
                        name="search"
                        autoFocus
                        defaultValue=""
                      />
                      <button
                        className="m-0 p-0 appearance-none h-12.5 border-b-0.5 border-base-black w-12.5 border-0 bg-main text-main flex justify-center items-center"
                        // onclick="handleCloseFilter()"
                      >
                        <svg className="inline h-4 w-4 fill-current" id="nav-close-desktop" viewBox="0 0 17 17">
                          <path fillRule="evenodd" d="m14.122 3.726-9.9 9.9-.848-.85 9.9-9.899.848.849Z"></path>
                          <path fillRule="evenodd" d="m4.224 2.878 9.9 9.9-.85.848-9.899-9.9.849-.848Z"></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className="sticky top-0 z-10 -mt-px flex h-[3.125rem] w-full items-center justify-between border-b-0.5 border-main-button bg-main pl-5"
                      id="label-section"
                    >
                      <span className="font_small_s_semibold">필터 &amp; 정렬</span>
                      <button
                        className="border-0 m-0 p-0 appearance-none bg-main-button text-main px-5 py-3"
                        // onclick="handleCloseFilter()"
                      >
                        <svg className="inline h-4 w-4 fill-current" id="nav-close-desktop" viewBox="0 0 17 17">
                          <path fillRule="evenodd" d="m14.122 3.726-9.9 9.9-.848-.85 9.9-9.899.848.849Z"></path>
                          <path fillRule="evenodd" d="m4.224 2.878 9.9 9.9-.85.848-9.899-9.9.849-.848Z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="border-b-0.5 border-main p-5 pb-10 search-no-result hidden-new">
                      <p className="font_s_regular">다른 검색어를 입력해 보세요.</p>
                    </div>
                    <ul
                      id="search-result-page"
                      className="search-suggestion flex flex-col gap-2 border-b-0.5 border-main p-5 text-main-disabled font_s_regular hidden-new"
                    ></ul>
                    <div className="flex grow flex-col relative hidden-new" id="filter-all-page">
                      <div className="relative flex flex-col border-main-button grow">
                        <div className="flex grow">
                          <div className="grow">
                            {/* Price */}
                            <button
                              aria-controls="filter-price-list-search-page"
                              className="toggle-button border-t-0.5 flex justify-between text-left font_small_xs_regular pb-7.5 pt-3.75 px-5 border-main-button h-[3.75rem] w-full"
                              type="button"
                              style={{
                                border: 'none',
                                borderTopWidth: 1,
                                borderTopStyle: 'solid',
                              }}
                              id="filter-price-button"
                              // onclick="handleToggleFilterSearchPage(this)"
                            >
                              가격
                              <svg
                                className="default-svg inline h-4 w-4 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path d="M8 5L8 11" stroke="#080808" strokeLinecap="square" />
                                <path d="M5 8L11 8" stroke="#080808" strokeLinecap="square" />
                              </svg>
                              <svg
                                className="open-svg inline h-4 w-4 fill-current hidden-new"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 17"
                                fill="none"
                              >
                                <path d="M5 8.5L11 8.5" stroke="#080808" strokeLinecap="square" />
                              </svg>
                            </button>
                            <div
                              className="hidden-new disclosure-content duration-400 overflow-y-auto transition-[height,opacity] font_s_regular"
                              id="filter-price-list-search-page"
                            >
                              <div className="pb-7.5 w-full">
                                <div className="flex px-5">
                                  <div className="relative grow">
                                    <label
                                      id="label-price-from-search-page"
                                      className="relative flex w-full flex-col border-0.5 border-main-input h-15"
                                    >
                                      <span className="pointer-events-none absolute bottom-auto top-0 w-full pl-3.75 pr-2 inline-flex items-center h-auto pt-2.5 font_mini_regular_uc">
                                        From
                                      </span>
                                      <span className="relative  flex w-full pl-3.75 pr-2 h-full justify-center pb-2.5 pt-7.5 font_s_regular">
                                        <input
                                          className="input-suffix m-0 appearance-none text-main hover:cursor-text w-full !border-0 !p-0 font_s_regular hide-number-controller price-from-search-page"
                                          name="price_au_from"
                                          type="number"
                                          id="filter-price-from-search-page"
                                          defaultValue=""
                                          data-value=""
                                        />
                                        <span className="suffix" style={{ left: 15 }}>
                                          원
                                        </span>
                                      </span>
                                    </label>
                                  </div>
                                  <div className="relative grow">
                                    <label
                                      id="label-price-to-search-page"
                                      className="relative flex w-full flex-col border-0.5 border-l-0 border-main-input h-15"
                                    >
                                      <span className="pointer-events-none absolute bottom-auto top-0 w-full pl-3.75 pr-2 inline-flex items-center h-auto pt-2.5 font_mini_regular_uc">
                                        To
                                      </span>
                                      <span className="relative flex w-full pl-3.75 pr-2 h-full justify-center pb-2.5 pt-7.5 font_s_regular">
                                        <input
                                          className="input-suffix m-0 appearance-none text-main hover:cursor-text w-full !border-0 !p-0 font_s_regular hide-number-controller price-to-search-page"
                                          name="price_au_from"
                                          type="number"
                                          id="filter-price-to-search-page"
                                          defaultValue=""
                                          data-value=""
                                        />
                                        <span className="suffix" style={{ left: 15 }}>
                                          원
                                        </span>
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Style */}
                            {/* Fabric */}
                            {/* Category */}
                            {/* Sort by */}
                            <button
                              aria-controls="filter-sort-list-search-page"
                              className="toggle-button border-t-0.5 flex justify-between text-left font_small_xs_regular pb-7.5 pt-3.75 px-5 border-main-button h-[3.75rem] w-full"
                              type="button"
                              style={{
                                border: 'none',
                                borderTopWidth: 1,
                                borderTopStyle: 'solid',
                              }}
                              id="filter-sort-button"
                              // onclick="handleToggleFilterSearchPage(this)"
                            >
                              정렬 기준
                              <svg
                                className="default-svg inline h-4 w-4 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path d="M8 5L8 11" stroke="#080808" strokeLinecap="square" />
                                <path d="M5 8L11 8" stroke="#080808" strokeLinecap="square" />
                              </svg>
                              <svg
                                className="open-svg inline h-4 w-4 fill-current hidden-new"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 17"
                                fill="none"
                              >
                                <path d="M5 8.5L11 8.5" stroke="#080808" strokeLinecap="square" />
                              </svg>
                            </button>
                            <div
                              className="hidden-new disclosure-content  duration-400 overflow-y-auto transition-[height,opacity] font_s_regular"
                              id="filter-sort-list-search-page"
                            >
                              <div className="pb-7.5 w-full">
                                <div className="grid w-full grid-flow-row px-5">
                                  <ul id="sort-radiogroup" role="radiogroup">
                                    <li
                                      className="py-2.25"
                                      id="sort-radiogroup-disp_prty"
                                      role="radio"
                                      aria-checked="false"
                                      tabIndex={0}
                                    >
                                      <div className="sort-page-item group cursor-pointer flex h-full w-full items-center">
                                        <input
                                          className="hidden"
                                          id="disp_prty"
                                          type="radio"
                                          name="sort-page"
                                          defaultValue="disp_prty"
                                        />
                                        <div className="h-2 w-2 inline-flex items-center justify-center align-middle rounded-full border-0.5 border-main-radio-button">
                                          <span className=" group-hover:visible visible h-[4px] w-[4px] rounded-full bg-main-radio-button-mark" />
                                        </div>
                                        <label
                                          className="pl-2.5 hover:cursor-pointer font_small_xs_regular w-full h-full flex items-center"
                                          htmlFor="disp_prty"
                                        >
                                          추천순
                                        </label>
                                      </div>
                                    </li>
                                    <li
                                      className="py-2.25"
                                      id="sort-radiogroup-disp_prty"
                                      role="radio"
                                      aria-checked="false"
                                      tabIndex={1}
                                    >
                                      <div className="sort-page-item group cursor-pointer flex h-full w-full items-center">
                                        <input
                                          className="hidden"
                                          id="date"
                                          type="radio"
                                          name="sort-page"
                                          defaultValue="date"
                                        />
                                        <div className="h-2 w-2 inline-flex items-center justify-center align-middle rounded-full border-0.5 border-main-radio-button">
                                          <span className="invisible group-hover:visible visible h-[4px] w-[4px] rounded-full bg-main-radio-button-mark" />
                                        </div>
                                        <label
                                          className="pl-2.5 hover:cursor-pointer font_small_xs_regular w-full h-full flex items-center"
                                          htmlFor="date"
                                        >
                                          신상품순
                                        </label>
                                      </div>
                                    </li>
                                    <li
                                      className="py-2.25"
                                      id="sort-radiogroup-disp_prty"
                                      role="radio"
                                      aria-checked="false"
                                      tabIndex={2}
                                    >
                                      <div className="sort-page-item group cursor-pointer flex h-full w-full items-center">
                                        <input
                                          className="hidden"
                                          id="lowprice"
                                          type="radio"
                                          name="sort-page"
                                          defaultValue="lowprice"
                                        />
                                        <div className="h-2 w-2 inline-flex items-center justify-center align-middle rounded-full border-0.5 border-main-radio-button">
                                          <span className="invisible group-hover:visible visible h-[4px] w-[4px] rounded-full bg-main-radio-button-mark" />
                                        </div>
                                        <label
                                          className="pl-2.5 hover:cursor-pointer font_small_xs_regular w-full h-full flex items-center"
                                          htmlFor="lowprice"
                                        >
                                          낮은가격순
                                        </label>
                                      </div>
                                    </li>
                                    <li
                                      className="py-2.25"
                                      id="sort-radiogroup-disp_prty"
                                      role="radio"
                                      aria-checked="false"
                                      tabIndex={3}
                                    >
                                      <div className="sort-page-item group cursor-pointer flex h-full w-full items-center">
                                        <input
                                          className="hidden"
                                          id="highprice"
                                          type="radio"
                                          name="sort-page"
                                          defaultValue="highprice"
                                        />
                                        <div className="h-2 w-2 inline-flex items-center justify-center align-middle rounded-full border-0.5 border-main-radio-button">
                                          <span className="invisible group-hover:visible visible h-[4px] w-[4px] rounded-full bg-main-radio-button-mark" />
                                        </div>
                                        <label
                                          className="pl-2.5 hover:cursor-pointer font_small_xs_regular w-full h-full flex items-center"
                                          htmlFor="highprice"
                                        >
                                          높은가격순
                                        </label>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div style={{ borderTop: '1px solid #dadada' }} />
                          </div>
                        </div>
                        <div className="sticky bottom-0 z-[60] flex h-[5.625rem] w-full self-end bg-main p-5 border-base-black">
                          <button
                            className="m-0 p-0 appearance-none theme-button-dark bg-button text-button border-button border-0.5 cursor-button transition-all duration-100 hover:bg-button-hover hover:border-0.5 hover:border-button-hover hover:text-button-hover hover:cursor-button-hover flex px-3.75 py-2.5 h-[50px] w-1/2 font_small_xs_medium"
                            type="button"
                            // onclick="handleFilterSearch()"
                          >
                            <div className="flex w-full justify-between">
                              <p className="text-left font_small_xs_regular !font-medium">
                                <span style={{ color: '#FFFFFF' }} className="filter-result-number-page-text">
                                  0개 제품 보기
                                </span>
                              </p>
                            </div>
                          </button>
                          <button
                            className="btn-reset-filter m-0 p-0 appearance-none theme-button-light bg-button text-button border-button border-0.5 cursor-button transition-all duration-100 hover:bg-button-hover hover:border-0.5 hover:border-button-hover hover:text-button-hover hover:cursor-button-hover flex px-3.75 py-2.5 h-[50px] w-1/2 font_small_xs_medium"
                            type="button"
                          >
                            <div className="flex w-full justify-between">
                              <p className="text-left font_small_xs_regular !font-medium">
                                <span>재설정</span>
                              </p>
                              <svg
                                style={{ width: 'initial', height: 'initial' }}
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path d="M8.10566 5.71894L6.33789 3.95117L8.10566 2.1834" stroke="#080808" />
                                <path
                                  d="M6.91945 3.98392C7.84855 3.73497 8.83523 3.81587 9.71137 4.21285C10.5875 4.60982 11.2989 5.2983 11.7243 6.16098C12.1498 7.02366 12.2629 8.00717 12.0445 8.94392C11.8261 9.88067 11.2896 10.7127 10.5265 11.2983C9.76337 11.8838 8.82084 12.1866 7.85948 12.1552C6.89812 12.1237 5.97741 11.7599 5.25423 11.1257C4.53106 10.4915 4.05016 9.62611 3.89347 8.67708C3.73678 7.72805 3.91401 6.75405 4.39495 5.92104"
                                  stroke="#080808"
                                />
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-0.5 border-main p-5 trending-search open-search hidden-new">
                      <p className="mb-7.5 font_s_regular">추천 검색어</p>
                      <ul className="flex flex-col gap-2 font_s_regular 5-trend-data" id="5-trend-page">
                        <li>
                          <a className="" href="#">
                            &apos;진&apos;
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="border-b-0.5 border-main p-5 previous-search open-search hidden-new"
                      id="history-search-page"
                    >
                      <p className="mb-7.5 font_s_regular">최근 검색어</p>
                      <ul className="flex flex-col gap-2 font_s_regular previous-search-data" id="previous-search">
                        <li>
                          <a className="" href="#">
                            &apos;셔츠&apos;
                          </a>
                        </li>
                        <li>
                          <a className="" href="#">
                            &apos;진&apos;
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Action sheet mobile */}
        <div id="headlessui-portal-root" className="lg:hidden search-drawer-modal">
          <div data-headlessui-portal="">
            <div>
              <div
                className="pointer-events-none tw-fixed inset-0 top-auto z-drawer flex h-full max-h-[100svh] touch-none flex-col justify-end transition-transform"
                id="headlessui-dialog-:rgk:"
                role="dialog"
                aria-modal="true"
              >
                <div
                  id="back-drop"
                  aria-hidden="true"
                  className="tw-fixed inset-0 z-10 touch-none bg-main-drawer-backdrop"
                  style={{ opacity: 1 }}
                />
                <div
                  className="flex-0 pointer-events-none sticky bottom-0 z-20 mt-auto h-full overflow-hidden "
                  id="headlessui-dialog-panel-:rgl:"
                  style={{ paddingTop: 80 }}
                >
                  <div
                    className="pointer-events-auto z-20 flex h-full max-h-full w-full touch-none flex-col overflow-hidden !rounded-t-2.5 bg-main actionsheet-content translate-y-full"
                    style={{ transform: 'translateY(0%) translateZ(0px)' }}
                  >
                    <div className="touch-none">
                      <button
                        style={{ border: 'unset' }}
                        aria-label="CLOSE"
                        className="flex min-h-[13px] w-full items-center justify-center cursor-pointer focus:outline-none"
                        type="button"
                      >
                        <div className="h-[3px] w-[50px] rounded bg-main-drawer-handle" />
                      </button>
                    </div>
                    <div className="w-full flex-1 overflow-auto flex flex-col">
                      <div className="sticky top-0 z-10 -mt-px flex h-[3.125rem] w-full items-center justify-between border-b-0.5 border-main-button bg-main pl-5 pr-3.75">
                        <span className="font_small_s_semibold">필터 &amp; 정렬</span>
                        <button
                          id="close-button"
                          className="m-0 p-0 appearance-none bg-main-button text-main"
                          type="button"
                          style={{ border: 'unset' }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            className="inline h-4 w-4 fill-current"
                          >
                            <line
                              x1="14.5239"
                              y1="5.47548"
                              x2="5.47296"
                              y2="14.5264"
                              stroke="#080808"
                              strokeWidth="1.2"
                              strokeLinecap="square"
                            />
                            <line
                              x1="5.47304"
                              y1="5.47656"
                              x2="14.524"
                              y2="14.5275"
                              stroke="#080808"
                              strokeWidth="1.2"
                              strokeLinecap="square"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex grow flex-col relative" id="filter-all-page-mobile">
                        <div className="relative flex flex-col border-main-button grow">
                          <div className="flex grow">
                            <div className="grow">
                              {/* Price */}
                              <button
                                aria-controls="filter-price-list-search-page-mobile"
                                className="toggle-button border-t-0.5 flex justify-between text-left font_small_xs_regular pb-7.5 pt-3.75 px-5 border-main-button h-[3.75rem] w-full"
                                type="button"
                                style={{
                                  border: 'none',
                                  borderTopWidth: 1,
                                  borderTopStyle: 'solid',
                                }}
                                id="filter-price-button-mobile"
                                // onclick="handleToggleFilterSearchPageMobile(this)"
                              >
                                가격
                                <svg
                                  className="default-svg inline h-4 w-4 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path d="M8 5L8 11" stroke="#080808" strokeLinecap="square" />
                                  <path d="M5 8L11 8" stroke="#080808" strokeLinecap="square" />
                                </svg>
                                <svg
                                  className="open-svg inline h-4 w-4 fill-current hidden-new"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 17"
                                  fill="none"
                                >
                                  <path d="M5 8.5L11 8.5" stroke="#080808" strokeLinecap="square" />
                                </svg>
                              </button>
                              <div
                                className="hidden-new disclosure-content duration-400 overflow-y-auto transition-[height,opacity] font_s_regular"
                                id="filter-price-list-search-page-mobile"
                              >
                                <div className="pb-7.5 w-full">
                                  <div className="flex px-5">
                                    <div className="relative grow">
                                      <label
                                        id="label-price-from-search-page-mobile"
                                        className="relative flex w-full flex-col border-0.5 border-main-input h-15"
                                      >
                                        <span className="pointer-events-none absolute bottom-auto top-0 w-full pl-3.75 pr-2 inline-flex items-center h-auto pt-2.5 font_mini_regular_uc">
                                          From
                                        </span>
                                        <span className="relative  flex w-full pl-3.75 pr-2 h-full justify-center pb-2.5 pt-7.5 font_s_regular">
                                          <input
                                            className="input-suffix m-0 appearance-none text-main hover:cursor-text w-full !border-0 !p-0 font_s_regular hide-number-controller price-from-search-page"
                                            name="price_au_from"
                                            type="number"
                                            id="filter-price-from-search-page-mobile"
                                            defaultValue=""
                                            data-value=""
                                          />
                                          <span className="suffix" style={{ left: 15 }}>
                                            원
                                          </span>
                                        </span>
                                      </label>
                                    </div>
                                    <div className="relative grow">
                                      <label
                                        id="label-price-to-search-page-mobile"
                                        className="relative flex w-full flex-col border-0.5 border-l-0 border-main-input h-15"
                                      >
                                        <span className="pointer-events-none absolute bottom-auto top-0 w-full pl-3.75 pr-2 inline-flex items-center h-auto pt-2.5 font_mini_regular_uc">
                                          To
                                        </span>
                                        <span className="relative flex w-full pl-3.75 pr-2 h-full justify-center pb-2.5 pt-7.5 font_s_regular">
                                          <input
                                            className="input-suffix m-0 appearance-none text-main hover:cursor-text w-full !border-0 !p-0 font_s_regular hide-number-controller price-to-search-page"
                                            name="price_au_from"
                                            type="number"
                                            id="filter-price-to-search-page-mobile"
                                            defaultValue=""
                                            data-value=""
                                          />
                                          <span className="suffix" style={{ left: 15 }}>
                                            원
                                          </span>
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Style */}
                              {/* Fabric */}
                              {/* Category */}
                              {/* Sort by */}
                              <button
                                aria-controls="filter-sort-list-search-page-mobile"
                                className="toggle-button border-t-0.5 flex justify-between text-left font_small_xs_regular pb-7.5 pt-3.75 px-5 border-main-button h-[3.75rem] w-full"
                                type="button"
                                style={{
                                  border: 'none',
                                  borderTopWidth: 1,
                                  borderTopStyle: 'solid',
                                }}
                                id="filter-sort-button-mobile"
                                // onclick="handleToggleFilterSearchPageMobile(this)"
                              >
                                정렬 기준
                                <svg
                                  className="default-svg inline h-4 w-4 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path d="M8 5L8 11" stroke="#080808" strokeLinecap="square" />
                                  <path d="M5 8L11 8" stroke="#080808" strokeLinecap="square" />
                                </svg>
                                <svg
                                  className="open-svg inline h-4 w-4 fill-current hidden-new"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 17"
                                  fill="none"
                                >
                                  <path d="M5 8.5L11 8.5" stroke="#080808" strokeLinecap="square" />
                                </svg>
                              </button>
                              <div
                                className="hidden-new disclosure-content  duration-400 overflow-y-auto transition-[height,opacity] font_s_regular"
                                id="filter-sort-list-search-page-mobile"
                              >
                                <div className="pb-7.5 w-full">
                                  <div className="grid w-full grid-flow-row px-5">
                                    <ul id="sort-radiogroup" role="radiogroup">
                                      <li
                                        className="py-2.25"
                                        id="sort-radiogroup-disp_prty"
                                        role="radio"
                                        aria-checked="false"
                                        tabIndex={0}
                                      >
                                        <div className="sort-page-item group cursor-pointer flex h-full w-full items-center">
                                          <input
                                            className="hidden"
                                            id="filter_disp_prty"
                                            type="radio"
                                            name="sort-page"
                                            defaultValue="disp_prty"
                                          />
                                          <div className="h-2 w-2 inline-flex items-center justify-center align-middle rounded-full border-0.5 border-main-radio-button">
                                            <span className=" group-hover:visible visible h-[4px] w-[4px] rounded-full bg-main-radio-button-mark" />
                                          </div>
                                          <label
                                            className="pl-2.5 hover:cursor-pointer font_small_xs_regular w-full h-full flex items-center"
                                            htmlFor="filter_disp_prty"
                                          >
                                            추천순
                                          </label>
                                        </div>
                                      </li>
                                      <li
                                        className="py-2.25"
                                        id="sort-radiogroup-disp_prty"
                                        role="radio"
                                        aria-checked="false"
                                        tabIndex={1}
                                      >
                                        <div className="sort-page-item group cursor-pointer flex h-full w-full items-center">
                                          <input
                                            className="hidden"
                                            id="filter_date"
                                            type="radio"
                                            name="sort-page"
                                            defaultValue="date"
                                          />
                                          <div className="h-2 w-2 inline-flex items-center justify-center align-middle rounded-full border-0.5 border-main-radio-button">
                                            <span className="invisible group-hover:visible visible h-[4px] w-[4px] rounded-full bg-main-radio-button-mark" />
                                          </div>
                                          <label
                                            className="pl-2.5 hover:cursor-pointer font_small_xs_regular w-full h-full flex items-center"
                                            htmlFor="filter_date"
                                          >
                                            신상품순
                                          </label>
                                        </div>
                                      </li>
                                      <li
                                        className="py-2.25"
                                        id="sort-radiogroup-disp_prty"
                                        role="radio"
                                        aria-checked="false"
                                        tabIndex={2}
                                      >
                                        <div className="sort-page-item group cursor-pointer flex h-full w-full items-center">
                                          <input
                                            className="hidden"
                                            id="filter_lowprice"
                                            type="radio"
                                            name="sort-page"
                                            defaultValue="lowprice"
                                          />
                                          <div className="h-2 w-2 inline-flex items-center justify-center align-middle rounded-full border-0.5 border-main-radio-button">
                                            <span className="invisible group-hover:visible visible h-[4px] w-[4px] rounded-full bg-main-radio-button-mark" />
                                          </div>
                                          <label
                                            className="pl-2.5 hover:cursor-pointer font_small_xs_regular w-full h-full flex items-center"
                                            htmlFor="filter_lowprice"
                                          >
                                            낮은가격순
                                          </label>
                                        </div>
                                      </li>
                                      <li
                                        className="py-2.25"
                                        id="sort-radiogroup-disp_prty"
                                        role="radio"
                                        aria-checked="false"
                                        tabIndex={3}
                                      >
                                        <div className="sort-page-item group cursor-pointer flex h-full w-full items-center">
                                          <input
                                            className="hidden"
                                            id="filter_highprice"
                                            type="radio"
                                            name="sort-page"
                                            defaultValue="highprice"
                                          />
                                          <div className="h-2 w-2 inline-flex items-center justify-center align-middle rounded-full border-0.5 border-main-radio-button">
                                            <span className="invisible group-hover:visible visible h-[4px] w-[4px] rounded-full bg-main-radio-button-mark" />
                                          </div>
                                          <label
                                            className="pl-2.5 hover:cursor-pointer font_small_xs_regular w-full h-full flex items-center"
                                            htmlFor="filter_highprice"
                                          >
                                            높은가격순
                                          </label>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div style={{ borderTop: '1px solid #dadada' }} />
                            </div>
                          </div>
                          <div className="sticky bottom-0 z-[60] flex h-[5.625rem] w-full self-end bg-main p-5 border-base-black">
                            <button
                              className="m-0 p-0 appearance-none theme-button-dark bg-button text-button border-button border-0.5 cursor-button transition-all duration-100 hover:bg-button-hover hover:border-0.5 hover:border-button-hover hover:text-button-hover hover:cursor-button-hover flex px-3.75 py-2.5 h-[50px] w-1/2 font_small_xs_medium"
                              type="button"
                              // onclick="handleCloseActionSheet()"
                            >
                              <div className="flex w-full justify-between">
                                <p className="text-left font_small_xs_regular !font-medium">
                                  <span style={{ color: '#FFFFFF' }} className="filter-result-number-page-text">
                                    0개 제품 보기
                                  </span>
                                </p>
                              </div>
                            </button>
                            <button
                              className="btn-reset-filter m-0 p-0 appearance-none theme-button-light bg-button text-button border-button border-0.5 cursor-button transition-all duration-100 hover:bg-button-hover hover:border-0.5 hover:border-button-hover hover:text-button-hover hover:cursor-button-hover flex px-3.75 py-2.5 h-[50px] w-1/2 font_small_xs_medium"
                              type="button"
                            >
                              <div className="flex w-full justify-between">
                                <p className="text-left font_small_xs_regular !font-medium">
                                  <span>재설정</span>
                                </p>
                                <svg
                                  style={{ width: 'initial', height: 'initial' }}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path d="M8.10566 5.71894L6.33789 3.95117L8.10566 2.1834" stroke="#080808" />
                                  <path
                                    d="M6.91945 3.98392C7.84855 3.73497 8.83523 3.81587 9.71137 4.21285C10.5875 4.60982 11.2989 5.2983 11.7243 6.16098C12.1498 7.02366 12.2629 8.00717 12.0445 8.94392C11.8261 9.88067 11.2896 10.7127 10.5265 11.2983C9.76337 11.8838 8.82084 12.1866 7.85948 12.1552C6.89812 12.1237 5.97741 11.7599 5.25423 11.1257C4.53106 10.4915 4.05016 9.62611 3.89347 8.67708C3.73678 7.72805 3.91401 6.75405 4.39495 5.92104"
                                    stroke="#080808"
                                  />
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="search recomended-products swiper dpoPraSwiper mo"
          id="dpo2PraSwiper"
          style={{ display: 'none' }}
        >
          <p className="recomended-products-title font_s_regular">베스트셀러</p>
          <div className="swiper-wrapper" id="dpo2PraSwiperItem"></div>
          <div className="swiper-button-next">다음</div>
          <div className="swiper-button-prev">이전</div>
          <p className="recomended-products-title font_s_regular" id="dpo2PraSwiperRcmd">
            추천 상품{' '}
          </p>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
          <div
            id="category-list"
            className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 gap-y-3.75 is-six-cols o-category-listing-new"
            data-component="ProductContainer"
            data-component-id="d027457a-9f3f-4454-9c9f-a19d2b48df5e"
          ></div>
          <div className="lg:pt-20 pt-15 grid grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 pt-30">
            <button
              id="load-more-product-list"
              className="hidden-new  m-0 p-0 appearance-none bg-main-button text-main relative border-main-button border cursor-button font_small_xs_medium hover:border-main-button-hover w-full z-0 col-start-1 col-end-13 mx-auto mb-15 h-[3.125rem] max-w-md overflow-hidden lg:col-start-5 lg:col-end-9"
              type="button"
            >
              <div
                aria-valuemax={0}
                aria-valuemin={0}
                aria-valuenow={0}
                className="loading-button relative z-10 flex h-full items-center justify-center"
                style={{
                  background: 'linear-gradient(to right, var(--color-base-black) NaN%, var(--color-base-white) 0%)',
                }}
                id="load-more-product-style"
              >
                <span className="bg-clip-text text-main-inverted mix-blend-difference">
                  LOAD MORE PRODUCTS <span id="productsLoaded"> (0/0)</span>
                </span>
              </div>
            </button>
          </div>
        </div>
        <form name="ctgrForm" action="#" method="post">
          <input type="hidden" name="sect_id" id="sect_id" defaultValue={265041} />{' '}
          <input type="hidden" name="dispLcatCd" id="dispLcatCd" />{' '}
          <input type="hidden" name="dispMcatCd" id="dispMcatCd" />{' '}
          <input type="hidden" name="dispScatCd" id="dispScatCd" />{' '}
          <input type="hidden" name="dispDcatCd" id="dispDcatCd" />{' '}
          <input type="hidden" name="pageNum" id="pageNum" defaultValue={1} />{' '}
          <input type="hidden" name="viewCnt" id="viewCnt" defaultValue={0} />{' '}
          <input type="hidden" name="totalCnt" id="totalCnt" defaultValue={0} />
          <input type="hidden" name="isContinue" id="isContinue" defaultValue="" />
          <input type="hidden" name="scrollTop" id="scrollTop" defaultValue={0} />
          <input type="hidden" name="scrollPage" id="scrollPage" defaultValue={0} />
          <input type="hidden" name="sizeList" id="sizeList" /> <input type="hidden" name="colorList" id="colorList" />{' '}
          <input type="hidden" name="styles" id="styles" /> <input type="hidden" name="materials" id="materials" />
          {/* price bar 관련 input 추가 (안재철) */}
          {/* <input type="hidden" name="prices" id="prices"> */}
          <input type="hidden" name="frSellPrc" id="frSellPrc" />{' '}
          <input type="hidden" name="toSellPrc" id="toSellPrc" />{' '}
          <input type="hidden" name="searchSort" id="searchSort" defaultValue="disp_prty" />{' '}
          <input type="hidden" name="pageSize" id="pageSize" defaultValue={12} />{' '}
          <input type="hidden" name="preview" id="preview" defaultValue="false" />{' '}
          <input type="hidden" name="rDate" id="rDate" defaultValue="" />
          <input type="hidden" name="termSeq" id="termSeq" defaultValue="" />{' '}
          <input type="hidden" name="searchQuery" id="searchQuery" defaultValue="" />{' '}
          <input type="hidden" name="pageName" id="pageName" defaultValue="categoryPage" />{' '}
          <input type="hidden" name="pageLoding" id="pageLoding" defaultValue="N" />{' '}
          <input type="hidden" name="isViewFilter" id="isViewFilter" defaultValue="" />{' '}
          <input type="hidden" name="defaultSearchSort" id="defaultSearchSort" defaultValue="disp_prty" />{' '}
          <input type="hidden" name="qckShpgUseYn" id="qckShpgUseYn" defaultValue="" />{' '}
          <input type="hidden" name="clrChipExpsYn" id="clrChipExpsYn" defaultValue="" />{' '}
          <input type="hidden" name="isFourColumn" id="isFourColumn" defaultValue="N" />
          <input
            type="hidden"
            name="baseSearchSortGbcd"
            id="baseSearchSortGbcd"
            // defaultValue={08}
          />
        </form>
        <div className="o-spacing" />
        <div className="grid grid-cols-12 " style={{ width: '100%' }}>
          <div
            className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
            style={{
              overflow: 'hidden',
              maxHeight: 'calc(-50px + 100vh)',
              height: 'calc(-50px + 100vh)',
            }}
          >
            <a className="pointer-events-auto" href="https://www.cos.com/ko-kr/women/tops.html">
              <img
                alt=""
                className="hidden-new lg:block h-full w-full object-cover object-top"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2650420020250224102550.jpg"
              />
              <img
                alt=""
                className="lg:hidden h-full w-full object-cover"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2650420020250224102550.jpg"
              />
            </a>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: '50%',
                transform: 'translateX(50%)',
                zIndex: 1,
              }}
              className=" flex-col self-center items-center text-balance text-block  theme-block-dark w-full pointer-events-none"
            >
              <div className="flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
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
                href="https://www.cos.com/ko-kr/women/tops.html"
              >
                탑
              </a>
            </div>
          </div>
          <div
            className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
            style={{
              overflow: 'hidden',
              maxHeight: 'calc(-50px + 100vh)',
              height: 'calc(-50px + 100vh)',
            }}
          >
            <a className="pointer-events-auto" href="https://www.cos.com/ko-kr/women/new-accessories.html">
              <img
                alt=""
                className="hidden-new lg:block h-full w-full object-cover object-top"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2650421020250220084950.jpg"
              />
              <img
                alt=""
                className="lg:hidden h-full w-full object-cover"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2650421020250220084950.jpg"
              />
            </a>
            <div
              style={{
                position: 'absolute',
                right: '50%',
                bottom: '5rem',
                transform: 'translateX(50%)',
                zIndex: 1,
              }}
              className="theme-block-dark w-full pointer-events-none "
            >
              <div className="text-block flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
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
                href="https://www.cos.com/ko-kr/women/new-accessories.html"
              >
                신상품 액세서리
              </a>
            </div>
          </div>
        </div>
        <a
          href="https://www.cos.com/ko-kr/women/new-arrivals.html"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            position: 'relative',
            textDecoration: 'none',
          }}
        >
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
              data-id="efbd56b9-d80c-4b2c-994b-2e8967811a6d"
              src="https://thd-play.livehyundai.com/video/efbd56b9-d80c-4b2c-994b-2e8967811a6d?noTitle&noControl&noLike&loop"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              title="SPRING SUMMER 2025"
            ></iframe>
            <div
              className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20"
              style={{
                color: '#fff',
                position: 'absolute',
                top: '85%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}
            >
              <h3 className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop  text-current">
                SPRING SUMMER <br />
                2025
              </h3>
              <p>신상품</p>
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
        <div className="mo" style={{ padding: '180% 0 0 0', position: 'relative' }}>
          <iframe
            data-id="2f6a5dfd-d91b-455d-a74e-c53653a94412"
            src="https://thd-play.livehyundai.com/video/2f6a5dfd-d91b-455d-a74e-c53653a94412?noTitle&noControl&noLike&loop"
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
            href="https://www.cos.com/ko-kr/women/new-arrivals.html"
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
            <h3 className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop text-current">
              SPRING SUMMER <br /> 2025
            </h3>
            <a href="https://www.cos.com/ko-kr/women/new-arrivals.html">
              <p>신상품</p>
            </a>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    .mo {\n        display: none;\n    }\n \n    .pc {\n        display: block;\n    }\n \n    @media (max-width: 1025px) {\n        .pc {\n            display: none;\n        }\n \n        .mo {\n            display: block;\n        }\n    }\n',
          }}
        />
        {/* 영상 재생 */}
        <div className="grid grid-cols-12 " style={{ width: '100%' }}>
          <div
            className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
            style={{
              overflow: 'hidden',
              maxHeight: 'calc(-50px + 100vh)',
              height: 'calc(-50px + 100vh)',
            }}
          >
            <a
              className="pointer-events-auto"
              href="https://www.cos.com/ko-kr/campaign/spring-summer-2025-womenswear/product.fluid-crepe-blazer-black.1279060001.html?slitmCd=40A2031673"
            >
              <img
                alt=""
                className="hidden-new lg:block h-full w-full object-cover object-top"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2650420020250224133824.jpg"
              />
              <img
                alt=""
                className="lg:hidden h-full w-full object-cover"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2650420020250224133824.jpg"
              />
            </a>
            <div
              style={{
                position: 'absolute',
                right: '50%',
                bottom: '5rem',
                transform: 'translateX(50%)',
                zIndex: 1,
              }}
              className="theme-block-dark w-full pointer-events-none "
            >
              <div className="text-block flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
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
                href="https://www.cos.com/ko-kr/campaign/spring-summer-2025-womenswear/product.fluid-crepe-blazer-black.1279060001.html?slitmCd=40A2031673"
              >
                플루이드 크레이프 블레이저
              </a>
            </div>
          </div>
          <div
            className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
            style={{
              overflow: 'hidden',
              maxHeight: 'calc(-50px + 100vh)',
              height: 'calc(-50px + 100vh)',
            }}
          >
            <a
              className="pointer-events-auto"
              href="https://www.cos.com/ko-kr/campaign/spring-summer-2025-womenswear/product.longline-linen-blazer-butter-yellow.1218232002.html?slitmCd=40A2048706"
            >
              <img
                alt=""
                className="hidden-new lg:block h-full w-full object-cover object-top"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2650421020250224133838.jpg"
              />
              <img
                alt=""
                className="lg:hidden h-full w-full object-cover"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2650421020250224133838.jpg"
              />
            </a>
            <div
              style={{
                position: 'absolute',
                right: '50%',
                bottom: '5rem',
                transform: 'translateX(50%)',
                zIndex: 1,
              }}
              className="theme-block-dark w-full pointer-events-none "
            >
              <div className="text-block flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
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
                href="https://www.cos.com/ko-kr/campaign/spring-summer-2025-womenswear/product.longline-linen-blazer-butter-yellow.1218232002.html?slitmCd=40A2048706"
              >
                레귤러 롱라인 리넨 블렌드 블레이저
              </a>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div className="grid grid-cols-12 " style={{ width: '100%' }}>
              <div
                className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
                style={{
                  overflow: 'hidden',
                  maxHeight: 'calc(-50px + 100vh)',
                  height: 'calc(-50px + 100vh)',
                }}
              >
                <a className="pointer-events-auto" href="https://www.cos.com/ko-kr/women/jewellery.html">
                  <img
                    alt=""
                    className="hidden-new lg:block h-full w-full object-cover object-top"
                    data-nimg="fill"
                    src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2650420020250224133852.jpg"
                  />
                  <img
                    alt=""
                    className="lg:hidden h-full w-full object-cover"
                    data-nimg="fill"
                    src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2650420020250224133852.jpg"
                  />
                </a>
                <div
                  style={{
                    position: 'absolute',
                    right: '50%',
                    bottom: '5rem',
                    transform: 'translateX(50%)',
                    zIndex: 1,
                  }}
                  className="theme-block-dark w-full pointer-events-none "
                >
                  <div className="text-block flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
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
                    href="https://www.cos.com/ko-kr/women/jewellery.html"
                  >
                    주얼리
                  </a>
                </div>
              </div>
              <div
                className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
                style={{
                  overflow: 'hidden',
                  maxHeight: 'calc(-50px + 100vh)',
                  height: 'calc(-50px + 100vh)',
                }}
              >
                <a className="pointer-events-auto" href="https://www.cos.com/ko-kr/women/dresses.html">
                  <img
                    alt=""
                    className="hidden-new lg:block h-full w-full object-cover object-top"
                    data-nimg="fill"
                    src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2650421020250224133900.jpg"
                  />
                  <img
                    alt=""
                    className="lg:hidden h-full w-full object-cover"
                    data-nimg="fill"
                    src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2650421020250224133900.jpg"
                  />
                </a>
                <div
                  style={{
                    position: 'absolute',
                    right: '50%',
                    bottom: '5rem',
                    transform: 'translateX(50%)',
                    zIndex: 1,
                  }}
                  className="theme-block-dark w-full pointer-events-none "
                >
                  <div className="text-block flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
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
                    href="https://www.cos.com/ko-kr/women/dresses.html"
                  >
                    드레스
                  </a>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n\n@media (min-width: 1024px) {\n.relative.col-span-12.scroll-item {\n\noverflow: visible !important;\nmax-height: unset !important;\nheight: 100% !important;\n}\n\n}\nimg[src*="hnmmain2650420020250224133852"] {\n    object-position: right;\n}\n',
              }}
            />
          </div>
        </div>
        <a
          href="https://www.cos.com/ko-kr/runway/spring-summer-2025.html"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            position: 'relative',
            textDecoration: 'none',
            clear: 'both',
          }}
        >
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
              data-id="199fb0e2-bac6-400d-b375-242943bb2edd"
              src="https://thd-play.livehyundai.com/video/199fb0e2-bac6-400d-b375-242943bb2edd?noTitle&noControl&noLike&loop"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              title="SPRING SUMMER 2025"
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
                style={{ fontSize: '4.625rem' }}
              >
                SPRING SUMMER 2025
                <br />
                RUNWAY
              </h3>
              <p style={{ fontSize: '1.8rem', fontWeight: 600, marginTop: '3rem' }}>
                APRIL 02, ATHENS
                <br />
                8PM KST
              </p>
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
        <div className="mo" style={{ padding: '180% 0 0 0', position: 'relative' }}>
          <iframe
            data-id="9b29e39a-afd7-45b2-b8f6-093f4d771362"
            src="https://thd-play.livehyundai.com/video/9b29e39a-afd7-45b2-b8f6-093f4d771362?noTitle&noControl&noLike&loop"
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
            href="https://www.cos.com/ko-kr/runway/spring-summer-2025.html"
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
            <h3 className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop text-current">
              SPRING SUMMER
              <br />
              2025 RUNWAY
            </h3>
            <p style={{ fontSize: '1rem', marginTop: '1.5rem', fontWeight: 600 }}>
              APRIL 02, ATHENS
              <br />
              8PM KST
            </p>
          </div>
        </div>
        <div className="lg:pt-20 pt-15 grid grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 pt-30">
          <button
            id="next-category-product-list"
            className="m-0 p-0 appearance-none bg-main-button text-main relative border-main-button border cursor-button font_small_xs_medium hover:border-main-button-hover w-full z-0 col-start-1 col-end-13 mx-auto mb-15 h-[3.125rem] max-w-md overflow-hidden lg:col-start-5 lg:col-end-9"
            type="button"
            // onclick="window.location.href = 'https://www.cos.com/ko-kr/campaign/spring-summer-2025-menswear.html';"
          >
            <div
              aria-valuemax={48}
              aria-valuemin={0}
              aria-valuenow={48}
              className="loading-button relative z-10 flex h-full items-center justify-center"
              style={{}}
              id="next-category-product-style"
            >
              <a style={{ lineHeight: '1.5em', fontWeight: 500 }} className="bg-clip-text mix-blend-difference">
                남성 캠페인 보러가기
              </a>
            </div>
          </button>
        </div>
        {/* Menu bottom */}
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
          <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 bg-block text-block pb-10 lg:pb-15">
            <h2 className="font_small_m_semibold lg:font_small_m_semibold col-span-full col-start-1 mx-auto mb-10 max-w-full text-center text-black">
              EXPLORE MORE
            </h2>
            <div className="col-start-1 col-end-13 grid w-full lg:col-start-3 lg:col-end-11">
              <ul
                className="mb-9 flex h-full w-full flex-col justify-between font_small_s_semibold lg:mb-0 lg:grid lg:flex-row lg:gap-5 grid-cols-4"
                id="explore-list"
              >
                <li style={{}} className="pb-5 lg:text-center ">
                  <a href="https://www.cos.com/ko-kr/women/new-arrivals.html">신상품 </a>
                </li>
                <li style={{}} className="pb-5 lg:text-center ">
                  <a href="https://www.cos.com/ko-kr/women/new-accessories.html">액세서리 </a>
                </li>
                <li style={{}} className="pb-5 lg:text-center ">
                  <a href="https://www.cos.com/ko-kr/women/tops.html">탑 </a>
                </li>
                <li style={{}} className="pb-5 lg:text-center ">
                  <a href="https://www.cos.com/ko-kr/women/coats-jackets.html">코트 &amp; 재킷</a>
                </li>
              </ul>
            </div>
            <button
              className="lg:text-center text-justify font_small_l_regular col-span-full col-start-1 mt-10 max-w-full  text-black border-0 hover:font_small_s_semibold hidden-new"
              id="btn-load-explore-more"
              // onclick="onClickLoadMore()"
            >
              더보기 +4
            </button>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n#category-list {\n  padding: 0;\n}\n\n#category-list+div {\npadding: 0;\n}\n\n\n.o-spacing:nth-child(3) {\nheight: 25px !important;\n\n}\n.o-spacing:nth-child(2) {\nheight: 0 !important;\n}\n\n@media (max-width: 1023px) {\n.o-spacing:nth-child(3) {\nheight: 0px !important;\n\n}\n.o-spacing:nth-child(2) {\nheight: 0 !important;\n}\n.o-spacing:nth-child(3)+.o-text-block {\npadding-bottom: 0;}\n}\n\n\n    .o-text-block {\n        padding:20px !important;\n    }\n\n\n.pt-30{padding-top: 3.75rem !important;}\n\n',
          }}
        />
      </div>
    </FreeHtml>
  );
}
