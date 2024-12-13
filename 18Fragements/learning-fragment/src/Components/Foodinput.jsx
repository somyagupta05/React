import styles from "./Foodinput.module.css";
const Foodinput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="enter food item here"
      className={styles.foodInput}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Foodinput;
