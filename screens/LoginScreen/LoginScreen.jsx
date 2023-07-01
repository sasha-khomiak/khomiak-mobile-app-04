// підключення хука useState
import React, { useState } from "react";

// підключення компонентів
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Text,
  ImageBackground,
  View,
  Alert,
  TextInput,
  Pressable,
  Platform,
  ScrollView,
} from "react-native";

// підключення хука навігації
import { useNavigation } from "@react-navigation/native";

// Імпорт фотографії бекграунду і іконки плюсика
import PhotoBG from "../../assets/images/PhotoBG.jpg";

// Імпорт стилів
import { styles } from "../styles";
import { stylesLoginScreen } from "./stylesLoginScreen";

const LoginScreen = () => {
  //---------СТВОРЕННЯ НАВІГАЦІЇ---------//
  const navigation = useNavigation();

  //---------КОНТРОЛЬОВАНІ ІНПУТИ СТЕЙТИ---------//
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //--------- СТЕЙТИ СТИЛІЗАЦІЇ ІНПУТІВ - В ФОКУСІ ЧИ НЕ В ФОКУСІ---------//
  const [focusEmailInput, setFocusEmailInput] = useState(false);
  const [focusPasswordInput, setFocusPasswordInput] = useState(false);

  //---------ОБРОБНИК ПОКАЗУ ПАРОЛЯ---------//
  const [hidePassword, setHidePassword] = useState(true);
  const togglePassword = () => {
    setHidePassword((prevState) => !prevState);
    console.log("hidePassword", hidePassword);
  };

  //---------ОБРОБНИК "САБМІТУ" ФОРМИ---------//
  const login = () => {
    // console.log("Email: ", email);
    // console.log("Password: ", password);
    setEmail("");
    setPassword("");
    // Alert.alert(`Your email: ${email}, Your password: ${password}`);
    navigation.navigate("Home");
  };

  //---------РОЗМІТКА КОМПОНЕНТА---------//
  return (
    <View style={stylesLoginScreen.container}>
      {/* Компонент ImageBackground, для підложки, а вміст верстаємо в ньому */}
      <ImageBackground
        source={PhotoBG}
        resizeMode="cover"
        style={stylesLoginScreen.bgimage}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={stylesLoginScreen.container}
          >
            {/* Наша форма біла */}
            <ScrollView contentContainerStyle={stylesLoginScreen.authAreaBlock}>
              {/* Наш заголовок */}
              <Text style={stylesLoginScreen.title}>Увійти</Text>

              {/* Наш інпут email*/}
              <View style={stylesLoginScreen.inputWrap}>
                <TextInput
                  style={
                    focusEmailInput
                      ? [
                          stylesLoginScreen.input,
                          stylesLoginScreen.focusedInput,
                        ]
                      : stylesLoginScreen.input
                  }
                  placeholder="Адреса електронної пошти"
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => setFocusEmailInput(true)}
                  onBlur={() => setFocusEmailInput(false)}
                />
              </View>

              {/* Наш інпут password*/}
              <View style={stylesLoginScreen.inputWrap}>
                <TextInput
                  style={
                    focusPasswordInput
                      ? [
                          stylesLoginScreen.input,
                          stylesLoginScreen.focusedInput,
                        ]
                      : stylesLoginScreen.input
                  }
                  placeholder="Пароль"
                  name="password"
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => setFocusPasswordInput(true)}
                  onBlur={() => setFocusPasswordInput(false)}
                  secureTextEntry={hidePassword}
                />
                <Pressable
                  style={stylesLoginScreen.pressableShowPassword}
                  onPress={togglePassword}
                >
                  <Text style={stylesLoginScreen.showPassword}>
                    {hidePassword ? "Показати" : "Сховати"}
                  </Text>
                </Pressable>
              </View>

              {/* Наша кнопка увійти*/}
              <Pressable style={stylesLoginScreen.button} onPress={login}>
                <Text style={stylesLoginScreen.buttonText}>Увійти</Text>
              </Pressable>

              {/* Наша кнопка немає акаунта, Зареєструватися*/}
              <Pressable
                style={stylesLoginScreen.linkTextWrap}
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={stylesLoginScreen.linkText}>
                  Немає акаунту?&nbsp;
                  <Text style={stylesLoginScreen.underline}>
                    Зареєструватися
                  </Text>
                </Text>
              </Pressable>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
