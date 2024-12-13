import "./App.css";
import Display from "./componenets/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./componenets/ButtonsContainer";
function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display />
        <ButtonsContainer />
      </div>
    </>
  );
}
export default App;
