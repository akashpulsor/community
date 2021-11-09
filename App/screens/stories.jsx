import React, { useRef, useState } from 'react';
import { FlatList, Image, Modal, StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
// import Modal from 'react-native-modalbox';
import { CubeNavigationHorizontal } from 'react-native-3dcube-navigation';

import  AllStories from '../constants/allStories';
import StoryContainer from '../components/storyContainer';
import colors from '../constants/colors';

const window = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: colors.homescreenbackground,
    },
    circle: {
      width: 80,
      margin: 4,
      height: 80,
      borderRadius: 80/2,
      borderWidth: 2,
      borderColor: colors.white,
    },
    modal: {
      flex: 1,
    },
  });

const Stories = (props) => {
  const [isModelOpen, setModel] = useState(false);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [currentScrollValue, setCurrentScrollValue] = useState(0);
  const modalScroll = useRef(null);

  const onStorySelect = (index) => {
    setCurrentUserIndex(index);
    setModel(true);
  };

  const onStoryClose = () => {
    setModel(false);
  };

  const onStoryNext = (isScroll) => {
    const newIndex = currentUserIndex + 1;
    if (AllStories.length - 1 > currentUserIndex) {
      setCurrentUserIndex(newIndex);
      if (!isScroll) {
        modalScroll.current.scrollTo(newIndex, true);
      }
    } else {
      setModel(false);
    }
  };

  const onStoryPrevious = (isScroll) => {
    const newIndex = currentUserIndex - 1;
    if (currentUserIndex > 0) {
      setCurrentUserIndex(newIndex);
      if (!isScroll) {
        modalScroll.current.scrollTo(newIndex, true);
      }
    }
  };

  const onScrollChange = (scrollValue) => {
    if (currentScrollValue > scrollValue) {
      onStoryNext(true);
      console.log('next');
      setCurrentScrollValue(scrollValue);
    }
    if (currentScrollValue < scrollValue) {
      onStoryPrevious();
      console.log('previous');
      setCurrentScrollValue(scrollValue);
    }
  };


  return (
    <View>
      <FlatList
        data={AllStories}
        horizontal
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onStorySelect(index)}>
            <Image
              style={styles.circle}
              source={{ uri: item.profile }}
            />
          </TouchableOpacity>
        )}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={isModelOpen}
        style={styles.modal}
        onShow={() => {
          if (currentUserIndex > 0) {
            modalScroll.current.scrollTo(currentUserIndex, false);
          }
        }}
        onRequestClose={onStoryClose}
      >
        <CubeNavigationHorizontal callBackAfterSwipe={g => onScrollChange(g)} ref={modalScroll} style={styles.container}>
          {AllStories.map((item, index) => (
            <StoryContainer
              onClose={onStoryClose}
              onStoryNext={onStoryNext}
              onStoryPrevious={onStoryPrevious}
              user={item}
              isNewStory={index !== currentUserIndex}
            />
          ))}
        </CubeNavigationHorizontal>
      </Modal>
    </View>
  );
};




export default Stories;