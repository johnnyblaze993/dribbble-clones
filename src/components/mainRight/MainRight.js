import React from "react";
import "./MainRight.scss";

import hand from "../../assets/hand.png";

const MainRight = () => {
  return (
    <div className="mainRight">
      <div className="hands" style={{ backgroundImage: `url(${hand})` }}></div>
    </div>
  );
};

export default MainRight;
