import React from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icon from "react-native-ionicons";
// import Ionicons from "react-native-ionicons";

// Імпорт стилів
// import { styles } from "../styles";

// import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
// import LoginScreen from "./screens/LoginScreen/LoginScreen";
import PostsScreen from "../PostsScreen/PostsScreen";

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

//Створення нижньої навігації
const Tabs = createBottomTabNavigator();

// головний компонент
const Home = () => {
  return (
    //  отут нижня навігація
    <Tabs.Navigator
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, color, size }) => {
    //     let iconName;

    //     if (route.name === "Profile") {
    //       iconName = focused
    //         ? "ios-information-circle"
    //         : "ios-information-circle-outline";
    //     } else if (route.name === "Settings") {
    //       iconName = focused ? "ios-list-box" : "ios-list";
    //     }
    //     return <Ionicons name={add-circle-outline} size={size} color={color} />;
    //   },

    // })}
    // tabBarOptions={{
    //   activeTintColor: "tomato",
    //   inactiveTintColor: "gray",
    // }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};

export default Home;
