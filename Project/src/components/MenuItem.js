import React from "react";

function MenuItem({ image, name, price,Discription }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h3> {name} </h3>
      <p> Rs.{price} </p>
      <p>{Discription}</p>
    </div>
  );
}

export default MenuItem;
