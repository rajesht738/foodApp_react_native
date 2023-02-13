import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
   <ScrollView 
   contentContainerStyle={{
    paddingHorizontal: 15,
    paddingTop: 10
   }}
   showsHorizontalScrollIndicator={false}
    horizontal >
      <CategoryCard imgUrl={require("../assets/dish.jpg")} title="first img"/>
      <CategoryCard imgUrl={require("../assets/dish.jpg")} title="first img"/>
      <CategoryCard imgUrl={require("../assets/dish.jpg")} title="first img"/>
      <CategoryCard imgUrl={require("../assets/dish.jpg")} title="first img"/>
      <CategoryCard imgUrl={require("../assets/dish.jpg")} title="first img"/>
      <CategoryCard imgUrl={require("../assets/dish.jpg")} title="first img"/>
      <CategoryCard imgUrl={require("../assets/dish.jpg")} title="first img"/>
      <CategoryCard imgUrl={require("../assets/dish.jpg")} title="first img"/>
      <CategoryCard imgUrl={require("../assets/dish.jpg")} title="first img"/>
         
   </ScrollView>
    )
}

export default Categories

const styles = StyleSheet.create({})