import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());
  const [thought, setThought] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const thoughts = ["wow", "I am travelling in time."];
    const timerID = setInterval(() => tick(), 1000);
    let i = 0;
    const statements = setInterval(() => {
      if (i < thoughts.length) {
        setThought(thoughts[i]);
        setVisible(true); 
      } else return;
      i++;
    }, 2000);

    return () => {
      clearInterval(timerID);
      clearInterval(statements);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  setInterval(() => tick(), 1000);

  return (
    <div>
      <div class={visible? "bubble thought": "invisible"}>
        <h2>{thought}</h2>
      </div>
      <div className="clock">
        <h2>{date.toLocaleTimeString()}</h2>
      </div>
    </div>
  );
}

export default App;
