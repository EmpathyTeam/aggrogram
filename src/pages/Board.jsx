import styled from "styled-components";

// const postData = {
//   title:
//   content:
//   user :
//   date:
//   imageUrl:
// }

// const Board =() =>{
//   const handleBackClick =() => {
//     window.location.href = '/board;'
//   }
// }
const Board = () => {
  return (
    <>
      <ContentWrapper>
        <BoxContainer>
          <div>
            <div>
              <div>제 취미를 소개합니다</div>
              <div>글내용: 날자:2024:ㅌㅌ.ㅌㅌ</div>

              <ImageBox>사진</ImageBox>
              <MainContainer>제취미는 ~어그로입니다</MainContainer>
            </div>
          </div>
        </BoxContainer>
      </ContentWrapper>
      <div>
        <ButtonWrapper>
          <button>뒤로가기</button>
          <button>수정하기</button>
          <button>삭제하기</button>
        </ButtonWrapper>
      </div>
    </>
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
  border-radius: 20px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
  gap: 300px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  width: 90%;
  margin-top: 50px;
  padding: 50px;
  border-radius: 20px;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  width: 90%;
  margin-top: 50px;
  padding: 50px;
  border-radius: 20px;
`;
