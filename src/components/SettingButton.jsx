import React from "react";
import { Link } from "react-router-dom";
import PutImage from "./PutImage";
import Setting from "../images/Setting.png";

export default function SettingButton({ link }) {
  return (
    <Link
      className="flex flex-wrap items-center px-5 text-white text-center 
        text-base leading-8"
      to={link}
    >
      <PutImage
        style={{
          // height: "150px",
          // width: "150px",
          backgroundImage: `url(${Setting})`,
        }}
      />
    </Link>
  );
}
