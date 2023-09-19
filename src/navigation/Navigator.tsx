import React, { useState, useEffect } from 'react';
import {
    NavigationContainer,
    DarkTheme,
    type ParamListBase,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { useColorScheme } from 'react-native';

import firebaseAuthInstance from '@react-native-firebase/auth';
import LoaderScreen from '../screens/LoaderScreen';
import MainScreen from '../screens/MainScreen';
import navigationRef from './navigationRef';
import Loader from '../components/Loader';

export interface RootStackParamList extends ParamListBase {
    Loader: undefined;
    Main: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

function Navigator(): JSX.Element {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [firebaseUserObj, setFirebaseUserObj] = useState();

    // Handle user state changes
    function onAuthStateChanged(user: any) {
        setFirebaseUserObj(user);
        if (initializing) setInitializing(false);
    }

    // firebase subscription
    useEffect(() => {
        const subscriber =
            firebaseAuthInstance().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    // const isDarkMode = useColorScheme() === 'dark';
    const myTheme = {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
        },
    };

    if (initializing) return <Loader />;
    return (
        <NavigationContainer ref={navigationRef} theme={myTheme}>
            <Stack.Navigator>
                {firebaseUserObj && (
                    <Stack.Screen
                        name="Main"
                        component={MainScreen}
                        options={{ headerShown: false }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
