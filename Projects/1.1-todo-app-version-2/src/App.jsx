import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import Todoitems from "./components/Todoitems";
function App() {
  const todoitems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2024",
    },
    {
      name: "Go to college",
      dueDate: "5/10/2024",
    },
    {
      name: "like vdo",
      dueDate: "right now",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <Todoitems todoItems={todoitems}></Todoitems>
    </center>
  );
}

export default App;
