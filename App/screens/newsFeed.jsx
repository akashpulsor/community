import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  AsyncStorage,
  TouchableOpacity,
  Text,
  Modal
} from 'react-native';

import  Constants  from 'expo-constants';
import PropTypes from 'prop-types';
import Feed from './Feed';
import Comments from './Comments';
import colors from '../constants/colors';




const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';

export default class NewsFeed extends React.Component {
  state = {
    commentsForItem: {},
    showModal: false,
    selectedItemId: null

  }

  async componentDidMount() {
    try {
      const commentsForItem = await AsyncStorage.getItem(
        ASYNC_STORAGE_COMMENTS_KEY
      );

      this.setState({
        commentsForItem: commentsForItem ? JSON.parse(commentsForItem) : {}
      });
    } catch (e) {
      console.log('Failed to load comments');
    }
  }

  openCommentSceen = id => {
    this.setState({
      showModal: true,
      selectedItemId: id
    });
  }

  closeCommentScreen = () => {
    this.setState({
      showModal: false,
      selectedItemId: null
    });
  }



  onSubmitComment = async text => {
    const { selectedItemId, commentsForItem } = this.state;
    const comments = commentsForItem[selectedItemId] || [];

    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text]
    };

    this.setState({ commentsForItem: updated });

    try {
      await AsyncStorage.setItem(
        ASYNC_STORAGE_COMMENTS_KEY,
        JSON.stringify(updated)
      );
      console.log(selectedItemId);
    } catch (e) {
      console.log(
        'Failed to save comment',
        text,
        'for',
        selectedItemId
      );
    };
  }

  render() {
    const { commentsForItem, showModal, selectedItemId,showPostModal} = this.state;

    console.log("TEST");
    console.log(showPostModal);
    return (
      <View style={styles.container}>
          <View style={styles.feed}>
              <Feed
                style={styles.feedList}
                commentsForItem={commentsForItem}
                onPressComments={this.openCommentSceen}
              />
              <Modal
                visible={showModal}
                animationType="slide"
                onRequestClose={this.closeCommentScreen}
              >
                <Comments
                  style={styles.comments}
                  comments={commentsForItem[selectedItemId] || []}
                  onClose={this.closeCommentScreen}
                  onSubmitComment={this.onSubmitComment}
                />
              </Modal>

            </View>



          
      </View>
      
    );
  }
}

NewsFeed.propTypes = {
  navigation: PropTypes.func.isRequired
}

const platformVersion =
  Platform.OS === 'ios'
    ? parseInt(Platform.Version, 10)
    : Platform.version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.homescreenbackground,

    justifyContent: 'flex-start'
  },
  feed: {
    flex: 1,
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight
        : 0
  },
  feedList: {
    flex: 1,
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight -50
        : 0
  },
  comments: {
    flex: 1,
    marginTop:
      Platform.OS === 'ios' && platformVersion < 11
        ? Constants.statusBarHeight : 0
  }
});