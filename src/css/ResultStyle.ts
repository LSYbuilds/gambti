import styled from '@emotion/styled';

const path = process.env.PUBLIC_URL;

export const ResultTitle = styled.p`
  font-size: 40px;
  color: rgba(79, 213, 255, 0.7);
  text-align: center;
`;

export const GamResultInner = styled.div`
  text-align: center;
  background: #fff6e9;
  font-size: 24px;
  margin: 0 auto;
  width: 1400px;
  height: 100%;
`;

export const GbtiInfoImg = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: -50px;
  width: 250px;
  height: 250px;
  border-radius: 700px;
  background-position: center;
  background-image: url(${path}/image/Result_Test.jpg);
`;

// GamResultInfo 컴포넌트
export const GamReultInfoInner = styled.div`
  background: #a7ebe8;
  padding-top: 50px;
  margin: 0 auto;
  width: 1400px;
  height: 100%;
`;

export const ResultType = styled.div`
  background: rgba(79, 213, 255, 0.7);
  font-size: 30px;
  width: 1200px;
  height: auto;
  text-align: center;
  margin: auto;
`;

export const GoodGamText = styled.div`
  text-align: center;
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
  text-align: center;
  flex-direction: column;
  margin: 0 auto;
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
