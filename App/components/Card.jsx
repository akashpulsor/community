import React, { Component} from 'react';
import { Image, StyleSheet, View, StatusBar,Dimensions,ImageBackground,TouchableOpacity,Text, TouchableHighlight,useState } from 'react-native';

import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import colors from "../constants/colors";
import AuthorRow from './AuthorRow';
import FeedBackRow from './FeedbackRow';
import {WebView} from 'react-native-webview';
import Readmore from './readMore';
import Article from './Article';
import Popup from './popup';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

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
        flex: .8,
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
        backgroundColor:colors.homescreenbackground,
        width: '100%',
        flex:.1,
    },
    image: {
        aspectRatio: 1,
        backgroundColor: 'rgba(0, 0, 0, .02)'
    },
    readMore: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 2,
      },
      readText: {
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 12,
        color: 'white',
        marginTop: 8,
      },
      HeadingText: {
        fontSize: 45,
        fontWeight: '900',
        marginLeft: 12,
        color: 'white',
        marginTop: 8,
        fontFamily:"serif"
      }
      ,
      readMoreWrapper: {
        width: '100%',
        marginTop: 300,
        justifyContent: "center",
        alignItems: 'center',
      },
        saveIcon: {
            width: 40,
            height: 40,
        },
        feedbackContainer:{
            width: '100%',
            height: '10%',
            bottom: 0,
            flex:1,
            justifyContent: 'center', 
            alignItems: 'center',
            borderBottomEndRadius:20,
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
        },
        articleContainer:{
            width: '100%',
            height: '10%',
            bottom: 0,
            flex:1,
            justifyContent: 'center', 
            alignItems: 'center',
            borderBottomEndRadius:20,
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
        },
        readMoreContainer:{
            width: '100%',
            flex:3,
            justifyContent: 'center', 
            alignItems: 'center'
        },
        modal: {
          width: '100%',
          height: '90%',
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        bar: {
          width: 50,
          height: 8,
          backgroundColor: 'gray',
          alignSelf: 'center',
          borderRadius: 4,
          marginTop: 8,
        },
        overlay: {
            backgroundColor: colors.homescreenbackground,
            flex: 1,
            justifyContent: 'flex-end',
            marginTop:"80%",
            bottom:0
        },
  });

export default class Card extends Component {
    
    static propTypes = {
        fullname: PropTypes.string.isRequired,
        image: Image.propTypes.source.isRequired,
        linkText: PropTypes.string.isRequired,
        onPressLinkText: PropTypes.func,
        likesForItem: PropTypes.number.isRequired,
        sharesForItem: PropTypes.number.isRequired,
        savesForItem:  PropTypes.number.isRequired,
        data:PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }

    
    static defaultProps = {
        linkText: '',
        onPressLinkText: () => { }
    }

    state = {
        loading: true,
        readMore:false,
        blurRadius:1,
        visible:false,
        isVisible:false,
        feedbackContainerVisibility:true
    }

    handleLoad = () => {
        this.setState({ loading: false });
    }

    _openPopUp() {
        this.setState({
          isVisible: true
        });
    }
    
    _closePopUp() {
        this.setState({
            isVisible: false
        });
    }

    feedbackView (show){
        const { fullname, image, linkText, onPressLinkText,likesForItem,sharesForItem,savesForItem,data} = this.props;
       if(show){
            return (
                <View style={styles.feedbackContainer}>
                <View style={styles.readMoreContainer}>
                    <TouchableOpacity onPress={()=>{
                        this.state.blurRadius=this.state.blurRadius+10;
                        this._openPopUp();
                        this.state.feedbackContainerVisibility=false;
                        }} style={styles.readMoreWrapper} activeOpacity={1}>
    
                        <View style={styles.readMore}>
                            <Icon name="chevron-up" size={20} color="white" />
                        </View>
                        <Text style={styles.readText}>Read More</Text>    
                    </TouchableOpacity>
                </View>
                <FeedBackRow likesForItem={likesForItem} sharesForItem={sharesForItem} 
                        savesForItem={savesForItem} 
                        linkText={linkText}
                        onPressLinkText={onPressLinkText}
                />
            </View>
            );
       } 
    }

    render() {
        const { fullname, image, linkText, onPressLinkText,likesForItem,sharesForItem,savesForItem,data} = this.props;
        
        return (
            <View style={styles.item}>
                <View style={styles.article}>
                    <TouchableOpacity style ={styles.content} onPress={()=>{
                        this._closePopUp();
                        this.state.blurRadius=1;
                        console.log("Akash")
                        this.state.feedbackContainerVisibility=true;
                    }} activeOpacity={1}>
                        <ImageBackground source={image} style={styles.content} imageStyle={{ borderRadius: 10}} blurRadius={this.state.blurRadius}>
                            <AuthorRow fullname={fullname}/>
                            <Popup isVisible={this.state.isVisible} duration={800} entry={'bottom'} exit={'top'}>
                                <View style={styles.articleContainer}>
                                    <Text style={[styles.HeadingText,{fontSize:20,marginTop:0,fontFamily: 'serif'}]}>Farm laws: Member of SC-appointed panel asks top court to make their report public</Text>
                                    <ScrollView > 
                                        <Text style={[styles.HeadingText,{fontSize:20,marginTop:0,fontFamily: 'serif'}]}>{data}</Text>
                                    </ScrollView>
                                </View>
                            </Popup>
                            {this.feedbackView(this.state.feedbackContainerVisibility)}
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                     
                <View style={styles.addBar}>
                    
                </View>
            </View>
        );
    }
};

