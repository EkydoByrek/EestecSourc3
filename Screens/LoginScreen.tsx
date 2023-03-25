import React from 'react';
import type {Node} from 'react';
import {
    Colors,

  } from 'react-native/Libraries/NewAppScreen';

import {
    SafeAreaView,
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

    <Section title="Shopping App Sourc3" children={undefined} >
       Handmade bestseller 2023 
      </Section>
      <View style={{alignItems: 'center'}}>
      <Image source={image} style={{ width: 200, height: 200}}/>
      </View>
      <Section title="Login or Sign up" children={undefined} >
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
        fontWeight: '500',
        textAlign: 'center'
      },
      highlight: {
        fontWeight: '700',
      },
});
export default LoginScreen;