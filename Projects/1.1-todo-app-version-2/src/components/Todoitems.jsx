import TodoItem from "./TodoItem";
import styles from "./Todoitems.module.css";
const Todoitems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
        ))}
      </div>
    </>
  );
};
export default Todoitems;
