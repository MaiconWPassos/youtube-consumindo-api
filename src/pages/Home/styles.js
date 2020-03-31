import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 900px;
  height: 646px;
  background: #fff;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.23);
  border-radius: 10px;

  header {
    margin: 0;
  }

  input {
    height: 50px;
    padding: 0 20px;
    font-size: 16px;
    border-radius: 5px;
    color: #707070;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: 0.25s;

    &:focus {
      border-color: #2fe6de;
    }
  }

  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0;

    button {
      width: 100px;
      margin: 22.5px;
      background: #2fe6de;
      height: 50px;
      font-size: 36px;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      border-radius: 5px;
      transition: 0.25s;
      &:hover {
        background: #044845;
      }
    }
  }

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    div {
      width: 100%;
      padding: 0 30px 25px 0;
      display: flex;
      flex-direction: row;
      align-items: center;

      label {
        margin-right: 20px;
        font-size: 16px;
      }
      span {
        margin-left: 10px;
      }
    }
  }
`;
