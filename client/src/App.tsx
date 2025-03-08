import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleCount}>click</button>
      <h1>{count}</h1>
    </>
  );
}

export default App;
