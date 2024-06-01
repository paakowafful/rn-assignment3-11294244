import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  
} from "react-native";
import categoriesData from "./categoriesData";

const Categories = () => {
  return (
    <View>
      <Text style={styles.categoryhead}>Categories</Text>
      <View style={{ width: "100%" }}>
        <ScrollView
          horizontal={true}
          style={styles.categoriesContainer}
          showsHorizontalScrollIndicator={false}
        >
          {categoriesData.map((category) => (
            <View key={category.name} style={styles.categoryItem}>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.taskCount}>{category.taskCount} Tasks</Text>
              <Image source={category.image} style={styles.categoryImage} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryhead: {
    fontSize: 20,
    fontWeight: "bold",
  },
  categoriesContainer: {
     width: 396, 
    height: 190,
    marginVertical: 20,
  },
  categoryItem: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
    borderColor: "#e0e0e0",
    width: 186, 
    height: 192,
    marginRight: 20,
    backgroundColor: "#fbf9f7",
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  taskCount: {
    fontSize: 12,
  },
  categoryImage: {
    width: 138, 
    height: 132,
  },
});

export default Categories;
