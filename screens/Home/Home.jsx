import React from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icon from "react-native-ionicons";
// import Ionicons from "react-native-ionicons";

// Імпорт стилів
import { styles } from "../styles";

import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

import { Ionicons } from "@expo/vector-icons";

function Center() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Center!</Text>
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
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // назва іконки
          let iconName;

          // зображення іконки в залежності імені роута і його фокусу
          if (route.name === "PostsScreen") {
            iconName = focused ? "ios-information-circle" : "person-outline";
          } else if (route.name === "Center") {
            iconName = focused ? "person-outline" : "ios-list";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-outline" : "ios-list";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Center"
        component={Center}
        // options={{
        //   headerShown: false,
        // }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
