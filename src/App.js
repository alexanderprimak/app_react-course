import React from "react";
import './App.scss';
import Header from "./Component/Header/Header.js";
import Site_bar from "./Component/Site_bar/Site_bar";
import Profile from "./Component/Main_content/Profile";
import Dialogs from "./Component/Main_content/Dialogs/Dialogs";
import News from "./Component/Main_content/News/News";
import Music from "./Component/Main_content/Music/Music";
import Setting from "./Component/Main_content/Setting/Setting";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {

  return (

    <BrowserRouter>

          <div className="App">

              <Header name = "Hello world" />
              <Site_bar />
              <Route path="/Main_content/Dialogs" component = {Dialogs} />
              <Route path="/Main_content/Profile" component = {Profile} />
              <Route path="/Main_content/News"    component = {News} />
              <Route path="/Main_content/Music"   component = {Music} />
              <Route path="/Main_content/Setting"   component = {Setting} />

          </div>

     </BrowserRouter>
  );
}

export default App;
