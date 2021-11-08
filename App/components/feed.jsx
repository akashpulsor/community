import { TouchableOpacity, TextInput, View, StyleSheet, Text, SafeAreaView} from "react-native";
import React from "react";
import colors from "../constants/colors";
import { ScrollView } from "react-native-gesture-handler";
         

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

const stories = [

];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

//TODO bug screen movement on focus
export const Feed = ({firstName,LastName}) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    
    );
    
    return (
        <SafeAreaView style={styles.container}>
                  <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
           
        </SafeAreaView>

    );
};