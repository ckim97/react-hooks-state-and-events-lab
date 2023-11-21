import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setInCart] = useState(false);

  function toggleCart() {
    setInCart(!isInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
