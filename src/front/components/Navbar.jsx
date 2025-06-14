import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useParams } from "react-router-dom"



export const Navbar = () => {
    const {store, dispatch} = useGlobalReducer();
    const navigate=useNavigate();
    const params = useParams()
    
    
      const handleCancelFavorite = (item) => {
       
      dispatch({ type: "favorite", payload: item }) 
        }




  return (

    <nav className=" containerNavbar row navbar navbar-dark  ">
      <div>


        <div className="StarWars d-flex justify-content-center mt-2">
          <Link to="/">
            <span className="starWarsLogo">
              <img id="local-nav-logo-mobile" src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_logo_mobile_659fef1a_1_99c6e87c.png?region=0,0,312,32" alt="Local Nav | Drop-Down Phase III - 20231020" />
            </span>
          </Link>
        </div>

        <div className=" d-grid gap-2 bg-gradient paginas d-flex flex-column flex-md-row justify-content-around mb-1 mt-3">
          <Link to="/Characters">
            <span className="    btn btn-lg btn-dark mb-2 me-md-2">
              CHARACTERS
            </span>
          </Link>
          <Link to="/Planets">
            <span className="   btn btn-lg btn-dark mb-2 me-md-2">
              PLANETS
            </span>
          </Link>
          <Link to="/Starships">
            <span className=" btn btn-lg btn-dark mb-2 me-md-2">
              STARSHIP
            </span>
          </Link>
          <div className="  dropdown me-3">
            <button className="btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Favorites
  <span className="position-absolute top-0 start-30 translate-middle badge rounded-pill bg-danger">
   {store.favorites.length}
    <span className="visually-hidden">unread messages</span>
  </span>
            </button>

            <ul className="dropdown-menu">
              {store.favorites.map(item => 
              <li className="dropdown-item d-flex justify-content-between  " key={`${item.uid}`}>
                <Link to ={`/${item.type}/${item.uid}`} className="text-dark" >{item.name}</Link>
                
              <button className="cancelFavorite btn border border-1" onClick={() => handleCancelFavorite(item)} > 
                <i class="fa-solid fa-xmark "></i> </button>
              </li>
              )}
            </ul>
          </div>

        </div>

      </div>

    </nav>
  );
};


{/* <Link to="/contact">
<button className="btn btn-primary">Start</button>
</Link> */}