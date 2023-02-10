import React from "react";
import { useParams,useLocation } from "react-router-dom";

const Team = (props) => {
  const {employee} = useParams();
  const location = useLocation();
  //console.log(location.pathname);

  return (
    <>
      <div className="Home py-5">
        <div className="container">
          <div className="text-center">
            <h1 className="text-white">This is a {props.name} Page</h1>
            <p className="text-white">Hello {employee}</p>
            <p className="text-white">Directory : {location.pathname}</p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
