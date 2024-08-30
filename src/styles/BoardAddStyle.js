import styled from "styled-components";

export const BoardAddContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  padding: 20px;
  margin-top: 50px;

  form {
    border: 1px solid #fc913a;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    gap: 30px;

    textarea {
      width: 500px;
      height: 200px;
      padding: 10px;
      resize: none;
    }

    button {
      background-color: #fc913a;
      color: white;
      border: none;
      padding: 10px;
      margin: 0 20px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const ImageArea = styled.div`
  background-color: lightgray;
  width: 500px;
  height: 200px;
  padding: 10px;
`;

export const Title = styled.input`
  background-color: lightgray;
  border: none;
  width: 500px;
  height: 50px;
  padding: 10px;
`;

export const Content = styled.textarea`
  background-color: lightgray;
  border: none;
  width: 500px;
  height: 200px;
  padding: 10px;
`;
