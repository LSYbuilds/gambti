import React, { useState } from 'react'
import { GamTestWrap } from '../css/GamTestStyle'
import GamTestNotice from '../component/GamTestNotice'
import GamSurvey from '../component/GamSurvey'

const GamTest = () => {
  const [NoteCheck , setNoteCheck] = useState(true);
  const [Survey , setSurvey] = useState(false);
  return (
    <GamTestWrap>
      <div className='inner'>
        <GamTestNotice />
        <GamSurvey />
      </div>
    </GamTestWrap>
  )
}

export default GamTest
