import React from "react";
import "./NoResult.css";
import { makeStyles } from "@material-ui/core";

const NoResult = () => {
  return (
    <div id="main">
      <div className="fof">
        <h1>No Result Found</h1>
      </div>
    </div>
  );
};

export default React.memo(NoResult);
