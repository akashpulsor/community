import { StatusBar } from "expo-status-bar";
import React from "react";

import { TouchableOpacity, View,Text, SafeAreaView,StyleSheet,Image, Dimensions } from "react-native";
import colors from "../constants/colors";
import { EmailInput } from "../components/emailInput";


const screen = Dimensions.get('window');


const styles  = StyleSheet.create(
    {




        container :{
            backgroundColor: colors.homescreenbackground,
            flex:1,
            justifyContent:"center"
        },

        LogoArea:{
            paddingVertical:15,
            alignItems: 'center',
            justifyContent:"space-around"
        }
        ,
        Logo:{
            width: '100%',
            height: undefined,
            flex:1,
            aspectRatio: 1,
        },
        loginbutton:{
            marginRight:40,
            marginLeft:40,
            marginTop:10,
            paddingTop:5,
            paddingBottom:5 ,
            backgroundColor: colors.homescreenbackground,
            borderRadius:10,
            borderWidth: 1,
            borderColor: colors.white,
            fontWeight:"bold",
            fontSize:18,
            justifyContent:"space-around"
        },
        textInput:{
            color:colors.white,
            textAlign:'center',
    
            padding : 10,
            padding : 10,
            fontSize:18,
            fontWeight:"bold"
        },

        containerSeparator:{
            backgroundColor: colors.homescreenbackground,
            paddingTop:80,
            paddingBottom:100,
            marginLeft:20
        }

    }
);

export default ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light"  barStyle="dark-content" backgroundColor={colors.homescreenbackground}/>
            <View style={styles.containerSeparator}/>
            <View>
                <EmailInput/>
                <View style={styles.containerSeparator}/>
                <View>
                    <TouchableOpacity style={styles.loginbutton}
                        onPress={() =>navigation.push('Password')}
                    >
                        <Text style={styles.textInput}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>            
        </SafeAreaView>
    );

}