import React, { useState } from "react";

function Item({ name, category }) {
  
  const [inCart, setCart] = useState(false)
  
  function handleClick () {
    setCart((inCart) => !inCart)
  }

  const cartClass = inCart ? "in-cart" : ""

  const cartButton = inCart ? "Remove From Cart" : "Add to Cart"
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartButton}</button>
    </li>
  );
}

export default Item;
