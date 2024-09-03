import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  margin-top: 30px;
  border-radius: 20px;

  .postInfoArea {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 20px;
  }

  .postArea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px solid #fc913a;
    border-radius: 20px;
    padding: 30px 40px;
    gap: 30px;
  }

  .title {
    border-radius: 5px;
    font-size: 25px;
    width: 500px;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  .postInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    .postUserInfo {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .profileImg {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .image {
    width: 500px;
    height: 300px;
    /* border: 1px solid black; */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 10px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .context {
    width: 500px;
    height: 150px;
    padding: 20px 10px 10px 10px;
    white-space: pre-wrap;
    overflow-y: auto;
    word-wrap: break-word;
    overflow-x: hidden;
    line-height: 1.5;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;
