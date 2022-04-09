import React from "react";
import "./App.css";
import Counter from "./counter/Counter";

function App() {

  const name = "muthu";
  console.log("name:", name);
  // html tag if yue want render js variables use curly braces inside html tag like {name};
  return (
    <div className="main_container">


      <h3>Learing functional Component</h3>
      <h5>My name is {name}</h5>

      <br />
      <Counter />
      <Counter />


    </div>
  )


}

export default App;