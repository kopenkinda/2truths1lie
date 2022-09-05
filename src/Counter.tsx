import { useState } from "react";

export default function Counter({
  initialTitle = "",
  idx,
  winner,
  setWinner,
}: {
  idx: number;
  initialTitle?: string;
  winner: boolean;
  setWinner: (x: number) => void;
}) {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState(initialTitle);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        border: winner ? "4px dashed lime" : "4px solid #333",
      }}
    >
      <textarea
        style={{ fontSize: "2rem" }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ></textarea>
      <p style={{ fontSize: "4rem" }}> {count}</p>
      <div style={{ fontSize: "2rem", display: "flex", gap: "1rem" }}>
        <button onClick={() => setCount(Math.max(count - 1, 0))}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button
        onClick={() => {
          setCount(0);
          setTitle("");
        }}
        style={{ marginTop: "2rem" }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setWinner(idx);
        }}
        style={{ marginTop: "2rem" }}
      >
        This
      </button>
    </div>
  );
}
