import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {auth} from '../config/firebase';
import {createUserWithEmailAndPassword,signOut} from "firebase/auth";
import { useState } from 'react';
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
      const [name,setName]=useState("");
      const [email,setEmail]=useState("");
      const [password,setPassword]=useState("");
      const [cPassword,setCPassword]=useState("");
    const signUp=async()=>{
      if(password!==cPassword){
      alert("Passwords don't match!")
      return}
      await createUserWithEmailAndPassword(auth,email,password)
      .then((userCred)=>{
                const user=userCred.user;
                navigation.navigate('LoginInput');
      }).catch((error)=>{
        alert(error.message)
      })

    };

    return(
    <SafeAreaView>
    <View style={styles.InputBox}>
    <TextInput placeholder="Choose Username"style={styles.boxes}onChangeText={(text)=>setName(text)} value={name} />
    </View>

    <View style={styles.InputBox}>
    <TextInput placeholder="E-Mail"style={styles.boxes}onChangeText={(text)=>setEmail(text)} value={email} />
    </View>

    <View style={styles.InputBox}>
    <TextInput placeholder="Choose Password" style={styles.boxes}onChangeText={(text)=>setPassword(text)} value={password} />
    </View>

    <View style={styles.InputBox}>
    <TextInput placeholder="Confirm Password" style={styles.boxes}onChangeText={(text)=>setCPassword(text)} value={cPassword} />
    </View>

    <View style={styles.Button}>
    <Button title="Sign Up" color='pink'

    onPress={() =>{
      signUp();
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