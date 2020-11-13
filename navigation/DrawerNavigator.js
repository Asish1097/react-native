import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator, AboutStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Home from "../screens/Home";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      
      <Drawer.Screen name="About" component={AboutStackNavigator} />

        <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;