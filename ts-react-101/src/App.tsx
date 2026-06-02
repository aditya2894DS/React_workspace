import { useEffect } from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import Counter from "./components/Counter";

import { DateGen } from "./utils/Calendar/DateGen";

function App() {
  useEffect(() => {
    DateGen();
  });

  return (
    <>
      {/* <Counter /> */}
      <Calendar />
    </>
  );
}

export default App;
