// підключення хука useState
import React, { useState } from "react";

// Імпорт ReactNative компонентів
import {
  StatusBar,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  Pressable,
  Keyboard,
  Alert,
  Image,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

// Імпорт фотографії бекграунду і іконки плюсика
import PhotoBG from "../../assets/images/PhotoBG.jpg";
import AddIco from "../../assets/images/add.png";

// Імпорт стилів
import { styles } from "../styles";

// Компонент RegistrationScreen
const RegistrationScreen = () => {
  //---------СТВОРЕННЯ НАВІГАЦІЇ---------//
  const navigation = useNavigation();

  //---------КОНТРОЛЬОВАНІ ІНПУТИ СТЕЙТИ---------//
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //--------- СТЕЙТИ СТИЛІЗАЦІЇ ІНПУТІВ - В ФОКУСІ ЧИ НЕ В ФОКУСІ---------//
  const [focusLoginInput, setFocusLoginInput] = useState(false);
  const [focusEmailInput, setFocusEmailInput] = useState(false);
  const [focusPasswordInput, setFocusPasswordInput] = useState(false);

  //---------ОБРОБНИК "САБМІТУ" ФОРМИ---------//
  const registration = () => {
    console.log("Login: ", login);
    console.log("Email: ", email);
    console.log("Password: ", password);
    setLogin("");
    setEmail("");
    setPassword("");
    Alert.alert(
      `Your login: ${login}, Your email: ${email}, Your password: ${password}`
    );
  };

  //---------ОБРОБНИК ПОКАЗУ ПАРОЛЯ---------//
  const [hidePassword, setHidePassword] = useState(true);
  const togglePassword = () => {
    setHidePassword((prevState) => !prevState);
    console.log("hidePassword", hidePassword);
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
            <View style={styles.formAreaBlock}>
              {/* Наша аватарка в обгортці і плюсик */}
              <View>
                <View style={styles.avatarContainer}>
                  <Image source={AddIco} style={styles.addIco} />
                </View>
              </View>

              {/* Наш заголовок */}
              <Text style={styles.title}>Реєстрація</Text>
              {/* Наш інпут login*/}
              <View style={styles.inputWrap}>
                <TextInput
                  style={
                    focusLoginInput
                      ? [styles.input, styles.focusedInput]
                      : styles.input
                  }
                  placeholder="Логін"
                  placeholderTextColor="#BDBDBD"
                  value={login}
                  onChangeText={setLogin}
                  onFocus={() => setFocusLoginInput(true)}
                  onBlur={() => setFocusLoginInput(false)}
                />
              </View>
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
                  secureTextEntry={hidePassword}
                  onFocus={() => setFocusPasswordInput(true)}
                  onBlur={() => setFocusPasswordInput(false)}
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
              {/* Наша кнопка зареєструватися*/}
              <Pressable style={styles.button} onPress={registration}>
                <Text style={styles.buttonText}>Зареєcтруватися</Text>
              </Pressable>
              {/* Наша кнопка вже є акаунт*/}
              <Pressable
                style={styles.linkTextWrap}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

// Дефолтний експорт нашого компонента в App
export default RegistrationScreen;
