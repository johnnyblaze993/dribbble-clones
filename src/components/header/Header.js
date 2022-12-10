import React from "react";
import "./Header.scss";

import { HeartBroken, Person, ShoppingBag } from "@mui/icons-material";

const responsiveIcons = {
  fontSize: {
    xs: "1.5rem",
    sm: "2rem",
    md: "2.5rem",
    lg: "3rem",
    xl: "3.5rem",
  },
};
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">Hello</div>
        <div className="rightNav">
          <span>Collection</span>
          <span>Join the team</span>
          <span>Contact Us</span>
          <HeartBroken sx={responsiveIcons} />
          <ShoppingBag sx={responsiveIcons} />
          <Person sx={responsiveIcons} />
        </div>
      </div>
    </>
  );
};

export default Header;
