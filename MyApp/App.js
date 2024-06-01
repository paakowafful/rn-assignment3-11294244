import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Header from "../MyApp/components/header"

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}> 
      <View style={styles.container}>
        <Header />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f0e8', // Background color for SafeAreaView
  },
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
   },

});
