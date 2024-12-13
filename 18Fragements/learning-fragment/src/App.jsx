import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Fooditems from "./Components/Fooditems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import Foodinput from "./Components/Foodinput";
import { useState } from "react";
// const intfoodItems = ["sabji", "cjhoi"];
function App() {
  let [foodItems, setFoodItem] = useState([]);
  // let [foodItems, setFoodItem] = useState([...intfoodItems]);

  const OnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItem(newItems);
    }
  };

  // let foodItems = [];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        <ErrorMessage items={foodItems} />
        <Foodinput handleKeyDown={OnKeyDown} />
        <Fooditems items={foodItems} />
      </Container>
      {/* <Container>
        <p>
          Above is the list of health food and are good for your health by somya
        </p>
      </Container> */}
    </>
  );
}

export default App;
