import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';

const mainRoutes = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: 'Início',
            headerShown: false
        }),
    },
}

const mainConfig = {
    initialRouteName: 'Home',
}

const navigator = createStackNavigator(mainRoutes, mainConfig)

export default createAppContainer(navigator);