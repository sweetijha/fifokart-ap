import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Signup from './Component/Src/Signup';
import Login from './Component/Src/Login';
import Home from './Component/Src/Home';
import Product from './Component/Src/Product';
import Cart from './Component/Src/Cart';
import Address from './Component/Src/Address';
import ForgetPassword from './Component/Src/ForgetPassword';

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Home: {screen: Home},
      Signup: {screen: Signup},
      Login: {screen: Login},
      Product: {screen: Product},
      Cart: {screen: Cart},
      Address: {screen: Address},
      ForgetPassword: {screen: ForgetPassword},
    },
    {
      initialRouteName: 'Home',
      //   headerMode: 'none',
    },
  ),
);

export default AppNavigator;
