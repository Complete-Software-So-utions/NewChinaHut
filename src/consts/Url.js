import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Url = endpoint => {
  // const url = 'localhost:3000';
  const url = 'www.newchinahut.herokuapp.com';

  return `${url}/endpoint`;
};

export default Url;
