import { StyleSheet, View, SafeAreaView } from 'react-native';
import Header from "../MyApp/components/header"
import Category from '../MyApp/components/categories';
import OngoingTask from './components/ongoingtask';
import SearchBar from "../MyApp/components/searchBar";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}> 
      <View style={styles.container}>
        <Header />
        <SearchBar />
        <Category />
        <OngoingTask />
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
    padding: 20,
   },

});
