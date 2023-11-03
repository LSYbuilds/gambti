import React, { useState } from 'react'
import GamTestIntro from '../component/GamTestIntro'

const GamTest = () => {
  const [display, setDisplay] = useState<boolean>(true);

  return (
    <div>
      {display && <GamTestIntro setDisplay={setDisplay} />}
    </div>
  )
}

export default GamTest;
