import { StyleSheet, View, Image, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import { useEffect, useState } from 'react';

function Story({imageUrl, description, caption}) {
    const [value, updateValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            updateValue(oldValue => {
                const newValue = oldValue + 0.17; // 1/60
                if (newValue == 100) {
                    clearInterval(interval);
                }
                return newValue;
            });
        }, 1000);
    }, []);
    
    return (
        <View style={styles.root}>
            <Progress.Bar progress={value} width={200} />
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


export default Story;

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
});