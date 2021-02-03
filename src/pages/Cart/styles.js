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

    > footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 30px;

      button {
        padding: 12px 20px;
        border: 0;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        background: #7159c1;

        > a {
          color: #fff;
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

        &.checkbox__card {
          align-items: center;
          justify-content: space-between;
        }

        &.card__select {
          width: 400px;
          flex-direction: column;
        }

        &.checkbox__card,
        &.card__select {
          display: flex;
          width: 100%;

          > div {
            display: flex;
            align-items: center;

            > input[type='checkbox'] {
              cursor: pointer;
              width: 15px;
            }

            > label {
              font-size: 10px;
              color: #999;
              margin-left: 3px;
            }
          }
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

  div {
    display: flex;
    align-items: center;

    input {
      width: 50px;
      padding: 6px;
      border-radius: 4px;
      border: 1px solid #ddd;
      color: #666;
    }
  }

  button {
    padding: 6px;
    border: 0;
    background: none;
  }
`;

export const Total = styled.div`
  div {
    display: flex;
    align-items: baseline;
    margin-bottom: 10px;

    span {
      color: #999;
      font-weight: bold;
    }

    strong {
      font-size: 28px;
      margin-left: 5px;
    }
  }
`;
