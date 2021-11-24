import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import getAvatarColor from '../util/getAvatarColor';
import getInitials from '../util/getInitials';

export default function AuthorRow({
    fullname
}) {
    return (
        <View style={styles.container}>
            <Avatar
                initials={getInitials(fullname)}
                size={35}
                backgroundColor={getAvatarColor(fullname)}
            />
            <Text style={styles.text} numberOfLines={1}>{fullname}</Text>
    
        </View>
    );
};

AuthorRow.propTypes = {
    fullname: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    text: {
        flex: 1,
        marginHorizontal: 6
    }
});