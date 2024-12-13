import "./App.css";
import Display from "./componenets/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./componenets/ButtonsContainer";
import { useState } from "react";
function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </>
  );
}
export default App;
