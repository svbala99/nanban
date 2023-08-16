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

// interface HomeScreenProps {
//     navigation: StackNavigationProp<HomeStackParamList>;
//     route: RouteProp<HomeStackParamList, 'Home'>;
// }

function HomeScreen(): JSX.Element {
    // const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
        </View>
    );
}

export default HomeScreen;
