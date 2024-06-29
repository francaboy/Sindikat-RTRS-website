import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function Prava() {
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
                    <h1 className="text-white mb-2">Права и обавезе</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrWhite rounded-0 border-0 p-0 fontAlter mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/">Почетна</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Права и обавезе
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
                        <h2 className="mb-5">Права и обавезе</h2>
                      </header>
                      <p>Право сваког члана Синдиката је да:</p>
                      <header className="awbHeadingHead text-lDark mb-4">
                        <p>
                          <span className="d-block">
                            • На начелу једнакости и равноправности свих чланова
                            Синдиката, дјелује у остваривању циљева Синдиката;
                          </span>{" "}
                          <br />
                          <span className="d-block">
                            • Учествује у раду Синдиката, непосредно и преко
                            органа, на начин предвиђен статутом;
                          </span>{" "}
                          <br />
                          <span className="d-block">
                            • Подноси приједлоге и иницијативе органима
                            Синдиката;
                          </span>
                          <br />
                          <span className="d-block">
                            • Остварује своје активно и пасивно бирачко право у
                            оквиру Синдикта (редовни чланови);
                          </span>
                          <br />
                          <span className="d-block">
                            • Буде благовремено и потпуно информисан о раду и
                            активностима Синдиката.
                          </span>
                          <br />
                        </p>
                      </header>
                      <p>Обавезе сваког члана Синдиката су да:</p> <br />
                      <header className="awbHeadingHead text-lDark mb-4">
                        <p>
                          <span className="d-block">
                            • Дјелује и активно доприноси остваривању циљева
                            Синдиката;
                          </span>{" "}
                          <br />
                          <span className="d-block">
                            • Уз пуну моралну одговорност пропагира на најбољи
                            начин Синдикат и његове активности;
                          </span>{" "}
                          <br />
                          <span className="d-block">
                            • Активно учествује у раду Синдиката у складу са
                            циљевима и задацима;
                          </span>
                          <br />
                          <span className="d-block">
                            • Плаћа чланарину у износу од 1% од плате;
                          </span>
                          <br />
                          <span className="d-block">
                            • Учествује у извршавању договорених задатака које
                            преузме као и да обавља друге послове који су му као
                            такви повјерени;
                          </span>
                          <br />
                          <span className="d-block">
                            • Подиже и чува углед Синдиката.
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
        {/* ftAreaWrap */}
        <Footer />
      </div>
    </React.Fragment>
  );
}
