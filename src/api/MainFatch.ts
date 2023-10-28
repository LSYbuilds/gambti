import axios from "axios";


const getRecoList = async () => {
    try{
        const res = await axios.get(`https://port-0-gambti-12fhqa2llo8qkrut.sel5.cloudtype.app/game-ranking?platform=pc`);
        const result = res.data;
        console.log("불러오기",result);
        return result;
    }catch(err){
        console.log(err);
    }
    return []
}

export {
    getRecoList,
  };