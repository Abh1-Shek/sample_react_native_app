import Dialog from 'react-native-dialog';
import { StyleSheet, View } from 'react-native'

// visible will show if dialog box will open
function DialogBox({ visible, title, description, addImage, removeImage, set_visible}) {
    function hideMe() {
        set_visible(false);
    }
    return (
    <View>
        <Dialog.Container visible={visible}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>
            {description}
        </Dialog.Description>
        <Dialog.Button label="Add Image" onPress={addImage}/>
        <Dialog.Button label="Remove Image" onPress = {removeImage}/>
        <Dialog.Button label="Cancel" onPress = {hideMe} />
        </Dialog.Container>
    </View>
    );
}

export default DialogBox;



