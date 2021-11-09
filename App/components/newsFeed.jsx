import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions,ImageBackground } from 'react-native';
import colors from '../constants/colors';
import DATA from '../constants/feedData';

const screen = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      
    },
    item: {
      backgroundColor: colors.homescreenbackground,

      height: screen.height - 10,
      width: screen.width,
      borderWidth: 1,
      borderRadius:10,
      borderColor:colors.homescreenbackground,
    },
    title: {
      fontSize: 50,
      color:colors.homescreenbackground,
      position: 'absolute', 
      fontWeight:"bold"
    },

    content: { width: '100%',
        height: '95%',
        flex: 1,
        borderRadius:20,
        resizeMode: "cover"
    }
  });

const Item = ({ title, url }) => (
  <View style={styles.item}>
    <ImageBackground source={{ uri: url }} style={styles.content} imageStyle={{ borderRadius: 10}}>
        <Text style={styles.title}> {title} </Text>
    </ImageBackground>
  </View>
);

const NewsFeed = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title}  url={item.url}/>
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