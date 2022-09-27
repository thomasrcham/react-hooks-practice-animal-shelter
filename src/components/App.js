import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState(null);
  const [filters, setFilters] = useState("all");

  function handleClick() {
    fetch("http://localhost:3001/pets")
      .then((r) => r.json())
      .then((data) => setPets(data));
  }

  function handleChangeType(value) {
    setFilters(value);
  }

  function handleAdoptClick(id) {
    console.log(id);
  }

  const displayPets = pets
    ? filters === "all"
      ? pets
      : pets.filter((pet) => filters === pet.type)
    : null;

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              handleChangeType={handleChangeType}
              handleClick={handleClick}
            />
          </div>
          <div className="twelve wide column">
            {displayPets ? (
              <PetBrowser
                displayPets={displayPets}
                handleAdoptClick={handleAdoptClick}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
