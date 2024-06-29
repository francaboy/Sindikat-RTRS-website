import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function RTRS() {
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
                    <h1 className="text-white mb-2">РТРС</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrWhite rounded-0 border-0 p-0 fontAlter mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/">Почетна</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          РТРС
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
                        <h2 className="mb-5">РТРС</h2>
                      </header>
                      <p>
                        РТРС је јединствени правни, економски и пословни
                        субјекат чију основну организациону структуру чине
                        сектори и службе. Сектори представљају заокружену
                        организациону техничко-технолошку цјелину у оквиру
                        РТРС-а а служба представља организациону цјелину у којој
                        се обављају послови одрђеног радног подручја РТРС.
                      </p>{" "}
                      <br />
                      <p>У РТРС су организовани сљедећи сектори:</p>
                      <header className="awbHeadingHead text-lDark mb-4">
                        <p>
                          <span className="d-block">• Дирекција РТРС,</span>
                          <span className="d-block">
                            • Сектор програма телевизије Републике Српске,
                          </span>
                          <span className="d-block">
                            • Сектор програма радија Републике Српске,
                          </span>
                          <span className="d-block">
                            • Сектор економско финансијских послова,
                          </span>
                          <span className="d-block">
                            • Сектор Медија центар РТРС.
                          </span>
                        </p>
                      </header>
                      <p>
                        Оснивач Радио телевизије Републике Српске је Република
                        Српска а права и обавезе према Радио телевизији
                        Републике Српске врши Народна скупштина Републике Српске
                        у складу са законом. Основни задатак и обавеза РТРС
                        јесте да, пласманом разноврсних и вјеродостојних
                        информација, истинито информише јавност о политичким,
                        привредним, социјалним, здравственим, културним,
                        образовним, научним, вјерским, еколошким, спортским и
                        другим догађајима, подстиче демократске процесе, осигура
                        одговарајућу заступљеност непристрасних вијести и
                        програма о актуелним дешавањима, у ударно и у друго
                        вријеме, информативног, културно-умјетничког,
                        образовног, дјечијег, спортског и забавног програма, као
                        и да програми највишег квалитета буду доступни јавности
                        Републике Српске.
                      </p>
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
