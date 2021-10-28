import { StatusBar } from "expo-status-bar";
import React from "react";

import { TouchableOpacity, View,Text, SafeAreaView,StyleSheet,Image, Dimensions } from "react-native";
import colors from "../constants/colors";

import { LoginInput } from "../components/loginInput";

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
            paddingVertical:15,
            //borderWidth:20,
            alignItems: 'center',

        }
        ,
        Logo:{
            width: '100%',
            height: undefined,
            flex:1,
            aspectRatio: 1,
        }

    }
);

export default () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light"  barStyle="dark-content" backgroundColor={colors.homescreenbackground}/>

            <View style={styles.LogoArea}>
                <Image 
                    source={require('../assets/images/icon.png')}/>  
            </View>
            
            <LoginInput email="abc@email.com" password="******"/>

        </SafeAreaView>
    );

}