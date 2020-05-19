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

  render() {
    return (
      <Modal
        onRequestClose={this.props.onCancel}
        visible={this.props.isVisible}
        animationType="slide"
        transparent={true}>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.offset}></View>
        </TouchableWithoutFeedback>
        <View style={styles.container}>
          <Text style={styles.header}>Nova Tarefa!</Text>
          <TextInput
            placeholder="Descrição..."
            style={styles.input}
            onChangeText={(desc) => this.setState({desc})}
            value={this.state.desc}
          />
          <DatePickerIOS
            mode="date"
            date={this.state.date}
            onDateChange={(date) => this.setState({date})}
          />
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={styles.button}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.save}>
              <Text style={styles.button}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.offset}></View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}
