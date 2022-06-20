import React from 'react';
import axios from 'axios';
import {Alert} from 'react-native';

const Post = async (url, data, token) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(url, data, headers);
    return response;
  } catch (error) {
    return Alert.alert(`${error.name}`, `${error.message}`, [{text: 'OK'}]);
  }
};

const Put = async (url, data, token) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.put(url, data, headers);
    return response;
  } catch (error) {
    return Alert.alert(`${error.name}`, `${error.message}`, [{text: 'OK'}]);
  }
};

const Get = async (url, data, token) => {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(url, headers);
    return response;
  } catch (error) {
    return Alert.alert(`${error.name}`, `${error.message}`, [{text: 'OK'}]);
  }
};

export {Post, Put, Get};
