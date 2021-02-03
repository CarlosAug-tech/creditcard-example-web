import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => (props.isVisibleSignIn ? 'flex' : 'none')};
  width: 200px;
  padding: 10px;
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
`;

export const Content = styled.div``;
