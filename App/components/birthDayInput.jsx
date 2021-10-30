import { TouchableOpacity, TextInput, View, StyleSheet, Text, Platform,Button,SafeAreaView} from "react-native";
import React from "react";
import {useState} from "react";
import colors from "../constants/colors";
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = StyleSheet.create({
    container:{
        paddingBottom:60,
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


//bug screen movement on focus
export const BirthDayInput = ({navigation}) => {
    const [date, setDate] = useState(new Date(1598051730000));

  

  
  
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <DateTimePicker
                        style={styles.datePickerConatiner}
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        is24Hour={true}
                        display="spinner"
                        onChange={(event, date) => {
                        setValues({...values, ['date']: date});
                        }}
                    />
            </View>
    </SafeAreaView>

    );
};