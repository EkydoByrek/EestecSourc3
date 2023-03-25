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
import { SearchFilter } from '../../components/SearchFilter';

const DATA = [
  {
    id: 1,
    title: 'First Item',
    description: 'helo world',
    image: require('../../images/bestButterfly.jpeg'),
    price: 1,
  },
  {
    id: 2,
    title: 'Second Item',
    description: 'helo world',
    image: require('../../images/bestButterfly.jpeg'),
    price: 1,
  },
  {
    id: 3,
    title: 'Third Item',
    description: 'helo world',
    image: require('../../images/bestButterfly.jpeg'),
    price: 1,
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <View style={styles.otherContainer}>
      <Text style={[styles.title, { color: textColor }]}>{item.title}</Text><Text style={[styles.rightText, { color: textColor }]}> $ {item.price}</Text>
    </View>
    <Text style={{ color: textColor }}>{item.description}</Text>
    <Image source={item.image} />
  </TouchableOpacity>
);

export function ProductsList() {
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
          onPress={() => setSelectedId(item.id)}
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
        <TouchableOpacity>
          <View style={styles.cart}>
            <Text>Cart</Text>
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
    borderRadius: 1,
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
    padding: 10,
    flexDirection: "row",
    backgroundColor: "pink",
    borderRadius: 10,
    alignItems: "center",
  }
});