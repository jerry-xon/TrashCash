import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Otp from "./Screens/Otp";


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
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
