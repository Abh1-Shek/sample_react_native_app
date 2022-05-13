import { StyleSheet, View, Image, Text, Platform, Button } from 'react-native';
import { Colors } from '../constants/Colors';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


function Screen1() {
    const [image, setImage] = useState(null);

    useEffect(() => {
		(async () => {
		if (Platform.OS !== 'web') {
			const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
			if (status !== 'granted') {
			alert('Sorry, Camera roll permissions are required to make this work!');
			}
		}
		})();
	}, []);

    const chooseImg = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			aspect: [4, 3],
			quality: 1,			
			allowsEditing: true,
		});
	
		console.log(result);
	
		if (!result.cancelled) {
		   setImage(result.uri);
		}
	};

    return (
        <View style={styles.outterContainer}>
            <Pressable onLongPress={chooseImg}>
                <Image 
                    style={styles.square}
                    source={require('../assets/shinchan.jpg')}></Image>
            </Pressable>
            <Text>Shinchan</Text>
            <Text>My favourite show</Text>
        </View>
    );
}

export default Screen1;


const styles = StyleSheet.create({
    square: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    outterContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});