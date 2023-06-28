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
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

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
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 20,
          height: 83,
        },
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarActiveTintColor: "#FF6C00",
          tabBarInactiveTintColor: "#212121",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = focused ? "appstore-o" : "appstore-o";
            return <AntDesign name={iconName} color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          // tabBarActiveTintColor: "#FF6C00",
          // tabBarInactiveTintColor: "#212121",
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                backgroundColor: "#FF6C00",
                borderRadius: 20,
                height: 40,
                width: 70,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Octicons name="plus" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: "#FF6C00",
          tabBarInactiveTintColor: "#212121",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = focused ? "person" : "person-outline";
            return <Ionicons name={iconName} color={color} size={size} />;
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
