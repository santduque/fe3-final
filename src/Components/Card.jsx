import { Link } from "react-router-dom";
import { setFavorite, isFav, removeFavorite } from "./utils/localStorage.service";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    setFavorite({ name, username, id });
  }

  const deleteFav = () => {
    removeFavorite(id);
  }

  const fav = isFav(id);

  return (
    <div className={`card`}>
      <img className="card-img-top" src="/images/doctor.jpg" alt="imagenDoctor" />
      <div>
        <Link to={`/medico/${id}`}>
          <h6>{name}</h6>
        </Link>
        <p>{username}</p>
        <button onClick={fav ? deleteFav : addFav}>⭐</button>
      </div>
    </div>
  );
};

export default Card;