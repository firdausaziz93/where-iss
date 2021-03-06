import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import { HomeRounded } from "@material-ui/icons";
// import resumeData from "../../utils/data";
// import CustomButton from "../Button/Button";
import "./header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* home link */}
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          {/* resume */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Where ISS
          </Nav.Link>

          {/* Portfolio */}
          {/* <Nav.Link
            as={NavLink}
            to="/page-2"
            className={
              pathName == "/page-2" ? "header_link_active" : "header_link"
            }
          >
            Page 2
          </Nav.Link> */}
        </Nav>

        {/* <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton
            text={"Hire Me"}
            icon={<Telegram />}
            onclick={routeChange}
          ></CustomButton>
        </div> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
