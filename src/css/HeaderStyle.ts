import styled from '@emotion/styled';

// public 에 접근하는 코드
const path = process.env.PUBLIC_URL;
interface HeaderWrapProps {
  isToggled: boolean;
}

export const HeaderWrap = styled.div<HeaderWrapProps>`
  position: fixed;
  z-index: 99999;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
  background: #427580;
  .inner {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1400px;
    height: 100%;
    .logo {
      width: 250px;
      height: 100%;
      a {
        display: block;
        width: 100%;
        height: 100%;
        background-image: url(${path}/image/logo.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50% 25%;
        background-size: 100%;
      }
    }
    .navi {
      padding-right: 50px;
      display: flex;
      justify-content: space-around;
      width: auto;
      height: 100%;
      li {
        padding: 0px 10px 0px 10px;
        width: auto;
        height: 100%;
        a {
          display: flex;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          font-family: 'SUIT-Bold';
          color: #fff;
          font-size: 1.3em;
        }
      }
    }
    .mobile_navi_call {
      display: none;
    }
  }
  .mobile_nav {
    display: none;
  }
  @media screen and (max-width: 1600px) {
    .inner {
      width: 95%;
    }
  }
  @media screen and (max-width: 1024px) {
    .inner {
      width: 95%;
      .logo {
        position: relative;
        width: 200px;
        height: 100%;
        a {
          background-position: 50% 35%;
        }
      }
      .navi {
        li {
          padding: 0px 5px 0px 5px;
          a {
            font-size: 1.2em;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .inner {
      width: 95%;
      .navi {
        display: none;
      }
      .mobile_navi_call {
        position: absolute;
        top: 50%;
        right: 0%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        .bar {
          position: relative;
          display: block;
          width: 100%;
          height: 5px;
          background: beige;
          border-radius: 10px;
        }
      }
    }
    .mobile_nav {
      display: ${props => (props.isToggled ? 'block' : 'none')};
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      overflow: hidden;
      .mobile_inner {
        position: absolute;
        right: 0%;
        top: 0px;
        display: block;
        flex-direction: column;
        width: 65%;
        height: 100vh;
        background: #fff;
        border-left: 2px solid #fff;
        transition: right 0.3s ease-in;
        transition-duration: 0.3s;
        .close_btn {
          width: 100%;
          height: 50px;
          background: rgba(0, 0, 0, 0.1);
          background-image: url(${path}/image/close_btn.png);
          background-size: 30px;
          background-repeat: no-repeat;
          background-position: 95% 50%;
          cursor: pointer;
        }
        .mobile_nav_link {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          padding: 15px;
          li {
            padding: 0px 15px 0px 15px;
            width: auto;
            height: 100%;
            text-align: right;
            a {
              display: flex;
              padding: 5px 0px 5px 0px;
              height: 100%;
              flex-direction: column;
              justify-content: center;
              font-family: 'SUIT-Regular';
              color: #000;
              font-size: 1.3em;
            }
            &:hover {
              background: #f2f2f2;
              border-radius: 10px;
            }
          }
        }
      }
      .active {
        right: 0%;
      }
    }
  }
  @media screen and (max-width: 641px) {
    .inner {
      position: relative;
      width: 95%;
      .navi {
        display: none;
      }
    }
  }
`;
