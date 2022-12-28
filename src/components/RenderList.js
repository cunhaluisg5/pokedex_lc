import React from 'react';
import { View, StyleSheet } from 'react-native';

import CardGeneration from './CardGeneration';

export default props = ({ list, navigation }) => {
    return (
        list.map((object, index) => {
            if (index != 0 && index != 5 && index != 6 && index != 8 && index != 9 && index != 13 && index != 19) {
                const text = object.name.replace('original-', '');
                const text2 = `${text[0].toUpperCase() + text.substring(1)}`;
                return (
                    <View key={index} style={styles.Container}>
                        <CardGeneration object={object} index={index} navigation={navigation} text={text2}/>
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
        marginTop: 10,
        marginBottom: 10
    }
});