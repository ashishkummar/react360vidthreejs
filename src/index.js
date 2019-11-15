import React from "react";
import ReactDOM from "react-dom";
import Video360Three from "./Video360Three";

ReactDOM.render(
  <>
    <br />
    <Video360Three
      Id="video1"
      autoRotate="true"
      src="pano.mp4"
      width="320"
      height="180"
    /> 
  
  </>,
  document.getElementById("root")
);
