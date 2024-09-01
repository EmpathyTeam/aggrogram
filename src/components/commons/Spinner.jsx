import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 8px solid #fc913a;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
  display: block;
`;

const Spinner = () => {
  return <StyledSpinner />;
};

export default Spinner;