import React from 'react';
//import ShoppingLogo from "ShoppingLogo.png";
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginInput from './LoginInput';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Image
  } from 'react-native';

  const image=require('../Images/ShoppingLogo.png');

  const Section = ({children, title}): Node => {
    const isDarkMode = useColorScheme() === 'dark';

   const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
  };

const LoginScreen:({navigation,route})=>Node=({navigation,route})=>{
    return(    
    <SafeAreaView >

    <Section title="Shopping App Sourc3" >
        Amazon's fog bestseller 2023
      </Section>
      <View style={{alignItems: 'center'}}>
      <Image source={image} style={{ width: 200, height: 200}}/>
      </View>
      <Section title="Login or Sign up" >
      </Section>

        <View  style={styles.Button}>
        <Button title="Log in" color="pink"
        onPress={() =>
        navigation.navigate('LoginInput')}/>

        </View>
        <View  style={styles.Button}>
        <Button title="Sign Up" color="maroon"
        onPress={() =>
          navigation.navigate('SignUp')}/>
        </View> 
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    Button:{
        paddingVertical:10,
        margineVertical:20,
        paddingHorizontal:15,
    },
    sectionContainer: {
        marginTop: 40,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center'
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center'
      },
      highlight: {
        fontWeight: '700',
      },
});
export default LoginScreen;