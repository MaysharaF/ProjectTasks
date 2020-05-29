import React, {Component} from 'react';
import {
  StyleSheet,
  TextComponent,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import commonStyles from '../commonStyles';
import backgroundImage from '../../assets/imgs/login.jpg';

export default class Auth extends Component {
  state = {
    stageNew: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
}
