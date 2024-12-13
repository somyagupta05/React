import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import Todoitems from "./components/Todoitems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage"; // Fixed spelling

function App() {
  // const initialtodoitems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2024",
  //   },
  //   {
  //     name: "Go to college",
  //     dueDate: "5/10/2024",
  //   },
  //   {
  //     name: "like vdo",
  //     dueDate: "right now",
  //   },
  // ];

  const [todoitems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`new item added : ${itemName} date:${itemDueDate}`);
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoitems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoitems.length === 0 && <WelcomeMessage />}
      <Todoitems todoItems={todoitems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
