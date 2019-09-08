import React, {Fragment} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import AppNavigator from './AppNavigator';
// import Signup from './Component/Src/Signup';
// import {createStackNavigator} from 'react-navigation';

const App = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor="#021233" barStyle="light-content" />
      <AppNavigator />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#020d24',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
