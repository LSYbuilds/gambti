import React from 'react';
import { GamResultInner, GbtiInfoImg, ResultTitle } from '../css/ResultStyle';
import GamResultInfo from '../component/GamResultInfo';

const GamResult = () => {
  return (
    <div>
      <ResultTitle>PC형 GAMBTI 검사</ResultTitle>
      <GamResultInner>
        <p>결과</p>
        <p>GAMBTI 유형</p>
        <p>NO Quest No Life</p>
        <GbtiInfoImg />
      </GamResultInner>
      <GamResultInfo />
    </div>
  );
};

export default GamResult;
