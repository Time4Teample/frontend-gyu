/* eslint-disable react/require-default-props */
import React from "react";
import PutImage from "./PutImage";
import HamburgerBar from "../images/HamburgerBar.png";
import SNLogo from "../images/SNLogo.png";
import User from "../images/User.png";

export default function Head() {
  return (
    // <button
    //   type="button"
    //   className={`whitespace-nowrap items-center rounded text-base font-bold text-white text-center
    //     ${xPadding} object-left-top ${height} `}
    //   style={{ backgroundColor: state === "ready" ? "#435ca5" : "#c4c4c4" }}
    //   onClick={onClick}
    // >
    //   {buttonName}
    // </button>
    // <div
    //   style={{
    //     backgroundColor: "white",
    //     height: "80px",
    //     alignContent: "center",
    //   }}
    //   className="flex whitespace-nowrap w-full"
    // >
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <div
        className="flex items-center"
        style={{
          // backgroundColor: "white",
          // width: "50rem",
          height: "90px",
          alignContent: "center",
          textAlign: "center",
          justifyContent: "space-around",
        }}
      >
        <PutImage
          style={{
            height: "35px",
            width: "35px",
            backgroundImage: `url(${HamburgerBar})`,
          }}
        />
        <PutImage
          style={{
            height: "50px",
            width: "155px",
            backgroundImage: `url(${SNLogo})`,
          }}
        />
        <PutImage
          style={{
            height: "40px",
            width: "40px",
            backgroundImage: `url(${User})`,
          }}
        />
      </div>
    </div>
  );
}
