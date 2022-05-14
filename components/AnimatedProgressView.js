import { StyleSheet, Animated, View } from "react-native";
import { useEffect, useState, useRef } from "react";
import { Colors } from "../constants/Colors";


const delay = 5000;

export default function AnimatedProgressView({ progress, style, navigation }) {
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
});


