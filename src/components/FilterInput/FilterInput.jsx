import React, { useState } from "react";
import { CocktailContext, useContext } from "../../context/cocktailContext";
import "./FilterInput.css";

function FilterInput() {
  const { setFilterQuery, cocktails } = useContext(CocktailContext);
  const [onQueryChange, setOnQueryChange] = useState();

  const filterHandler = () => {
    setFilterQuery(onQueryChange);
    setOnQueryChange("");
    console.log(cocktails);
  };

  return (
    <div className="app__filter-input">
      <input
        type="text"
        onChange={(e) => setOnQueryChange(e.target.value)}
        value={onQueryChange}
      />
      <button onClick={filterHandler}>Search</button>
    </div>
  );
}

export default FilterInput;
