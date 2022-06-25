import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {scale} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

const MyTabBar = props => {
  return (
    <View style={styles.bar}>
      <TouchableOpacity style={styles.tabs}>
        <Image
          source={require('../assets/home.png')}
          resizeMode="contain"
          style={{width: scale(25), height: scale(25)}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabs}>
        <Image
          source={require('../assets/cart.png')}
          resizeMode="contain"
          style={{width: scale(25), height: scale(25)}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabs}>
        <Fontisto name={'bell'} color={'lightgrey'} size={scale(25)} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabs}>
        <Image
          source={require('../assets/myacc.png')}
          resizeMode="contain"
          style={{width: scale(25), height: scale(25)}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MyTabBar;

const styles = StyleSheet.create({
  bar: {
    width: width,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.02,
  },
});
