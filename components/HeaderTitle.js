import { View, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Svg, G, Line } from 'react-native-svg';
import { useState, useEffect } from 'react';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function HeaderTitle() {

    const [dimensions, setDimensions] = useState({ window, screen });

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
        "change",
        ({ window, screen }) => {
            setDimensions({ window, screen });
        }
        );
        return () => subscription?.remove();
    });

    return <View style={styles.rootContainer}>
        <Pressable style={styles.backButton}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="34.016" height="43.933" viewBox="0 0 34.016 43.933">
                <G id="Group_1" dataName="Group 1" transform="translate(-23.992 -68.992)">
                    <Line id="Line_1" dataName="Line 1" x2="27" y2="16" transform="translate(27.5 93.5)" fill="none" stroke="#fdbb21" strokeLinecap="round" strokeWidth="4"/>
                    <Line id="Line_2" dataName="Line 2" x1="27" y2="21" transform="translate(27.5 72.5)" fill="none" stroke="#fdbb21" strokeLinecap="round" strokeWidth="4"/>
                </G>
            </Svg>
        </Pressable>
        <Pressable style={styles.drawerButton}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="37" height="42" viewBox="0 0 37 42">
                <Line id="Line_3" dataName="Line 3" x2="32" transform="translate(2.5 2.5)" fill="none" stroke="#fdbb21" strokeLinecap="round" strokeWidth="4"/>
                <Line id="Line_4" dataName="Line 4" x2="32" transform="translate(2.5 21.5)" fill="none" stroke="#fdbb21" strokeLinecap="round" strokeWidth="4"/>
                <Line id="Line_5" dataName="Line 5" x2="32" transform="translate(2.5 39.5)" fill="none" stroke="#fdbb21" strokeLinecap="round" strokeWidth="4"/>
            </Svg>
        </Pressable>
    </View>;
}


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backButton: {
        marginTop: 30,
        width: 70,
    },
    drawerButton: {
        marginTop: 30,
        width: 70,
    }
});


