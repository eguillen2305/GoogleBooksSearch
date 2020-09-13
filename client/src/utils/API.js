//DEPENDENCIES
import  Axios from"axios";

//API To generate random users - randomAPI.com

export default {
   //AXIOS to get 25 Random
    search: () => {
        return Axios.get("https://randomuser.me/api/?results=25&nat=us");
    },
};