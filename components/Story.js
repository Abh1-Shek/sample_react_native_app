import { StyleSheet, View, Image, Text, Dimensions, StatusBar } from 'react-native';
import { useEffect } from 'react';
import { Colors } from '../constants/Colors';
import AnimatedProgressView from './AnimatedProgressView';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const delay = 5000;

export default function Story({imageUrl, description, caption, navigation}) {

    useEffect(
        () => {
            const timer = setTimeout(() => navigation.navigate('Home', {
                viewed: true,
                storyAdded: true,
                caption: caption,
            }), delay);
            
            return () => {
                clearTimeout(timer);
            }
        }
    , []);
    
    return (
        <View style={styles.root}>
            <StatusBar translucent backgroundColor="transparent" barStyle='light-content'/>
            <View>
                <AnimatedProgressView progress={1} navigation={navigation}/>
            </View>
            <View>
                <View style={styles.mainStory}>
                    <Image defaultSource = {'../assets/shinchan.jpg'} source={{uri: imageUrl}} style={styles.square}/>
                    <Text style={styles.descriptionText}>{description}</Text>
                </View>
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>{caption}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        paddingTop: window.width / 4,
        backgroundColor: Colors.storyBackground,
    },
    square: {
        height: 200,
        width: 200,
        margin: 20,
        borderRadius: 8,
    },
    mainStory: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    captionContainer: {
        marginTop: 50,
    },
    captionText: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
    },
    descriptionText: {
        color: 'white'
    },
});