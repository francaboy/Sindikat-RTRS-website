import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function About() {
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
                    <h1 className="text-white mb-2">О нама</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrWhite rounded-0 border-0 p-0 fontAlter mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/">Почетна</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          О нама
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
                        <h2 className="mb-5">О нама</h2>
                      </header>
                      <p>
                        Независни синдикат радника Радио телевизије Републике
                        Српске је самостална, демократска и независна
                        организација запослених на Радио телевизији Републике
                        Српске. Основани смо на неодређено вријеме ради
                        спровођења активности на заштити права и интереса
                        синдикалног чланства и унапређењу, заштити и промовисању
                        радних и социјалних права. Синдикат има својство правног
                        лица и уписан је у регистре Основног суда Бањалука и
                        Министарства рада и борачко-инвалидске заштите Републике
                        Српске.
                      </p>
                      <p>
                        Синдикат дјелује самостално на принципима солидарности,
                        демократичности, одговорности и јавности рада. Ради
                        остваривања циљева Синдикат изграђује ставове, утврђује
                        стратегију дјеловања, одређује заједничке основе и
                        оквире за преговарање и закључивање колективног уговора,
                        правилника о раду и уговора о раду, усаглашава опште и
                        посебне интересе.
                      </p>{" "}
                      <br />
                      <header className="awbHeadingHead text-lDark mb-4">
                        <p>
                          <span className="d-block">• ЈИБ: 4402098080002</span>
                          <span className="d-block">
                            • Основни суд Бањалука: Ф-1-161/04
                          </span>
                          <span className="d-block">
                            • Класификација дјелатности: 94.20.
                          </span>
                          <span className="d-block">
                            • Назив дјелатности: Дјелатности синдиката
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
