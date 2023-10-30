import axios from "axios";


const getRecoGame = async () => {
    try {
      const res = await axios.get(`/api/game-ranking?platform=pc`);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  export {
    getRecoGame,
  };