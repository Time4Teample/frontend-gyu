import React from "react";
import HamburgerBar from "../images/HamburgerBar";
import SNLogo from "../images/SNLogo";
import User from "../images/User";

export default function LogoBox() {
  return (
    <div>
      <div
        className="grid grid-cols-7 justify-between whitespace-nowrap"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div>
          <HamburgerBar />
        </div>
        <div>
          <SNLogo />
        </div>
        <div>
          <User />
        </div>
      </div>
    </div>
  );
}
