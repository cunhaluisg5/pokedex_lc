import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';

import Api from '../services/Api';
import RenderList from '../components/RenderList';

Home = ({ navigation }) => {
    const [list, setList] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        SearchList();
    }, []);

    const SearchList = async () => {
        setIsloading(true);
        await Api.get('https://pokeapi.co/api/v2/pokedex/')
        .then((response) => {
            const listGeneration = response.data.results;
            setList(listGeneration);
        })        
        setIsloading(false);
}

    if (isLoading) {
        return (
            <View style={styles.Indicator}>
                <ActivityIndicator size="large" color='#0000ff' />
            </View>
        )
    }

    return (
        <View style={styles.Container}>
            <ScrollView style={styles.List}>
                {<RenderList list={list} navigation={navigation}/>}
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
    },
    Indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff00',
    },
});

export default Home;