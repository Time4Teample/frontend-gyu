import React from "react";
import { Link } from "react-router-dom";
import PutImage from "./PutImage";
import Interest from "../images/Interest.png";

export default function InterestLinkButton({ link }) {
  return (
    <Link
      className="flex flex-wrap items-center px-5 text-white text-center 
        text-base leading-8"
      to={link}
    >
      <PutImage
        style={{
          //   height: "150px",
          //   width: "150px",
          backgroundImage: `url(${Interest})`,
        }}
      />
    </Link>
  );
}
