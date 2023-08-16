import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Navigator from './navigation/Navigator';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

function App(): JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <Navigator />
        </SafeAreaView>
    );
}

export default App;
