import styled, { css } from 'styled-components';

export const LoadingResult = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-left: 3px;
  }

  ${(props) =>
    props.loading &&
    css`
      > svg {
        animation: rotateLoading 2s infinite linear;
      }
    `}
  @keyframes rotateLoading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
