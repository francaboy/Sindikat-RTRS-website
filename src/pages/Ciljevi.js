import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function Ciljevi() {
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
                    <h1 className="text-white mb-2">Циљеви</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrWhite rounded-0 border-0 p-0 fontAlter mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/">Почетна</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Циљеви
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
                        <h2 className="mb-5">Циљеви</h2>
                      </header>
                      <p>Циљеви Синдиката су:</p>
                      <p> 1. Бољи социо-економски стандард запослених;</p>
                      <p>
                        {" "}
                        2. Унапређење, заштита и промовисање радних права и
                        слобода те стварање бољих услова живота и рада
                        запослених;
                      </p>
                      <p>
                        {" "}
                        3. Унапређење и заштитa професионалних, радних,
                        економских, социјалних, културних и других појединачних
                        и колективних
                      </p>
                      <p> права и интереса радника;</p>
                      <p>
                        {" "}
                        4. Унапређење заштите и здравља на раду радника и
                        подизање квалитета живота, кроз веће учешће у развоју
                        заједнице и
                      </p>
                      <p> друштва у цјелини;</p>
                      <p> 5. Помоћ у остваривању права из радних односа;</p>
                      <p>
                        {" "}
                        6.Учешће у преговорима за закључивање колективних
                        уговора и других нормативних аката који могу имати
                        утицај на материјални, економски и социјални положај
                        радника, а којима се регулишу области рада, запошљавања,
                        заштите и здравља на раду;
                      </p>
                      <p>
                        {" "}
                        7. Едукација на плану неформалног и стручног образовања
                        и усавршавања;
                      </p>
                      <p>
                        {" "}
                        8. Јачање свијести радника о свим видовима дискиминације
                        и механизмима заштите њихових права;
                      </p>
                      <p>
                        {" "}
                        9. Активно учешће у креирању јавних политика, закона и
                        пракси у Републици Српској;
                      </p>
                      <p> 10. Развој Синдиката кроз сталне обуке чланова.</p>
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
        <Footer />
      </div>
    </React.Fragment>
  );
}
