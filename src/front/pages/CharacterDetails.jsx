import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacterDetails } from "../services/starwars";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CharacterDetails = () => {
  const params = useParams();
  const { store, dispatch } = useGlobalReducer();
  const characterDetail = store.characterDetail;

  const fallbackImg = "https://starwars.chocobar.net/img/big-placeholder.jpg";

  useEffect(() => {
    const getCharacter = async () => {
      const characterDetail = await getCharacterDetails(params.uid);
      dispatch({ type: "characterDetail", payload: characterDetail });
    };
    getCharacter();
  }, [params.uid]);

  return (
    <div className="container d-flex justify-content-center m-2">
      <div className="d-sm-flex">
        <div className="card-img">
          <img
            src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${params.uid}.jpg`}
            className="card-img-top m-2"
            onError={(e) => {
              e.target.src = fallbackImg;
            }}
            alt="..."
          />
        </div>
        <div className="card-body d-flex flex-column justify-content-center mb-5 col-12 text-light">
          <h5 className="card-title d-flex m-5">
            Name: {characterDetail.name}
          </h5>
          <div>
            <p className="card-text m-3">
              Height: {characterDetail.height}
            </p>
            <p className="card-text m-3">
              Birth year: {characterDetail.birth_year}
            </p>
            <p className="card-text m-3">
              Gender: {characterDetail.gender}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
