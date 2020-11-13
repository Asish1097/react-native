import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HomeStackNavigator, AboutStackNavigator, ContactStackNavigator } from "./StackNavigator";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";

const Tab = createMaterialBottomTabNavigator();

const MaterialBottomTabNavigator = () => {
  return (
    <Tab.Navigator 
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}>
      
        <Tab.Screen name="Home" component={HomeStackNavigator} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
      
        <Tab.Screen name="About" component={AboutStackNavigator} options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }} />
        
        <Tab.Screen name="Contact" component={ContactStackNavigator} options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
};

export default MaterialBottomTabNavigator;