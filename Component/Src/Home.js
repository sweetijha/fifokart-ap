import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
const Home = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#020d24',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          props.navigation.navigate('Signup');
        }}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            props.navigation.navigate('Login');
          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Product');
          }}>
          <Text style={styles.skip}>{'Skip'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    // width: deviceWidth - 20,
    backgroundColor: '#2782d2',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 25,
    opacity: 0.8,
    marginTop: 10,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  skip: {
    color: '#2782d2',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
export default Home;
