import React from 'react';
import { GbtiInfo, GbtiInfoImg, ResultTitle } from '../css/ResultStyle';

const GamResult = () => {
  return (
    <div>
      <ResultTitle>
        PC형 GAMBTI 검사
        <p>결과</p>
      </ResultTitle>
      <GbtiInfo>
        <p>GAMBTI 유형</p>
        <p>NO Quest No Life</p>
        <GbtiInfoImg />
      </GbtiInfo>
    </div>
  );
};

export default GamResult;
