import React from "react";
import Constants from 'expo-constants';
import { TouchableOpacity, View,Text, SafeAreaView,StyleSheet,Image, Dimensions,TextInput,StatusBar } from "react-native";
import colors from "../constants/colors";
import {
    Avatar,
    Button,
    Card,
    Title,
    Paragraph,
    List,
    Headline,
  } from 'react-native-paper';



import Feed from "../components/feed";
import { PostBar } from "../components/postBar";
import NewsFeed from "./newsFeed";

import Stories from "./stories";

  
 

const screen = Dimensions.get('window');


const styles  = StyleSheet.create(
    {
        container :{
            backgroundColor: 'blue',
            flex:1,
            marginTop: Constants.statusBarHeight || 0
        },

        storiesBar: {
            height:'13%',
            justifyContent:"flex-start",
            flexDirection: "row",
            backgroundColor: colors.homescreenbackground,
        },
        postBar: {
            flex: .1,
            justifyContent:"flex-start",
            flexDirection: "row",
            backgroundColor: colors.homescreenbackground
        },
        feedView: {

            height:'87%',
            justifyContent:"flex-start",
            flexDirection: "row",
            backgroundColor: colors.homescreenbackground
        },

        dashBoardContainerSeparator:{
            backgroundColor: colors.homescreenbackground,
        },

        statusBarContainerSeparator:{
            backgroundColor: colors.homescreenbackground,
            height:10
        }


    }
);
console.disableYellowBox = true;
export default ({navigation}) => {
    const [text, onChangeText] = React.useState("Useless Text");
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style="light"   animated={true}  barStyle="light-content" backgroundColor={colors.homescreenbackground}/>
                <View style={styles.statusBarContainerSeparator}/>
                <View style={styles.storiesBar}>
                    <Stories />
                </View>
                <View style={styles.feedView}>
                    <NewsFeed/>
                </View>
            
            
            
        </SafeAreaView>
    );

}