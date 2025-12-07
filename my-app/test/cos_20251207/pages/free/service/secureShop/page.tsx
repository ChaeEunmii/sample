import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '정보 보안',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="free-row free-full-width q-vertical-padding-global">
        <div className="free-contain">
          <div className="free-layout--full free-center-col">
            {/* free-breadcrumb */}
            <div className="free-breadcrumb">
              <a href="/main" className="a-link">
                <h3 className="breadcrumb-heading">HOME</h3>
              </a>
              <a href="/free/service" className="a-link">
                <h3 className="breadcrumb-heading">CUSTOMER SERVICE</h3>
              </a>
              <a href="/free/service/secureShop" className="a-link">
                <h3 className="breadcrumb-heading">정보 보안</h3>
              </a>
            </div>
            <div className="free-grid gap-12 md-gap-20 free-px-15 free-md-px-20 free-pb-20 free-lg-pb-40">
              <h2 className="col-12 lg-col-4 lg-col-start-5 lg-txtc free-bold free-fs-16 free-lg-fs-20">정보 보안</h2>
            </div>
            <div className="free-grid gap-12 md-gap-20 free-px-15 free-md-px-20 free-pb-30 free-lg-pb-30">
              <div className="col-12 lg-col-4 lg-col-start-3">
                <div className="break-words">
                  <b>데이터를 안전하게 보호하세요.</b>
                  <br />
                  <br />
                  cos.com에서 보다 안전하게 쇼핑을 즐길 수 있도록 알아두면 좋은 정보를 모았습니다. 온라인 쇼핑 시
                  유의해야 할 점들과 피해가 의심될 때 취해야 할 조치 방법을 확인해 보세요.
                </div>
                <br />
                <div className="break-words">
                  <b>피싱이 의심되시나요?</b>
                  <br />
                  <br />
                  아래의 내용을 통해 피싱 사기의 징후를 인지하고, 올바르게 대처하는 방법을 확인해 보세요.
                </div>
                <br />
                <br />
                {/* accordion */}
                <div className="accordion-group">
                  <div className="accordion">
                    <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                      <span>피싱이란 무엇인가요?</span>
                      <i className="icon"></i>
                    </button>
                    <div className="contArea" id="accordionContent" aria-hidden="true">
                      <p className="a-paragraph">
                        피싱(Phishing)은 개인 정보나 금전을 편취하기 위해 악성 링크를 클릭하도록 유도하는 사기 수법을
                        의미합니다.
                        <br />
                        일반적으로 피싱은 업체를 사칭하여 링크 클릭 또는 파일 다운로드를 유도하는 방식을 사용합니다.
                        <br />
                        즉각적인 조치를 요청하거나 개인 정보를 요구하는 이메일을 주의해 주세요.
                        <br />
                        피싱은 이메일 이외에도 팝업창, 웹사이트, 소셜미디어와 문자 메시지를 통해서도 발생할 수 있습니다.
                      </p>
                    </div>
                  </div>
                  <div className="accordion">
                    <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                      <span>피싱을 피하는 방법</span>
                      <i className="icon"></i>
                    </button>
                    <div className="contArea" id="accordionContent" aria-hidden="true">
                      <p className="a-paragraph">
                        이메일 주소 확인하기:
                        <br />
                        COS에서 전송하는 이메일은 언제나 @cos.com 주소를 사용합니다. (예시: news.eu@cos.com)
                        <br />
                        의심스러운 이메일을 받으면 링크를 클릭하거나 회신하지 않는 것이 중요합니다. 발신자가 의심스러운
                        경우 공식 채널을 통해 문의해 주시면 진위 여부를 확인해 드리겠습니다.
                      </p>
                      <br />
                      <p className="a-paragraph">
                        클릭하기 전에 살펴보기:
                        <br />
                        링크를 클릭하기 전, 하이퍼링크에 커서를 대고 URL을 미리 확인하세요. 신뢰할 수 없는 링크, QR
                        코드, 첨부파일은 언제나 주의해야 합니다.
                      </p>
                      <br />
                      <p className="a-paragraph">
                        문장과 맞춤법 확인하기:
                        <br />
                        피싱 메일에서는 문법 오류나 맞춤법 오류를 종종 찾아볼 수 있습니다.
                      </p>
                      <br />
                      <p className="a-paragraph">
                        공포감 조성 시 주의하기:
                        <br />
                        피싱 공격 시 되도록 빠르게 결정을 내리거나 결제를 진행하도록 긴박감을 조성합니다. 데이터를
                        안전하게 보호하고 피싱을 예방하려면 이러한 수법을 조심하세요.
                      </p>
                    </div>
                  </div>
                  <div className="accordion">
                    <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                      <span>피싱 사기 신고하기</span>
                      <i className="icon"></i>
                    </button>
                    <div className="contArea" id="accordionContent" aria-hidden="true">
                      <p className="a-paragraph">
                        cos.com에서는 결제 시 구매를 위한 필수 정보만을 요청하며, 이벤트 참여 등을 위한 별도의 결제
                        요청을 요구하지 않습니다.
                        <br />
                        COS를 사칭한 의심스러운 메시지를 받으셨다면 즉시 공식 채널을 통해 신고해 주세요.
                        <br />
                        피해가 의심된다면 은행에 즉시 연락해 주시고, 해킹이 의심되는 계정의 비밀번호는 즉시 변경해
                        주세요.
                        <br />
                        친구와 가족에게도 이러한 보안 수칙을 공유해 주세요. 모두가 함께 더 안전한 온라인 쇼핑 환경을
                        만들 수 있습니다.
                      </p>
                      <div>
                        <a href="https://www.cos.com/ko-kr/ccd/selectCnslOrdReqDtl.html">
                          <u>1:1 문의하기</u>
                        </a>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="break-words  theme-block-light lg:theme-block-light">
                    <b>온라인 환경 보호하기</b>
                    <br />
                    <br />
                    피싱 사기와 사이버 위협은 계속해서 진화하고 있지만, 다음 수칙을 실천하여 보다 안전한 인터넷 환경을
                    만들어보세요.
                  </div>
                  <br />
                  <br />
                  <div className="accordion">
                    <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                      <span>결제 정보 보호하기</span>
                      <i className="icon"></i>
                    </button>
                    <div className="contArea" id="accordionContent" aria-hidden="true">
                      <p className="a-paragraph">
                        결제 시 안전한 온라인 결제 수단과 신뢰할 수 있는 신용카드를 사용해 주세요.
                        <br />
                        cos.com에서는 결제 정보를 암호화 및 토큰화하여 보호하고 있습니다.
                        <br />
                        <br />
                        <br />
                        당사는 구매를 위한 결제 정보만을 요청드리며, 추가 비용을 요구하는 이벤트는 운영하지 않습니다.
                      </p>
                    </div>
                  </div>
                  <div className="accordion">
                    <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                      <span>비밀번호 업데이트하기</span>
                      <i className="icon"></i>
                    </button>
                    <div className="contArea" id="accordionContent" aria-hidden="true">
                      <p className="a-paragraph">
                        영문, 숫자, 특수기호를 조합한 비밀번호를 사용하세요.
                        <br />
                        최소 12자 이상의 비밀번호로 변경해 주세요. 비밀번호가 길고 복잡해질수록 정보를 지키기 좋습니다.
                      </p>
                    </div>
                  </div>
                  <div className="accordion">
                    <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                      <span>소프트웨어 업데이트하기</span>
                      <i className="icon"></i>
                    </button>
                    <div className="contArea" id="accordionContent" aria-hidden="true">
                      <p className="a-paragraph">
                        사용 중인 기기의 자동 업데이트 기능을 활성화해 보세요.
                        <br />
                        보안 패치가 포함된 업데이트는 사이버 위협에 대한 강력한 방어 수단이 됩니다.
                        <br />
                        업데이트 시에는 스마트폰, 스마트워치, 스마트 스피커 등을 포함한 모든 스마트 기기에 적용해
                        주세요.
                      </p>
                    </div>
                  </div>
                  <div className="accordion">
                    <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                      <span>웹사이트 확인하기</span>
                      <i className="icon"></i>
                    </button>
                    <div className="contArea" id="accordionContent" aria-hidden="true">
                      <p className="a-paragraph">
                        주소창에 ‘HTTPS’와 자물쇠 아이콘이 있는지 확인하세요.
                        <br />
                        다음과 같은 웹사이트는 주의가 필요합니다:
                        <br />
                      </p>
                      <ul>
                        <li>
                          <span className="li-mr">-</span>맞춤법 오류 또는 의심스러운 디자인
                        </li>
                        <li>
                          <span className="li-mr">-</span>과도하게 긴박감을 조성하는 경우
                        </li>
                        <li>
                          <span className="li-mr">-</span>민감한 정보를 요청하는 경우
                        </li>
                      </ul>
                      사이트가 실제로 존재하는지 검색 기능을 활용해 확인해 보세요.
                      <p></p>
                    </div>
                  </div>
                  <br />
                  <div className="break-words  theme-block-light lg:theme-block-light">
                    <b>데이터 관리 방법 살펴보기</b>
                    <br />
                    <br />
                    개인 정보와 자산을 보호하기 위해 일상 속에서 실천할 수 있는 방법들을 알아보세요.
                  </div>
                  <br />
                  <br />
                  <div className="accordion">
                    <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                      <span>소셜미디어 사용 시 주의하기</span>
                      <i className="icon"></i>
                    </button>
                    <div className="contArea" id="accordionContent" aria-hidden="true">
                      <p className="a-paragraph">
                        모두가 볼 수 있는 온라인 공간에 개인정보를 올리지 않도록 주의해야 합니다.
                        <br />
                        소셜미디어 사용 시 공개 범위를 제한하고, 모르는 사람이 접근하는 경우 조심해 주세요.
                      </p>
                    </div>
                  </div>
                  <div className="accordion">
                    <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                      <span>백신 프로그램 사용하기</span>
                      <i className="icon"></i>
                    </button>
                    <div className="contArea" id="accordionContent" aria-hidden="true">
                      <p className="a-paragraph">
                        모두가 볼 수 있는 온라인 공간에 개인정보를 올리지 않도록 주의해야 합니다.
                        <br />
                        소셜미디어 사용 시 공개 범위를 제한하고, 모르는 사람이 접근하는 경우 조심해 주세요.
                      </p>
                    </div>
                  </div>
                  <div className="accordion">
                    <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                      <span>와이파이 사용 시 주의하기</span>
                      <i className="icon"></i>
                    </button>
                    <div className="contArea" id="accordionContent" aria-hidden="true">
                      <p className="a-paragraph">
                        온라인 쇼핑 시 보안된 와이파이 서비스를 이용해 주세요. <br />
                        공공 와이파이는 사용 시 위험할 수 있으므로, 가정용 와이파이나 VPN을 통해 접속하는 것이 좋습니다.{' '}
                        <br />
                        와이파이 사용 시 최초로 설정된 비밀번호를 이용하지 않고, 반드시 변경하여 사용해 주세요.
                      </p>
                      <br />
                    </div>
                  </div>
                  <div className="accordion">
                    <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                      <span>데이터 백업하기</span>
                      <i className="icon"></i>
                    </button>
                    <div className="contArea" id="accordionContent" aria-hidden="true">
                      <p className="a-paragraph">
                        기기에 저장된 중요한 데이터는 정기적으로 백업해 주세요. <br />
                        악성코드 감염, 기기 고장 또는 분실 등 예기치 못한 상황에서도 데이터를 보호 및 복구할 수
                        있습니다.
                      </p>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
