import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Dokument1() {
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
                    <h1 className="text-white mb-2">Документ</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrWhite rounded-0 border-0 p-0 fontAlter mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/">Почетна</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="/dokument1">Документ</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Закон о платама
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <article className="dsSingleContent pt-7 pb-2 pt-md-10 pb-md-1 pt-lg-16 pb-lg-10 pt-xl-21 pb-xl-16">
              <div className="container position-relative">
                <div className="row">
                  <div className="col-12 col-lg-8 col-xl-9 order-lg-2 mb-6">
                    <div className="pl-xl-14">
                      <header className="docHeadingHead mb-6">
                        <h2 className="h2vii fwSemiBold mb-1">
                          Закон о платама
                        </h2>
                        <p>Апр 24, 2023 - Сједница НСРТРС</p>
                        <div className="fzMedium">
                          <p>
                            Доношење наведеног закона има за циљ повишење
                            основне плате судија и јавних тужилаца у истом
                            проценту, као и плата запосленим које се обезбјеђују
                            из буџета Републике Српске.
                          </p>
                        </div>
                      </header>
                      <p>
                        У дану за гласање посланици су усвојили, по хитном
                        поступку, допуне Закона о подстицајима у привреди
                        Републике Српске. Посланици су, по хитном поступку,
                        усвојили Закон о заштити, очувању и употреби језика
                        српског народа и ћириличког писма и измјене Закона о
                        Фонду за развој и запошљавање Републике Српске. По
                        хитном поступку усвојене су допуне Закона о запошљавању
                        страних држављана и лица без држављанства и измјене
                        Закона о порезу на доходак.
                      </p>
                      <ul className="list-unstyled listDefault mb-9">
                        <li>
                          Усвојене су измјене и допуне Закона о доприносима по
                          хитном поступку, као и измјене и допуне Закона о
                          републичкој управи.
                        </li>
                        <li>
                          Народна скупштина Републике Српске усвојила је Закон о
                          здравственој заштити, Закон о здравственој
                          документацији и евиденцијама у области здравства, те
                          Закон о аудио-визуелним дјелатностима.
                        </li>
                        <li>
                          Након гласања окончан је први дио 22. редовне сједнице
                          Народне скупштине Републике Српске, а наставак је
                          заказан за 21. јун.
                        </li>
                      </ul>
                      <h3 className="fwSemiBold mb-7">Закачени документи</h3>
                      <ul className="list-unstyled drItemsList mb-11">
                        <li>
                          <div className="drItemRow position-relative d-flex pl-3 pl-md-6 pr-3 pr-sm-27 pr-md-30 py-3 mb-4">
                            <span className="icnWrap flex-shrink-0 pt-1 mr-3">
                              <img
                                src="assets/images/icopdf.png"
                                className="img-fluid"
                                alt="icon"
                              />
                            </span>
                            <div className="descrWrap">
                              <h4 className="fontBase font-weight-normal mb-1">
                                zakon_o_platama.pdf
                              </h4>
                              <strong className="d-block fileSize font-weight-normal">
                                PDF (400kb)
                              </strong>
                              <a href="!#" className="btnDownload fwSemiBold">
                                [ Преузмите ]
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="drItemRow position-relative d-flex pl-3 pl-md-6 pr-3 pr-sm-27 pr-md-30 py-3 mb-4">
                            <span className="icnWrap flex-shrink-0 pt-1 mr-3">
                              <img
                                src="assets/images/icodoc2.png"
                                className="img-fluid"
                                alt="icon"
                              />
                            </span>
                            <div className="descrWrap">
                              <h4 className="fontBase font-weight-normal mb-1">
                                zakon_o_platama.doc
                              </h4>
                              <strong className="d-block fileSize font-weight-normal">
                                DOC (300kb)
                              </strong>
                              <a href="!#" className="btnDownload fwSemiBold">
                                [ Преузмите ]
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
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
