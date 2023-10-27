import styled from '@emotion/styled';

const path = process.env.PUBLIC_URL;

export const ResultTitle = styled.p`
  font-size: 40px;
  text-align: center;
  p {
    font-size: 30px;
    text-align: center;
  }
`;

export const GbtiInfo = styled.div`
  text-align: center;
`;

export const GbtiInfoImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background-position: center;
  background-image: url(${path}/image/Result_Test.jpg);
  background-repeat: no-repeat;
`;
