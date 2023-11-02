import styled from '@emotion/styled';

export const GameInfoTitle = styled.div`
  span {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    font-size: 30px;
    font-weight: bold;
    padding: 20px 0;
  }
  text-align: center;
  font-size: 20px;
`;

export const Container = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 20px;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(4, 350px);
  grid-template-rows: repeat(4, 350px);
  row-gap: 30px;
  column-gap: 30px;
  .item {
    border-radius: 10px;
    border-bottom: 0.5px solid;
    background: rgb(34, 193, 195);
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(226, 239, 249, 1) 100%
    );
    box-shadow:
      rgba(226, 227, 249, 0.5) -10px 10px,
      rgba(226, 229, 249, 0.4) -5px 5px,
      rgba(226, 232, 249, 0.3) -10px 10px,
      rgba(226, 234, 249, 0.2) -15px 15px,
      rgba(226, 236, 249, 0.1) -20px 20px,
      rgba(226, 239, 249, 0.05) -25px 25px;

    &:hover {
      background: rgba(74, 193, 195, 1);
    }
    img {
      width: 100%;
      height: 87%;
      font-size: 50px;
      border-radius: 10px;
    }
    p {
      border-top: 1px solid;
      font-size: 30px;
    }
  }
`;
