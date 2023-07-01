import { StyleSheet } from "react-native";

//---------ТАБЛИЦЯ СТИЛІВ КОМПОНЕНТА---------//
export const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Стиль нашої підложки з картинкою на бекграунді  - розтягується на весь екран
  bgimage: {
    flex: 1,
    justifyContent: "center",
  },
  // Стиль нашого блока білої обгортки автинтефікації
  authAreaBlock: {
    paddingTop: 32,
    height: 489,
    // marginBottom: 0,
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  // Стиль нашого заголовок логін
  title: {
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
    // marginTop: 92,
    marginBottom: 32,
  },
  // Стиль обгортки нашого інпута
  inputWrap: {
    position: "relative",
    marginBottom: 16,
  },
  // Стиль нашого інпута
  input: {
    backgroundColor: "#F6F6F6",
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
    width: 345,
    padding: 16,
    // position: "relative",
    // marginHorizontal: 16,
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    // underlineColor: "transparent",
  },
  //
  // стиль інпута змінюється колір, коли він у фокусі
  focusedInput: {
    borderColor: "#FF6C00",
  },
  // Стиль поля натискання "показати пароль" (позиціонування)
  pressableShowPassword: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: [{ translateY: -8 }],
  },
  // Лише Стиль тексту-кнопки "показати пароль"
  showPassword: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  //  Стиль кнопки  "Залогінитись"
  button: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    height: 51,
    width: 345,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 27,
    //   marginBottom: 16,
  },
  //
  //  Стиль тексту кнопки і "Залогінитись"
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  //  Стиль клікабельної частини лінку "зареєструватися"
  linkTextWrap: {
    marginTop: 16,
  },
  //  Стиль тексту лінку "зареєструватися"
  linkText: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  //додаткова стилізація підкреслення в посиланні
  underline: {
    textDecorationLine: "underline",
  },
});
