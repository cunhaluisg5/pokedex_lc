import React from 'react';
import { View, StyleSheet } from 'react-native';

import Card from './Card';

export default props = ({ list }) => {
    return (
        list.map((object, index) => {
            if (index != 0 && index != 5 && index != 6 && index != 8 && index != 9 && index != 13 && index != 19) {
                return (
                    <View key={index} style={styles.Container}>
                        <Card object={object} index={index} />
                    </View>
                );
            }
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