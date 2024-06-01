import { StyleSheet, Text, View, FlatList,Button } from 'react-native'
import React from 'react'
import Taskdata from "./taskdata";

const OngoingTask = () => {
  return (
	<View style={styles.OnHead}>
	 <Text style={styles.heading}>Ongoing Tasks</Text>
	<FlatList
	 showsVerticalScrollIndicator={false}
        data={Taskdata}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.Ontaskbox}>
            <Text style={styles.OntaskName}>{item.name}</Text>
          </View>
        )}
	/>
	</View>
  )
}

export default OngoingTask

const styles = StyleSheet.create({
	heading: {
	fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 20,
	},
	OnHead: {
	flex: 1,
	},
	Ontaskbox: {
	paddingVertical: 43,
    borderColor: '#eddbc9',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#FBF9F7',
    margin: 3,
	},
	OntaskName: {
	fontSize: 20,
	marginLeft: 10,
	},

})