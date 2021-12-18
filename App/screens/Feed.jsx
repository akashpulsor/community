import {
    ActivityIndicator,
    Text,
    ViewPropTypes,
    SafeAreaView,
    StyleSheet,
    Image,
    View,
    Modal,
    Pressable,
    Dimensions, KeyboardAvoidingView 
} from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { fetchImages } from '../util/api';
import CardList from '../components/CardList';

import colors from '../constants/colors';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';

export default class Feed extends Component {
    static propTypes = {
        style: ViewPropTypes.style,
        commentsForItem: PropTypes.objectOf(
            PropTypes.arrayOf(PropTypes.string)
        ).isRequired,
        onPressComments: PropTypes.func.isRequired,
    }

    static defaultProps = {
        style: null
    }

    state = {
        loading: true,
        error: false,
        items: [],
        showPostOverlay:false
    }

    closeOverLay = ()=>{
        this.setState({showPostOverlay:false});
    }

    openOverLay = ()=>{
        this.setState({showPostOverlay:true});
    }

    saveToData = () =>{
        this.setState({showPostOverlay:false});
    }

    async componentDidMount() {
        try {
            const items = await fetchImages();

            this.setState({
                loading: false,
                items
            });
        } catch (e) {
            console.log("Failed to fetch feed data",e)
            this.setState({
                loading: false,
                error: true
            });
        };
    }

    render() {
        const { commentsForItem, onPressComments, style,showPostModal } = this.props;
        const { loading, error, items } = this.state;
        console.log(this.props);

        console.log("item");


        if (loading) {
            return <ActivityIndicator size="large" />
        }

        if (error) {
            return <Text style=
        {{color:colors.white}}>Error...</Text>
        }

        return (
            
            <SafeAreaView style={style}>
                <CardList
                    items={items}
                    commentsForItem={commentsForItem}
                    onPressComments={onPressComments}
                />
                <Overlay  isVisible={this.state.showPostOverlay} onBackdropPress = {this.closeOverLay}  
                    overlayStyle={styles.root} 
                >
                    <View style={styles.postBoxContainer}>
                        <TextInput style={styles.headingContainer}
                         placeholder="Heading" maxLength={100} 
                         multiline={true}
                         
                         ></TextInput>
                        <TextInput style={styles.articleContainer}  placeholder="Article" maxLength={800}  multiline={true}></TextInput>
                    </View>

                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonFlex}>
                            <Pressable style={styles.loginbutton} 
                                onPress={this.saveToData}
                            >
                            <Text style={styles.textInput}>Publish</Text>
                            </Pressable>
                        </View>

                        <View style={styles.buttonFlex}>
                            <Pressable style={styles.loginbutton}
                                onPress={this.saveToData}
                            >
                            <Text style={styles.textInput}>Draft</Text>
                            </Pressable>            
                        </View>

                        <View style={styles.buttonFlex}>
                            <Pressable style={styles.loginbutton}
                                onPress={this.saveToData}
                            >
                            <Text style={styles.textInput}>Cover Image</Text>
                            </Pressable>
                        </View>
                    </View>


    


                </Overlay>
                <Button  title="Post" containerStyle={{ height: '12%', margin: 5}}
                        buttonStyle={{ width: "100%",  borderRadius: 35,}}  onPress={this.openOverLay}/>
            </SafeAreaView>
        );
    }
};

const styles  = StyleSheet.create(
    {
        root: {
            flex: .8,
            height:'100%',
            width:'100%',
            borderRadius:10,
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: 'yellow',
          },
        postBoxContainer:{
            flex: 3,
            height:'100%',
            width:'100%',
            borderRadius:10,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',

        },
        articleContainer:{
            flex:1,
            height: '120%',
            width: '100%',
            fontSize:20,
            textAlignVertical:"top",

            borderRadius:10
        },
        headingContainer:{
            flex:.2,
            fontSize:25,
            borderBottomWidth:1,
            textAlignVertical:"top",
            height: '10%',
            width: '100%',

        },
        buttonContainer:{
            flex:.5,
            flexDirection:"row",
            height: '100%',
            width: '100%',
        },
        loginbutton:{
            height:'60%',
            width:'80%',
            margin:10,
            backgroundColor: "dodgerblue",
            borderRadius:10,
            fontWeight:"bold",
            fontSize:18,
        },
        textInput:{
            color:colors.white,
            padding:10,
            textAlign:'center',
            fontSize:18
        },
        buttonFlex:{
            width:Dimensions.get('window').width /3
        }
    }
);