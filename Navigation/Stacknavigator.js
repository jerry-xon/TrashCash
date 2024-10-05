import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Profile from "../Screens/Profile";
import History from "../Screens/History";


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#26D077" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (<Entypo name="home" size={24} color="#26D077" />) : (<AntDesign name="home" size={24} color="black" />)
          }}
        />
       
        <Tab.Screen
          name="Cart"
          component={History}
          options={{
            tabBarLabel: "History",
            tabBarLabelStyle: { color: "#26D077" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (<AntDesign name="book" size={24} color="#26D077" />) : (<AntDesign name="book" size={24} color="" />)
          }}
        />
         <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#26D077" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (<Ionicons name="person" size={24} color="#26D077" />) : (<Ionicons name="person-outline" size={24} color="black" />)
          }}
        />
      </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
