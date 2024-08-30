import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  /* z-index: 1000; */
`;

export const RoundButton = styled.button`
  background-color: ${({ type }) => {
    switch (type) {
      case 'write':
        return '#fc913a';
      case 'top':
        return '#777'; 
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
        case 'write':
          return '#ff7f2a';
        case 'top':
          return '#555';
      }
    }};
  }
`;