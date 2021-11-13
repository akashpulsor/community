import React, { Component } from 'react';
import { Image, StyleSheet, View, ActivityIndicator,StatusBar,Dimensions,ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import colors from "../constants/colors";
import AuthorRow from './AuthorRow';

import FeedBack from './FeedbackRow';
import FeedBackRow from './FeedbackRow';

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
        height: '100%',
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
        backgroundColor:colors.homescreenbackground,
        height: '5%',
        width: '100%',

        flex:.1,
    },
    image: {
        aspectRatio: 1,
        backgroundColor: 'rgba(0, 0, 0, .02)'
    }
  });

export default class Card extends Component {
    static propTypes = {
        fullname: PropTypes.string.isRequired,
        image: Image.propTypes.source.isRequired,
        linkText: PropTypes.string.isRequired,
        onPressLinkText: PropTypes.func,
        likesForItem: PropTypes.number.isRequired,
        sharesForItem: PropTypes.number.isRequired,
        savesForItem:  PropTypes.number.isRequired
    }

    static defaultProps = {
        linkText: '',
        onPressLinkText: () => { }
    }

    state = {
        loading: true
    }

    handleLoad = () => {
        this.setState({ loading: false });
    }

    render() {
        const { fullname, image, linkText, onPressLinkText,likesForItem,sharesForItem,savesForItem,commentsForItem} = this.props;
        const { loading } = this.state;

        return (
            <View style={styles.item}>
                <View style={styles.article}>
                <ImageBackground source={image} style={styles.content} imageStyle={{ borderRadius: 10}}>

                    <AuthorRow
                        fullname={fullname}
                        linkText={linkText}
                        onPressLinkText={onPressLinkText}
                    />
                    <FeedBackRow likesForItem={likesForItem} sharesForItem={sharesForItem} 
                    savesForItem={savesForItem} commentsForItem={commentsForItem}
                    linkText={linkText}
                    onPressLinkText={onPressLinkText}
                    />
                    </ImageBackground>
                    </View>
                    <View style={styles.addBar}>
                        
                    </View>
            </View>
        );
    }
};

