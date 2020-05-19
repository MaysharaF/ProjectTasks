import React, {Component} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  DatePickerIOS,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import commonStyles from '../commonStyles';

const initialState = {desc: '', date: new Date()};

export default class AddTask extends Component {
  state = {...initialState};

  save = () => {
    const data = {...this.state};
    this.props.onSave(data);
    this.setState({...initialState});
  };
}
