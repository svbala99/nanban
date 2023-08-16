import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

function Loader(): JSX.Element {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );
}

export default Loader;
