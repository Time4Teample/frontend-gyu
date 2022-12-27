// import { File } from "@components";
import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
// import UserPhoto from "../../components/UserPhoto";
import Typography from "./Typography";
import InterestButton from "./InterestButton";

const TestDIV = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
`;

function LectureInfo() {
  const { tempName } = useParams();

  //현재 받아올 값이 없으므로 유저 정보를 임의로 입력해둠
  const users = [
    {
      id: 1,
      lecturename: "재즈",
      time: "3시부타 4시",
      teacher: "가나다 강사",
      price: "5000",
    },
    {
      id: 2,
      lecturename: "음악",
      time: "3시부타 4시",
      teacher: "가나다 강사",
      price: "5000",
    },
    {
      id: 3,
      lecturename: "가요",
      time: "3시부타 4시",
      teacher: "가나다 강사",
      price: "5000",
    },
  ];

  // secialId는 해당 사이트에 점속한 유저의 ID라 가정하여 임의로 입력해둠
  const specialId = 1;

  // speicialId에 해당하는 유저의 정보를 가져옴
  function findUserInfo(element) {
    if (element.id === specialId) {
      return true;
    }
  }
  const Info = users.find(findUserInfo);
  //end(임의로 유저정보 입력해둠)

  return (
    <>
      {/* <Box //흰색 배경
        width="600px"
        height="250px"
        borderRadius="5px"
        backgroundColor="white"
      > */}
      <div
        style={{
          display: "flex",
          width: "600px",
          height: "250px",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        {/* <UserPhoto /> */}
        <div style={{ marginLeft: "15px", width: "285px" }}>
          {/* spcialId에 해당하는 유저의 정보들 출력 */}
          <Typography marginBottom="5px" size="40px">
            {Info.lecturename}
          </Typography>
          <Typography marginBottom="5px" size="20px">
            강의시간 : {Info.time}
          </Typography>
          <Typography marginBottom="5px" size="20px">
            강사명 : {Info.teacher}
          </Typography>
          <Typography marginBottom="5px" size="20px">
            비용 : {Info.price}
          </Typography>
          {/* Follow 버튼 */}
          <InterestButton
            color="#006600"
            width="85px"
            height="33px"
            borderRadius="5px"
            textcolor="white"
          >
            {" "}
            신청하기{" "}
          </InterestButton>
          <InterestButton
            color="#CC0000"
            width="85px"
            height="33px"
            borderRadius="5px"
            marginLeft="10px"
            textcolor="white"
          >
            {" "}
            취소하기{" "}
          </InterestButton>
        </div>
      </div>
      {/* </Box> */}
      {/* <File open={true} /> */}
    </>
  );
}

export default LectureInfo;
