import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setdueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setdueDate(event.target.value);
  // };
  const handleAtButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
    // setdueDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAtButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter todo here"
            // value={todoName}
            // onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // value={dueDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button ">
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
