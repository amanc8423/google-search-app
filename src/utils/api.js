import axios from "axios";


const BASE_URL="https://www.googleapis.com/customsearch/v1"

const params = {
    key:'AIzaSyA7zL9dm7h1a6rz1MyfVlxrIbzER4oHfYo',
    cx:'624fbd30d39ce4608'
}


export const fetchDataFromApi = async (payload) => {

const {data} = await axios.get(BASE_URL,{
    params:{...params,...payload}
});

return data;


};






