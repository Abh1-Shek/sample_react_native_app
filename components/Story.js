import { StyleSheet, View, Image, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import { useEffect, useState, useRef } from 'react';
import { Animated } from 'react-native';


export default function Story({imageUrl, description, caption}) {
    const [progress, setProgress] = useState(0);
    
    return (
        <View style={styles.root}>
            <View>
                <AnimatedProgressView progress={1} />
            </View>
            <View>
                <View>
                    <Image source={{uri: imageUrl}} style={styles.square}/>
                    <Text>{description}</Text>
                </View>
                <View>
                    <Text>{caption}</Text>
                </View>
            </View>
        </View>
    );
}

function AnimatedProgressView({ progress, style }) {
    const value = useRef(new Animated.Value(0));
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
      // Animated.spring(value.current, { toValue: progress, duration: 5000}).start();
      Animated.timing(value.current, {toValue: progress, duration: 5000}).start();
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    square: {
        height: 200,
        width: 200,
    },
    track: {
        width: 300,
        minHeight: 4,
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor: '#ddd',
    },
    fill: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'blue',
    },
});