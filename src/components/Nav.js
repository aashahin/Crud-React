import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg" style={{background: "#182625"}}>
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{color: "#fe8e23"}}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href={"true"}>
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href={"true"}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href={"true"}>
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href={"true"}>
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href={"true"}>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
