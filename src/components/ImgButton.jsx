/* eslint-disable react/require-default-props */
import React from "react";

export default function ImgButton({
  buttonName,
  state = "ready",
  onClick,
  xPadding = "px-10",
  height = "h-10",
}) {
  return (
    <button
      type="button"
      className={`whitespace-nowrap items-center rounded text-base font-bold text-white text-center 
        ${xPadding} object-left-top ${height} `}
      style={{ backgroundColor: state === "ready" ? "#435ca5" : "#c4c4c4" }}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
}
