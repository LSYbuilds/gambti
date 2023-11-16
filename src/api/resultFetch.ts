import axios from "axios";

const getResultGame = async () => {
    try {
      const res = await axios.get(`/api/result?mbti=estp`);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  export {
    getResultGame,
  };