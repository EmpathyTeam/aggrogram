import React from "react";
import styled from "styled-components";

const RoundButton = ({ children, type, onClick }) => {
  return (
    <StyledRoundButton type={type} onClick={onClick}>
      {children}
    </StyledRoundButton>
  );
};

export default RoundButton;

const StyledRoundButton = styled.button`
  background-color: ${({ type }) => {
    switch (type) {
      case "write":
        return "#fc913a";
      case "top":
        return "#777";
    }
  }};
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${({ type }) => {
      switch (type) {
        case "write":
          return "#ff7f2a";
        case "top":
          return "#555";
      }
    }};
  }
`;
