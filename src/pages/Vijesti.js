import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function Vijesti() {
  return (
    <React.Fragment>
      {/* pageWrapper */}
      <div id="pageWrapper">
        <Menu />
        <main>
          <div>
            <header
              className="pageMainHead d-flex position-relative bgCover w-100 text-white"
              style={{ backgroundImage: "url(assets/images/img62.jpg)" }}
            >
              <div className="alignHolder d-flex w-100 align-items-center">
                <div className="align w-100 position-relative">
                  <div className="container">
                    <h1 className="text-white mb-2">Све вијести</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrWhite rounded-0 border-0 p-0 fontAlter mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/">Почетна</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="/vijesti">Вијести</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Све вијести
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <section className="ItemfullBlock pt-7 pb-7 pt-md-10 pb-md-9 pt-lg-14 pb-lg-13 pt-xl-22 pb-xl-19">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <article className="npbColumn shadow bg-white mb-6 mb-xl-12">
                      <div className="imgHolder position-relative">
                        <a href="vijest-1.html">
                          <input
                            type="image"
                            src="assets/images/img11.jpg"
                            className="img-fluid w-100 d-block"
                            alt="image description"
                          />
                        </a>
                        <time
                          dateTime="2011-01-12"
                          className="npbTimeTag font-weight-bold fontAlter position-absolute text-white px-2 py-1"
                        >
                          15 Maj 2023
                        </time>
                      </div>
                      <div className="npbDescriptionWrap px-5 pt-8 pb-5">
                        <strong className="d-block npbcmWrap font-weight-normal mb-1">
                          <span className="mr-5">Админ</span>
                        </strong>
                        <h3 className="fwSemiBold mb-5">
                          <a href="vijest-1.html">Договорено повећање плата</a>
                        </h3>
                        <a
                          href="vijest-1.html"
                          className="btnCr d-inline-block align-top fontAlter"
                        >
                          Наставите читати
                          <i className="fa-solid fa-arrow-right bcIcn ml-2 align-middle">
                            <span className="sr-only">icon</span>
                          </i>
                        </a>
                      </div>
                    </article>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <article className="npbColumn shadow bg-white mb-6 mb-xl-12">
                      <div className="imgHolder position-relative">
                        <a href="vijest-2.html">
                          <input
                            type="image"
                            src="assets/images/img11.jpg"
                            className="img-fluid w-100 d-block"
                            alt="image description"
                          />
                        </a>
                        <time
                          dateTime="2011-01-12"
                          className="npbTimeTag font-weight-bold fontAlter position-absolute text-white px-2 py-1"
                        >
                          12 Јун 2023
                        </time>
                      </div>
                      <div className="npbDescriptionWrap px-5 pt-8 pb-5">
                        <strong className="d-block npbcmWrap font-weight-normal mb-1">
                          <span className="mr-5">Админ</span>
                        </strong>
                        <h3 className="fwSemiBold mb-5">
                          <a href="vijest-2.html">
                            Нови закон о пословању РТРС-а
                          </a>
                        </h3>
                        <a
                          href="vijest-2.html"
                          className="btnCr d-inline-block align-top fontAlter"
                        >
                          Наставите читати
                          <i className="fa-solid fa-arrow-right bcIcn ml-2 align-middle">
                            <span className="sr-only">icon</span>
                          </i>
                        </a>
                      </div>
                    </article>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <article className="npbColumn shadow bg-white mb-6 mb-xl-12">
                      <div className="imgHolder position-relative">
                        <a href="vijest-3.html">
                          <input
                            type="image"
                            src="assets/images/img11.jpg"
                            className="img-fluid w-100 d-block"
                            alt="image description"
                          />
                        </a>
                        <time
                          dateTime="2011-01-12"
                          className="npbTimeTag font-weight-bold fontAlter position-absolute text-white px-2 py-1"
                        >
                          08 Јул 2023
                        </time>
                      </div>
                      <div className="npbDescriptionWrap px-5 pt-8 pb-5">
                        <strong className="d-block npbcmWrap font-weight-normal mb-1">
                          <span className="mr-5">Админ</span>
                        </strong>
                        <h3 className="fwSemiBold mb-5">
                          <a href="vijest-3.html">Тендер о дигитализацији</a>
                        </h3>
                        <a
                          href="vijest-3.html"
                          className="btnCr d-inline-block align-top fontAlter"
                        >
                          Наставите читати
                          <i className="fa-solid fa-arrow-right bcIcn ml-2 align-middle">
                            <span className="sr-only">icon</span>
                          </i>
                        </a>
                      </div>
                    </article>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <article className="npbColumn shadow bg-white mb-6 mb-xl-12">
                      <div className="imgHolder position-relative">
                        <a href="vijest-4.html">
                          <input
                            type="image"
                            src="assets/images/img11.jpg"
                            className="img-fluid w-100 d-block"
                            alt="image description"
                          />
                        </a>
                        <time
                          dateTime="2011-01-12"
                          className="npbTimeTag font-weight-bold fontAlter position-absolute text-white px-2 py-1"
                        >
                          12 Јун 2023
                        </time>
                      </div>
                      <div className="npbDescriptionWrap px-5 pt-8 pb-5">
                        <strong className="d-block npbcmWrap font-weight-normal mb-1">
                          <span className="mr-5">Админ</span>
                        </strong>
                        <h3 className="fwSemiBold mb-5">
                          <a href="vijest-4.html">
                            Обнова возног парка и паркинга
                          </a>
                        </h3>
                        <a
                          href="vijest-4.html"
                          className="btnCr d-inline-block align-top fontAlter"
                        >
                          Наставите читати
                          <i className="fa-solid fa-arrow-right bcIcn ml-2 align-middle">
                            <span className="sr-only">icon</span>
                          </i>
                        </a>
                      </div>
                    </article>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <article className="npbColumn shadow bg-white mb-6 mb-xl-12">
                      <div className="imgHolder position-relative">
                        <a href="vijest-5.html">
                          <input
                            type="image"
                            src="assets/images/img11.jpg"
                            className="img-fluid w-100 d-block"
                            alt="image description"
                          />
                        </a>
                        <time
                          dateTime="2011-01-12"
                          className="npbTimeTag font-weight-bold fontAlter position-absolute text-white px-2 py-1"
                        >
                          22 Мај 2023
                        </time>
                      </div>
                      <div className="npbDescriptionWrap px-5 pt-8 pb-5">
                        <strong className="d-block npbcmWrap font-weight-normal mb-1">
                          <span className="mr-5">Админ</span>
                        </strong>
                        <h3 className="fwSemiBold mb-5">
                          <a href="vijest-5.html">Куповина ДСНГ возила</a>
                        </h3>
                        <a
                          href="vijest-5.html"
                          className="btnCr d-inline-block align-top fontAlter"
                        >
                          Наставите читати
                          <i className="fa-solid fa-arrow-right bcIcn ml-2 align-middle">
                            <span className="sr-only">icon</span>
                          </i>
                        </a>
                      </div>
                    </article>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <article className="npbColumn shadow bg-white mb-6 mb-xl-12">
                      <div className="imgHolder position-relative">
                        <a href="vijest-6.html">
                          <input
                            type="image"
                            src="assets/images/img11.jpg"
                            className="img-fluid w-100 d-block"
                            alt="image description"
                          />
                        </a>
                        <time
                          dateTime="2011-01-12"
                          className="npbTimeTag font-weight-bold fontAlter position-absolute text-white px-2 py-1"
                        >
                          17 Јун 2023
                        </time>
                      </div>
                      <div className="npbDescriptionWrap px-5 pt-8 pb-5">
                        <strong className="d-block npbcmWrap font-weight-normal mb-1">
                          <span className="mr-5">Админ</span>
                        </strong>
                        <h3 className="fwSemiBold mb-5">
                          <a href="vijest-6.html">
                            Уговорени нови ТВ предајници
                          </a>
                        </h3>
                        <a
                          href="vijest-6.html"
                          className="btnCr d-inline-block align-top fontAlter"
                        >
                          Наставите читати
                          <i className="fa-solid fa-arrow-right bcIcn ml-2 align-middle">
                            <span className="sr-only">icon</span>
                          </i>
                        </a>
                      </div>
                    </article>
                  </div>
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center pt-2">
                      <li className="page-item disabled">
                        <a className="page-link" href="!#">
                          Previous
                        </a>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <a className="page-link" href="!#">
                          1 <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="!#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="!#">
                          Даље{" "}
                          <i className="fas fa-chevron-right icn">
                            <span className="sr-only">icon</span>
                          </i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
