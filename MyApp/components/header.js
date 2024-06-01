import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
	<View style={styles.headContainer}>
		<View style={styles.profileName}>
        <Text style={styles.headName}>Hello, Devs</Text>
        <Text style={styles.taskCount}>15 task today</Text>
		</View>
		<View style={styles.profileContainer} >
		<Image 
		source={require("../assets/person.png")}
		style={styles.profileImage}  />
		</View>
	</View>
  )
}

export default Header

const styles = StyleSheet.create({
	headName: {
		fontSize: 30,
		fontWeight: 'bold',
	},
	headContainer: {
		flexDirection: 'row',
	},
	taskCount: {
		fontSize: 16,
	},
	profileContainer: {
		flexDirection: 'row',
		marginLeft: 'auto',
		marginBottom: 30,
		backgroundColor: 'white',
		borderRadius: 50,
		overflow: "hidden",
	}
})