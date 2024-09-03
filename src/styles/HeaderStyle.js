import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #fc913a;
  width: 100%;
  height: 60px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  .headerButton {
      cursor: pointer;
      border: 1px solid white;
      background-color: #ff7300;
      border-radius: 5px;
      color: white;
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
    }

  .logoutArea{

  }
  .loginArea {
    display: flex;
    flex: row;

    .welcomeMessage {
      display: flex;
      flex-direction: row;

      img {
        position: relative;
        object-fit: cover;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        margin-right: 5px;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
      }

      span {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }

  a {
    color: white;
    text-decoration: none;
    margin: 10px;
    font-size: 18px;
  }
`;

export const NavLinks = styled.nav`
  width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
