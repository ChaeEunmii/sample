import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '배송 정보',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="free-row free-full-width q-vertical-padding-global">
        <div className="free-contain">
          <div className="free-layout--narrow free-center-col">
            {/* free-breadcrumb */}
            <div className="free-breadcrumb">
              <a href="/main" className="a-link">
                <h3 className="breadcrumb-heading">HOME</h3>
              </a>
              <a href="/free/service" className="a-link">
                <h3 className="breadcrumb-heading">CUSTOMER SERVICE</h3>
              </a>
              <a href="/free/service/delivery" className="a-link">
                <h3 className="breadcrumb-heading">배송 정보</h3>
              </a>
            </div>
            <p className="a-paragraph">
              <b>배송 정보</b>
              <br />
              <br />
              COS 공식 온라인 스토어는 무료 배송 서비스를 제공합니다.
              <br />
              <br />
              주문 후 3일 이내 발송됩니다. (주말 및 공휴일 제외)
              <br />
              <br />
              주문 후 배송이 시작되면 알림톡을 통해 안내드리며, MY COS의 &apos;주문/배송&apos;에서 배송 현황을 확인할 수
              있습니다.
              <br />
              <br />
              연휴 기간, 택배사 휴무, 세일 기간 중 주문량 증가 또는 재고 상황 등으로 인해 배송 지연이 발생할 수 있으며,
              일부 군사 지역으로의 배송이 불가능할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
