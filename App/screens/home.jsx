import { StatusBar } from "expo-status-bar";
import React from "react";

import { TouchableOpacity, View,Text, SafeAreaView,StyleSheet,Image, Dimensions } from "react-native";
import colors from "../constants/colors";

const screen = Dimensions.get('window');


const styles  = StyleSheet.create(
    {
        row: {
            paddingHorizontal:20,
            paddingVertical:15
        },

        text: {

            color: colors.text
        },

        separator:{
            backgroundColor: '#E2E2E2',
            height: StyleSheet.hairlineWidth,
            marginLeft:20
        },

        view :{
            paddingVertical:15
        },
        container :{
            backgroundColor: colors.homescreenbackground,
            flex:1,
            justifyContent:"center"
        },

        LogoArea:{
            height:screen.height *.25,
            width:screen.width *.25,
            paddingVertical:screen.height *.25,
        }
        ,
        Logo:{
            justifyContent:"center"
        }

    }
);

export default () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light"  barStyle="dark-content" backgroundColor={colors.homescreenbackground}/>

            <View style={styles.LogoArea}>
                <Image style={styles.Logo}
                    source={require('../assets/images/icon.png')}/>  
            </View>
            

        </SafeAreaView>
    );

}