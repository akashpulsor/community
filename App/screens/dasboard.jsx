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
            paddingVertical:15,
            alignItems: 'center',

        }
        

    }
);

export default ({navigation}) => {
    return (
        <SafeAreaView >
            <StatusBar style="light"  barStyle="dark-content" backgroundColor={colors.homescreenbackground}/>

            <View>
                <Text>Dashboard</Text>
            </View>
            
            
        </SafeAreaView>
    );

}