import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Colors } from '../constants/Colors';
import ProfilePicture from '../components/ProfilePicture';
import Story from '../components/Story';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useState } from 'react';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

function Screen1({ navigation, route }) {
    const { viewed, storyAdded, caption } = route.params;


    return (
        <View style={styles.outterContainer}>
            <ProfilePicture storyAdded={storyAdded} viewed={viewed} navigation = {navigation} caption={caption}/>
            <View style={styles.infoContainer}>
                <Text style={styles.nameStyle}>Shinchan</Text>
                <Text style={styles.bioStyle}>www.shinchan.com</Text>
            </View>
        </View>
    );
}

export default Screen1;


const styles = StyleSheet.create({
    outterContainer: {
        flex: 1,
        marginTop: window.height / 4,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    nameStyle: {
        fontSize: 24,
        color: Colors.grey,
    },
    bioStyle: {
        fontSize: 20,
        color: Colors.grey,
    }
});