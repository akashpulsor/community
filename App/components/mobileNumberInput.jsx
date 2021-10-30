import { TouchableOpacity, TextInput, View, StyleSheet, Text, SafeAreaView} from "react-native";
import React from "react";
import colors from "../constants/colors";
             
const styles = StyleSheet.create({
    container:{
        color: colors.white,
        flexDirection: "row",
        backgroundColor: colors.homescreenbackground,
        position:"relative",
        flexDirection:"row"
    },
    firstNameTextBox:{
        marginLeft:40,
        marginRight:10,
        paddingBottom:10,
        backgroundColor: colors.white,
        borderRadius:10,
        borderWidth: 1,
        borderColor: colors.white,
        flex:1
        
    }
    ,
    LastNameTextBox:{
        marginRight:40,
        marginLeft:10,
        paddingBottom:10,
        backgroundColor: colors.white,
        borderRadius:10,
        borderWidth: 1,
        borderColor: colors.white,
        flex:1,
        alignItems: 'stretch',
        
    },
    LeftLabel:{
        marginLeft:40,
        marginRight:90,
        backgroundColor: colors.homescreenbackground,
        color: colors.white,
    },
    RightLabel:{
        
        backgroundColor: colors.homescreenbackground,
        color: colors.white,
        flex:1 
    }
});


//TODO bug screen movement on focus
export const MobileNumberInput = ({firstName,LastName}) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.LeftLabel}>Mobile Number</Text>
            </View>
            <View style={styles.container}>
                <TextInput style={styles.firstNameTextBox} placeholderTextColor = {colors.white} placeholder="Mobile Number" />
            </View>
        </SafeAreaView>

    );
};