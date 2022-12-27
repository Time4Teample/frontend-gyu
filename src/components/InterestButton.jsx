import styled from "styled-components";

const InterestButton = styled.button.attrs((props) => ({ id: props.id }))`
  cursor: ${(props) => props.disabled || "auto"};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  background-color: ${(props) => props.color || "#c4c4c4"};

  width: ${(props) => props.width || "160px"};
  height: ${(props) => props.height || "30px"};
  border: ${(props) => props.border || "0px solid white"};
  margin: ${(props) => props.margin || "0 auto"};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};

  border-radius: ${(props) => props.borderRadius || "30px"};
  font-family: Itim;
  font-size: 22px;
  font-weight: bold;
  color: ${(props) => props.textcolor || "black"};

  &:hover {
    opacity: 0.5;
  }

  &:focus {
    opacity: 0.5;
  }
`;

export default InterestButton;
