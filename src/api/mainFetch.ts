import axios from "axios";


// PC인기게임
const getRecoGamePC = async () => {
    try {
      const res = await axios.get(`/api/game-ranking?platform=pc`);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

// 콘솔인기게임
const getRecoGameConsole = async () => {
  try{
    const res = await axios.get(`/api/game-ranking?platform=console`);
    const data = res.data;
    return data;
  }catch(error){
    console.log(error);
    return [];
  }
};

const getRecoGameMobile = async () => {
  try{
    const res = await axios.get(`/api/game-ranking?platform=mobile`);
    const data = res.data;
    return data;
  }catch(error){
    console.log(error);
    return [];
  }
}

  export {
    getRecoGamePC,
    getRecoGameConsole,
    getRecoGameMobile,
  };