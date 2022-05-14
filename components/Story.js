import { StyleSheet, View, Image, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Colors } from '../constants/Colors';
import AnimatedProgressView from './AnimatedProgressView';



const delay = 5000;

export default function Story({imageUrl, description, caption, navigation}) {
    const [progress, setProgress] = useState(0);

    useEffect(
        () => {
            const timer = setTimeout(() => navigation.navigate('Home'), delay);
            
            return () => {
                clearTimeout(timer);
            }
        }
    , []);
    
    return (
        <View style={styles.root}>
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
        paddingTop: 40,
        backgroundColor: Colors.storyBackground,
    },
    square: {
        height: 200,
        width: 200,
        margin: 20,
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