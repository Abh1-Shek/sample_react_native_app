import { StyleSheet, View, Image, Text } from 'react-native';
import { Colors } from '../constants/Colors';



function Screen1() {
    return (
        <View style={styles.outterContainer}>
            <Image 
                style={styles.square}
                source={require('../assets/shinchan.jpg')}></Image>
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