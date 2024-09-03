import React from "react";
import styled from "styled-components";

const RadiusOrangeButton = ({ type, onClick, children }) => {
  return (
    <StyledBoardButton type={type} onClick={onClick}>
      {children}
    </StyledBoardButton>
  );
};

export default RadiusOrangeButton;

export const StyledBoardButton = styled.button`
  cursor: pointer;
  border: 1px solid #dddddd;
  background-color: #ff7300;
  border-radius: 5px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  height: 40px;
  width: 80px;
  margin-left: 10px;
  &:hover {
    background-color: #fc913a;
  }

  &:active {
    border: 1px solid black;
  }
`;
