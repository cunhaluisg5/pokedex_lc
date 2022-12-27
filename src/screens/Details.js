import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, ActivityIndicator } from 'react-native';

import Api from '../services/Api';

Details = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const { text, url } = navigation.state.params;
        setTitle(text);
        SearchDetails(url);
        setIsLoading(false);
    }, []);

    const SearchDetails = async (url) => {
        await Api.get(url)
            .then((response) => {
                setDetails(response.data.flavor_text_entries);
            })
            .catch((error) => {
                console.log('Erro: ', error)
            });
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
        <ScrollView style={styles.Container}>
            {details.length > 0 &&
                details.map((value, index) => {
                    if (value.language.name === 'en') {
                        return <View key={index}>
                            <Text style={styles.Text}>{value.flavor_text}</Text>
                        </View>
                    }
                })
            }
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    Container: {
    },
    Text: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 15,
        backgroundColor: '#FFB6C1',
        padding: 10
    },
    Indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DC143C',
    },
});

export default Details;