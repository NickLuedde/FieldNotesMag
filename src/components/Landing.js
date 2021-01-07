import React from "react";
import "./MainPage.css";

//This will be the primary banner

const Landing = () => {
  return (
    <div>
      <div className="ui vertical segment right floated logo">
        <p
          className="Cinzel"
          style={{
            fontWeight: 600,
            backgroundColor: "transparent",
            marginLeft: 330,
            marginTop: 190,
            fontSize: 20,
            marginBottom: -18
          }}
        >
          Authentic Gentlemen's Daily
        </p>

        <h1 className="Title_About Cinzel">
          <span className="Title_About1 Tangerine"> Field </span> notes
        </h1>
        <p
          className="Cinzel"
          style={{
            fontWeight: 600,
            backgroundColor: "transparent",
            marginLeft: 9,
            paddingTop: 3,
            fontSize: 18
          }}
        >
          Be faithful, authentic and virtuous ... Become wise ... Be regarded as
          light-hearted. Remain serious.
        </p>
        {/* <p className="Cinzel" style={{fontWeight: 600,backgroundColor: "transparent", marginLeft: 365, marginTop: -10, fontSize: 20}}>
    Be a Gentleman. Be a Man.</p> */}
      </div>
    </div>
  );
};

export default Landing;
