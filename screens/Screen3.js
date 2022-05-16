// this screen is for adding story
import { StyleSheet, View, StatusBar, Modal, TextInput } from 'react-native';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import { useState } from 'react';
import AwesomeButton from 'react-native-really-awesome-button';

function Screen3({ navigation }) {
    const [text, setText] = useState("");
    const [visibleAddCaption, setVisibleAddCaption] = useState(false);
    const [caption, setCaption] = useState("");

    function makeVisibleAddCaption() {
        setVisibleAddCaption(true);
    }
    function onChangeText(textInput) {
        setText(textInput);
    }

    // take params like story and everything with you
    function goToScreen1WithStory() {
        navigation.navigate("Home", {
            viewed: false,
            storyAdded: true,
            caption: caption,
        });
    }
    function goToScreen1WithoutStory() {
        navigation.navigate("Home", {
            viewed: false,
            storyAdded: false,
            caption: "",
        });
    }

    return (
    <View style={styles.rootContainer}>
        <StatusBar translucent backgroundColor="transparent" barStyle='dark-content'/>
        <View style={styles.buttonStyle}>
            <AwesomeButtonRick>add a story</AwesomeButtonRick>
        </View>
        <View style={styles.buttonStyle}>
            <AwesomeButtonRick onPress={makeVisibleAddCaption}>add a caption</AwesomeButtonRick>
        </View>
        <View style={[styles.buttonStyle, styles.addMarginTop]}>
            <AwesomeButton theme='primary' onPress={goToScreen1WithStory}>add story and go home</AwesomeButton>
        </View>
        <View style={[styles.buttonStyle]}>
            <AwesomeButton theme="primary" onPress={goToScreen1WithoutStory}>back to home</AwesomeButton>
        </View>
        <Modal
            animationType='slide'
            visible = {visibleAddCaption}
            onRequestClose = {() => {
                setVisibleAddCaption(false);
            }}
        >
            <View style={styles.centered}>
                <TextInput 
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Add caption for the story!"
                />
                <AwesomeButtonRick
                    onPress = {() => {
                        setCaption(text);
                        setVisibleAddCaption(!visibleAddCaption)
                    }}>Add caption</AwesomeButtonRick>
            </View>
        </Modal>
    </View>
    );
}


export default Screen3;


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonStyle: {
        margin: 10,
        alignSelf: 'center',
    },
    input: {
        padding: 20,
        borderWidth: 1,
        margin: 10,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addMarginTop: {
        marginTop: 80,
    }
});