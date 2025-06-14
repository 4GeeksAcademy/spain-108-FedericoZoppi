import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Cards } from "./Cards.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const loadMessage = async () => {
		try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL

			if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")

			const response = await fetch(backendUrl + "/api/hello")
			const data = await response.json()

			if (response.ok) dispatch({ type: "set_hello", payload: data.message })

			return data

		} catch (error) {
			if (error.message) throw new Error(
				`Could not fetch the message from the backend.
				Please check if the backend is running and the backend port is public.`
			);
		}

	}

	useEffect(() => {
		loadMessage()
	}, [])

	return (
	
			 <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://lumiere-a.akamaihd.net/v1/images/rogue-one-sw2-hero-mobile_facc49ac.jpeg?region=0,0,1280,720" className="d-block w-100" alt="imagen1" />
        </div>
        <div className="carousel-item">
          <img src="https://lumiere-a.akamaihd.net/v1/images/bounty-hunter-quiz-sw2-hero-mobile_273e976c.jpeg?region=0,0,1280,720" className="d-block w-100" alt="imagen2" />
        </div>
        <div className="carousel-item">
          <img src="https://lumiere-a.akamaihd.net/v1/images/andor-concept-to-screen-featured-v2_6a6aa0f1.jpeg?region=0,0,1920,1080&width=1536" className="d-block w-100" alt="imagen3" />
        </div>
      </div>
	   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
		</div>
	);
}; 