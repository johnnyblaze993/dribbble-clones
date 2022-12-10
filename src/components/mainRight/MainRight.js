import React from "react";
import "./MainRight.scss";

import hand from "../../assets/hand.png";
import blob from "../../assets/blob.svg";

const MainRight = () => {
  return (
    <div className="mainRight">
      <div className="hands" style={{ backgroundImage: `url(${hand})` }}>
        <div className="blob" style={{ backgroundImage: `url(${blob})` }}></div>
      </div>
    </div>
  );
};

export default MainRight;
