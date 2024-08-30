import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #fc913a;
  width: 100%;
  height: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  a {
    color: white;
    text-decoration: none;
    margin: 10px;
    font-size: 20px;
  }
`;

export const NavLinks = styled.nav`
  width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
