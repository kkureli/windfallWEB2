import React from "react";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img
          src={require("../app_logo.png")}
          width="80px"
          height="80px"
          alt=""
        />
        <h2 style={{ color: "rgb(246,161,91)", marginLeft: 20 }}>Windfall</h2>
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
        }}
      >
        <a style={{ color: "black", textDecoration: "none" }} href="#features">
          <h3
            style={{
              marginRight: 30,
            }}
          >
            Features
          </h3>
        </a>
        <a style={{ color: "black", textDecoration: "none" }} href="#contactUs">
          <h3>Contact</h3>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
