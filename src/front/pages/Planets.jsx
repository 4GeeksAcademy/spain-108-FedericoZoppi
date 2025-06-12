import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"





export const Planets = () => {
    const { store } = useGlobalReducer()
    const planets = store.planets

    const fallbackImg = "https://starwars.chocobar.net/img/big-placeholder.jpg";


    return (
        <div className="container row d-flex justify-content-around mt-5 mb-5">
            {planets.map((item) => {
                console.log(item)
                return (
                    <div className="card  m-1 mb-3">
                        <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${item.uid}.jpg`}
                            onError={(e) => {
                                e.target.src = fallbackImg;
                            }}
                             className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>

                            <Link to={`/planets/${item.uid}`} className="btn btn-primary ">
                            
                                Learn more
                                
                            </Link>
                        </div>
                    </div>
                )
            })
            }

        </div>)
}