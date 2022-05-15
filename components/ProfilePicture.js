import { Pressable, Image, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import DialogBox from './DialogBox';
import { Colors } from '../constants/Colors';



function ProfilePicture({ viewed, navigation, storyAdded, caption }) {
    const [image, setImage] = useState(null);
    const [dialog_visible, set_visible] = useState(false);

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
        set_visible(false);
	};
    function handleOnLongPress() {
        set_visible(true);
    }
    function handleRemoveImage() {
        setImage(null);
        set_visible(false);
    }

    function handlePress() {
        if (storyAdded) {
            navigation.navigate('Story', {
                caption: caption,
            });
        }
        else {
            navigation.navigate('addStory');
        }
    }
    
    
    return (
        <Pressable onLongPress={handleOnLongPress} onPress={handlePress}>
            <DialogBox visible={dialog_visible}
                       title = {"Image Options"}
                       description = {"choose image option!"}
                       addImage = {chooseImg}
                       removeImage = {handleRemoveImage}
                       set_visible = {set_visible}/>
            {!image && <Image 
                // style={viewed ? styles.circle : styles.circleNotViewed}  // add another condition of storyAdded here
                style={storyAdded ? (viewed ? styles.circle : styles.circleNotViewed): styles.circleNotAdded}
                source={require('../assets/shinchan.jpg')}></Image>}
            {image && <Image 
                style={storyAdded ? (viewed ? styles.circle : styles.circleNotViewed): styles.circleNotAdded} // add another condition of storyAdded here
                source={{uri: image}}></Image>}
        </Pressable>
    );
}


export default ProfilePicture;


const styles = StyleSheet.create({
    circle: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 8,
        borderColor: Colors.grey,
    },
    circleNotViewed: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 8,
        borderColor: Colors.yellow,
    },
    circleNotAdded: {
        height: 200,
        width: 200,
        borderRadius: 100,
    }
});