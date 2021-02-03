import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: 20px auto;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    color: #fff;
    background: #d3d3d3;

    &.active {
      background: #7159c1;
    }
  }

  > hr {
    width: 20%;
    height: 4px;
    margin: 0 10px;
    border: 0;
    border-radius: 15px;
    background: #d3d3d3;

    &.active {
      background: #7159c1;
    }
  }
`;
