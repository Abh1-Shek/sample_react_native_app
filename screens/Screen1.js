import { StyleSheet, View, Image, Text, Platform, Button } from 'react-native';
import { Colors } from '../constants/Colors';
import ProfilePicture from '../components/ProfilePicture';
import Story from '../components/Story';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

function Screen1({ navigation }) {
    function goToScreen2() {
        navigation.navigate('Story');
    }
    return (
        <View style={styles.outterContainer}>
            <ProfilePicture />
            <Text>Shinchan</Text>
            <Text>My favourite show</Text>
            <View>
                <Button onPress={goToScreen2} title="STORY"/>
            </View>
        </View>
    );
}

export default Screen1;


const styles = StyleSheet.create({
    outterContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});