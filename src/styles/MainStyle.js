import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin-top: 100px;
`;
export const PostList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
`;

export const PostCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(33% - 28px);
  height: 300px;
  border: 1px solid #777777;
  border-radius: 3px;
  padding: 5px;

  .imageArea {
    width: 100%;
    height: 70%;
    background-color: #9e9e9e;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .contentsArea {
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    h1 {
      font-size: 22px;
      font-weight: bold;
    }

    .profileArea {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      p {
        font-size: 16px;
        font-weight: bolder;
        color: #616161;
      }

      .userInfo {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }

      .engagementStats {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }
    }
  }
`;
