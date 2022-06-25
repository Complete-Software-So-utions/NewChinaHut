import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const [categories, setCategories] = React.useState([
    {name: 'Appetizers', highlight: true},
    {name: 'Soups', highlight: false},
  ]);

  const [filterCat, setFilter] = React.useState([]);

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
          name: 'Shrimp Almond Ding',
          description:
            'Egg Roll, B.B.Q Pork, Crabmeat Rangoon, Beef Teriyaki Stick & Cantonese Fried Shrimp',
          singlePrice: 3.85,
        },
        {
          name: 'Chicken Noodle Soup',
          doublePrice: {
            small: 3.45,
            large: 5.25,
          },
        },
        {
          name: 'Chicken Sizzling Rice',
          doublePrice: {
            small: 6.85,
            large: 'none',
          },
        },
        {
          name: 'Chicken Teriyaki Sticks',
          doublePrice: {
            small: 'none',
            large: 8.35,
          },
        },
      ],
    },
  ];

  const handleFocus = itm => {
    const arr = menu.filter(item => item.category == itm);
    setFilter(arr);
    let cat = [...categories];
    for (let x = 0; x < cat.length; x++) {
      if (cat[x].highlight == true) {
        cat[x] = {...cat[x], highlight: false};
      } else if (cat[x].highlight == false) {
        cat[x] = {...cat[x], highlight: true};
      }
    }
    setCategories(cat);
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
              onPress={() => handleFocus(item.name)}
              style={[
                styles.zontal,
                {
                  backgroundColor: item.highlight == true ? 'maroon' : 'white',
                },
              ]}
              key={index}>
              <Text
                style={[
                  styles.cat,
                  {color: item.highlight == true ? 'white' : 'black'},
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {filterCat.length < 1 ? (
          <Text>{menu[0].category}</Text>
        ) : (
          <Text>{filterCat[0].category}</Text>
        )}
        <ScrollView>
          {filterCat.length < 1
            ? menu[0].items.map((i, index) => (
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
                    padding: width * 0.04,
                  }}
                  key={index}>
                  <Text
                    style={{
                      fontSize: scale(15),
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                    {i.name}
                  </Text>
                  {i.singlePrice && !i.doublePrice ? (
                    <Text style={{marginRight: width * 0.02}}>
                      ${i.singlePrice}
                    </Text>
                  ) : i.doublePrice.small !== 'none' &&
                    i.doublePrice.large !== 'none' ? (
                    <View
                      style={{
                        flexDirection: 'row',
                        width: width * 0.25,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                      }}>
                      <View style={{alignItems: 'center'}}>
                        <Text>Small</Text>
                        <Text>${i.doublePrice.small}</Text>
                      </View>
                      <View style={{alignItems: 'center'}}>
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
                        alignItems: 'center',
                      }}>
                      <View style={{alignItems: 'center'}}>
                        <Text>Small</Text>
                        <Text>${i.doublePrice.small}</Text>
                      </View>
                      <View style={{alignItems: 'center'}}>
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
                        alignItems: 'center',
                      }}>
                      <View style={{alignItems: 'center'}}>
                        <Text>Small</Text>
                        <Text>{i.doublePrice.small}</Text>
                      </View>
                      <View style={{alignItems: 'center'}}>
                        <Text>Large</Text>
                        <Text>${i.doublePrice.large}</Text>
                      </View>
                    </View>
                  ) : null}
                </View>
              ))
            : filterCat[0].items.map((i, index) => (
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
                    padding: width * 0.04,
                  }}
                  key={index}>
                  <Text style={{fontSize: scale(15), fontWeight: 'bold'}}>
                    {i.name}
                  </Text>
                  {i.singlePrice && !i.doublePrice ? (
                    <Text style={{marginRight: width * 0.02}}>
                      ${i.singlePrice}
                    </Text>
                  ) : i.doublePrice.small !== 'none' &&
                    i.doublePrice.large !== 'none' ? (
                    <View
                      style={{
                        flexDirection: 'row',
                        width: width * 0.25,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                      }}>
                      <View style={{alignItems: 'center'}}>
                        <Text>Small</Text>
                        <Text>${i.doublePrice.small}</Text>
                      </View>
                      <View style={{alignItems: 'center'}}>
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
                        alignItems: 'center',
                      }}>
                      <View style={{alignItems: 'center'}}>
                        <Text>Small</Text>
                        <Text>${i.doublePrice.small}</Text>
                      </View>
                      <View style={{alignItems: 'center'}}>
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
                        alignItems: 'center',
                      }}>
                      <View style={{alignItems: 'center'}}>
                        <Text>Small</Text>
                        <Text>{i.doublePrice.small}</Text>
                      </View>
                      <View style={{alignItems: 'center'}}>
                        <Text>Large</Text>
                        <Text>${i.doublePrice.large}</Text>
                      </View>
                    </View>
                  ) : null}
                </View>
              ))}
        </ScrollView>
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
    color: '#000',
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
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
  },
  des: {
    marginTop: height * 0.01,
    fontSize: scale(15),
    color: '#000',
  },
});
