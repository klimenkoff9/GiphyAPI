import React from "react";

const Display = (props) => {
  return (
    <div className="card">
    <img src={props.url} alt="gif"/>
      {/* <p>City: {props.city}</p>
      <p>State: {props.state}</p>
      <p>Location: {props.locationLat}, {props.locationLot}</p>
      <p>Population (estimated): {props.population}</p>
      <p>Total Wages: {props.wages}</p> */}
    </div>
  );
};

export default Display;