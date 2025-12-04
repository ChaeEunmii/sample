import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ginza - COS KR',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    @container root (max-width: 767px) {\n      .onlypc {\n        display: none !important;\n      }\n      .onlymo {\n        display: block !important;\n      }\n    }\n    @container root (min-width: 768px) {\n      .onlypc {\n        display: block !important;\n      }\n      .onlymo {\n        display: none !important;\n      }\n    }\n    .building-header h1.a-heading-1.fixed-size.q-peta {\n      font-size: 20px !important;\n      color: #444444;\n      line-height: 26px !important;\n      font-family: 'Gill Sans MT Pro Medium', 'Nanum Barun Gothic';\n      letter-spacing: 0.002em;\n      word-break: break-all;\n    }\n    .building-header p.a-paragraph.fixed-size.q-alpha {\n      font-size: 20px !important;\n      color: #444444;\n      line-height: 26px !important;\n      font-family: 'Gill Sans MT Pro Medium', 'Nanum Barun Gothic';\n      letter-spacing: 0.002em;\n      word-break: break-all;\n    }\n  ",
          }}
        />
        <div className="parsys genericpagepar">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            {/* blogtext-*/}
            <div className="contain building-header">
              <div className="u-cols-sm-12-12 u-cols-md-11-12 u-cols-lg-22-24 u-full-width u-row u-center-col">
                <div className="m-teaser blog-teaser">
                  <h1 className="a-heading-1 fixed-size q-peta" style={{ color: '#444444' }}>
                    COS BUILDINGS
                    <br />
                    GINZA, TOKYO
                  </h1>
                  <p className="a-paragraph fixed-size q-alpha" style={{ color: '' }}>
                    도쿄의 번화한 긴자 지역에 자리한 COS 매장은 고전주의 건축 양식에서 영감을 받아 디자인한 아름다운
                    외관으로 유명합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* imagehero-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="contain">
              <div className="u-row u-full-width">
                <img
                  style={{ width: '80%' }}
                  className="a-content-image"
                  src="https://image.thehyundai.com/hdcos/images/hdcos/Things/2019/B1/1/1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* // imagehero-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            {/* blogtext-*/}
            <div className="contain">
              <div className="u-cols-sm-12-12 u-cols-md-11-12 u-cols-lg-22-24 u-full-width u-row u-center-col">
                <div className="m-teaser blog-teaser">
                  <p className="a-paragraph fixed-size q-body-copy-1" style={{ marginTop: 0, textAlign: 'center' }}>
                    아치형으로 완성한 창문은 현대적으로 재해석 한 고전 디자인의 특징을 보여주며, 건물의 정문은
                    ‘gateway’를 의미하는 문을 상징합니다.
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
                      src="https://image.thehyundai.com/hdcos/images/hdcos/Things/2019/B1/2/1.jpg"
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
                      src="https://image.thehyundai.com/hdcos/images/hdcos/Things/2019/B1/2/2.jpg"
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
            <div className="contain">
              <div className="u-cols-sm-12-12 u-cols-md-11-12 u-cols-lg-22-24 u-full-width u-row u-center-col">
                <div className="m-teaser blog-teaser">
                  <p className="a-paragraph fixed-size q-body-copy-1" style={{ marginTop: 0, textAlign: 'center' }}>
                    건물의 하단을 이루는 물결 모양의 강철 패널이 외벽에 촉감을 더하며, 이 외벽은 상단의 전통적인 흰색
                    타일을 배경으로 하여 매장의 외관을 더욱 매력적으로 만듭니다.
                  </p>
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
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width" style={{ marginTop: 50 }}>
            <div className="contain">
              <div className="u-row u-full-width">
                <img
                  style={{ width: '80%' }}
                  className="a-content-image"
                  src="https://image.thehyundai.com/hdcos/images/hdcos/Things/2019/B1/3/1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* // imagehero-*/}
          {/* imagehero-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className="contain">
              <div className="u-row u-full-width">
                <img
                  style={{ width: '33.33%' }}
                  className="a-content-image"
                  src="https://image.thehyundai.com/hdcos/images/hdcos/Things/2019/B1/4/1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* // imagehero-*/}
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            {/* blogtext-*/}
            {/* // blogtext-*/}
            {/* textlog */}
            <div className="contain">
              <span className="richTextSpan">
                <div className="o-blog-text is-richtext">
                  <div className="a-paragraph a-page-paragraph q-body-copy-1">
                    <div style={{ textAlign: 'center' }}>
                      <br />
                      매장 주소:
                      <br />
                      <br />
                      3-4-1 Ginza, Chou-Ku <br />
                      104-0061 Tokyo, Japan
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
              </span>
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
                data-url="https://www.cos.com/ko-kr/features/places/ginza.html"
              >
                <span className="a-icon-social-facebook" />
              </a>
              <a
                href="javascript:;"
                className="a-link share-pinterest"
                data-share="pinterest"
                data-url="https://www.cos.com/ko-kr/features/places/ginza.html"
              >
                <span className="a-icon-social-pinterest" />
              </a>
              <a
                href="javascript:;"
                className="a-link share-twitter"
                data-share="twitter"
                data-url="https://www.cos.com/ko-kr/features/places/ginza.html"
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
