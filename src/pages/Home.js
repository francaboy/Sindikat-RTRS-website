import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <React.Fragment>
      {/* pageWrapper */}
      <div id="pageWrapper">
        <Menu />
        <main>
          <div className="introBlock ibSlider">
            <div>
              <article className="d-flex w-100 position-relative ibColumn text-white overflow-hidden">
                <div className="alignHolder d-flex align-items-center w-100">
                  <div className="align w-100 pt-20 pb-20 pt-md-40 pb-md-30 px-md-17">
                    <div className="container position-relative">
                      <div className="row">
                        <div className="col-12 col-md-9 col-xl-7 fzMedium">
                          <h1 className="text-white mb-4 h1Large">
                            Добродошли на званичну страницу Независног синдиката
                            РТРС-а
                          </h1>
                          <p>
                            Овдје можете пронаћи све информације везане за
                            запослене у РТРС-у.
                          </p>
                          <Link
                            to="/onama"
                            className="btn btnTheme font-weight-bold btnMinSm text-capitalize position-relative border-0 p-0 mt-6"
                            data-hover="Сазнајте више"
                          >
                            <span className="d-block btnText">
                              Сазнајте више
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  className="ibBgImage bgCover position-absolute"
                  style={{ backgroundImage: "url(assets/images/img01.jpg)" }}
                />
              </article>
            </div>
            <div>
              <article className="d-flex w-100 position-relative ibColumn text-white overflow-hidden">
                <div className="alignHolder d-flex align-items-center w-100">
                  <div className="align w-100 pt-20 pb-20 pt-md-40 pb-md-30 px-md-17">
                    <div className="container position-relative">
                      <div className="row">
                        <div className="col-12 col-md-9 col-xl-7 fzMedium">
                          <h1 className="text-white mb-4 h1Large">
                            Добродошли на званичну страницу Независног синдиката
                            РТРС-а
                          </h1>
                          <p>
                            Овдје можете пронаћи све информације везане за
                            запослене у РТРС-у.
                          </p>
                          <Link
                            to="/onama"
                            className="btn btnTheme font-weight-bold btnMinSm text-capitalize position-relative border-0 p-0 mt-6"
                            data-hover="Сазнајте више"
                          >
                            <span className="d-block btnText">
                              Сазнајте више
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  className="ibBgImage bgCover position-absolute"
                  style={{ backgroundImage: "url(assets/images/img02.jpg)" }}
                />
              </article>
            </div>
            <div>
              <article className="d-flex w-100 position-relative ibColumn text-white overflow-hidden">
                <div className="alignHolder d-flex align-items-center w-100">
                  <div className="align w-100 pt-20 pb-20 pt-md-40 pb-md-30 px-md-17">
                    <div className="container position-relative">
                      <div className="row">
                        <div className="col-12 col-md-9 col-xl-7 fzMedium">
                          <h1 className="text-white mb-4 h1Large">
                            Добродошли на званичну страницу Независног синдиката
                            РТРС-а
                          </h1>
                          <p>
                            Овдје можете пронаћи све информације везане за
                            запослене у РТРС-у.
                          </p>
                          <Link
                            to="/onama"
                            className="btn btnTheme font-weight-bold btnMinSm text-capitalize position-relative border-0 p-0 mt-6"
                            data-hover="Сазнајте више"
                          >
                            <span className="d-block btnText">
                              Сазнајте више
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  className="ibBgImage bgCover position-absolute"
                  style={{ backgroundImage: "url(assets/images/img03.jpg)" }}
                />
              </article>
            </div>
          </div>
          <aside className="featuresAsideBlock position-relative text-white">
            <div className="container">
              <div className="flatpWrap position-relative mt-n8 mt-md-n18">
                <ul className="list-unstyled fabFeaturesList mb-0 d-flex overflow-hidden flex-wrap">
                  <li>
                    <a
                      href="!#"
                      className="fflColumn d-block w-100 text-center px-2 pt-4 pb-10"
                    >
                      <span className="icnWrap d-flex align-items-center justify-content-center mx-auto mb-4 rounded-circle">
                        <i className="fa-solid fa-scale-balanced">
                          <span className="sr-only">icon</span>
                        </i>
                      </span>
                      <h2 className="mb-0">Заштита права радника</h2>
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      className="fflColumn d-block w-100 text-center px-2 pt-4 pb-10"
                    >
                      <span className="icnWrap d-flex align-items-center justify-content-center mx-auto mb-4 rounded-circle">
                        <i className="fa-solid fa-handshake">
                          <span className="sr-only">icon</span>
                        </i>
                      </span>
                      <h2 className="mb-0">Солидарност и подршка радницима</h2>
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      className="fflColumn d-block w-100 text-center px-2 pt-4 pb-10"
                    >
                      <span className="icnWrap d-flex align-items-center justify-content-center mx-auto mb-4 rounded-circle">
                        <i className="fa-solid fa-school">
                          <span className="sr-only">icon</span>
                        </i>
                      </span>
                      <h2 className="mb-0">Едукација радника</h2>
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      className="fflColumn d-block w-100 text-center px-2 pt-4 pb-10"
                    >
                      <span className="icnWrap d-flex align-items-center justify-content-center mx-auto mb-4 rounded-circle">
                        <i className="fa-solid fa-user">
                          <span className="sr-only">icon</span>
                        </i>
                      </span>
                      <h2 className="mb-0">
                        Јачање свијести о радничким правима
                      </h2>
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      className="fflColumn d-block w-100 text-center px-2 pt-4 pb-10"
                    >
                      <span className="icnWrap d-flex align-items-center justify-content-center mx-auto mb-4 rounded-circle">
                        <i className="fa-solid fa-briefcase">
                          <span className="sr-only">icon</span>
                        </i>
                      </span>
                      <h2 className="mb-0">Побољшавање услова рада</h2>
                    </a>
                  </li>
                  <li>
                    <a
                      href="!#"
                      className="fflColumn d-block w-100 text-center px-2 pt-4 pb-10"
                    >
                      <span className="icnWrap d-flex align-items-center justify-content-center mx-auto mb-4 rounded-circle">
                        <i className="fa-solid fa-envelope">
                          <span className="sr-only">icon</span>
                        </i>
                      </span>
                      <h2 className="mb-0">Колективни преговори</h2>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="fabBtNoteTextWrap text-center fontAlter fzMedium pt-6 pt-md-10 pb-6 pb-md-10 pb-lg-14">
              <div className="container">
                <div className="d-lg-flex justify-content-center align-items-center">
                  <p className="mb-lg-0">
                    О раду синдиката и залагањима истог можете погледати кликом
                    на дугме
                  </p>
                  <Link
                    to="/ciljevi"
                    className="btn btn-dark btnSwitchDark fwMedium position-relative border-0 p-0 btnCustomSmall mt-md-1 mt-lg-0 ml-lg-4"
                    data-hover="Прочитајте детаљније"
                  >
                    <span className="d-block btnText fwMedium">
                      Прочитајте детаљније
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          <section className="upcomeventsBlock position-relative pt-7 pb-3 pt-md-9 pb-md-6 pt-lg-14 pb-lg-11 pt-xl-20 pb-xl-16">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <div className="pr-lg-8">
                    <header className="headingHead mb-6 mb-lg-8 mb-xl-12">
                      <div className="row align-items-end">
                        <div className="col-12 col-sm-6 col-md-7">
                          <h2 className="mb-sm-0 fwSemiBold h2Small">
                            Сљедеће сједнице
                          </h2>
                        </div>
                      </div>
                    </header>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <article className="ueEveColumn position-relative shadow bg-white mb-6">
                          <div className="imgHolder position-relative">
                            <a href="!#">
                              <input
                                type="image"
                                src="assets/images/img09.jpg"
                                className="img-fluid d-block w-100"
                                alt="image description"
                              />
                            </a>
                            <time
                              className="ueTimeTag position-absolute text-center d-flex bg-white fontAlter fwSemiBold text-lDark text-uppercase"
                              datetime="2011-01-12"
                            >
                              <span className="d-block text-white textDay flex-shrink-0 font-weight-bold">
                                01
                              </span>
                              <span className="d-block py-2 px-3">
                                Мај 2023
                              </span>
                            </time>
                          </div>
                          <div className="ueDescriptionWrap pt-5 pb-8 px-5">
                            <strong className="d-block ueCatTitle fwSemiBold text-secondary mb-2">
                              Сједница НСРТРС
                            </strong>
                            <h3 className="h3Small fwMedium mb-3">
                              <a href="!#">Нови колективни уговор</a>
                            </h3>
                            <address>
                              <ul className="list-unstyled ueScheduleList">
                                <li>
                                  <i className="fa-solid fa-clock icn position-absolute">
                                    <span className="sr-only">icon</span>
                                  </i>
                                  Почетак 12.00 часова
                                </li>
                                <li>
                                  <i className="fa-solid fa-location-dot icn position-absolute">
                                    <span className="sr-only">icon</span>
                                  </i>
                                  Мултимедијална сала
                                </li>
                              </ul>
                            </address>
                          </div>
                        </article>
                      </div>
                      <div className="col-12 col-md-6">
                        <article className="ueEveColumn position-relative shadow bg-white mb-6">
                          <div className="imgHolder position-relative">
                            <a href="!#">
                              <input
                                type="image"
                                src="assets/images/img10.jpg"
                                className="img-fluid d-block w-100"
                                alt="image description"
                              />
                            </a>
                            <time
                              className="ueTimeTag position-absolute text-center d-flex bg-white fontAlter fwSemiBold text-lDark text-uppercase"
                              datetime="2011-01-12"
                            >
                              <span className="d-block text-white textDay flex-shrink-0 font-weight-bold">
                                02
                              </span>
                              <span className="d-block py-2 px-3">
                                Јун 2023
                              </span>
                            </time>
                          </div>
                          <div className="ueDescriptionWrap pt-5 pb-8 px-5">
                            <strong className="d-block ueCatTitle fwSemiBold text-secondary mb-2">
                              Сједница НСРТРС
                            </strong>
                            <h3 className="h3Small fwMedium mb-3">
                              <a href="!#">Повећање плата радника</a>
                            </h3>
                            <address>
                              <ul className="list-unstyled ueScheduleList">
                                <li>
                                  <i className="fa-solid fa-clock icn position-absolute">
                                    <span className="sr-only">icon</span>
                                  </i>
                                  Почетак 13.00 часова
                                </li>
                                <li>
                                  <i className="fa-solid fa-location-dot icn position-absolute">
                                    <span className="sr-only">icon</span>
                                  </i>
                                  Мултимедијална сала
                                </li>
                              </ul>
                            </address>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <aside className="col-12 col-lg-4 uecColBg position-static">
                  <div className="pl-lg-5">
                    <header className="headingHead mb-6 mb-lg-8 mb-xl-12">
                      <h2 className="mb-0 fwSemiBold h2Small">Документи</h2>
                    </header>
                    <article className="cdColumnWidget bg-white shadow px-6 pt-6 pb-5 mb-6">
                      <i className="ccwIcn fa-regular fa-file-lines d-flex align-items-center justify-content-center text-white rounded-lg w-100 mb-6">
                        <span className="sr-only">icon</span>
                      </i>
                      <ul className="list-unstyled cdDocsList mb-0">
                        <li>
                          <h3 className="font-weight-normal cdTitle mb-1">
                            <Link to="/dokument1">Закон о платама</Link>
                          </h3>
                          <time datetime="2011-01-12" className="d-block">
                            Април 4, 2023
                          </time>
                        </li>
                        <li>
                          <h3 className="font-weight-normal cdTitle mb-1">
                            <Link to="/dokument2">Колективни уговор</Link>
                          </h3>
                          <time datetime="2011-01-12" className="d-block">
                            Мај 15, 2023
                          </time>
                        </li>
                        <li>
                          <h3 className="font-weight-normal cdTitle mb-1">
                            <Link to="/dokument3">Закон o годишњем одмору</Link>
                          </h3>
                          <time datetime="2011-01-12" className="d-block">
                            Мај 8, 2023
                          </time>
                        </li>
                        <li>
                          <h3 className="font-weight-normal cdTitle mb-1">
                            <Link to="/dokument4">Хонорарни уговори</Link>
                          </h3>
                          <time datetime="2011-01-12" className="d-block">
                            Април 9, 2023
                          </time>
                        </li>
                      </ul>
                      <footer className="ccwFoot text-center mt-2 pt-4">
                        <Link to="/dokumenti" className="btn-link fontAlter">
                          Сви документи{" "}
                          <i className="fas fa-chevron-right blIcn">
                            <span className="sr-only">icon</span>
                          </i>
                        </Link>
                      </footer>
                    </article>
                  </div>
                </aside>
              </div>
            </div>
          </section>
          <section className="newsPulicationsBlock position-relative bg-light overflow-hidden pt-7 pb-4 pt-md-10 pb-md-4 pt-lg-16 pb-lg-10 pt-xl-22 pb-xl-16">
            <div className="container position-relative npbHolder">
              <div className="row">
                <div className="col-12 col-lg-3">
                  <header className="headingHead pt-2 mb-7 mb-lg-0">
                    <h2 className="fwSemiBold mb-2">Актуелне вијести</h2>
                    <p>
                      Пратите најактуелније вијести везане за рад синдиката.
                    </p>
                    <Link
                      to="/vijesti"
                      className="btn btn-outline-secondary bdrWidthAlter text-capitalize position-relative border-0 p-0 mt-5 btnXsMinWidth"
                      data-hover="Све вијести"
                    >
                      <span className="d-block btnText">Све вијести</span>
                    </Link>
                  </header>
                </div>
                <div className="col-12 col-lg-9">
                  <div className="row">
                    <div className="col-12 col-md-6 col-xl-4">
                      <article className="npbColumn shadow bg-white mb-6">
                        <div className="imgHolder position-relative">
                          <a href="!#">
                            <input
                              type="image"
                              src="assets/images/img12.jpg"
                              className="img-fluid w-100 d-block"
                              alt="image description"
                            />
                          </a>
                          <time
                            datetime="2011-01-12"
                            className="npbTimeTag font-weight-bold fontAlter position-absolute text-white px-2 py-1"
                          >
                            15 Мај 2023
                          </time>
                        </div>
                        <div className="npbDescriptionWrap px-5 pt-8 pb-5">
                          <strong className="d-block npbcmWrap font-weight-normal mb-1">
                            <span className="mr-5">Админ</span>
                          </strong>
                          <h3 className="fwSemiBold mb-6">
                            <Link to="/vijesti1">
                              Договорено повећање плата
                            </Link>
                          </h3>
                          <Link
                            to="/vijesti1"
                            className="btnCr d-inline-block align-top fontAlter"
                          >
                            Наставите читати{" "}
                            <i className="fa-solid fa-arrow-right bcIcn ml-2 align-middle">
                              <span className="sr-only">icon</span>
                            </i>
                          </Link>
                        </div>
                      </article>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <article className="npbColumn shadow bg-white mb-6">
                        <div className="imgHolder position-relative">
                          <a href="!#">
                            <input
                              type="image"
                              src="assets/images/img13.jpg"
                              className="img-fluid w-100 d-block"
                              alt="image description"
                            />
                          </a>
                          <time
                            datetime="2011-01-12"
                            className="npbTimeTag font-weight-bold fontAlter position-absolute text-white px-2 py-1"
                          >
                            12 Јун 2023
                          </time>
                        </div>
                        <div className="npbDescriptionWrap px-5 pt-8 pb-5">
                          <strong className="d-block npbcmWrap font-weight-normal mb-1">
                            <span className="mr-5">Админ</span>
                          </strong>
                          <h3 className="fwSemiBold mb-6">
                            <Link to="/vijesti2">
                              Нови закон о пословању РТРС-а
                            </Link>
                          </h3>
                          <Link
                            to="/vijesti2"
                            className="btnCr d-inline-block align-top fontAlter"
                          >
                            Наставите читати{" "}
                            <i className="fa-solid fa-arrow-right bcIcn ml-2 align-middle">
                              <span className="sr-only">icon</span>
                            </i>
                          </Link>
                        </div>
                      </article>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <article className="npbColumn shadow bg-white mb-6">
                        <div className="imgHolder position-relative">
                          <a href="!#">
                            <input
                              type="image"
                              src="assets/images/img12.jpg"
                              className="img-fluid w-100 d-block"
                              alt="image description"
                            />
                          </a>
                          <time
                            datetime="2011-01-12"
                            className="npbTimeTag font-weight-bold fontAlter position-absolute text-white px-2 py-1"
                          >
                            08 Јул 2023
                          </time>
                        </div>
                        <div className="npbDescriptionWrap px-5 pt-8 pb-5">
                          <strong className="d-block npbcmWrap font-weight-normal mb-1">
                            <span className="mr-5">Админ</span>
                          </strong>
                          <h3 className="fwSemiBold mb-6">
                            <Link to="/vijesti3">Тендер о дигитализацији</Link>
                          </h3>
                          <Link
                            to="/vijesti3"
                            className="btnCr d-inline-block align-top fontAlter"
                          >
                            Наставите читати{" "}
                            <i className="fa-solid fa-arrow-right bcIcn ml-2 align-middle">
                              <span className="sr-only">icon</span>
                            </i>
                          </Link>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span
              className="npbBgPattern w-100 h-100 bgCover position-absolute inaccessible"
              style={{ backgroundImage: "url(assets/images/bgPattern2.jpg)" }}
            />
          </section>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
