import React, { useState } from 'react';
import { HeaderWrap } from '../css/HeaderStyle';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
const Header = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [isanime,setisAnime] = useState<boolean>(false);
  setTimeout(() => {
    if(!isToggled) {
      setisAnime(!isanime);
    }
  },200)
  return (
    <HeaderWrap isToggled={isToggled} isanime={isanime}>
      <div className="inner">
        <div className="logo">
          <Link to="/"></Link>
        </div>
        <ul className="navi">
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/gamTest">Gambiti검사</Link>
          </li>
          <li>
            <Link to="/gamInfo">Gambiti유형</Link>
          </li>
          <li>
            <Link to="/gamResult">Gambiti결과(임시)</Link>
          </li>
          <li>
            <Link to="/gamBoard">공유게시판</Link>
          </li>
        </ul>
        <div
          className="mobile_navi_call"
          onClick={() => {
            setIsToggled(!isToggled);
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className="mobile_nav">
          <nav className='mobile_inner'>
            <div
              className="close_btn"
              onClick={() => {
                setIsToggled(!isToggled);
              }}
            ></div>
            <ul
              className="mobile_nav_link"
              onClick={() => {
                setIsToggled(!isToggled);
              }}
            >
              <li>
                <Link to="/">홈</Link>
              </li>
              <li>
                <Link to="/gamTest">Gambiti검사</Link>
              </li>
              <li>
                <Link to="/gamInfo">Gambiti유형</Link>
              </li>
              <li>
                <Link to="/gamResult">Gambiti결과(임시)</Link>
              </li>
              <li>
                <Link to="/gamBoard">공유게시판</Link>
              </li>
            </ul>
          </nav>
      </div>
    </HeaderWrap>
  );
};

export default Header;
