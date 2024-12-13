import { useState } from "react";
import Item from "./Item";
const Fooditems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItems={item}
          bought={activeItems.includes(item)}
          handleBuytButton={(event) => onBuyButton(item, event)}
        />
      ))}
      
    </ul>
  );
};
export default Fooditems;
