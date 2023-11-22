import React, { useState } from 'react';
import {
  Container,
  GamInfoWarp,
  GameInfoTitle,
  PreviewGambti,
} from '../css/GameInfoStyle';
import GambtiInfoModal from '../modal/GambtiInfoModal';
import gambtiJson from '../api/gambti.json';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface GambtiModalProps {
  modal: boolean;
  isModal: boolean;
}

interface GambtiData {
  img: string;
  maintitle: string;
  eng: string;
  note: string;
  genre: string[];
  reco: string[];
}

const GamInfo = () => {
  const [ismodal, setOpenModal] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<GambtiData | null>(null);
  const [infoTrigger, setInfoTrigger] = useState<boolean>(false);
  const gambtiData = gambtiJson.mbtiData;

  const mbtiClick = (index: number, item: GambtiData) => {
    setShowInfo(gambtiData[index]);
    console.log(gambtiData[index]);
  };
  return (
    <GamInfoWarp>
      <div className="bg_shape_top"></div>
      <div className="bg_shape_mid"></div>
      <div className="inner">
        <GameInfoTitle>
          <span className="title">GAMBTI 유형</span>
          <span className="sub_title">
            자신의 MBTI 성격에 따른 유형을 확인해보세요
          </span>
        </GameInfoTitle>
        <Container infoTrigger={infoTrigger}>
          <div className="result_item">
            <div className="card_img">
              <img src={showInfo?.img}></img>
            </div>
            <div className="text_area">
              <div className="text_inner">
                <span className="card_title">
                  <p>{showInfo?.maintitle}</p>
                  <p>{showInfo?.eng}</p>
                </span>
                <div className="card_text">{showInfo?.note}</div>
                <div className="reco_box">
                  <div className="reco_genre">
                    <span>추천장르</span>
                    {showInfo?.genre.map((item, index) => (
                      <ul className="genre_list" key={index}>
                        <li>{item}</li>
                      </ul>
                    ))}
                  </div>
                  <div className="reco_games">
                    <span>추천게임</span>
                    {showInfo?.reco.map((item, index) => (
                      <ul className="game_list" key={index}>
                        <li>{item}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button
              className="close_btn"
              onClick={() => {
                setInfoTrigger(!infoTrigger);
              }}
            >
              닫기
              <i>
                <FontAwesomeIcon icon={faArrowRightToBracket} />
              </i>
            </button>
          </div>
          {gambtiData.map((item, index) => (
            <div
              className="item"
              key={index}
              onClick={() => {
                mbtiClick(index, item);
                setInfoTrigger(!infoTrigger);
              }}
            >
              <div className="item_img">
                <img src={item.img} alt="눈치.." />
              </div>
              <span>
                {item.maintitle}
                <br />
                {item.eng}
              </span>
            </div>
          ))}
        </Container>
        <GameInfoTitle>
          <span className="title">GAMBTI 결과 미리보기</span>
          <span className="sub_title">
            자신의 MBTI 성격에 따른 유형을 확인해보세요
          </span>
        </GameInfoTitle>
        <PreviewGambti>
          <ul className='mbti_list'>
            {gambtiJson.mbtiImg.map((item,index) => (
              <li key={index}>
                <img src={item.paht}></img>
              </li>
            ))}
          </ul>
          <div className='mbti_list'>

          </div>
        </PreviewGambti>
      </div>
    </GamInfoWarp>
  );
};

export default GamInfo;
