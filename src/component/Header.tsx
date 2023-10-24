import React from 'react'
import { HeaderWrap } from '../css/HeaderStyle'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderWrap>
      <div className='inner'>
        <div className='logo'>
          <Link to = "/" >로고닷</Link>
        </div>
        <ul className='navi'>
          <li>
            <Link to ="/gamTest">Gambiti검사</Link>
          </li>
          <li>
            <Link to ="/gamInfo">Gambiti유형</Link>
          </li>
          <li>
            <Link to ="/gamResult">Gambiti결과(임시)</Link>
          </li>
          <li>
            <Link to ="/gamBoard">공유게시판</Link>
          </li>
        </ul>
      </div>
    </HeaderWrap>
  )
}

export default Header
