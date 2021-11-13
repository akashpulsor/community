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

import Avatar from './Avatar';
import getAvatarColor from '../util/getAvatarColor';
import getInitials from '../util/getInitials';


export default function FeedBackRow({
    likesForItem,
    sharesForItem,
    savesForItem,
    commentsForItem,
    linkText,
    onPressLinkText

}) {
   // state = {
    //    liked: false
    //}

    //./images/heart.png
    //./images/heart-outline.png

    //toggleLike = () => this.setState(state => ({ liked: !state.liked }));
    return (
        <View style={styles.feedbackContainer}>
            <View style={styles.feedbackBar}>
                <View style={styles.heartIconFlex}>
                        <TouchableOpacity onPress={()=>{ }}>
                            <Image
                                //source={state.liked ? require('../assets/images/heart.png') : require('../assets/images/heart-outline.png')}
                                source= {require('../assets/images/heart-outline.png')}
                                style={styles.heartIcon}
                                resizeMode="cover"
                                />
                        </TouchableOpacity>
                </View>

                <View  style={styles.commentIconFlex}>
                        {!!linkText && (
                                                    <TouchableOpacity onPress={onPressLinkText} >
                                                    <Image
                                                        ///Users/user/react-tutorial/v6/community/App/assets save-filled
                                                        //source={state.liked ? require('../assets/images/heart.png') : require('../assets/images/heart-outline.png')}
                                                        source= {require('../assets/images/comment-outline.png')}
                                                        //source= {require('../assets/images/save-outline.png')}
                                                        style={styles.saveIcon}
                                                        resizeMode="contain"
                                                        />
                                                        
                                                </TouchableOpacity>
                        )}

                </View>
                <View  style={styles.shareIconFlex}>
                            <TouchableOpacity onPress={()=>{ }} >
                                <Image
                                    ///Users/user/react-tutorial/v6/community/App/assets save-filled
                                    //source={state.liked ? require('../assets/images/heart.png') : require('../assets/images/heart-outline.png')}
                                    source= {require('../assets/images/share-outline.png')}
                                    //source= {require('../assets/images/save-outline.png')}
                                    style={styles.saveIcon}
                                    resizeMode="contain"
                                    />
                            </TouchableOpacity>  
                </View>


                <View  style={styles.saveIconFlex}>
                        <TouchableOpacity onPress={()=>{ }} >
                            <Image
                                ///Users/user/react-tutorial/v6/community/App/assets save-filled
                                //source={state.liked ? require('../assets/images/heart.png') : require('../assets/images/heart-outline.png')}
                                source= {require('../assets/images/save-outline.png')}
                                //source= {require('../assets/images/save-outline.png')}
                                style={styles.saveIcon}
                                resizeMode="contain"
                                />
                        </TouchableOpacity>                
                </View>

            </View>
            <View style={styles.feedbackNumberBar}>
                        <View style={styles.heartIconNumberFlex}>
                                <Text>{likesForItem}</Text>
                        </View>

                        <View  style={styles.commentIconNumberFlex}>
                            <Text>{linkText}</Text>
                        </View>
                        <View  style={styles.shareIconNumberFlex}>
                                <Text>{sharesForItem}</Text>
                        </View>


                        <View  style={styles.saveIconNumberFlex}>
                                <Text>{savesForItem}</Text>
                        </View>

            </View>
        </View>

        
    );
};

FeedBackRow.propTypes = {
    likesForItem: PropTypes.number.isRequired,
    sharesForItem: PropTypes.number.isRequired,
    savesForItem:  PropTypes.number.isRequired,
    commentsForItem:  PropTypes.number.isRequired,
    linkText: PropTypes.string.isRequired,
    onPressLinkText: PropTypes.func.isRequired
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
        bottom: 0,
        position: 'absolute',
        flex:1,
        justifyContent:"flex-end",
        borderBottomEndRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        flexDirection:"row",
        marginBottom:"3%"
    },
    feedbackNumberBar:{
        width: '100%',
        height: '4%',
        bottom: 0,
        position: 'absolute',
        flex:1,
        justifyContent:"flex-end",
        borderBottomEndRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        flexDirection:"row"
    },
    feedbackContainer:{
        width: '100%',
        height: '10%',
        bottom: 0,
        flex:1,
        justifyContent:"space-around",
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
        bottom: 0,
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
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:20,
        width:Dimensions.get('window').width/4
    },
    commentIconNumberFlex:{
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:20,
        width:Dimensions.get('window').width/4
    },
    shareIconFlex:{
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:20,
        width:Dimensions.get('window').width/4
    },
    shareIconNumberFlex:{
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:20,
        width:Dimensions.get('window').width/4
    },
    saveIconFlex:{
        bottom: 0, 
        paddingLeft:20,
        flexDirection: 'row',
        justifyContent: "space-between",        
        width:Dimensions.get('window').width/4,
    },
    saveIconNumberFlex:{
        bottom: 0, 
        paddingLeft:20,
        flexDirection: 'row',
        justifyContent: "space-between",        
        width:Dimensions.get('window').width/4,
    }

});