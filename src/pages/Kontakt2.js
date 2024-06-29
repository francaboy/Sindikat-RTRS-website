import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function Kontakt2() {
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
                    <h1 className="text-white mb-2">Контакт</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrWhite rounded-0 border-0 p-0 fontAlter mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/">Почетна</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Контакт
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <div className="contactSectionWrap pt-7 pb-2 pt-md-10 pb-md-1 pt-lg-16 pb-lg-10 pt-xl-21 pb-xl-16">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6 col-xl-5 mb-6">
                    <div className="pr-lg-10 pr-xl-20">
                      <header className="mb-8">
                        <h2 className="fwSemiBold h2Medium mb-4">
                          Ступите у контакт са нама
                        </h2>
                        <p>
                          Ту смо на располагању за све информације и недоумице
                          свим радницима.
                        </p>
                      </header>
                      <ul className="list-unstyled contactInfoList mb-6">
                        <li>
                          <i className="fas fa-map-marker-alt icn position-absolute">
                            <span className="sr-only">icon</span>
                          </i>
                          <strong className="text-lDark title">Адреса: </strong>
                          Трг Републике Српске 9, Бања Лука
                        </li>
                        <li>
                          <i className="fas fa-phone-alt icn position-absolute">
                            <span className="sr-only">icon</span>
                          </i>
                          <strong className="text-lDark title">
                            Телефон:{" "}
                          </strong>
                          + 387 51 339 800
                        </li>
                        <li>
                          <i className="fas fa-envelope icn position-absolute">
                            <span className="sr-only">icon</span>
                          </i>
                          <strong className="text-lDark title">Е-mail: </strong>
                          rtrs@rtrs.tv
                        </li>
                        <li>
                          <i className="fa-solid fa-globe icn position-absolute">
                            <span className="sr-only">icon</span>
                          </i>
                          <strong className="text-lDark title">
                            Веб-страница:{" "}
                          </strong>
                          www.rtrs.tv
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-7">
                    <div className="widget bg-white shadow contactFormWidget ml-xl-n5 mb-7 mb-md-5">
                      <div className="pt-8 pb-10 px-4 px-md-6 px-xl-8">
                        <h2 className="fwSemiBold h3Medium mb-4">
                          Контактирајте нас
                        </h2>
                        <form action="#" className="commentForm">
                          <div className="row mx-n2">
                            <div className="col-12 col-sm-6 col-md-12 col-lg-6 px-2">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control d-block w-100"
                                  placeholder="Име"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-12 col-lg-6 px-2">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control d-block w-100"
                                  placeholder="Е-mail"
                                />
                              </div>
                            </div>
                            <div className="col-12 px-2">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control d-block w-100"
                                  placeholder="Тема"
                                />
                              </div>
                            </div>
                            <div className="col-12 px-2">
                              <div className="form-group">
                                <textarea
                                  className="form-control w-100 d-block"
                                  placeholder="Напиши поруку…"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn btnTheme d-flex font-weight-bold text-capitalize position-relative border-0 p-0 mt-2 btnWidthSmall"
                            data-hover="Пошаљи поруку"
                          >
                            <span className="d-block btnText">
                              Пошаљи поруку
                            </span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ctMapWrap position-relative w-100">
              <iframe
                title="karta2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.1400938836514!2d17.196741676652795!3d44.77794917896352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e030f619f2f01%3A0x39541b9726b52dd3!2sRTRS%20-%20Radio%20Television%20of%20Republika%20Srpska!5e0!3m2!1sen!2sba!4v1682524973259!5m2!1sen!2sba"
                allowFullScreen
                loading="lazy"
                width="100%"
                height={594}
              />
            </div>
          </div>
        </main>
        {/* ftAreaWrap */}
        <Footer />
      </div>
    </React.Fragment>
  );
}
