import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { getImageFromId } from '../util/api';
import Card from './Card';

const keyExtractor = ({ id }) => id.toString();

export default class CardList extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                author: PropTypes.string.isRequired
            })
        ).isRequired,
        commentsForItem: PropTypes.objectOf(
            PropTypes.arrayOf(PropTypes.string)
        ).isRequired,
        onPressComments: PropTypes.func.isRequired
    };

    renderItem = ({ item: { id, author } }) => {
        const { commentsForItem, onPressComments } = this.props;
        const comments = commentsForItem[id];

        return (
            <Card
                fullname={author}
                image={{
                    uri: getImageFromId(id)
                }}
                //get it from function
                likesForItem={10}
                sharesForItem={20}
                savesForItem={30}
                linkText={`${comments ? comments.length : 0} Comments`}
                onPressLinkText={() => onPressComments(id)}
            />
        );
    }

    render() {
        const { items, commentsForItem } = this.props;

        return (
            <FlatList
                data={items}
                renderItem={this.renderItem}
                keyExtractor={keyExtractor}
                extraData={commentsForItem}
            />
        );
    }
};