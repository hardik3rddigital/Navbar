import React from "react";
import { useParams,useLocation,useHistory } from "react-router-dom";

const Team = (props) => {
  const {employee} = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log(history.location.pathname);

  return (
    <>
      <div className="Home py-5">
        <div className="container">
          <div className="text-center">
            <h1 className="text-white">This is a {props.name} Page</h1>
            <p className="text-white">Hello {employee}</p>
            <p className="text-white">Directory : {location.pathname}</p>
            <button className="btn btn-light" onClick={()=> {history.goBack()}}>Go Back</button>
            <button className="btn btn-light m-3" onClick={()=> {history.push('/')}}>Home Page</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
