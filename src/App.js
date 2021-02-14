import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide";
import CenterImage from "./components/CenterImage";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
      className="App"
    >
      <Navbar />
      <div
        className="center"
        id="features"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          marginTop: 20,
        }}
      >
        <LeftSide />
        <CenterImage />
        <RightSide />
      </div>
      <ContactUs />
    </div>
  );
}

export default App;
