import React, { useEffect } from 'react';
import { type StackNavigationProp } from '@react-navigation/stack';

import { type RootStackParamList } from '../../navigation/Navigator';
import Loader from '../../components/Loader';

interface LoaderScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
}

function LoaderScreen(props: LoaderScreenProps): JSX.Element {
    const { navigation } = props;
    // check token and logged in user or not
    const isLoggedIn = true;

    useEffect(() => {
        if (isLoggedIn) {
            navigation.replace('Main');
        }
    }, [navigation, isLoggedIn]);

    return <Loader />;
}

export default LoaderScreen;
