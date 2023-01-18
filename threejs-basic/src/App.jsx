import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useBasicScene } from "./useSimpleRender";
import { useGroup } from "./useGroup";
import { useAnimation } from "./useAnimation";

function App() {
  const [count, setCount] = useState(0);
  // useBasicScene();
  // useGroup();
  useAnimation();
  return (
    <div className="App">
      <canvas className="webgl"></canvas>
    </div>
  );
}

export default App;
