// Імпорт компонентів
import { View } from "react-native";

// Імпорт скрінів
import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";

// Імпорт іконок
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

// Імпорт кастомного хедера
import CustomHeader from "../../components/CustomHeader/CustomHeader";

// Імпорт маршрутизації
import { useNavigation, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

//Створення нижньої навігації
const Tabs = createBottomTabNavigator();

// головний компонент
const Home = ({ route, navigation }) => {
  // const route = useRoute();
  // const navigation = useNavigation();
  //Дізнатися на якому роуті ми перебуваємо
  const routeName = getFocusedRouteNameFromRoute(route) ?? "PostsScreen";
  console.log("routeName", routeName);

  return (
    //  отут нижня навігація
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => {
        return {
          tabBarShowLabel: false,
          // headerShown: false,
          tabBarStyle: {
            paddingBottom: 20,
            height: 83,
          },
          tabBarActiveTintColor: "#FF6C00",
          tabBarInactiveTintColor: "#212121",
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "PostsScreen") {
              let iconName = focused ? "appstore1" : "appstore-o";
              let iconSize = focused ? 35 : 25;
              return (
                <AntDesign name={iconName} color={color} size={iconSize} />
              );
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
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          header: ({ navigation, route, options }) => {
            // const title = route.name;
            // console.log("options", options);
            const title = "Пубілкації";
            return <CustomHeader title={title} />;
          },
          //
        }}
      />

      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          header: ({ navigation, route, options }) => {
            const title = "Створити публікацію";
            return <CustomHeader title={title} cameFrom={routeName} />;
          },
          tabBarStyle: { display: "none" },
        }}
      />

      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
