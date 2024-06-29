import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Vijesti2() {
  return (
    <React.Fragment>
      {/* pageWrapper */}
      <div id="pageWrapper">
        <Menu />
        <main>
          <div>
            <header
              className="pageMainHead d-flex position-relative bgCover w-100 text-white"
              style={{ backgroundImage: "url(assets/images/img62.jpg)" }}
            >
              <div className="alignHolder d-flex w-100 align-items-center">
                <div className="align w-100 position-relative">
                  <div className="container">
                    <h1 className="text-white mb-2">Вијест</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrWhite rounded-0 border-0 p-0 fontAlter mb-0">
                        <li className="breadcrumb-item">
                          <Link to="/">Почетна</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link to="/vijesti2">Вијест</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Закон o годишњем одмору
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            <article className="newsSingleWrap pt-7 pb-2 pt-md-9 pb-md-4 pt-lg-14 pb-lg-8 pt-xl-22 pb-xl-13">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-8 col-xl-9 mb-6">
                    <div className="pr-xl-14">
                      <div className="imgHolder mb-4 mb-md-8 position-relative">
                        <div className="nrcImageSlider">
                          <div>
                            <div className="imgWrap">
                              <input
                                type="image"
                                src="assets/images/img89.jpg"
                                className="img-fluid w-100"
                                alt="image description"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="imgWrap">
                              <input
                                type="image"
                                src="assets/images/img90.jpg"
                                className="img-fluid w-100"
                                alt="image description"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="imgWrap">
                              <input
                                type="image"
                                src="assets/images/img88.jpg"
                                className="img-fluid w-100"
                                alt="image description"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <header className="nrcHead">
                        <strong className="d-block fwMedium title mb-1">
                          <i className="fa-solid fa-globe">
                            <span className="sr-only">icon</span>
                          </i>
                          <time dateTime="2011-01-12">Maj 15, 2023</time>-
                          Независни синдикат Радио-Телевизије Републике Српске
                        </strong>
                        <h2 className="h2vii fwSemiBold mb-5">Lorem ipsum</h2>
                      </header>
                      <p>
                        <span className="dropCap">L</span>Lorem ipsum dolor sit
                        amet consectetur, adipisicing elit. Fugit laudantium
                        alias aspernatur voluptate sit beatae ea eum modi
                        suscipit. Nobis ipsam quaerat adipisci delectus eaque
                        dolorum incidunt alias cupiditate placeat?
                      </p>
                      <ol className="nwzPostDetailList list-unstyled pt-5 m-0">
                        <li>
                          <h4 className="h3 mb-4">1.Lorem ipsum:</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Incidunt, impedit sequi. Aliquam voluptate
                            tempora sint nesciunt, quisquam laborum nisi eaque
                            necessitatibus velit consectetur, repellat tempore,
                            aliquid porro. Voluptas, quam vitae.
                          </p>
                          <div className="row my-6">
                            <div className="col-12 col-sm-6">
                              <div className="imgWarp mb-3 mb-sm-0">
                                <input
                                  type="image"
                                  src="assets/images/img192.jpg"
                                  className="img-fluid w-100"
                                  alt="image description"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div className="imgWarp">
                                <input
                                  type="image"
                                  src="assets/images/img193.jpg"
                                  className="img-fluid w-100"
                                  alt="image description"
                                />
                              </div>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non soluta voluptate numquam atque voluptates
                            ea veniam iste dolore enim, consequatur ad nesciunt
                            corporis ipsa dolorum, totam maiores quisquam
                            laborum repudiandae.
                          </p>
                          <blockquote className="meetQuote fontAlter text-lDark mt-9 mb-7 py-1 pl-4 pl-lg-8 pr-md-12 pr-lg-20 pr-xl-28">
                            <q className="d-block mb-4">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate magni similique totam
                              expedita libero dignissimos neque voluptatum
                              numquam illum iste ex dolor, enim assumenda cum
                              velit perspiciatis dicta maiores commodi.
                            </q>
                            <cite className="d-block fsNormal">
                              Lorem ipsum,{" "}
                              <span className="fontBase ctSubtitleText">
                                Lorem
                              </span>
                            </cite>
                          </blockquote>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Asperiores tempora id in veniam quos aliquid
                            iure iusto laborum praesentium corporis et pariatur
                            numquam cupiditate, voluptatum, ut minima libero non
                            itaque?
                          </p>
                        </li>
                        <li>
                          <h4 className="h3 mb-4">2. Lorem ipsum:</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Modi minima soluta reiciendis dolores quam
                            beatae reprehenderit dignissimos ab enim placeat
                            eligendi non, nisi ex voluptate magni, aperiam qui,
                            similique itaque!
                          </p>
                        </li>
                        <li>
                          <h4 className="h3 mb-4">3. Lorem ipsum:</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi in quis veritatis mollitia, impedit
                            dolore minus qui voluptas explicabo. Voluptatem,
                            atque? Aperiam aliquid illo voluptate veniam
                            repellendus ipsam quas corporis.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Exercitationem sit rerum explicabo modi esse
                            dignissimos natus vel, voluptate sunt reprehenderit
                            suscipit, aperiam quibusdam labore, incidunt
                            quisquam iure cumque dolor deleniti?
                          </p>
                        </li>
                      </ol>
                      <div className="newsTagWrap text-center text-sm-left d-sm-flex mt-11 mb-10 align-items-sm-center justify-content-sm-between justify-content-center">
                        <div className="saShareAside text-center d-sm-flex align-items-center justify-content-center justify-content-end">
                          <strong className="d-block text-lDark  font-weight-normal fontAlter title mb-2">
                            Share
                          </strong>
                          <ul className="list-unstyled socialNetworks saSocialNetworks d-flex flex-wrap justify-content-center mb-0">
                            <li>
                              <a href="!#" className="facebook">
                                <i
                                  className="fab fa-facebook-square"
                                  aria-hidden="true"
                                >
                                  <span className="sr-only">facebook</span>
                                </i>
                              </a>
                            </li>
                            <li>
                              <a href="!#" className="twitter">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                >
                                  <span className="sr-only">twitter</span>
                                </i>
                              </a>
                            </li>
                            <li>
                              <a href="!#" className="pinterest">
                                <i
                                  className="fab fa-instagram"
                                  aria-hidden="true"
                                >
                                  <span className="sr-only">instagram</span>
                                </i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
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
