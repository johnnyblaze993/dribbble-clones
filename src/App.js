import React from "react";
import "./App.scss";
import Footer from "./components/footer/Footer";
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
