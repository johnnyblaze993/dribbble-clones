import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import MainLeft from "./components/mainLeft/MainLeft";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Header />
        <MainLeft />
        <div className="mainRight">main right</div>
        <div className="footer">footer</div>
      </div>
    </div>
  );
}

export default App;
