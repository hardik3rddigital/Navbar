import React from "react";
import { useHistory } from "react-router-dom";

const Error = (props) => {
    const goback = useHistory();

    return(
        <>
            <div className="Home py-5">
                <div className="container">
                    <div className="text-center">
                        <h1 className="text-white">Page Not Fount</h1>
                        <p className="text-center text-white">Sorry, this page is not found</p>
                        <button className="btn btn-light" onClick={()=> goback.goBack()}>Go to Home</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error;