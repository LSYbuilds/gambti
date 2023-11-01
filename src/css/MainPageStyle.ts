import styled from '@emotion/styled';

const path = process.env.PUBLIC_URL;

export const MainpageWrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  .bg_shape {
    z-index: 0;
    position: absolute;
    top: 200px;
    left: 0px;
    width: 100%;
    height: 678px;
    background: skyblue;
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 86%);
  }
  .inner {
    margin: 0 auto;
    width: 1400px;
    height: auto;
    .main_title {
      padding-top: 50px;
      color: #4c4c4c;
      font-size: 1.1em;
      font-family: 'SUIT-Bold';
      .head_text {
        margin-bottom: 10px;
        display: block;
        font-family: 'SUIT-Heavy';
        font-size: 3.1em;
        text-shadow: 5px 5px 2px rgba(0, 0, 0, 0.3);
      }
    }
    .select_category {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      margin-top: 50px;
      width: 100%;
      height: 600px;
      div {
        cursor: pointer;
        position: relative;
        width: 48%;
        height: 60%;
        background: gainsboro;
        border-radius: 20px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 150%;
        box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.3);
        button {
          position: absolute;
          bottom: 15px;
          left: 15px;
          width: 300px;
          height: 50px;
          background: red;
          border: none;
          border-radius: 200px;
          background: rgba(79, 213, 255, 0.7);
          font-family: 'SUIT-Bold';
          color: #fff;
          font-size: 1.7em;
        }
      }
      .pc_gambti {
        background-image: url(${path}/image/main_cate1.jpg);
      }
      .mobile_gambti {
        background-image: url(${path}/image/main_cate2.jpg);
      }
    }
    .reco_games {
      width: 100%;
    }
  }
`;

export const RecoGames = styled.div`
  margin-top: 150px;
  width: 100%;
  height: auto;
  padding-bottom: 100px;
  background: #d0e9ef;
  .reco_games_inner {
    padding-top: 100px;
    margin: 0 auto;
    width: 1400px;
    height: 100%;
    .reco_banner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 200px;
      background-image: url(${path}/image/banner.jpg);
      background-position: center;
      border-radius: 15px;
      .banner_logo {
        width: 500px;
        height: 100px;
        background-image: url(${path}/image/logo.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50% 25%;
      }
      .banner_text {
        color: #fff;
        font-family: 'SUIT-Bold';
        font-size: 1.8em;
      }
    }
    .reco_game_list {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      div {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        .list_title {
          display: block;
          width: 100%;
          padding: 15px 0px;
          font-size: 1.2em;
        }
        .column_text {
          display: grid;
          grid-template-columns: 100px 100px;
          width: 100%;
          height: 50px;
          border-top: 2px solid #191919;
          border-bottom: 1px solid #191919;
          li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }
        }
        .game_list{
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          li{
            display: flex;
            justify-content: flex-start;
            width: 100%;
            height: 125px;
            background: gainsboro;
            .info{
              display: flex;
              flex-direction: row;
              width: 90%;
              height: 100%;
              background: skyblue;
              .rank{
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 8%;
                height: 100%;
                text-align: center;
                font-size: 1.3em;
              }
              .desc{
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 90%;
                height: 100%;
                padding: 0px 30px;
              }
            }
            .game_img{
              width: 10%;
            }
          }
        }
      }
    }
  }
`;
