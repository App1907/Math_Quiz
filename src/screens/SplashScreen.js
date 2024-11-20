import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Images } from '../assets';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        }, 2000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <ImageBackground source={Images.splash} style={styles.img} />
            <Text style={styles.text}>Math Quiz App</Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4CC9FE',
    },
    img: {
        height: 200,
        width: 200,
    },
    text: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
});