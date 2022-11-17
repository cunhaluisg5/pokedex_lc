import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.Text}>Teste Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#87CEFA'
    },
    Text: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default Home;