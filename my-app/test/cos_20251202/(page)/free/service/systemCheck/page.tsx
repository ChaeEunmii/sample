import { Metadata } from 'next';
import FreeHtml from '@/views/freehtml/FreeHtml';

export const metadata: Metadata = {
  title: '시스템 점검 안내',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <div className="contain">
          <div className="u-cols-sm-12-12 u-cols-md-8-12 u-cols-lg-10-24 q-vertical-padding-global u-center-col">
            <div className="m-breadcrumb">
              <a href="/main" target="_self" className="a-link">
                <h1 className="a-heading-1">
                  <b>HOME</b>
                </h1>
              </a>
              <a href="/free/service" target="_self" className="a-link">
                <h1 className="a-heading-1">
                  <b>CUSTOMER SERVICE</b>
                </h1>
              </a>
              <a id="contents-link" href="/free/service/systemCheck" target="_self" className="a-link">
                <h1 id="contents-title" className="a-heading-1">
                  <b>시스템 점검 안내</b>
                </h1>
              </a>
            </div>
            <p className="a-paragraph">
              <b>시스템 점검 안내</b>
              <br />
              <br />
              더 나은 브랜드 경험과 서비스를 제공하기 위해 공식 온라인 스토어 시스템 점검이 진행될 예정입니다.
              <br />
              <br />
              아래 기간 동안 사이트 접속이 어려우며, 작업 상황에 따라 공지한 점검 시간보다 지연될 수 있는 점 양해
              부탁드립니다.
              <br />
              <br />
              *사이트 점검 일정: 2025년 4월 22일(화) 오전 00시 - 4월 23일(수) 오후 12시(36시간)
              <br />
              <br />
              사이트 점검 기간 동안에는 사이트 접속을 비롯하여 주문 내역 조회, 반품 신청 등이 어려우니 관련하여 문의
              사항이 있는 경우 고객센터(1800-2765)를 통해 연락해 주시면 친절하게 안내해 드리겠습니다.
              <br />
              <br />
              카카오톡 채널을 추가해 다양한 소식과 정보를 받아보세요.
              <a
                href="https://pf.kakao.com/_jGrxkd"
                target="_blank"
                className="btn"
                style={{
                  maxWidth: 'fit-content',
                  display: 'block',
                  margin: '48px auto',
                  padding: '0 16px',
                }}
              >
                카카오톡 채널 추가하기
              </a>
            </p>
          </div>
          {/* 아코디언*/}
          <div className="u-cols-sm-12-12 u-cols-md-8-12 u-cols-lg-10-24 u-center-col">
            <div className="o-contain">
              <div
                data-component="OAccordion"
                className="o-accordion"
                data-exclusive="data-exclusive"
                data-exclusive-group="example"
                data-component-id="05457e63-ce91-4bdb-85e6-55761ce2f436"
              >
                <div className="accordion-header">
                  <a href="#" target="_self" className="a-link a-link accordion-title js-accordion-toggle no-styling">
                    <span className="a-icon-plus" />
                    <span className="a-icon-minus" />
                    <h3 className="a-heading-3">시스템 점검 중 제품 구매가 불가능한가요?</h3>
                  </a>
                </div>
                <div className="accordion-content" style={{}}>
                  <div className="accordion-inner-content">
                    <p className="a-paragraph">
                      시스템 점검 중에는 공식 온라인 스토어를 통한 구매가 어렵습니다. COS 제품 구매를 희망하시는 경우,
                      오프라인 매장은 정상적으로 운영될 예정이니 함께 참고 부탁드립니다.
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-component="OAccordion"
                className="o-accordion"
                data-exclusive="data-exclusive"
                data-exclusive-group="example"
                data-component-id="cf94d69a-f53a-44f8-8392-1c9adfbd2efa"
              >
                <div className="accordion-header">
                  <a href="#" target="_self" className="a-link a-link accordion-title js-accordion-toggle no-styling">
                    <span className="a-icon-plus" />
                    <span className="a-icon-minus" />
                    <h3 className="a-heading-3">배송 현황이 궁금해요.</h3>
                  </a>
                </div>
                <div className="accordion-content">
                  <div className="accordion-inner-content">
                    <p className="a-paragraph">
                      제품은 통상적으로 주문 후 3일 내 발송됩니다. (주말 및 공휴일 제외) 시스템 점검 기간 중에는
                      사이트를 통한 배송 현황 조회가 어려우나, 상품출고 시 카카오톡 알림톡을 안내드리고 있습니다. 배송
                      내역 등 세부 정보 조회를 희망하시는 경우 함께 전달드리는 택배사 및 운송장번호를 통해 확인
                      부탁드립니다.
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-component="OAccordion"
                className="o-accordion"
                data-exclusive="data-exclusive"
                data-exclusive-group="example"
                data-component-id="1d40ba14-d16d-4ac5-93f6-9cfca6bc9af1"
              >
                <div className="accordion-header">
                  <a href="#" target="_self" className="a-link a-link accordion-title js-accordion-toggle no-styling">
                    <span className="a-icon-plus" />
                    <span className="a-icon-minus" />
                    <h3 className="a-heading-3">반품은 어떻게 신청하나요?</h3>
                  </a>
                </div>
                <div className="accordion-content">
                  <div className="accordion-inner-content">
                    <p className="a-paragraph">
                      시스템 점검 기간 중 반품을 희망하시는 경우 전화 문의를 통해 접수하실 수 있습니다. 반품 접수를 위해
                      아래의 번호로 연락 부탁드리며, 문의량 증가에 따라 전화 연결이 일부 지연될 수 있는 점 양해
                      부탁드립니다.
                      <br />
                      <br />
                      고객센터 운영시간
                      <br />
                      월요일 - 일요일: 09:00 - 21:00 KST
                      <br />
                      <br />
                      고객센터 전화번호
                      <br />
                      1800-2765
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-component="OAccordion"
                className="o-accordion"
                data-exclusive="data-exclusive"
                data-exclusive-group="example"
                data-component-id="991789c7-51cb-49b2-9a14-51386b110cf9"
              >
                <div className="accordion-header">
                  <a href="#" target="_self" className="a-link a-link accordion-title js-accordion-toggle no-styling">
                    <span className="a-icon-plus" />
                    <span className="a-icon-minus" />
                    <h3 className="a-heading-3">주문을 취소하고 싶어요.</h3>
                  </a>
                </div>
                <div className="accordion-content">
                  <div className="accordion-inner-content">
                    <p className="a-paragraph">
                      주문 취소 혹은 주문 내용 변경을 희망하시는 경우 적용 가능 여부가 일부 제한적일 수 있습니다. 주문
                      및 변경 관련 사항은 아래의 번호로 연락 부탁드리며, 문의량 증가에 따라 전화 연결이 일부 지연될 수
                      있는 점 양해 부탁드립니다.
                      <br />
                      <br />
                      고객센터 운영시간
                      <br />
                      월요일 - 일요일: 09:00 - 21:00 KST
                      <br />
                      <br />
                      고객센터 전화번호
                      <br />
                      1800-2765
                    </p>
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
