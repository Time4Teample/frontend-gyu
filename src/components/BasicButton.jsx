/* eslint-disable react/require-default-props */
import React from "react";
// import { Link } from "react-router-dom";

export default function BasicButton({
  buttonName,
  state = "ready",
  onClick,
  xPadding = "px-10",
  height = "h-10",
}) {
  return (
    // <Link
    //   className="flex flex-wrap items-center px-5 text-white text-center
    //     text-base leading-8"
    //   // to={link}
    // >
    <button
      type="button"
      className={`whitespace-nowrap items-center rounded text-base font-bold text-white text-center 
        ${xPadding} object-left-top ${height} `}
      style={{ backgroundColor: state === "ready" ? "#435ca5" : "#c4c4c4" }}
      onClick={onClick}
    >
      {buttonName}
    </button>
    // </Link>
  );
}
