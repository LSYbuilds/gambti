import styled from '@emotion/styled';

const path = process.env.PUBLIC_URL;

export const ResultWrap = styled.div`
  margin: 0 auto;
  width: 1400px;
  height: auto;
`;

export const ResultTitle = styled.div`
  width: 100%;
  text-shadow:
    -1px 0px yellow,
    0px 1px yellow,
    1px 0px yellow,
    0px -1px yellow;
  padding: 20px 0px;
  font-size: 40px;
  color: rgba(79, 213, 255, 0.7);
  text-align: center;
`;

export const GamResultBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(34, 195, 140);
  background: linear-gradient(
    0deg,
    rgba(34, 195, 140, 1) 0%,
    rgba(110, 220, 186, 1) 30%,
    rgba(205, 251, 225, 1) 95%
  );
  font-size: 24px;
  margin: 0 auto;
  width: 1400px;
  height: 240px;
  span {
    text-align: center;
    padding-bottom: 150px;
    font-family: 'SUIT-Heavy';
    P {
      font-weight: bold;
    }
  }
`;

export const GbtiInfoImg = styled.div`
  position: absolute;
  z-index: 300;
  bottom: -50px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 210px;
  height: 210px;
  border-radius: 100%;
  background-position: center;
  background-size: 100%;
  background-image: url(${path}/image/Result_Test.jpg);
`;

// GamResultInfo 컴포넌트
export const GamReultInfoInner = styled.div`
  background: #d0e9ef;
  padding-top: 50px;
  margin: 0 auto;
  width: 1400px;
  height: 100%;
`;

export const ResultType = styled.div`
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.02) 0px 4px 6px,
    rgba(0, 0, 0, 0.02) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  font-size: 30px;
  width: 90%;
  padding: 30px 230px;
  border-radius: 10px;
  text-align: center;
  margin: 0 auto;
`;

export const GoodGamText = styled.div`
  padding-top: 50px;
  span {
    font-size: 40px;
  }
  p {
    font-size: 25px;
  }
`;

export const GoodGam = styled.div`
  span {
    font-size: 40px;
  }
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  ul {
    text-align: left;
    li {
      .reco_game_img {
        width: 300px;
        height: 300px;
        border-radius: 20px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
        /* background-image: url(${path}/image/Result_Test.jpg);
      background-repeat: no-repeat;
      background-size: cover; */
      }
    }
  }
`;

export const ResultBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 0 auto;
  button {
    background: #82d795;
    color: white;
    border: 0.5px solid;
    font-size: 24px;
    font-weight: 500;
    width: 45%;
    height: 50px;
    border-radius: 0.5rem;
    transition: 0.2s ease-in-out;
    &:hover {
      background: #82d795;
    }
  }
`;
