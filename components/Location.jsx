import React from "react";

const Location = ({ location }) => {

  return (
    <div>
      <h2>{location.name}</h2>
      <p>Description: {location.description}</p>
      <p>Category: {location.category}</p>
      {location.image && <img src={location.image} alt={location.name} />}
      <p>Days of Operation: {location.days_of_operation}</p>
      <p>City: {location.city}</p>
      <p>Country: {location.country}</p>
    </div>
  );
};

export default Location;