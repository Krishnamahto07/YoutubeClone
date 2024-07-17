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

  // const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return true;
    
};

















// const options = {
//     method: 'GET',
//     url: `${BASE_URL}/video/details/`,
//     params: {
//       id: 'kJQP7kiw5Fk',
//       hl: 'en',
//       gl: 'US'
//     },
//     headers: {
//       'x-rapidapi-key': Process.env.REACT_APP_KEY,
//       'x-rapidapi-host': 'youtube138.p.rapidapi.com'
//     }
//   };

// const fetchData = async() =>{
//     try {
//       const response = await axios.request(options);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
// }