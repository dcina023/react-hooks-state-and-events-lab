import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setIsInCart] = useState(false)

  const handleItem = () => {
    setIsInCart(!inCart)
    
  };
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleItem} className ={inCart ? "in-cart" : "Remove From Cart"}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
