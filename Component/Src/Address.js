import React from 'react';
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

const Address = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={styles.phoneInputView}>
        <TextInput
          style={styles.phoneInput}
          placeholder="House/Flat Number"
          keyboardType="numeric"
          //   placeholderTextColor="#ffffff"
        />
      </View>
      <View style={styles.phoneInputView}>
        <TextInput
          style={styles.phoneInput}
          placeholder="Colony/Landmark"
          keyboardType="default"
          //   placeholderTextColor="#ffffff"
        />
      </View>
      <View style={styles.phoneInputView}>
        <TextInput
          style={styles.phoneInput}
          placeholder="City"
          keyboardType="default"
          //   placeholderTextColor="#ffffff"
        />
      </View>
      <View style={styles.phoneInputView}>
        <TextInput
          style={styles.pwdInput}
          placeholder="State"
          keyboardType="default"
          //   placeholderTextColor="#ffffff"
        />
      </View>
      <View style={styles.submitButton}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Product');
          }}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneInputView: {
    // width: deviceWidth - 20,
    marginLeft: 20,
    marginRight: 20,
  },
  phoneInput: {
    borderColor: '#7cb9b9',
    borderWidth: 1,
    height: 40,
    color: 'white',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 25,
    marginTop: 15,
  },
  pwdInput: {
    borderColor: '#7cb9b9',
    borderWidth: 1,
    height: 40,
    color: 'white',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 25,
    marginTop: 15,
    marginBottom: 15,
  },
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
});

export default Address;
