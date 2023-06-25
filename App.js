import { StyleSheet, SafeAreaView } from 'react-native';
import Title from './src/components/Title';
import Main from './src/screens/Main';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title/>
      <Main/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
