import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import React from 'react';
import Config from 'react-native-config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
});
console.log(Config.ENV)

function App(): JSX.Element {

  return (
    <SafeAreaView style={[ styles.container]}>
      <Text style={{color:'red'}}>{Config?.ENV}</Text>
    </SafeAreaView>
  );
}

export default App;
