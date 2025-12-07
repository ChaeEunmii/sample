import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고객 문의',
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
              <a href="/free/service/contactUs" className="a-link">
                <h3 className="breadcrumb-heading">고객 문의</h3>
              </a>
            </div>
            <p className="a-paragraph">
              <b>고객 문의</b>
              <br />
              <br />
              COS 공식 온라인 스토어 이용 관련 문의 사항을 남겨주시면 친절하게 안내해 드리겠습니다.
              <br />
              <br />
              <br />
            </p>
            <p className="a-paragraph">
              <b>1:1 문의</b>
              <br />
              빠르고 정확한 안내를 위해 MY COS 메뉴의 1:1 문의 기능을 이용하시길 바랍니다.
              <br />
              <br />
              <br />
            </p>
            <p className="a-paragraph">
              <b>전화 문의</b>
              <br />
              문의 사항에 대해 아래 번호로 연락 부탁드리며, 문의량 증가에 따라
              <br />
              전화 연결이 지연될 수 있으므로 1:1 문의 이용을 권장합니다.
              <br />
              <br />
              고객센터 운영시간
              <br />
              월요일 – 일요일: 09:00 – 21:00 KST
              <br />
              <br />
              고객센터 전화번호
              <br />
              1800-2765(유선전화 요금은 유료입니다)
              <br />
              <br />
              <br />
            </p>
            <p className="a-paragraph">
              <b>이메일 문의</b>
              <br />
              아래 이메일 주소로 문의해 주시면 친절하게 안내해 드리겠습니다.
              <br />
              <br />
            </p>
            <p className="a-paragraph">
              고객센터 이메일 주소
              <br />
              customerservice.kr@cos.com
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
