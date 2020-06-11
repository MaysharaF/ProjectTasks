import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default (props) => {
  return (
    <View style={[styles.container, props.styles]}>
      <Icon name={props.icon} size={20} style={styles.icon} />
      <TextInput {...props} style={styles.input} />
    </View>
  );
};
