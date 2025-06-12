import { useParams } from "react-router-dom"




export const PlanetDetails = () => {

    const params = useParams()
    console.log(params)

     useEffect(() => {
            const getPlanetsDetails = async (id) => {
              const planetsDetails = await getPlanetsDetails()
              dispatch({
                type: "planetsDetails",
                payload: planetsDetails
              })
            }
    
          }, [])


    return(
    <h1 className="text-light">PLANETA AL DETALLE:
    {planets.diameter}</h1>
)}