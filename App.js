import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, Platform, TextInput} from 'react-native';
import Task from './components/Task';

export default function App() {
  
  const [task, setTask] = useState("");

  const handleSubmitTask = () => {
    console.log(task);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>
          Today's Tasks
        </Text>
        <View style={styles.items}>
          <Task text={'This is Task 1'} />
          <Task text={'This is Task 2'} />
        </View>
      </View>
      <KeyboardAvoidingView
        behavior = {Platform.OS === 'ios' ? "padding" : "height"}
        style = {styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Write a new task"} defaultValue={task} onChangeText={text => setTask(text)}/>
      <TouchableOpacity onPress={handleSubmitTask}>
        <View style={styles.addWrapper}>
          <Text styles={styles.addText}> + </Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>  

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3d2d4'
  },
  taskWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  writeTaskWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 70,
  },
  input: {
    width: 250,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    textAlign: "center",
    padding: 10,
    marginLeft: 30,

  },
  addWrapper: {
    height: 50,
    width: 50,
    backgroundColor: 'slateblue',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  addText: {
    fontSize: 54,
    fontWeight: 'bold'
  }
});
