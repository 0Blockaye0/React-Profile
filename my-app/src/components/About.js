import React from "react";
import Headshot from "../assets/Headshots/HeadShot-Color.jpg";

function About() {
  return (
    <section className="about-section">
      <h1 className="section-headers">About</h1>
      <div className="headshot-div">
        <img className="headshot-img" src={Headshot} alt="headshot"></img>
      </div>
      <p className="about-p-tags">
        HI, IM BLAKE. I AM A WEB DEVELOPER WITH A BACKGROUND IN WISP NETWORKING
        AND PROJECT MANAGEMENT, AS WELL AS A PASSION FOR DESIGN. RECENTLY EARNED
        A CERTIFICATE IN FULL STACK WEB DEVELOPMENT FROM THE CODING BOOTCAMP AT
        UT, WITH NEWLY DEVELOPED SKILLS IN MONGODB, EXPRESS.JS, NODE.JS, REACT
        AND MUCH MORE. WITH A CREATIVE MIND, I AM DEDICATED TO FINDING
        INNOVATIVE WAYS TO SOLVE COMPLEX PROBLEMS AND CREATE A GREAT UX. I HAVE
        WORKED ON TEAMS TO DEVELOP SINGLE-PAGE MERN APPLICATIONS, API DESIGNS,
        AND DATABASES. MY PROFESSIONAL STRENGTHS INCLUDE BEING A TEAM PLAYER,
        OPTIMISTIC PROBLEM SOLVER, WELL ORGANIZED, PUNCTUAL AND RELIABLE. MY
        PAST EXPERIENCE HAS GIVEN ME THE SKILLS TO ACHIEVE GOALS WITHOUT
        COMPROMISING INTEGRITY WHEN UNDER PRESSURE.
      </p>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
      </style>
    </section>
  );
}

export default About;
