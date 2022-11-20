import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Image } from 'react-native';

import Api from '../services/Api';
import CardPokemon from '../components/CardPokemon';

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
                <ActivityIndicator size='large' color='#000000' />
                <Text style={styles.TextIndicator}>Carregando...</Text>
            </View>
        )
    }

    return (
        <View style={styles.Container}>
            <ScrollView style={styles.List}>
                {listGeneration.map((object, index) => {
                    const { name, url } = object.pokemon_species;
                    const pokemonIndex = SearchIndex(url);
                    const text = `${object.entry_number}: ${name[0].toUpperCase() + name.substring(1)}`;
                    const image = linkImage(pokemonIndex);
                    return <CardPokemon key={index} object={object} index={index} navigation={navigation} text={text} url={url} image={image} />
                })}
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    List: {
        backgroundColor: '#DC143C',
    },
    Indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DC143C',
    },
    TextIndicator: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold'
    }
});

export default Generation;