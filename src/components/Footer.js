import React from "react";

import "./MainPage.css";

//This will be the primary banner

const Footer = () => {
  return (
    <div>
      <div
        classNameName="ui inverted vertical segment"
        style={{ backgroundColor: "#3E3D3D" }}
      >
        <div className="ui container" style={{ backgroundColor: "#3E3D3D" }}>
          {/* <img src="fisher.jpg" className="ui centered mini image" /> */}
          <div
            className="ui horizontal inverted large divided link list"
            style={{
              backgroundColor: "#3E3D3D",
              color: "#556B2F",
              marginLeft: 120
            }}
          >
            <a
              className="item"
              href="#"
              style={{ backgroundColor: "#3E3D3D", color: "#556B2F" }}
            >
              {" "}Facebook
            </a>
            <a
              className="item"
              href="#"
              style={{ backgroundColor: "#3E3D3D", color: "#556B2F" }}
            >
              Twitter
            </a>
            <a
              className="item"
              href="#"
              style={{ backgroundColor: "#3E3D3D", color: "#556B2F" }}
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
