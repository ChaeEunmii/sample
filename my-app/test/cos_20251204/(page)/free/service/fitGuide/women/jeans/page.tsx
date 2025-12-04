import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';
import { FourColumnNew } from '@views/main/components';
import { ProdCardItem } from '@views/product/components/ProdCard';
import { ProductsNew } from '@views/product/shop/ShopData';

export const metadata: Metadata = {
  title: 'Women jeans fit guide - COS KR',
};

export default function Page() {
  return (
    <>
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
                        <h1 className="a-heading-1 q-giga">진 핏 가이드</h1>
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
                          <a className="a-button  unsmart-underline" href="#Straight">
                            스트레이트
                          </a>
                          <a className="a-button  unsmart-underline" href="#Wide">
                            와이드
                          </a>
                          <a className="a-button  unsmart-underline" href="#Barrel">
                            배럴
                          </a>
                          {/*<a class="a-button  unsmart-underline" href="#Tapered">테이퍼드</a>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\na.a-button.unsmart-underline {\n    display: inline-block;\n    width: 240px;\n    line-height: 45px;\n    font-size: 16px;\n    color: #1b1b1b;\n    background: #fff; \n  }\n\na.a-button.unsmart-underline:hover {\n  \nfont-weight:700;\n\n  }\n\n  .a-link.has-underline,\n  .is-richtext a.has-underline > span {\n    color: #000;\n  }\n',
                }}
              />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n.m-teaser.mobile-align-top.mobile-align-left.tablet-align-top.tablet-align-center.desktop-align-top.desktop-align-center.text-align-center .m-double-button {display:flex; justify-content: center; gap: 40px;}\n',
                }}
              />
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div className="contain">
                  <div className="richTextSpan">
                    <div className=" text-2cols noPadding">
                      <p />
                      <p>
                        뛰어난 장인 정신이 돋보이는 COS 데님은 오가닉과 리사이클 코튼으로 제작되었으며, 우수한 퀄리티와
                        모던한 디자인이 조화를 이룹니다. 데님 가이드에서 트렌디한 핏부터 실험적인 배럴과 와이드 레그
                        셰이프로 밸런스를 맞춘 클래식한 스트레이트, 테이퍼드 스타일까지 만나보세요.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cta-section pb-4 lg:pb-0">
            <div className="m-double-button" style={{ textAlign: 'center' }}>
              <a className="fitguide_btn" href=" https://www.cos.com/ko-kr/women/jeans.html">
                진 쇼핑하기
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
            className="container-603027 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt"
            style={{ paddingTop: 36 }}
          >
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-603027 ">
              {/* o-grid-controller */}
              <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
                <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-4 lg:col-end-9 lg:ml-[10%] ">
                  <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                    <picture
                      style={{ marginBottom: 6 }}
                      data-component="APicture"
                      className="a-picture"
                      data-component-id="1f22ef6a-39ca-4995-89d9-b5ddf81a8178"
                    >
                      <img
                        loading="lazy"
                        className="a-image initial loaded"
                        data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2854000020250610144341.jpg"
                        src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2854000020250610144341.jpg"
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
              <div id="Straight">
                <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                  <div className="contain">
                    <div className="richTextSpan">
                      <div className="h2-text">
                        <h3> 스트레이트 </h3>
                      </div>
                      <div className=" text-2cols">
                        <p />
                        <p>
                          - 완벽해진 시그니처 컷<br />
                          <br />
                          - 간결하고 클래식한 실루엣
                          <br />
                          <br />- 깔끔하게 맞는 스트레이트 핏
                        </p>
                      </div>
                      <div className=" text-2cols">
                        <p />
                        <p>
                          스트레이트 핏은 여성 컬렉션에서 가장 타임리스한 실루엣입니다. 클래식하면서도 활용도가 높아,
                          다리 라인을 따라 깔끔하게 떨어지며 편안한 착용감을 선사합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n.richTextSpan .pull-quote1 {font-size:16pt; text-align:center;line-height: 1.35em;letter-spacing: 0.04em; padding:20px 0;}\n.o-grid-controller.u-clearfix.is-three-cols {margin-bottom:0;}\n.richTextSpan .pull-quote1 {padding:50px 0;}\n@media (min-width: 1025px) {\n    .o-blog-text {margin-top:0;}\n}\n',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="container-603022 flex flex-col gap-20 lg:gap-30 w-full lg:pb-30 pb-20 manual-cpnt">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row four-column-row load-more-603022 ">
              {/* o-grid-controller */}
              <div className="grid grid-cols-12 gap-x-8 md:gap-x-4 col-span-12 lg:gap-y-30 gap-y-10 pt-0 ">
                <div
                  style={{ marginBottom: '-2px !important' }}
                  className="column relative col-span-6 w-full h-full lg:col-span-2  lg:col-start-3 lg:col-end-5 "
                >
                  {/* 2021.03.23 브랜드사 요청 PDP 제외. 대기열 필요시 다시 적용 */}
                  <a
                    style={{ cursor: 'pointer' }}
                    // onclick="return startWebGateFromLink(228, this, event)"
                    href="javascript:void(0);"
                    data-tourl="/ko-kr/product.facade-turn-up-straight-leg-jeans-ecru.1224871004.html?slitmCd=40A2059254"
                    target="_self"
                    className="a-link no-styling"
                  >
                    <div
                      className="o-product"
                      id="fourColumn"
                      data-index={1}
                      data-id={1224871004}
                      data-name="FACADE TURN-UP STRAIGHT-LEG JEANS"
                      data-category="/fitguide/women/jeans-fit-guide"
                      data-color="ECRU"
                      data-sellprc={175000}
                      data-csmprc={0}
                      data-list-name="Women jeans fit guide"
                      // onclick="productData(this,'product')"
                    >
                      <div className="image-holder">
                        <img
                          className="a-image product-image"
                          loading="lazy"
                          src="https://image.thehyundai.com/static/5/2/9/05/A2/hnm40A2059254_4_720.jpg"
                          alt="COS image 1 of 에크루 in FACADE 턴업 스트레이트 레그 진"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_400.jpg';"
                        />
                        <div className="btn_wish_cos btn_wish_plp absolute top-4 right-4 hidden-new">
                          <span
                            data-value="40A2059254"
                            data-slitmcd="40A2059254"
                            className="cta_wish 40A2059254 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              loading="lazy"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <div className="btn_wish_cos btn_wish_plp absolute !bottom-4 right-4 lg:hidden-new">
                          <span
                            data-value="40A2059254"
                            data-slitmcd="40A2059254"
                            className="cta_wish 40A2059254 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <img
                          className="a-image default-image"
                          style={{ display: 'none' }}
                          id="40A2059254"
                          src="https://image.thehyundai.com/static/5/2/9/05/A2/hnm40A2059254_4_720.jpg"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_720.jpg';"
                        />
                        <button
                          // onclick="productData(this,'quick')"
                          className="btn-quickbuy a-button is-quickbuy open-lightbox no-states absolute right-3 top-12 !h-7 !w-7 p-0 opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                          data-template="o-quick-buy"
                          data-nopadding="true"
                          data-classes="is-large is-flexible"
                          data-index={1}
                          data-id={1224871004}
                          data-name="FACADE TURN-UP STRAIGHT-LEG JEANS"
                          data-category="/fitguide/women/jeans-fit-guide"
                          data-color="ECRU"
                          data-sellprc={175000}
                          data-csmprc={0}
                          data-list-name="Women jeans fit guide"
                          data-slitmcd="40A2059254"
                          style={{
                            left: 'unset',
                            borderRadius: '50%',
                            padding: 0,
                            top: 54,
                            zIndex: 6,
                          }}
                        >
                          <svg
                            className="inline cart-svg"
                            id="product-cart"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.27265 3.60406H8.72735C8.89042 3.60406 9.00984 3.75766 8.96964 3.9157L7.72928 8.79156H2.27072L1.03036 3.9157C0.990161 3.75766 1.10958 3.60406 1.27265 3.60406Z"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                            <path
                              d="M6.875 3.22906C6.875 2.19353 6.03553 1.35406 5 1.35406C3.96447 1.35406 3.125 2.19353 3.125 3.22906"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="description !py-3 !mt-0">
                        <div className="product-variants">
                          <label className="a-label js-a-label">Colours (5)</label>
                        </div>
                        <div className="mb-1 flex flex-row items-start gap-x-5 justify-between">
                          <label
                            className="a-label js-a-label !mt-0 font_small_xs_regular truncate"
                            style={{ cursor: 'pointer' }}
                          >
                            FACADE 턴업 스트레이트 레그 진
                          </label>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="m-product-price !mt-0 !h-full">
                            <label
                              className="a-label js-a-label price font_small_xs_regular"
                              style={{ cursor: 'pointer' }}
                            >
                              175,000
                            </label>
                          </div>
                        </div>
                        <div className="marker-label temp-marker absolute !left-0 !top-0 flex items-center"></div>
                        <label className="a-label js-a-label product-brand">COS</label>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  style={{ marginBottom: '-2px !important' }}
                  className="column relative col-span-6 w-full h-full lg:col-span-2   "
                >
                  {/* 2021.03.23 브랜드사 요청 PDP 제외. 대기열 필요시 다시 적용 */}
                  <a
                    style={{ cursor: 'pointer' }}
                    // onclick="return startWebGateFromLink(228, this, event)"
                    href="javascript:void(0);"
                    data-tourl="/ko-kr/women/denim-edit/product.facade-turn-up-straight-leg-jeans-raw-indigo.1224871005.html?slitmCd=40A2034277"
                    target="_self"
                    className="a-link no-styling"
                  >
                    <div
                      className="o-product"
                      id="fourColumn"
                      data-index={2}
                      data-id={1224871005}
                      data-name="FACADE TURN-UP STRAIGHT-LEG JEANS"
                      data-category="/fitguide/women/jeans-fit-guide"
                      data-color="RAW INDIGO"
                      data-sellprc={175000}
                      data-csmprc={175000}
                      data-list-name="Women jeans fit guide"
                      // onclick="productData(this,'product')"
                    >
                      <div className="image-holder">
                        <img
                          className="a-image product-image"
                          loading="lazy"
                          src="https://image.thehyundai.com/static/7/2/4/03/A2/hnm40A2034277_1_720.jpg"
                          alt="COS image 2 of 로 인디고 in FACADE 턴업 스트레이트 레그 진"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_400.jpg';"
                        />
                        <div className="btn_wish_cos btn_wish_plp absolute top-4 right-4 hidden-new">
                          <span
                            data-value="40A2034277"
                            data-slitmcd="40A2034277"
                            className="cta_wish 40A2034277 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              loading="lazy"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <div className="btn_wish_cos btn_wish_plp absolute !bottom-4 right-4 lg:hidden-new">
                          <span
                            data-value="40A2034277"
                            data-slitmcd="40A2034277"
                            className="cta_wish 40A2034277 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <img
                          className="a-image default-image"
                          style={{ display: 'none' }}
                          id="40A2034277"
                          src="https://image.thehyundai.com/static/7/2/4/03/A2/hnm40A2034277_1_720.jpg"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_720.jpg';"
                        />
                        <button
                          // onclick="productData(this,'quick')"
                          className="btn-quickbuy a-button is-quickbuy open-lightbox no-states absolute right-3 top-12 !h-7 !w-7 p-0 opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                          data-template="o-quick-buy"
                          data-nopadding="true"
                          data-classes="is-large is-flexible"
                          data-index={2}
                          data-id={1224871005}
                          data-name="FACADE TURN-UP STRAIGHT-LEG JEANS"
                          data-category="/fitguide/women/jeans-fit-guide"
                          data-color="RAW INDIGO"
                          data-sellprc={175000}
                          data-csmprc={175000}
                          data-list-name="Women jeans fit guide"
                          data-slitmcd="40A2034277"
                          style={{
                            left: 'unset',
                            borderRadius: '50%',
                            padding: 0,
                            top: 54,
                            zIndex: 6,
                          }}
                        >
                          <svg
                            className="inline cart-svg"
                            id="product-cart"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.27265 3.60406H8.72735C8.89042 3.60406 9.00984 3.75766 8.96964 3.9157L7.72928 8.79156H2.27072L1.03036 3.9157C0.990161 3.75766 1.10958 3.60406 1.27265 3.60406Z"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                            <path
                              d="M6.875 3.22906C6.875 2.19353 6.03553 1.35406 5 1.35406C3.96447 1.35406 3.125 2.19353 3.125 3.22906"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="description !py-3 !mt-0">
                        <div className="product-variants">
                          <label className="a-label js-a-label">Colours (5)</label>
                        </div>
                        <div className="mb-1 flex flex-row items-start gap-x-5 justify-between">
                          <label
                            className="a-label js-a-label !mt-0 font_small_xs_regular truncate"
                            style={{ cursor: 'pointer' }}
                          >
                            FACADE 턴업 스트레이트 레그 진
                          </label>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="m-product-price !mt-0 !h-full">
                            <label
                              className="a-label js-a-label price font_small_xs_regular"
                              style={{ cursor: 'pointer' }}
                            >
                              175,000
                            </label>
                          </div>
                        </div>
                        <label className="a-label js-a-label product-brand">COS</label>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  style={{ marginBottom: '-2px !important' }}
                  className="column relative col-span-6 w-full h-full lg:col-span-2   "
                >
                  {/* 2021.03.23 브랜드사 요청 PDP 제외. 대기열 필요시 다시 적용 */}
                  <a
                    style={{ cursor: 'pointer' }}
                    // onclick="return startWebGateFromLink(228, this, event)"
                    href="javascript:void(0);"
                    data-tourl="/ko-kr/women/denim-edit/product.column-straight-leg-jeans-washed-black.1161887003.html?slitmCd=40A1720009"
                    target="_self"
                    className="a-link no-styling"
                  >
                    <div
                      className="o-product"
                      id="fourColumn"
                      data-index={3}
                      data-id={1161887003}
                      data-name="COLUMN STRAIGHT-LEG JEANS"
                      data-category="/fitguide/women/jeans-fit-guide"
                      data-color="WASHED BLACK"
                      data-sellprc={150000}
                      data-csmprc={0}
                      data-list-name="Women jeans fit guide"
                      // onclick="productData(this,'product')"
                    >
                      <div className="image-holder">
                        <img
                          className="a-image product-image"
                          loading="lazy"
                          src="https://image.thehyundai.com/static/0/0/0/72/A1/hnm40A1720009_6_720.jpg"
                          alt="COS image 3 of 워시드 블랙 in COLUMN 스트레이트 레그 진"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_400.jpg';"
                        />
                        <div className="btn_wish_cos btn_wish_plp absolute top-4 right-4 hidden-new">
                          <span
                            data-value="40A1720009"
                            data-slitmcd="40A1720009"
                            className="cta_wish 40A1720009 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              loading="lazy"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <div className="btn_wish_cos btn_wish_plp absolute !bottom-4 right-4 lg:hidden-new">
                          <span
                            data-value="40A1720009"
                            data-slitmcd="40A1720009"
                            className="cta_wish 40A1720009 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <img
                          className="a-image default-image"
                          style={{ display: 'none' }}
                          id="40A1720009"
                          src="https://image.thehyundai.com/static/0/0/0/72/A1/hnm40A1720009_6_720.jpg"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_720.jpg';"
                        />
                        <button
                          // onclick="productData(this,'quick')"
                          className="btn-quickbuy a-button is-quickbuy open-lightbox no-states absolute right-3 top-12 !h-7 !w-7 p-0 opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                          data-template="o-quick-buy"
                          data-nopadding="true"
                          data-classes="is-large is-flexible"
                          data-index={3}
                          data-id={1161887003}
                          data-name="COLUMN STRAIGHT-LEG JEANS"
                          data-category="/fitguide/women/jeans-fit-guide"
                          data-color="WASHED BLACK"
                          data-sellprc={150000}
                          data-csmprc={0}
                          data-list-name="Women jeans fit guide"
                          data-slitmcd="40A1720009"
                          style={{
                            left: 'unset',
                            borderRadius: '50%',
                            padding: 0,
                            top: 54,
                            zIndex: 6,
                          }}
                        >
                          <svg
                            className="inline cart-svg"
                            id="product-cart"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.27265 3.60406H8.72735C8.89042 3.60406 9.00984 3.75766 8.96964 3.9157L7.72928 8.79156H2.27072L1.03036 3.9157C0.990161 3.75766 1.10958 3.60406 1.27265 3.60406Z"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                            <path
                              d="M6.875 3.22906C6.875 2.19353 6.03553 1.35406 5 1.35406C3.96447 1.35406 3.125 2.19353 3.125 3.22906"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="description !py-3 !mt-0">
                        <div className="product-variants">
                          <label className="a-label js-a-label">Colours (7)</label>
                        </div>
                        <div className="mb-1 flex flex-row items-start gap-x-5 justify-between">
                          <label
                            className="a-label js-a-label !mt-0 font_small_xs_regular truncate"
                            style={{ cursor: 'pointer' }}
                          >
                            COLUMN 스트레이트 레그 진
                          </label>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="m-product-price !mt-0 !h-full">
                            <label
                              className="a-label js-a-label price font_small_xs_regular"
                              style={{ cursor: 'pointer' }}
                            >
                              150,000
                            </label>
                          </div>
                        </div>
                        <label className="a-label js-a-label product-brand">COS</label>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  style={{ marginBottom: '-2px !important' }}
                  className="column relative col-span-6 w-full h-full lg:col-span-2   "
                >
                  {/* 2021.03.23 브랜드사 요청 PDP 제외. 대기열 필요시 다시 적용 */}
                  <a
                    style={{ cursor: 'pointer' }}
                    // onclick="return startWebGateFromLink(228, this, event)"
                    href="javascript:void(0);"
                    data-tourl="/ko-kr/women/denim-edit/product.column-straight-leg-jeans-light-blue.1161887010.html?slitmCd=40A1954629"
                    target="_self"
                    className="a-link no-styling"
                  >
                    <div
                      className="o-product"
                      id="fourColumn"
                      data-index={4}
                      data-id={1161887010}
                      data-name="COLUMN STRAIGHT-LEG JEANS"
                      data-category="/fitguide/women/jeans-fit-guide"
                      data-color="LIGHT BLUE"
                      data-sellprc={150000}
                      data-csmprc={150000}
                      data-list-name="Women jeans fit guide"
                      // onclick="productData(this,'product')"
                    >
                      <div className="image-holder">
                        <img
                          className="a-image product-image"
                          loading="lazy"
                          src="https://image.thehyundai.com/static/2/6/4/95/A1/hnm40A1954629_1_720.jpg"
                          alt="COS image 4 of 라이트 블루 in COLUMN 스트레이트 레그 진"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_400.jpg';"
                        />
                        <div className="btn_wish_cos btn_wish_plp absolute top-4 right-4 hidden-new">
                          <span
                            data-value="40A1954629"
                            data-slitmcd="40A1954629"
                            className="cta_wish 40A1954629 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              loading="lazy"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <div className="btn_wish_cos btn_wish_plp absolute !bottom-4 right-4 lg:hidden-new">
                          <span
                            data-value="40A1954629"
                            data-slitmcd="40A1954629"
                            className="cta_wish 40A1954629 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <img
                          className="a-image default-image"
                          style={{ display: 'none' }}
                          id="40A1954629"
                          src="https://image.thehyundai.com/static/2/6/4/95/A1/hnm40A1954629_1_720.jpg"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_720.jpg';"
                        />
                        <button
                          // onclick="productData(this,'quick')"
                          className="btn-quickbuy a-button is-quickbuy open-lightbox no-states absolute right-3 top-12 !h-7 !w-7 p-0 opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                          data-template="o-quick-buy"
                          data-nopadding="true"
                          data-classes="is-large is-flexible"
                          data-index={4}
                          data-id={1161887010}
                          data-name="COLUMN STRAIGHT-LEG JEANS"
                          data-category="/fitguide/women/jeans-fit-guide"
                          data-color="LIGHT BLUE"
                          data-sellprc={150000}
                          data-csmprc={150000}
                          data-list-name="Women jeans fit guide"
                          data-slitmcd="40A1954629"
                          style={{
                            left: 'unset',
                            borderRadius: '50%',
                            padding: 0,
                            top: 54,
                            zIndex: 6,
                          }}
                        >
                          <svg
                            className="inline cart-svg"
                            id="product-cart"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.27265 3.60406H8.72735C8.89042 3.60406 9.00984 3.75766 8.96964 3.9157L7.72928 8.79156H2.27072L1.03036 3.9157C0.990161 3.75766 1.10958 3.60406 1.27265 3.60406Z"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                            <path
                              d="M6.875 3.22906C6.875 2.19353 6.03553 1.35406 5 1.35406C3.96447 1.35406 3.125 2.19353 3.125 3.22906"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="description !py-3 !mt-0">
                        <div className="product-variants">
                          <label className="a-label js-a-label">Colours (7)</label>
                        </div>
                        <div className="mb-1 flex flex-row items-start gap-x-5 justify-between">
                          <label
                            className="a-label js-a-label !mt-0 font_small_xs_regular truncate"
                            style={{ cursor: 'pointer' }}
                          >
                            COLUMN 스트레이트 레그 진
                          </label>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="m-product-price !mt-0 !h-full">
                            <label
                              className="a-label js-a-label price font_small_xs_regular"
                              style={{ cursor: 'pointer' }}
                            >
                              150,000
                            </label>
                          </div>
                        </div>
                        <label className="a-label js-a-label product-brand">COS</label>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/*// o-grid-controller */}
            </div>
          </div>
          <div className="cta-section pb-10 pt-7.5">
            <div className="m-double-button" style={{ textAlign: 'center' }}>
              <a className="fitguide_btn" href="https://www.cos.com/ko-kr/women/jeans/straight-leg-jeans.html">
                스트레이트 레그 진 쇼핑하기
              </a>{' '}
            </div>
          </div>
          <div className="container-602573 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-602573 ">
              {/* o-grid-controller */}
              <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
                <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                  <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                    <picture
                      style={{ marginBottom: 6 }}
                      data-component="APicture"
                      className="a-picture"
                      data-component-id="35ff2e0b-2baa-426c-a267-d687e9f6f3a6"
                    >
                      <img
                        loading="lazy"
                        className="a-image loaded"
                        data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2854000020250610144351.jpg"
                        src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2854000020250610144351.jpg"
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
              <div id="Wide">
                <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                  <div className="contain">
                    <div className="richTextSpan">
                      <div className="h2-text">
                        <h3> 와이드 </h3>
                      </div>
                      <div className=" text-2cols">
                        <p />
                        <p>
                          - 볼륨감 있는 와이드 핏<br />
                          <br />
                          - 편안한 착용감을 위한 여유로운 디자인
                          <br />
                          <br />- 길게 떨어지는 실루엣
                        </p>
                      </div>
                      <div className=" text-2cols">
                        <p />
                        <p>
                          자연스러운 실루엣의 와이드 레그 진은 다리 라인을 따라 여유롭게 떨어지며 실루엣을 더욱 길어
                          보이게 연출해 줍니다. 슈즈를 덮을 정도로 과감하게 디자인된 실루엣으로, 드레스 코드에 따라
                          힐이나 플랫 슈즈와 함께 다양하게 스타일링해 보세요.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n.richTextSpan .pull-quote1 {font-size:16pt; text-align:center;line-height: 1.35em;letter-spacing: 0.04em; padding:20px 0;}\n.o-grid-controller.u-clearfix.is-three-cols {margin-bottom:0;}\n.richTextSpan .pull-quote1 {padding:50px 0;}\n@media (min-width: 1025px) {\n    .o-blog-text {margin-top:0;}\n}\n',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="container-603169 flex flex-col gap-20 lg:gap-30 w-full lg:pb-30 pb-20 manual-cpnt">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row four-column-row load-more-603169 ">
              {/* o-grid-controller */}
              <div className="grid grid-cols-12 gap-x-8 md:gap-x-4 col-span-12 lg:gap-y-30 gap-y-10 pt-0 ">
                <div
                  style={{ marginBottom: '-2px !important' }}
                  className="column relative col-span-6 w-full h-full lg:col-span-2  lg:col-start-3 lg:col-end-5 "
                >
                  {/* 2021.03.23 브랜드사 요청 PDP 제외. 대기열 필요시 다시 적용 */}
                  <a
                    style={{ cursor: 'pointer' }}
                    // onclick="return startWebGateFromLink(228, this, event)"
                    href="javascript:void(0);"
                    data-tourl="/ko-kr/product.tide-wide-leg-jeans-dusty-blue.1137112012.html?slitmCd=40A1914146"
                    target="_self"
                    className="a-link no-styling"
                  >
                    <div
                      className="o-product"
                      id="fourColumn"
                      data-index={1}
                      data-id={1137112012}
                      data-name="TIDE WIDE-LEG JEANS"
                      data-category="/fitguide/women/jeans-fit-guide"
                      data-color="DUSTY BLUE"
                      data-sellprc={150000}
                      data-csmprc={0}
                      data-list-name="Women jeans fit guide"
                      // onclick="productData(this,'product')"
                    >
                      <div className="image-holder">
                        <img
                          className="a-image product-image loading"
                          loading="lazy"
                          src="https://image.thehyundai.com/static/4/1/4/91/A1/hnm40A1914146_18_720.jpg"
                          alt="COS image 1 of 더스티 블루 in TIDE 와이드 레그 진"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_400.jpg';"
                          data-was-processed="true"
                        />
                        <div className="btn_wish_cos btn_wish_plp absolute top-4 right-4 hidden-new">
                          <span
                            data-value="40A1914146"
                            data-slitmcd="40A1914146"
                            className="cta_wish 40A1914146 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              loading="lazy"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <div className="btn_wish_cos btn_wish_plp absolute !bottom-4 right-4 lg:hidden-new">
                          <span
                            data-value="40A1914146"
                            data-slitmcd="40A1914146"
                            className="cta_wish 40A1914146 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <img
                          className="a-image default-image"
                          style={{ display: 'none' }}
                          id="40A1914146"
                          src="https://image.thehyundai.com/static/4/1/4/91/A1/hnm40A1914146_18_720.jpg"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_720.jpg';"
                        />
                        <button
                          // onclick="productData(this,'quick')"
                          className="btn-quickbuy a-button is-quickbuy open-lightbox no-states absolute right-3 top-12 !h-7 !w-7 p-0 opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                          data-template="o-quick-buy"
                          data-nopadding="true"
                          data-classes="is-large is-flexible"
                          data-index={1}
                          data-id={1137112012}
                          data-name="TIDE WIDE-LEG JEANS"
                          data-category="/fitguide/women/jeans-fit-guide"
                          data-color="DUSTY BLUE"
                          data-sellprc={150000}
                          data-csmprc={0}
                          data-list-name="Women jeans fit guide"
                          data-slitmcd="40A1914146"
                          style={{
                            left: 'unset',
                            borderRadius: '50%',
                            padding: 0,
                            top: 54,
                            zIndex: 6,
                          }}
                        >
                          <svg
                            className="inline cart-svg"
                            id="product-cart"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.27265 3.60406H8.72735C8.89042 3.60406 9.00984 3.75766 8.96964 3.9157L7.72928 8.79156H2.27072L1.03036 3.9157C0.990161 3.75766 1.10958 3.60406 1.27265 3.60406Z"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                            <path
                              d="M6.875 3.22906C6.875 2.19353 6.03553 1.35406 5 1.35406C3.96447 1.35406 3.125 2.19353 3.125 3.22906"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="description !py-3 !mt-0">
                        <div className="product-variants">
                          <label className="a-label js-a-label">Colours (11)</label>
                        </div>
                        <div className="mb-1 flex flex-row items-start gap-x-5 justify-between">
                          <label
                            className="a-label js-a-label !mt-0 font_small_xs_regular truncate"
                            style={{ cursor: 'pointer' }}
                          >
                            TIDE 와이드 레그 진
                          </label>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="m-product-price !mt-0 !h-full">
                            <label
                              className="a-label js-a-label price font_small_xs_regular"
                              style={{ cursor: 'pointer' }}
                            >
                              150,000
                            </label>
                          </div>
                        </div>
                        <div className="marker-label temp-marker absolute !left-0 !top-0 flex items-center"></div>
                        <label className="a-label js-a-label product-brand">COS</label>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  style={{ marginBottom: '-2px !important' }}
                  className="column relative col-span-6 w-full h-full lg:col-span-2   "
                >
                  {/* 2021.03.23 브랜드사 요청 PDP 제외. 대기열 필요시 다시 적용 */}
                  <a
                    style={{ cursor: 'pointer' }}
                    // onclick="return startWebGateFromLink(228, this, event)"
                    href="javascript:void(0);"
                    data-tourl="/ko-kr/product.tide-wide-leg-jeans-grey.1137112016.html?slitmCd=40A2041609"
                    target="_self"
                    className="a-link no-styling"
                  >
                    <div
                      className="o-product"
                      id="fourColumn"
                      data-index={2}
                      data-id={1137112016}
                      data-name="TIDE WIDE-LEG JEANS"
                      data-category="/fitguide/women/jeans-fit-guide"
                      data-color="GREY"
                      data-sellprc={150000}
                      data-csmprc={0}
                      data-list-name="Women jeans fit guide"
                      // onclick="productData(this,'product')"
                    >
                      <div className="image-holder">
                        <img
                          className="a-image product-image loading"
                          loading="lazy"
                          src="https://image.thehyundai.com/static/0/6/1/04/A2/hnm40A2041609_1_720.jpg"
                          alt="COS image 2 of 그레이 in TIDE 와이드 레그 진"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_400.jpg';"
                          data-was-processed="true"
                        />
                        <div className="btn_wish_cos btn_wish_plp absolute top-4 right-4 hidden-new">
                          <span
                            data-value="40A2041609"
                            data-slitmcd="40A2041609"
                            className="cta_wish 40A2041609 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              loading="lazy"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <div className="btn_wish_cos btn_wish_plp absolute !bottom-4 right-4 lg:hidden-new">
                          <span
                            data-value="40A2041609"
                            data-slitmcd="40A2041609"
                            className="cta_wish 40A2041609 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <img
                          className="a-image default-image"
                          style={{ display: 'none' }}
                          id="40A2041609"
                          src="https://image.thehyundai.com/static/0/6/1/04/A2/hnm40A2041609_1_720.jpg"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_720.jpg';"
                        />
                        <button
                          // onclick="productData(this,'quick')"
                          className="btn-quickbuy a-button is-quickbuy open-lightbox no-states absolute right-3 top-12 !h-7 !w-7 p-0 opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                          data-template="o-quick-buy"
                          data-nopadding="true"
                          data-classes="is-large is-flexible"
                          data-index={2}
                          data-id={1137112016}
                          data-name="TIDE WIDE-LEG JEANS"
                          data-category="/fitguide/women/jeans-fit-guide"
                          data-color="GREY"
                          data-sellprc={150000}
                          data-csmprc={0}
                          data-list-name="Women jeans fit guide"
                          data-slitmcd="40A2041609"
                          style={{
                            left: 'unset',
                            borderRadius: '50%',
                            padding: 0,
                            top: 54,
                            zIndex: 6,
                          }}
                        >
                          <svg
                            className="inline cart-svg"
                            id="product-cart"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.27265 3.60406H8.72735C8.89042 3.60406 9.00984 3.75766 8.96964 3.9157L7.72928 8.79156H2.27072L1.03036 3.9157C0.990161 3.75766 1.10958 3.60406 1.27265 3.60406Z"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                            <path
                              d="M6.875 3.22906C6.875 2.19353 6.03553 1.35406 5 1.35406C3.96447 1.35406 3.125 2.19353 3.125 3.22906"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="description !py-3 !mt-0">
                        <div className="product-variants">
                          <label className="a-label js-a-label">Colours (11)</label>
                        </div>
                        <div className="mb-1 flex flex-row items-start gap-x-5 justify-between">
                          <label
                            className="a-label js-a-label !mt-0 font_small_xs_regular truncate"
                            style={{ cursor: 'pointer' }}
                          >
                            TIDE 와이드 레그 진
                          </label>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="m-product-price !mt-0 !h-full">
                            <label
                              className="a-label js-a-label price font_small_xs_regular"
                              style={{ cursor: 'pointer' }}
                            >
                              150,000
                            </label>
                          </div>
                        </div>
                        <div className="marker-label temp-marker absolute !left-0 !top-0 flex items-center"></div>
                        <label className="a-label js-a-label product-brand">COS</label>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  style={{ marginBottom: '-2px !important' }}
                  className="column relative col-span-6 w-full h-full lg:col-span-2   "
                >
                  {/* 2021.03.23 브랜드사 요청 PDP 제외. 대기열 필요시 다시 적용 */}
                  <a
                    style={{ cursor: 'pointer' }}
                    // onclick="return startWebGateFromLink(228, this, event)"
                    href="javascript:void(0);"
                    data-tourl="/ko-kr/women/denim-edit/product.volume-wide-leg-jeans-washed-black.1187052008.html?slitmCd=40A1930044"
                    target="_self"
                    className="a-link no-styling"
                  >
                    <div
                      className="o-product"
                      id="fourColumn"
                      data-index={3}
                      data-id={1187052008}
                      data-name="VOLUME WIDE-LEG JEANS"
                      data-category="/fitguide/women/jeans-fit-guide"
                      data-color="WASHED BLACK"
                      data-sellprc={175000}
                      data-csmprc={175000}
                      data-list-name="Women jeans fit guide"
                      // onclick="productData(this,'product')"
                    >
                      <div className="image-holder">
                        <img
                          className="a-image product-image loading"
                          loading="lazy"
                          src="https://image.thehyundai.com/static/4/0/0/93/A1/hnm40A1930044_9_720.jpg"
                          alt="COS image 3 of 워시드 블랙 in VOLUME 와이드 레그 진"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_400.jpg';"
                          data-was-processed="true"
                        />
                        <div className="btn_wish_cos btn_wish_plp absolute top-4 right-4 hidden-new">
                          <span
                            data-value="40A1930044"
                            data-slitmcd="40A1930044"
                            className="cta_wish 40A1930044 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              loading="lazy"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <div className="btn_wish_cos btn_wish_plp absolute !bottom-4 right-4 lg:hidden-new">
                          <span
                            data-value="40A1930044"
                            data-slitmcd="40A1930044"
                            className="cta_wish 40A1930044 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <img
                          className="a-image default-image"
                          style={{ display: 'none' }}
                          id="40A1930044"
                          src="https://image.thehyundai.com/static/4/0/0/93/A1/hnm40A1930044_9_720.jpg"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_720.jpg';"
                        />
                        <button
                          // onclick="productData(this,'quick')"
                          className="btn-quickbuy a-button is-quickbuy open-lightbox no-states absolute right-3 top-12 !h-7 !w-7 p-0 opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                          data-template="o-quick-buy"
                          data-nopadding="true"
                          data-classes="is-large is-flexible"
                          data-index={3}
                          data-id={1187052008}
                          data-name="VOLUME WIDE-LEG JEANS"
                          data-category="/fitguide/women/jeans-fit-guide"
                          data-color="WASHED BLACK"
                          data-sellprc={175000}
                          data-csmprc={175000}
                          data-list-name="Women jeans fit guide"
                          data-slitmcd="40A1930044"
                          style={{
                            left: 'unset',
                            borderRadius: '50%',
                            padding: 0,
                            top: 54,
                            zIndex: 6,
                          }}
                        >
                          <svg
                            className="inline cart-svg"
                            id="product-cart"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.27265 3.60406H8.72735C8.89042 3.60406 9.00984 3.75766 8.96964 3.9157L7.72928 8.79156H2.27072L1.03036 3.9157C0.990161 3.75766 1.10958 3.60406 1.27265 3.60406Z"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                            <path
                              d="M6.875 3.22906C6.875 2.19353 6.03553 1.35406 5 1.35406C3.96447 1.35406 3.125 2.19353 3.125 3.22906"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="description !py-3 !mt-0">
                        <div className="product-variants">
                          <label className="a-label js-a-label">Colours (6)</label>
                        </div>
                        <div className="mb-1 flex flex-row items-start gap-x-5 justify-between">
                          <label
                            className="a-label js-a-label !mt-0 font_small_xs_regular truncate"
                            style={{ cursor: 'pointer' }}
                          >
                            VOLUME 와이드 레그 진
                          </label>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="m-product-price !mt-0 !h-full">
                            <label
                              className="a-label js-a-label price font_small_xs_regular"
                              style={{ cursor: 'pointer' }}
                            >
                              175,000
                            </label>
                          </div>
                        </div>
                        <label className="a-label js-a-label product-brand">COS</label>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  style={{ marginBottom: '-2px !important' }}
                  className="column relative col-span-6 w-full h-full lg:col-span-2   "
                >
                  {/* 2021.03.23 브랜드사 요청 PDP 제외. 대기열 필요시 다시 적용 */}
                  <a
                    style={{ cursor: 'pointer' }}
                    // onclick="return startWebGateFromLink(228, this, event)"
                    href="javascript:void(0);"
                    data-tourl="/ko-kr/women/denim-edit/product.volume-wide-leg-jeans-dusty-blue.1187052007.html?slitmCd=40A1930944"
                    target="_self"
                    className="a-link no-styling"
                  >
                    <div
                      className="o-product"
                      id="fourColumn"
                      data-index={4}
                      data-id={1187052007}
                      data-name="VOLUME WIDE-LEG JEANS"
                      data-category="/fitguide/women/jeans-fit-guide"
                      data-color="DUSTY BLUE"
                      data-sellprc={175000}
                      data-csmprc={175000}
                      data-list-name="Women jeans fit guide"
                      // onclick="productData(this,'product')"
                    >
                      <div className="image-holder">
                        <img
                          className="a-image product-image loading"
                          loading="lazy"
                          src="https://image.thehyundai.com/static/4/9/0/93/A1/hnm40A1930944_6_720.jpg"
                          alt="COS image 4 of 더스티 블루 in VOLUME 와이드 레그 진"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_400.jpg';"
                          data-was-processed="true"
                        />
                        <div className="btn_wish_cos btn_wish_plp absolute top-4 right-4 hidden-new">
                          <span
                            data-value="40A1930944"
                            data-slitmcd="40A1930944"
                            className="cta_wish 40A1930944 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              loading="lazy"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <div className="btn_wish_cos btn_wish_plp absolute !bottom-4 right-4 lg:hidden-new">
                          <span
                            data-value="40A1930944"
                            data-slitmcd="40A1930944"
                            className="cta_wish 40A1930944 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <img
                          className="a-image default-image"
                          style={{ display: 'none' }}
                          id="40A1930944"
                          src="https://image.thehyundai.com/static/4/9/0/93/A1/hnm40A1930944_6_720.jpg"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_720.jpg';"
                        />
                        <button
                          // onclick="productData(this,'quick')"
                          className="btn-quickbuy a-button is-quickbuy open-lightbox no-states absolute right-3 top-12 !h-7 !w-7 p-0 opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                          data-template="o-quick-buy"
                          data-nopadding="true"
                          data-classes="is-large is-flexible"
                          data-index={4}
                          data-id={1187052007}
                          data-name="VOLUME WIDE-LEG JEANS"
                          data-category="/fitguide/women/jeans-fit-guide"
                          data-color="DUSTY BLUE"
                          data-sellprc={175000}
                          data-csmprc={175000}
                          data-list-name="Women jeans fit guide"
                          data-slitmcd="40A1930944"
                          style={{
                            left: 'unset',
                            borderRadius: '50%',
                            padding: 0,
                            top: 54,
                            zIndex: 6,
                          }}
                        >
                          <svg
                            className="inline cart-svg"
                            id="product-cart"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.27265 3.60406H8.72735C8.89042 3.60406 9.00984 3.75766 8.96964 3.9157L7.72928 8.79156H2.27072L1.03036 3.9157C0.990161 3.75766 1.10958 3.60406 1.27265 3.60406Z"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                            <path
                              d="M6.875 3.22906C6.875 2.19353 6.03553 1.35406 5 1.35406C3.96447 1.35406 3.125 2.19353 3.125 3.22906"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="description !py-3 !mt-0">
                        <div className="product-variants">
                          <label className="a-label js-a-label">Colours (6)</label>
                        </div>
                        <div className="mb-1 flex flex-row items-start gap-x-5 justify-between">
                          <label
                            className="a-label js-a-label !mt-0 font_small_xs_regular truncate"
                            style={{ cursor: 'pointer' }}
                          >
                            VOLUME 와이드 레그 진
                          </label>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="m-product-price !mt-0 !h-full">
                            <label
                              className="a-label js-a-label price font_small_xs_regular"
                              style={{ cursor: 'pointer' }}
                            >
                              175,000
                            </label>
                          </div>
                        </div>
                        <label className="a-label js-a-label product-brand">COS</label>
                      </div>
                    </div>
                  </a>
                </div>
                {/*
      
      
      

*/}
              </div>
              {/*// o-grid-controller */}
            </div>
          </div>
          <div className="cta-section pb-10 pt-7.5">
            <div className="m-double-button" style={{ textAlign: 'center' }}>
              <a className="fitguide_btn" href="https://www.cos.com/ko-kr/women/jeans/wide-leg-jeans.html">
                와이드 레그 진 쇼핑하기
              </a>{' '}
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html: '\n.o-text-block.u-align-center{margin:0 auto; padding:50px 0;}\n',
            }}
          />
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className=" relative" style={{ maxWidth: 'unset' }}>
              <div id="Barrel">
                <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                  <div className="contain">
                    <div className="richTextSpan">
                      <div className="h2-text">
                        <h3> 배럴 </h3>
                      </div>
                      <div className=" text-2cols">
                        <p />
                        <p>
                          - 과장된 곡선 디자인
                          <br />
                          <br />
                          - 구조적인 실루엣
                          <br />
                          <br />- 발목으로 갈수록 좁아지는 스타일
                        </p>
                      </div>
                      <div className=" text-2cols">
                        <p />
                        <p>
                          배럴 레그 진은 데님을 새롭게 재해석한 디자인으로, 컬렉션에서 가장 감각적인 핏이 돋보입니다.
                          부드럽게 곡선을 그리는 다리 라인은 형태를 유지하면서, 발목으로 갈수록 자연스럽게 좁아지는
                          실루엣이 특징입니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n    .richTextSpan .pull-quote1 {\n        font-size: 16pt;\n        text-align: center;\n        line-height: 1.35em;\n        letter-spacing: 0.04em;\n        padding: 20px 0;\n    }\n\n    .o-grid-controller.u-clearfix.is-three-cols {\n        margin-bottom: 0;\n    }\n\n    .richTextSpan .pull-quote1 {\n        padding: 50px 0;\n    }\n\n    @media (min-width: 1025px) {\n        .o-blog-text {\n            margin-top: 0;\n        }\n    }\n',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="container-602999 flex flex-col gap-20 lg:gap-30 w-full lg:pb-30 pb-20 manual-cpnt">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row four-column-row load-more-602999 ">
              {/* o-grid-controller */}
              <div className="grid grid-cols-12 gap-x-8 md:gap-x-4 col-span-12 lg:gap-y-30 gap-y-10 pt-0 ">
                <div
                  style={{ marginBottom: '-2px !important' }}
                  className="column relative col-span-6 w-full h-full lg:col-span-2  lg:col-start-3 lg:col-end-5 "
                >
                  {/* 2021.03.23 브랜드사 요청 PDP 제외. 대기열 필요시 다시 적용 */}
                  <a
                    style={{ cursor: 'pointer' }}
                    // onclick="return startWebGateFromLink(228, this, event)"
                    href="javascript:void(0);"
                    data-tourl="/ko-kr/women/denim-edit/product.bay-barrel-leg-jeans-black.1257004001.html?slitmCd=40A2052232"
                    target="_self"
                    className="a-link no-styling"
                  >
                    <div
                      className="o-product"
                      id="fourColumn"
                      data-index={1}
                      data-id={1257004001}
                      data-name="BAY BARREL-LEG JEANS"
                      data-category="/fitguide/women/jeans-fit-guide"
                      data-color="BLACK"
                      data-sellprc={150000}
                      data-csmprc={150000}
                      data-list-name="Women jeans fit guide"
                      // onclick="productData(this,'product')"
                    >
                      <div className="image-holder">
                        <img
                          className="a-image product-image loading"
                          loading="lazy"
                          src="https://image.thehyundai.com/static/3/2/2/05/A2/hnm40A2052232_1_720.jpg"
                          alt="COS image 1 of 블랙 in BAY 배럴 레그 진"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_400.jpg';"
                          data-was-processed="true"
                        />
                        <div className="btn_wish_cos btn_wish_plp absolute top-4 right-4 hidden-new">
                          <span
                            data-value="40A2052232"
                            data-slitmcd="40A2052232"
                            className="cta_wish 40A2052232 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              loading="lazy"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <div className="btn_wish_cos btn_wish_plp absolute !bottom-4 right-4 lg:hidden-new">
                          <span
                            data-value="40A2052232"
                            data-slitmcd="40A2052232"
                            className="cta_wish 40A2052232 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <img
                          className="a-image default-image"
                          style={{ display: 'none' }}
                          id="40A2052232"
                          src="https://image.thehyundai.com/static/3/2/2/05/A2/hnm40A2052232_1_720.jpg"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_720.jpg';"
                        />
                        <button
                          // onclick="productData(this,'quick')"
                          className="btn-quickbuy a-button is-quickbuy open-lightbox no-states absolute right-3 top-12 !h-7 !w-7 p-0 opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                          data-template="o-quick-buy"
                          data-nopadding="true"
                          data-classes="is-large is-flexible"
                          data-index={1}
                          data-id={1257004001}
                          data-name="BAY BARREL-LEG JEANS"
                          data-category="/fitguide/women/jeans-fit-guide"
                          data-color="BLACK"
                          data-sellprc={150000}
                          data-csmprc={150000}
                          data-list-name="Women jeans fit guide"
                          data-slitmcd="40A2052232"
                          style={{
                            left: 'unset',
                            borderRadius: '50%',
                            padding: 0,
                            top: 54,
                            zIndex: 6,
                          }}
                        >
                          <svg
                            className="inline cart-svg"
                            id="product-cart"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.27265 3.60406H8.72735C8.89042 3.60406 9.00984 3.75766 8.96964 3.9157L7.72928 8.79156H2.27072L1.03036 3.9157C0.990161 3.75766 1.10958 3.60406 1.27265 3.60406Z"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                            <path
                              d="M6.875 3.22906C6.875 2.19353 6.03553 1.35406 5 1.35406C3.96447 1.35406 3.125 2.19353 3.125 3.22906"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="description !py-3 !mt-0">
                        <div className="product-variants">
                          <label className="a-label js-a-label">Colours (5)</label>
                        </div>
                        <div className="mb-1 flex flex-row items-start gap-x-5 justify-between">
                          <label
                            className="a-label js-a-label !mt-0 font_small_xs_regular truncate"
                            style={{ cursor: 'pointer' }}
                          >
                            BAY 배럴 레그 진
                          </label>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="m-product-price !mt-0 !h-full">
                            <label
                              className="a-label js-a-label price font_small_xs_regular"
                              style={{ cursor: 'pointer' }}
                            >
                              150,000
                            </label>
                          </div>
                        </div>
                        <label className="a-label js-a-label product-brand">COS</label>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  style={{ marginBottom: '-2px !important' }}
                  className="column relative col-span-6 w-full h-full lg:col-span-2   "
                >
                  {/* 2021.03.23 브랜드사 요청 PDP 제외. 대기열 필요시 다시 적용 */}
                  <a
                    style={{ cursor: 'pointer' }}
                    // onclick="return startWebGateFromLink(228, this, event)"
                    href="javascript:void(0);"
                    data-tourl="/ko-kr/women/denim-edit/product.bay-barrel-leg-jeans-white.1257004004.html?slitmCd=40A2118152"
                    target="_self"
                    className="a-link no-styling"
                  >
                    <div
                      className="o-product"
                      id="fourColumn"
                      data-index={2}
                      data-id={1257004004}
                      data-name="BAY BARREL-LEG JEANS"
                      data-category="/fitguide/women/jeans-fit-guide"
                      data-color="WHITE"
                      data-sellprc={150000}
                      data-csmprc={150000}
                      data-list-name="Women jeans fit guide"
                      // onclick="productData(this,'product')"
                    >
                      <div className="image-holder">
                        <img
                          className="a-image product-image loading"
                          loading="lazy"
                          src="https://image.thehyundai.com/static/5/1/8/11/A2/hnm40A2118152_1_720.jpg"
                          alt="COS image 2 of 화이트 in BAY 배럴 레그 진"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_400.jpg';"
                          data-was-processed="true"
                        />
                        <div className="btn_wish_cos btn_wish_plp absolute top-4 right-4 hidden-new">
                          <span
                            data-value="40A2118152"
                            data-slitmcd="40A2118152"
                            className="cta_wish 40A2118152 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              loading="lazy"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <div className="btn_wish_cos btn_wish_plp absolute !bottom-4 right-4 lg:hidden-new">
                          <span
                            data-value="40A2118152"
                            data-slitmcd="40A2118152"
                            className="cta_wish 40A2118152 !min-h-7 !min-w-7"
                            data-template="wishlistFull-popup"
                            data-classes="js-scrollbar-unbind is-medium"
                          >
                            <div
                              id="unwished_pc"
                              className="cta_wish 40A0088562 m-0 p-0 appearance-none theme-icon-button-round-light text-icon-button-round bg-icon-button-round opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                              data-template="wishlistFull-popup"
                              data-classes="js-scrollbar-unbind is-medium"
                              style={{ display: 'flex' }}
                            >
                              <svg className="inline h-4 w-4 fill-current">
                                <path
                                  fillRule="evenodd"
                                  d="m8.25 5.48-.85-.85a2.325 2.325 0 0 0-3.287 3.286l4.136 4.136 4.136-4.135A2.324 2.324 0 1 0 9.098 4.63l-.848.848ZM3.266 8.765A3.524 3.524 0 1 1 8.25 3.782a3.524 3.524 0 0 1 4.984 4.984l-4.277 4.277a1 1 0 0 1-1.414 0L3.266 8.766Z"
                                ></path>
                              </svg>
                            </div>
                            <img
                              id="wished_pc"
                              style={{ display: 'none' }}
                              src="https://image.thehyundai.com/cos_cdn/images/cos/01/icon_iswished_cos.svg"
                              width="11.34px"
                              height="9.98px"
                            />
                          </span>
                        </div>
                        <img
                          className="a-image default-image"
                          style={{ display: 'none' }}
                          id="40A2118152"
                          src="https://image.thehyundai.com/static/5/1/8/11/A2/hnm40A2118152_1_720.jpg"
                          // onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_720.jpg';"
                        />
                        <button
                          // onclick="productData(this,'quick')"
                          className="btn-quickbuy a-button is-quickbuy open-lightbox no-states absolute right-3 top-12 !h-7 !w-7 p-0 opacity-80 cursor-button relative rounded-full after:absolute after:content-[''] flex items-center justify-center hover:bg-icon-button-round-hover hover:text-icon-button-round-hover hover:opacity-100 hover:cursor-button-hover w-7 h-7"
                          data-template="o-quick-buy"
                          data-nopadding="true"
                          data-classes="is-large is-flexible"
                          data-index={2}
                          data-id={1257004004}
                          data-name="BAY BARREL-LEG JEANS"
                          data-category="/fitguide/women/jeans-fit-guide"
                          data-color="WHITE"
                          data-sellprc={150000}
                          data-csmprc={150000}
                          data-list-name="Women jeans fit guide"
                          data-slitmcd="40A2118152"
                          style={{
                            left: 'unset',
                            borderRadius: '50%',
                            padding: 0,
                            top: 54,
                            zIndex: 6,
                          }}
                        >
                          <svg
                            className="inline cart-svg"
                            id="product-cart"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.27265 3.60406H8.72735C8.89042 3.60406 9.00984 3.75766 8.96964 3.9157L7.72928 8.79156H2.27072L1.03036 3.9157C0.990161 3.75766 1.10958 3.60406 1.27265 3.60406Z"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                            <path
                              d="M6.875 3.22906C6.875 2.19353 6.03553 1.35406 5 1.35406C3.96447 1.35406 3.125 2.19353 3.125 3.22906"
                              stroke="#080808"
                              strokeWidth="0.75"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="description !py-3 !mt-0">
                        <div className="product-variants">
                          <label className="a-label js-a-label">Colours (5)</label>
                        </div>
                        <div className="mb-1 flex flex-row items-start gap-x-5 justify-between">
                          <label
                            className="a-label js-a-label !mt-0 font_small_xs_regular truncate"
                            style={{ cursor: 'pointer' }}
                          >
                            BAY 배럴 레그 진
                          </label>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="m-product-price !mt-0 !h-full">
                            <label
                              className="a-label js-a-label price font_small_xs_regular"
                              style={{ cursor: 'pointer' }}
                            >
                              150,000
                            </label>
                          </div>
                        </div>
                        <label className="a-label js-a-label product-brand">COS</label>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*// o-grid-controller */}
        </div>
        <div className="cta-section pb-10 pt-7.5">
          <div className="m-double-button" style={{ textAlign: 'center' }}>
            <a className="fitguide_btn" href="https://www.cos.com/ko-kr/women/jeans.html">
              배럴 쇼핑하기
            </a>
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
              "\n    .o-text-block.u-align-center {\n        width: 60%;\n        margin-bottom: 0;\n        padding-bottom: 0;\n    }\n\n    .preamble-section .a-paragraph {\n        font-size: 50px;\n        line-height: 1.25;\n        font-weight: 700;\n    }\n\n    .h2-text {\n        margin: 0 auto;\n        width: 33%;\n        margin-bottom: 0px;\n    }\n\n    .h2-text h3 {\n        margin: 0 auto;\n        width: 40%;\n        margin-bottom: 0px;\n        text-align: center;\n    }\n\n    h2 {\n        font-size: 50px;\n        font-weight: 700;\n        line-heigh: 1.25;\n        font-size: 14px;\n    }\n\n    h3 {\n        font-size: 16px;\n        font-weight: 700;\n    }\n\n    .text-2cols {\n        display: flex;\n        margin: 0 auto;\n        width: 60%;\n        gap: 20px;\n        padding: 20px 0 60px 0\n    }\n\n    .text-2cols p {\n        width: 50%;\n    }\n\n    .text-2cols.mo-2cols .cols-right {\n        text-align: right;\n    }\n\n    .chips {\n        font-family: 'SuisseIntl', 'NotoSansKR', '돋움', dotum, sans-serif;\n        display: block;\n        width: 100%;\n        margin: 50px auto 50px;\n    }\n\n    .chips p {\n        font-size: 24px;\n        line-height: 34px;\n        letter-spacing: .02em;\n        color: #1b1b1b;\n        text-align: center;\n        width: 100%;\n        margin: 0 auto 20px auto;\n    }\n\n    .chips a {\n        display: inline-block;\n        text-transform: uppercase;\n        text-decoration: none;\n        letter-spacing: .0825em;\n        cursor: pointer;\n        text-align: center;\n        padding: 10px 12px 6px;\n        margin: 4px 4px 8px 0;\n        color: #1b1b1b;\n        font-size: 12px;\n        line-height: 17px;\n    }\n\n    /*.chips a:hover {background-color: #1b1b1b; color: #ffffff;}*/\n    .chips .scrollable-content {\n        position: relative;\n        padding: 0px 10px;\n        overflow-x: auto;\n        -webkit-overflow-scrolling: touch;\n        white-space: nowrap;\n        text-align: center;\n        display: flex;\n        justify-content: center;\n        gap: 10%;\n    }\n\n    .text-2cols i {\n        font-size: 13px;\n        font-style: normal;\n    }\n\n    .a-image {\n        cursor: pointer;\n    }\n\n    /*.headline-preamble-wrapper h2{    font-size: 50px;  margin-bottom: 18px;    position: absolute;    top: 50%;     left: 50%;  transform: translate(-50%); color:#fff}*/\n    .container-572651 {\n        padding-top: 0 !important\n    }\n\n    .container-573207 .headline-preamble-wrapper {\n        padding: 30px 50px\n    }\n\n    .container-573207 {\n        padding: 0 !important\n    }\n\n    @media (min-width:1024px) {\n        .lg\\:pb-30 {\n            padding-bottom: 1.5rem;\n        }\n    }\n\n    @media (max-width:760px) {\n        h2 {\n            font-size: 40px;\n            line-height: 1.25;\n        }\n\n        .h2-text h3 {\n            margin: 0;\n            width: 90%;\n            margin-bottom: 10px;\n            text-align: left;\n        }\n\n        .h2-text {\n            width: 100%;\n            margin: 0 20px;\n        }\n\n        .text-2cols.mo-2cols {\n            flex-direction: row;\n        }\n\n        .text-2cols.mo-2cols .cols-right {\n            width: 10%;\n        }\n\n        .o-text-block.u-align-center {\n            width: 100%;\n            padding: 0 10px;\n        }\n\n        .text-2cols {\n            width: 100%;\n            flex-direction: column;\n            padding: 0 20px 20px;\n        }\n\n        .text-2cols p {\n            width: 100%;\n        }\n\n        .text {\n            width: 100%;\n        }\n\n        .container-523574.flex.flex-col.w-full.lg\\:pb-30.pb-20.gap-20.lg\\:gap-30.manual-cpnt {\n            padding-bottom: 20px;\n        }\n\n        .chips .scrollable-content {\n            flex-direction: column;\n        }\n\n        .chips a {\n            text-align: left;\n        }\n\n        .pb-20 {\n            padding-bottom: 0rem;\n        }\n\n        .col-span-8 {\n            grid-column: span 12 / span 8;\n        }\n\n\n        /* 스타일 수정 */\n        .title_box {\n            margin: 0;\n        }\n\n        .fitguide_btn {\n            margin: 0;\n\n            box-sizing: border-box;\n            width: calc(100% - 60px);\n        }\n\n        .richTextSpan {\n            margin: 26px 0 12px;\n        }\n\n\n    }\n\n    @media (min-width: 761px) {\n        .richTextSpan {\n            margin-top: 36px;\n        }\n\n        .text-2cols {\n            padding: 30px 0;\n        }\n\n        .text-2cols:nth-child(n+3) {\n            padding-top: 0;\n\n        }\n\n        .text-2cols:last-child {\n            padding-bottom: 60px;\n        }\n\n        .text-2cols.noPadding {\n            padding-top: 0;\n        }\n\n        .title_box {\n            margin-bottom: 0;\n        }\n    }\n",
          }}
        />
      </FreeHtml>
      <FourColumnNew
        items={[
          { content: <ProdCardItem product={ProductsNew[0]} /> },
          { content: <ProdCardItem product={ProductsNew[2]} /> },
          { content: <ProdCardItem product={ProductsNew[0]} /> },
          { content: <ProdCardItem product={ProductsNew[2]} /> },
        ]}
      />
    </>
  );
}
