import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function Pomoc() {
  return (
    <React.Fragment>
      {/* pageWrapper */}
      <div id="pageWrapper">
        <Menu />
        <main>
          <div>
            <header
              className="pageMainHead d-flex position-relative bgCover w-100 text-white"
              style={{ backgroundImage: "url(assets/images/img190.jpg)" }}
            >
              <div className="alignHolder d-flex w-100 align-items-center">
                <div className="align w-100 position-relative">
                  <div className="container">
                    <h1 className="text-white mb-2">Правна помоћ</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrWhite rounded-0 border-0 p-0 fontAlter mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/">Почетна</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Правна помоћ
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <article className="aboutWelcomeBlock pt-7 pb-7 pt-md-10 pb-md-10 pt-lg-16 pb-lg-16 pt-xl-22 pb-xl-22">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6 d-md-flex align-items-md-center">
                    <div className="w-100 pr-xl-12">
                      <header className="awbHeadingHead text-lDark mb-4">
                        <h2 className="mb-5">Правна помоћ</h2>
                      </header>
                      <p>
                        Синдикат у континуитету организује правно савјетовање и
                        помоћ између чланова и професионалаца у области радног
                        права. У фокусу је неформално образовања радника о
                        њиховим правима, дужностима и одговорностима,
                        перспективама развоја и унапређења радног амбијента и
                        социјалног дијалога.
                      </p>
                      <p>
                        Боље разумијевање односа послодавац - радник кроз
                        размјену искустава и знања у области радно-правних
                        односа, заштите од узнемиравања на раду и информисања,
                        са посебним акцентом на стање у медијима дефинитивно
                        доприноси и бољем радном амбијенту, како тренутно тако и
                        на дуже стазе. Имајући у виду и образовни карактер
                        наведених активности Синдикат постиже вишеструку
                        користит не само члановима синдикалне организације него
                        и другим запосленим радницима али и грађанима који сва
                        предавања могу погледати преко јутјуб канала Синдиката.
                      </p>{" "}
                      <br />
                      <p>
                        Чланови Синдиката могу потражити правно савјетовање и/
                        или помоћ на следеће начине:
                      </p>
                      <header className="awbHeadingHead text-lDark mb-4">
                        <p>
                          <span className="d-block">
                            • Канцеларија Синдиката, уторком 09-11 и 12-15
                            часова,
                          </span>
                          <span className="d-block">
                            • Е-пошта: rtrssindikat@gmail.com,
                          </span>
                          <span className="d-block">
                            • Телефон: +387/66/000-300, од 09.00 до 15.00
                            часова.
                          </span>
                        </p>
                      </header>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="awbImgHolder text-md-right mt-5 mt-md-0">
                      <input
                        type="image"
                        src="assets/images/img38.jpg"
                        className="img-fluid"
                        alt="image description"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
