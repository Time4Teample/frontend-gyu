import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BasicButton from "../components/BasicButton";
import InputBox from "../components/InputBox";
import Head from "../components/Head";
import LinkButton1 from "../components/LinkButton1";

export default function Login() {
  const navigate = useNavigate();
  const type = window.location.pathname.includes("mypage") ? "user" : "admin";

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <>
      <Head />
      <div
        className="flex-col justify-center px-4"
        style={{ marginTop: "13.125rem" }}
      >
        {/* {type !== "user" && ( */}
        <div className="flex  whitespace-nowrap">
          <div className="flex-col justify-center text-3xl font-bold">
            로그인
          </div>
          <div className="text-xl pt-2.5 pl-3 font-bold">로그인하여 주세요</div>
        </div>
        {/* )} */}
        <div className="flex justify-center pt-12">
          <div className="flex-col space-y-4 pr-4" style={{ width: "30rem" }}>
            <InputBox
              text={userInfo.id}
              onChange={handleChange}
              placeholder="id"
              iconLeft
              height="h-16"
            />
            <InputBox
              text={userInfo.password}
              onChange={handleChange}
              placeholder="password"
              height="h-16"
              iconLeft
            />
            <div
              className="flex whitespace-nowrap justify-between space-x-16 pt-1.5"
              style={{ fontSize: "0.875rem" }}
            >
              <Link to="/signup">회원가입하기</Link>
              {/* {type === "user" ? (
              <Link to="/login">관리자 모드 로그인</Link>
            ) : (
              <Link to="/mypage/login">일반 사용자 로그인</Link>
            )} */}
            </div>
          </div>
          <div className="w-24">
            {/* <BasicButton
              buttonName="Log in"
              height="h-36"
            /> */}
            <LinkButton1
              color="#435ca5"
              name="가입하기"
              link="/main"
              height="h-36"
            />
          </div>
        </div>
      </div>
    </>
  );
}
