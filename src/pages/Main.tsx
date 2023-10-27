import React from 'react';
import { MainpageWrap } from '../css/MainPageStyle';

const Main = () => {
  return (
    <MainpageWrap>
      <div className="inner">
        <div className="bg_shape"></div>
        <div className="main_title">
          <span className="head_text">GAMBTI 란?</span>
          <span>
            자신에게 어울리는 혹은 성격에 부합하는 게임을 추천해주는
            프로그램입니다.
            <br />
            자신의 MBTI 성향 및 결과에 따라 소개해주는 각기 다른 게임이 준비되어
            있습니다.
            <br />
            자신에게 어울리는 게임을 여러친구들에게 공유해보세요
          </span>
        </div>
        <div className="select_category">
          <div className="pc_gambti">
            <button className="pc_test">PC GAMBTI 검사</button>
          </div>
          <div className="mobile_gambti">
            <button className="mobile_test">모바일 GAMBTI 검사</button>
          </div>
        </div>
      </div>
      <div className="reco_games">
        <div className="reco_games_inner">
          <div className="reco_banner">
            <div className="banner_logo"></div>
            <span className="banner_text">인기게임</span>
          </div>
          <div className="reco_games_list">
            <div className="pc_reco"></div>
            <div className="console_reco"></div>
            <div className="mobile_reco"></div>
          </div>
        </div>
      </div>
    </MainpageWrap>
  );
};

export default Main;
