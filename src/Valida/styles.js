import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  align-items: center;
  -webkit-font-smoothing: antialiased !important;
  font-family: Roboto;
  background: #ff9068;
  background: linear-gradient(45deg, #fd746c , #ff9068);

  .login-container {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .login-container form {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(25,25,25,.25);
    background: #fafafa;
    padding: 5rem;
    width: 600px;
  }

  .login-container form input{
    width: 500px;
    border-radius: 5px;  
    padding: 1rem;
    background: #e8ebed;
    margin: 0;
    outline: 0;
    border: 2px solid #e8ebed;
  }

  .login-container form input::placeholder{
    color: #999;
    text-align: center;
    font-size: 14px;
  }

  .login-container form button {
    width: 500px;
    margin-top: 10px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    background: #DF4723;
    color: #fff;
    cursor: pointer;
  }

  label {
    font-size: 20px;
    color: #1E1F26;
  }

  .card {
    margin-top: 50px;
    width: 600px;
  }

  .card * {
    color: #000;
  }

  .card h5 {
    font-size: 16px;
  }
`;
