import { Metadata } from 'next';
import FreeHtml from '@/views/freehtml/FreeHtml';

export const metadata: Metadata = {
  title: 'FRIENDS & FAMILY OFFER',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="contain">
            <div className="u-cols-sm-12-12 u-cols-md-8-12 u-cols-lg-10-24 u-center-col" style={{ maxWidth: 550 }}>
              <br />
              <br />
              <br />
              <p className="txt_mb" style={{ textAlign: 'center' }}>
                <span style={{ fontSize: 22 }}>
                  <b>FRIENDS &amp; FAMILY OFFER</b>
                  <br />
                  <br />
                </span>
              </p>
              <p className="txt_mb" style={{ textAlign: 'center' }}>
                <span style={{ fontSize: 11 }}></span>
              </p>
              <ol style={{ paddingLeft: 0 }}>
                <p style={{ textAlign: 'center' }}>임직원 및 협력사 여러분을 특별한 프로모션에 초대합니다.</p>
                <br />
                <div style={{ textAlign: 'center' }}>
                  <p>
                    <b>행사 내용: </b> 전 제품 70% 할인
                  </p>
                  <p>
                    <b> 행사 일정: </b>2025년 8월 24일 (일) ~ 8월 30일 (토)
                  </p>
                  <p>
                    <b> 초대 대상: </b>H&amp;M 그룹사 및 협력사 직원 본인과 가족 및 지인
                  </p>
                  <br />
                  <p className="txt_mb">
                    <span style={{ color: '#999', fontSize: 11 }}></span>
                  </p>
                  <ol style={{ paddingLeft: 0 }}>
                    <p>
                      <b>참여 방법</b>
                    </p>
                    <ol className="padding-pc" style={{ lineHeight: '20px' }}>
                      <li>- 해당 페이지를 통해 세일 페이지 접속 및 로그인</li>
                      <li>- 상품 쇼핑 후 결제시 프로모션 코드 입력</li>
                    </ol>
                    <br />
                    <p>
                      <b>프로모션 코드</b>
                    </p>
                    <ol className="padding-pc" style={{ lineHeight: '20px' }}>
                      <li>THANKYOU</li>
                    </ol>
                    <br />
                    <p>
                      <b>유의 사항</b>
                    </p>
                    <ol className="padding-pc" style={{ lineHeight: '20px' }}>
                      <li>- 본 행사는 공식 온라인 스토어에서만 진행됩니다.</li>
                      <li>- 타 쿠폰 및 할인과 중복 적용이 불가합니다.</li>
                      <li>- 행사 기간 및 조건을 사전 고지 없이 변경하거나 종료할 수 있습니다.</li>
                      <li>- 재판매 목적의 구매를 금지합니다.</li>
                      <br />
                    </ol>
                    <br />
                    <br />
                    <br />
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n         body {\n            line-height: 20px;\n         }\n         .cta {\n            background: #080808;\n            height: 32px;\n            color: #fff;\n            line-height: 32px;\n            padding: 0 12px;\n            display: inline-block;\n         }\n                            @media(max-width:767px) {\n         \n                                .mo-center-preamble {\n                                    text-align: center;\n                                }\n                            }\n                        ',
                      }}
                    />
                  </ol>
                </div>
              </ol>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </FreeHtml>
  );
}
