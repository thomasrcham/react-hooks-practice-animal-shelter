import React from "react";
import Pet from "./Pet";

function PetBrowser({ displayPets, handleAdoptClick }) {
  let petCards = displayPets
    ? displayPets.map((pet) => (
        <Pet pet={pet} key={pet.id} handleAdoptClick={handleAdoptClick} />
      ))
    : "";
  return <div className="ui cards">{petCards}</div>;
}

export default PetBrowser;
