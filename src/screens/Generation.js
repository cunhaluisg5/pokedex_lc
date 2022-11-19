import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Image } from 'react-native';

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
        await Api.get('https://pokeapi.co/api/v2/pokedex/' + index)
            .then((response) => {
                const list = response.data.pokemon_entries;
                setListGeneration(list);
            });
        setIsLoading(false);
    }

    const SearchIndex = (url) => {
        return url.replace('https://pokeapi.co/api/v2/pokemon-species/', '').replace('/', '');
    }

    const linkImage = (index) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index}.png`;
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
                    const { name, url } = object.pokemon_species;
                    const pokemonIndex = SearchIndex(url);
                    return <View key={index}>
                        <Text>Número: {object.entry_number}</Text>
                        <Text>Nome: {name}</Text>
                        <Text>URL: {url}</Text>
                        <Image
                            style={styles.Image}
                            source={{
                                uri: linkImage(pokemonIndex)
                            }}
                        />
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
    Image: {
        width: 50,
        height: 50,
    },
});

export default Generation;