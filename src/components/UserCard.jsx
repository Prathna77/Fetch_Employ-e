import { useState } from "react";
import "./UserCard.css";

function UserCard({ image, firstname, lastname, email }) {
  const [favorite, setFavorite] = useState(false);

  const getEmployee = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFavorite(data.results[0]);
      });
  };

  return (
    <div className="card">
      <p>Information sur l&lsquo;employer</p>
      <img src={image} alt="Avatar" className="w-100" />
      <div className="info-container">
        <div className="info-head">
          <h4>
            {firstname} {lastname}
          </h4>
          <span
            className={favorite ? "is-favorite" : ""}
            onClick={(event) => {
              const newFavorite = !favorite;
              setFavorite(newFavorite);
            }}
          >
            &#9733;
          </span>
        </div>
        <div className="info-body">
          <p>{email}</p>
        </div>
        <button type="button" onClick={getEmployee}>
          Get employee
        </button>
      </div>
    </div>
  );
}

export default UserCard;
