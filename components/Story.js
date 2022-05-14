import { StyleSheet, View, Image, Text } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { Animated } from 'react-native';
import { Colors } from '../constants/Colors';

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

function AnimatedProgressView({ progress, style, navigation }) {
    const value = useRef(new Animated.Value(0));
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
      // Animated.spring(value.current, { toValue: progress, duration: 5000}).start();
      Animated.timing(value.current, {toValue: progress, duration: delay}).start();
    }, [progress]);

    return (
      <View
        style={[styles.track, style]}
        onLayout={(event) => setWidth(event.nativeEvent.layout.width)}>
        <Animated.View
          style={[
            styles.fill,
            {
              transform: [
                {
                  translateX: value.current.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-width, 0],
                    overflow: 'clamp',
                  }),
                },
              ],
            },
          ]}
        />
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
    track: {
        width: 300,
        minHeight: 6,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'white',
        overflow: 'hidden',
        backgroundColor: Colors.storyBackground,
    },
    fill: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'white',
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