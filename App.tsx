import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export { default as MuvButton } from './components/molecules/Button';

import { Button as MuvButton } from './components/molecules';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Muv UI Components!</Text>
       <MuvButton label="Hello World" onPress={() => console.log('Hello World')} /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
