import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Otp from "./Screens/Otp";
import Profile from "./Screens/Profile";
import History from "./Screens/History";


const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="OTP"
          component={Otp}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="History"
          component={History}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
