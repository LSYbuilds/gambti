import React, { useState } from 'react'
import GamTestIntro from '../component/GamTestIntro'
import GamTestMain from '../component/GamTestMain';
import { GamTestWrap } from '../css/GamTestStyle';

const GamTest = () => {
  const [display, setDisplay] = useState<boolean>(true);

  return (
    <GamTestWrap>
      {display && <GamTestIntro setDisplay={setDisplay} />}
      {display || <GamTestMain />}
    </GamTestWrap>
  )
}

export default GamTest;
