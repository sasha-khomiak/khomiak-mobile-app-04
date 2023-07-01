// підключення хука useState
import React, { useState } from "react";

// Імпорт ReactNative компонентів
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  Pressable,
  Keyboard,
  Platform,
} from "react-native";

// підключення хука навігації
import { useNavigation } from "@react-navigation/native";

// Імпорт фотографії бекграунду
import PhotoBG from "../../assets/images/PhotoBG.jpg";

// Імпорт іконки плюсика
import { AntDesign } from "@expo/vector-icons";

// Імпорт стилів
import { styles } from "../styles"; //тільки стиль екрана і бекграунда
import { stylesProfileScreen } from "./stylesRegistrationScreen";

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
    // console.log("Login: ", login);
    // console.log("Email: ", email);
    // console.log("Password: ", password);
    setLogin("");
    setEmail("");
    setPassword("");
    // Alert.alert(
    //   `Your login: ${login}, Your email: ${email}, Your password: ${password}`
    // );
    navigation.navigate("Home", { login, email, password });
  };

  //---------ОБРОБНИК ПОКАЗУ ПАРОЛЯ---------//
  const [hidePassword, setHidePassword] = useState(true);
  const togglePassword = () => {
    setHidePassword((prevState) => !prevState);
    // console.log("hidePassword", hidePassword);
  };

  //---------РОЗМІТКА КОМПОНЕНТА---------//
  return (
    <View style={stylesProfileScreen.container}>
      {/* Компонент ImageBackground, для підложки, а вміст верстаємо в ньому */}
      <ImageBackground
        source={PhotoBG}
        resizeMode="cover"
        style={stylesProfileScreen.bgimage}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={stylesProfileScreen.container}
          >
            {/* Наша форма біла */}
            <ScrollView
              contentContainerStyle={stylesProfileScreen.formAreaBlock}
            >
              {/* Наша аватарка в обгортці і плюсик */}
              <View>
                <View style={stylesProfileScreen.avatarContainer}>
                  <View style={stylesProfileScreen.avatarPhotoWrap}></View>
                  <AntDesign
                    name="pluscircleo"
                    size={25}
                    color="#FF6C00"
                    style={stylesProfileScreen.addIco}
                  />
                </View>
              </View>

              {/* Наш заголовок */}
              <Text style={stylesProfileScreen.title}>Реєстрація</Text>
              {/* Наш інпут login*/}
              <View style={stylesProfileScreen.inputWrap}>
                <TextInput
                  style={
                    focusLoginInput
                      ? [
                          stylesProfileScreen.input,
                          stylesProfileScreen.focusedInput,
                        ]
                      : stylesProfileScreen.input
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
              <View style={stylesProfileScreen.inputWrap}>
                <TextInput
                  style={
                    focusEmailInput
                      ? [
                          stylesProfileScreen.input,
                          stylesProfileScreen.focusedInput,
                        ]
                      : stylesProfileScreen.input
                  }
                  placeholder="Адреса електронної пошти"
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => setFocusEmailInput(true)}
                  onBlur={() => setFocusEmailInput(false)}
                />
              </View>
              {/* Наш інпут password*/}
              <View style={stylesProfileScreen.inputWrap}>
                <TextInput
                  style={
                    focusPasswordInput
                      ? [
                          stylesProfileScreen.input,
                          stylesProfileScreen.focusedInput,
                        ]
                      : stylesProfileScreen.input
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
                  style={stylesProfileScreen.pressableShowPassword}
                  onPress={togglePassword}
                >
                  <Text style={stylesProfileScreen.showPassword}>
                    {hidePassword ? "Показати" : "Сховати"}
                  </Text>
                </Pressable>
              </View>
              {/* Наша кнопка зареєструватися*/}
              <Pressable
                style={stylesProfileScreen.button}
                onPress={registration}
              >
                <Text style={stylesProfileScreen.buttonText}>
                  Зареєcтруватися
                </Text>
              </Pressable>
              {/* Наша кнопка вже є акаунт*/}
              <Pressable
                style={stylesProfileScreen.linkTextWrap}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={stylesProfileScreen.linkText}>
                  Вже є акаунт? Увійти
                </Text>
              </Pressable>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

// Дефолтний експорт нашого компонента в App
export default RegistrationScreen;
