import Story from "../components/Story";
import { StyleSheet } from 'react-native';


// [caption, description, etc], Screen1 -> App -> Screen2
function Screen2({navigation}) {
    return <Story 
        navigation={navigation}
        imageUrl={'../assets/isro_news.jpg'} 
        description={'ISRO to launch surveillance satellite'} 
        caption={'SUCH AN AMAZING NEWS! YOU MUST READ THIS!!'}/>
}

export default Screen2;


const styles = StyleSheet.create({});