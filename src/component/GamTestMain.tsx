import React from 'react';
import { GamTestMainWrap } from '../css/GamTestStyle';

const GamTestMain = () => {
  return (
    <GamTestMainWrap>
      <div className="inner">
        <span className="question-number">1</span>
        <div className="image-box">
          <img src="../image/main_cate2.jpg" alt="image" />
          <div className="question-box">
            질문이 들어갑니다
          </div>
        </div>
        <div className="progress-dot"></div>
        <button className="answer-box">예</button>
        <button className="answer-box">아니오</button>
      </div>
    </GamTestMainWrap>
  )
}

export default GamTestMain;
