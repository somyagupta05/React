import TodoItem from "./TodoItem";
import styles from "./Todoitems.module.css";
const Todoitems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default Todoitems;
