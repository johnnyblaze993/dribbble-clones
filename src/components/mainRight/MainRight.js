import React from "react";
import "./MainRight.scss";

import hand from "../../assets/hand.png";

const MainRight = () => {
  return (
    <div className="mainRight">
      <div
        style={{
          backgroundImage: `url(${hand})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      ></div>
    </div>
  );
};

export default MainRight;
