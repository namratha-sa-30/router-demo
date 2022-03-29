import React from "react";
import { useParams } from "react-router-dom";
import { ItemsList } from "./constants";

function ItemDetails() {
  const { id } = useParams();
  const details = ItemsList.find((val) => val.id === id);
  return (
    <div>
      <h1>ItemDetails</h1>
      <div>{details?.id}</div>

      <div>{details?.name}</div>
      <div>{details?.cost}</div>
    </div>
  );
}

export default ItemDetails;
