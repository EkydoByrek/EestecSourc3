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
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const DATA = [
  {
    id: 1,
    title: 'First Item',
    description: 'helo world',
    image: require('../Images/bestButterfly.jpeg'),
    price: 1,
    review: 'amazing just amazing',
    seller: 'jane Doe'
  },
  {
    id: 2,
    title: 'Second Item',
    description: 'helo world',
    image: require('../Images/bestButterfly.jpeg'),
    price: 1,
    review: 'amazing just amazing',
    seller: 'jane Doe'},
  {
    id: 3,
    title: 'Third Item',
    description: 'helo world',
    image: require('../Images/bestButterfly.jpeg'),
    price: 1,
    review: 'amazing just amazing',
    seller: 'jane Doe'},
];


export function getProducts(){
  return DATA;
}

//geting product by id
export function getProduct(id){
  return DATA.find((product)=>product.id ==id);
}


const imageC=require('../Images/ShoppingCart.png');
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <View style={styles.otherContainer}>
      <Text style={[styles.title, { color: textColor }]}>{item.title}</Text><Text style={[styles.rightText, { color: textColor }]}> $ {item.price}</Text>
    </View>
    <Text style={{ color: textColor }}>{item.description}</Text>
    <Image source={item.image} />
  </TouchableOpacity>
);

const ProductsList = ({navigation,route})=>{
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
          onPress={() =>{ setSelectedId(item.id);
          navigation.navigate('ProductDetails',{productId:item.id});}}
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
        <TouchableOpacity onPress={()=>{navigation.navigate('Cart')}}>
          <View style={styles.cart}>
            <Image  source={imageC} style={{ width: 30, height: 30}}/>
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