import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

const FlexibleCard = props => {
  return <View style={[styles.card, {...props.style}]}>{props.children}</View>;
};

export default FlexibleCard;

const styles = StyleSheet.create({
  card: {
    width: width / 1.1,
    height: width / 4.5,
    padding: 10,
    borderRadius: 12,
    elevation: 7,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
});
