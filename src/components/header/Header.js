import React from "react";
import "./Header.scss";

import { HeartBroken, Person, ShoppingBag } from "@mui/icons-material";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">logo</div>
        <div className="rightNav">
          <span>Collection</span>
          <span>Join the team</span>
          <span>Contact Us</span>
          <HeartBroken sx={{ fontSize: "inherit" }} />
          <ShoppingBag sx={{ fontSize: "inherit" }} />
          <Person sx={{ fontSize: "inherit" }} />
        </div>
      </div>
    </>
  );
};

export default Header;
