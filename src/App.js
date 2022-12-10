import React from "react";
import "./App.scss";
// import Bubbles from "./components/bubbles/Bubbles";
import Header from "./components/header/Header";
import MainLeft from "./components/mainLeft/MainLeft";
import MainRight from "./components/mainRight/MainRight";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Header />
        <MainLeft />
        <MainRight />
        <div className="footer">footer</div>
      </div>
      {/* <div className="bubbleContainer">
        <Bubbles />
      </div> */}
    </div>
  );
}

export default App;
