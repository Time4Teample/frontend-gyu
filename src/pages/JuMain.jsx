import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import MapLinkButton from "../components/MapLinkButton";
import InterestLinkButton from "../components/InterstLinkButton";
import SettingButton from "../components/SettingButton";
import LogoutButton from "../components/LogoutButton";
import Map from "../images/Map.png";
import PutImage from "../components/PutImage";
import Interest from "../images/Interest.png";
import Head from "../components/Head";

export default function Main() {
  return (
    <>
      <Head />
      <div
        className="flex flex-col items-center"
        style={{ marginTop: "13rem" }}
      >
        <div className="flex whitespace-nowrap w-full">
          <div className="flex-col text-3xl font-bold pl-12">수강정보</div>
          <div className="text-xl pt-2.5 pl-3 font-bold">
            수강신청 관련 서비스입니다.
          </div>
        </div>
        <form>
          <div
            // className="flex whitespace-nowrap"
            style={{
              width: "600px",
              marginTop: 70,
              display: "flex",
              alignContent: "spaceAround",
            }}
          >
            {/* <div> */}

            <div>
              <MapLinkButton link="/map" />
              <p className="pl-7">
                내 주변 강좌 <br /> 확인하기
              </p>
            </div>
            <div>
              <InterestLinkButton
                name="../images/Interest.png"
                link="/interest"
              />
              <p className="pl-10">
                관심사 <br /> 설정하기
              </p>
            </div>
            <div>
              {/* <img src="../images/Map.png"> */}
              <SettingButton name="../images/Map.png" link="/map" />
              <p className="pl-10">환경설정</p>
            </div>

            <div>
              <LogoutButton name="../images/logout.png" link="/login" />
              <p className="pl-11">로그아웃</p>
            </div>
            {/* </div> */}
          </div>
        </form>
      </div>
    </>
  );
}
