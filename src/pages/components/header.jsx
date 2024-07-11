import { 
    Outlet, 
    Link 
} from "react-router-dom";

export default function Header() {
    return (
        <>
        <header className="mb-5">
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0" id="AccountNavigation">
                <div className="container d-flex justify-content-between gap-5">
                    <div className="d-flex">
                        <i className="bi bi-bootstrap h3"></i>
                        <Link className="navbar-brand px-2 py-0" to="/">BlueGroup WebShop</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#AccNavDropdown" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse gap-5" id="AccNavDropdown">
                        <form className="d-flex input-group py-2" role="search group">
                            <input className="form-control" type="search" placeholder="Sök" aria-label="Search" />
                            <button className="btn btn-outline-secondary btn-bg-body" type="submit"><i className="bi bi-binoculars" /></button>
                        </form>
                        <ul className="navbar-nav gap-5" key={"headerNavi"}>
                            <li className="nav-item" key={"headerNavi1"}>
                                <Link className="nav-link active" aria-current="page" to="/"><i className="bi bi-house"></i> Hem</Link>
                            </li>
                            <li className="nav-item" key={"headerNavi2"}>
                                <Link className="nav-link" to="/"><i className="bi bi-person"></i> Konto</Link>
                            </li>
                            <li className="nav-item" key={"headerNavi3"}>
                                <Link className="nav-link" to="/"><i className="bi bi-star"></i> Favoriter</Link>
                            </li>
                            <li className="nav-item" key={"headerNavi4"}>
                                <Link className="nav-link disabled" aria-disabled="true"><i className="bi bi-cart"></i> Kundvagn</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0" id="CategoryNavigation">
                <div className="container justify-content-end gap-5">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#CatNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="CatNavDropdown">
                        <ul className="navbar-nav gap-5" key={"headerCategories"}>
                            <li className="nav-item dropdown" key={"headerCategories0"}>
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Vårt Sortiment
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/Hemelektronik" key={"headerCategories1"}>Hemelektronik</Link></li>
                                    <li><Link className="dropdown-item" to="/Resor" key={"headerCategories2"}>Resor</Link></li>
                                    <li><Link className="dropdown-item" to="/Mat" key={"headerCategories3"}>Mat</Link></li>
                                    <li><Link className="dropdown-item" to="/Klader" key={"headerCategories4"}>Kläder</Link></li>
                                    <li><Link className="dropdown-item" to="/Sport" key={"headerCategories5"}>Sportprylar</Link></li>
                                    <li><Link className="dropdown-item" to="/Matlagning" key={"headerCategories6"}>Matlagningsprylar</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">Hitta rätt tillbehör</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/">Kundservice & Support</Link>
                            </li>
                        </ul>
                        <div>
                            <input type="radio" className="btn-check" name="options-base" id="optionSV" autocomplete="off" checked />
                            <label className="btn" for="optionSV">SV</label>
                            <input type="radio" className="btn-check" name="options-base" id="optionEN" autocomplete="off" />
                            <label className="btn" for="optionEN">EN</label>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <Outlet />
        </>
    );
}

