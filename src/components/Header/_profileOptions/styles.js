import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => (props.isVisibleProfile ? 'flex' : 'none')};
  flex-direction: column;
  width: 200px;
  padding: 15px;
  top: calc(100% + 30px);
  left: calc(50% - 100px);
  position: absolute;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    width: 0;
    height: 0;
    top: -15px;
    left: calc(50% - 10px);
    position: absolute;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid rgba(0, 0, 0, 0.5);
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #999;
    color: #fff;
    transition: all 0.4s;

    & + a {
    }

    &:last-child {
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #999;
    }

    &:hover {
      color: #999;
    }
  }
`;
