import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Drzava() {
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
                    <h1 className="text-white mb-2">Држава</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrWhite rounded-0 border-0 p-0 fontAlter mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/">Почетна</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Држава
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
                        <h2 className="mb-5">Држава</h2>
                      </header>
                      <p>
                        Република Српска је један од два једнакоправна ентитета
                        који чине Босну и Херцеговину. Налази се у југоисточној
                        Европи, те на западном дијелу Балканског полуострва.
                      </p>
                      <p>
                        Настала је 9. јануара 1992, Одлуком Скупштине српског
                        народа у Босни и Херцеговини, а међународно је
                        верификована потписивањем Општег оквирног споразума за
                        мир у БиХ 1995. године. Површина Републике Српске износи
                        25.053 квадратна километра, а према подацима Републичког
                        завода за статистику, по попису становништва из 2013.
                        године, у Републици Српској живи 1.170.342 становника.
                      </p>
                      <p>
                        Република Српска је територијално организована у 8
                        градова и 56 општина. Списак градова и општина можете
                        погледати на званичном сајту Владе Републике Српске,
                        Министарство управе и локалне самоуправе.
                        Административни центар и највећи град у Републици
                        Српској је Бања Лука.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="awbImgHolder text-md-right mt-5 mt-md-0">
                      <input
                        type="image"
                        src="assets/images/img18.jpg"
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
