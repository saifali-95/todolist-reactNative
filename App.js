import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Task from './components/Task';

export default function App() {
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
  }
});
