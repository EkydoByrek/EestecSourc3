import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LoginScreen from './Screens/LoginScreen';
import LoginInput from './Screens/LoginInput';
import MainMenu from './Screens/MainMenu';
import SignUp from './Screens/SignUp';
import CustomerSupport from './Screens/CustomerSupport';
import ProductDetails from './Screens/ProductDetails';
import ProductsList from './Screens/ProductsList';
import { CartProvider } from './components/CartContext';
import Cart from './Screens/Cart';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {


  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='LoginScreen'
            component={LoginScreen}
            options={{ headerTitle: '' }} />
          <Stack.Screen
            name='LoginInput'
            component={LoginInput}
            options={{ headerTitle: '' }} />
          <Stack.Screen
            name='MainMenu'
            component={MainMenu}
            options={{ headerTitle: '' }} />
          <Stack.Screen
            name='SignUp'
            component={SignUp}
            options={{ headerTitle: '' }} />
          <Stack.Screen
            name='CustomerSupport'
            component={CustomerSupport}
            options={{ headerTitle: '' }} />
          <Stack.Screen
            name='ProductDetails'
            component={ProductDetails}
            options={{ headerTitle: '' }} />
          <Stack.Screen
            name='ProductsList'
            component={ProductsList}
            options={{ headerTitle: '' }}
          />
          <Stack.Screen
            name='Cart'
            component={Cart}
            options={{ headerTitle: '' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
    );

};

/*const FrontPage:()=>Node=({navigation})=>{
  return(
  <SafeAreaView style={backgroundStyle}>
  <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    style={backgroundStyle}>
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
    </View>
  </ScrollView>
</SafeAreaView>
);};*/

export default App;