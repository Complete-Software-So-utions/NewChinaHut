import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  FlatList,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../components/CustomHeader';
import FlexibleCard from '../components/FlexibleCard';
import {scale} from 'react-native-size-matters';
import {predefinedStyles} from '../consts/css';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button} from '@rneui/themed';

const {width, height} = Dimensions.get('window');

const Cart = props => {
  const [pickupTrue, setPickupTrue] = useState(true);
  const [deliveryTrue, setDeliveryTrue] = useState(false);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/homebg.png')}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        contentContainerStyle={{
          paddingVertical: 20,
          paddingBottom: 100,
        }}
        ListHeaderComponent={() => <CustomHeader title="Cart" />}
        ListFooterComponent={() => (
          <View style={{marginTop: scale(25)}}>
            <View style={styles.deliveryOption}>
              <TouchableNativeFeedback
                onPress={() => {
                  setPickupTrue(true);
                  setDeliveryTrue(false);
                }}>
                <View
                  style={
                    pickupTrue
                      ? [styles.options, {backgroundColor: 'maroon'}]
                      : styles.options
                  }>
                  <Text
                    style={{
                      color: pickupTrue ? '#fff' : 'maroon',
                    }}>
                    Pickup
                  </Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => {
                  setPickupTrue(false);
                  setDeliveryTrue(true);
                }}>
                <View
                  style={
                    deliveryTrue
                      ? [styles.options, {backgroundColor: 'maroon'}]
                      : styles.options
                  }>
                  <Text style={{color: deliveryTrue ? '#fff' : 'maroon'}}>
                    Delivery
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>

            <View style={styles.row}>
              <Text style={{color: '#888', fontSize: scale(16)}}>
                {' '}
                Delivery Fee{' '}
              </Text>
              <Text style={{color: '#888', fontSize: scale(16)}}> Free </Text>
            </View>
            <View style={[styles.row, {marginTop: 15}]}>
              <Text style={[predefinedStyles.textColor, {fontSize: scale(16)}]}>
                {' '}
                Total{' '}
              </Text>
              <Text style={[predefinedStyles.textColor, {fontSize: scale(16)}]}>
                {' '}
                $30.00{' '}
              </Text>
            </View>

            <Button
              onPress={() => props.navigation.navigate('Address')}
              containerStyle={{
                width: width / 1.1,
                alignSelf: 'center',
                marginTop: 20,
                borderRadius: 10,
              }}
              buttonStyle={{
                backgroundColor: 'maroon',
                height: scale(50),
              }}
              title="Continue"
            />
          </View>
        )}
        renderItem={({item}) => (
          <FlexibleCard style={{marginTop: 20}}>
            <View style={styles.cardInnerView}>
              <Image
                source={require('../assets/dish.png')}
                style={styles.image}
              />
              <View style={styles.detailsView}>
                <View style={styles.upperRow}>
                  <Text
                    style={[predefinedStyles.textColor, {fontSize: scale(13)}]}>
                    {' '}
                    Tomato Veggie{' '}
                  </Text>
                  <Text
                    style={[predefinedStyles.textColor, {fontSize: scale(13)}]}>
                    {' '}
                    $9.99{' '}
                  </Text>
                </View>
                <View style={styles.lowerRow}>
                  <View style={styles.noteView}>
                    <Text style={{color: '#888', fontSize: scale(10)}}>
                      Without salad please
                    </Text>
                    <SimpleLineIcons
                      name="note"
                      size={16}
                      color="#888"
                      style={{marginLeft: scale(7)}}
                    />
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign name="minus" size={25} color="maroon" />
                    <Text
                      style={[
                        predefinedStyles.textColor,
                        {fontSize: scale(18)},
                      ]}>
                      {' '}
                      1{' '}
                    </Text>
                    <AntDesign name="pluscircle" size={25} color="maroon" />
                  </View>
                </View>
              </View>
            </View>
          </FlexibleCard>
        )}
      />
    </ImageBackground>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  image: {
    width: scale(60),
    height: scale(60),
  },
  cardInnerView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  upperRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: scale(10),
  },
  lowerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: scale(8),
  },
  detailsView: {
    height: '100%',
    width: width / 1.5,
    justifyContent: 'space-between',
  },
  noteView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(7),
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  deliveryOption: {
    marginTop: scale(10),
    marginBottom: scale(30),
    borderColor: 'maroon',
    borderWidth: 1,
    borderRadius: 10,
    width: width / 1.1,
    alignSelf: 'center',
    height: scale(35),
    flexDirection: 'row',
    overflow: 'hidden',
  },
  options: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
