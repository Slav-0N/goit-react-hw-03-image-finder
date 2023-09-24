import styled from 'styled-components';

export const Div = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 600px;
    min-width: 1000px;

    padding: 2px;
    background-color: #fff;
    border-radius: 3px; */
  div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
  }

  img {
    /* margin: auto 0;
    width: 100%; */
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
  }
`;
