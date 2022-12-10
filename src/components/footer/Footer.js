import {
  Android,
  Apple,
  CloudCircle,
  Facebook,
  Wifi,
} from "@mui/icons-material";
import React from "react";
import "./Footer.scss";

const responsiveIcons = {
  fontSize: {
    xs: "1rem",
    sm: "2rem",
    md: "2.5rem",
    lg: "3rem",
    xl: "3.5rem",
  },
};

const Footer = () => {
  return (
    <div className="footer">
      <div>
        Android <Android sx={responsiveIcons} />
      </div>
      <div>
        FaceBook <Facebook sx={responsiveIcons} />{" "}
      </div>
      <div>
        {" "}
        Google Station <Wifi sx={responsiveIcons} />
      </div>
      <div>
        Apple <Apple sx={responsiveIcons} />{" "}
      </div>
      <div>
        Cloud Drive <CloudCircle sx={responsiveIcons} />{" "}
      </div>
    </div>
  );
};

export default Footer;
