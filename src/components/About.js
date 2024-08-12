import React from "react";

function About({bio, linkedin, github}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {linkedin && <p>LinkedIn: <a href={linkedin}>{linkedin}</a></p>}
      {github && <p>GitHub: <a href={github}>{github}</a></p>}
    </div>
  );
}

export default About;