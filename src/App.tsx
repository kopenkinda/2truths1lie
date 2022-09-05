import { useState } from "react";

import "./App.css";
import Counter from "./Counter";

function App() {
  const [winner, setWinner] = useState(-1);

  return (
    <>
      <div
        style={{
          fontSize: "4rem",
          position: "fixed",
          left: "50%",
          top: "4rem",
          transform: "translateX(-50%)",
          cursor: "pointer",
        }}
        onClick={() => setWinner(-1)}
      >
        2 ☑️ 1 ❌
      </div>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100vw",
        }}
      >
        <Counter winner={winner === 0} setWinner={setWinner} idx={0} />
        <Counter winner={winner === 1} setWinner={setWinner} idx={1} />
        <Counter winner={winner === 2} setWinner={setWinner} idx={2} />
      </div>
    </>
  );
}

export default App;
