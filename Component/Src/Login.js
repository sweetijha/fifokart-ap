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
const backgroundImage = '../Images/background.jpg';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Login = props => {
  return (
    <View
      style={{flex: 1, backgroundColor: '#020d24', justifyContent: 'center'}}>
      {/* <ImageBackground
        source={require(backgroundImage)}
        resizeMode="cover"
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}> */}
      <View style={styles.phoneInputView}>
        <TextInput
          style={styles.phoneInput}
          placeholder="Phone"
          keyboardType="numeric"
          placeholderTextColor="#ffffff"
        />
      </View>
      <View style={styles.phoneInputView}>
        <TextInput
          style={styles.pwdInput}
          placeholder="Password"
          keyboardType="default"
          placeholderTextColor="#ffffff"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.submitButton}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Product');
          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('ForgetPassword');
          }}>
          <Text style={styles.forgetPwd}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      {/* </ImageBackground> */}
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
  forgetPwd: {
    color: '#2782d2',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default Login;
