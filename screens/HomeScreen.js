import {StyleSheet, Text, View, Image, TextInput, ScrollView } from "react-native";
import { React, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon} from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex flex-row text-red-600 pb-2 items-center mx-4 space-x-2 w-50">
        <Image
          source={require("../assets/favicon.png")}
          className="bg-gray-500 rounded-full w-7 h-7"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
          Current Location
         <ChevronDownIcon size={20} color="#00CCBB"/>
          </Text>
        </View> 
        <UserIcon size={35} color="#005" />
        <StatusBar backgroundColor="lightgreen" style="light" translucent/>
        </View>
        {/* {search} */}
        <View className="flex-row space-x-2 pb-2 mx-4">
          <View className="flex-1 flex-row space-x-2 p-3 bg-gray-200">
          <MagnifyingGlassIcon size={20} color="gray"/>
          <TextInput placeholder="Search something ..." keyboardType="default"/>
          </View>
          <AdjustmentsVerticalIcon size={30} color="gray"/>
        </View>
        {/* {body} */}
        <ScrollView className="bg-gray-300" 
                >
          {/* category */}
           <Categories />

          {/* featured category */}
          {/* Featured */}
          <FeaturedRow id="123" title="Featured" description="Paid Placements for our partners" featuredCategory="Featured" />
          {/* Taste discount */}
          <FeaturedRow id="124" title="Taste discount" description="Paid Placements for our partners" featuredCategory="Featured" />
         {/* offers near you */}
          <FeaturedRow id="125" title="Offers near you" description="Paid Placements for our partners" featuredCategory="Featured" />
        </ScrollView>
      </SafeAreaView>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
