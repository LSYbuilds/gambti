import axios from "axios";

const getResultGame = async (props:string) => {
    try {
      const res = await axios.get(`/api/result?mbti=${props}`);
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