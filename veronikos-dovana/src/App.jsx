import "./App.css";
import { TypeAnimation } from "react-type-animation";

function App() {
  // Get current date

  return (
    <div className="container">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed once, initially
          "Staigmena tavęs laukia vasario 18 dieną, 9 val.",
          1000,
          "Staigmena tavęs laukia vasario 21 dieną, 19 val.",
          1000,
          "Staigmena tavęs laukia vasario 24 dieną, 10 val.",
          1000,
          "Staigmena dovana tavęs laukia vasario XX dieną, XX val.",
          1000,
        ]}
        speed={50}
        style={{ fontSize: "2em" }}
        repeat={Infinity}
      />
    </div>
  );
}

export default App;
