import React, { useEffect } from "react";
import "./InfoCard.css";
import { CocktailContext, useContext } from "../../context/cocktailContext";

function InfoCard({ cocktailName, instructions, category, img }) {
  return (
    <div className="app__card">
      <img src={img} alt="cocktail-image" />
      <h2 className="app__card-name">{cocktailName}</h2>
      <p className="app__card-instructions">{category}</p>
      <button className="app__card-details_button">Details</button>
    </div>
  );
}

export default InfoCard;
