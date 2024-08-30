import React from 'react';
import * as S from '../../styles/sideBarStyle.js'
const RoundButton = ({ children, type, onClick }) => {
  return (
    <S.RoundButton type={type} onClick={onClick}>
      {children}
    </S.RoundButton>
  );
};

export default RoundButton;
