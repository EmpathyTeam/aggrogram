import React from "react";
import styled from "styled-components";
import SignUp from "../components/Join/SignUp";
import SignIn from "../components/Join/SignIn";

const Join = () => {
  return (
    <>
      <SignUp />
      <SignIn />
    </>
  );
};

export default Join;

export const JoinContainer = styled.div`
  width: 500px;
  height: 520px;
  display: relative;
  border: 1px solid #fc913a;
  margin: auto;
  margin-top: 100px;
  text-align: center;
  justify-content: center;
  border-radius: 20px;

  h1 {
    font-size: 32px;
    margin-bottom: 50px;
    font-weight: 700;
    color: #fc913a;
  }

  div {
    margin-top: 60px;
  }

  input {
    width: 400px;
    height: 50px;
    display: flex;
    margin: auto;
    border: 0;
    border-radius: 30px;
    background-color: #f5f5f5;
    padding-left: 20px;
  }

  input:focus {
    outline: 1px solid #fc913a;
  }

  button {
    width: 420px;
    height: 60px;
    border: 0;
    border-radius: 30px;
    background-color: #fc913a;
    color: white;
    margin: 20px auto 10px auto;
    font-size: 20px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #777777;
    font-size: 14px;
  }

  span {
    color: black;
    font-weight: 500;
  }

  p {
    text-align: left;
    margin-left: 50px;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .message {
    color: red;
    font-size: 10pt;
  }
`;
