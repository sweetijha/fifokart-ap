import React from 'react';
import CheckBox from 'react-native-check-box';
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
  Button,
} from 'react-native';
const Cart = props => {
  return (
    <View>
      <View
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          marginLeft: 15,
          marginRight: 15,
          marginTop: 15,
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 18,
              flex: 1,
              marginTop: 10,
            }}>
            Daily Special: Bisleri
          </Text>
          <Text style={{fontSize: 16, marginTop: 10}}>Rs. 39.00/Can</Text>
          <Image
            style={{width: 50, height: 50}}
            source={require('../Images/bisleri.png')}
          />
        </View>
      </View>
      <View style={{flex: 1, marginLeft: 10, marginTop: 15}}>
        <CheckBox
          style={{flex: 1, padding: 10}}
          // onClick={() => {
          //   this.setState({
          //     isChecked: !this.state.isChecked,
          //   });
          // }}
          // isChecked={this.state.isChecked}
          rightText={'Check for schedule'}
        />
      </View>
      <View style={styles.checkout}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Home');
          }}>
          <Text style={styles.loginText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontSize: 20,
  },
  checkout: {
    backgroundColor: 'green',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: '20%',
    // marginLeft: 10,
    // marginRight:10
  },
});
export default Cart;
