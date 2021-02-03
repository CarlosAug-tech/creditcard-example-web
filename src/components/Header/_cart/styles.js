import styled from 'styled-components';

export const Container = styled.button`
  position: relative;
  border: 0;
  background: transparent;

  > a {
    color: #fff;
    transition: color 0.2s;

    &:hover {
      color: #eee;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      top: -5px;
      right: -8px;
      position: absolute;
      border-radius: 50%;
      color: #fff;
      font-size: 10px;
      background: orangered;
    }
  }
`;
