import { Pressable, Image, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import DialogBox from './DialogBox';
import { Colors } from '../constants/Colors';
import USER_ID from '../assets/queries/userInfo';
import UPDATE_PROFILE_PICTURE from '../assets/queries/ProfilePictureUpdation';
import { useMutation } from '@apollo/client';



// this component shows the profile picture and handle the events on profile picture
function ProfilePicture({ viewed, navigation, storyAdded, caption }) {

    const [image, setImage] = useState(null);
    const [dialog_visible, set_visible] = useState(false);  // sets the visibility of dialog box
    const [func, {loading, error, data}] = useMutation(UPDATE_PROFILE_PICTURE, { variables: {id: USER_ID, link: image} });
    // code to handle image stuff
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

    // code to check the type of image
    useEffect(() => {
        if (image) {
            // query to do update the profile picture
            func();
            // console.log(image);
            // console.log(data);
        }
    }, [image]);

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
        height: 180,
        width: 180,
        borderRadius: 100,
        borderWidth: 8,
        borderColor: Colors.grey,
    },
    circleNotViewed: {
        height: 206,
        width: 206,
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