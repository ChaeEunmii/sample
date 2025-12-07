import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paris - COS KR',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    @container root (max-width: 767px) {\n      .onlypc {\n        display: none !important;\n      }\n      .onlymo {\n        display: block !important;\n      }\n    }\n    @container root (min-width: 768px) {\n      .onlypc {\n        display: block !important;\n      }\n      .onlymo {\n        display: none !important;\n      }\n    }\n    .building-header h1.a-heading-1.fixed-size.q-peta {\n      font-size: 20px !important;\n      color: #444444;\n      line-height: 26px !important;\n      font-family: 'Gill Sans MT Pro Medium', 'Nanum Barun Gothic';\n      letter-spacing: 0.002em;\n      word-break: break-all;\n    }\n    .building-header p.a-paragraph.fixed-size.q-body-copy-1 {\n      font-size: 20px !important;\n      color: #444444;\n      line-height: 26px !important;\n      font-family: 'Gill Sans MT Pro Medium', 'Nanum Barun Gothic';\n      letter-spacing: 0.002em;\n      word-break: break-all;\n    }\n  ",
          }}
        />
        <div className="parsys genericpagepar">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            {/* blogtext-*/}
            <div className="contain building-header">
              <div className="u-cols-sm-12-12 u-cols-md-11-12 u-cols-lg-22-24 u-full-width u-row u-center-col">
                <div className="m-teaser blog-teaser">
                  <h1 className="a-heading-1 fixed-size q-peta" style={{ color: '#444444' }}>
                    COS Buildings
                    <br />
                    Rue Des Rosiers, Paris
                  </h1>
                  <p className="a-paragraph fixed-size q-body-copy-1" style={{ color: '' }}>
                    파리 4구 중심인 마레 지구의 자갈길과 푸른 안마당 가까이에 자리한 이 건물은 1856년에 완공되었습니다.
                    이로부터 7년 뒤 이곳은 130년 동안 터키식 전통 목욕탕으로 사용되었으며, 2009년에 마침내 COS가 자리를
                    잡았습니다.
                  </p>
                  <br />
                  <p>&nbsp;</p>
                </div>
              </div>
            </div>
            {/* // blogtext-*/}
            {/* textlog */}
            {/* //textlog */}
            {/* ohero */}
            {/* //ohero */}
          </div>
          {/* imagehero-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="contain">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div style={{ cursor: 'default' }} className="o-hero">
                  <div style={{ backgroundColor: 'FFFFFF' }} className="bcgr-color">
                    <picture
                      data-component="APicture"
                      className="a-picture"
                      data-component-id="379e7a42-019a-4c25-adff-2fbf163af1c6"
                    >
                      <source
                        media="(min-width:768px)"
                        srcSet="https://image.thehyundai.com/hdcos/images/hdcos/building/4/1/1.jpg"
                      />
                      <source media="(min-width:1px)" />
                      <img
                        className="a-image initial loading"
                        src="https://image.thehyundai.com/hdcos/images/hdcos/building/4/1/1.jpg"
                        alt=""
                        data-was-processed="true"
                      />
                    </picture>
                    <div className="m-teaser">
                      <div className="a-label js-a-label q-body-copy-1" style={{ color: '#ffffff' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* // imagehero-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            {/* blogtext-*/}
            {/* // blogtext-*/}
            {/* textlog */}
            <div className="contain">
              <span className="richTextSpan"> </span>
              <div className="o-blog-text is-richtext">
                <div className="a-paragraph a-page-paragraph q-body-copy-1">
                  건물 외벽에는 사우나와 수영장에 대한 안내 문구가 새겨진 석조물이 지금까지도 남아 있으며, 그 위에는
                  당시 유행하던 모티프였던 사자 머리가 조각되어 있습니다. 일 층에는 ‘생폴 목욕탕(Hammam
                  Saint-Paul)’이라고 쓰인 채색 간판이 본연의 아름다운 색 그대로 잘 보존되어 있습니다.
                </div>
              </div>
            </div>
            {/* //textlog */}
            {/* ohero */}
            {/* //ohero */}
          </div>
          {/* Square-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
            <div className="o-square">
              <div className="cell">
                <a
                  href="#"
                  style={{
                    color: 'inherit',
                    textDecoration: 'inherit',
                    display: 'inherit',
                  }}
                >
                  <picture
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="17fbc72d-2cd9-42f2-be1c-6d80bf155512"
                  >
                    <img
                      className="a-image"
                      src="https://image.thehyundai.com/hdcos/images/hdcos/building/4/2/1.jpg"
                      alt="Pic alt 1"
                    />
                  </picture>
                </a>
                <div className="text-content">
                  <div className="a-paragraph is-richtext" style={{ color: '#444444' }}>
                    <a href="" style={{ textDecoration: 'none' }}>
                      <span className="underline" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="cell">
                <a
                  href="#"
                  style={{
                    color: 'inherit',
                    textDecoration: 'inherit',
                    display: 'inherit',
                  }}
                >
                  <picture
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="17fbc72d-2cd9-42f2-be1c-6d80bf155512"
                  >
                    <img
                      className="a-image"
                      src="https://image.thehyundai.com/hdcos/images/hdcos/building/4/2/2.jpg"
                      alt="Pic alt 1"
                    />
                  </picture>
                </a>
                <div className="text-content">
                  <div className="a-paragraph is-richtext" style={{ color: '#444444' }}>
                    <a href="" style={{ textDecoration: 'none' }}>
                      <span className="underline" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* // Square-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            {/* blogtext-*/}
            {/* // blogtext-*/}
            {/* textlog */}
            <div className="contain">
              <span className="richTextSpan"> </span>
              <div className="o-blog-text is-richtext">
                <div className="a-paragraph a-page-paragraph q-body-copy-1">
                  연한 핑크색 건물 외관과 대조적으로, 내부는 차분한 톤의 모던한 분위기를 자아내는 채광 좋은 평온하고
                  간결한 공간입니다.
                </div>
              </div>
            </div>
            {/* //textlog */}
            {/* ohero */}
            {/* //ohero */}
          </div>
          {/* imagehero-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="contain">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
                <div style={{ cursor: 'default' }} className="o-hero">
                  <div style={{ backgroundColor: 'FFFFFF' }} className="bcgr-color">
                    <picture
                      data-component="APicture"
                      className="a-picture"
                      data-component-id="379e7a42-019a-4c25-adff-2fbf163af1c6"
                    >
                      <source
                        media="(min-width:768px)"
                        srcSet="https://image.thehyundai.com/hdcos/images/hdcos/building/4/3/1.jpg"
                      />
                      <source media="(min-width:1px)" />
                      <img
                        className="a-image"
                        src="https://image.thehyundai.com/hdcos/images/hdcos/building/4/3/1.jpg"
                        alt=""
                      />
                    </picture>
                    <div className="m-teaser">
                      <div className="a-label js-a-label q-body-copy-1" style={{ color: '#ffffff' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* // imagehero-*/}
          {/* threecolumns-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
            {/* o-grid-controller */}
            <div className="o-grid-controller is-three-cols">
              <div className="content">
                <div className="scrollable-content">
                  <div className="column">
                    <div className="m-free-tile" style={{ cursor: 'default' }}>
                      <picture
                        data-component="APicture"
                        className="a-picture"
                        style={{ cursor: 'pointer' }}
                        data-component-id="7612d5c1-5335-4af2-a9bd-582d2c2365a7"
                      >
                        <img
                          className="a-image"
                          src=" https://image.thehyundai.com/hdcos/images/hdcos/building/4/4/1.jpg"
                        />
                      </picture>
                      <div className="cta-wrapper noComma">
                        <a target="_self" className="a-link cta-link unsmart-underline" href="">
                          <span className="unsmart-underline-underline" style={{ background: 'rgb(68, 68, 68)' }} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*// o-grid-controller */}
          </div>
          {/* // threecolumns-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            {/* blogtext-*/}
            {/* // blogtext-*/}
            {/* textlog */}
            <div className="contain">
              <span className="richTextSpan"> </span>
              <div className="o-blog-text is-richtext">
                <div className="a-paragraph a-page-paragraph q-body-copy-1">
                  <div style={{ textAlign: 'center' }}>
                    <br />
                    매장 주소:
                    <br />
                    <br />4 Rue des rosiers <br />
                    75004 Paris <br />
                    France
                    <br />
                    <br />
                    COS 온라인{' '}
                    <a href="/locator">
                      <span style={{ textDecoration: 'underline' }}>매장 찾기</span>
                    </a>
                    에서 가까운 매장을 찾아보세요
                  </div>
                </div>
              </div>
            </div>
            {/* //textlog */}
            {/* ohero */}
            {/* //ohero */}
          </div>
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="o-social-share">
              <h2 className="a-heading-2 share-media-title">share</h2>
              <a
                href="javascript:;"
                className="a-link share-facebook"
                data-share="facebook"
                data-url="https://www.cos.com/ko-kr/features/places/paris.html"
              >
                <span className="a-icon-social-facebook" />
              </a>
              <a
                href="javascript:;"
                className="a-link share-pinterest"
                data-share="pinterest"
                data-url="https://www.cos.com/ko-kr/features/places/paris.html"
              >
                <span className="a-icon-social-pinterest" />
              </a>
              <a
                href="javascript:;"
                className="a-link share-twitter"
                data-share="twitter"
                data-url="https://www.cos.com/ko-kr/features/places/paris.html"
              >
                <span className="a-icon-social-twitter" />
              </a>
              <a
                href="#"
                className="a-link open-free-dialog"
                target="_self"
                data-template="pop-send-mail"
                data-classes="is-medium"
              >
                <span className="a-icon-email" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* free-dialog : 친구에게 메일 보내기 */}
      <div className="free-dialog is-medium">
        <div className="free-overlay">
          <div className="free-dialog-content">
            <h2 className="free-pageTit">
              <span>친구에게 메일 보내기</span>
            </h2>
            <div className="free-pageCont" id="dialogShareByEmail">
              <form className="addr-wrap" name="addr" action="">
                <div className="input_group">
                  <label htmlFor="shareEmailTo">받는 사람 이메일 주소</label>
                  <input
                    id="shareEmailTo"
                    type="text"
                    className="form_control"
                    name=""
                    defaultValue=""
                    placeholder=""
                  />
                </div>
                <div id="shareEmailToError" className="form_lab lab_info" style={{ display: 'none' }}>
                  <span className="txt_error">이메일 주소를 입력해주세요.</span>
                </div>
                <div className="input_group">
                  <label htmlFor="shareEmailFrom">보내는 사람 이메일 주소</label>
                  <input
                    id="shareEmailFrom"
                    type="text"
                    className="form_control"
                    name=""
                    defaultValue=""
                    placeholder=""
                  />
                </div>
                <div id="shareEmailFromError" className="form_lab lab_info" style={{ display: 'none' }}>
                  <span className="txt_error">올바른 이메일 주소가 아닙니다.</span>
                </div>
                <div className="input_group">
                  <label htmlFor="shareEmailMsg">메시지(선택)</label>
                  <textarea className="idr-textarea" id="shareEmailMsg" defaultValue={''} />
                </div>
              </form>
              <a
                className="a-link"
                href="https://www.cos.com/ko-kr/customer-service/privacy-policy.html"
                target="_blank"
              >
                개인정보취급방침(새창으로 표시)
              </a>
              <ul className="button_list">
                <li>
                  <button className="btn second free-dialog-onClose" id="cancel-share-mail">
                    취소
                  </button>
                </li>
                <li>
                  <button className="btn" id="submit-share-mail">
                    전송
                  </button>
                </li>
              </ul>
            </div>
            <button type="button" className="free-dialog-close free-dialog-onClose">
              <span className="blind">닫기</span>
            </button>
          </div>
        </div>
      </div>
      {/* // free-dialog : 친구에게 메일 보내기 */}
    </FreeHtml>
  );
}
