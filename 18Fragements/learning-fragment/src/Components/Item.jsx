import styles from "./item.module.css";
const Item = ({ foodItems, bought, handleBuytButton }) => {
  // const handleBuytButton = (event) => {
  //   console.log(`${foodItems} item being bought`);
  // };
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuytButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
