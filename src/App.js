import React from "react";
import Counter from "./components/Counter";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React Counter & Form App</h1>
      <Counter />
      <Form />
    </div>
  );
}

export default App;
