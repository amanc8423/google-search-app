import axios from "axios";


const BASE_URL="https://www.googleapis.com/customsearch/v1"

const params = {
    key:'AIzaSyBJSvTRijH9hQcrE6-J0AAzrlfVH9eWml4',
    cx:'e13f22fc22c074a54'
}


export const fetchDataFromApi = async (payload) => {

const {data} = await axios.get(BASE_URL,{
    params:{...params,...payload}
});

return data;


};






