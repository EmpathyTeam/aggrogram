import styled from "styled-components";

export const BoardFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

    .title {
      background-color: lightgray;
      border: none;
      width: 500px;
      height: 50px;
      padding: 10px;
    }

    button {
      background-color: #fc913a;
      color: white;
      border: none;
      padding: 10px;
      margin: 0 20px;
    }

    textarea {
      background-color: lightgray;
      border: none;
      width: 500px;
      height: 200px;
      padding: 10px;
      resize: none;
      white-space: pre-line;
    overflow-y: auto;
    }

    .previewImage {
      width: 500px;
      height: 200px;
      border: 1px solid black;
      padding: 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .emptyImage {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: lightgray;
      border: none;
      width: 500px;
      height: 200px;
      padding: 10px;
      resize: none;
      color: gray;

      span {
        margin-bottom: 5px;
      }

      span:nth-child(2) {
        font-size: small;
      }
    }
  }
`;
