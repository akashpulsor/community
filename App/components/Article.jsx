import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';



export default function Article({
    data
}) {
    return (
        <View style={styles.feedbackContainer}>
            <Text>{data}</Text>
        </View>
    );
};

Article.propTypes = {
    data: PropTypes.string.isRequired || "",
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    text: {
        flex: 1,
        marginHorizontal: 6
    },
    feedbackBar:{
        width: '100%',
        height: '10%',
        flex:3,
        flexDirection:"row",

    },
    feedbackNumberBar:{
        width: '100%',
        flex:1,
        flexDirection:"row"
    },
    feedbackContainer:{
        width: '100%',
        flex:1,
        justifyContent:"space-evenly",
        borderBottomEndRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    heartIcon: {
        width: 40,
        height: 40,
        
    },
    saveIcon: {
        width: 40,
        height: 40,
    },
    heartIconFlex:{
        marginTop:'15%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:20,
        width:Dimensions.get('window').width/4
    },
    heartIconNumberFlex:{
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:20,
        width:Dimensions.get('window').width/4
    },
    commentIconFlex:{
        marginTop:'15%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:20,
        width:Dimensions.get('window').width/4
    },
    commentIconNumberFlex:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:20,
        width:Dimensions.get('window').width/4
    },
    shareIconFlex:{
        marginTop:'15%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:20,
        width:Dimensions.get('window').width/4
    },
    shareIconNumberFlex:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:20,
        width:Dimensions.get('window').width/4
    },
    saveIconFlex:{
        marginTop:'15%',
        paddingLeft:20,
        flexDirection: 'row',
        justifyContent: "space-between",        
        width:Dimensions.get('window').width/4,
    },
    saveIconNumberFlex:{
        paddingLeft:20,
        flexDirection: 'row',
        justifyContent: "space-between",        
        width:Dimensions.get('window').width/4,
    }

});