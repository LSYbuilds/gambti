import styled from '@emotion/styled';

const path = process.env.PUBLIC_URL;

export const GameTestIntroWrap = styled.div`
  width: 80%;
  height: 70%;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  text-align: center;

  font-size: 1.2rem;

  position: relative;
  &::after{
    content: "";
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: url(${path}/image/gamtestbg.jpg) center center;
    background-size: cover;
    background-color: white;
    z-index: -1;
  }
  h3 {
    font-size: 2.5rem;
    font-weight: 700;
  }
  span {
    display: block;
    margin: 0 auto;
    font-size: 1.8rem;
    font-weight: 700;
    padding: 20px 0;
  }
  .alert {
    width: 52px;
    height: 45px;
    margin: 4px;
    background: url(${path}/image/alert.svg) center center;
    background-size: cover;
  }
  p {
    margin: 20px 0;
  }
  button {
    padding: 5px 40px;
    border-color: transparent;
    border-radius: 30px;
    background-color: #CBF9FF;
    font-size: 1.4rem;
    font-weight: 700;
  }
`;