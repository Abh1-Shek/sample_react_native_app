import { StyleSheet, View, Text, Dimensions, StatusBar } from 'react-native';
import { Colors } from '../constants/Colors';
import ProfilePicture from '../components/ProfilePicture';
import { Svg, G, Line, Ellipse, Circle, Rect, Path } from 'react-native-svg';
import {
    useQuery
  } from "@apollo/client";
import USER_DETAILS from '../assets/queries/UserDetails';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

function Screen1({ navigation, route }) {
    const { viewed, storyAdded, caption } = route.params;
    const { loading, error, data } = useQuery(USER_DETAILS);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>{error.message}</Text>;

    return (
        <View style={styles.outterContainer}>
            <StatusBar translucent backgroundColor="transparent" barStyle='dark-content'/>
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
                <Text style={styles.nameStyle}>{data.getUserDetails.userName}</Text>
                <Text style={styles.bioStyle}>{data.getUserDetails.userBio}</Text>
            </View>
            <View style={styles.lastRow}>
                <View style={styles.rowContainer2}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="375.997" height="65" viewBox="0 0 375.997 65">
                        <G id="Group_1" dataName="Group 1" transform="translate(-19.987 -715)">
                            <G id="Polygon_2" dataName="Polygon 2" transform="translate(174 715)" fill="#fff">
                            <Path d="M 42.03566360473633 63.5 L 22.96433639526367 63.5 L 7.498528480529785 51.6851806640625 L 1.569981336593628 32.5 L 7.498528003692627 13.31482124328613 L 22.96433639526367 1.500009775161743 L 42.03566360473633 1.500000238418579 L 57.50147247314453 13.3148307800293 L 63.43001937866211 32.5 L 57.50147247314453 51.6851806640625 L 42.03566360473633 63.5 Z" stroke="none"/>
                            <Path d="M 23.47173309326172 3 L 8.790103912353516 14.21575927734375 L 3.139968872070312 32.5 L 8.790103912353516 50.78422927856445 L 23.47173690795898 62 L 41.52825164794922 62 L 56.20988464355469 50.78422927856445 L 61.86003112792969 32.5 L 56.20988464355469 14.21576309204102 L 41.52825164794922 3 L 23.47173309326172 3 M 22.45694351196289 0 L 42.54304504394531 0 L 58.79304504394531 12.41388702392578 L 65 32.5 L 58.79304504394531 52.58609771728516 L 42.54304504394531 65 L 22.45694351196289 65 L 6.206943511962891 52.58609771728516 L 0 32.5 L 6.206943511962891 12.41388702392578 L 22.45694351196289 0 Z" stroke="none" fill="#fdbb21"/>
                            </G>
                            <Line id="Line_1" dataName="Line 1" y1="2" x2="156" transform="translate(20 748)" fill="none" stroke="#fdbb21" strokeWidth="2"/>
                            <Path id="Path_1" dataName="Path 1" d="M0,0H160.484" transform="translate(235.5 747.5)" fill="none" stroke="#fdbb21" strokeWidth="2"/>
                        </G>
                    </Svg>
                </View>
                <View style={styles.rowContainer}>
                    <View>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
                            <G id="Rectangle_1" dataName="Rectangle 1" fill="#fdbb21" stroke="#fdbb21" strokeLinejoin="round" strokeWidth="1">
                                <Rect width="60" height="60" stroke="none"/>
                                <Rect x="0.5" y="0.5" width="59" height="59" fill="none"/>
                            </G>
                        </Svg>
                    </View>
                    <View>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="70" height="60" viewBox="0 0 70 60">
                            <G id="Polygon_1" dataName="Polygon 1" fill="#fdbb21">
                                <Path d="M 69.12947845458984 59.5 L 0.8705216646194458 59.5 L 35 0.9923228621482849 L 69.12947845458984 59.5 Z" stroke="none"/>
                                <Path d="M 35 1.984634399414062 L 1.741035461425781 59 L 68.25896453857422 59 L 35 1.984634399414062 M 35 0 L 70 60 L 0 60 L 35 0 Z" stroke="none" fill="#fdbb21"/>
                            </G>
                        </Svg>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Screen1;


const styles = StyleSheet.create({
    outterContainer: {
        flex: 1,
        marginTop: window.height / 4,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoContainer: {
        flex: 0.3,
        // marginTop: 80,
        alignItems: 'center',
        maxHeight: 70,
        maxWidth: window.width - 20,
        // backgroundColor: 'red',
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
        marginTop: -120,
        marginLeft: 120,
    },
    circlesSvg: {
        marginTop: -120,
        marginLeft: 120,
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: -40,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowContainer2: {
        marginTop: 20,
    },
    lastRow: {
        flex: 0.3,
        flexDirection: 'column',
        // justifyContent: 'flex-end',
        // backgroundColor: 'blue',
    }
});