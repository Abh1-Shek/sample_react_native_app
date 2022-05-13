import { StyleSheet, View, Image, Text, Platform, Button } from 'react-native';
import { Colors } from '../constants/Colors';
import ProfilePicture from '../components/ProfilePicture';
import Story from '../components/Story';

function Screen1() {
    return (
        <View style={styles.outterContainer}>
            <ProfilePicture />
            <Text>Shinchan</Text>
            <Text>My favourite show</Text>
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