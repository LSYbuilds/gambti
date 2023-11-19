import styled from '@emotion/styled';

const path = process.env.PUBLIC_URL;

export const GamInfoWarp = styled.div`
  width: 100%;
  height: auto;
  .inner {
    margin: 0 auto;
    width: 1400px;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 100px;
  }
`;

export const GameInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background-image: url(${path}/image/GamInfo.jpg);
  background-size: contain;
  background-position: center;
  border-radius: 15px;
  .title {
    color: #fff;
    font-size: 3.5em;
    text-align: center;
    font-family: 'SUIT-Heavy';
  }
  .sub_title {
    color: #fff;
  }
`;

export const Container = styled.div`
  margin-top: 50px;
  position: relative;
  display: grid;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
  .item {
    width: 100%;
    height: 325px;
    border-radius: 10px;
    border-bottom: 0.5px solid;
    background-image: url(${path}/image/mbtibg.jpg);
    background-size: contain;
    transition-duration: 0.1s;
    cursor: pointer;
    /* background: rgb(34, 193, 195);
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
      rgba(226, 239, 249, 0.05) -25px 25px; */
    .item_img {
      position: relative;
      width: 100%;
      height: 75%;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: auto;
        height: 75%;
        font-size: 50px;
        border-radius: 10px;
        transition-duration: 0.1s;
      }
    }

    span {
      display: block;
      width: 100%;
      font-size: 1.4em;
      text-align: center;
      font-family: 'SUIT-Bold';
      color: #fff;
    }
    &:hover {
      background: rgba(74, 193, 195, 1);
      .item_img {
        img {
          height: 80%;
        }
      }
    }
  }
  .result_item {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background: skyblue;
    z-index: 100;
    border-radius: 15px;
    overflow: hidden;
    .card_img {
      width: 50%;
      height: 100%;
      background: red;
    }
    .text_area {
      width: 50%;
      height: 100%;
      background: gainsboro;
    }
  }
`;

export const PreviewGambti = styled.div``;
