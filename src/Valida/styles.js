import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  align-items: center;
  background-color: #DF4723;

  .login-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-container form {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
  }

  .login-container form input{
    margin-top: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 48px;
    padding:  0 20px;
    font-size: 16px;
    color: #666;
  }

  .login-container form input::placeholder{
    color: #999;
    text-align: center;
  }

  .login-container form button {
    margin-top: 10px;
    border: 0;
    border-radius: 4px;
    height: 48px;
    font-size: 16px;
    background: #999;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
  p {
    color: #fff;
  }
`;