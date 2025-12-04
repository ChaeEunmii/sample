import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Los Angeles - COS KR',
};

export default function Page() {
  return (
    <>
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
                      OLYMPIC THEATRE, LOS ANGELES
                    </h1>
                    <p className="a-paragraph fixed-size q-body-copy-1" style={{ color: '' }}>
                      LA 다운타운 길가에 꽤 웅장하게 자리하고 있는 올림픽 시어터(Olympic theatre)는 전성기에 작품 600여
                      편의 막을 올리곤 했습니다. 1927년에 무성 코미디 영화인 「Oh, Baby!」 상영으로 문을 열었고, 화려한
                      중국풍의 인테리어는 관객들이 저녁 시간을 보내던 배경이 되었습니다.
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
                          srcSet="https://image.thehyundai.com/hdcos/images/hdcos/building/3/1/1.jpg"
                        />
                        <source media="(min-width:1px)" />
                        <img
                          className="a-image initial loading"
                          src="https://image.thehyundai.com/hdcos/images/hdcos/building/3/1/1.jpg"
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
                    1986년 여름에 문을 닫을 때까지 올림픽이 극장으로서 기능했던 60년 동안 수많은 영화와 연극이
                    선보였습니다. 이제는 대중이 스타를 볼 수 있는 장소는 아니지만, 존재감이 분명한 이 건물은 「파이트
                    클럽(Fight Club)」이나 「우주 전쟁(War of the Worlds)」을 비롯한 여러 영화에 등장하기도 했습니다.
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
                        src="https://image.thehyundai.com/hdcos/images/hdcos/building/3/2/1.jpg"
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
                        src="https://image.thehyundai.com/hdcos/images/hdcos/building/3/2/2.jpg"
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
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              {/* blogtext-*/}
              {/* // blogtext-*/}
              {/* textlog */}
              <div className="contain">
                <span className="richTextSpan"> </span>
                <div className="o-blog-text is-richtext">
                  <div className="a-paragraph a-page-paragraph q-body-copy-1">
                    오늘날 복원된 석조 파사드는 이곳의 풍부하고 다채로운 역사를 보여줍니다. 밖에는 기념할만한 가치가
                    있는 과거의 상징인 네온사인의 불이 다시 켜지고 있으며, 내부에서는 COS 컬렉션 사이로 원래 있었던
                    무대의 윤곽을 여전히 볼 수 있습니다.
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
                          srcSet="https://image.thehyundai.com/hdcos/images/hdcos/building/3/3/1.jpg"
                        />
                        <source media="(min-width:1px)" />
                        <img
                          className="a-image loading"
                          src="https://image.thehyundai.com/hdcos/images/hdcos/building/3/3/1.jpg"
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
                    <div style={{ textAlign: 'center' }}>
                      <br />
                      매장 주소:
                      <br />
                      <br />
                      313 West 8th Street <br />
                      90014 Los Angeles <br />
                      United States
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
                  data-url="https://www.cos.com/ko-kr/features/places/la.html"
                >
                  <span className="a-icon-social-facebook" />
                </a>
                <a
                  href="javascript:;"
                  className="a-link share-pinterest"
                  data-share="pinterest"
                  data-url="https://www.cos.com/ko-kr/features/places/la.html"
                >
                  <span className="a-icon-social-pinterest" />
                </a>
                <a
                  href="javascript:;"
                  className="a-link share-twitter"
                  data-share="twitter"
                  data-url="https://www.cos.com/ko-kr/features/places/la.html"
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
    </>
  );
}
