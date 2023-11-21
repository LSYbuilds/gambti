import styled from '@emotion/styled';

const path = process.env.PUBLIC_URL;

export const GamTestWrap = styled.div`
  width: 80%;
  height: 70%;
  margin: 20px auto;
  padding: 10px;
`;

export const GameTestIntroWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  text-align: center;

  font-size: 1.2rem;

  position: relative;
  z-index: 5;
  &::after {
    content: '';
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
    background-color: #cbf9ff;
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

const commonBox = `
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  border: none;
  width: 96%;
  height: 24%;
  border-radius: 15px;
  font-size: 1.15rem;
`;
export const GamTestMainWrap = styled.div`
  padding: 20px;
  border-radius: 15px;
  background-color: #f0f0f0;

  .inner {
    width: 86%;
    margin: 0 auto;
    padding: 20px 0;
    position: relative;
    .question-number {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 0;
    }
    .image-box {
      position: relative;
      width: 100%;
      height: 90%;
      border-radius: 15px;
      box-shadow: 5px 5px 5px 1px #777777;
      img {
        width: 100%;
        height: 50%;
      }
      .question-box {
        ${commonBox};
        position: absolute;
        left: 50%;
        bottom: 10px;
        transform: translateX(-50%);
        background-color: rgb(217 217 217 / 50%);
        &:hover {
          background-color: rgb(217 217 217 / 50%);
        }
      }
    }
    .answer-box {
      padding: 40px 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .answer-btn {
        ${commonBox};
        padding: 20px 0;
        background-color: rgb(101 101 101 / 50%);
        &:hover {
          background-color: rgb(45 105 194 / 50%);
        }
      }
    }
  }
`;

export const GamTestProgress = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 4px;
  .progress-dot {
    width: 21px;
    height: 8px;
    border-radius: 30px;
    background-color: #b6bdfa;
  }
`;
