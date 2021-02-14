/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const RightSide = () => {
  return (
    <div
      style={{
        // marginRight: 30,
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "column",
        width: "33.33%",
      }}
    >
      <div style={{ alignSelf: "center", justifyContent: "center" }}>
        <h3 style={{ color: "rgb(246,161,91)", textAlign: "center" }}>
          Paylaş
        </h3>
        <p
          style={{
            width: 250,
            fontWeight: "bold",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Çekilişleri arkadaşlarınızla paylaşabilirsiniz.
        </p>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "rgb(246,161,91)" }}>Download</h3>
        <img
          style={{ marginTop: 20, alignSelf: "center", minWidth: "80%" }}
          src={require("../appleDownload.png")}
          height="100"
        ></img>
      </div>
    </div>
  );
};

export default RightSide;
