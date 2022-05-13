import { Pressable, Image, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import DialogBox from './DialogBox';



function ProfilePicture({ onLongPress }) { // pass the chooseImg func here
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

    
    
    return (
        <Pressable onLongPress={handleOnLongPress}>
            <DialogBox visible={dialog_visible}
                       title = {"Image Options"}
                       description = {"choose image option!"}
                       addImage = {chooseImg}
                       removeImage = {handleRemoveImage}
                       set_visible = {set_visible}/>
            {!image && <Image 
                style={styles.square}
                source={require('../assets/shinchan.jpg')}></Image>}
            {image && <Image 
                style={styles.square}
                source={{uri: image}}></Image>}
        </Pressable>
    );
}


export default ProfilePicture;


const styles = StyleSheet.create({
    square: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
});