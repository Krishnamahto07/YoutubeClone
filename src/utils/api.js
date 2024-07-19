import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";


export const fetchDataFromApi = async (url) => {
  
const options = {
    params: { hl: 'en', gl: 'US' },
    headers: {
      'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
      'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
  };

  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
  console.log(`API CALLED ${url}....`);
  console.log("....data :",data);
  
  return data;
    
};
