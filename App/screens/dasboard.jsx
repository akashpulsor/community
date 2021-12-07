import React from "react";
import Constants from 'expo-constants';
import { PlusCircleOutlined} from "@ant-design/icons";
import { TouchableOpacity, View,Text, SafeAreaView,StyleSheet,Image, Dimensions,TextInput,StatusBar } from "react-native";
import colors from "../constants/colors";

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

            height:'90%',
            justifyContent:"flex-start",
            flexDirection: "row",
            backgroundColor: colors.homescreenbackground,
            alignContent:"space-around"
        },

        dashBoardContainerSeparator:{
            backgroundColor: colors.homescreenbackground,
        },

        statusBarContainerSeparator:{
            backgroundColor: colors.homescreenbackground,
            height:10
        },
        postStyle:{
            justifyContent:"center"
            
        }

    }
);

export default ({navigation}) => {

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