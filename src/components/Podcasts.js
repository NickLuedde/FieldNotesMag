import React from "react";
import "./MainPage.css";
import MattWalsh from "./Images/MattWalsh.jpg";
import mw614 from "./Images/mw614.jpg";
import mw613 from "./Images/mw613.jpg";
import mw612 from "./Images/mw612.jpg";
import MichaelKNowles from "./Images/MichaelKnowles.jpg";
import mk655 from "./Images/mk655.jpg";
import mk656 from "./Images/mk656.jpg";
import mk657 from "./Images/mk657.jpg";
import Shapiro from "./Images/Shapiro.jpg";
import bs1147 from "./Images/bs1147.jpg";
import bs1148 from "./Images/bs1148.jpg";
import bs1149 from "./Images/bs1149.jpg";
import Candace from "./Images/Candace.png";
import dinesh from "./Images/candace-dinesh.jpg";
import rubin from "./Images/candace-rubin.jpg";
import crenshaw from "./Images/candace-crenshaw.jpg";



//This will be the primary banner

const Podcasts = () => {
  return (
    <div
      className="about"
      style={{ backgroundColor: "black", backgroundSize: "cover"}}
    >
      <div class="ui fluid container about" style={{ paddingBottom: 25 }}>
        <h1 className="Title_About Cinzel">
          <span
            className="about Tangerine"
            style={{ color: "white", padding: 22 }}
          >
            watch
          </span>&
          listen
        </h1>
        {/* ..MattWalsh Image (links to latest episode) */}
        <a
          target="_blank"
          class="ui small top aligned rounded image"
          href="https://www.youtube.com/watch?v=dpsY-P2WIX8"
        >
          <img src={MattWalsh} 
          style={{height: 250, width: 350}}/>
        </a>
        <a target="Hi" href="https://www.youtube.com/watch?v=cDnl2go7ik0">
          {" "}<img
            src={mw613}
            class="ui aligned floated right rounded image fade"
            placeholder="what's up"
            style={{height: 250, width: 380, marginRight: 20}}
          />{" "}
        </a>
        <a target="_blank" href="https://www.youtube.com/watch?v=o2mkmdQZCyU">
          {" "}<img
            src={mw612}
            class="ui top aligned floated right rounded image fade"
            style={{height: 250, width: 350}}
          />{" "}
        </a>
        <a target="_blank" href="https://www.youtube.com/watch?v=dpsY-P2WIX8">
          {" "}<img
            src={mw614}
            class="ui medium top aligned floated right rounded image fade"
            style={{height: 250, width: 350}}
          />{" "}
        </a>

  {/* MichaelKNowles */}
        <a
          target="_blank"
          class="ui small top aligned rounded image"
          href="https://www.youtube.com/watch?v=dpsY-P2WIX8"
        >
          <img src={MichaelKNowles} 
          style={{height: 250, width: 350, marginTop:30}}/>
        </a>
        <a target="_blank" href="https://www.youtube.com/watch?v=dpsY-P2WIX8">
          {" "}<img
            src={mk656}
            class="ui aligned floated right rounded image fade"
            style={{height: 250, width: 380, marginRight: 20, marginTop:30}}
          />{" "}
        </a>
        <a target="_blank" href="https://www.youtube.com/watch?v=dpsY-P2WIX8">
          {" "}<img
            src={mk655}
            class="ui top aligned floated right rounded image fade"
            style={{height: 250, width: 350, marginTop:30}}
          />{" "}
        </a>
        <a target="_blank" href="https://www.youtube.com/watch?v=dpsY-P2WIX8">
          {" "}<img
            src={mk657}
            class="ui medium top aligned floated right rounded image fade"
            style={{height: 250, width: 350 , marginTop:30}}
          />{" "}
        </a>

        {/*Shapiro */}
        <a
          target="_blank"
          class="ui small top aligned rounded image"
          href="https://www.youtube.com/watch?v=dpsY-P2WIX8"
        >
          <img src={Shapiro} 
          style={{height: 250, width: 350, marginTop:30}}/>
        </a>
        <a target="_blank" href="https://www.youtube.com/watch?v=dpsY-P2WIX8">
          {" "}<img
            src={bs1148}
            class="ui aligned floated right rounded image fade"
            style={{height: 250, width: 380, marginRight: 20, marginTop:30}}
          />{" "}
        </a>
        <a target="_blank" href="https://www.youtube.com/watch?v=dpsY-P2WIX8">
          {" "}<img
            src={bs1147}
            class="ui top aligned floated right rounded image fade"
            style={{height: 250, width: 350, marginTop:30}}
          />{" "}
        </a>
        <a target="_blank" href="https://www.youtube.com/watch?v=dpsY-P2WIX8">
          {" "}<img
            src={bs1149}
            class="ui medium top aligned floated right rounded image fade"
            style={{height: 250, width: 350 , marginTop:30}}
          />{" "}
        </a>

         {/*Candace */}
         <a
          target="_blank"
          class="ui small top aligned rounded image"
          href="https://www.youtube.com/watch?v=dpsY-P2WIX8"
        >
          <img src={Candace} 
          style={{height: 250, width: 350, marginTop:30, marginLeft: 218}}/>
        </a>
        <a target="_blank" href="https://www.youtube.com/watch?v=dpsY-P2WIX8">
          {" "}<img
            src={dinesh}
            class="ui aligned floated right rounded image fade"
            style={{height: 250, width: 380, marginRight: 20, marginTop:30}}
          />{" "}
        </a>
        <a target="_blank" href="https://www.youtube.com/watch?v=dpsY-P2WIX8">
          {" "}<img
            src={rubin}
            class="ui top aligned floated right rounded image fade"
            style={{height: 250, width: 350, marginTop:30}}
          />{" "}
        </a>
        <a target="_blank" href="https://www.youtube.com/watch?v=dpsY-P2WIX8">
          {" "}<img
            src={crenshaw}
            class="ui medium top aligned floated right rounded image fade"
            style={{height: 250, width: 350 , marginTop:30}}
          />{" "}
        </a>

        

        
      </div>
    </div>
  );
};

export default Podcasts;
