import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.items}>
      <View style={styles.left}>
        <View style={styles.square}></View>
        <Text style={styles.task}> {props.text} </Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  items: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  square:{
    backgroundColor: 'slateblue',
    width: 20,
    height: 20,
    opacity: 0.5,
    marginRight: 10,
    borderRadius: 5
  },
  
  circular:{
    width: 15,
    height: 15,
    borderColor: 'slateblue',
    borderRadius: 50,
    borderWidth: 2,
  },
  task: {
    maxWidth: '80%'
  }
});


export default Task;