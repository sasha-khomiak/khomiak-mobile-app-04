// Підключення бібліотеки роботи з шрифтами
// треба встановити npx expo install expo-font
import { useFonts } from "expo-font";

import { Button } from "react-native";

// Підключення бібліотеки роботи з навігацією
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

// Підключення компонента RegistrationScreen
import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

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
      <MainStack.Navigator initialRouteName="Registration">
        {/* Аналог Routes */}
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
