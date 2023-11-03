import React from 'react';
import { Container, GamInfoWarp, GameInfoTitle } from '../css/GameInfoStyle';

const GamInfo = () => {
  return (
    <GamInfoWarp>
      <div className='inner'>
      <GameInfoTitle>
        <span>GAMBTI 유형</span>
        자신의 MBTI 유형에 맞는 정보를 알아 봅시다 ! !
      </GameInfoTitle>
      <Container>
        <div className="item">
          <div className="item_img">
            <img src="image/mbti/E.png" alt="눈치.." />
          </div>
          <span>
            E 외향형
            <br />
            Extraverstion
          </span>
        </div>
        <div className="item">
          <div className="item_img">
            <img src="image/mbti/S.png" alt="눈치.." />
          </div>
          <span>S 감각형<br/>Sensing</span>
        </div>
        <div className="item">
          <div className="item_img">
            <img src="image/mbti/T.png" alt="눈치.." />
          </div>
          <span>T 사고형<br/>Thinking</span>
        </div>
        <div className="item">
          <div className="item_img">
            <img src="image/mbti/J.png" alt="눈치.." />
          </div>
          <span>J 판단형<br/>Judging</span>
        </div>
        <div className="item">
          <div className="item_img">
            <img src="image/mbti/I.png" alt="눈치.." />
          </div>
          <span>I 내향형<br/>Introversion</span>
        </div>
        <div className="item">
          <div className="item_img">
            <img src="image/mbti/N.png" alt="눈치.." />
          </div>
          <span>N 직관형<br/>iNtuition</span>
        </div>
        <div className="item">
          <div className="item_img">
            <img src="image/mbti/F.png" alt="눈치.." />
          </div>
          <span>F 감정형<br/>Feeling</span>
        </div>
        <div className="item">
          <div className="item_img">
            <img src="image/mbti/P.png" alt="눈치.." />
          </div>
          <span>P 인식형<br/>Perceiving</span>
        </div>
      </Container>
      </div>

    </GamInfoWarp>
  );
};

export default GamInfo;
