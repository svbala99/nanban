// import { type RouteProp } from '@react-navigation/native';
// import { type StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { type HomeStackParamList } from '../MainScreen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// interface NewsScreenProps {
// navigation: StackNavigationProp<HomeStackParamList>;
// route: RouteProp<HomeStackParamList, 'News'>;
// }

function NewsScreen(): JSX.Element {
    // const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>News screen</Text>
        </View>
    );
}

export default NewsScreen;
