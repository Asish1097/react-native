import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/DrawerNavigator";
// import { MainStackNavigator } from "./navigation/StackNavigator";
// import TabNav from './navigation/TabNavigator'


 const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <TabNav /> */}
    </NavigationContainer>
  );
}
export default App;



