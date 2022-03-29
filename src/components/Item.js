import React from "react";
import {Link} from 'react-router-dom'
import { ItemsList } from "./constants";

function Item() {
  return (
    <div>
      <h1>Item</h1>
      {ItemsList.map((val) => (
        <Link to={`/item/${val.id}`} key={val.id}><div>{val.name}</div></Link>
      ))}
    </div>
  );
}

export default Item;
