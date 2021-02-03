import styled from 'styled-components';

export const Container = styled.header`
  z-index: 100;
  width: 100%;
  position: fixed;
  background: #7159c1;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 80px;
  margin: 0 auto;

  > nav {
    > a {
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 18px;
      letter-spacing: 3px;
      transition: all 0.4s;
      > svg {
        margin-right: 5px;
      }

      &:hover {
        color: #eee;
      }
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;

  > li {
    position: relative;

    & + li {
      margin-left: 10px;
      padding-left: 10px;
      border-left: 1px solid #999;
    }

    > a {
      color: #fff;
    }
  }
`;

export const MenuProfile = styled.ul`
  display: flex;
  align-items: center;

  > li {
    position: relative;

    & + li {
      margin-left: 10px;
      padding-left: 10px;
    }

    > a {
      color: #fff;
    }

    &:nth-of-type(1) {
      > div {
        display: flex;
        align-items: center;

        > svg {
          margin: 0 3px;
        }
      }
    }

    > img {
      cursor: pointer;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #eee;
      transition: opacity 0.4s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
