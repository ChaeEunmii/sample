import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '장소 - COS KR',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <div
          className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width"
          style={{ marginBottom: 30 }}
        >
          <div className="contain">
            <div className="richTextSpan">
              <div className="o-blog-text is-richtext">
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    lineHeight: '19px',
                    fontWeight: 400,
                    letterSpacing: '0.04em',
                  }}
                  className="a-paragraph a-page-paragraph"
                >
                  HOME / FEATURES / 장소
                </p>
                <p
                  className="magazine-title"
                  style={{
                    letterSpacing: '0.8px',
                    textAlign: 'center',
                    fontSize: 60,
                    lineHeight: '64px',
                    paddingTop: 15,
                    paddingBottom: 25,
                  }}
                >
                  장소
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="relative" style={{ maxWidth: 'unset' }}>
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
              {/* o-grid-controller */}
              <div className="magazine-type o-grid-controller u-clearfix is-stacked-on-mobile is-four-cols">
                <div className="u-clearfix" />
                <div className="content" style={{ overflow: 'hidden' }}>
                  <div className="scrollable-content magazine-2021" style={{ padding: 0 }}>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="/free/about/features/places/florence"
                          style={{ cursor: 'pointer' }}
                          data-component-id="4508983a-b249-4e00-b255-abe3329012ac"
                        >
                          <img
                            className="a-image loaded initial loading"
                            src="https://image.thehyundai.com/cos/hyundai/2025/1/15/750x1000 플로렌스.jpg"
                            data-was-processed="true"
                          />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            COS BUILDINGS | PALAZZO DUDLEY, FLORENCE
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            피렌체의 번화한 교차로 한 쪽 코너에는 팔라쪼 안에 자리한 COS 매장이 있습니다.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="/free/about/features/places/florence"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="/free/about/features/places/ginza"
                          style={{ cursor: 'pointer' }}
                          data-component-id="92b075fb-81bc-4293-a011-695f952a835b"
                        >
                          <img
                            className="a-image loaded initial loading"
                            src="https://image.thehyundai.com/cos/hyundai/2025/1/15/750x1000 도쿄.jpg"
                            data-was-processed="true"
                          />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            COS BUILDINGS | GINZA, TOKYO
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            도쿄의 번화한 긴자 지역에 자리한 COS 매장은 고전주의 건축 양식에서 영감을 받아 디자인 한
                            아치 구조물과 곡선형 창문으로 이루어진 아름다운 외관을 자랑합니다.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="/free/about/features/places/ginza"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="/free/about/features/places/london"
                          style={{ cursor: 'pointer' }}
                          data-component-id="c5a9cc88-3720-4e82-90a9-25405568ebf0"
                        >
                          <img
                            className="a-image loaded initial loading"
                            src="https://image.thehyundai.com/cos/hyundai/2025/1/15/750x1000 런던.jpg"
                            data-was-processed="true"
                          />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            COS BUILDINGS | COAL DROPS YARD, LONDON
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            런던 킹스 크로스 매장은 COS 컬렉션과 예술이 공존하는 공간입니다.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="/free/about/features/places/london"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="/free/about/features/places/Istanbul"
                          style={{ cursor: 'pointer' }}
                          data-component-id="b7ce30f0-7cc6-4448-b202-626aa467a966"
                        >
                          <img
                            className="a-image loaded initial loading"
                            src="https://image.thehyundai.com/cos/hyundai/2025/1/15/750x1000 리옹.jpg"
                            data-was-processed="true"
                          />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            COS BUILDINGS | GRAND HÔTEL-DIEU, LYON
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            리옹의 론강둑 위에 지어진 옛 병원 건물에는 800년 전까지 거슬러 올라가는 이야기가 숨겨져
                            있습니다. COS 매장 공간이 약국과 실험실이었다니 놀랍지 않나요?
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="/free/about/features/places/Istanbul"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="/free/about/features/places/la"
                          style={{ cursor: 'pointer' }}
                          data-component-id="ca6feaca-6c12-43fc-b0f7-7948d040b70d"
                        >
                          <img
                            className="a-image loaded initial loading"
                            src="https://image.thehyundai.com/cos/hyundai/2025/1/15/750x1000 LA.jpg"
                            data-was-processed="true"
                          />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            COS BUILDINGS | OLYMPIC THEATRE, LOS ANGELES
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            LA 다운타운 길가에 꽤 웅장하게 자리하고 있는 올림픽 시어터(Olympic theatre)는 전성기에 작품
                            600여 편의 막을 올리곤 했습니다.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="/free/about/features/places/la"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="/free/about/features/places/paris"
                          style={{ cursor: 'pointer' }}
                          data-component-id="fdfb7969-c5ae-41d7-92d1-5dc2a3ee6263"
                        >
                          <img
                            className="a-image loaded initial loading"
                            src="https://image.thehyundai.com/cos/hyundai/2025/1/15/750x1000 파리.jpg"
                            data-was-processed="true"
                          />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            COS BUILDINGS | RUE DES ROSIERS, PARIS
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            파리 4구 중심인 마레 지구의 자갈길과 푸른 안마당 가까이에 자리한 이 건물은 1856년에
                            완공되었습니다. 이로부터 7년 뒤 이곳은 130년 동안 터키식 전통 목욕탕으로 사용되었으며,
                            2009년에 마침내 COS가 자리를 잡았습니다.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="/free/about/features/places/paris"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="/free/about/features/places/sydney"
                          style={{ cursor: 'pointer' }}
                          data-component-id="93fbc5df-1c68-474c-8ea2-2b7c1325646c"
                        >
                          <img
                            className="a-image loaded initial loading"
                            src="https://image.thehyundai.com/cos/hyundai/2025/1/15/750x1000 시드니.jpg"
                            data-was-processed="true"
                          />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            COS BUILDINGS | MARTIN PLACE, SYDNEY
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            5 마틴 플레이스(5 Martin Place)는 오스트레일리아 연방은행의 첫 보금자리였습니다. 1920년대에
                            건물 모형의 어린이용 저금통이 만들어지면서 이 건물은 ‘저금통 건물’로 알려졌습니다.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="/free/about/features/places/sydney"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="/free/about/features/places/cheongdam"
                          style={{ cursor: 'pointer' }}
                          data-component-id="0db7cbf3-148f-40af-8710-6d38b9be2b17"
                        >
                          <img
                            className="a-image loaded initial loading"
                            src="https://image.thehyundai.com/cos/hyundai/2025/1/15/750x1000 청담.jpg"
                            data-was-processed="true"
                          />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            COS BUILDINGS | CHEONGDAM, SEOUL
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            서울 강남의 대로에 자리한 COS 매장은 혼잡한 청담동의 번화한 도심에서 차분한 순간을
                            제공합니다.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="/free/about/features/places/cheongdam"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="/free/about/features/places/stockholm"
                          style={{ cursor: 'pointer' }}
                          data-component-id="84df01fa-28f4-4d6e-9bcc-32576a8759be"
                        >
                          <img
                            className="a-image loaded"
                            src="https://image.thehyundai.com/cos/hyundai/2022/11/24/750X1000-STOCKHOLM.jpg"
                          />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            자원순환성으로 이어지는 스토어 경험
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            자원순환성을 바탕으로 모던한 감각의 COS 컬렉션과 어울리는 공간을 만들었습니다.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="/free/about/features/places/stockholm"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="  https://www.cos.com/ko-kr/features/places/store-locator-Tallinn.html"
                          style={{ cursor: 'pointer' }}
                          data-component-id="a274dfcf-b075-4be5-a542-5229d6f5f70f"
                        >
                          <img className="a-image loaded" src="https://image.thehyundai.com/cos_cdn/magazine/3/6.jpg" />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            에스토니아 탈린에 오픈한 COS 매장
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            과거 제빵공장이었던 공간이 어떻게 에스토니아 최초 COS 매장으로 탈바꿈했는지에 대해
                            들어보세요.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="  https://www.cos.com/ko-kr/features/places/store-locator-Tallinn.html"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="  https://www.cos.com/ko-kr/features/places/street-views-athens-chris-kontos-ss21.html"
                          style={{ cursor: 'pointer' }}
                          data-component-id="beb88ba1-8841-4f96-bb7f-f501c93201cf"
                        >
                          <img className="a-image loaded" src="https://image.thehyundai.com/cos_cdn/magazine/3/5.jpg" />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            아테네에 대한 에디터 크리스 콘토스의 이야기
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            케네디 매거진의 창립자 크리스 콘토스와 함께 그리스 아테네를 여행해보세요.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="  https://www.cos.com/ko-kr/features/places/street-views-athens-chris-kontos-ss21.html"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="  https://www.cos.com/ko-kr/features/places/street-views-los-angeles-life-coach-ryan-willms-aw20.html"
                          style={{ cursor: 'pointer' }}
                          data-component-id="7ceb7d96-8308-43ee-a81e-b06204b54a11"
                        >
                          <img className="a-image loaded" src="https://image.thehyundai.com/cos_cdn/magazine/3/4.jpg" />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            라이언 윔스와 함께하는 로스앤젤레스 여행
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            몸과 마음의 건강, 그리고 로스앤젤레스에 관한 이야기를 들어보세요.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="  https://www.cos.com/ko-kr/features/places/street-views-los-angeles-life-coach-ryan-willms-aw20.html"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="  https://www.cos.com/ko-kr/features/places/cos-buildings-zurich-suwon-new-york-city-aw20.html"
                          style={{ cursor: 'pointer' }}
                          data-component-id="7e0bb554-3dcc-4a86-b728-515aeea687ee"
                        >
                          <img className="a-image loaded" src="https://image.thehyundai.com/cos_cdn/magazine/3/3.jpg" />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            취리히에서 뉴욕까지
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            COS 매장 속 숨은 이야기를 만나보세요.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="  https://www.cos.com/ko-kr/features/places/cos-buildings-zurich-suwon-new-york-city-aw20.html"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="  https://www.cos.com/ko-kr/features/places/antwerp-belgium-city-culture-insiders-guide.html"
                          style={{ cursor: 'pointer' }}
                          data-component-id="ecc7e491-a4af-439c-92e5-0002d3823034"
                        >
                          <img className="a-image loaded" src="https://image.thehyundai.com/cos_cdn/magazine/3/2.jpg" />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            문화의 중심지, 벨기에 앤트워프
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            앤트워프 가이드북으로 도시를 여행해보세요.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="  https://www.cos.com/ko-kr/features/places/antwerp-belgium-city-culture-insiders-guide.html"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="m-free-tile" style={{ cursor: 'default' }}>
                        <a
                          data-component="APicture"
                          className="a-picture"
                          href="   https://www.cos.com/ko-kr/features/places/street-views-auckland-photographer-blake-dunlop-aw20.html"
                          style={{ cursor: 'pointer' }}
                          data-component-id="07d75b28-124f-44e7-803c-e5c187ac1155"
                        >
                          <img className="a-image loaded" src="https://image.thehyundai.com/cos_cdn/magazine/3/1.jpg" />
                        </a>
                        <div className="headline-preamble-wrapper">
                          <h2 className="a-heading-2" style={{ cursor: 'default' }}>
                            스트리트 뷰 : 오클랜드
                          </h2>
                          <p className="a-label js-a-label" style={{ cursor: 'default' }}>
                            뉴질랜드 사진작가 블레이크 던롭(Blake Dunlop)과 함께 오클랜드 여행을 떠나보세요.
                          </p>
                        </div>
                        <div className="cta-wrapper noComma">
                          <a
                            target="_self"
                            className="a-link cta-link unsmart-underline"
                            href="   https://www.cos.com/ko-kr/features/places/street-views-auckland-photographer-blake-dunlop-aw20.html"
                          >
                            더 보기
                            <span className="unsmart-underline-underline" style={{ background: 'rgb(27, 27, 27)' }}>
                              더 보기{' '}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*// o-grid-controller */}
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n        .magazine-2021 {\n          display: flex !important;\n          flex-wrap: wrap;\n        }\n        .m-free-tile .headline-preamble-wrapper .a-heading-2 {\n          font-size: 24px;\n          line-height: 28px;\n          text-transform: none;\n          letter-spacing: 0.04em;\n        }\n        .m-free-tile .headline-preamble-wrapper p {\n          font-size: 14px;\n          line-height: 18px;\n        }\n        @container root (min-width: 787px) {\n          .magazine-2021 .column {\n            margin-bottom: 40px;\n          }\n        }\n\n        @media all and (-ms-high-contrast: none) {\n          .magazine-2021 .column {\n            margin-bottom: 40px;\n            flex: none;\n          }\n        }\n      ',
              }}
            />
          </div>
        </div>
        <div className="o-spacing" />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
          <hr className="a-keyline" />
        </div>
        <div className="o-spacing" />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div id="cqcanvas">
            <div className="chips">
              <p>EXPLORE MORE</p>
              <div className="scrollable-content" style={{ whiteSpace: 'normal', height: 'auto' }}>
                <a href="https://www.cos.com/ko-kr/women.html">여성</a>
                <a href="https://www.cos.com/ko-kr/men.html">남성</a>
                <a href="/free/about/sustainability">지속가능성</a>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    .o-text-block.u-align-center {\n      width: 60%;\n      margin-bottom: 0;\n      padding-bottom: 0;\n    }\n    .preamble-section .a-paragraph {\n      font-size: 50px;\n      line-height: 1.25;\n      font-weight: 700;\n    }\n    .h2-text {\n      margin: 0 auto;\n      width: 70%;\n      margin-bottom: 10px;\n    }\n    .h2-text h3 {\n      margin: 0 auto;\n      width: 40%;\n      margin-bottom: 30px;\n      text-align: center;\n    }\n    h2 {\n      font-size: 50px;\n      font-weight: 700;\n      line-heigh: 1.25;\n    }\n    h3 {\n      font-size: 13px;\n      font-weight: 400;\n    }\n    .text-2cols {\n      display: flex;\n      margin: 0 auto;\n      width: 50%;\n      gap: 20px;\n    }\n    .text-2cols p {\n      width: 50%;\n    }\n    .text-2cols.mo-2cols .cols-right {\n      text-align: right;\n    }\n    .chips {\n      display: block;\n      width: 100%;\n      margin: 50px auto 50px;\n      font-weight: 600;\n    }\n    .chips p {\n      font-size: 1rem;\n      line-height: 34px;\n      letter-spacing: 0.02em;\n      color: #1b1b1b;\n      text-align: center;\n      width: 100%;\n      margin: 0 auto 20px auto;\n    }\n    .chips a {\n      display: inline-block;\n      text-transform: uppercase;\n      text-decoration: none;\n      letter-spacing: 0.0825em;\n      cursor: pointer;\n      text-align: center;\n      padding: 10px 12px 6px;\n      margin: 4px 4px 8px 0;\n      color: #1b1b1b;\n      font-size: 0.813rem;\n      line-height: 145%;\n    }\n    /*.chips a:hover {background-color: #1b1b1b; color: #ffffff;}*/\n    .chips .scrollable-content {\n      position: relative;\n      padding: 0px 10px;\n      overflow-x: auto;\n      -webkit-overflow-scrolling: touch;\n      white-space: nowrap;\n      text-align: center;\n      display: flex;\n      justify-content: center;\n      gap: 10%;\n    }\n    .text-2cols i {\n      font-size: 13px;\n      font-style: normal;\n    }\n    .a-image {\n      cursor: pointer;\n    }\n    a {\n      text-decoration: underline;\n    }\n\n    @container root (min-width: 1024px) {\n      .lg\\:pb-30 {\n        padding-bottom: 1.5rem;\n      }\n    }\n\n    @container root (max-width: 760px) {\n      h2 {\n        font-size: 40px;\n        line-height: 1.25;\n      }\n      .h2-text h3 {\n        margin: 0;\n        width: 90%;\n        margin-bottom: 10px;\n        text-align: left;\n      }\n      .h2-text {\n        width: 100%;\n        margin: 0 20px;\n      }\n      .text-2cols.mo-2cols {\n        flex-direction: row;\n      }\n      .text-2cols.mo-2cols .cols-right {\n        width: 10%;\n      }\n      .o-text-block.u-align-center {\n        width: 100%;\n        padding: 0 10px;\n      }\n      .text-2cols {\n        width: 100%;\n        flex-direction: column;\n        padding: 0 20px;\n      }\n      .text-2cols p {\n        width: 100%;\n      }\n      .text {\n        width: 100%;\n      }\n      .container-523574.flex.flex-col.w-full.lg\\:pb-30.pb-20.gap-20.lg\\:gap-30.manual-cpnt {\n        padding-bottom: 20px;\n      }\n      .chips .scrollable-content {\n        flex-direction: column;\n      }\n      .chips a {\n        text-align: left;\n      }\n      .pb-20 {\n        padding-bottom: 0rem;\n      }\n    }\n  ',
          }}
        />
      </div>
    </FreeHtml>
  );
}
