import { StatusBar } from "expo-status-bar";
import React from "react";
import { Constants } from 'expo';
import { TouchableOpacity, View,Text, SafeAreaView,StyleSheet,Image, Dimensions,TextInput } from "react-native";
import colors from "../constants/colors";

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
          postButton: {
              justifyContent:"flex-start",
              borderWidth: 1,
              borderBottomLeftRadius:10,
              borderTopLeftRadius:10,
              borderLeftColor: colors.white ,
              borderTopColor: colors.white ,
              borderBottomColor: colors.white ,
              borderRightColor: colors.purple ,
              backgroundColor: colors.homescreenbackground,
              height:60,
              width:300
        },
        upiButton: {
            justifyContent:"flex-start",
            borderWidth: 4,
            borderBottomRightRadius:10,
            borderTopRightRadius:10,
            backgroundColor: colors.purple,
            borderColor:colors.purple,
            height:60,
            width:50
      }
        ,
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
        postText:{
            color:colors.white,
            paddingTop:20,
            paddingLeft:10,
            textAlign:'left',  
            fontSize:18,
        },

        upiText:{
            color:colors.white,
            paddingTop:10,
            textAlign:'center',  
            fontSize:18,
        }

    }
);

export const PostBar = ({navigation}) =>  {

    return (
        <View style = {styles.top}>
        <Image 
            source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'}} 
                style={styles.profileImage} 
        />
        <TouchableOpacity style={styles.postButton}
        onPress={() =>navigation.push('Post')}
        >
            <Text style={styles.postText}>Write some thing here......</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.upiButton}
        onPress={() =>navigation.push('Post')}
        >
            <Text style={styles.upiText}>UPI</Text>
        </TouchableOpacity>
    </View>
    );


}