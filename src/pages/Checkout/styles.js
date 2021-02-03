import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  /* align-items: center; */
  max-width: 1200px;
  width: 100%;
  margin: 20px auto;

  > section {
    padding: 20px;
    margin: 10px;
    border-radius: 4px;
    background: #fff;
    text-align: center;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

    h3 {
      width: 100%;
      margin-bottom: 20px;
    }

    > hr {
      width: 100%;
      height: 2px;
      margin: 20px 0;
      border: 0;
      background: #eee;
    }

    &:nth-of-type(1) {
      display: flex;
      flex-wrap: wrap;
      width: 60%;
    }

    &:nth-of-type(2) {
      width: 40%;
    }

    > footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 30px;

      > div {
        display: block;
        text-align: left;
      }
    }

    > div {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;

      > div {
        display: flex;
        align-items: center;
        width: 50%;
        margin: 5px 0;

        > strong {
          font-size: 16px;
          color: #7159c1;
        }

        > span {
          margin-left: 2px;
          color: #333;
        }
      }
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

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    padding: 12px;
    text-align: left;
    color: #999;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  thead th,
  tbody td {
    text-align: left;
  }

  img {
    height: 100px;
  }

  strong {
    display: block;
    color: #333;
  }

  small {
    display: block;
    color: #666;
  }

  span {
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  button {
    padding: 6px;
    border: 0;
    background: none;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-size: 10px;
    font-weight: bold;
  }

  strong {
    font-size: 18px;
    margin-left: 5px;
  }

  > div {
    display: block;
    margin-top: 5px;
    text-align: left;

    > span {
      color: #333;
      font-size: 16px;
    }

    > strong {
      margin: 0;
    }
  }
`;

export const ResultSuccess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;

    > strong {
      font-size: 25px;
    }
  }

  > svg {
    margin: 10px 0;
  }

  > a {
    color: #333;
    font-size: 20px;
    text-decoration: underline;
  }
`;
