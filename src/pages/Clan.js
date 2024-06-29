import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function Struktura() {
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
                    <h1 className="text-white mb-2">Постани члан</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrWhite rounded-0 border-0 p-0 fontAlter mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/">Почетна</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Постани члан
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
                        <h2 className="mb-5">Чланство</h2>
                      </header>
                      <p>
                        Редовни чланови са правом гласа су радници који су
                        запослени у Радио телевизији Републике Српске а
                        потписали су приступницу и прихватају обавезе у складу
                        са статутом, програмским циљевима и задацима Синдиката.
                      </p>
                      <p>
                        Приступницу је потребно доставити у канцеларију
                        Синдиката, путем е-поште rtrssindikat@gmail.com или у
                        Сектор економско- финансијских послова РТРС након чега
                        постајете члан Синдиката са припадајућим правима и
                        обавезама.
                      </p>{" "}
                      <br />
                      <header className="awbHeadingHead text-lDark mb-4">
                        <p>
                          <span className="d-block">
                            • Линк приступнице у ПДФ формату добијате кликом на
                            слику приступнице.
                          </span>
                        </p>
                      </header>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="awbImgHolder text-md-right mt-5 mt-md-0">
                      <a href="assets/images/pristupnica.pdf">
                        <input
                          type="image"
                          src="assets/images/img19.jpg"
                          className="img-fluid"
                          alt="image description"
                        />
                      </a>
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
