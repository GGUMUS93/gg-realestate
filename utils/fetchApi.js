import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key':
        '05b3a82613msh7433535d1e2502fp1ec28bjsnced17673bbb6',
    },
  });

  return data;
};
