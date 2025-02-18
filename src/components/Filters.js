import React from "react";

function Filters({ handleChangeType, handleClick }) {
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select
          name="type"
          id="type"
          aria-label="type"
          onChange={(e) => handleChangeType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={(e) => handleClick()}>
          Find pets
        </button>
      </div>
    </div>
  );
}

export default Filters;
