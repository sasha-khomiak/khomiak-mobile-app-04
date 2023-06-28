// підключення хука useState
import React, { useState } from "react";

import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  StatusBar,
  Text,
  ImageBackground,
  View,
  Alert,
  TextInput,
  Pressable,
  Platform,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

// Імпорт фотографії бекграунду і іконки плюсика
import PhotoBG from "../../assets/images/PhotoBG.jpg";

// Імпорт стилів
import { styles } from "../styles";

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
    console.log("Email: ", email);
    console.log("Password: ", password);
    setEmail("");
    setPassword("");
    // Alert.alert(`Your email: ${email}, Your password: ${password}`);
    navigation.navigate("Home");
  };

  //---------РОЗМІТКА КОМПОНЕНТА---------//
  return (
    <View style={styles.container}>
      {/* Компонент ImageBackground, для підложки, а вміст верстаємо в ньому */}
      <ImageBackground
        source={PhotoBG}
        resizeMode="cover"
        style={styles.bgimage}
      >
        {/* статус-бар */}
        <StatusBar style="auto" />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            {/* Наша форма біла */}
            <ScrollView contentContainerStyle={styles.authAreaBlock}>
              {/* Наш заголовок */}
              <Text style={styles.title}>Увійти</Text>

              {/* Наш інпут email*/}
              <View style={styles.inputWrap}>
                <TextInput
                  style={
                    focusEmailInput
                      ? [styles.input, styles.focusedInput]
                      : styles.input
                  }
                  placeholder="Адреса електронної пошти"
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => setFocusEmailInput(true)}
                  onBlur={() => setFocusEmailInput(false)}
                />
              </View>

              {/* Наш інпут password*/}
              <View style={styles.inputWrap}>
                <TextInput
                  style={
                    focusPasswordInput
                      ? [styles.input, styles.focusedInput]
                      : styles.input
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
                  style={styles.pressableShowPassword}
                  onPress={togglePassword}
                >
                  <Text style={styles.showPassword}>
                    {hidePassword ? "Показати" : "Сховати"}
                  </Text>
                </Pressable>
              </View>

              {/* Наша кнопка увійти*/}
              <Pressable style={styles.button} onPress={login}>
                <Text style={styles.buttonText}>Увійти</Text>
              </Pressable>

              {/* Наша кнопка немає акаунта, Зареєструватися*/}
              <Pressable
                style={styles.linkTextWrap}
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={styles.linkText}>
                  Немає акаунту?&nbsp;
                  <Text style={styles.underline}>Зареєструватися</Text>
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
