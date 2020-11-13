import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        
    </Stack.Navigator>
  );
}

const AboutStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}


const ContactStackNavigator = () => {
  return (
    <Stack.Navigator  >
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

export { HomeStackNavigator, AboutStackNavigator, ContactStackNavigator };