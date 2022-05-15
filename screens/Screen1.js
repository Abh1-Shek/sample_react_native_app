import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Colors } from '../constants/Colors';
import ProfilePicture from '../components/ProfilePicture';
import { Svg, G, Line, Ellipse, Circle } from 'react-native-svg';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

function Screen1({ navigation, route }) {
    const { viewed, storyAdded, caption } = route.params;


    return (
        <View style={styles.outterContainer}>
            <ProfilePicture storyAdded={storyAdded} viewed={viewed} navigation = {navigation} caption={caption}/>
            { !storyAdded && 
                <View style={styles.plusButton}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27">
                        <G id="Group_2" dataName="Group 2" transform="translate(-175 -366)">
                        <Ellipse id="Ellipse_1" dataName="Ellipse 1" cx="12.5" cy="13.5" rx="12.5" ry="13.5" transform="translate(175 366)" fill="#fdbb21"/>
                        <Line id="Line_6" dataName="Line 6" x2="15" transform="translate(179.5 379.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                        <Line id="Line_7" dataName="Line 7" y1="14" transform="translate(187.5 372.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                        </G>
                    </Svg>    
                </View>          
            }
            {
                storyAdded && !viewed &&
                <View style={styles.circlesSvg}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="63" height="19" viewBox="0 0 63 19">
                        <G id="Group_3" data-name="Group 3" transform="translate(-101.5 -440.5)">
                            <Circle id="Ellipse_2" dataName="Ellipse 2" cx="8" cy="8" r="8" transform="translate(103 442)" fill="#fdbb21" stroke="#fff" strokeWidth="3"/>
                            <Circle id="Ellipse_3" dataName="Ellipse 3" cx="8" cy="8" r="8" transform="translate(125 442)" fill="#fdbb21" stroke="#fff" strokeWidth="3"/>
                            <Circle id="Ellipse_4" dataName="Ellipse 4" cx="8" cy="8" r="8" transform="translate(147 442)" fill="#fdbb21" stroke="#fff" strokeWidth="3"/>
                        </G>
                    </Svg>

                </View>
            }
            <View style={styles.infoContainer}>
                <Text style={styles.nameStyle}>Shinchan</Text>
                <Text style={styles.bioStyle}>www.shinchan.com</Text>
            </View>
        </View>
    );
}

export default Screen1;


const styles = StyleSheet.create({
    outterContainer: {
        flex: 1,
        marginTop: window.height / 4,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        marginTop: 80,
        alignItems: 'center',
    },
    nameStyle: {
        fontSize: 24,
        color: Colors.grey,
    },
    bioStyle: {
        fontSize: 20,
        color: Colors.grey,
    },
    plusButton: {
        marginTop: -50,
        marginLeft: 160,
    },
    circlesSvg: {
        marginTop: -50,
        marginLeft: 140,
    }
});