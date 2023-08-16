import React from 'react';
import {
    NavigationContainer,
    DarkTheme,
    type ParamListBase,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { useColorScheme } from 'react-native';

import LoaderScreen from '../screens/LoaderScreen';
import MainScreen from '../screens/MainScreen';
import navigationRef from './navigationRef';

export interface RootStackParamList extends ParamListBase {
    Loader: undefined;
    Main: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

function Navigator(): JSX.Element {
    // const isDarkMode = useColorScheme() === 'dark';
    const myTheme = {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
        },
    };
    return (
        <NavigationContainer ref={navigationRef} theme={myTheme}>
            <Stack.Navigator initialRouteName="Loader">
                <Stack.Screen
                    name="Loader"
                    component={LoaderScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
