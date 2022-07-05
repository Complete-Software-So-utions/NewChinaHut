import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {scale} from 'react-native-size-matters';
import CustomHeader from '../components/CustomHeader';
import {Button} from '@rneui/themed';

const {width, height} = Dimensions.get('window');

const Address = props => {
  const [address, setAddress] = useState([1, 2, 3]);
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../assets/homebg.png')}
        style={{width: width, height: height}}>
        <CustomHeader
          title="Add Address"
          backButton={true}
          onPress={() => props.navigation.goBack()}
        />

        <View style={{padding: 15}}>
          <Text style={styles.mainText}> Added Addresses</Text>
          <View style={styles.horizontalLine} />

          {address.map(item => (
            <View style={styles.addressView} key={item}>
              <Image
                source={require('../assets/marker.png')}
                style={{width: scale(50), height: scale(50)}}
              />
              <View style={styles.verticleLine} />
              <View
                style={{
                  width: '75%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{color: 'maroon', fontSize: scale(12)}}
                  numberOfLines={3}>
                  3471 Davis Lane, Aurora, CO 3471 Davis Lane, Aurora, CO
                </Text>
              </View>
            </View>
          ))}

          <Button
            onPress={() => {}}
            containerStyle={{
              width: '100%',
              alignSelf: 'center',
              marginTop: scale(20),
              borderRadius: 10,
            }}
            buttonStyle={{
              backgroundColor: 'maroon',
              height: scale(50),
            }}
            title="Add Address"
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addressView: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: scale(20),
    width: '100%',
    height: width / 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 6,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  mainText: {
    fontSize: scale(18),
    fontWeight: 'bold',
    color: 'maroon',
    marginBottom: scale(15),
  },
  verticleLine: {
    borderRightWidth: 1,
    borderRightColor: '#eee',
    height: '100%',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width: '100%',
    marginBottom: scale(20),
  },
});
