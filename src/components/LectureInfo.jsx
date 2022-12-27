// import { File } from "@components";
import React from "react";
import styled from "styled-components";


function LectureInfo() {
  return (
    <div className="overlaybox">
      <a href="https://www.snart.or.kr/web/academy/view?MENUMST_ID=22012&SNA_ACADEMY_CATEGORY_IDX=26&SNA_ACADEMY_LECTURE_IDX=10291" className="close">
      <div className="boxtitle">성남 아트센터</div>
      </a>
      <div className="first">
        <div className="triangle text">1</div>
        <div className="movietitle text">미술애호가 및 콜렉터 과정(정규강좌)</div>
      </div>
      <ul>
      <a href="https://www.snart.or.kr/web/academy/view?MENUMST_ID=22012&SNA_ACADEMY_CATEGORY_IDX=27&SNA_ACADEMY_LECTURE_IDX=10271" className="close">
        <li className="up">
          <span className="number">2</span>
          <span className="title">바이올린 A(저녁)</span>
          <span className="count">300,000원</span>
        </li>
        </a>
        <a href="https://www.snart.or.kr/web/academy/view?MENUMST_ID=22012&SNA_ACADEMY_CATEGORY_IDX=27&SNA_ACADEMY_LECTURE_IDX=10278" className="close">
        <li className="up">
          <span className="number">3</span>
          <span className="title">수묵 채색화</span>
          <span className="count">300,000원</span>
        </li>
        </a>
        <a href="https://www.snart.or.kr/web/academy/view?MENUMST_ID=22012&SNA_ACADEMY_CATEGORY_IDX=26&SNA_ACADEMY_LECTURE_IDX=10262" className="close">
        <li className="up">
          <span className="number">4</span>
          <span className="title">오페라 살롱 (정규강좌)</span>
          <span className="count">180,000원</span>
        </li>
        </a>
        <a href="https://www.snart.or.kr/web/academy/view?MENUMST_ID=22012&SNA_ACADEMY_CATEGORY_IDX=26&SNA_ACADEMY_LECTURE_IDX=10261" className="close">
        <li className="up">
          <span className="number">5</span>
          <span className="title">오페라 살롱 (베르디 vs 바그너)</span>
          <span className="count">30,000원</span>
        </li>
        </a>
      </ul>
    </div>
  );
}

export default LectureInfo;
