import React from "react";
import { Link } from "react-router-dom";

export default function SignupLink({
  color,
  link,
  name,
  //   xPadding = "px-40",
  height = "h-20",
}) {
  return (
    <Link
      type="button"
      className={`pt-7 whitespace-nowrap items-center rounded text-base font-bold text-white text-center 
      w-80 object-left-top ${height} `}
      style={{ backgroundColor: color }}
      to={link}
    >
      {name}
    </Link>
  );
}
