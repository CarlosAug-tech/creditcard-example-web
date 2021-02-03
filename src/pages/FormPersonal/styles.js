import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 20px auto;

  > div {
    width: 100%;
    padding: 20px;
    border-radius: 4px;
    background: #fff;
    text-align: center;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

    & + div {
      margin-top: 20px;
    }

    > form {
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;

      > h3 {
        width: 100%;
        margin-bottom: 20px;
        text-align: center;
      }

      > hr {
        width: 100%;
        height: 2px;
        margin-bottom: 20px;
        border: 0;
        background-color: #eee;
      }

      > div {
        width: calc(300px - 20px);
        margin-left: 10px;

        > input {
          border: 1px solid #999;
        }
      }

      > button {
        padding: 10px;
        border-radius: 4px;
        color: #fff;
        background: #7159c1;
        text-transform: uppercase;

        > span {
          margin-right: 3px;
        }

        @keyframes rotateLoading {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
`;
