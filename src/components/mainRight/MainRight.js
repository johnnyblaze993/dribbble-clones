import React from "react";
import "./MainRight.scss";

import hand from "../../assets/hand.png";
import blob from "../../assets/blob.svg";

const MainRight = () => {
  return (
    <>
      <div
        className="mainRight"
        style={{ backgroundImage: `url(${hand})` }}
      ></div>
      <div className="blob" style={{ backgroundImage: `url(${blob})` }}></div>
    </>
  );
};

export default MainRight;
