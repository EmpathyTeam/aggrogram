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
      border-radius: 5px;
      font-size: 25px;
      /* background-color: lightgray; */
      border: 1px solid gray;
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
      border-radius: 5px;
      cursor: pointer;
    }

    textarea {
      font-size: 15px;
      /* background-color: lightgray; */
      border: 1px solid gray;
      width: 500px;
      height: 150px;
      padding: 10px;
      border-radius: 5px;
      resize: none;
    }

    .previewImage {
      width: 500px;
      height: 200px;
      border: 1px solid gray;
      padding: 10px;
      border-radius: 5px;

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
      /* background-color: lightgray; */
      border: 1px solid gray;
      border-radius: 5px;
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

    .uploadBtn {
      background-color: #fc913a;
      color: white;
      width: 150px;
      height: 30px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    #file {
      display: none;
    }
  }
`;
