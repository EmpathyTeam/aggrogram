import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 50px;
  border-radius:20px;

  .postInfoArea {
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 20px;
  }

  .postArea {
    border: 1px solid #fc913a;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    gap: 30px;
  }

  .title {
    background-color: lightgray;
    border: none;
    width: 500px;
    height: 50px;
    padding: 10px;
  }

  .image {
    width: 500px;
    height: 300px;
    border: 1px solid black;
    padding: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .context {
    background-color: lightgray;
    border: none;
    width: 500px;
    height: 200px;
    padding: 10px;
  }

  button {
    background-color: #fc913a;
    color: white;
    border: none;
    padding: 10px;
    margin: 0 20px;
    cursor: pointer;
  }
`;
