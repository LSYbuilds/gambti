import React from 'react';
import { ResultWrap , GamResultBox, GbtiInfoImg, ResultTitle } from '../css/ResultStyle';
import GamResultInfo from '../component/GamResultInfo';

const GamResult = () => {
  return (
    <ResultWrap>
      <ResultTitle>
        <p>PC형 GAMBTI 검사</p>
        <p>결과</p>
      </ResultTitle>
      <GamResultBox>
        <span>
          <p>GAMBTI 유형</p>
          <p>NO Quest No Life</p>
        </span>
        <GbtiInfoImg />
      </GamResultBox>
      <GamResultInfo />
    </ResultWrap>
  );
};

export default GamResult;
