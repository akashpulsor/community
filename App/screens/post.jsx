import { StatusBar } from "expo-status-bar";
import React from "react";
import { Constants } from 'expo';
import { TouchableOpacity, View,Text, SafeAreaView,StyleSheet,Image, Dimensions,TextInput } from "react-native";
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

  const styles  = StyleSheet.create(
    {
        container :{
            backgroundColor: colors.homescreenbackground,
            flex:1,
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
        postButton:{
            backgroundColor: colors.homescreenbackground,
            justifyContent:"flex-start",
            backgroundColor: "white",
            borderWidth: 1,
            borderRadius:10,
            backgroundColor: colors.white,
            marginRight:40,
            marginLeft:40,
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
            paddingBottom:110,
            marginLeft:20
        },
        top: {
            flex: 0.09,
            justifyContent:"flex-start",
            flexDirection: "row",
            backgroundColor: colors.homescreenbackground,

          },
          postTextBox: {
              flex: 1,
              justifyContent:"flex-start",
              backgroundColor: "white",
              borderWidth: 1,
              borderRadius:10,
              backgroundColor: colors.white
        },
        profileImage:{
            width: 60, 
            height: 60, 
            borderRadius: 60/ 2
        },
        storiesBar: {
            flex: 0.1,
            justifyContent:"flex-start",
            flexDirection: "row",
            backgroundColor: colors.homescreenbackground
        },
        textInput:{
            color:colors.white,
            textAlign:'center',
    
            padding : 10,
            padding : 10,
            fontSize:18,
            fontWeight:"bold"
        }

    }
);

export default ({navigation}) => {
    const [text, onChangeText] = React.useState("Useless Text");
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style="light"   animated={true} hidden={true} barStyle="dark-content" backgroundColor={colors.homescreenbackground}/>
            <View style = {styles.storiesBar}>
                <Text> POST SCREEN</Text>
            </View>
            <View>

            </View>
            
            
        </SafeAreaView>
    );

}