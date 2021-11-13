import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions,ImageBackground, ScrollView } from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../constants/colors';
import DATA from '../constants/feedData';
import { Modal } from 'react-native-paper';



const screen = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: colors.homescreenbackground,

      height: screen.height - 20,
      width: screen.width,
      borderWidth: 1,
      borderRadius:10,
      borderColor:colors.homescreenbackground,
      justifyContent:"space-around"

    },
    title: {
      marginTop:0,  
      fontSize: 40,
      color:colors.homescreenbackground,
      fontWeight:"bold",
      flex:1
    },

    content: { width: '100%',
        height: '100%',
        flex: 1,
        borderRadius:20,
        resizeMode: "cover",
    },
    article :{
        width: '100%',
        height: '80%',
        flex: 1,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomEndRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        resizeMode: "cover",
        backgroundColor:"yellow"

    },
    likeBar:{
        backgroundColor:"red",
        height: '10%',
        width: '100%',
        flex:.1,
     

        borderBottomEndRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        
    },
    addBar:{
        backgroundColor:"blue",
        height: '10%',
        width: '100%',
        flex:.2,
    }
  });

const Item = ({ title, url, data }) => (

  <View style={styles.item}>
    
        <View style={styles.article}>
        <ImageBackground source={{ uri: url }} style={styles.content} imageStyle={{ borderRadius: 10}}>
            <Text style={styles.title}> {title} 
                <TouchableOpacity onPress={()=>{
                }} > 
                    <AntIcon name="caretdown" color={colors.homescreenbackground} size={28} />
                 </TouchableOpacity>
            </Text>
            <View style={styles.likeBar}>

            </View>
            </ImageBackground>
        </View>

         <View style={styles.addBar}>
        </View>         
    
                
  </View>
);

const NewsFeed = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title}  url={item.url} data={item.article}/>
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
}



export default NewsFeed;