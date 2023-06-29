import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icon from "react-native-ionicons";
// import Ionicons from "react-native-ionicons";
import { Feather } from "@expo/vector-icons";

// Імпорт стилів
import { styles } from "../styles";

import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

//Створення нижньої навігації
const Tabs = createBottomTabNavigator();

// головний компонент
const Home = () => {
  // const [focusedNow, setFocusedNow] = useState("");

  return (
    //  отут нижня навігація
    <Tabs.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            paddingBottom: 20,
            height: 83,
          },
          tabBarActiveTintColor: "#FF6C00",
          tabBarInactiveTintColor: "#212121",
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "PostsScreen") {
              return <AntDesign name="appstore-o" color={color} size={size} />;
            } else if (route.name === "CreatePostsScreen") {
              let icoColor = focused ? "#BDBDBD" : "#ffffff";
              let bgColor = focused ? "#F6F6F6" : "#FF6C00";
              return (
                <View
                  style={{
                    backgroundColor: bgColor,
                    borderRadius: 20,
                    height: 40,
                    width: 70,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {focused ? (
                    <Feather name="trash-2" color={icoColor} size={size} />
                  ) : (
                    <Octicons name="plus" color={icoColor} size={size} />
                  )}
                </View>
              );
            } else if (route.name === "ProfileScreen") {
              let iconName = focused ? "person" : "person-outline";
              let iconSize = focused ? 35 : 25;
              return <Ionicons name={iconName} color={color} size={iconSize} />;
            }
          },
        };
      }}
    >
      <Tabs.Screen name="PostsScreen" component={PostsScreen} />
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default Home;
