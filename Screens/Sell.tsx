import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

const Sell = ({ navigation, route }) => {
    return (
        <SafeAreaView>
            <View style={{ paddingVertical: 100, paddingHorizontal: 20 }}>
                <Text>**** treba ovdje dodati nacin da se ubaci slika ***</Text>
            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                <TextInput style={styles.InputBox} placeholder="Name of Item you want to sell" />
            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                <TextInput style={styles.InputBox} placeholder="Description" />
            </View>

            <View style={{flexDirection: 'row', justifyContnt: 'space-between'}}>
                <View style={{ paddingVertical: 10, paddingHorizontal: 20 ,flexDirection: 'row'}}>
                    <TextInput style={styles.Price} placeholder="Price" />

                    <View style={[styles.Button,styles.addWrapper]}>
                        <Button title="Post" color='maroon'
                            onPress={() => {
                                navigation.navigate('MainMenu');
                                Alert.alert('Item successfully posted !');
                            }} />
                    </View>

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
        fontColor: 'white',
        borderRadius: 10
    },
    Button: {
        width: 90,
        height: 70,
        borderRadius: 10
    },
    Price: {
        width: 90,
        height: 70,
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