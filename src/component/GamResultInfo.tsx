import React from 'react';
import {
  GamReultInfoInner,
  GoodGam,
  GoodGamText,
  ResultBtn,
  ResultType,
} from '../css/ResultStyle';

const GamResultInfo = () => {
  return (
    <GamReultInfoInner>
      <ResultType>
        과묵하며 절제된 호기심으로 인생을 관찰하고, 상황을 파악하는 민감성과
        도구를 다루는 뛰어난 능력이 있다. 말수가 적으며 객관적으로 합리적으로
        인생을 관찰하는 유형이다.
      </ResultType>
      <GoodGamText>
        <span>GAMBTI 분석</span>
        <p>더미 데이타 넣을곳</p>
        <span>추천 장르</span>
        <p>더미 데이타 넣을곳</p>
      </GoodGamText>
      <GoodGam>
        <span>추천 게임</span>
        <ul>
          <li>
            <div className="reco_game_img">
              <img src="image/Result_Test.jpg" alt="눈치.." />
            </div>
            <ul>
              <li>올드 스쿨</li>
              <li>플랫폼 : PC, 비디오</li>
              <li>장르: 시뮬레이션, 액션</li>
            </ul>
          </li>
          <li>
            <div className="reco_game_img">
              <img src="image/Result_Test.jpg" alt="눈치.." />
            </div>
            <ul>
              <li>올드 스쿨</li>
              <li>플랫폼 : PC, 비디오</li>
              <li>장르: 시뮬레이션, 액션</li>
            </ul>
          </li>
          <li>
            <div className="reco_game_img">
              <img src="image/Result_Test.jpg" alt="눈치.." />
            </div>
            <ul>
              <li>올드 스쿨</li>
              <li>플랫폼 : PC, 비디오</li>
              <li>장르: 시뮬레이션, 액션</li>
            </ul>
          </li>
          <li>
            <div className="reco_game_img">
              <img src="image/Result_Test.jpg" alt="눈치.." />
            </div>
            <ul>
              <li>올드 스쿨</li>
              <li>플랫폼 : PC, 비디오</li>
              <li>장르: 시뮬레이션, 액션</li>
            </ul>
          </li>
        </ul>
      </GoodGam>
      <ResultBtn>
        <button>다시 검사하기</button>
        <button>유형 공유하기</button>
      </ResultBtn>
    </GamReultInfoInner>
  );
};

export default GamResultInfo;
