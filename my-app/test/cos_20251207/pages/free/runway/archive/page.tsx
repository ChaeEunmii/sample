import { Metadata } from 'next';
import FreeHtml from '@/views/freehtml/FreeHtml';

export const metadata: Metadata = {
  title: '런웨이 아카이브 - COS KR',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width" id="runway_title">
          <div className="contain">
            <div className="o-text-block u-float-center u-align-center">
              <div className="heading-section">
                <h1 className="title-1 " style={{ cursor: 'default' }}>
                  <b>런웨이 아카이브</b>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n .text-center.font_large_l_bold_mobile.lg:font_large_m_bold_desktop.lg:!text-48.text-block.w-full{ font-family: 'NotoSanceKR', sans-serif  !important; }\n.font_large_l_bold_mobile{  font-family: 'NotoSanceKR', sans-serif  !important; }\n",
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\n.col6_custom .o-square {margin-bottom: 0;}\n.col6_custom .is-four-cols{margin-top: 20px;}\n.o-grid-controller.is-four-cols .content .scrollable-content{padding: 0;}\n.o-grid-controller.is-four-cols.is-stacked-on-mobile .content .scrollable-content .column {  width: 49%;}\n.font_large_s_bold_desktop {\n    font-family: 'NotoSansKR', sans-serif;\n    line-height: 1.1;\n}\n.o-text-block.u-float-center.u-align-center .anchor-section{display: flex;  justify-content: space-evenly;}\n.u-cols-lg-24-24 {   margin-bottom: 20px;}\n.text-center.font_m_semibold.lg:font_small_l_semibold.pb-15 pt-5 {height: 0;}\n.text-center.font_large_s_bold_desktop.lg:font_large_l_bold_desktop.pb-7.5 text-current {    font-family: 'NotoSansKR', sans-serif;}\n.pb-7\\.5 {\n    padding-bottom: 0;\n}\t\n.pt-5 {\n    padding-top: 3.25rem;\n}\t\t\t\t\t\t\t\n\n@container root (min-width: 768px){\n.o-square .cell{width: 50%;}\n.o-square .cell:last-child{width: 50%; margin-bottom: 0;}\n}\n\n@container root (max-width: 767px){\n.o-text-block.u-float-center{padding-left: 20px; padding-right: 20px;}\n}\n\n\n@container root (min-width: 1025px) {\n\n.o-grid-controller.is-four-cols .content .scrollable-content { max-width: none; display: flex; justify-content: space-between;}\n\n}\n\n",
          }}
        />
        <div
          style={{ width: '100%' }}
          className="theme-block-dark lg:theme-block-dark relative overflow-hidden text-clip bg-block text-center text-block flex lg:flex h-[100vh] max-h-full snap-end "
        >
          <a
            href="https://www.cos.com/ko-kr/runway/autumn-winter-2024.html"
            className=" relative aspect-5/9 md:aspect-16/10 h-full w-full bg-block text-block theme-block-dark lg:theme-block-dark "
          >
            <img
              alt="women low res"
              className="absolute inset-0 text-transparent h-full w-full object-cover object-[50%_0%] hidden-new lg:block"
              data-nimg="fill"
              sizes="100vw"
              srcSet="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2563900020240912183335.jpg"
            />
            <img
              alt=""
              className="h-full w-full object-cover object-[50%_0%] lg:hidden"
              data-nimg="fill"
              src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2563900020240912183342.jpg"
            />
          </a>
          <div
            style={{ zIndex: 1 }}
            className="absolute left-0 top-0 flex h-full w-full flex-col theme-block-dark lg:theme-block-dark justify-end items-start pointer-events-none"
          >
            <div className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20 ">
              <a href="https://www.cos.com/ko-kr/runway/autumn-winter-2024.html">
                <h2
                  className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop pb-7.5 text-current pointer-events-auto"
                  data-testid="heading"
                  style={{ color: '#ffffff' }}
                >
                  2024
                  <br />
                  가을 겨울 런웨이
                </h2>
              </a>
              <a href="https://www.cos.com/ko-kr/runway/autumn-winter-2024.html" className="pointer-events-auto">
                <p className="text-center font_m_semibold lg:font_small_l_semibold pb-15 pt-5 " />
              </a>
              <div className="flex gap-5 lg:gap-15 flex-col lg:flex-row ">
                <a
                  style={{ color: '#' }}
                  className="font_small_s_semibold font-semibold pointer-events-auto"
                  href="https://www.cos.com/ko-kr/runway/autumn-winter-2024.html"
                >
                  런웨이 보러가기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ width: '100%' }}
        className="theme-block-dark lg:theme-block-dark relative overflow-hidden text-clip bg-block text-center text-block flex lg:flex h-[100vh] max-h-full snap-end "
      >
        <a
          href="https://www.cos.com/ko-kr/runway/spring-summer-2024.html"
          className=" relative aspect-5/9 md:aspect-16/10 h-full w-full bg-block text-block theme-block-dark lg:theme-block-dark "
        >
          <img
            alt="women low res"
            className="absolute inset-0 text-transparent h-full w-full object-cover object-[50%_0%] hidden-new lg:block"
            data-nimg="fill"
            sizes="100vw"
            srcSet="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2563900020240912183443.png"
          />
          <img
            alt=""
            className="h-full w-full object-cover object-[50%_0%] lg:hidden"
            data-nimg="fill"
            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2563900020240912183437.png"
          />
        </a>
        <div
          style={{ zIndex: 1 }}
          className="absolute left-0 top-0 flex h-full w-full flex-col theme-block-dark lg:theme-block-dark justify-end items-start pointer-events-none"
        >
          <div className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20 ">
            <a href="https://www.cos.com/ko-kr/runway/spring-summer-2024.html">
              <h2
                className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop pb-7.5 text-current pointer-events-auto"
                data-testid="heading"
                style={{ color: '#ffffff' }}
              >
                2024
                <br />봄 여름 런웨이
              </h2>
            </a>
            <a href="https://www.cos.com/ko-kr/runway/spring-summer-2024.html" className="pointer-events-auto">
              <p className="text-center font_m_semibold lg:font_small_l_semibold pb-15 pt-5 " />
            </a>
            <div className="flex gap-5 lg:gap-15 flex-col lg:flex-row ">
              <a
                style={{ color: '#' }}
                className="font_small_s_semibold font-semibold pointer-events-auto"
                href=" https://www.cos.com/ko-kr/runway/spring-summer-2024.html"
              >
                런웨이 보러가기
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ width: '100%' }}
        className="theme-block-dark lg:theme-block-dark relative overflow-hidden text-clip bg-block text-center text-block flex lg:flex h-[100vh] max-h-full snap-end "
      >
        <a
          href=" https://www.cos.com/ko-kr/runway/autumn-winter-2023.html"
          className=" relative aspect-5/9 md:aspect-16/10 h-full w-full bg-block text-block theme-block-dark lg:theme-block-dark "
        >
          <img
            alt="women low res"
            className="absolute inset-0 text-transparent h-full w-full object-cover object-[50%_0%] hidden-new lg:block"
            data-nimg="fill"
            sizes="100vw"
            srcSet="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2563900020240912183531.png"
          />
          <img
            alt=""
            className="h-full w-full object-cover object-[50%_0%] lg:hidden"
            data-nimg="fill"
            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2563900020240912183538.png"
          />
        </a>
        <div
          style={{ zIndex: 1 }}
          className="absolute left-0 top-0 flex h-full w-full flex-col theme-block-dark lg:theme-block-dark justify-end items-start pointer-events-none"
        >
          <div className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20 ">
            <a href=" https://www.cos.com/ko-kr/runway/autumn-winter-2023.html">
              <h2
                className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop pb-7.5 text-current pointer-events-auto"
                data-testid="heading"
                style={{ color: '#' }}
              >
                2023
                <br />
                가을 겨울 런웨이
              </h2>
            </a>
            <a href=" https://www.cos.com/ko-kr/runway/autumn-winter-2023.html" className="pointer-events-auto">
              <p className="text-center font_m_semibold lg:font_small_l_semibold pb-15 pt-5 " />
            </a>
            <div className="flex gap-5 lg:gap-15 flex-col lg:flex-row ">
              <a
                style={{ color: '#ffffff' }}
                className="font_small_s_semibold font-semibold pointer-events-auto"
                href="https://www.cos.com/ko-kr/runway/autumn-winter-2023.html"
              >
                런웨이 보러가기
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ width: '100%' }}
        className="theme-block-dark lg:theme-block-dark relative overflow-hidden text-clip bg-block text-center text-block flex lg:flex h-[100vh] max-h-full snap-end "
      >
        <a
          href="https://www.cos.com/ko-kr/women/cos-atelier.html"
          className=" relative aspect-5/9 md:aspect-16/10 h-full w-full bg-block text-block theme-block-dark lg:theme-block-dark "
        >
          <img
            alt="women low res"
            className="absolute inset-0 text-transparent h-full w-full object-cover object-[50%_0%] hidden-new lg:block"
            data-nimg="fill"
            sizes="100vw"
            srcSet="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2563900020240912183627.png"
          />
          <img
            alt=""
            className="h-full w-full object-cover object-[50%_0%] lg:hidden"
            data-nimg="fill"
            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2563900020240912183621.png"
          />
        </a>
        <div
          style={{ zIndex: 1 }}
          className="absolute left-0 top-0 flex h-full w-full flex-col theme-block-dark lg:theme-block-dark justify-end items-start pointer-events-none"
        >
          <div className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20 ">
            <a href="https://www.cos.com/ko-kr/women/cos-atelier.html">
              <h2
                className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop pb-7.5 text-current pointer-events-auto"
                data-testid="heading"
                style={{ color: '#ffffff' }}
              >
                2023
                <br />봄 여름 아틀리에 컬렉션
              </h2>
            </a>
            <a href="https://www.cos.com/ko-kr/women/cos-atelier.html" className="pointer-events-auto">
              <p className="text-center font_m_semibold lg:font_small_l_semibold pb-15 pt-5 " />
            </a>
            <div className="flex gap-5 lg:gap-15 flex-col lg:flex-row ">
              <a
                style={{ color: '#ffffff' }}
                className="font_small_s_semibold font-semibold pointer-events-auto"
                href="https://www.cos.com/ko-kr/women/cos-atelier.html"
              >
                컬렉션 보러가기
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ width: '100%' }}
        className="theme-block-dark lg:theme-block-dark relative overflow-hidden text-clip bg-block text-center text-block flex lg:flex h-[100vh] max-h-full snap-end "
      >
        <a className=" relative aspect-5/9 md:aspect-16/10 h-full w-full bg-block text-block theme-block-dark lg:theme-block-dark ">
          <img
            alt="women low res"
            className="absolute inset-0 text-transparent h-full w-full object-cover object-[50%_0%] hidden-new lg:block"
            data-nimg="fill"
            sizes="100vw"
            srcSet="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2563900020240912200233.png"
          />
          <img
            alt=""
            className="h-full w-full object-cover object-[50%_0%] lg:hidden"
            data-nimg="fill"
            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2563900020240912200238.png"
          />
        </a>
        <div
          style={{ zIndex: 1 }}
          className="absolute left-0 top-0 flex h-full w-full flex-col theme-block-dark lg:theme-block-dark justify-end items-start pointer-events-none"
        >
          <div className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20 ">
            <a>
              <h2
                className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop pb-7.5 text-current"
                data-testid="heading"
                style={{ color: '#' }}
              >
                2022
                <br />
                가을 겨울 런웨이
              </h2>
            </a>
            <a className="">
              <p className="text-center font_m_semibold lg:font_small_l_semibold pb-15 pt-5 " />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ width: '100%' }}
        className="theme-block-dark lg:theme-block-dark relative overflow-hidden text-clip bg-block text-center text-block flex lg:flex h-[100vh] max-h-full snap-end "
      >
        <a className=" relative aspect-5/9 md:aspect-16/10 h-full w-full bg-block text-block theme-block-dark lg:theme-block-dark ">
          <img
            alt="women low res"
            className="absolute inset-0 text-transparent h-full w-full object-cover object-[50%_0%] hidden-new lg:block"
            data-nimg="fill"
            sizes="100vw"
            srcSet="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2563900020240912200333.png"
          />
          <img
            alt=""
            className="h-full w-full object-cover object-[50%_0%] lg:hidden"
            data-nimg="fill"
            src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2563900020240912200339.png"
          />
        </a>
        <div
          style={{ zIndex: 1 }}
          className="absolute left-0 top-0 flex h-full w-full flex-col theme-block-dark lg:theme-block-dark justify-end items-start pointer-events-none"
        >
          <div className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20 ">
            <a>
              <h2
                className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop pb-7.5 text-current"
                data-testid="heading"
                style={{ color: '#' }}
              >
                2021
                <br />
                가을 겨울 런웨이
              </h2>
            </a>
            <a className="">
              <p className="text-center font_m_semibold lg:font_small_l_semibold pb-15 pt-5 " />
            </a>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
