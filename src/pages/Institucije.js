import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Institucije() {
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
                    <h1 className="text-white mb-2">Institucije</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrWhite rounded-0 border-0 p-0 fontAlter mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/">Почетна</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Institucije
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
                        <h2 className="mb-5">Institucije</h2>
                      </header>
                      <p>Институције Републике Српске су:</p>
                      <header className="awbHeadingHead text-lDark mb-4">
                        <p>
                          <a href="https://www.predsjednikrs.net">
                            <span className="d-block">• Предсједник,</span>
                          </a>
                          <a href="https://www.narodnaskupstinars.net">
                            <span className="d-block">
                              • Народна скупштина,
                            </span>
                          </a>
                          <a href="https://www.vladars.net/sr-sp-cyrl/Pages/default.aspx">
                            <span className="d-block">• Влада,</span>
                          </a>
                          <a href="http://www.ustavnisud.org/">
                            <span className="d-block">• Уставни суд,</span>
                          </a>
                          <a href="https://www.predsjednikrs.net/sr/senat-2/clanovi-senata/">
                            <span className="d-block">• Сенат,</span>
                          </a>
                          <a href="https://vijecenarodars.net/">
                            <span className="d-block">• Вијеће народа,</span>
                          </a>
                        </p>
                      </header>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="awbImgHolder text-md-right mt-5 mt-md-0">
                      <input
                        type="image"
                        src="assets/images/img17.jpg"
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
