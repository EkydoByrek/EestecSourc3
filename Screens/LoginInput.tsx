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
    TextInput
  } from 'react-native';

  const LoginInput:({navigation,route})=>Node=({navigation,route})=>{
    return(
    <SafeAreaView>
    <View style={styles.InputBox}>
    <TextInput placeholder="Username"style={styles.input}/>
    </View>

    <View style={styles.InputBox}>
    <TextInput placeholder="Password" style={styles.input}/>
    </View>
    <View style={styles.Button}> 
    <Button title="Login" color='pink'
    onPress={() =>
        navigation.navigate('MainMenu')}/>
    </View>
    <View style={styles.Button}> 
    <Button title="Guest Login" color='maroon'
    onPress={() =>
        navigation.navigate('MainMenu')}/>
    </View>
    </SafeAreaView>
  );};

  const styles = StyleSheet.create({
    InputBox: {
        
        flex:1,
        paddingVertical:40,
        paddingHorizontal:20,
        height:50,
    },
    input:{
        backgroundColor:"gray",
        height:50,
        color:'white',
        textColor:'white',
        paddingVertical:10,
        margineVertical:10,
    },
    Button:{
        paddingVertical:30,
        paddingHorizontal:15,
    }
  });
  export default LoginInput;