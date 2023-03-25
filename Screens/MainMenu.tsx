import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    Image,
  } from 'react-native';
  const image1=require('../Images/ShoppingCart.png');
  const image2=require('../Images/Money.png');

  const MainMenu=({navigation,route})=>{return(
    <SafeAreaView>
        <View style={styles.Button}>
            <Button title="Buy" color="pink"
            onPress={() =>navigation.navigate('ProductsList')}/>
        </View>
        <View style={{alignItems: 'center'}}>
            <Image source={image1} style={{ width: 130, height: 130}}/>
        </View>
        <View style={styles.Button}>
            <Button title="Sell" color="pink"
            onPress={() =>navigation.navigate('Sell')}/>
        </View>
        <View style={{alignItems: 'center'}}>
            <Image source={image2} style={{ width: 130, height: 130}}/>
        </View>
        <View style={styles.Contact}>
            <Button title="Contact support" color="maroon"
            onPress={() =>navigation.navigate('CustomerSupport')}/>
        </View>
    </SafeAreaView>
  );};

  const styles = StyleSheet.create({
    Button:{
        paddingVertical:50,
        paddingHorizontal:30,
    },
    Contact:{
        paddingVertical:170,
        paddingHorizontal:60,
    },
  })
  export default MainMenu;