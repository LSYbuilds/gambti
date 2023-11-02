import React, { useEffect, useState } from 'react';
import { MainpageWrap, RecoGames } from '../css/MainPageStyle';
import {
  getRecoGamePC,
  getRecoGameConsole,
  getRecoGameMobile,
} from '../api/mainFetch';

interface recoGame {
  rank: number;
  title: string;
  genre: string;
  company: string;
  img: string;
}

const Main = () => {
  // PC인기
  const [recoGamePC, setRecoGamePC] = useState<recoGame[]>([]);
  // 콘솔인기
  const [recoGameConsole, setRecoGameConsole] = useState<recoGame[]>([]);
  // 모버일인기
  const [recoGameMobile, setRecoGameMobile] = useState<recoGame[]>([]);

  const RecoGamePC = async () => {
    try {
      const res = await getRecoGamePC();
      setRecoGamePC(res);
      console.log('피시인기', res);
    } catch (err) {
      console.log(err);
    }
  };

  const RecoGameMobile = async () => {
    try {
      const res = await getRecoGameMobile();
      setRecoGameMobile(res);
      console.log('모바일인기', res);
    } catch (err) {
      console.log(err);
    }
  };

  const RecoGameConsole = async () => {
    try {
      const res = await getRecoGameConsole();
      setRecoGameConsole(res);
      console.log('콘솔인기', res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    void RecoGamePC();
    void RecoGameMobile();
    void RecoGameConsole();
  }, []);

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
      <RecoGames>
        <div className="reco_games_inner">
          <div className="reco_banner">
            <div className="banner_logo"></div>
            <span className="banner_text">인기게임</span>
          </div>
          <div className="reco_game_list">
            <div className="pc_reco">
              <span className="list_title">PC 인기게임</span>
              <ul className="column_text">
                <li>순위</li>
                <li>게임명</li>
              </ul>
              <ul className="game_list">
                {recoGamePC.map((item, index) => (
                  <li key={index}>
                    <div className="info">
                      <span className="rank">{item.rank}</span>
                      <span className="desc">
                        <p>{item.title}</p>
                        <p>{item.genre}</p>
                        <p>{item.company}</p>
                      </span>
                    </div>
                    <div className="game_img">
                      <img src={item.img}></img>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="console_reco">
            <span className="list_title">콘솔 인기게임</span>
              <ul className="column_text">
                <li>순위</li>
                <li>게임명</li>
              </ul>
              <ul className="game_list">
                {recoGameConsole.map((item, index) => (
                  <li key={index}>
                    <div className="info">
                      <span className="rank">{item.rank}</span>
                      <span className="desc">
                        <p>{item.title}</p>
                        <p>{item.genre}</p>
                        <p>{item.company}</p>
                      </span>
                    </div>
                    <div className="game_img">
                      <img src={item.img}></img>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mobile_reco">
            <span className="list_title">모바일 인기게임</span>
              <ul className="column_text">
                <li>순위</li>
                <li>게임명</li>
              </ul>
              <ul className="game_list">
                {recoGameMobile.map((item, index) => (
                  <li key={index}>
                    <div className="info">
                      <span className="rank">{item.rank}</span>
                      <span className="desc">
                        <p>{item.title}</p>
                        <p>{item.genre}</p>
                        <p>{item.company}</p>
                      </span>
                    </div>
                    <div className="game_img">
                      <img src={item.img}></img>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </RecoGames>
    </MainpageWrap>
  );
};

export default Main;
