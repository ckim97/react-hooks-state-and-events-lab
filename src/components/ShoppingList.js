import React , {useState}from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, updateSelectedCategory] = useState("All");
  
  function handleClick(e) {
    updateSelectedCategory(e.target.value);
    console.log(selectedCategory);
  }

  const newItems = items.filter((item) => item.category === selectedCategory);
  console.log(newItems);


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onClick={handleClick} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items"> {(selectedCategory === "All") ? items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        )) : newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
