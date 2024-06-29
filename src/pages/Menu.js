import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Fragment>
      {/* phStickyWrap */}
      <div className="phStickyWrap">
        {/* pageHeader */}
        <header id="pageHeader" className="bg-white">
          <div className="hdTopBar py-2 py-xl-3 bg-dark d-none d-md-block">
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <ul className="list-unstyled hdScheduleList mb-0 d-flex flex-wrap align-items-center">
                    <li>
                      <a href="tel:38766000300">
                        <i className="fas fa-phone-alt icn">
                          <span className="sr-only">icon</span>
                        </i>
                        Телефон: +387 66 000 300
                      </a>
                    </li>
                    <li>
                      <time datetime="2011-01-12">
                        <i className="fa-solid fa-clock icn">
                          <span className="sr-only">icon</span>
                        </i>
                        Радно Вријеме: 09.00 - 15.00 часова
                      </time>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="hdFixerWrap py-2 py-md-3 py-xl-5 sSticky bg-white">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light p-0">
                <div className="logo flex-shrink-0 mr-3 mr-xl-8 mr-xlwd-16">
                  <Link to="/">
                    <input
                      type="image"
                      src="assets/images/logo.png"
                      className="img-fluid"
                      alt="nsrtrs"
                    />
                  </Link>
                </div>
                <div className="hdNavWrap flex-grow-1 d-flex align-items-center justify-content-end justify-content-lg-start">
                  <div
                    className="collapse navbar-collapse pageMainNavCollapse mt-2 mt-md-0"
                    id="pageMainNavCollapse"
                  >
                    <ul className="navbar-nav mainNavigation">
                      <li className="nav-item dropdown ddohOpener">
                        <Link
                          to="/"
                          className="nav-link dropdown-toggle dropIcn"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Синдикат
                        </Link>
                        <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                          <ul className="list-unstyled mb-0 hdDropdownList">
                            <li>
                              <Link to="/onama" className="dropdown-item">
                                О нама
                              </Link>
                            </li>
                            <li>
                              <Link to="/ciljevi" className="dropdown-item">
                                Циљеви
                              </Link>
                            </li>
                            <li>
                              <Link to="/struktura" className="dropdown-item">
                                Структура
                              </Link>
                            </li>
                            <li>
                              <Link to="/statut" className="dropdown-item">
                                Статут и правилници
                              </Link>
                            </li>
                            <li>
                              <Link to="/kontakt1" className="dropdown-item">
                                Контакт
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item dropdown ddohOpener">
                        <a
                          className="nav-link dropdown-toggle dropIcn"
                          href="!#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Чланови
                        </a>
                        <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                          <ul className="list-unstyled mb-0 hdDropdownList">
                            <li>
                              <Link to="/clan" className="dropdown-item">
                                Постани члан
                              </Link>
                            </li>
                            <li>
                              <Link to="/prava" className="dropdown-item">
                                Права и обавезе
                              </Link>
                            </li>
                            <li>
                              <Link to="/pomoc" className="dropdown-item">
                                Правна помоћ
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item dropdown ddohOpener">
                        <a
                          className="nav-link dropdown-toggle dropIcn"
                          href="!#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Послодавац
                        </a>
                        <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                          <ul className="list-unstyled mb-0 hdDropdownList">
                            <li>
                              <Link to="/rtrs" className="dropdown-item">
                                РТРС
                              </Link>
                            </li>
                            <li>
                              <Link to="/kontakt2" className="dropdown-item">
                                Контакт
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item dropdown ddohOpener">
                        <a
                          className="nav-link dropdown-toggle dropIcn"
                          href="!#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Република Српска
                        </a>
                        <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                          <ul className="list-unstyled mb-0 hdDropdownList">
                            <li>
                              <Link to="/drzava" className="dropdown-item">
                                Држава
                              </Link>
                            </li>
                            <li>
                              <Link to="/institucije" className="dropdown-item">
                                Институције
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item dropdown ddohOpener">
                        <a
                          className="nav-link dropdown-toggle dropIcn"
                          href="!#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Најчешћа питања
                        </a>
                        <div className="dropdown-menu hdMainDropdown desktopDropOnHover">
                          <ul className="list-unstyled mb-0 hdDropdownList">
                            <li>
                              <Link to="/pitanja" className="dropdown-item">
                                Правна питања
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/konsultacije"
                                className="dropdown-item"
                              >
                                Консултације
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hdRighterWrap d-flex align-items-center justify-content-end">
                  <a
                    href="assets/images/pristupnica.pdf"
                    className="btn btn-outline-secondary bdrWidthAlter ml-3 ml-xl-6 btnHd d-none d-lg-block text-capitalize position-relative border-0 p-0"
                    data-hover="Постани члан"
                  >
                    <span className="d-block btnText">Постани члан</span>
                  </a>
                  <button
                    className="navbar-toggler pgNavOpener ml-2 bdrWidthAlter position-relative"
                    type="button"
                    data-toggle="collapse"
                    data-target="#pageMainNavCollapse"
                    aria-controls="pageMainNavCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </Fragment>
  );
}

export default Menu;
