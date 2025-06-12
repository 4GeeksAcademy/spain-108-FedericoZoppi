import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPlanets, getPlanetsDetails } from "../services/starwars"
import useGlobalReducer from "../hooks/useGlobalReducer"




export const PlanetDetails = () => {

    const params = useParams()
    console.log(params)
    const { store, dispatch } = useGlobalReducer()
    const planetDetail = store.planetDetail


    const fallbackImg = "https://starwars.chocobar.net/img/big-placeholder.jpg";


    useEffect(() => {
        const getPlanet = async () => {
            const planetDetail = await getPlanetsDetails(params.uid)
            console.log(planetDetail)
            dispatch({
                type: "planetDetail",
                payload: planetDetail
            })
        }
        getPlanet();
    }, [])




    return (
        <div className="container d-flex justify-content-center m-2 ">
            <div className=" d-sm-flex  ">
            <div className="card-img ">
                <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${params.uid}.jpg`}
                    className="card-img-top m-2 " onError={(e) => {
                        e.target.src = fallbackImg;
                    }} alt="..." />
                    </div>
                <div className="card-body d-flex flex-column justify-content-center  mb-5 col-12 text-light">
                    <h5 className="card-title d-flex  m-5" >Name: {planetDetail.name}</h5>
                    <div className="">
                        <p className="card-text   m-3">Population: {planetDetail.population}</p>
                        <p className="card-text d-flex  m-3">Terrain: {planetDetail.terrain}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}