import { HourglassEmpty } from "@mui/icons-material";
import React from "react";

import "./MainLeft.scss";

const responsiveIcons = {
  fontSize: {
    xs: "1.5rem",
    sm: "2rem",
    md: "2.5rem",
    lg: "3rem",
    xl: "4rem",
  },
};

const MainLeft = () => {
  return (
    <div className="mainLeft">
      <div className="mainLeft__tag">
        {" "}
        <span>Escape the Ordinary</span>
      </div>
      <h1 className="mainLeft__title">
        That's how we <br /> Get <span>things</span> done!
      </h1>
      <p className="mainLeft__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quod, quia, quae voluptas voluptatem quas voluptates
        doloremque quibusdam quidem quos. Quisquam, quae.
      </p>
      <div className="mainLeft_button_container">
        <button className="mainLeft__button">Shop Now</button>
        <div className="mainLeft__info_container">
          <span className="hourglass">
            {" "}
            <HourglassEmpty sx={responsiveIcons} />
          </span>

          <div className="mainLeft_button_flex">
            <span className="mainLeft_button_flex_top">Opening Hours</span>
            <span className="mainLeft_button_flex_bottom">When in mood</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLeft;
