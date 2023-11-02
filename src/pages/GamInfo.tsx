import React from 'react';
import { Container, GameInfoTitle } from '../css/GameInfoStyle';

const GamInfo = () => {
  return (
    <div>
      <GameInfoTitle>
        <span>GAMBTI 유형</span>
        자신의 MBTI 유형에 맞는 정보를 알아 봅시다 ! !
      </GameInfoTitle>
      <Container>
        <div className="item">
          <img src="image/Result_Test.jpg" alt="눈치.." />
          <p>E 외향형 Extraverstion</p>
        </div>
        <div className="item">
          <img src="image/Result_Test.jpg" alt="눈치.." />
          <p>S 감각형 Sensing</p>
        </div>
        <div className="item">
          <img src="image/Result_Test.jpg" alt="눈치.." />
          <p>T 사고형 Thinking</p>
        </div>
        <div className="item">
          <img src="image/Result_Test.jpg" alt="눈치.." />
          <p>J 판단형 Judging</p>
        </div>
        <div className="item">
          <img src="image/Result_Test.jpg" alt="눈치.." />
          <p>I 내향형 Introversion</p>
        </div>
        <div className="item">
          <img src="image/Result_Test.jpg" alt="눈치.." />
          <p>N 직관형 iNtuition</p>
        </div>
        <div className="item">
          <img src="image/Result_Test.jpg" alt="눈치.." />
          <p>F 감정형 Feeling</p>
        </div>
        <div className="item">
          <img src="image/Result_Test.jpg" alt="눈치.." />
          <p>P 인식형 Perceiving</p>
        </div>
      </Container>
    </div>
  );
};

export default GamInfo;
