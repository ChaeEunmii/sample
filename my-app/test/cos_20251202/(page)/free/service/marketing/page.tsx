import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '마케팅 수신 동의',
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
              <a href="/free/service/marketing" className="a-link">
                <h3 className="breadcrumb-heading">마케팅 수신 동의</h3>
              </a>
            </div>
            <p className="a-paragraph">
              <b>마케팅 수신 동의 </b>
              <br />
              <br />
              COS 마케팅 정보 수신에 모두 동의하고, 회원 맞춤 혜택을 받아보세요. <br />
              카카오톡 채널을 추가한 경우, 더욱 많은 정보를 받으실 수 있습니다.
              <br />
              <br />
              <br />
              <br />
            </p>
            <div className="txtc">
              <button className="free-btn filled">마케팅 수신 동의 바로가기</button>
            </div>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
