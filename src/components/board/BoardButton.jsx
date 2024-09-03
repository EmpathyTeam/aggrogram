import React from "react";
import styled from "styled-components";

const BoardButton = ({ type, onClick, children }) => {
  return (
    <StyledBoardButton type={type} onClick={onClick}>
      {children}
    </StyledBoardButton>
  );
};

export default BoardButton;

export const StyledBoardButton = styled.button`
  background-color: #fc913a;
  color: white;
  border: none;
  padding: 10px;
  margin: 0 20px;
  border-radius: 5px;
  cursor: pointer;
`;
