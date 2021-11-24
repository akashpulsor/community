import {
    ActivityIndicator,
    Text,
    ViewPropTypes,
    SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { fetchImages } from '../util/api';
import CardList from '../components/CardList';

import colors from '../constants/colors';

export default class Feed extends Component {
    static propTypes = {
        style: ViewPropTypes.style,
        commentsForItem: PropTypes.objectOf(
            PropTypes.arrayOf(PropTypes.string)
        ).isRequired,
        onPressComments: PropTypes.func.isRequired
    }

    static defaultProps = {
        style: null
    }

    state = {
        loading: true,
        error: false,
        items: []
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
        const { commentsForItem, onPressComments, style } = this.props;
        const { loading, error, items } = this.state;
        console.log(commentsForItem);

        console.log("item");

        console.log(items);

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
            </SafeAreaView>
        );
    }
};
