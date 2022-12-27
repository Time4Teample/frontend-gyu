import React from "react";
import { Link } from "react-router-dom";

export default function LinkButton({
  color,
  link,
  name,
  xPadding = "px-10",
  height = "h-10",
}) {
  return (
    <Link
      type="button"
      className={`pt-14 whitespace-nowrap items-center rounded text-base font-bold text-white text-center 
      ${xPadding} object-left-top ${height} `}
      style={{ backgroundColor: color }}
      to={link}
    >
      {name}
    </Link>
  );
}
