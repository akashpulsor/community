import { TouchableOpacity, TextInput, View, StyleSheet, Text, Platform,Button} from "react-native";

import colors from "../constants/colors";
import React, { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

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
    containerSeparator:{
        backgroundColor: colors.homescreenbackground,
        paddingTop:80,
        paddingBottom:100,
        marginLeft:20
    },
    datePickerConatiner:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:5,
        paddingBottom:5 ,
        backgroundColor: colors.homescreenbackground,
        borderRadius:10,
        borderWidth: 1,
        borderColor: colors.homescreenbackground,
        fontWeight:"bold",
        fontSize:18
    }
});

const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: "Female",
    selected: true,
    color: colors.white,
    size: 16,
    value: 1
}, {
    id: '2',
    label:'Male',
    selected: false,
    color: colors.white,
    size: 16,
    value: 2
}, {
    id: '3',
    label:'Other',
    selected: false,
    color: colors.white,
    size: 16,
    value: 3
}]

export const GenderInput = ({navigation}) => {

    const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }

    return (
        <View>
            <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
            />
      </View>
        
    );

}

//bug screen movement on focus
