
import React from "react";

import Header from "./Components/Header/Header"; 
import Pokedex from "./Components/Pokedex/Pokedex";

import "./App.css";
//cabeçalho 
function App () {
  return (
    <div className="App">
              <Header/>
              <Pokedex /> 
    </div>
  );
}

export default App;
