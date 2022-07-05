import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';

const {width} = Dimensions.get('window');

const CustomHeader = props => {
  return (
    <View style={styles.customView}>
      {props.backButton ? (
        <View style={styles.back}>
          <TouchableNativeFeedback onPress={props.onPress}>
            <View>
              <Ionicons name="md-chevron-back" size={24} color="#000" />
            </View>
          </TouchableNativeFeedback>
        </View>
      ) : (
        <View style={{width: scale(20)}} />
      )}

      <Text
        style={{
          fontSize: scale(18),
          color: props.color ? props.color : '#fff',
        }}>
        {props.title}
      </Text>
      <View style={{width: scale(20)}} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  customView: {
    width: width,
    padding: 20,
    height: width / 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  back: {
    width: scale(35),
    height: scale(35),
    backgroundColor: '#fff',
    elevation: 6,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
