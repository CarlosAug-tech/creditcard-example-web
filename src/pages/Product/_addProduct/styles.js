import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
 height: calc(100vh - 100px);
  padding: 20px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  height: calc(100vh - 100px);
  margin: 0 auto;

  > form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    padding: 20px;
    background: #fff;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);

    > input {
      width: 100%;
      padding: 16px;
      border-radius: 4px;

      & + input {
        margin-top: 10px;
      }
    }

    button {
      height: 50px;
      margin-top: 10px;
      padding: 16px;
      color: #fff;
      background-color: #7159c1;
    }
  }
`

export const ImageSelect = styled.div`
  align-self: center;
  width: 180px;
  position: relative;

  >img {
    width: 180px;
    height: 180px;
    border: 1px solid #8e8e8e;
    border-radius: 50%;
    background: #dbdbdb;
  }

  input[type="file"] {
    display: none;
  }

  > label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    bottom: 5px !important;
    right: 5px !important;
    top: unset !important;
    left: unset !important; 
    position: absolute;
    border-radius: 50%;
    background: #7159c1;
    pointer-events: unset !important;
  }


`