import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import todayImagem from '../../assets/imgs/today.jpg';
import commonStyles from '../commonStyles';
import Task from '../components/Tasks';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Agenda extends Component {
  state = {
    tasks: [
      {
        id: Math.random(),
        desc: 'Tarefa 1',
        estimateAt: new Date(),
        doneAt: new Date(),
      },
      {
        id: Math.random(),
        desc: 'Tarefa 2',
        estimateAt: new Date(),
        doneAt: null,
      },
      {
        id: Math.random(),
        desc: 'Tarefa 1',
        estimateAt: new Date(),
        doneAt: new Date(),
      },
      {
        id: Math.random(),
        desc: 'Tarefa 2',
        estimateAt: new Date(),
        doneAt: null,
      },
      {
        id: Math.random(),
        desc: 'Tarefa 1',
        estimateAt: new Date(),
        doneAt: new Date(),
      },
      {
        id: Math.random(),
        desc: 'Tarefa 2',
        estimateAt: new Date(),
        doneAt: null,
      },
      {
        id: Math.random(),
        desc: 'Tarefa 1',
        estimateAt: new Date(),
        doneAt: new Date(),
      },
      {
        id: Math.random(),
        desc: 'Tarefa 2',
        estimateAt: new Date(),
        doneAt: null,
      },
      {
        id: Math.random(),
        desc: 'Tarefa 1',
        estimateAt: new Date(),
        doneAt: new Date(),
      },
    ],
    visibleTasks: [],
    showDoneTasks: true,
  };

  filterTasks = () => {
    let visibleTasks = null;
    if (this.state.showDoneTasks) {
      visibleTasks = [...this.state.tasks];
    } else {
      const pending = (task) => task.doneAt === null;
      visibleTasks = this.state.tasks.filter(pending);
    }
    this.setState({visibleTasks});
  };

  toggleFilter = () => {
    this.setState({showDoneTasks: !this.state.showDoneTasks}, this.filterTasks);
  };

  toggleTask = (id) => {
    const tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task = {...task};
        task.doneAt = task.doneAt ? null : new Date();
      }
      return task;
    });
    this.setState({tasks});
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImagem} style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>
              {moment().locale('pt-br').format('ddd, D [de] MMMM')}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.taskContainer}>
          <FlatList
            data={this.state.tasks}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({item}) => (
              <Task {...item} toggleTask={this.toggleTask} />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
  taskContainer: {
    flex: 7,
  },
});
