import Navbar from "../components/Navbar/Navbar";
import React, { useEffect } from "react";
import FilterInput from "../components/FilterInput/FilterInput";
import InfoCard from "../components/InfoCard/InfoCard";
import { CocktailContext, useContext } from "../context/cocktailContext";

function Home() {
  const data = useContext(CocktailContext);

  useEffect(() => {
    console.log(data.cocktails);
  }, []);

  return (
    <>
      <Navbar />
      <FilterInput />
      {data.cocktails.map((items) => (
        <InfoCard
          key={items.idDrink}
          cocktailName={items.strDrink}
          category={items.strCategory}
          instructions={items.strInstructions}
          img={items.strDrinkThumb}
        />
      ))}
    </>
  );
}

export default Home;
