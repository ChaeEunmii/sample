import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cheongdam - COS KR',
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
                    COS Buildings
                    <br />
                    청담, 서울
                  </h1>
                  <p className="a-paragraph fixed-size q-alpha" style={{ color: '' }}>
                    서울 강남의 대로에 자리한 COS 매장은 혼잡한 청담동의 번화한 도심에서 차분한 순간을 제공합니다.
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
                        srcSet="https://image.thehyundai.com/hdcos/images/hdcos/building/1/1/1.jpg"
                      />
                      <source media="(min-width:1px)" />
                      <img
                        className="a-image initial loaded"
                        src="https://image.thehyundai.com/hdcos/images/hdcos/building/1/1/1.jpg"
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
                  본래의 외관을 완전히 벗겨내어 깔끔한 디자인이 드러나 있습니다. 경사진 형태의 심플한 지붕은 온전히 남아
                  전형적인 ‘집’ 형태처럼 보입니다.
                  <br />
                  <br />
                  깊은 창턱이 있는 정사각형의 창문은 눈에 띄는 검은 메탈 틀로 둘러싸여 미니멀한 외관을 강조합니다. 중국
                  하이난에서 채석한 화성암인 회색 톤의 현무암은 깔끔한 선으로 이루어진 정면을 덮고 있습니다.
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
                        srcSet="https://image.thehyundai.com/hdcos/images/hdcos/building/1/2/2.jpg"
                      />
                      <source media="(min-width:1px)" />
                      <img
                        className="a-image loading"
                        src="https://image.thehyundai.com/hdcos/images/hdcos/building/1/2/2.jpg"
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
                  내부는 간결한 연출에 초점을 두고 있습니다. 부드러운 곡선과 날카로운 선이 천장, 코너 주변, 계단에
                  나타납니다. 자연스러운 소재, 세련된 가구, 널찍하고 새하얀 공간이 평온한 인테리어를 완성합니다.
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
                      className="a-image loading"
                      src="https://image.thehyundai.com/hdcos/images/hdcos/building/1/3/1.jpg"
                      alt="Pic alt 1"
                      data-was-processed="true"
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
                      className="a-image loading"
                      src="https://image.thehyundai.com/hdcos/images/hdcos/building/1/3/2.jpg"
                      alt="Pic alt 1"
                      data-was-processed="true"
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
                          className="a-image loading"
                          src=" https://image.thehyundai.com/hdcos/images/hdcos/building/1/4/1.jpg"
                          data-was-processed="true"
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
                    <br />
                    418, Apgujeong-ro, <br />
                    Gangnam-gu <br />
                    06015 Seoul <br />
                    South Korea
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
                data-url="https://www.cos.com/ko-kr/features/places/cheongdam.html"
              >
                <span className="a-icon-social-facebook" />
              </a>
              <a
                href="javascript:;"
                className="a-link share-pinterest"
                data-share="pinterest"
                data-url="https://www.cos.com/ko-kr/features/places/cheongdam.html"
              >
                <span className="a-icon-social-pinterest" />
              </a>
              <a
                href="javascript:;"
                className="a-link share-twitter"
                data-share="twitter"
                data-url="https://www.cos.com/ko-kr/features/places/cheongdam.html"
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
