import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-credit-cards/es/styles-compiled.css';

export default createGlobalStyle`
  *{
    margin: 0;
    outline:0;
    padding: 0;
    box-sizing: border-box;

    &:focus {
      outline:0;
    }
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font: 14px sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  form {
    display: flex;
    flex-direction: column;

    > div {
      position: relative;
      margin-bottom: 20px;

      > input {
        width: 100%;
        height: 35px;
        padding: 10px 25px 0 5px;
        border: 0;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.7);

        &:focus ~ label,
        &:not(:placeholder-shown) ~ label {
          top: 3px;
          left: 2px;
          color: #999;
          font-size: 10px;
        }

        &:focus ~ svg {
          color: #999;
        }
      }

      > label {
        top: 12px;
        left: 5px;
        position: absolute;
        transition: all 0.4s;
        pointer-events: none;
      }

      > svg {
        top: 12px;
        right: 5px;
        position: absolute;
        transition: all 0.4s;
      }
    }

    > button {
      height: 35px;
      border: 0;
      border-radius: 4px;
      background: #fff;
    }

    >a {
      margin-top: 10px;
      font-size: 12px;
      text-align: center;
      color: #fff;
    }
  }

`;
