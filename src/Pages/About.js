import React from "react";

const About = (props) => {
  return (
    <>
      <div className="Home py-5">
        <div className="container">
          <div className="text-center">
            <h1 className="text-white">This is a {props.name} Page</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
