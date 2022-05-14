import { StyleSheet, View, Image, Text, Platform, Button } from 'react-native';
import { Colors } from '../constants/Colors';
import ProfilePicture from '../components/ProfilePicture';
import Story from '../components/Story';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useState } from 'react';

function Screen1({ navigation }) {
    const [viewed, setViewed] = useState(false);

    function goToScreen2() {
        setViewed(true);
        navigation.navigate('Story');
    }
    return (
        <View style={styles.outterContainer}>
            <ProfilePicture viewed={viewed} navigation = {navigation}/>
            <View>
                {(!viewed) && <Button onPress={goToScreen2} title="+"/>}
            </View>
            <View style={styles.infoContainer}>
                <Text>Shinchan</Text>
                <Text>My favourite show</Text>
            </View>
        </View>
    );
}

export default Screen1;


const styles = StyleSheet.create({
    outterContainer: {
        flex: 1,
        marginTop: 60,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});