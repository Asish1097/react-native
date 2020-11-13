import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

      // <Drawer.Screen name="About" component={AboutStackNavigator} />
const Home = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button title="Go to About Screen" onPress={() => navigation.navigate("About")} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;