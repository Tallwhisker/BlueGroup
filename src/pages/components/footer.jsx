import { Outlet, Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="footer text-lg-start bg-dark text-white mt-5">
                <section>
                    <div className="container text-md-start pt-5">
                        {/*rad*/}
                        <div className="row mt-3">
                            {/*kolumn 1*/}
                            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                                <h6>Det här är BlueGroup</h6>
                                <ul className="list-unstyled text-white-50">
                                    <li className="nav-item"><Link className="nav-link" to="#">Press</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Om BlueGroup</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Karriär</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Hållbart val</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">BlueGroups egna varumärken</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Nyhetsbrev</Link></li>
                                </ul>
                            </div>
                            {/*kolumn 2*/}
                            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                                <h6>Kundservice</h6>
                                <ul className="list-unstyled text-white-50">
                                    <li className="nav-item"><Link className="nav-link" to="#">Beställning</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Leverans</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Teknisk support</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Reklamation & återköp</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Betalning</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Student</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Chatta med oss</Link></li>
                                </ul>
                            </div>
                            {/*kolumn 3*/}
                            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                                <h6>Handla på BlueGroup</h6>
                                <ul className="list-unstyled text-white-50">
                                    <li className="nav-item"><Link className="nav-link" to="#">Försäljningsvillkor</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Fraktinformation</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Leveransinformation</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Betalningsinformation</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">BlueGroup Trygghetsavtal</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Kontovillkor</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Integritetspolicy</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Cookiepolicy</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Kampanjguide</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Black Friday 2024</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Fyndvaror</Link></li>
                                </ul>
                            </div>
                            {/*kolumn 4*/}
                            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                                <h6>Inspiration</h6>
                                <ul className="list-unstyled text-white-50">
                                    <li className="nav-item"><Link className="nav-link" to="#">Guider</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Nya produkter</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Allt för gamern</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container u-pt-32 u-px-16 u-px-lg-0 u-pt-md-64">
                        <div className="row sm-gutters">
                            {/*logotyp*/}
                            <div className="col-md-auto">
                                <i className="bi bi-bootstrap h1"></i>
                            </div>
                            {/*företagsnamn och info*/}
                            <div className="col-md-auto">
                                <div>
                                    <p className="u-margin-bottom-off u-color-white">
                                        BlueGroup Sverige AB, Box 0000, 123 45 Farsta.<br />
                                        <span className="text-nowrap">
                                            Organisationsnummer: 550000-0000
                                        </span>
                                    </p>
                                    <p className="text-white-50">© 2024 BlueGroup AB. All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end u-pt-32 u-pt-md-0">
                            <a class="u-bg-black u-w-40 u-h-40 u-py-8 u-px-8 u-radius-4 u-button-opacity u-mr-8" aria-label="follow on facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img alt="facebook icon" loading="lazy" width="48" height="24" decoding="async" data-nimg="1" style={{color:'transparent'}} src="https://dustinweb.azureedge.net/content/88934/facebook.svg" /></a>
                            <a class="u-bg-black u-w-40 u-h-40 u-py-8 u-px-8 u-radius-4 u-button-opacity u-mr-8" aria-label="follow on linkedIn" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img alt="linkedIn icon" loading="lazy" width="48" height="24" decoding="async" data-nimg="1" style={{color:'transparent'}} src="https://dustinweb.azureedge.net/content/88936/linkedin.svg" /></a>
                            <a class="u-bg-black u-w-40 u-h-40 u-py-8 u-px-8 u-radius-4 u-button-opacity u-mr-8" aria-label="follow on twitter" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><img alt="twitter icon" loading="lazy" width="48" height="24" decoding="async" data-nimg="1" style={{color:'transparent'}} src="https://dustinweb.azureedge.net/content/88940/twitter.svg" /></a>
                            <a class="u-bg-black u-w-40 u-h-40 u-py-8 u-px-8 u-radius-4 u-button-opacity u-mr-8" aria-label="follow on youtube" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img alt="youtube icon" loading="lazy" width="48" height="24" decoding="async" data-nimg="1" style={{color:'transparent'}} src="https://dustinweb.azureedge.net/content/88939/youtube.svg" /></a>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
}