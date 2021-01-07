import React from "react";
import Router from "./components/router";
import Header from "./components/header";
import About from "./components/About";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import "./components/MainPage.css";
import FieldNotes from "./components/FieldNotes";
import DailyReadings from "./components/DailyReadings";
import Podcasts from './components/Podcasts';
import News from './components/News';



const App = () => {
  return (
    <div>
      <Header />
     
      <Router path="/">
        <Landing/>
      </Router>


      {/* //About Section */}
      <Router path="/About">
        <About />
      </Router>

       {/* //From The Editor */}
       <Router path="/FieldNotes">
        <FieldNotes />
      </Router>

         {/* //Daily Readings Section */}
         <Router path="/DailyReadings">
        <DailyReadings />
      </Router>

       {/* //PodcastsSection */}
       <Router path="/Podcasts">
        <Podcasts />
      </Router>

      
       {/* //PodcastsSection */}
       <Router path="/News">
        <News />
      </Router>

      {/* //The Footer  */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
