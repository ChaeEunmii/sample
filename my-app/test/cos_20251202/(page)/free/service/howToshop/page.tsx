import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이용 안내',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="free-row free-full-width">
        <div className="free-contain">
          <div className="free-layout--narrow free-center-col q-vertical-padding-global">
            {/* free-breadcrumb */}
            <div className="free-breadcrumb">
              <a href="/main" className="a-link">
                <h3 className="breadcrumb-heading">HOME</h3>
              </a>
              <a href="/free/service" className="a-link">
                <h3 className="breadcrumb-heading">CUSTOMER SERVICE</h3>
              </a>
              <a href="/free/service/howToshop" className="a-link">
                <h3 className="breadcrumb-heading">이용 안내</h3>
              </a>
            </div>
            <p className="a-paragraph">
              <b>이용 안내</b>
              <br />
              <br />
              COS 공식 온라인 스토어에서 편리한 쇼핑을 경험해보세요. 소재와 색상별로 검색이 가능한 필터와 마음에 드는
              품목을 저장하고 차후에 구매할 수 있는 장바구니도 제공하며, 주문 상태 확인이 가능한 &apos;주문 현황&apos;과
              &apos;위시리스트&apos; 기능도 찾아볼 수 있습니다. <br />
              <br />
            </p>
          </div>
          <div className="free-layout--narrow free-center-col">
            {/* accordion */}
            <div className="accordion-group">
              <div className="accordion">
                <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                  <span>가입 혜택 및 적용 조건</span>
                  <i className="icon"></i>
                </button>
                <div className="contArea" id="accordionContent" aria-hidden="true">
                  <p className="a-paragraph">
                    신규 회원 가입한 모든 고객을 대상으로 첫 구매 시 사용 가능한 10% 할인 코드를 드립니다.
                  </p>
                  <ul>
                    <li>- 해당 할인 코드는 회원 가입 완료 후 발급되며, 최초 주문 시에만 1회 사용 가능합니다.</li>
                    <li>- 할인 코드는 해당 혜택이 시행된 이후 시점에 가입한 고객에게만 제공됩니다.</li>
                    <li>- 기존 가입 고객 또는 첫 구매를 완료한 경우에는 본 혜택이 적용되지 않습니다.</li>
                    <li>- 주문 취소 또는 전체 반품 시 할인 코드는 재발급되지 않습니다</li>
                  </ul>
                </div>
              </div>
              <div className="accordion">
                <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                  <span>혜택 이용 방법</span>
                  <i className="icon"></i>
                </button>
                <div className="contArea" id="accordionContent" aria-hidden="true">
                  <p className="a-paragraph free-mb-8">
                    신규 회원 가입 고객 대상으로 발급되는 10% 할인 코드는 아래 방법에 따라 사용하실 수 있습니다.
                  </p>
                  <ul>
                    <li>1) 회원 가입을 완료하시면, 등록된 휴대폰 번호로 할인 코드가 포함된 알림톡이 발송됩니다.</li>
                    <li>
                      2) 로그인 후, 원하시는 상품을 장바구니에 담고 해당 페이지 내 프로모션 코드 입력란에 코드를 입력해
                      주세요.
                    </li>
                    <li>3) 할인 금액이 적용된 것을 확인 후 결제를 진행해 주세요.</li>
                  </ul>
                </div>
              </div>
              <div className="accordion">
                <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                  <span>주문 변경 방법</span>
                  <i className="icon"></i>
                </button>
                <div className="contArea" id="accordionContent" aria-hidden="true">
                  <p className="a-paragraph">
                    고객의 빠른 제품 수령을 위해 주문 완료 즉시 배송 절차가 시작됩니다. 따라서 주문 완료 후에 발생한
                    변심 또는 실수로 인한 수정을 원할 시, 취소 및 변경 가능 여부가 제한적일 수 있습니다. 주문 및 변경
                    관련 궁금한 사항은 COS 고객센터로 연락해 주세요. 신속히 도와드리겠습니다.
                    <br />
                    <br />
                    상품이 이미 발송된 후 주문 변경 혹은 취소를 원할 경우, 반품 후 다시 주문해 주세요.
                  </p>
                </div>
              </div>
              <div className="accordion">
                <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                  <span>배송 국가 변경</span>
                  <i className="icon"></i>
                </button>
                <div className="contArea" id="accordionContent" aria-hidden="true">
                  <p className="a-paragraph">
                    배송을 받고자 하는 국가가 아닌 다른 국가에서 쇼핑한 경우, 언제든지 웹 페이지 상단의 ‘배송 국가’를
                    클릭해 국가 정보를 변경할 수 있습니다. 가격, 부가가치세, 배송 기간, 배송비는 희망 배송 국가에 따라
                    변경되는 점에 유의 바랍니다.
                  </p>
                </div>
              </div>
              <div className="accordion">
                <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                  <span>쿠키</span>
                  <i className="icon"></i>
                </button>
                <div className="contArea" id="accordionContent" aria-hidden="true">
                  <p className="a-paragraph">
                    쿠키는 웹 사이트에서 보내는 작은 텍스트 파일로, 방문자의 하드 드라이브에 저장됩니다. COS는 고객에게
                    즐거운 쇼핑 경험을 제공하고자 고객의 동의 아래 첫 방문 시 선택한 국가와 추후 방문 시 활용할 로그인
                    세부사항을 비롯한 정보를 저장할 수 있게 쿠키를 활용합니다. 그리하여 추후 개인 컴퓨터로 방문할 때
                    다시 로그인 정보를 입력하거나 방문 국가를 선택할 필요가 없습니다. 또한, 쿠키는 고객의 웹 사이트 방문
                    여부와 어떤 페이지를 둘러봤는지 알려줍니다. 쿠키 값은 고객의 개인 정보(카드 번호, 주소, 주문 내용
                    등)을 저장하는 용도로 절대 쓰이지 않습니다. 쿠키는 오직 브라우징 환경을 개선하거나 페이지별 방문객
                    집계를 위해서만 사용됩니다.
                  </p>
                </div>
              </div>
              <div className="accordion">
                <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                  <span>브라우저</span>
                  <i className="icon"></i>
                </button>
                <div className="contArea" id="accordionContent" aria-hidden="true">
                  <p className="a-paragraph">
                    COS 공식 온라인 스토어는 최신 버전의 마이크로소프트 엣지, 파이어폭스, 크롬, 사파리에 최적화되어
                    있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
