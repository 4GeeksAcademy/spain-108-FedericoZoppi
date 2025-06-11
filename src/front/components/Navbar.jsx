import { Link } from "react-router-dom";

export const Navbar = () => {
  return (

    <nav className="navbar navbar-light bg-dark">

      <div className="container">
        {/* <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
              alt="Imagen Star Wars"
              style={{ height: "40px" }}
            />
          </span>
        </Link> */}
        <Link to="/contact">
          <button className="btn btn-primary">Start</button>
        </Link>

        {/* <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Favorites
          </button>

          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Elemento 1</a></li>
            <li><a className="dropdown-item" href="#">Elemento 2</a></li>
            <li><a className="dropdown-item" href="#">Elemento 3</a></li>
          </ul>
        </div> */}

      </div>
    </nav>
  );
};
