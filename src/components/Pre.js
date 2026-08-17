import React from "react";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div className="preloader-brand">
        <span>AGNIK DUTTA</span>
      </div>
      <div className="preloader-line" style={{ marginTop: "16px" }}></div>
    </div>
  );
}

export default Pre;

