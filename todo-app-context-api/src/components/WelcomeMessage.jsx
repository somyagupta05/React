import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import Todoitems from "./Todoitems";
import styles from "./WelcomeMessage.module.css";
const WelcomeMeassge = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day</p>
  );
};
export default WelcomeMeassge;
