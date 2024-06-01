import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import FilterButton from './button';

const Search = () => {
  return (
	<View style={styles.SearchFilter}>
	<View style={styles.searchBarContainer}>
	 <AntDesign name="search1" size={24} color="black" />
	 <TextInput placeholder="Search" style={styles.searchBarInput} />
	 <View style={styles.filterButton}>
	 <FilterButton />
	 </View>
	</View>
	</View>
  )
}

export default Search

const styles = StyleSheet.create({
	searchBarContainer:{
	backgroundColor: 'white',
	width: '75%',
	height: 30,
	borderRadius: 10,
	flexDirection: 'row',
	},
	searchBarInput: {
		flex: 1,
		marginLeft: 10,
	},
	filterButton: {
	marginLeft: 'auto',
	},
	SearchFilter:{
	flexDirection: 'row',
	},
})