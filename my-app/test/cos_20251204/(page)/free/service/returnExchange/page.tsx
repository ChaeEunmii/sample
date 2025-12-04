import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '반품 및 환불',
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
              <a href="/free/service/returnExchange" className="a-link">
                <h3 className="breadcrumb-heading">반품 및 환불</h3>
              </a>
            </div>
            <p className="a-paragraph">
              <b>반품 및 환불</b>
              <br />
              <br />
              주문한 상품이 마음에 들지 않을 경우, 상품 수령 후 7일 이내에 공식 온라인 스토어 또는 고객센터를 통해
              반품이 가능합니다. 단, 수령 후 7일이 경과한 후에는 단순 변심에 의한 반품이 불가합니다.
              <br />
              <br />
              반품 시 상품은 시착이나 사용 흔적이 없고, 모든 태그와 부속품이 온전히 부착된 상태여야 합니다. 특히
              수영복은 위생 테이프가 손상 없이 부착되어 있어야 하며, 속옷, 이어링 및 향수는 상품의 특성 및 위생상의
              이유로 개봉 또는 사용 흔적이 있는 경우 반품이 불가합니다. (결함의 경우 제외)
              <br />
              <br />
              결제 시 사용한 방법과 동일한 방식으로 전액 환불되며, 단순 변심이나 주문 실수로 인한 반품의 경우 반품
              배송비가 부과됩니다.
              <br />
              <br />
              판매 불가 상태로 반환된 상품은 환불되지 않으며, 온라인 구매 상품은 매장에서 환불이 불가합니다.
            </p>
          </div>
          <div className="free-layout--narrow free-center-col">
            {/* accordion */}
            <div className="accordion-group">
              <div className="accordion">
                <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                  <span>반복 반품</span>
                  <i className="icon"></i>
                </button>
                <div className="contArea" id="accordionContent" aria-hidden="true">
                  <p className="a-paragraph">
                    COS는 더 나은 서비스를 제공하기 위해 고객의 반품 현황을 모니터링하고 있습니다. 반품을 무분별하게
                    반복하거나 재판매 목적을 위한 구매로 확인되는 경우, 당사의 정책(계정 비활성화 등)을 안내하기 위해
                    고객에게 직접 연락을 취할 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="accordion">
                <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                  <span>반품 방법</span>
                  <i className="icon"></i>
                </button>
                <div className="contArea" id="accordionContent" aria-hidden="true">
                  <p className="a-paragraph">
                    로그인 후 MY COS &gt; 주문/배송 메뉴를 통해 반품 접수가 가능하며, 반품사유 및 회수요청지를 선택하여
                    반품 신청을 완료할 수 있습니다.
                    <br />
                    <br />
                  </p>
                  <p className="a-paragraph">
                    - 반품은 상품 수령 후 7일 이내에 가능하며, 택배사에서는 접수 후 영업일 기준 1-3일 이내에 요청주신
                    주소로 방문하여 상품 회수를 진행합니다.
                  </p>
                  <p className="a-paragraph">
                    - 상품 회수가 완료되면 물류 센터 검수 후 결제가 취소되며, 회수 완료일 기준 14일 이내에 환불이
                    진행됩니다.
                  </p>
                  <p className="a-paragraph">
                    - 반품 회수는 지정된 택배사를 통해 진행되며, 다른 택배사를 이용하거나 직접 회수 접수를 하는 경우
                    환불이 지연될 수 있습니다.
                  </p>
                  <p className="a-paragraph">
                    - 연휴 기간, 택배사 휴무, 세일 기간에 따른 작업량 증가, 또는 기타 다른 방법으로 반품을 접수하는 경우
                    등으로 인해 환불이 일부 지연될 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="accordion">
                <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                  <span>상품 착용에 주의 부탁드립니다</span>
                  <i className="icon"></i>
                </button>
                <div className="contArea" id="accordionContent" aria-hidden="true">
                  <p className="a-paragraph">
                    반품은 상품이 온전한 상태여야 가능합니다. 다시 말해, 데오드란트나 향수 또는 화장 자국 등이 없이
                    깨끗한 상태여야 합니다. 판매 불가 상태로 반환된 상품은 환불되지 않으며 고객에게 반송될 수 있습니다.
                    <br />
                    <br />
                    신발은 바닥이 손상되지 않도록 표면이 부드러운 곳에서 착용 바랍니다. 반품 시 배송된 신발 상자에
                    상품을 넣어주시고 배송 시 사용된 외부 포장 상자를 그대로 사용하는 것을 추천합니다.
                  </p>
                </div>
              </div>
              <div className="accordion">
                <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                  <span>환불</span>
                  <i className="icon"></i>
                </button>
                <div className="contArea" id="accordionContent" aria-hidden="true">
                  <p className="a-paragraph">카드 결제:</p>
                  <p className="a-paragraph">
                    COS에서 반품 처리 진행이 완료된 후 은행에서 환불 절차가 진행됩니다. 카드 환급은 은행 처리 시간에
                    따라 영업일 기준 최대 10일 정도 소요됩니다. 이러한 점은 COS가 해결할 수 없는 점 양해 바랍니다.
                  </p>
                  <br />
                  <p className="a-paragraph">간편결제:</p>
                  <p className="a-paragraph">
                    등록된 카드사 또는 계좌에 따라 다르나, 계좌의 경우 영업일 기준 다음날에 환불 절차가 진행됩니다.
                  </p>
                  <br />
                  <p className="a-paragraph">휴대폰 결제:</p>
                  <p className="a-paragraph">
                    주문 당월에 반품 신청 시 당월 결제 내역에서 취소됩니다. 다음 달에 취소 시에는 현금 환불만 가능하며,
                    영업일 기준(토, 일, 공휴일 제외) 익일 환불이 진행됩니다.
                  </p>
                  <br />
                  <p className="a-paragraph">예치금:</p>
                  <p className="a-paragraph">COS에서 반품 처리 진행이 완료된 후 바로 부여됩니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
