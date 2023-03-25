import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen,HomeScreen,RegistrationScreen} from './screens/';
import { ProductsList } from './screens/Products/ProductsList';
import { ProductDetails } from './screens/Products/ProductDetails';
// import {decode, encode} from 'base-64'
// if (!global.btoa) {  global.btoa = encode }
// if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    // <ProductDetails></ProductDetails>
    <ProductsList></ProductsList>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     { user ? (
    //       <Stack.Screen name="Home">
    //         {props => <HomeScreen {...props} extraData={user} />}
    //       </Stack.Screen>
    //     ) : (
    //       <>
    //         <Stack.Screen name="Login" component={LoginScreen} />
    //         <Stack.Screen name="Registration" component={ProductsList} />
    //       </>
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}