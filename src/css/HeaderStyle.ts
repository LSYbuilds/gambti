import styled from "@emotion/styled";


export const HeaderWrap = styled.div`
width: 100%;
height: 100px;
background: #427580;
.inner{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1400px;
    height: 100%;
    background: skyblue;
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
            }
        }
    }
}
`