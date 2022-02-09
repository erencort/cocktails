import "./App.css";
import Home from "./Pages/Home";
import React, { useEffect, useState } from "react";
import { CocktailContext } from "./context/cocktailContext";

function App() {
  const [filterQuery, setFilterQuery] = useState("");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    getCocktails();
  }, [filterQuery]);

  const getCocktails = async () => {
    await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filterQuery}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Something went wrong");
        }
      })
      .then((responseJson) => {
        setCocktails(responseJson.drinks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const data = {
    filterQuery,
    setFilterQuery,
    cocktails,
    setCocktails,
  };
  return (
    <CocktailContext.Provider value={data}>
      <div className="app">
        <Home />
      </div>
    </CocktailContext.Provider>
  );
}

export default App;
