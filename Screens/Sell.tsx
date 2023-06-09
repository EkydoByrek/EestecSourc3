import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Image,
    TextInput
} from 'react-native';

const image=require('../Images/ClearItem.png');

const Sell = ({ navigation, route }) => {
    return (
        <SafeAreaView>
            <View style={{ paddingVertical: 100, paddingHorizontal: 20,alignItems: 'center' }}>
                <Image source={image} style={{ width: 130, height: 130}}/>
            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                <TextInput style={styles.InputBox} placeholder="Name of Item you want to sell" />
            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                <TextInput style={styles.InputBox} placeholder="Description" />
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, flex: 1}}>
            <View style={{ flexDirection: 'row' }}>
             <TextInput style={styles.Price} placeholder="Price" />
            </View>
            <View style={styles.Button}>
            <Button
                title="Post"
                color="maroon"
                onPress={() => {
                    navigation.navigate('MainMenu');
                    Alert.alert('Item successfully posted !');
                }}
                />
            </View>
            </View>

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    InputBox: {
        backgroundColor: "gray",
        paddingVertical: 15,
        paddingHorizontal: 20,
        height: 100,
        borderRadius: 10
    },
    Button: {
        width: 150,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
        paddingVertical:1,
    },
    Price: {
        width: 90,
        height: 50,
        backgroundColor: 'pink',
        borderRadius: 10,
        textAlign: 'center',
    },
    addWrapper: {
        alignItems: 'flex-end',
        borderRadius: 10,
        alignSelf: 'flex-end'
    }
    
})

export default Sell;