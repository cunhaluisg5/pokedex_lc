import React from 'react';
import { View, StyleSheet } from 'react-native';

import Card from './Card';

export default props = ({ list }) => {
    return (
        list.map((object, index) => {
            return (
                <View key={index} style={styles.Container}>
                    <Card object={object} />
                </View>
            );
        })
    )
};

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2,
        marginBottom: 2,
        paddingBottom: 30
    }
});