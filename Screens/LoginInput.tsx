import React from 'react';
import type {Node} from 'react';
import {auth} from '../config/firebase';
import {signInWithEmailAndPassword,signOut} from "firebase/auth";
import { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    TextInput,
  } from 'react-native';

  const LoginInput:({navigation,route})=>Node=({navigation,route})=>{
    
    const [ email,setEmail]=useState("");
    const [ password,setPassword]=useState("");


    const SignIn=async ()=>{
        
        await signInWithEmailAndPassword(auth,email,password)
        .then((userCred)=>{
                const user=userCred.user;
                navigation.navigate('MainMenu');
        }).catch((error)=>{
            alert(error.message);

        })
    };
    const LogOut=async()=>{
        await signOut(auth);
        navigation.navigate('LoginScreen');
    };
    return(
    <SafeAreaView>
    <View style={styles.InputBox}>
    <TextInput placeholder="Email"style={styles.input} onChangeText={(text)=>setEmail(text)} value={email}    />
    </View>

    <View style={styles.InputBox}>
    <TextInput secureTextEntry placeholder="Password" style={styles.input} onChangeText={(text)=>setPassword(text)} value={password}/>
    </View>
    <View style={styles.Button}> 
    <Button title="Login" color='pink'
    onPress={() =>
        {SignIn()
        }}/>
    </View>
     <View style={styles.Button}> 
    <Button title="Log out" color='maroon'
    onPress={() =>
        LogOut()}
        />
    </View>
    <View style={styles.Button}> 
    <Button title="Guest Login" color='maroon'
    onPress={() =>
        navigation.navigate('MainMenu')}
        />
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
        paddingVertical:10,
    },
    Button:{
        paddingVertical:30,
        paddingHorizontal:15,
    }
  });
  export default LoginInput;