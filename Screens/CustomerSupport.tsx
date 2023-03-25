import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Image,
    Input,
    Alert,
    TextInput
  } from 'react-native';

  const CustomerSupport:({navigation,route})=>Node=({navigation,route})=>{
    const send=()=>{
        Alert.alert('Your input was sent!');
    }
    return(
        <SafeAreaView>
            <View>
                <Text style={styles.textStyle}>Write your ideas or complaints directly to customer support</Text>
            </View>
            <View style={{paddingVertical:35, paddingHorizontal:10,}}>
            <TextInput style={styles.InputBox}/>
            </View>
            <View style={styles.Button}>
            <Button title="Send" color="maroon" onPress={()=>send()}/>
            </View>
        
        </SafeAreaView>
  );};

  const styles=StyleSheet.create({
    InputBox:{
        paddingHorizontal:20,
        paddingVertical:150,
        paddingTop:10,
        backgroundColor:'gray',
        textAlignVertical: 'top'
    },
    Button:{
        paddingHorizontal:20,
        paddingVertical:40,
    },
    textStyle: {
            marginTop: 10,
            fontSize: 25,
            fontWeight: '500',
            textAlign: 'center'
          },
  });
  export default CustomerSupport;