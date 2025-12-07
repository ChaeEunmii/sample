import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '결제 정보',
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
              <a href="/free/service/payments" className="a-link">
                <h3 className="breadcrumb-heading">결제 정보</h3>
              </a>
            </div>
            <p className="a-paragraph">
              <b>안전결제</b>
              <br />
              <br />
              온라인 결제는 신용카드, 휴대폰결제, 예치금, 네이버페이를 통해서만 가능합니다.
              <br />
              <br />
              사용되는 통화는 한국 ‘원’(KRW) 입니다. 부가가치세는 모든 가격에 포함되며 주문이 배송되는 국가를 기반으로
              합니다. COS 공식 온라인 스토어의 모든 가격 및 제품 정보는 변경될 수 있으며 일부 상품은 특정 스토어에서만
              제공됩니다.
              <br />
              <br />
              <br />
            </p>
            <p className="a-paragraph">
              <b>보안</b>
              <br />
              <br />
              더현대닷컴은 카드사와 직접 거래하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
