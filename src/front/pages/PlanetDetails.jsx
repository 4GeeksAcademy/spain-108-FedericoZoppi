import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPlanets, getPlanetsDetails } from "../services/starwars"
import useGlobalReducer from "../hooks/useGlobalReducer"




export const PlanetDetails = () => {

    const params = useParams()

    const { store, dispatch } = useGlobalReducer()
    const planetDetail = store.planetDetail


    const fallbackImg = "https://starwars.chocobar.net/img/big-placeholder.jpg";


    useEffect(() => {
        const getPlanet = async () => {
            const planetDetail = await getPlanetsDetails(params.uid)
  
            dispatch({
                type: "planetDetail",
                payload: planetDetail
            })
        }
        getPlanet();
    }, [params.uid])




    return (
        <div className="containerPlanetas row d-flex justify-content-around ">
          
            <div className="card-img ">
                <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${params.uid}.jpg`}
                    className="card-img-top m-2 " onError={(e) => {
                        e.target.src = fallbackImg;
                    }} alt="..." />
                    </div>
                <div className="card-body text-light">
                    <h5 className="card-title d-flex  m-5" >Name: {planetDetail.name}</h5>
                    <div className="">
                        <p className="card-text   m-3">Population: {planetDetail.population}</p>
                        <p className="card-text   m-3">Terrain: {planetDetail.terrain}</p>
                    </div>
                </div>
    


        </div>
    )
}