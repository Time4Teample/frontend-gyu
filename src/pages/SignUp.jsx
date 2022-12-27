import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BasicButton from "../components/BasicButton";
import InputBox from "../components/InputBox";
import SignupLink from "../components/SignupLink";

export default function SignUp() {
  const navigate = useNavigate();
  const type = window.location.pathname.includes("mypage") ? "user" : "admin";

  const [userInfo, setUserInfo] = useState({
    username: "",
    birthday: "",
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="flex-col justify-center px-4" style={{ marginTop: "5rem" }}>
      {/* {type !== "user" && ( */}
      <div className="flex  whitespace-nowrap">
        <div className="flex-col justify-center text-3xl font-bold">
          회원가입
        </div>
      </div>
      {/* )} */}
      <div className="flex justify-center pt-12">
        <div className="flex-col space-y-4 pr-4" style={{ width: "42rem" }}>
          <div className="font-bold">이름</div>
          <InputBox
            text={userInfo.username}
            onChange={handleChange}
            placeholder="Name"
            iconLeft
            height="h-12"
          />
          <div className="font-bold">생년월일(6자리)</div>
          <InputBox
            text={userInfo.birthday}
            onChange={handleChange}
            placeholder="Birthday"
            height="h-12"
            iconLeft
          />
          <div className="font-bold">아이디</div>
          <InputBox
            text={userInfo.id}
            onChange={handleChange}
            placeholder="ID"
            height="h-12"
            iconLeft
          />
          <div className="font-bold">비밀번호</div>
          <InputBox
            text={userInfo.password}
            onChange={handleChange}
            placeholder="Password"
            height="h-12"
            iconLeft
          />
          <div className="pt-14 pl-40 w-24" style={{ textAlign: "center" }}>
            {/* <BasicButton buttonName="가입하기" height="h-20" /> */}
            <SignupLink color="#435ca5" name="가입하기" link="/login" />
          </div>
        </div>
      </div>
    </div>
  );
}
