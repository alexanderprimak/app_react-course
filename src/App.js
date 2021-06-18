import React from "react";
import './App.scss';
import Header from "./Component/Header.js";
import Site_bar from "./Component/Site_bar.js";
import Main_content from "./Component/Main_content.js";



function App() {
  return (
    <div className="App">

        <Header />
        <Site_bar />
        <Main_content />

     </div>
  );
}

export default App;
