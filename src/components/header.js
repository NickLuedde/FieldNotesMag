import React from "react";
import "./MainPage.css";

//This will be the primary banner

const Header = () => {
  return (
    <div>
      <div
        className="ui inverted active vertical menu left floated header NavText"
        style={{ borderRight: ".5px groove black", marginTop:'.25%' }}
      >
        <a
          href="/"
          className="active item zip hvr-underline-reveal "
          style={{
            color: "#D6D7DB",
            borderBottom: "1px groove #323232",
            backgroundColor: "#3E3D3D"
          }}
        >
          <span className="First_Letter">H</span>ome
        </a>
        <a
          href="/About"
          className="item zip"
          style={{
            color: "#D6D7DB",
            backgroundColor: "#3E3D3D",
            borderBottom: "1px groove #323232"
          }}
        >
          <span className="First_Letter">A</span>bout
        </a>
        <a
          href="/FieldNotes"
          className="item zip"
          style={{
            color: "#D6D7DB",
            backgroundColor: "#3E3D3D",
            borderBottom: "1px groove #323232"
          }}
        >
          <span className="First_Letter">F</span>ield Notes
        </a>
        <a
          href="/DailyReadings"
          className="item zip"
          style={{
            color: "#D6D7DB",
            backgroundColor: "#3E3D3D",
            borderBottom: "1px groove #323232"
          }}
        >
          <span className="First_Letter">F</span>aith
        </a>
        <a
          href="/News"
          className="item zip"
          style={{
            color: "#D6D7DB",
            backgroundColor: "#3E3D3D",
            borderBottom: "1px groove #323232"
          }}
        >
          <span className="First_Letter">N</span>ews
        </a>
        <a
          href="/Podcasts"
          className="item zip"
          style={{
            color: "#D6D7DB",
            backgroundColor: "#3E3D3D",
            borderBottom: "1px groove #323232"
          }}
        >
          <span className="First_Letter">W</span>atch & Listen
        </a>
        <a
          href="/charity"
          className="item zip"
          style={{
            color: "#D6D7DB",
            backgroundColor: "#3E3D3D",
            borderBottom: "1px groove #323232"
          }}
        >
          <span className="First_Letter">C</span>hristian Charity
        </a>
      
        
        <a
          href="/charity"
          className="item zip"
          style={{
            color: "#D6D7DB",
            backgroundColor: "#3E3D3D",
            borderBottom: "1px groove #323232"
          }}
        >
          <span className="First_Letter">O</span>utdoors
        </a>
        <a
          href="/charity"
          className="item zip"
          style={{
            color: "#D6D7DB",
            backgroundColor: "#3E3D3D",
            borderBottom: "1px groove #323232"
          }}
        >
          <span className="First_Letter">W</span>hiskey & Tobacco
        </a>
        <a
          href="/charity"
          className="item zip"
          style={{
            color: "#D6D7DB",
            backgroundColor: "#3E3D3D",
            borderBottom: "1px groove #323232"
          }}
        >
          <span className="First_Letter">F</span>ood 
        </a>
        <a
          href="/charity"
          className="item zip"
          style={{
            color: "#D6D7DB",
            backgroundColor: "#3E3D3D",
            borderBottom: "1px groove #323232"
          }}
        >
          <span className="First_Letter">M</span>usic
        </a>
        <a
          href="/charity"
          className="item zip"
          style={{
            color: "#D6D7DB",
            backgroundColor: "#3E3D3D",
            borderBottom: "1px groove #323232"
          }}
        >
          <span className="First_Letter">B</span>ooks
        </a>
        <a
          href="/charity"
          className="item zip"
          style={{
            color: "#D6D7DB",
            borderBottom: "1px groove #323232",
            backgroundColor: "#3E3D3D"
          }}
        >
          <span className="First_Letter">C</span>ool Wares
        </a>
        <a
          href="/charity"
          className="item zip"
          style={{
            color: "#D6D7DB",
            borderBottom: "1px groove #323232",
            backgroundColor: "#3E3D3D"
          }}
        >
          <span className="First_Letter">D</span>onate
        </a>

      </div>
    </div>
  );
};

export default Header;
