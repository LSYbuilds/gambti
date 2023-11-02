import React from 'react'
import { FooterWrap } from '../css/FooterStyle'
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <FooterWrap>
      <div className="inner">
        <div className='footer_logo'>
          <Link to= "/"></Link>
        </div>
        <div className='footer_nav'>
          <ul className='site_info'>
            <li>개인정보처리방침</li>
            <li>이용약관</li>
            <li>고객센터</li>
            <li>About US</li>
          </ul>
          <ul className='site_address'>
            <li>(주)갬비티스</li>
            <li>여긴 머넣지</li>
            <li>전화:000-1111-2222</li>
            <li>팩스:090-000-1111</li>
          </ul>
          <div className='copylight'>
          Copyright © GAMBTIS. All Rights Reserved.
          </div>
        </div>
      </div>
    </FooterWrap>
  )
}

export default footer
