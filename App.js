import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.subContainer}>My name is <Text style={styles.format}>Suleman Hudu</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#144',
    alignItems: 'center',
    justifyContent: 'center',
  },
  format: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subContainer: {
    fontSize: 24,
  }
});
