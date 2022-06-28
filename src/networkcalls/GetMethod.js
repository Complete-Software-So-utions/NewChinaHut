import {baseURL} from '../consts/env';

const GetMethod = (payload, route) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${baseURL}/${route}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      resolve(jsonResponse);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export default GetMethod;
