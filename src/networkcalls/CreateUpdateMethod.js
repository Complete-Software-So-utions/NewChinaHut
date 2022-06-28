import {baseURL} from '../consts/env';

const CreateUpdateMethod = (requestData, routeName, method) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${baseURL}/${routeName}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(requestData),
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

export default CreateUpdateMethod;
