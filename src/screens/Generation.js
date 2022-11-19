import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';

import Api from '../services/Api';

Generation = ({ navigation }) => {
    const [listGeneration, setListGeneration] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        SearchGeneration();
    }, []);

    const SearchGeneration = async () => {
        setIsLoading(true);
        const index = navigation.state.params.index;
        await Api.get('pokedex/' + index)
            .then((response) => {
                const list = response.data.pokemon_entries;
                setListGeneration(list);
            });
        setIsLoading(false);
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
                {listGeneration.map((object, index) => {
                    return <View key={index}>
                        <Text>Número: {object.entry_number}</Text>
                        <Text>Nome: {object.pokemon_species.name}</Text>
                        <Text>URL: {object.pokemon_species.url}</Text>
                    </View>
                })}
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

export default Generation;