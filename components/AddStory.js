import { useState } from 'react';
import { Modal, View, StyleSheet, TextInput } from 'react-native';

// setStory is not used right now because I don't know anything about this yet
export default function AddStory({ setVisible, setCaption, setStory }) {
    const [text, setText] = useState("");

    function onChangeText(textInput) {
        setText(textInput);
        setCaption(textInput);
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType='slide'
                transparent = {true}
                visible = {true}
                onRequestClose = {() => {
                    setVisible(false);
                }}
            >
            <TextInput 
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Add caption for the story!"
            />
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});