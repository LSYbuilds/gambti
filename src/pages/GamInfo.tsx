import React, { useState } from 'react';
import {
  Container,
  GamInfoWarp,
  GameInfoTitle,
  PreviewGambti,
} from '../css/GameInfoStyle';
import GambtiInfoModal from '../modal/GambtiInfoModal';

interface GambtiModalProps {
  modal: boolean;
  isModal: boolean;
}

interface GambtiData {
  img: string;
  maintitle: string;
  eng: string;
  note: string;
  genre: string;
  reco: string;
}

const GamInfo = () => {
  const [ismodal, setOpenModal] = useState<boolean>(false);
  const mbtiData = [
    {
      img: 'image/mbti/E.png',
      maintitle: '외향형',
      eng: 'Extraverstion',
      note: 'E형의 특징은 폭넓은 대인관계를 유지하려는 경향이 있으며 사교적인 특징과 어떠한 일에 대한 열정이 있는 활동적인 특징을 가지고 있습니다.이러한 특징은 대개 팀플레이 위주로 진행되는 협동이 필요한 컨텐츠를 즐기기를 추천드립니다.',
      genre: ['MMORPG', '온라인협동', 'PVP', '대전격투'],
      reco: ['리그오브레전드', '오버워치', '도타', '이터널리턴'],
    },
  ];
  return (
    <GamInfoWarp>
      {ismodal && <GambtiInfoModal />}
      <div className="inner">
        <GameInfoTitle>
          <span className="title">GAMBTI 유형</span>
          <span className="sub_title">
            자신의 MBTI 성격에 따른 유형을 확인해보세요
          </span>
        </GameInfoTitle>
        <Container>
          <div className="result_item">
            <div className="card_img"></div>
            <div className="text_area"></div>
          </div>
          <div className="item">
            <div className="item_img">
              <img src="image/mbti/E.png" alt="눈치.." />
            </div>
            <span>
              E 외향형
              <br />
              Extraverstion
            </span>
          </div>
          <div className="item">
            <div className="item_img">
              <img src="image/mbti/S.png" alt="눈치.." />
            </div>
            <span>
              S 감각형
              <br />
              Sensing
            </span>
          </div>
          <div className="item">
            <div className="item_img">
              <img src="image/mbti/T.png" alt="눈치.." />
            </div>
            <span>
              T 사고형
              <br />
              Thinking
            </span>
          </div>
          <div className="item">
            <div className="item_img">
              <img src="image/mbti/J.png" alt="눈치.." />
            </div>
            <span>
              J 판단형
              <br />
              Judging
            </span>
          </div>
          <div className="item">
            <div className="item_img">
              <img src="image/mbti/I.png" alt="눈치.." />
            </div>
            <span>
              I 내향형
              <br />
              Introversion
            </span>
          </div>
          <div className="item">
            <div className="item_img">
              <img src="image/mbti/N.png" alt="눈치.." />
            </div>
            <span>
              N 직관형
              <br />
              iNtuition
            </span>
          </div>
          <div className="item">
            <div className="item_img">
              <img src="image/mbti/F.png" alt="눈치.." />
            </div>
            <span>
              F 감정형
              <br />
              Feeling
            </span>
          </div>
          <div className="item">
            <div className="item_img">
              <img src="image/mbti/P.png" alt="눈치.." />
            </div>
            <span>
              P 인식형
              <br />
              Perceiving
            </span>
          </div>
        </Container>
        <PreviewGambti></PreviewGambti>
      </div>
    </GamInfoWarp>
  );
};

export default GamInfo;
