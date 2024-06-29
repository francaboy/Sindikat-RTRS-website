import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

export default function Pitanja() {
  return (
    <React.Fragment>
      {/* pageWrapper */}
      <div id="pageWrapper">
        <Menu />
        <main>
          <section className="pt-20">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-sm-9 col-lg-7 col-xl-6">
                  <h1 className="display-3 font-weight-bold">Ускоро!</h1>
                  <p>Дио страније је још у развоју.</p>
                </div>
              </div>
              <ul className="list-unstyled d-flex text-center text-capitalize justify-content-center fontAlter countdownList fwMedium pt-8 pb-12 cd100">
                <li>
                  <strong className="d-block font-weight-normal h1 mb-1 days">
                    18
                  </strong>
                  <span className="d-block">Дана</span>
                </li>
                <li>
                  <strong className="d-block font-weight-normal h1 mb-1 hours">
                    12
                  </strong>
                  <span className="d-block">Сати</span>
                </li>
                <li>
                  <strong className="d-block font-weight-normal h1 mb-1 minutes">
                    6
                  </strong>
                  <span className="d-block">минута</span>
                </li>
                <li>
                  <strong className="d-block font-weight-normal h1 mb-1 seconds">
                    30
                  </strong>
                  <span className="d-block">секунди</span>
                </li>
              </ul>
              <div className="row justify-content-center text-center">
                <div className="col-12 col-sm-9 col-md-8 col-lg-6 col-xl-5 px-xl-8">
                  <p>До завршетка комплетне секције!</p>
                  <form action="#" className="mb-11">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control h-auto shadow"
                        placeholder="Е-mail"
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn btnTheme d-flex fwMedium text-capitalize position-relative border-0 p-0"
                          data-hover="Нотификације"
                        >
                          <span className="d-block btnText">Нотификације</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* ftAreaWrap */}
        <Footer />
      </div>
    </React.Fragment>
  );
}
