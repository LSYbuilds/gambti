import styled from "@emotion/styled";

// public 에 접근하는 코드
const path = process.env.PUBLIC_URL;


export const HeaderWrap = styled.div`
position: fixed;
z-index: 99999;
top:0px;
left:0px;
width: 100%;
height: 100px;
background: #427580;
.inner{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1400px;
    height: 100%;
    .logo{
        width: 250px;
        height: 100%;
        a{
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
    .navi{
        padding-right: 50px;
        display: flex;
        justify-content: space-around;
        width: auto;
        height: 100%;
        li{
            padding: 0px 10px 0px 10px;
            width: auto;
            height: 100%;
            a{
                display: flex;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                font-family: 'SUIT-Bold';
                color:#fff;
                font-size: 1.3em;
            }
        }
    }
}
`