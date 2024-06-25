import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.subContainer}>My name is <Text style={styles.format}>Hudu Suleman</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38db',
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
