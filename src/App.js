import "./App.css";
import Home from "./Pages/Home";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CocktailContext } from "./context/cocktailContext";

function App() {
  const [filterQuery, setFilterQuery] = useState("");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    getCocktails();
  }, []);

  const getCocktails = async () => {
    const { data } = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    );
    setCocktails(data.drinks);
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
