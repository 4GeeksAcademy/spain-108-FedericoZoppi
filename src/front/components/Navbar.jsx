import { Link } from "react-router-dom";

export const Navbar = () => {
  return (

    <nav className=" navbar navbar-dark bg-dark border border-danger-subtle">
      <div className="container d-flex flex-column">


        <div className="StarWars row d-flex justify-content-center ">
          <Link to="/">
            <span className="navbar d-sm-flex mb-0 h1">
              <img  id="local-nav-logo-mobile" src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_logo_mobile_659fef1a_1_99c6e87c.png?region=0,0,312,32" alt="Local Nav | Drop-Down Phase III - 20231020" />
            </span>
          </Link>
        </div>

        <div className="paginas d-sm-flex  ">
          <Link to="/Characters">
            <span className=" col-sm-12 col-md-4 navbar-brand btn mb-0 ">
              CHARACTERS
            </span>
          </Link>
          <Link to="/Planets">
            <span className=" col-sm-12 col-md-4 navbar-brand btn mb-0 ">
              PLANETS
            </span>
          </Link>
          <Link to="/Starships">
            <span className=" col-sm-12 col-md-4 navbar-brand btn mb-0 ">
              STARSHIP
            </span>
          </Link>
          {/* <Link to="/contact">
          <button className="btn btn-primary">Start</button>
        </Link> */}

          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Favorites
            </button>

            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Elemento 1</a></li>
              <li><a className="dropdown-item" href="#">Elemento 2</a></li>
              <li><a className="dropdown-item" href="#">Elemento 3</a></li>
            </ul>
          </div>

        </div>

      </div>

    </nav>
  );
};
