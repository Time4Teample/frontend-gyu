import React, { useState } from "react";
import LectureInfo from "../components/LectureInfo";
import Head from "../components/Head";

export default function Map() {
  return (
    <>
      <Head />
      <div
        className="flex flex-col items-center"
        style={{ marginTop: "10rem" }}
      >
        {LectureInfo()}
        {/* <div id="map" style={{ width: 500, height: 400 }}>
          <script
            type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bd5011f84a0ddeb9fe259ceabd8c125b"
          ></script>
        </div> */}
      </div>
    </>
  );
}
