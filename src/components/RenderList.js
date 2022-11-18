import React from 'react';
import { TouchableOpacity, StyleSheet, Alert } from 'react-native';

import Card from './Card';

export default props = ({ list }) => {
    return (
        list.map((object, index) => {
            const text = `Clicou na ${object.name}`;
            return (
                <TouchableOpacity key={index} style={styles.Container} onPress={() => 
                    Alert.alert(text)
                }>
                    <Card object={object} />
                </TouchableOpacity>
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