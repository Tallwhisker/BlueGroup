import { Outlet, Link } from "react-router-dom";

export default function Header() {
    return (
        <>
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container d-flex justify-content-between gap-5">
                    <Link className="navbar-brand px-2" to="/">BlueGroup WebShop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse gap-5" id="navbarNav1">
                        <form className="d-flex input-group py-2" role="search group">
                            <input className="form-control" type="search" placeholder="Sök" aria-label="Search" />
                            <button className="btn btn-outline-secondary btn-bg-body" type="submit"><i className="bi bi-binoculars"/></button>
                        </form>
                        <ul className="navbar-nav gap-5 mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#"><i className="bi bi-house"></i> Hem</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#"><i className="bi bi-person"></i> Konto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#"><i className="bi bi-star"></i> Favoriter</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true"><i className="bi bi-cart"></i> Kundvagn</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </header>
        <Outlet />
        </>
    );
}

