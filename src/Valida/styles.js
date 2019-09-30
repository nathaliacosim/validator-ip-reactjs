import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  align-items: center;

  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #ff9068;
    background: linear-gradient(45deg, #fd746c , #ff9068);
    height: 100%;
    padding-bottom: 30px;
  }

  .login-container form {
    min-width: 100px;
    max-width: 80%;
    min-height: 200px;
    max-height: 100%;
    background: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(25,25,25,.25);
    padding: 3rem;
  }

  .login-container form input{
    width: 100%;
		border-radius: 5px;
		padding: 1rem 4rem;
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
    margin-top: 10px;
    border: 0;
    border-radius: 4px;
    height: 48px;
    width:100%;
    font-size: 16px;
    background: #DF4723;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
  p {
    color: #fff;
  }

  .result {
    margin-top: 10%;
    font-size: 18px;
    font-family: Roboto;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
  }

  label {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    font-weight: 900;
    color: #1E1F26;
  }
`;