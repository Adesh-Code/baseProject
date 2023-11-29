import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Heartbeat from './src/Heartbeat';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  view: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

const App = ({heartBeat}) => {
  return (
    <View style={styles.container}>
      <View style={styles.view} />
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Heartbeat.startService()}>
          <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Heartbeat.stopService()}>
          <Text style={styles.text}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
