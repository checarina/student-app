import React from "react";

const ClassInfo = (props) => {
  return (
    <section>
      <h2>Class Information</h2>
      <ul>
        <li>Name: Team Semicolons</li>
        <li>Number of members: {props.members}</li>
      </ul>
      
    </section>
  );
};

export default ClassInfo;
