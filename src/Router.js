import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import Generation from './screens/Generation';
import Details from './screens/Details';

const mainRoutes = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: 'Início',
            headerShown: false
        }),
    },
    Generation: {
        screen: Generation,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.title,
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#DC143C' },
            headerTitleStyle: { color: '#000000' }
        })
    },
    Details: {
        screen: Details,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.title,
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#DC143C' },
            headerTitleStyle: { color: '#000000' }
        })
    }
}

const mainConfig = {
    initialRouteName: 'Home',
}

const navigator = createStackNavigator(mainRoutes, mainConfig)

export default createAppContainer(navigator);