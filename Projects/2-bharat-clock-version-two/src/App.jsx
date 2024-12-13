import ClockHeading from "./components/ClockHeading";
import Slogan from "./components/Slogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <center>
      <ClockHeading />
      <Slogan />
      <CurrentTime />
    </center>
  );
}

export default App;
