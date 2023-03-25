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

  const SignUp:({navigation,route})=>Node=({navigation,route})=>{
    return(
    <SafeAreaView>
    <View style={styles.InputBox}>
    <TextInput placeholder="Choose Username"style={styles.boxes}/>
    </View>

    <View style={styles.InputBox}>
    <TextInput placeholder="Choose Password" style={styles.boxes}/>
    </View>

    <View style={styles.InputBox}>
    <TextInput placeholder="Confirm Password" style={styles.boxes}/>
    </View>

    <View style={styles.Button}>
    <Button title="Sign Up" color='pink'

    onPress={() =>{
      navigation.navigate('LoginInput');
      Alert.alert('Accout created successfully, please log in');
    }} />
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
    boxes:{
        backgroundColor:'gray',
        height:50,
        color:'white',
        paddingVertical:10,
        marginVertical:10,
    },
    Button:{
        paddingVertical:45,
        paddingHorizontal:40,
        
    }
  });
  export default SignUp;