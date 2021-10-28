import { TouchableOpacity, TextInput, View, StyleSheet, Text} from "react-native";
import React from "react";
import colors from "../constants/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
const styles = StyleSheet.create({
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
        fontSize:18
    },
    signInbutton:{

    },
    textInput:{
        color:colors.white,
        textAlign:'center',

        padding : 10,
        padding : 10,
        fontSize:18,
        fontWeight:"bold"
    },
    container:{
        color: colors.white
    },
    textBoxSeparator:{
        backgroundColor: colors.homescreenbackground,
        paddingTop:10,
        paddingBottom:10,
        marginLeft:20,
        justifyContent:"center"
    },
    containerSeparator:{
        backgroundColor: colors.homescreenbackground,
        paddingTop:20,
        paddingBottom:10,
        marginLeft:20
    },
    textBox:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor: colors.white,
        borderRadius:10,
        borderWidth: 1,
        borderColor: colors.white
    }

});
//bug screen movement on focus
export const LoginInput = ({email,password}) => {
    return (
        <View >
            <View>
                <TextInput style={styles.textBox} placeholder="Email/PhoneNumber" />
                <View style={styles.textBoxSeparator}/>
                <TextInput secureTextEntry={true} style={styles.textBox} placeholder="Password" />
            </View>
            <View style={styles.containerSeparator}/>
            <View>
                <TouchableOpacity style={styles.loginbutton}>
                    <Text style={styles.textInput}>Login</Text>
                </TouchableOpacity>
                <View style={styles.textBoxSeparator}/>
                <TouchableOpacity style={styles.loginbutton}>
                    <Text style={styles.textInput}>Create Account</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};