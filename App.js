// Підключення бібліотеки роботи з шрифтами
// треба встановити npx expo install expo-font
import { useFonts } from "expo-font";

// Підключення бібліотеки роботи з навігацією
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

// Підключення компонентів
import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import Home from "./screens/Home/Home";
import PostsScreen from "./screens/PostsScreen/PostsScreen";
import CommentsScreen from "./screens/CommentsScreen/CommentsScreen";

// Наш головний компонент - пограма
export default function App() {
  // Підключаємо шрифти
  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter/static/Inter-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  // Якщо шрифти не завантажились то нічогоне повертаємо, інакше повернемо верстку додатку
  if (!fontsLoaded) {
    return null;
  }

  return (
    // Наш головний контейнер - тобто весь екран в навігаційній обгортці

    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Аналог Routes */}
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Comments" component={CommentsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
