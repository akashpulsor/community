import { TouchableOpacity, TextInput, View, StyleSheet, Text, Platform,Button} from "react-native";

import colors from "../constants/colors";
import React, { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

const styles = StyleSheet.create({
    
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
