import styled from "styled-components";

const Board = () => {
  return (
    // <div>
    <ContentWrapper>
      <BoxContainer>
        <div>
          <div>
            <div>제 취미를 소개합니다</div>
            <div></div>
          </div>
        </div>

        {/* <ButtonWrapper>
          <Button>뒤로 가기</Button>
          <Button>수정하기</Button>
          <Button>삭제하기</Button>
        </ButtonWrapper> */}
      </BoxContainer>
    </ContentWrapper>
    // </div>
  );
};

export default Board;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  /* height: 100vh; */
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
  width: 80%;
  margin-top: 50px;
  padding: 50px;
`;

// const ButtonWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: red;
// `;
