import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import RenderList from '../components/RenderList';

Home = () => {
    const [list, setList] = useState([
        {
            name: '1° Geração',
            total: '150'
        },
        {
            name: '2° Geração',
            total: '150'
        },
        {
            name: '3° Geração',
            total: '150'
        },
        {
            name: '4° Geração',
            total: '150'
        },
        {
            name: '5° Geração',
            total: '150'
        },
        {
            name: '6° Geração',
            total: '150'
        },
        {
            name: '7° Geração',
            total: '150'
        },
        {
            name: '8° Geração',
            total: '150'
        },
        {
            name: '9° Geração',
            total: '150'
        },
        {
            name: '10° Geração',
            total: '150'
        }
    ]);

    return (
        <View style={styles.Container}>
            <ScrollView style={styles.List}>
                {<RenderList list={list} />}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#0000ff',
    },
    List: {
        backgroundColor: '#87CEFA',
        marginTop: 40,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        padding: 20
    }
});

export default Home;