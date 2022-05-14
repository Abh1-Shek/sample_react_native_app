import Story from "../components/Story";
import { StyleSheet } from 'react-native';


// [caption, description, etc], Screen1 -> App -> Screen2
function Screen2({navigation}) {
    return <Story 
        navigation={navigation}
        // in future imageUrl will receive data differently
        imageUrl={'https://www.isro.gov.in/sites/default/files/galleries/%E0%A4%AA%E0%A5%80.%E0%A4%8F%E0%A4%B8.%E0%A4%8F%E0%A4%B2.%E0%A4%B5%E0%A5%80.-%E0%A4%B8%E0%A5%8042%20%E0%A4%AE%E0%A4%BF%E0%A4%B6%E0%A4%A8%20%E0%A4%97%E0%A5%88%E0%A4%B2%E0%A5%87%E0%A4%B0%E0%A5%80/bjs2139.jpg'} 
        description={'ISRO to launch surveillance satellite'} 
        caption={'SUCH AN AMAZING NEWS! YOU MUST READ THIS!!'}/>
}

export default Screen2;


const styles = StyleSheet.create({});