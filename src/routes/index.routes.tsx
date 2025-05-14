import React from "react";
import {}   from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/home";
import AboutInst from "../pages/aboutInst";
import AboutDevs from "../pages/aboutDevs";
import StudentsScreen from "../pages/students";

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{ headerShown: false }}
        >
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="AboutInstitution" component={AboutInst} />
        <Stack.Screen name="AboutDevelopers" component={AboutDevs} />
        <Stack.Screen name="Students" component={StudentsScreen} />
    </Stack.Navigator>
  );
}
