import React, { useState, ReactElement, useEffect,useContext } from 'react';
// import { SafeAreaView, Text, Image, View } from 'react-native-safe-area-context';
import { Alert, View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsList from './ProductsList';
import { getProduct } from './ProductsList';
import { cartContext } from '../components/CartContext';
import CustomerSupport from './CustomerSupport';




const ProductDetails = ({ navigation, route }) => {
// const ProductDetails: ({ navigation, route }: { navigation: any, route: any }) => ReactElement = ({ navigation, route }) => {

    const {addItemToCart} = useContext(cartContext);


    const { productId } = route.params;
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(getProduct(productId))
    })

    function onAddToCart(){
        addItemToCart(productId);
        Alert.alert('Added item to cart')
    }
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={product.image} />
                    <Text style={styles.name}>{product.title}</Text>
                    <Text style={styles.price}>$ {product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Button onPress={onAddToCart} title="Add to Cart" />
                </View>

                <View style={styles.otherContainer}>
                    <Text style={styles.price}>Reviews</Text>
                    <Text style={styles.wrperText}>{product.review}</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('CustomerSupport')}} >
                        <View style={styles.addWrapper}>
                            <Text style={styles.wrperText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.otherContainer}>
                    <Text style={styles.price}>Seller</Text>
                    <Text style={styles.wrperText}>{product.seller}</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        aspectRatio: 1
    },
    infoContainer: {
        padding: 16
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        textAlign: 'center',
        color: 'black'
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 16,
        color: 'black',
        textAlign: 'center'
    },
    otherContainer: {
        padding: 20,
        alignItems: 'flex-start',
        borderRadius: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    addWrapper: {
        width: 30,
        height: 30,
        backgroundColor: 'pink',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrperText: {
        color: 'black'
    }

});
export default ProductDetails;