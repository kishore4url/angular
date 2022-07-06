import React from "react";

function Card({ name, email, pNumber, profile }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={profile} />
      </div>
      <div className="card__copy">
        <h1>Name {name}</h1>
        <h2>Email {email}</h2>
        <h2>Number {pNumber}</h2>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Card;
