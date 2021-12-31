import { Typography } from "@material-ui/core";
import React from "react";
import "./footer.css";
import resumeData from "../../utils/data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_right"></div>
      <Typography className="footer_copyright">
        Designed and develop by{" "}
        <a href="/" target="_blank">
          Muhammad Firdaus Aziz
        </a>
      </Typography>
    </div>
  );
};

export default Footer;
