import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={imgUrl}
        className="w-30 h-30 rounded-sm"
        style={{width: 100, height:100}}
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
