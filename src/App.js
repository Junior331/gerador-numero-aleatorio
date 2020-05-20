import React from "react";
import "./App.css";
import Numero from "./component/Aleatorio";

function App() {
  return (
    <div className="App">
      <Numero min={1} max={100} />
    </div>
  );
}

export default App;
