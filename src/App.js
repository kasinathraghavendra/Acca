import "./styles.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Choose from "./Components/Choose";
import Screen from "./Components/screeen";
import Card from "./Components/Section3";

export default function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Body />
        <Choose />
      </div>
      <div className="practical">
        <Screen />
      </div>
      <div className="practical">
        <Card />
      </div>
    </div>
  );
}
