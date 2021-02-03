import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
 height: calc(100vh - 100px);
  padding: 20px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  height: calc(100vh - 100px);
  margin: 0 auto;


  > a {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    padding: 20px;
    border-radius: 4px;
    color: #fff;
    background: #7159c1;
    transition: opacity .4s;

    &:hover {
      opacity: 0.7;
    }
  }
`