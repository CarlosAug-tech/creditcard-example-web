import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  /* height: calc(100vh - 80px);
  padding-top: 80px; */
  background: #f5f5f5;
`;

export const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  > form {
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;

    > div {
      width: calc(300px - 20px);
      margin-left: 10px;

      > input {
        border: 1px solid #999;

        &[type='number'] {
          padding-right: 5px;
        }
      }
    }

    > hr {
      width: 100%;
      height: 2px;
      margin-bottom: 20px;
      background: #eee;
      border: 0;
    }

    > h3 {
      width: 100%;
      text-align: center;
      margin-bottom: 10px;
    }

    > button {
      padding: 10px;
      border-radius: 4px;
      color: #fff;
      background: #7159c1;
      text-transform: uppercase;
    }
  }
`;
