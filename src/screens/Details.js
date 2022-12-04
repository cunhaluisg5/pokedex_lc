import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import Api from '../services/Api';

Details = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState([]);
    const [linkEvolutions, setLinkEvolutions] = useState(null);
    const [evolutions, setEvolutions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const { text, index, url } = navigation.state.params;
        setTitle(text);
        SearchDetails(url);
        SearchEvolutions();
        setIsLoading(false);
    }, []);

    const SearchDetails = async (url) => {
        await Api.get(url)
            .then((response) => {
                setLinkEvolutions(response.data.evolution_chain);
                setDetails(response.data.flavor_text_entries);
            })
            .catch((error) => {
                console.log('Erro: ', error)
            });
    }

    const SearchEvolutions = async () => {
        if (linkEvolutions !== null) {
            await Api.get(linkEvolutions)
                .then((response) => {
                    setEvolutions(response.data.chain);
                    console.log('kkkk: ', response.data.chain)
                })
                .catch((error) => {
                    console.log('Erro: ', error)
                });
        }
    }

    if (isLoading) {
        return (
            <View style={styles.Indicator}>
                <ActivityIndicator size='large' color='#000000' />
                <Text style={styles.TextIndicator}>Carregando...</Text>
            </View>
        )
    }

    console.log('Lista de evoluções: ', evolutions.length)

    return (
        <View>
            {details.length > 0 &&
                <View>
                    <Text>{details[0].flavor_text}</Text>
                    <Text>{details[3].flavor_text}</Text>
                </View>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {

    },
    Indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DC143C',
    },
});

export default Details;