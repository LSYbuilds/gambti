import styled from '@emotion/styled';

const path = process.env.PUBLIC_URL;

export const FooterWrap = styled.div`
  width: 100%;
  height: 250px;
  background: #191919;
  .inner {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1400px;
    height: 100%;
    padding: 30px 0px;
    .footer_logo {
      width: 225px;
      height: 85px;
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
    .footer_nav {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      .site_info {
        display: flex;
        justify-content: center;
        gap: 10px;
        li {
          padding: 0px 10px;
          color:#fff;
          border-right: 1px solid #fff;
          &:last-child{
            border: none;
          }
        }
      }
      .site_address {
        display: flex;
        justify-content: center;
        gap: 10px;
        li {
          padding: 0px 10px;
          color:#fff;
          border-right: 1px solid #fff;
          &:last-child{
            border: none;
          }
        }
      }
      .copylight{
        display: flex;
        justify-content: center;
        color: #fff;
      }
    }
  }
`;
