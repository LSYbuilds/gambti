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
  @media screen and (max-width: 1600px) {
    .bg_shape {
      top: 250px;
      height: 500px;
    }
    .inner {
      width: 90%;
      .select_category {
        height: 500px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .inner {
      .bg_shape {
        top: 250px;
        height: 400px;
      }
      .select_category {
        height: 400px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .inner {
      .main_title {
        width: 100%;
        align-items: center;
        span {
          display: block;
          width: 100%;
          text-align: center;
        }
      }
      .select_category {
        height: 50vw;
        div {
          button {
            margin: 0;
            width: 80%;
            height: 35px;
            font-size: 1.2em;
          }
        }
      }
    }
  }
  @media screen and (max-width: 641px) {
    .inner {
      .select_category {
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 70vw;
        div {
          width: 100%;
        }
      }
      .bg_shape {
        display: none;
      }
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
      margin-top: 15px;
      display: flex;
      justify-content: space-around;
      gap: 10px;
      width: 100%;
      height: auto;
      background: #fff;
      border-radius: 15px;
      padding: 20px;
      div {
        display: flex;
        flex-direction: column;
        width: 33.33%;
        height: auto;
        .list_title {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          justify-content: center;
          width: 100%;
          height: 50px;
          .title_img {
            width: auto;
            height: 65%;
            img {
              height: 100%;
            }
          }
          span {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: auto;
            font-size: 1.3em;
            text-align: center;
            font-family: 'SUIT-Bold';
          }
        }
        /* .column_text {
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
        } */
        .game_list {
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 100%;
          height: auto;

          li {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 150px;
            padding: 15px;
            border: 1px solid #c5c5c5;
            border-radius: 15px;
            .info {
              display: flex;
              flex-direction: row;
              width: 50%;
              height: 100%;
              .desc {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                height: 100%;
                p {
                  &:first-child {
                    font-size: 1.4em;
                  }
                }
              }
            }
            .game_img {
              width: 35%;
              border-radius: 15px;
              overflow: hidden;
              img {
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1600px) {
    .reco_games_inner {
      width: 90%;
      .reco_game_list {
        .game_list {
          li {
            .game_img {
              position: relative;
              width: 118px;
              overflow: hidden;
              img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: max-content;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .reco_game_list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .game_list {
        li {
          .game_img {
            position: relative;
            width: 118px;
            overflow: hidden;
            background: #191919;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: max-content;
              height: 100%;
            }
          }
        }
      }
      .reco_result {
        margin-top: 20px;
        width: 100% !important;
      }
    }
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 641px) {
    .banner_logo {
      height: 75px !important;
      background-size: 50% !important;
    }
    .game_list {
      li {
        display: block;
        position: relative;
        width: 100%;
        overflow: hidden;
        .info {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100% !important;
          height: 100%;
          z-index: 100;
          span {
            color: #fff;
            text-align: center;
            font-weight: bold;
          }
        }
        .game_img {
          display: block;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100% !important;
          height: 100%;
          background: #000;
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0.5;
            height: 300% !important;
          }
        }
      }
    }
  }
`;
