import React from 'react'
import { GameTestIntroWrap } from '../css/GamTestStyle';

interface Props {
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const GamTestIntro = ({ setDisplay }: Props) => {
  return (
    <GameTestIntroWrap>
      <h3>GAMBTI 검사</h3>
      <span>검사 전 유의사항</span>
      <i className="alert"></i>
      <p>
        본 검사는 실제 MBTI를 차용하여 유형에 따라 게임을 추천해주는 프로그램입니다. <br />
        따라서 실제 MBTI하고는 무관하며 추천해주는 게임과 <br />
        실제 MBTI 성향하고 맞지 않을 수 있음을 유의바랍니다.
      </p>
      <button onClick={() => { setDisplay(false); }}>시작하기</button>
    </GameTestIntroWrap>
  )
}

export default GamTestIntro;
