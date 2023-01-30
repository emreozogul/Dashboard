import React from "react";
import Card from "./Card";

const CardContainer = () => {
  return (
    <ul className="grid grid-cols-5 bg-gray-300 gap-5">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ul>
  );
};

export default CardContainer;
