import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ImgButton from "../components/ImgButton";
import InterestButton from "../components/InterestButton";

export default function Interest() {
  return (
    <>
      <div
        className="flex flex-col items-center"
        style={{ marginTop: "15rem" }}
      >
        <div className="flex whitespace-nowrap w-full">
          <div className="flex-col text-3xl font-bold pl-12">
            관심사 설정하기
          </div>
          <div className="text-xl pt-2.5 pl-3 font-bold">
            관심사를 설정해주세요
          </div>
        </div>
        <form className="flex whitespace-nowrap" style={{ marginTop: "2rem" }}>
          <InterestButton
            color="#435ca5"
            width="180px"
            height="60px"
            borderRadius="5px"
            alignItems="right"
            textcolor="white"
          >
            {" "}
            취미{" "}
          </InterestButton>

          <InterestButton
            color="#FFFFFF"
            width="180px"
            height="60px"
            borderRadius="5px"
            alignItems="right"
            marginLeft="20px"
          >
            {" "}
            언어{" "}
          </InterestButton>
          <InterestButton
            color="#FFFFFF"
            width="180px"
            height="60px"
            borderRadius="5px"
            alignItems="right"
            marginLeft="20px"
          >
            {" "}
            스포츠{" "}
          </InterestButton>
          <InterestButton
            color="#FFFFFF"
            width="180px"
            height="60px"
            borderRadius="5px"
            alignItems="right"
            marginLeft="20px"
          >
            {" "}
            기타{" "}
          </InterestButton>
        </form>
        <div className="mt-5">
          <InterestButton
            color="#435ca5"
            textcolor="white"
            width="250px"
            height="60px"
            borderRadius="5px"
            alignItems="right"
          >
            {" "}
            가요교실{" "}
          </InterestButton>

          <InterestButton
            color="#435ca5"
            textcolor="white"
            width="250px"
            height="60px"
            borderRadius="5px"
            alignItems="right"
            marginLeft="20px"
          >
            {" "}
            댄스{" "}
          </InterestButton>
          <InterestButton
            color="#FFFFFF"
            width="250px"
            height="60px"
            borderRadius="5px"
            alignItems="right"
            marginLeft="20px"
          >
            {" "}
            바둑{" "}
          </InterestButton>
        </div>

        <div className="mt-3">
          <InterestButton
            color="#FFFFFF"
            width="250px"
            height="60px"
            borderRadius="5px"
            alignItems="right"
          >
            {" "}
            심리치료{" "}
          </InterestButton>

          <InterestButton
            color="#FFFFFF"
            width="250px"
            height="60px"
            borderRadius="5px"
            alignItems="right"
            marginLeft="20px"
          >
            {" "}
            수채화{" "}
          </InterestButton>
          <InterestButton
            color="#FFFFFF"
            width="250px"
            height="60px"
            borderRadius="5px"
            alignItems="right"
            marginLeft="20px"
          >
            {" "}
            포켓볼{" "}
          </InterestButton>
        </div>
      </div>
    </>
  );
}
