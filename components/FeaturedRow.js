import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4 mt-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#005" />
      </View>
      <Text className="text-xs px-4 text-gray-500">{description}</Text>
      <ScrollView
      horizontal
      contentContainerStyle={
        {
            paddingHorizontal: 15,
            paddingRight: 5,
            marginBottom: 5,
            
        }}
        className="pt-4 mr-2"
      >
       <RestaurantCard
        id={123}
        imgUrl={require("../assets/dish.jpg")}
        title="Yo shushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main street"
        short_description="This is the short description"
        dishes={[]}
       />
       <RestaurantCard
        id={123}
        imgUrl={require("../assets/dish.jpg")}
        title="Yo shushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main street"
        short_description="This is the short description"
        dishes={[]}
       />
       <RestaurantCard
        id={123}
        imgUrl={require("../assets/dish.jpg")}
        title="Yo shushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main street"
        short_description="This is the short description"
        dishes={[]}
       />
       <RestaurantCard
        id={123}
        imgUrl={require("../assets/dish.jpg")}
        title="Yo shushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main street"
        short_description="This is the short description"
        dishes={[]}
       />
       <RestaurantCard
        id={123}
        imgUrl={require("../assets/dish.jpg")}
        title="Yo shushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main street"
        short_description="This is the short description"
        dishes={[]}
       />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({});
