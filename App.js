import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NativeWindStyleSheet } from "nativewind";
import HomeScreen from './screens/HomeScreen';

NativeWindStyleSheet.setOutput({
  default: "native",
});
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
    <StatusBar className="bg-red-500" translucent/>
  </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
