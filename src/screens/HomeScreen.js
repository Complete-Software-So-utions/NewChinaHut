import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {useIsFocused} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const isFocused = useIsFocused();
  const focus = React.useRef([]);
  let categories = [
    'Appetizers',
    'Soups',
    'Seafood',
    'Beef',
    'Poultry',
    'Vegetables',
    'Healthy',
  ];

  let menu = [
    {
      category: 'Appetizers',
      items: [
        {
          name: 'Vegetable Egg Rolls',
          description:
            'Egg Roll, B.B.Q Pork, Crabmeat Rangoon, Beef Teriyaki Stick & Cantonese Fried Shrimp',
          singlePrice: 3.85,
        },
        {
          name: 'Pot Stickers',
          doublePrice: {
            small: 3.45,
            large: 5.25,
          },
        },
        {
          name: 'Cantonese Fried Chips',
          doublePrice: {
            small: 6.85,
            large: 'none',
          },
        },
        {
          name: 'Beef Teriyaki Sticks',
          doublePrice: {
            small: 'none',
            large: 8.35,
          },
        },
      ],
    },
    {
      category: 'Soups',
      items: [
        {
          name: 'Vegetable Egg Rolls',
          description:
            'Egg Roll, B.B.Q Pork, Crabmeat Rangoon, Beef Teriyaki Stick & Cantonese Fried Shrimp',
          singlePrice: 3.85,
        },
        {
          name: 'Pot Stickers',
          doublePrice: {
            small: 3.45,
            large: 5.25,
          },
        },
        {
          name: 'Cantonese Fried Chips',
          doublePrice: {
            small: 6.85,
            large: 'none',
          },
        },
        {
          name: 'Beef Teriyaki Sticks',
          doublePrice: {
            small: 'none',
            large: 8.35,
          },
        },
      ],
    },
  ];

  const handleFocus = ref => {
    const index = menu.findIndex(item => item.category === ref);
    console.log(index);
    focus.current.focus(index);
  };

  const setRef = ref => {
    focus.current.push(ref);
  };

  const renderItems = ({item, index}) => {
    return (
      <View ref={setRef}>
        <Text>{item.category}</Text>
        {item.items.map((i, ind) => (
          <View
            style={{
              flexDirection: 'row',
              width: width * 0.9,
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: height * 0.01,
              backgroundColor: 'white',
              elevation: scale(5),
              borderRadius: scale(7),
              borderWidth: scale(1),
              borderColor: 'lightgrey',
              padding: width * 0.01,
            }}
            key={ind}>
            <View style={{width: width * 0.56}}>
              <Text style={{fontSize: scale(15), fontWeight: 'bold'}}>
                {i.name}
              </Text>
              {i.description ? <Text>{i.description}</Text> : null}
            </View>
            {i.singlePrice && !i.doublePrice ? (
              <Text>${i.singlePrice}</Text>
            ) : i.doublePrice.small !== 'none' &&
              i.doublePrice.large !== 'none' ? (
              <View
                style={{
                  flexDirection: 'row',
                  width: width * 0.25,
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Text>Small</Text>
                  <Text>${i.doublePrice.small}</Text>
                </View>
                <View>
                  <Text>Large</Text>
                  <Text>${i.doublePrice.large}</Text>
                </View>
              </View>
            ) : i.doublePrice.small !== 'none' &&
              i.doublePrice.large == 'none' ? (
              <View
                style={{
                  flexDirection: 'row',
                  width: width * 0.25,
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Text>Small</Text>
                  <Text>${i.doublePrice.small}</Text>
                </View>
                <View>
                  <Text>Large</Text>
                  <Text>{i.doublePrice.large}</Text>
                </View>
              </View>
            ) : i.doublePrice.small == 'none' &&
              i.doublePrice.large !== 'none' ? (
              <View
                style={{
                  flexDirection: 'row',
                  width: width * 0.25,
                  justifyContent: 'space-around',
                }}>
                <View>
                  <Text>Small</Text>
                  <Text>{i.doublePrice.small}</Text>
                </View>
                <View>
                  <Text>Large</Text>
                  <Text>${i.doublePrice.large}</Text>
                </View>
              </View>
            ) : null}
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.bg}>
      <Image source={require('../assets/image33.jpg')} style={styles.header} />
      <View style={styles.main}>
        <Text style={styles.are}>{`Are you ready,\nfor something new?`}</Text>
        <Text style={styles.des}>
          We mix Southeast Asian Flavors with a Western flair with Japanese
          cooking techniques to create a unique inspired menu
        </Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{marginTop: height * 0.03}}
          horizontal={true}>
          {categories.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleFocus(item)}
              style={styles.zontal}
              key={index}>
              <Text style={styles.cat}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <FlatList
          data={menu}
          keyExtractor={(item, index) => index}
          renderItem={renderItems}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: height * 0.05}}
          style={{
            height: height * 0.5,
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'white',
    width: width,
    height: height,
  },
  header: {
    width: width,
    height: height * 0.1,
  },
  are: {
    fontSize: scale(20),
    fontWeight: 'bold',
    marginTop: height * 0.05,
  },
  main: {
    width: width * 0.9,
    alignSelf: 'center',
  },
  cat: {
    fontSize: scale(15),
  },
  zontal: {
    width: width * 0.23,
    height: height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
  },
  des: {
    marginTop: height * 0.01,
    fontSize: scale(15),
  },
});
