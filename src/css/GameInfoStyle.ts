import styled from '@emotion/styled';

const path = process.env.PUBLIC_URL;

interface InfoTriggerProps {
  infoTrigger: boolean;
}

export const GamInfoWarp = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  padding-bottom: 200px;
  .bg_shape_top {
    z-index: 0;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 500px;
    clip-path: polygon(0 0, 100% 14%, 100% 79%, 0% 100%);
    background: url(${path}/image/bg/bg1.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    filter: blur(1px);
    opacity: 0.4;
  }
  .bg_shape_mid {
    z-index: 0;
    position: absolute;
    top: 1080px;
    left: 0px;
    width: 100%;
    height: 500px;
    clip-path: polygon(0 17%, 100% 0, 100% 100%, 0 87%);
    background: url(${path}/image/bg/bg2.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    filter: blur(1px);
    opacity: 0.4;
  }
  .inner {
    position: relative;
    margin: 0 auto;
    width: 1400px;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 100px;
  }
`;

export const GameInfoTitle = styled.div`
  margin-top: 50px;
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

export const Container = styled.div<InfoTriggerProps>`
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
  overflow: hidden;
  background: #000;
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
    display: ${props => (props.infoTrigger ? 'flex' : 'none')};
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background: skyblue;
    z-index: 100;
    border-radius: 15px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.9);
    animation-name: ${props => (props.infoTrigger ? 'slideInfo' : '')};
    animation-duration: 0.3s;
    .card_img {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
      background-image: url(${path}/image/mbtibg.jpg);
      background-size: contain;
      img {
        height: 55%;
      }
      span {
        color: #fff;
        font-size: 1.8em;
        font-weight: bold;
      }
    }
    .text_area {
      width: 50%;
      height: 100%;
      padding: 3%;
      .text_inner {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 15px;
        color: #fff;
        padding: 3%;
        .card_title {
          display: flex;
          flex-direction: column;
          font-family: 'SUIT-Bold';
          p {
            text-align: center;
            font-size: 1.8em;
          }
        }
        .card_text {
          margin: 20px 0px;
          padding: 20px 0px 20px 0px;
          width: 100%;
          height: 35%;
          font-size: 1.1em;
          text-align: center;
        }
        .reco_box {
          display: flex;
          justify-content: space-between;
          div {
            display: flex;
            flex-direction: column;
            width: 40%;
            height: 100%;
            span {
              text-align: center;
              font-size: 1.5em;
            }
            ul {
              display: flex;
              flex-direction: column;
              width: 100%;
              height: auto;
              li {
                margin: 5px 0px;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
  .close_btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    z-index: 200;
    width: auto;
    height: 50px;
    background: #4a7a96;
    border: none;
    border-radius: 15px;
    color: #fff;
    font-size: 1.3em;
    font-family: 'SUIT-Bold';
    &:hover {
      background: #4f94bd;
    }
  }
  @keyframes slideInfo {
    from {
      right: -100%;
    }
    to {
      right: 0%;
    }
  }
`;

interface ResultTriggerProps {
  mbtiTrigger: boolean;
}

export const PreviewGambti = styled.div<ResultTriggerProps>`
  margin-top: 50px;
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 15px;
  .mbti_list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    gap: 20px;
    border-radius: 15px;
    background: #191919;
    li {
      position: relative;
      width: 100%;
      height: 200px;
      border: 2px solid #828282;
      border-radius: 15px;
      background-image: url(${path}/image/mbtibg.jpg);
      background-size: contain;
      cursor: pointer;
      &:hover {
        background: rgba(74, 193, 195, 1);
      }
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 85%;
      }
    }
  }
  .mbti_result {
    display: ${props => (props.mbtiTrigger ? 'flex' : 'none')};
    justify-content: space-between;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    background: gainsboro;
    z-index: 300;
    background: skyblue;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.9);
    animation-name: ${props => (props.mbtiTrigger ? 'slideResult' : '')};
    animation-duration: 0.3s;
    .img_area {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 3%;
      justify-content: center;
      align-items: center;
      background-image: url(${path}/image/mbtibg.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      .img_box {
        display: block;
        position: relative;
        width: 50%;
        height: 50%;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          height: 100%;
          transform: translate(-50%, -50%);
        }
      }
      .mbti_name {
        font-size: 3.6em;
        color: #fff;
        font-family: 'SUIT-Bold';
      }
    }
    .reco_area {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 100%;
      padding: 5%;
      .desc {
        display: flex;
        flex-direction: column;
        gap: 50px;
        margin-top: 5%;
        color: #fff;
      }
      .result_list{
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        color:#fff;
        div{
          display: flex;
          flex-direction: column;
          width: 50%;
          h2{
            display: block;
            width: 100%;
            text-align: center;
          }
          
        }
      }
    }
    .close_btn {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 20px;
      position: absolute;
      bottom: 15px;
      right: 15px;
      z-index: 200;
      width: auto;
      height: 50px;
      background: #4a7a96;
      border: none;
      border-radius: 15px;
      color: #fff;
      font-size: 1.3em;
      font-family: 'SUIT-Bold';
      &:hover {
        background: #4f94bd;
      }
    }
  }
  @keyframes slideResult {
    from {
      right: -100%;
    }
    to {
      right: 0%;
    }
  }
`;
