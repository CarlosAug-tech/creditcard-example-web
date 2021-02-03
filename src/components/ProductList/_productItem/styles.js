import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 20px;
  margin: 10px;
  position: relative;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  > img {
    width: 100%;
    height: 200px;
  }

  > button {
    padding: 10px;
    margin-top: auto;
    border: 0;
    border-radius: 4px;
    color: #fff;
    background: #7159c1;
  }
`;

export const ProductDescription = styled.div`
  margin: 20px 0;
  /* padding: 0 20px; */

  > strong {
    font-size: 16px;
  }

  > p {
    display: -webkit-box;
    margin-top: 5px;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  > span {
    font-weight: bold;
  }
`;
