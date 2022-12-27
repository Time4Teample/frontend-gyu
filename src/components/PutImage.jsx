import styled from "styled-components";
import Interest from "../images/Interest.png";

const PutImage = styled.div`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "100px"};
  background-size: cover;
  background-image: url(${Interest});
  border-radius: ${(props) => props.borderRadius || "0px"};
  fill: ${(props) => props.fill || "#000000"};
  font-size: 15px;
  opacity: ${(props) => props.opacity || "1"};
  alignitems: "center";
  textalign: "center";
`;

export default PutImage;
