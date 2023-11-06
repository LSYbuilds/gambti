import React from 'react';
import { GamTestMainWrap, GamTestProgress } from '../css/GamTestStyle';

const GamTestMain = () => {
  const temp = Array(20).fill('');

  return (
    <GamTestMainWrap>
      <div className="inner">
        <span className="question-number">1</span>
        <GamTestProgress>
          {temp.map((item, idx) => (<div key={idx} className="progress-dot">{item}</div>))}
        </GamTestProgress>
        <div className="image-box">
          <img src="../image/main_cate2.jpg" alt="image" />
          <div className="question-box">
            질문이 들어갑니다
          </div>
        </div>
        <div className="answer-box">
          <button className="answer-btn">예</button>
          <button className="answer-btn">아니오</button>
        </div>
      </div>
    </GamTestMainWrap>
  )
}

export default GamTestMain;
