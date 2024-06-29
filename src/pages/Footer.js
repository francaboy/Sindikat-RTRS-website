import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Fragment>
      <div className="ftAreaWrap position-relative bg-gDark fontAlter">
        {/* footerAside */}
        <aside className="footerAside pt-9 pb-sm-2 pt-xl-14 pb-xl-12">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-5 col-xl-3 mb-6">
                <address className="mb-0 ftPlace">
                  <div className="pl-xlwd-11" />
                  <h3 className="ftHeading text-white mb-4">Информације</h3>
                  <ul className="list-unstyled ftpScheduleList mb-0">
                    <li>
                      <i className="fa-solid fa-location-dot icn mr-1 mr-sm-0">
                        <span className="sr-only">icon</span>
                      </i>
                      <strong className="title font-weight-normal text-white">
                        Адреса:
                      </strong>
                      <br />
                      <time datetime="2011-01-12">
                        Трг Републике Српске 9,
                        <br />
                        Бања Лука{" "}
                      </time>
                    </li>
                    <li>
                      <i className="fa-solid fa-clock icn mr-1 mr-sm-0">
                        <span className="sr-only">icon</span>
                      </i>
                      <strong className="title font-weight-normal text-white">
                        Радно вријеме:
                      </strong>
                      <br />
                      <time datetime="2011-01-12">09:00 – 15:00 часова </time>
                    </li>
                    <li>
                      <i className="fas fa-phone-alt icn mr-1 mr-sm-0">
                        <span className="sr-only">icon</span>
                      </i>
                      <strong className="title font-weight-normal text-white">
                        Телефон:
                      </strong>
                      <a href="tel:38766000300">
                        <br />
                        +387 66 000 300
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-envelope icn mr-1 mr-sm-0">
                        <span className="sr-only">icon</span>
                      </i>
                      <strong className="title font-weight-normal text-white">
                        E-mail:
                      </strong>
                      <a href="mailto:rtrssindikat@gmail.com">
                        <br />
                        rtrssindikat@gmail.com
                      </a>
                    </li>
                  </ul>
                </address>
              </div>

              <div className="col-12 col-sm-4 col-md-3 col-xl-2 col-xlwd-3 mb-6">
                <div className="pl-xlwd-11">
                  <h3 className="ftHeading text-white mb-4">Линкови</h3>
                  <ul className="list-unstyled ftsrLinksList mb-0">
                    <li>
                      <Link to="/onama">О нама</Link>
                    </li>
                    <li>
                      <Link to="/ciljevi">Циљеви</Link>
                    </li>
                    <li>
                      <Link to="/struktura">Структура</Link>
                    </li>
                    <li>
                      <Link to="/vijesti">Вијести</Link>
                    </li>
                    <li>
                      <Link to="/kontakt1">Контакт</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-8 col-md-12 col-xl-4 mb-6">
                <div className="ml-xl-n1 ml-xlwd-n7">
                  <h3 className="ftHeading text-white mb-5">
                    Најновије вијести и информације Независног синдиката РТРС-а
                  </h3>
                  <form action="#" className="ftSubscribeForm">
                    <label className="d-block mb-7">
                      Пратите најновије вијести и дешавања нашег синдиката путем
                      е-поште.
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Унесите вашу адресу"
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn btnTheme d-flex font-weight-bold text-capitalize position-relative border-0 p-0"
                          data-hover="Пошаљи"
                        >
                          <span className="d-block btnText">Пошаљи</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </aside>
        {/* pageFooter */}
        <footer
          id="pageFooter"
          className="text-center bg-dark pt-6 pb-3 pt-md-8 pb-md-5"
        >
          <div className="container">
            <p>
              Made by <a href="https://www.srdjanmilosevic.com">Srđan.</a>{" "}
              &copy; Нeзависни синдикат РТРС-а. <br className="d-md-none" />
              Сва права задржана
            </p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default Footer;
