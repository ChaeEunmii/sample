import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고객 서비스 메인',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section customer-service-main">
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="contain">
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
              <div className="m-breadcrumb">
                <a href="https://www.cos.com/ko-kr/index.html" target="_self" className="a-link">
                  <h1 className="a-heading-1">HOME</h1>
                </a>
                <a href="/ko-kr/customer-service.html" target="_self" className="a-link">
                  <h1 className="a-heading-1">CUSTOMER SERVICE</h1>
                </a>
              </div>
              <div className="o-faq">
                <div className="o-list js-o-list">
                  <ul>
                    <li>
                      <a href="/free/service/aboutCos" className="a-link" target="_blank">
                        About COS
                      </a>
                    </li>
                    <li>
                      <a href="/free/service/contactUs" target="_self" className="a-link">
                        고객 문의
                      </a>
                    </li>
                    <li>
                      <a href="/mypage/inquiry" target="_self" className="a-link">
                        1:1 문의
                      </a>
                    </li>
                    <li>
                      <a href="/free/service/howToshop" target="_self" className="a-link">
                        이용 안내
                      </a>
                    </li>
                    <li>
                      <a href="/free/about/sustainability" target="_self" className="a-link">
                        지속가능성
                      </a>
                    </li>
                    <li>
                      <a href="/free/about/care" target="_self" className="a-link">
                        제품 관리
                      </a>
                    </li>
                    <li>
                      <a href="/free/service/perfumery" target="_self" className="a-link">
                        COS PERFUMERY
                      </a>
                    </li>
                    <li>
                      <a href="/free/service/delivery" target="_self" className="a-link">
                        배송 정보
                      </a>
                    </li>
                    <li>
                      <a href="/free/service/returnExchange" target="_self" className="a-link">
                        반품 및 환불
                      </a>
                    </li>
                    <li>
                      <a href="/free/service/payments" target="_self" className="a-link">
                        결제 정보
                      </a>
                    </li>
                    <li>
                      <a href="/free/service/marketing" target="_self" className="a-link">
                        마케팅 수신 동의
                      </a>
                    </li>
                    <li>
                      <a href="/locator" target="_self" className="a-link">
                        매장 찾기
                      </a>
                    </li>
                    <li>
                      <a href="/free/service/secureShop" target="_self" className="a-link">
                        CYBER SECURITY
                      </a>
                    </li>
                    <br />
                    <br />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
