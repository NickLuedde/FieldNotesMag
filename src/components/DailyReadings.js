import React from "react";
import "./MainPage.css";
import cross from "./Images/cross.png";

//This will be the primary banner

const DailyReadings = () => {
  return (
    <div className="about">
      <div class="ui fluid container about" style={{ padding: 0 }}>
        <h1 className="Title_About Cinzel">
          <span
            className="about Tangerine"
            style={{ color: "white", padding: 15 }}
          >
            F
          </span>aith
        </h1>

        <p
          className="ui container about "
          style={{
            paddingLeft: 200,
            paddingBottom: 50,
            color: "rgb(185 182 182)"
          }}
        >
          <div className="Date">December 4, 2020</div>
          <br />
          <div className="Date1">Friday of the First Week of Advent</div>

          <div class="ui segment">
            <div
              class="ui very relaxed two column grid"
              style={{ backgroundColor: "red" }}
            >
              {/* //First Reading */}
              <div
                class="column justified"
                style={{ backgroundColor: "#3E3D3D", color: "#B9B6B6" }}
              >
                <h3 style={{ backgroundColor: "#3E3D3D", color: "#B9B6B6" }}>
                  The First Reading
                </h3>
                <p style={{ backgroundColor: "#3E3D3D", color: "#B9B6B6" }}>
                  IS 29:17-24
                </p>
                <p style={{ backgroundColor: "#3E3D3D", color: "#B9B6B6" }}>
                  Thus says the Lord GOD: But a very little while, and Lebanon
                  shall be changed into an orchard, and the orchard be regarded
                  as a forest! On that day the deaf shall hear the words of a
                  book; And out of gloom and darkness, the eyes of the blind
                  shall see. The lowly will ever find joy in the LORD, and the
                  poor rejoice in the Holy One of Israel. For the tyrant will be
                  no more and the arrogant will have gone; All who are alert to
                  do evil will be cut off, those whose mere word condemns a man,
                  Who ensnare his defender at the gate, and leave the just man
                  with an empty claim. Therefore thus says the LORD, the God of
                  the house of Jacob, who redeemed Abraham: Now Jacob shall have
                  nothing to be ashamed of, nor shall his face grow pale. When
                  his children see the work of my hands in his midst, They shall
                  keep my name holy; they shall reverence the Holy One of Jacob,
                  and be in awe of the God of Israel. Those who err in spirit
                  shall acquire understanding, and those who find fault shall
                  receive instruction.
                </p>
              </div>

              <div
                class="column justified"
                style={{ backgroundColor: "#3E3D3D", color: "#B9B6B6" }}
              >
                <h3 style={{ backgroundColor: "#3E3D3D", color: "#B9B6B6" }}>
                  The Gospel
                </h3>
                <p style={{ backgroundColor: "#3E3D3D", color: "#B9B6B6" }}>
                  MT 9:27-31
                </p>
                <p style={{ backgroundColor: "#3E3D3D", color: "#B9B6B6" }}>
                  As Jesus passed by, two blind men followed him, crying out,
                  “Son of David, have pity on us!” When he entered the house,
                  the blind men approached him and Jesus said to them, “Do you
                  believe that I can do this?” “Yes, Lord,” they said to him.
                  Then he touched their eyes and said, “Let it be done for you
                  according to your faith.” And their eyes were opened. Jesus
                  warned them sternly, “See that no one knows about this.” But
                  they went out and spread word of him through all that land.
                </p>
              </div>
            </div>
            <div
              class="ui vertical divider"
              style={{ backgroundColor: "#3E3D3D", color: "#B9B6B6" }}
            >
              <img
                src={cross}
                alt="cross"
                style={{
                  height: 50,
                  width: 25,
                  backgroundColor: "transparent"
                }}
              />
              <br />
            </div>
          </div>
        </p>
        <br />
        <p
          className="ui container about "
          style={{
            paddingLeft: 200,
            paddingBottom: 50,
            color: "rgb(185 182 182)"
          }}
        >
          <div className="Date" style={{ marginTop: -80 }}>
            December 4, 2020
          </div>
          <br />
          <div className="Date1">Daily Homily</div>

          <div class="ui segment">
            <div
              class="ui very relaxed two column grid"
              style={{ backgroundColor: "#3E3D3D" }}
            >
              {/* //First Reading */}
              <div
                class="column justified"
                style={{ backgroundColor: "#3E3D3D", color: "#B9B6B6" }}
              >
                <h3 style={{ backgroundColor: "#3E3D3D", color: "#B9B6B6" }}>
                  Father Andrew Ritchie
                </h3>
                <p style={{ backgroundColor: "#3E3D3D", color: "#B9B6B6" }}>
                Cathedral of Christ the King || Superior, Wisconsin
                </p>
                <p style={{ backgroundColor: "#3E3D3D", color: "#B9B6B6" }}>
                  This week we hear about John the Baptist who embodies the
                  great call of Isaiah the prophet to “prepare the way of the
                  Lord.” John heralds the coming of the Messiah, urging us to
                  change our ways and prepare our hearts. Here’s a quick recap:
                  1st Reading – Isaiah comforts the people as God prepares the
                  way. Psalm – “Lord, let us see your kindness, and grant us
                  your salvation.” 2nd Reading – We patiently await the Lord’s
                  coming. Gospel – John the Baptist preaches repentance and
                  prepares the people for Jesus. The stirring quality of these
                  readings prompts us to respond decisively. God calls us to
                  action! God comes with power! The urgency underscored in these
                  readings today emphasizes that eternal life is at stake; what
                  we do here on earth leads to repercussions in Heaven.
                </p>
              </div>

              <div
                class="column justified"
                style={{ backgroundColor: "#3E3D3D", color: "#B9B6B6" }}
              >
                <p style={{ backgroundColor: "#3E3D3D", color: "#B9B6B6" }}>
                    <br></br>
                    <br></br>
                    <br></br>
                  Yet we also know that careful planning frequently precedes
                  bold action. As we follow Christ we take the time that Advent
                  offers to reflect on how the Lord is speaking to our lives. We
                  pause in this season because there are critical times in life
                  that demand stillness, silence, reflection and thoughtful
                  attention. Simply put, we slow down with the Lord so that we
                  are ready to speed up when life switches gears. What is God
                  doing in our lives today? What needs preparation? How is the
                  Lord working in and through our hearts? Take this week and
                  perform a simple internal spiritual inventory. Consider this
                  one question – If God called you home tonight, would you be
                  ready? If the answer is yes, then we live our faith with
                  eagerness and zeal. If the answer is no, then we take time to
                  prepare the way for the Lord..
                  .................................
                </p>
              </div>
            </div>
            <div
              class="ui vertical divider"
              style={{ backgroundColor: "#3E3D3D", color: "#B9B6B6" }}
            >
              <img
                src={cross}
                alt="cross"
                style={{
                  height: 50,
                  width: 25,
                  backgroundColor: "transparent"
                }}
              />
              <br />
            </div>
          </div>
        </p>
        <br />
      </div>
    </div>
  );
};

export default DailyReadings;
