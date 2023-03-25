import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const DATA = [
  {
    id: 1,
    title: 'Cake',
    description: 'I make custom made cakes!',
    image: require('../Images/cake.jpeg'),
    price: 30,
    review: 'best cake ever',
    seller: 'Jana Milic'
  },
  {
    id: 2,
    title: 'Bag',
    description: 'Well crafted custom bags',
    image: require('../Images/bag.jpeg'),
    price: 50,
    review: 'i dont like the zipper',
    seller: 'Jake Jacob'
  },
  {
    id: 3,
    title: 'Tea',
    description: 'Hand picked mint tea',
    image: require('../Images/tea.jpeg'),
    price: 5,
    review: 'its good queality',
    seller: 'Jana Milic'
  },
  {
    id: 4,
    title: 'Earings',
    description: 'Diamong Earings!',
    image: require('../Images/jewerly.jpg'),
    price: 100,
    review: 'Definitely not diamons',
    seller: 'Mila Kunic'
  },
  {
    id: 5,
    title: 'Dress',
    description: 'Hand knitted dress',
    image: require('../Images/dress.jpeg'),
    price: 100,
    review: 'good quality, would recommend',
    seller: 'Jake Jacobs'
  },
  {
    id: 6,
    title: 'Wall art',
    description: 'I am an independent artist.',
    image: require('../Images/are.jpeg'),
    price: 500,
    review: 'it took realy long time',
    seller: 'Mary'
  },
  {
    id: 7,
    title: 'Butterfly',
    description: 'Pretty butterfly',
    image: require('../Images/bestButterfly.jpeg'),
    price: 33,
    review: 'amazing just amazing',
    seller: 'Mary'
  },];


export function getProducts() {
  return DATA;
}

//geting product by id
export function getProduct(id) {
  return DATA.find((product) => product.id == id);
}


const imageC = require('../Images/ShoppingCart.png');
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <View style={styles.otherContainer}>
      <Text style={[styles.title, { color: textColor }]}>{item.title}</Text><Text style={[styles.rightText, { color: textColor }]}> $ {item.price}</Text>
    </View>
    <Text style={{ color: textColor }}>{item.description}</Text>
    <Image source={item.image} style={{ width: 100, height: 100 }} />
  </TouchableOpacity>
);

const ProductsList = ({ navigation, route }) => {
  const [selectedId, setSelectedId] = useState();
  const [input, setInput] = useState("");
  console.log(input)

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'pink' : 'white';
    const color = item.id === selectedId ? 'white' : 'black';

    if (item.title.toLowerCase().includes(input.toLowerCase())) {
      return (
        <Item
          item={item}
          onPress={() => {
            setSelectedId(item.id);
            navigation.navigate('ProductDetails', { productId: item.id });
          }}
          backgroundColor={backgroundColor}
          textColor={color}
        />
      )
    }

    if (input === "") {
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
        />
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.otherContainer}>
        <TextInput value={input} onChangeText={(text) => setInput(text)} style={styles.search} placeholder="search" />
        <TouchableOpacity onPress={() => { navigation.navigate('Cart') }}>
          <View style={styles.cart}>
            <Image source={imageC} style={{ width: 30, height: 30 }} />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    borderRadius: 10
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
  rightText: {
    alignSelf: 'flex-end'
  },
  otherContainer: {
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 10,
  },
  search: {
    padding: 10,
    flexDirection: "row",
    width: "70%",
    backgroundColor: "#d9dbda",
    alignItems: "center",
    borderRadius: 10,
  },
  cart: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "pink",
    borderRadius: 10,
    alignItems: "center",
  }
});
export default ProductsList;