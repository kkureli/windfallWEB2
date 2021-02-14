import React from "react";

const CenterImage = () => {
  return (
    <div
      style={{
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={require("../appSS.png")} width="320px" height="600px"></img>
    </div>
  );
};

export default CenterImage;
