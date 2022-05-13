import { StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { useEffect, useState } from 'react';

function Story() {
    const [value, updateValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            updateValue(oldValue => {
                const newValue = oldValue + 0.01;
                if (newValue == 100) {
                    clearInterval(interval);
                }
                return newValue;
            });
        }, 50);
    }, []);
    
    return (
        <Progress.Bar progress={value} width={200} />
    );
}


export default Story;

const styles = StyleSheet.create({

});