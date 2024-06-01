import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Filter from '../components/button'

const SearchBar = () => {
  return (
    <View style={styles.SearchFilter}>
  <View style={styles.searchBarContainer}>
  <Ionicons name="search-outline" size={30} color="black" />
    <TextInput placeholder="Search" style={styles.searchBarInput} />
  </View>
	<View style= {styles.filterContainer}>
	<Filter />
	</View>
  </View>

  );
};

const styles = StyleSheet.create({
	SearchFilter: {
		flexDirection: 'row',
	  },
	  searchBarContainer: {
		flexDirection: 'row',
		borderRadius: 10,
		padding: 10,
		marginBottom: 30,
		alignItems: 'center',
		backgroundColor: 'white',
		width: '75%',
		height: 50,
	  },
	  searchBarInput: {
		flex: 1,
		marginLeft: 10,
	  },
	  filterContainer: {
		marginLeft: 'auto',
	  },
});

export default SearchBar;
